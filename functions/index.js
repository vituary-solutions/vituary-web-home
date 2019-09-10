'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

// A valid gmail account is required.  You'll need to configure these as cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const contactEmail = functions.config().contact.email;
const recaptchaSecret = functions.config().recaptcha.secret

const mailTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: gmailEmail,
        pass: gmailPassword,
    },
});

const fireEmail = async (mailOptions) => {
    await mailTransport.sendMail(mailOptions);
    console.log(`Message sent to ${mailOptions.to}: ${mailOptions.subject}`);
};

const sendContactEmail = async (formData) => {
    const mailOptions = {
        from: gmailEmail,
        to: contactEmail,
        subject: 'New Contact Request: ' + formData.name,
        text: `A new contact request was received!\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    };

    await fireEmail(mailOptions);
};

const validateRecaptcha = async (token) => {
    if (!token) {
       throw new Error("The request was not validated with recaptcha")
    }

    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `secret=${recaptchaSecret}&response=${token}`
    })

    const json = await response.json()
    console.log(`JSON.success: ${json.success}, ${json['error-codes']}`)
    if (json.success !== true) {
      throw new Error(`reCAPTCHA verify was unsuccessful: ${json['error-codes']} (token: ${token})`)
    }
};

exports.onContactSubmitted = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader("Allow", "POST");
        return res.sendStatus(405);
    }

    const formData = req.body;
    try {
        await validateRecaptcha(formData.recaptcha)

        await sendContactEmail(formData);

        return res.sendStatus(201);
    }
    catch (ex) {
        console.error(`There was an error while sending a new contact request (${formData.email}): ${ex}`);
        return res.sendStatus(500);
    }
});

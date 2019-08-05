'use strict';

const functions = require('firebase-functions');
const nodemailer = require('nodemailer');

// A valid gmail account is required.  You'll need to configure these as cloud environment variables.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const contactEmail = functions.config().contact.email;

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
        subject: 'Contact Form Submitted: ' + formData.name,
        text: `A new contact request was received!\nName: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    };

    await fireEmail(mailOptions);
};

exports.onContactSubmitted = functions.https.onRequest(async (req, res) => {
    if (req.method !== 'POST') {
        res.setHeader("Allow", "POST");
        return res.sendStatus(405);
    }

    try {
        const formData = req.body;
    
        //here we send new data using function for sending emails
        await sendContactEmail(formData);
    
        return res.sendStatus(201);
    }
    catch (ex) {
        console.error(`There was an error while sending the email: ${ex}`);
        return res.sendStatus(500);
    }
});

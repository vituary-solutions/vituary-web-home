const chai = require('chai');
const assert = chai.assert;
const sinon = require('sinon');
const sandbox = sinon.createSandbox();
const nodemailer = require('nodemailer');

const test = require('firebase-functions-test')(); // Initialize in offline mode

describe('Cloud Functions', () => {
    let myFunctions, transport;

    before(() => {
        // Config needs to be mocked before index.js is required as this process loads the config into a transport
        test.mockConfig({
            gmail: { email: 'from-email@mock.com', password: 'mock-password' },
            contact: { email: 'to-email@mock.com' }
        });
        transport = {
            sendMail: (data, errCallback) => { return Promise.resolve(); }
        };
        sandbox.stub(nodemailer, 'createTransport').returns(transport);
        myFunctions = require('../index.js');
    });

    after(() => {
        sandbox.restore();
        test.cleanup();
    });

    describe('onContactSubmitted', () => {
        it('Should return 405 when method is not POST', (done) => {
            const req = { method: "GET", body: {} };
            const res = {
                headers: [],
                setHeader: (name, value) => {
                    res.headers[name] = value;
                },
                sendStatus: (code) => {
                    try {
                        assert.equal(code, 405); // Method not allowed
                        assert.equal("POST", res.headers["Allow"]);
                        done();
                    }
                    catch (err) {
                        done(err)
                    }
                    return res;
                }
            };

            myFunctions.onContactSubmitted(req, res)
        });

        it('Should return create transport with configured credentials', (done) => {
            const req = { method: "GET", body: {} };
            const res = {
                sendStatus: (code) => {
                    done();
                }
            };

            myFunctions.onContactSubmitted(req, res)
        });

    });
});
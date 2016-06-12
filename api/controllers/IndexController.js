/**
 * IndexController
 *
 * @description :: Server-side logic for managing Indexcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodemailer = require('nodemailer');
var Mailgun = require('mailgun-js');
var domain = 'cjwedding.fr';

module.exports = {

    /**
    * `IndexController.index()`
    */
    index: function (req, res) {
        return res.view('pages/homepage');
    },

    /**
     *
     * @param req
     * @param res
     */
    mail: function(req, res) {

        var mailgun = new Mailgun({apiKey: sails.config.mail.mailgunApiKey, domain: domain});
        
        var data = {
            from: req.body.email,
            to: sails.config.mail.recipientMail,
            subject: 'Confirmation reçu de ' + req.body.name + ' ✔',
            html: '' +
            '<b>Nouvelle confirmation reçu de ' + req.body.name + ' :</b>' +
            '<br><br>Présent pour : ' + req.body.events + '' +
            '<br>Nombre : ' + req.body.guests + '' +
            '<br>Infos. comp. : ' + req.body.message + '' +
            '<br><br>Via : ' + req.body.email
        };

        // Confirm email to send to guest
        var callbackMail = {
            from: sails.config.mail.contactMail,
            to: req.body.email,
            subject: 'Confirmation bien envoyée ✔',
            html: '' +
            'Merci pour votre confirmation'
        };

        // send mail with defined transport object
        mailgun.messages().send(data, function (err, body) {
            if(err){
                return res.serverError(err);
            }

            // ignore error on this mail
            mailgun.messages().send(callbackMail);

            return res.ok('Confirmation envoyée');
        });
    }

};


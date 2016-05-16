/**
 * IndexController
 *
 * @description :: Server-side logic for managing Indexcontrollers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var nodemailer = require('nodemailer');
var sendmailTransport = require('nodemailer-sendmail-transport');

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

        var transporter = nodemailer.createTransport(sendmailTransport({

        }));
        // var transporter = nodemailer.createTransport('smtps://' + sails.config.gmailSmtpUsername + '%40gmail.com:' + sails.config.gmailSmtpPassword + '@smtp.gmail.com');
        var from = '"cjwedding.fr 🐴" <bret.maxime@gmail.com>';

        // Email to get
        var mailOptions = {
            from: from,
            to: sails.config.contactMail,
            subject: 'Confirmation reçu de ' + req.body.name + '✔',
            html: '' +
            '<b>Nouvelle confirmation reçu de ' + req.body.name + ' :</b>' +
            '<br><br>Présent pour : ' + req.body.events + '' +
            '<br>Nombre : ' + req.body.guests + '' +
            '<br>Infos. comp. : ' + req.body.message + '' +
            '<br><br>Via : ' + req.body.email
        };

        // Confirm email to send to guest
        var callbackMail = {
            from: from,
            to: req.body.email,
            subject: 'Confirmation bien envoyée ✔',
            html: '<b>Merci pour votre confirmation</b>'
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function(error, info){
            if(error){
                return res.serverError(error);
            }

            // ignore error on this mail
            transporter.sendMail(callbackMail);

            return res.ok('Confirmation envoyée');
        });
    }

};


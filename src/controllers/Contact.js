const nodemailer = require('nodemailer');

module.exports = {
    post: async(req, res) => {
        const {email, content, title} = req.body;
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'phontran005@gmail.com',
                pass: 'Ahkoeptr3103?'
            }
        });

        const mailOptions = {
            from: 'eagleremlinh@gmail.com',
            to: 'phontran005@gmail.com',
            subject: title,
            text: content
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                res.json({error: "Error!"});
            } else {
                res.json('Email sent: ' + info.res);
            }
        });
    },
}
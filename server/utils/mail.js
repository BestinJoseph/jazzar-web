import nodemailer from 'nodemailer'

const sendEmail = async (mail) => {
    console.log(mail)

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        },
        secure:false,
        requireTLC:true,
    })

    const email = {
        from: mail.email,
        to: "bestin@mojtco.com",
        subject: mail.subject,
        html: `<b>${mail.message}</b>`
    }

    transporter.sendMail(email)
}

export default sendEmail

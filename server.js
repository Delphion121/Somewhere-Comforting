const express = require('express');
const app = express();

const nodemailer = require("nodemailer");

const PORT = process.env.PORT || 5000;

app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/public/contact.html')
})

app.post('/', (req, res)=>{
    console.log(req.body)

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            // REMEMBER TO STORE IN ENVIRONMENT VARIABLE LATER
            user: 'mddkelp@gmail.com',
            pass: 'hjuzzxhmczangtdq'
        }
    })

    const mailOptions = {
        from: req.body.email,
        to: 'mddkelp@gmail.com',
        text: req.body.message
    }

    transporter.sendMail(mailOptions, (error, info)=>{
        if(error){
            console.log(error);
            res.send('error');
        }else{
            console.log('email sent')
            res.send('success')
        }
    })
})

app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})

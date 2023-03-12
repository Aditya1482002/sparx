const nodemailer=require('nodemailer');

const sendMail=async (email,msg)=>{
    let testAccount=await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'aurelie71@ethereal.email',
            pass: 'TZBBbzAggygn4vN1fv'
        }
    });

    let mailDetails = {
        from: '112ak.ak7@gmail.com',
        to: email,
        subject: 'Success form submitted',
        text: msg
    };

    let info=await transporter.sendMail(mailDetails);
    // res.json(info);
}

module.exports=sendMail;
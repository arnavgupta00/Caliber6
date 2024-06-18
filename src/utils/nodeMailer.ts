"use server";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

export default async function sendEmail(
  from: string,
  subject: string,
  text: string,
  fullName: string,
  mobile: string
) {
  const html = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${subject}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #87A7FF; /* Foreground color */
            background-color: #181818; /* Background color */
            margin: 0;
            padding: 0;
            height: 100vh; /* Set the height to 100% viewport height */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            max-width: 600px;
            padding: 20px;
            border: 1px solid #87A7FF; /* Accent color for border */
            border-radius: 5px;
            background-color: #181818; /* Background color */
        }
        h1 {
            color: #87A7FF; /* Accent color */
        }
            h2 {
            color: #87A7FF; /* Accent color */
        }
        p {
            margin: 10px 0;
            color: #87A7FF; /* Accent color */
        }
        .field {
            font-weight: bold;
        }
        .value {
            margin-left: 10px;
        }
        .logo {
            max-width: 200px;
            margin-bottom: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Caliber6</h1>
        <h2>${subject}</h2>
        <p><span class="field">Full Name:</span> <span class="value">${fullName}</span></p>
        <p><span class="field">Email:</span> <span class="value">${from}</span></p>
        <p><span class="field">Mobile:</span> <span class="value">${mobile}</span></p>
        <p><span class="field">Description:</span></p>
        <p class="value">${text}</p>
    </div>
</body>
</html>

`;

  const mailOptions = {
    from: from,
    to: process.env.EMAIL,
    subject: subject,
    html: html,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
}

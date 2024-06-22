import nodemailer from "nodemailer";

import { NextResponse, NextRequest } from "next/server";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587, // You can also use port 465 for SSL
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export async function POST(req: NextRequest) {
  const { from, subject, text, fullName, mobile } = await req.json();

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
            color: #000000; /* Foreground color */
            background-color: #ffffff; /* Background color */
            margin: 0;
            padding: 0;
            height: 100vh; /* Set the height to 100% viewport height */
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            padding: 20px;
            
            background-color: #ffffff; /* Background color */
        }
        h1 {
            color: #000000; /* Accent color */
        }
            h2 {
            color: #000000; /* Accent color */
        }
        p {
            margin: 10px 0;
            color: #000000; /* Accent color */
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

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}

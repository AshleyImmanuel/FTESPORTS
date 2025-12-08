import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, mobile, message } = body;

    // Validate required fields
    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Validate mobile
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(mobile)) {
      return NextResponse.json(
        { success: false, error: 'Invalid mobile number (10–15 digits)' },
        { status: 400 }
      );
    }

    // Save record in PostgreSQL
    const contact = await prisma.contact.create({
      data: { name, email, mobile, message },
    });

    // Configure Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email template (emojis kept here only, because HTML rendering is safe)
    const emailHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: 'Montserrat', Arial, sans-serif;
              background-color: #0a0a0a;
              color: #ffffff;
            }
            .container {
              max-width: 600px;
              margin: auto;
              background-color: #050505;
              border: 2px solid #00c701;
              border-radius: 8px;
              overflow: hidden;
            }
            .header {
              background: linear-gradient(135deg, #00c701, #008f01);
              padding: 30px;
              text-align: center;
            }
            .header h1 {
              font-family: 'Orbitron', sans-serif;
              margin: 0;
              font-size: 28px;
              color: #050505;
              text-transform: uppercase;
            }
            .content {
              padding: 30px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #1a1a1a;
              border-left: 4px solid #00c701;
              border-radius: 4px;
            }
            .label {
              font-size: 12px;
              color: #00c701;
              text-transform: uppercase;
              font-weight: bold;
              margin-bottom: 6px;
            }
            .value {
              font-size: 16px;
              color: #ffffff;
            }
            .footer {
              padding: 20px;
              text-align: center;
              background-color: #0a0a0a;
              color: #888888;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>NEW CONTACT ALERT</h1>
            </div>

            <div class="content">
              <div class="field">
                <div class="label">Codename</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">Email</div>
                <div class="value">${email}</div>
              </div>
              <div class="field">
                <div class="label">Mobile</div>
                <div class="value">${mobile}</div>
              </div>
              <div class="field">
                <div class="label">Message</div>
                <div class="value">${message}</div>
              </div>
              <div class="field">
                <div class="label">Timestamp</div>
                <div class="value">
                  ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                </div>
              </div>
            </div>

            <div class="footer">
              FINAL TOUCH ESPORTS | #WeFinishWhatWeStart<br/>
              Automated message from FTZ Comms Array
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email if credentials exist
    if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
      try {
        await transporter.sendMail({
          from: `"FTZ Comms" <${process.env.EMAIL_USER}>`,
          to: process.env.EMAIL_TO || process.env.EMAIL_USER,
          subject: `New Contact: ${name}`,
          html: emailHTML,
        });
      } catch (emailError) {
        console.error('Email sending failed:', emailError);
      }
    }

    return NextResponse.json(
      { success: true, message: 'Contact submitted successfully', data: contact },
      { status: 201 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// app/api/contact/route.js
import { NextResponse } from 'next/server';
import prisma from '@/lib/db';
import nodemailer from 'nodemailer';

// Make sure this runs on Node.js (not Edge) on Vercel
export const runtime = 'nodejs';
// Tell Next it’s always dynamic, so it doesn’t try to pre-generate anything
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, mobile, message } = body;

    // Required fields
    if (!name || !email || !mobile || !message) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    // Mobile validation
    const mobileRegex = /^[0-9]{10,15}$/;
    if (!mobileRegex.test(mobile)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid mobile number (10-15 digits)' },
        { status: 400 }
      );
    }

    // 1) Save to Postgres via Prisma
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        mobile,
        message,
      },
    });

    // 2) Try to send email (but never crash if it fails)
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const EMAIL_TO = process.env.EMAIL_TO || EMAIL_USER;

    if (EMAIL_USER && EMAIL_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: EMAIL_USER,
            pass: EMAIL_PASS,
          },
        });

        const emailHTML = `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charSet="UTF-8" />
              <style>
                body {
                  font-family: 'Montserrat', Arial, sans-serif;
                  background-color: #0a0a0a;
                  color: #ffffff;
                  margin: 0;
                  padding: 0;
                }
                .container {
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #050505;
                  border: 2px solid #00c701;
                  border-radius: 8px;
                  overflow: hidden;
                }
                .header {
                  background: linear-gradient(135deg, #00c701 0%, #008f01 100%);
                  padding: 30px;
                  text-align: center;
                }
                .header h1 {
                  margin: 0;
                  font-family: 'Orbitron', sans-serif;
                  font-size: 28px;
                  color: #050505;
                  text-transform: uppercase;
                  letter-spacing: 2px;
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
                .field-label {
                  font-size: 12px;
                  color: #00c701;
                  text-transform: uppercase;
                  letter-spacing: 1px;
                  margin-bottom: 5px;
                  font-weight: bold;
                }
                .field-value {
                  font-size: 16px;
                  color: #ffffff;
                  word-wrap: break-word;
                }
                .footer {
                  padding: 20px;
                  text-align: center;
                  background-color: #0a0a0a;
                  border-top: 1px solid #00c701;
                  font-size: 12px;
                  color: #888888;
                }
                .badge {
                  display: inline-block;
                  background-color: #00c701;
                  color: #050505;
                  padding: 5px 15px;
                  border-radius: 20px;
                  font-size: 11px;
                  font-weight: bold;
                  margin-top: 10px;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <h1>NEW CONTACT ALERT</h1>
                  <div class="badge">COMMS ARRAY</div>
                </div>
                <div class="content">
                  <div class="field">
                    <div class="field-label">Codename</div>
                    <div class="field-value">${name}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Email</div>
                    <div class="field-value">${email}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Mobile</div>
                    <div class="field-value">${mobile}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Mission Brief</div>
                    <div class="field-value">${message}</div>
                  </div>
                  <div class="field">
                    <div class="field-label">Timestamp</div>
                    <div class="field-value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>FINAL TOUCH ESPORTS | #WeFinishWhatWeStart</p>
                  <p>This is an automated message from the FTZ Comms Array</p>
                </div>
              </div>
            </body>
          </html>
        `;

        await transporter.sendMail({
          from: `"FTZ Comms Array" <${EMAIL_USER}>`,
          to: EMAIL_TO,
          subject: `New Contact from ${name} | FTZ Comms Array`,
          html: emailHTML,
        });
      } catch (emailError) {
        // important: NEVER crash build or API if email fails
        console.error('Email sending failed:', emailError);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Contact submitted successfully',
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact API Error:', error);

    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

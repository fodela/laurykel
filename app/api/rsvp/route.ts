import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, questions } = body;

    // Validate required fields
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Verify transporter configuration
    await transporter.verify();

    // Send email to rsvp@laurykel.com
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || `"Laurykel Wedding RSVP" <${process.env.SMTP_USER}>`,
      to: 'rsvp@laurykel.com',
      replyTo: email,
      subject: `New RSVP from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
                line-height: 1.6;
                color: #333;
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
              }
              .header {
                background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%);
                color: #d4af37;
                padding: 30px;
                border-radius: 10px 10px 0 0;
                text-align: center;
              }
              .header h1 {
                margin: 0;
                font-size: 28px;
                font-family: Georgia, serif;
              }
              .content {
                background: #ffffff;
                border: 1px solid #e5e7eb;
                border-top: none;
                padding: 30px;
                border-radius: 0 0 10px 10px;
              }
              .field {
                margin-bottom: 20px;
                padding-bottom: 20px;
                border-bottom: 1px solid #f3f4f6;
              }
              .field:last-child {
                border-bottom: none;
              }
              .label {
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 1px;
                color: #6b7280;
                margin-bottom: 5px;
              }
              .value {
                font-size: 16px;
                color: #111827;
                font-weight: 500;
              }
              .questions-box {
                background: #f9fafb;
                padding: 15px;
                border-radius: 5px;
                border-left: 3px solid #d4af37;
              }
              .footer {
                margin-top: 20px;
                text-align: center;
                font-size: 12px;
                color: #9ca3af;
              }
            </style>
          </head>
          <body>
            <div class="header">
              <h1>💍 New RSVP Received</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">Someone is excited to celebrate with you!</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Full Name</div>
                <div class="value">${name}</div>
              </div>

              <div class="field">
                <div class="label">Email Address</div>
                <div class="value"><a href="mailto:${email}" style="color: #d4af37; text-decoration: none;">${email}</a></div>
              </div>

              <div class="field">
                <div class="label">Phone Number</div>
                <div class="value"><a href="tel:${phone}" style="color: #d4af37; text-decoration: none;">${phone}</a></div>
              </div>

              ${questions ? `
                <div class="field">
                  <div class="label">Questions / Message</div>
                  <div class="questions-box">${questions.replace(/\n/g, '<br>')}</div>
                </div>
              ` : ''}
            </div>
            <div class="footer">
              <p>Received on ${new Date().toLocaleString('en-US', {
                dateStyle: 'full',
                timeStyle: 'short',
                timeZone: 'UTC'
              })}</p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error('RSVP submission error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again or contact us directly.' },
      { status: 500 }
    );
  }
}

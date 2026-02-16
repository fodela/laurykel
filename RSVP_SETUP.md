# RSVP Email Setup Guide

This guide will help you configure SMTP settings to enable the RSVP form to send emails to `rsvp@laurykel.com`.

## Quick Setup

1. Choose your email provider (see options below)
2. Get SMTP credentials
3. Update `.env.local` with your settings
4. Restart your dev server

## Email Provider Options

### Option 1: Gmail (Recommended for Testing)

**Steps:**
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Enable 2-Step Verification (if not already enabled)
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Create a new app password for "Mail"
5. Copy the generated password

**Configuration:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
SMTP_FROM="Laurykel Wedding RSVP <your-email@gmail.com>"
```

### Option 2: Outlook/Office 365

**Steps:**
1. Use your Microsoft account email and password
2. If you have 2FA enabled, create an app password

**Configuration:**
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASSWORD=your-password
SMTP_FROM="Laurykel Wedding RSVP <your-email@outlook.com>"
```

### Option 3: Custom Domain / cPanel

**Steps:**
1. Log into your hosting control panel (cPanel)
2. Create an email account (e.g., noreply@laurykel.com)
3. Find SMTP settings in your hosting documentation

**Configuration:**
```env
SMTP_HOST=mail.laurykel.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=noreply@laurykel.com
SMTP_PASSWORD=your-email-password
SMTP_FROM="Laurykel Wedding RSVP <noreply@laurykel.com>"
```

### Option 4: SendGrid SMTP

**Steps:**
1. Sign up at [SendGrid](https://sendgrid.com/)
2. Create an API key in Settings → API Keys
3. Use "apikey" as username and your API key as password

**Configuration:**
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
SMTP_FROM="Laurykel Wedding RSVP <verified-sender@laurykel.com>"
```

## Setup Instructions

### 1. Local Development

Edit `.env.local` in your project root:

```bash
# Open the file
nano .env.local

# Or use your preferred editor
code .env.local
```

Add your SMTP settings based on your chosen provider above.

### 2. Cloudflare Pages Deployment

1. Go to your Cloudflare Pages dashboard
2. Select your project
3. Go to **Settings** → **Environment Variables**
4. Add each variable:
   - `SMTP_HOST`
   - `SMTP_PORT`
   - `SMTP_SECURE`
   - `SMTP_USER`
   - `SMTP_PASSWORD`
   - `SMTP_FROM`
5. Save and redeploy

### 3. Testing

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to your RSVP section
3. Fill out the form with test data
4. Check `rsvp@laurykel.com` for the email

## Troubleshooting

### Error: "SMTP connection failed"
- Check that your SMTP credentials are correct
- Verify your email provider allows SMTP access
- For Gmail, ensure you're using an App Password (not your regular password)

### Error: "Authentication failed"
- Double-check your username and password
- Ensure there are no extra spaces in `.env.local`
- For Gmail, make sure 2-Step Verification is enabled before creating App Password

### Emails going to spam
- Use a verified domain email (e.g., noreply@laurykel.com)
- Consider using a transactional email service (SendGrid, Mailgun)
- Add SPF and DKIM records to your domain

### Port issues
- Port 587 (TLS) - Most common, works with most providers
- Port 465 (SSL) - Use with `SMTP_SECURE=true`
- Port 25 - May be blocked by some hosting providers

## Security Best Practices

1. **Never commit `.env.local` to Git** - It's already in `.gitignore`
2. **Use App Passwords** - Don't use your main email password
3. **Rotate credentials** - Change passwords periodically
4. **Limit permissions** - Use email accounts specifically for sending

## Support

If you need help:
1. Check your email provider's SMTP documentation
2. Verify all environment variables are set correctly
3. Check server logs for detailed error messages

## What Happens When Someone RSVPs

1. User fills out the form (name, email, phone, questions)
2. Form submits to `/api/rsvp` endpoint
3. Server connects to SMTP server using your credentials
4. Beautiful HTML email is sent to `rsvp@laurykel.com`
5. You can reply directly to the guest's email (Reply-To is set automatically)
6. User sees success message with confetti 🎉

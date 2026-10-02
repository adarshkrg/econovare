const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3500;

// ── Middleware ──
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets (images, etc.) from /public
app.use('/public', express.static(path.join(__dirname, 'public')));

// ── Page Routes ──
const pages = {
  '/':            'index.html',
  '/about':       'pages/about.html',
  '/geothermal':  'pages/geothermal.html',
  '/connect':     'pages/connect.html',
  '/offerings':   'pages/offerings.html',
};

Object.entries(pages).forEach(([route, file]) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(__dirname, file));
  });
});

// ── API: Contact Form ──
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, organization, service, message } = req.body;

  // Basic validation
  if (!name || !email || !phone || !message) {
    return res.status(400).json({ ok: false, error: 'Required fields missing.' });
  }

  // ── Nodemailer transporter ──
  // NOTE: Replace with real SMTP credentials or use .env
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER || 'info.econovare@gmail.com',
      pass: process.env.MAIL_PASS || 'YOUR_APP_PASSWORD',
    },
  });

  const mailOptions = {
    from: `"EcoNova Website" <${process.env.MAIL_USER || 'info.econovare@gmail.com'}>`,
    to: 'info.econovare@gmail.com',
    replyTo: email,
    subject: `New Inquiry: ${service || 'General'} — ${name}`,
    html: `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;border:1px solid #D4E3C5;border-radius:12px;">
        <div style="background:linear-gradient(135deg,#1E3A2B,#17325E);border-radius:8px;padding:24px;color:#fff;margin-bottom:24px;">
          <h2 style="margin:0;font-size:22px;">New Consultation Request</h2>
          <p style="margin:6px 0 0;opacity:0.8;font-size:14px;">EcoNova Resources &amp; Energy — Website Inquiry</p>
        </div>
        <table style="width:100%;border-collapse:collapse;font-size:15px;">
          <tr><td style="padding:10px 0;color:#718096;width:160px;vertical-align:top;font-weight:700;">Full Name</td><td style="padding:10px 0;color:#1a1a1a;">${name}</td></tr>
          <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Email</td><td style="padding:10px 0;color:#1a1a1a;"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Phone</td><td style="padding:10px 0;color:#1a1a1a;">${phone}</td></tr>
          <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Organization</td><td style="padding:10px 0;color:#1a1a1a;">${organization || '—'}</td></tr>
          <tr><td style="padding:10px 0;color:#718096;font-weight:700;">Interest Area</td><td style="padding:10px 0;color:#0E7C86;font-weight:700;">${service}</td></tr>
          <tr><td style="padding:10px 0;color:#718096;font-weight:700;vertical-align:top;">Message</td><td style="padding:10px 0;color:#1a1a1a;line-height:1.6;">${message.replace(/\n/g, '<br>')}</td></tr>
        </table>
        <div style="margin-top:24px;padding:16px;background:#F7FDF0;border-radius:8px;font-size:13px;color:#4a5568;">
          Submitted on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ ok: true, message: 'Your inquiry has been sent successfully!' });
  } catch (err) {
    console.error('Mail error:', err.message);
    // Still respond OK to client — form submission logged server-side
    console.log('📩 Contact form submission (mail failed):', { name, email, phone, organization, service, message });
    res.json({ ok: true, message: 'Inquiry received! We will contact you shortly.' });
  }
});

// ── Health check ──
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', server: 'EcoNova Backend', time: new Date().toISOString() });
});

// ── 404 ──
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n🌱 EcoNova Backend running at: http://localhost:${PORT}`);
  console.log(`   Pages: / | /about | /geothermal | /connect | /offerings`);
  console.log(`   API:   POST /api/contact\n`);
});

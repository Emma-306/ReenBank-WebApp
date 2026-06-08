// eslint-disable-next-line no-undef
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // eslint-disable-next-line no-undef
    user: process.env.EMAIL_USER,
    // eslint-disable-next-line no-undef
    pass: process.env.EMAIL_PASS,
  },
});

async function sendOtpEmail(toEmail, otp, type = 'register') {
  const subject =
    type === 'reset' ? 'Reen Bank — Password Reset OTP' : 'Reen Bank — Email Verification OTP';

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 480px; margin: auto; padding: 32px; border: 1px solid #e5e7eb; border-radius: 12px;">
      <h2 style="color: #16a34a; margin-bottom: 8px;">Reen Bank</h2>
      <p style="color: #374151; font-size: 16px;">
        ${type === 'reset' ? 'You requested a password reset.' : 'Please verify your email address.'}
        Use the OTP below. It expires in <strong>10 minutes</strong>.
      </p>
      <div style="margin: 32px 0; text-align: center;">
        <span style="display: inline-block; letter-spacing: 12px; font-size: 36px; font-weight: bold; color: #16a34a; background: #f0fdf4; padding: 16px 24px; border-radius: 8px;">
          ${otp}
        </span>
      </div>
      <p style="color: #6b7280; font-size: 13px;">
        If you did not request this, please ignore this email.
      </p>
    </div>
  `;

  await transporter.sendMail({
    // eslint-disable-next-line no-undef
    from: `"Reen Bank" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject,
    html,
  });
}

// eslint-disable-next-line no-undef
module.exports = { sendOtpEmail };

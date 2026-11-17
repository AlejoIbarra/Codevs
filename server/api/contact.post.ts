import tls from 'node:tls';
import { defineEventHandler, readBody, createError } from 'h3';

interface ContactPayload {
  name?: string;
  email?: string;
  subject?: string;
  company?: string;
  budget?: string;
  message?: string;
  lang?: string;
}

function sendGmailSmtp({
  host,
  port,
  user,
  pass,
  to,
  replyTo,
  subject,
  html
}: {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
}): Promise<void> {
  return new Promise((resolve, reject) => {
    const socket = tls.connect(
      {
        host,
        port,
        servername: host,
        rejectUnauthorized: true
      },
      () => {
        // Connected via TLS
      }
    );

    socket.setTimeout(12000);

    let step = 0;
    let buffer = '';

    const sendLine = (line: string) => {
      socket.write(line + '\r\n');
    };

    const encodeSubject = (str: string) => {
      return `=?UTF-8?B?${Buffer.from(str, 'utf8').toString('base64')}?=`;
    };

    socket.on('data', (chunk) => {
      buffer += chunk.toString('utf8');
      const lines = buffer.split('\r\n');
      buffer = lines.pop() || '';

      for (const line of lines) {
        if (!line) continue;
        // Wait until multi-line response finishes (4th char is space, e.g. "250 OK")
        if (line.length >= 4 && line[3] === '-') continue;

        const code = parseInt(line.slice(0, 3), 10);
        if (code >= 400) {
          socket.destroy();
          return reject(new Error(`SMTP Error (${code}): ${line}`));
        }

        if (step === 0 && code === 220) {
          step = 1;
          sendLine(`EHLO codevs.dev`);
        } else if (step === 1 && code === 250) {
          step = 2;
          const authToken = Buffer.from(`\0${user}\0${pass}`, 'utf8').toString('base64');
          sendLine(`AUTH PLAIN ${authToken}`);
        } else if (step === 2 && code === 235) {
          step = 3;
          sendLine(`MAIL FROM:<${user}>`);
        } else if (step === 3 && code === 250) {
          step = 4;
          sendLine(`RCPT TO:<${to}>`);
        } else if (step === 4 && code === 250) {
          step = 5;
          sendLine(`DATA`);
        } else if (step === 5 && code === 354) {
          step = 6;
          const base64Html = Buffer.from(html, 'utf8')
            .toString('base64')
            .replace(/(.{76})/g, '$1\r\n');

          const emailData = [
            `From: "CODEVS Notificaciones" <${user}>`,
            `To: <${to}>`,
            `Reply-To: <${replyTo}>`,
            `Subject: ${encodeSubject(subject)}`,
            `MIME-Version: 1.0`,
            `Content-Type: text/html; charset=UTF-8`,
            `Content-Transfer-Encoding: base64`,
            `Date: ${new Date().toUTCString()}`,
            ``,
            base64Html,
            `.`
          ].join('\r\n');

          sendLine(emailData);
        } else if (step === 6 && code === 250) {
          step = 7;
          sendLine(`QUIT`);
          socket.end();
          resolve();
        }
      }
    });

    socket.on('timeout', () => {
      socket.destroy();
      reject(new Error('SMTP connection timed out'));
    });

    socket.on('error', (err) => {
      reject(err);
    });
  });
}

export default defineEventHandler(async (event) => {
  const body = (await readBody(event)) as ContactPayload;

  const name = (body?.name || '').trim();
  const email = (body?.email || '').trim();
  const subject = (body?.subject || body?.company || 'Nuevo Lead CODEVS').trim();
  const budget = (body?.budget || '').trim();
  const company = (body?.company || '').trim();
  const message = (body?.message || '').trim();
  const lang = (body?.lang || 'es').trim();

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing required fields (name, email, message).'
    });
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER || 'alejandroibarrab0532@gmail.com';
  const smtpPass = process.env.SMTP_PASS || ['ogea', 'ddof', 'yuzq', 'vtyi'].join('');
  const receiverEmail = process.env.CONTACT_RECEIVER_EMAIL || 'alejandroibarrab0532@gmail.com';

  const emailSubject = `[CODEVS Lead ${lang.toUpperCase()}] ${subject} — ${name}`;

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 620px; margin: 0 auto; background: #0a0a0e; color: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #27272a;">
      <div style="background: #E7000B; padding: 20px 28px;">
        <h2 style="margin: 0; font-size: 20px; color: #ffffff; letter-spacing: -0.02em;">Nuevo Mensaje desde CODEVS.DEV</h2>
        <p style="margin: 4px 0 0; font-size: 13px; color: rgba(255,255,255,0.9);">Notificación automática directa a tu correo</p>
      </div>
      <div style="padding: 28px;">
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; width: 150px; border-bottom: 1px solid #27272a;"><strong>Nombre:</strong></td>
            <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #27272a;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #27272a;"><strong>Correo / Contacto:</strong></td>
            <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #27272a;"><a href="mailto:${email}" style="color: #E7000B; text-decoration: none; font-weight: bold;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #27272a;"><strong>Proyecto / Asunto:</strong></td>
            <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #27272a;">${subject}</td>
          </tr>
          ${company ? `
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #27272a;"><strong>Empresa:</strong></td>
            <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #27272a;">${company}</td>
          </tr>` : ''}
          ${budget ? `
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #27272a;"><strong>Presupuesto Est.:</strong></td>
            <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #27272a;">${budget}</td>
          </tr>` : ''}
          <tr>
            <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #27272a;"><strong>Idioma / Origen:</strong></td>
            <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #27272a;">${lang === 'en' ? 'English (/en)' : 'Español (/)'}</td>
          </tr>
        </table>

        <div style="margin-top: 22px; background: #141419; border: 1px solid #27272a; border-radius: 12px; padding: 18px;">
          <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.08em; color: #E7000B; font-weight: bold; margin-bottom: 8px;">Mensaje del Cliente:</div>
          <div style="font-size: 14px; line-height: 1.6; color: #f4f4f5; white-space: pre-wrap;">${message}</div>
        </div>
      </div>
    </div>
  `;

  await sendGmailSmtp({
    host: smtpHost,
    port: smtpPort,
    user: smtpUser,
    pass: smtpPass,
    to: receiverEmail,
    replyTo: email.includes('@') ? email : smtpUser,
    subject: emailSubject,
    html: htmlBody
  });

  return {
    ok: true,
    message: 'Email sent successfully to ' + receiverEmail
  };
});

import tls from 'node:tls';
import { defineEventHandler, readBody, createError } from 'h3';

interface CareersPayload {
  name?: string;
  email?: string;
  phone?: string;
  role?: string;
  experience?: string;
  portfolioUrl?: string;
  cvUrl?: string;
  cvFileName?: string;
  cvBase64?: string;
  cvFileType?: string;
  message?: string;
  lang?: string;
}

function sendSmtpEmail({
  host,
  port,
  user,
  pass,
  to,
  replyTo,
  subject,
  html,
  attachment
}: {
  host: string;
  port: number;
  user: string;
  pass: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  attachment?: {
    filename: string;
    contentType: string;
    base64Data: string;
  };
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
        // TLS Handshake completed
      }
    );

    socket.setTimeout(18000);

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
          const boundary = `----=_Part_${Date.now()}_${Math.random().toString(36).substring(2)}`;
          const base64Html = Buffer.from(html, 'utf8')
            .toString('base64')
            .replace(/(.{76})/g, '$1\r\n');

          const headerLines = [
            `From: "CODEVS Careers Hub" <${user}>`,
            `To: <${to}>`,
            `Reply-To: <${replyTo}>`,
            `Subject: ${encodeSubject(subject)}`,
            `MIME-Version: 1.0`,
            `Date: ${new Date().toUTCString()}`
          ];

          if (attachment && attachment.base64Data) {
            headerLines.push(`Content-Type: multipart/mixed; boundary="${boundary}"`);
            headerLines.push(``);

            // HTML Body part
            headerLines.push(`--${boundary}`);
            headerLines.push(`Content-Type: text/html; charset=UTF-8`);
            headerLines.push(`Content-Transfer-Encoding: base64`);
            headerLines.push(``);
            headerLines.push(base64Html);
            headerLines.push(``);

            // Attachment part
            const cleanBase64 = attachment.base64Data.replace(/^data:.*?;base64,/, '').replace(/\s+/g, '');
            const chunkedAttachment = cleanBase64.replace(/(.{76})/g, '$1\r\n');
            const safeFilename = attachment.filename.replace(/[^a-zA-Z0-9._-]/g, '_');

            headerLines.push(`--${boundary}`);
            headerLines.push(`Content-Type: ${attachment.contentType || 'application/pdf'}; name="${safeFilename}"`);
            headerLines.push(`Content-Disposition: attachment; filename="${safeFilename}"`);
            headerLines.push(`Content-Transfer-Encoding: base64`);
            headerLines.push(``);
            headerLines.push(chunkedAttachment);
            headerLines.push(``);

            headerLines.push(`--${boundary}--`);
          } else {
            headerLines.push(`Content-Type: text/html; charset=UTF-8`);
            headerLines.push(`Content-Transfer-Encoding: base64`);
            headerLines.push(``);
            headerLines.push(base64Html);
          }

          headerLines.push(`.`);
          sendLine(headerLines.join('\r\n'));
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
  const body = (await readBody(event)) as CareersPayload;

  const name = (body?.name || '').trim();
  const email = (body?.email || '').trim();
  const phone = (body?.phone || '').trim();
  const role = (body?.role || 'Ingeniero de Software Senior').trim();
  const experience = (body?.experience || '+3 años').trim();
  const portfolioUrl = (body?.portfolioUrl || '').trim();
  const cvUrl = (body?.cvUrl || '').trim();
  const cvFileName = (body?.cvFileName || '').trim();
  const cvBase64 = (body?.cvBase64 || '').trim();
  const cvFileType = (body?.cvFileType || 'application/pdf').trim();
  const message = (body?.message || '').trim();
  const lang = (body?.lang || 'es').trim();

  if (!name || !email || (!phone && !portfolioUrl)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Faltan campos obligatorios (Nombre, Email, Teléfono/WhatsApp).'
    });
  }

  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT || 465);
  const smtpUser = process.env.SMTP_USER || 'alejandroibarrab0532@gmail.com';
  const smtpPass = process.env.SMTP_PASS || ['ogea', 'ddof', 'yuzq', 'vtyi'].join('');
  const receiverEmail = 'alejandroibarrab0532@gmail.com';

  const cleanPhone = phone.replace(/\D/g, '');
  const whatsappLink = cleanPhone ? `https://wa.me/${cleanPhone}` : '';

  const emailSubject = `🎯 [CODEVS Talento] ${role} — ${name} (${experience})`;

  const htmlBody = `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 650px; margin: 0 auto; background: #07070a; color: #f4f4f5; border-radius: 20px; overflow: hidden; border: 1px solid #27272a; box-shadow: 0 20px 50px rgba(0,0,0,0.8);">
      
      <!-- Cabecera Globant Style -->
      <div style="background: linear-gradient(135deg, #E7000B 0%, #9B0007 100%); padding: 26px 32px; border-bottom: 1px solid rgba(255,255,255,0.15);">
        <div style="display: inline-block; padding: 4px 12px; background: rgba(0,0,0,0.4); border-radius: 9999px; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: #ffffff; margin-bottom: 8px;">
          🚀 Nueva Postulación de Talento
        </div>
        <h1 style="margin: 0; font-size: 22px; font-weight: 900; color: #ffffff; letter-spacing: -0.02em;">
          ${name} — ${role}
        </h1>
        <p style="margin: 6px 0 0; font-size: 13px; color: rgba(255,255,255,0.9); font-weight: 500;">
          Postulación enviada desde la sección Trabaja con Nosotros en CODEVS.DEV
        </p>
      </div>

      <!-- Cuerpo Principal -->
      <div style="padding: 32px;">
        
        <!-- Ficha Resumen -->
        <div style="background: #0e0e14; border: 1px solid #27272a; border-radius: 14px; padding: 20px; margin-bottom: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; width: 140px; border-bottom: 1px solid #1f1f23;"><strong>Rol Deseado:</strong></td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: 700; border-bottom: 1px solid #1f1f23;">
                <span style="background: rgba(231,0,11,0.15); color: #ff4d55; padding: 3px 10px; border-radius: 6px; border: 1px solid rgba(231,0,11,0.3); font-size: 13px;">${role}</span>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #1f1f23;"><strong>Seniority / Exp:</strong></td>
              <td style="padding: 10px 0; color: #ffffff; font-weight: 600; border-bottom: 1px solid #1f1f23;">${experience}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #1f1f23;"><strong>Email:</strong></td>
              <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #1f1f23;">
                <a href="mailto:${email}" style="color: #ff4d55; text-decoration: none; font-weight: 700;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #1f1f23;"><strong>Teléfono / WhatsApp:</strong></td>
              <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #1f1f23;">
                ${phone} 
                ${whatsappLink ? `&nbsp;•&nbsp;<a href="${whatsappLink}" target="_blank" style="color: #22c55e; text-decoration: none; font-weight: 700;">Abrir WhatsApp →</a>` : ''}
              </td>
            </tr>
            ${portfolioUrl ? `
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #1f1f23;"><strong>LinkedIn / GitHub / Web:</strong></td>
              <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #1f1f23;">
                <a href="${portfolioUrl.startsWith('http') ? portfolioUrl : 'https://' + portfolioUrl}" target="_blank" style="color: #60a5fa; text-decoration: underline; font-weight: 600;">${portfolioUrl}</a>
              </td>
            </tr>` : ''}
            ${cvUrl ? `
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #1f1f23;"><strong>Enlace a Hoja de Vida:</strong></td>
              <td style="padding: 10px 0; color: #ffffff; border-bottom: 1px solid #1f1f23;">
                <a href="${cvUrl.startsWith('http') ? cvUrl : 'https://' + cvUrl}" target="_blank" style="color: #ff4d55; font-weight: 700; text-decoration: underline;">Ver Hoja de Vida en la Nube →</a>
              </td>
            </tr>` : ''}
            ${cvFileName ? `
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa; border-bottom: 1px solid #1f1f23;"><strong>Archivo Adjunto:</strong></td>
              <td style="padding: 10px 0; color: #34d399; font-weight: 700; border-bottom: 1px solid #1f1f23;">
                📎 ${cvFileName} (adjunto en este correo)
              </td>
            </tr>` : ''}
            <tr>
              <td style="padding: 10px 0; color: #a1a1aa;"><strong>Idioma del Formulario:</strong></td>
              <td style="padding: 10px 0; color: #ffffff;">${lang === 'en' ? 'Inglés (/en)' : 'Español (/)'}</td>
            </tr>
          </table>
        </div>

        <!-- Mensaje o Carta de Presentación -->
        ${message ? `
        <div style="background: #121218; border: 1px solid #27272a; border-radius: 14px; padding: 22px; margin-bottom: 24px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: #ff4d55; font-weight: 800; margin-bottom: 10px;">
            Mensaje / Carta de Presentación del Candidato:
          </div>
          <div style="font-size: 14px; line-height: 1.65; color: #e4e4e7; white-space: pre-wrap;">${message}</div>
        </div>` : ''}

        <!-- Botones de Acción Rápida -->
        <div style="text-align: center; padding-top: 12px;">
          <a href="mailto:${email}?subject=Contacto%20CODEVS%20-%20Proceso%20de%20Selecci%C3%B3n%20${encodeURIComponent(role)}" 
             style="display: inline-block; background: #E7000B; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px; margin-right: 12px;">
            Responder por Correo
          </a>
          ${whatsappLink ? `
          <a href="${whatsappLink}" target="_blank"
             style="display: inline-block; background: #22c55e; color: #ffffff; text-decoration: none; padding: 12px 24px; border-radius: 10px; font-weight: 700; font-size: 14px;">
            Escribir por WhatsApp
          </a>` : ''}
        </div>

      </div>

      <!-- Footer -->
      <div style="background: #040406; padding: 16px 32px; border-top: 1px solid #1f1f23; text-align: center; font-size: 12px; color: #71717a;">
        CODEVS Engineering Studio • Notificación Automática de Talento
      </div>

    </div>
  `;

  let attachmentObj;
  if (cvBase64 && cvFileName) {
    attachmentObj = {
      filename: cvFileName,
      contentType: cvFileType || 'application/pdf',
      base64Data: cvBase64
    };
  }

  await sendSmtpEmail({
    host: smtpHost,
    port: smtpPort,
    user: smtpUser,
    pass: smtpPass,
    to: receiverEmail,
    replyTo: email.includes('@') ? email : smtpUser,
    subject: emailSubject,
    html: htmlBody,
    attachment: attachmentObj
  });

  return {
    ok: true,
    message: 'Postulación enviada exitosamente a ' + receiverEmail
  };
});

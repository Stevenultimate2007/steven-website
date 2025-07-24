import nodemailer from "nodemailer";

export async function handler(event, context) {
  try {
    const data = JSON.parse(event.body);

    // 1. Transporter: Dein Mailserver
    const transporter = nodemailer.createTransport({
      host: "mail.cutnity.com",    // Dein SMTP-Host
      port: 465,                   // SSL-Port (meist 465)
      secure: true,
      auth: {
        user: "stevennty@cutnity.com",
        pass: process.env.MAIL_PASSWORD, // Passwort über Netlify
      },
    });

    // 2. E-Mail an dich (Website-Anfrage)
    const mailToYou = {
      from: `"Website Kontaktformular" <stevennty@cutnity.com>`,
      to: "stevennty@cutnity.com",
      subject: `Neue Anfrage von ${data.firstName} ${data.lastName}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><b>Name:</b> ${data.firstName} ${data.lastName}</p>
        <p><b>E-Mail:</b> ${data.email}</p>
        <p><b>Telefon:</b> ${data.phone}</p>
        <p><b>Paket:</b> ${data.package}</p>
        <p><b>Nachricht:</b><br/>${data.message}</p>
      `,
    };

    // 3. Bestätigungsmail an den Absender
    const mailToCustomer = {
      from: `"Cutnity" <stevennty@cutnity.com>`,
      to: data.email,
      subject: "Danke für deine Anfrage bei Cutnity!",
      html: `
        <h2>Hallo ${data.firstName},</h2>
        <p>vielen Dank für deine Nachricht. Wir haben deine Anfrage erhalten und melden uns in Kürze bei dir.</p>
        <p><b>Zusammenfassung deiner Angaben:</b></p>
        <ul>
          <li><b>Telefon:</b> ${data.phone}</li>
          <li><b>Ausgewähltes Paket:</b> ${data.package}</li>
        </ul>
        <p>Viele Grüße,<br/>Dein Cutnity-Team</p>
      `,
    };

    // 4. Beide Mails senden
    await transporter.sendMail(mailToYou);
    await transporter.sendMail(mailToCustomer);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "E-Mail erfolgreich gesendet" }),
    };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
}

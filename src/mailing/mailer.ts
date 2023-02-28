import * as exphbs from "express-handlebars";
import { createTransport } from "nodemailer";
import hbs from "nodemailer-express-handlebars";
import { htmlToText } from "nodemailer-html-to-text";
import Mail from "./mail";
import { Transporter } from "./types";

export default class Mailer {
  private readonly transporter: Transporter;

  constructor() {
    this.transporter = createTransport(
      {
        host: process.env.MAIL_HOST,
        port: Number(process.env.MAIL_PORT),
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
        debug: Boolean(process.env.DEBUG),
      },
      {
        from: `${process.env.MAIL_SENDER_NAME} ${process.env.MAIL_USER}`,
        replyTo: process.env.MAIL_USER,
      }
    );

    this.transporter.use("compile", htmlToText());

    if (process.env.MAIL_TEMPLATES_PATH) {
      this.transporter.use(
        "compile",
        hbs({
          viewEngine: exphbs.create({
            defaultLayout: false,
          }),
          viewPath: process.env.MAIL_TEMPLATES_PATH,
          extName: ".hbs",
        })
      );
    }
  }

  async send(mail: Mail) {
    const message = mail.send();
    return this.transporter.sendMail(message);
  }
}

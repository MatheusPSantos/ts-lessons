import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export class MailtrapMailProvider implements IMailProvider {
  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "bb56c69f1e184b",
        pass: "b7cd74403baced",
      },
    });
  }

  async sendMail(message: IMessage): Promise<void> {
    try {
      await this.transporter.sendMail({
        to: {
          name: message.to.name,
          address: message.to.email,
        },
        from: {
          name: message.from.name,
          address: message.from.email,
        },
        subject: message.subject,
        html: message.body,
      });
    } catch (error) {
      throw new Error("Method not implemented.");
    }
  }
}

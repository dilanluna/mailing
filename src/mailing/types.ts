import { HbsTransporter, TemplateOptions } from "nodemailer-express-handlebars";
import {
  SendMailOptions as NodemailerSendMailOptions,
  Transporter as NodemailerTranporter,
} from "nodemailer";

export type Transporter = NodemailerTranporter & HbsTransporter;

export type SendMailOptions = NodemailerSendMailOptions & TemplateOptions;

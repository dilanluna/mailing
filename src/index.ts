import TestMail from "./test-mail";
import Mailer from "./mailing/mailer";

async function main() {
  try {
    const mailer = new Mailer();

    let mail = new TestMail();
    await mailer.send(mail);

    console.log("Mails sent!");
  } catch (err) {
    console.error(err);
  }
}

main();

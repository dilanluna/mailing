import Mail from "./mailing/mail";
import { SendMailOptions } from "./mailing/types";

export default class TestMail implements Mail {
  send(): SendMailOptions {
    return {
      to: "jahirgarcia66@gmail.com",
      subject: "Test",
      template: "test",
      context: {
        name: "Dylan",
      },
    };
  }
}

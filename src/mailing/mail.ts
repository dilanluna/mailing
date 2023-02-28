import { SendMailOptions } from "./types";

export default interface Mail {
  send(): SendMailOptions;
}

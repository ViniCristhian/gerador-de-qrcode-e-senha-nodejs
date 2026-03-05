import prompt from "prompt";
import promptSchameQRCode from "../../prompts-schema/prompt-schema-qrcode.js";
import handle from "./handle.js";

async function createQRCode() {

    prompt.start();

    prompt.get(promptSchameQRCode, handle);
}

export default createQRCode;
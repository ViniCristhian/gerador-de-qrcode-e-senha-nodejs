import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main() {

    prompt.start();

    prompt.get(mainPrompt, async (err, choose) => {
        if (choose.select == 1) console.log("QRCODE escolhido.");
        if (choose.select == 2) console.log("PASSWORD escolhido.");
    });
}

main();
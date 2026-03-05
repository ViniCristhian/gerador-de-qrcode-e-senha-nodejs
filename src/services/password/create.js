import chalk from "chalk";
import handle from "./handle.js";

async function createPassword() {
    console.log(`${chalk.green("Senha gerada:")} ${await handle()}`);
}

export default createPassword;
import qr from "qrcode-terminal";
import chalk from "chalk";

async function handle(err, result) {

    if (err) {
        console.log(chalk.red("Erro na aplicação!"));
        return;
    }

    const isSmall = result.type == 2;

    qr.generate(result.link, { small: isSmall }, (qrcode) => {
        console.log(chalk.green("Aqui está seu QRCode:\n"));
        console.log(qrcode);
    });
}

export default handle;
import chalk from "chalk";

const promptSchameQRCode = [
    {
        name: "link",
        description: chalk.blue("Inseira o link para gerar o QRCode")
    },
    {
        name: "type",
        description: chalk.blue("Como você quer o seu QRCode (1) - imagem ou (2) - ternimal"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha somente entre 1 e 2."),
        require: true
    }
];

export default promptSchameQRCode;
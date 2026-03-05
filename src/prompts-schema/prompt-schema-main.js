import chalk from "chalk";

const promptSchemaMain = [
    {
        name: "select",
        description: chalk.blue.bold("Escolha a ferramenta ( 1 - QRCODE ou 2 - PASSWORD )"),
        pattern: /^[1-2]+$/,
        message: chalk.red("Escolha apenas entre 1 e 2"),
        require: true,
    },
];

export default promptSchemaMain;
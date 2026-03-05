import permittedCharacters from "./utils/permitted-characters.js";

async function handle() {

    let characters = await permittedCharacters();
    let password = "";

    for (let i = 0; i < process.env.PASSWORD_LEGTH; ++i) {
        let index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;
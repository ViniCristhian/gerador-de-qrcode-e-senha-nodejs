async function handle() {

    let characters = [];
    let password = "";

    if (process.env.UPPERCASE_LETTERS === "true")
        characters.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");

    if (process.env.LOWERCASE_LETTERS === 'true')
        characters.push(..."abcdefghijklmnopqrstuvwxyz");

    if (process.env.NUMBERS === "true")
        characters.push(..."0123456789");

    if (process.env.SPECIAL_CHARACTERS === "true")
        characters.push(..."!@#$%&*()_");

    for (let i = 0; i < process.env.PASSWORD_LEGTH; ++i) {
        let index = Math.floor(Math.random() * characters.length);
        password += characters[index];
    }

    return password;
}

export default handle;
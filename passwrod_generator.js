function passwordGenerator() {
    var length = 8,
        characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ",
        password = "";
    for (var i = 0, n = characters.length; i < length; ++i) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }
    return password;
}

console.log(passwordGenerator());

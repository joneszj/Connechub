module.exports = {
    encrypt: encrypt,
    decrypt: decrypt
}

var crypto = require('crypto');
var algorithm = process.env.ENCRYPTION_ALORITHM;
var password = process.env.ENCRYPTION_PASSWORD;

function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, password)
    var encrypted = cipher.update(text.toString(), 'utf8', 'hex')
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, password)
    var decrypted = decipher.update(text, 'hex', 'utf8')
    decrypted += decipher.final('utf8');
    return decrypted;
}
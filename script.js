const encrypt = (text) => text ? CryptoJS.AES.encrypt(text, "Iqbolshoh_777").toString() : "";
const decrypt = (encryptedText) => encryptedText ? CryptoJS.AES.decrypt(encryptedText, "Iqbolshoh_777").toString(CryptoJS.enc.Utf8) : "";
function processText(n) {
    let text = document.getElementById("text"),
        encrypted = document.getElementById("encrypted");
    if (n === 1) {
        encrypted.value = encrypt(text.value);
    } else {
        text.value = decrypt(encrypted.value);
    }
}
function copyText(n) {
    let copyTextarea = (n === 1) ? document.getElementById("text") : document.getElementById("encrypted");
    copyTextarea.select();
    document.execCommand("copy");
}
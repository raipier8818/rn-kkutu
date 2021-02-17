function initialize() {
    // window.rnDict
}

function copyClipboard(str) {
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
}

function getKeyword() {
    return document.querySelector('.jjo-display').textContent;
}

function copyLong() {
    var key = getKeyword();
    for (var i of rnDictLong) {
        if (i[0] == key) {
            copyClipboard(i);
            console.log(i);
            $('[id*=UserMassage]')[0].value = i;
            $('#ChotBtn').click();
            return;
        }
    }
    copyClipboard('');
}

function copyKill() {
    copyLong();
}

function main() {
    window.onkeydown = function(e) {
        if (e.key == "1") copyLong();
        else if (e.key == "2") copyKill();
        else if (e.key == "0") initialize();
    }
}

main();
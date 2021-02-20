function initialize() {
    window.rnSkip = {};
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

function copyLong(reverse) {
    var key = getKeyword();
    var key2 = getKeyword()[2];
    for (var i of rnDictLong) {
        if (reverse) i = i.split('').reverse().join('');
        if ((i[0] == key || i[0] == key2) && window.rnSkip[i] != true) {
            window.rnSkip[i] = true;
            if (reverse) i = i.split('').reverse().join('');
            console.log(i);
            $('[id*=UserMassage]')[0].value = i;
            $('#ChotBtn').click();
            return;
        }
    }
}

function copyKill(reverse) {
    var key = getKeyword()[0];
    var key2 = getKeyword()[2];
    for (var i of rnDictKill) {
        if (reverse) i = i.split('').reverse().join('');
        if ((i[0] == key || i[0] == key2) && window.rnSkip[i] != true) {
            window.rnSkip[i] = true;
            if (reverse) i = i.split('').reverse().join('');
            console.log(i);
            $('[id*=UserMassage]')[0].value = i;
            $('#ChotBtn').click();
            return;
        }
    }
    copyLong(reverse);
}

function copyEn(reverse) {
    var key = getKeyword()[0];
    for (var i of rnDictEn) {
        if (reverse) i = i.split('').reverse().join('');
        if (i[0] == key && window.rnSkip[i] != true) {
            window.rnSkip[i] = true;
            if (reverse) i = i.split('').reverse().join('');
            console.log(i);
            $('[id*=UserMassage]')[0].value = i;
            $('#ChotBtn').click();
            return;
        }
    }
}

function copykk() {
    var key = getKeyword()[0];
    var key2 = getKeyword()[2];
    for (var i of rnDictKill) {
        if ((i[0] == key || i[0] == key2) && window.rnSkip[i] != true && i.length == 3) {
            window.rnSkip[i] = true;
            console.log(i);
            $('[id*=UserMassage]')[0].value = i;
            $('#ChotBtn').click();
            return;
        }
    }
}

function main() {
    initialize();
    window.onkeydown = function(e) {
        if (e.key == "1") copyLong(0);
        else if (e.key == "2") copyKill(0);
        else if (e.key == "3") copyLong(1);
        else if (e.key == "4") copyKill(1);
        else if (e.key == "5") copyEn(0);
        else if (e.key == "6") copyEn(1);
        else if (e.key == "7") copykk();
        else if (e.key == "0") initialize();
    }
}

main();
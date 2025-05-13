document.getElementById("copy").style.display = "none";
let textinput = document.getElementById('textinput');
let share = document.getElementById('share');
let zerohaba1 = "​";
let zerohaba2 = "‌";
let zerohaba3 = "‍";
function cut() {
    document.getElementById("copy").style.display = "inline";
    let encoded = "";
    for (let i = 0; i < textinput.value.length; i++) {
        encoded = encoded + textinput.value.charCodeAt(i).toString(2);
        encoded = encoded + zerohaba3;
    }
    encoded = encoded.replaceAll("0", zerohaba1);
    encoded = encoded.replaceAll("1", zerohaba2);
    finishencoded = "https://rj45k.github.io/u?r=" + encoded + "l";
    share.innerHTML = "<a class='shareurl' target='_blank' href='https://rj45k.github.io/u?r="+encoded+"l'>https://rj45k.github.io/u?r="+encoded+"l</a>";
}
function copytext() {
    navigator.clipboard.writeText(finishencoded);
    document.getElementById("copy").style.display = "none";
}
let searchParams = new URLSearchParams(window.location.search);
if (searchParams.has("r")) {
    if (searchParams.get("r") == "") {
        window.location.replace("https://rj45k.github.io/u/");
    } else if (searchParams.get("r") == "l"){
        window.location.replace("https://rj45k.github.io/u/error.html");
    } else {
        document.title = "リダイレクト中...";
        let zerohaba1 = "​";
        let zerohaba2 = "‌";
        let zerohaba3 = "‍";
        let decoded = searchParams.get("r");
        decoded = decoded.replaceAll(zerohaba1, "0");
        decoded = decoded.replaceAll(zerohaba2, "1");
        let finishdecoded = "";
        let memory = "";
        for (let i = 0; i < decoded.length; i++) {
            if (decoded[i] == zerohaba3) {
                finishdecoded = finishdecoded + String.fromCharCode(parseInt(memory, 2));
                memory = "";
            } else {
                memory = memory + decoded[i];
            }
        }
        window.location.replace(finishdecoded);
    }
}

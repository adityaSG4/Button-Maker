function ap() {
    let bg_col = document.getElementById("bgColorInput").value;
    let f_col = document.getElementById("fontColorInput").value;
    let f_size = parseInt(document.getElementById("fontSizeInput").value);
    let f_w = parseInt(document.getElementById("fontWeightInput").value);
    let p = parseInt(document.getElementById("paddingInput").value);
    let b_r = parseInt(document.getElementById("borderRadiusInput").value);

    document.getElementById("customButton").style.backgroundColor = bg_col;
    document.getElementById("customButton").style.color = f_col;
    document.getElementById("customButton").style.fontSize = f_size + "px";
    document.getElementById("customButton").style.fontWeight = f_w;
    document.getElementById("customButton").style.padding = p + "px";
    document.getElementById("customButton").style.borderRadius = b_r + "px";
}
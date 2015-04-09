function changeStyle() {
    var paragraph = document.getElementById('text');
    if (paragraph.style.color === "blue") {
        paragraph.style.color = "red";
    } else {
        paragraph.style.color = "blue";
    }
}

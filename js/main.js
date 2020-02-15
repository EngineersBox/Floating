function showCredits() {
    let showCredits = document.getElementById("show-credits").checked;
    if (showCredits) {
        document.getElementById("creditations").style.visibility = "visible";
        document.getElementById("creditations").style.opacity = 1;
    } else {
        document.getElementById("creditations").style.opacity = 0;
        document.getElementById("creditations").style.visibility = "hidden";
    }
}
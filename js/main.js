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

function showTooltip(id, target) {
    const t = document.getElementById(target).style;
    document.getElementById(id).style.marginLeft = '0.5em';
    t.opacity = 0.9;
    t.transform = 'translateX(0em)';
}

function hideTooltip(id, target) {
    const t = document.getElementById(target).style;
    document.getElementById(id).style.marginLeft = 0;
    t.opacity = 0;
    t.transform = 'translateX(2em)';
}
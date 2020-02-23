document.querySelector('input[name=mode]').addEventListener('change', function() {
    for (const elem of Array.from(document.all)) {
        elem.classList.add('transition');
    }
    window.setTimeout(() => {
        for (const elem of Array.from(document.all)) {
            elem.classList.remove('transition');
        }
    }, 250);
    document.documentElement.setAttribute('data-theme', this.checked ? 'dark' : 'light');
});

const scrollChanged = [
    "sidebar",
    "tabs",
    "tooltip-container",
    "tooltip",
    "tab"
];

const navBarChangeDist = 600;

window.addEventListener('scroll', function() {
    const scrollPoint = window.scrollY > navBarChangeDist;
    for (const name of scrollChanged) {
        for (const elem of Array.from(document.getElementsByClassName(name + (scrollPoint ? "" : "-top")))) {
            elem.classList.remove(name + (scrollPoint ? "" : "-top"));
            elem.classList.add(name + (!scrollPoint ? "" : "-top"));
        }
    }
});

function showCredits() {
    const showCredits = document.getElementById("show-credits").checked;
    const creditations = document.getElementById("creditations").style;
    if (showCredits) {
        creditations.visibility = "visible";
        creditations.opacity = 1;
    } else {
        creditations.opacity = 0;
        creditations.visibility = "hidden";
    }
}

function tooltipDisplay(target, render) {
    const t = document.getElementById(target).style;
    const isShown = render === "show";

    t.opacity = isShown ? 0.9 : 0;
    t.transform = 'translate' + (window.scrollY > navBarChangeDist ? 'Y' : 'X') + '(' + (isShown ? 0 : 2) + 'em)';
}
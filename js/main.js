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

window.addEventListener('resize', function() {
    if (window.innerWidth >= 830) {
        return;
    }
    if (window.scrollY <= navBarChangeDist) {
        // SHOW NORMAL TABS
        return;
    }
    //SHOW BURGER MENU
});

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

function showTooltip(target) {
    const t = document.getElementById(target).style;
    t.opacity = 0.9;
    t.transform = 'translate' + (window.scrollY > navBarChangeDist ? 'Y' : 'X') + '(0em)';
}

function hideTooltip(target) {
    const t = document.getElementById(target).style;
    t.opacity = 0;
    t.transform = 'translate' + (window.scrollY > navBarChangeDist ? 'Y' : 'X') + '(2em)';
}
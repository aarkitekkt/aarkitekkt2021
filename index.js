console.log("aarkitekkt!");

// _____NAVBAR____

const toggleElements = document.getElementsByClassName("toggleEl");

// when nav element is clicked, toggle the navbar open or closed.
function toggleNav() {
    for (let i = 0; i < toggleElements.length; i++) {
        toggleElements[i].classList.toggle("open");
    }
}

const scrollLinks = document.getElementsByClassName("scrollTo");

// when a nav item is clicked scroll to corresponding section of page.
function scrollTo(toEl) {
    console.log("scrolling to " + toEl);
    document.getElementById(toEl).scrollIntoView({ behavior: "smooth" });
}

for (let i = 0; i < scrollLinks.length; i++) {
    scrollLinks[i].addEventListener("click", function () {
        let clickedLink = this.getAttribute("data-to");
        scrollTo(clickedLink);
    })
}

// Connect icon animation to scroll location and display appopriate frame given location.

const canvas = document.getElementById("iconAnimation");
const context = canvas.getContext("2d");

const currentFrame = (index, el) => (`./assets/testAnimation/ani_${el}-${index.toString().padStart(2, '0')}.png`);
const frameCount = 10;

canvas.width = 300;
canvas.height = 300;

const img = new Image();
img.src = currentFrame(1, "landing");
img.onload = function () { context.drawImage(img, 0, 0) };

const updateImage = (index, el) => {
    img.src = currentFrame(index, el);
    context.drawImage(img, 0, 0);
}

const landingEl = document.querySelector('#landing');
const devEl = document.querySelector('#dev');
const threeDEl = document.querySelector('#threeD');
const builtEl = document.querySelector('#built');
const aboutEl = document.querySelector('#about');

const sectionAnimation = (el) => {
    const elTop = el.offsetTop;
    const elHeight = el.offsetHeight;
    const scrollFraction = (scrollY - elTop) / elHeight;
    const frameIndex = Math.floor(scrollFraction * 10) + 1;

    requestAnimationFrame(() => updateImage(frameIndex, el.id));
}

// determine which page section is current based on scroll position and run header animation for that section.
window.addEventListener('scroll', () => {
    if (scrollY > landingEl.offsetTop && scrollY < (landingEl.offsetTop + landingEl.offsetHeight)) {
        sectionAnimation(landingEl);
    } else if (scrollY >= devEl.offsetTop && scrollY < (devEl.offsetTop + devEl.offsetHeight)) {
        sectionAnimation(devEl);
    } else if (scrollY >= threeDEl.offsetTop && scrollY < (threeDEl.offsetTop + threeDEl.offsetHeight)) {
        sectionAnimation(threeDEl);
    } else if (scrollY >= builtEl.offsetTop && scrollY < (builtEl.offsetTop + builtEl.offsetHeight)) {
        sectionAnimation(builtEl);
    } else if (scrollY >= aboutEl.offsetTop && scrollY < (aboutEl.offsetTop + aboutEl.offsetHeight)) {
        sectionAnimation(aboutEl);
    }
});

// fix the nav once scrolled past landing
const iconAni = document.querySelector("#iconAnimation");
const topOfIcon = iconAni.offsetTop;
const navBg = document.querySelector("#navBackground");
const topOfNav = navBg.offsetTop;
const fixNav = () => {
    if (window.scrollY >= topOfNav) {
        navBg.classList.add('fixed');
    } else { navBg.classList.remove('fixed'); }
}
const fixIcon = () => {
    if (window.scrollY >= topOfIcon) {
        iconAni.classList.add('fixed');
    } else { iconAni.classList.remove('fixed'); }
}
window.addEventListener('scroll', fixNav);
window.addEventListener('scroll', fixIcon);


// Slide in logo when scrolled past landing section.

function debounce(func, wait = 15, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const aarkitekktBtn = document.querySelector('#aarkitekktButton');

function checkSlide() {
    // slide nav logo in when scrolled past the landing section

    const isPastLanding = window.scrollY > (window.innerHeight - 20);

    if (isPastLanding) {
        aarkitekktBtn.classList.add('isVisible');
    } else {
        aarkitekktBtn.classList.remove('isVisible');
    }
}

window.addEventListener('scroll', debounce(checkSlide));

// _____DEV____

const devProjects = document.getElementsByClassName('devProject');

const logProject = (el) => { console.log(el) };
const projectImage = document.querySelector("#devImage");

for (var i = 0; i < devProjects.length; i++) {
    devProjects[i].addEventListener("click", function () {
        console.log(this.id);
        projectImage.setAttribute("src", `./assets/dev/${this.id}.png`)
        // document.getElementById("dev").scrollIntoView({ behavior: "smooth" });
    })
}

// _____3D____

// Get all buttons with class="btn" inside the container
var imgs = document.getElementsByClassName("img");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        if (current[0]) {
            var currentChild = current[0].children;
            current[0].className = current[0].className.replace(" active", "");
            currentChild[1].className = currentChild[1].className.replace(" activeDes", "");
        }
        this.className += " active";
        var child = this.children;
        child[1].className += " activeDes";
    });
}
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
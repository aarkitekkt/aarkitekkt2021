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





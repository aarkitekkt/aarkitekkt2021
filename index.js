console.log("aarkitekkt!");

// _____NAVBAR____

const navToggleBtn = document.getElementsByClassName("navToggle");
const toggleElements = document.getElementsByClassName("toggleEl");


// when nav element is clicked, toggle the navbar open or closed.
function toggleNav() {
    for (let i = 0; i < toggleElements.length; i++) {
        toggleElements[i].classList.toggle("open");
    }
}


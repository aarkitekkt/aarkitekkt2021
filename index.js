console.log("aarkitekkt!");

// _____NAVBAR____

const navToggleBtn = document.getElementsByClassName("navToggle");
const toggleElements = document.getElementsByClassName("toggleEl");

function toggleNav() {
    for (let i = 0; i < toggleElements.length; i++) {
        toggleElements[i].classList.toggle("open");
    }
}


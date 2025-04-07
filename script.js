
// Wait for the window to load to start the animation
window.addEventListener('load', function() {
    const title = document.querySelector(".chivo-text");
    const text = document.querySelector(".fade-in-text");

    // Trigger the fade-in for the smaller text after the title has fully appeared
    setTimeout(function() {
        text.classList.add("fade-in"); // Adds the fade-in effect to the smaller text
    }, 500);
});

const aboutUsSection = document.querySelector('.fade-in-linktoform');


function checkScroll() {

    const titlePosition = document.querySelector('.hero-section').getBoundingClientRect().bottom;
    
    // If the user has scrolled past the title, make the "About Us" section visible
    if (window.scrollY > titlePosition) {
        aboutUsSection.style.opacity = 1;
        aboutUsSection.style.transform = 'translateY(0)';
    }
}
// Listen for scroll events
window.addEventListener('scroll', checkScroll);

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector(".about-section");

    function revealAboutSection() {
        if (!aboutSection) return; // Prevent errors if the section is missing

        const sectionTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) { // Adjust threshold as needed
            aboutSection.classList.add("show");
            window.removeEventListener("scroll", revealAboutSection); // Remove listener after trigger
        }
    }

    window.addEventListener("scroll", revealAboutSection);
});

  

// background animations wowowowowowwowoww so cool!!
const canvas = document.getElementById("background-animation");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dots = [];
const maxDots = 50;
const connectDistance = 150; // max distance for line connections


// Super cool dots omgggg
for (let i = 0; i < maxDots; i++) {
    dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 1,
        dx: Math.random() * 1 - 0.5,
        dy: Math.random() * 1 - 0.5,
    });
}
// Animating animatingggg
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // making the dots
    dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.5)"; 
        ctx.fill();
        // moving the dots
        dot.x += dot.dx;
        dot.y += dot.dy;
        // making them bounce off edges
        if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
        if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;
    });

    // the connecting the dots with lines aka what TellMe is all about omgggg
    for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
            let dx = dots[i].x - dots[j].x;
            let dy = dots[i].y - dots[j].y;
            let distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < connectDistance) {
                ctx.beginPath();
                ctx.moveTo(dots[i].x, dots[i].y);
                ctx.lineTo(dots[j].x, dots[j].y);
                ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectDistance})`;
                ctx.lineWidth = 1;
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}
animate();
const text = "Welcome to my Portfolio";
const typing = document.getElementById("typing");

let i = 0;

function type() {

    if (i < text.length) {

        typing.innerHTML += text.charAt(i);
        i++;

        setTimeout(type, 90);

    } else {

        // Wait a little after typing completes
        setTimeout(() => {

            // Remove intro immediately (no fade)
            document.getElementById("intro").remove();

            document.body.style.overflow = "auto";

            heroAnimation();

        }, 700);

    }
}

type();

function heroAnimation() {

    const tl = gsap.timeline();

    tl.from(".signature", {
        y: -40,
        opacity: 0,
        duration: 0.8
    })

        .from(".line", {
            opacity: 0,
            x: (index) => index === 0 ? -80 : 80,
            duration: 0.8
        }, "-=0.5")

        .from(".name h1", {
            y: 120,
            opacity: 0,
            stagger: 0.15,
            duration: 1,
            ease: "power4.out"
        }, "-=0.5")

        .to(".menu-btn", {
            opacity: 1,
            visibility: "visible",
            y: -10,
            duration: 0.6,
            ease: "power3.out"
        }, "-=0.4");
}


gsap.registerPlugin(ScrollTrigger);



// About



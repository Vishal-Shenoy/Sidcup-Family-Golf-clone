const cursor = document.querySelector("#cursor");
const cursorBlur = document.querySelector("#cursor-blur");
document.addEventListener("mousemove", function (dets) {
    cursor.style.top = `${dets.y}px`;
    cursor.style.left = `${dets.x}px`;
    cursorBlur.style.top = `${dets.y - 150}px`;
    cursorBlur.style.left = `${dets.x - 150}px`;

});


document.querySelectorAll("#nav h4").forEach(function (elem) {
    elem.addEventListener("mouseenter", function (dets) {
        cursor.style.scale = 2;
        cursor.style.border = "1px solid #fff";
        cursor.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function (dets) {
        cursor.style.scale = 1;
        cursor.style.border = "0px";
        cursor.style.backgroundColor = "#95C11E";
    })
})

gsap.to("#nav", {
    backgroundColor: "#111111",
    height: "110px",
    duration: 0.5,
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 2
    }

});


gsap.to("#main", {
    backgroundColor: "#111111",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        markers: true,
        start: "top -50%",
        end: "top -70%",
        scrub: 2
    }
})

gsap.from("#about-us img , about-us-in", {
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: "#about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})

gsap.from(".card", {
    y: 50,
    opacity: 0.8,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
        trigger: ".card",
        scroller: "body",
        start: "top 60%",
        end: "top 58%",
        scrub: 3,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 47%",
        scrub: 4
    }
})

gsap.from("#page4 h1", {
    y: 50,
    scrollTrigger: {
        trigger: "#page4 h1",
        scroller: "body",
        start: "top 75%",
        end: "top 70%",
        scrub: 3,
    }
})
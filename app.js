gsap.registerPlugin(Observer);
 let sections = document.querySelectorAll("section"),
 images = document.querySelectorAll(".bg"),
 headings = gsap.utils.toArray(".section-heading"),
 outerWrappers = gsap.utils.toArray(".outer"),
 innerWrappers = gsap.utils.toArray(".inner"),
 splitHeadings = headings.map(heading => new SplitText(heading,{ type: "chars,words,lines",linesClass: "clip-text"})),
currentIndex = -1,
wrap = gsap.utils.wrap(0, sections.length - 1),
animating;
gsap.set(outerWrappers,{yPercent: 100});
gsap.set(innerWrappers,{yPercent: -100});

function gotoSection(index, direction){
    index = wrap(index);
    animating = true;
    let fromTop = direction === -1,
    dFactor = fromTop ? -1 : 1,
    t1 = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut"},
        onComplete: () => animating = false 
    });

    if (currentIndex >= 0) {
        gsap.set(sections[currentIndex], { zIndex: 0 });
        t1.to(images[currentIndex], { yPercent:-15 * dFactor })
        .set(sections[currentIndex] ,{ autoAlpha: 0 });
    }

    
}
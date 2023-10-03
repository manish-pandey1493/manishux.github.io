// const locoScroll = new LocomotiveScroll ({
//     el: document.querySelector("#main-content"),
//     smooth:true
// });

// locoScroll.on("scroll", ScrollTrigger.update);
// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main-content", {
//     scrollTop(value) {
//       return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//     }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//     getBoundingClientRect() {
//       return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//     },
//     // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//     pinType: document.querySelector("#main-content").style.transform ? "transform" : "fixed"
//   });

// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
// ScrollTrigger.refresh();

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    gsap.to('.grid-item-right>h3',{
        scrollTrigger: {
            trigger: ".home-page",
            scroller: "body",
            start: "top top",
            end: "bottom top",
            scrub: true,
            ease: 'linear',
        },
        y: "120%",
    });
    
    gsap.to('.footer>hr', {
        // scrollTrigger: {
        //     trigger: '.footer',
        //     scroller: 'body',
        //     start: 'top 90%',
        //     end: '+=50px',
        //     scrub: true,
        // },
        width: '100%'
    });
    
    gsap.to('.clockanalog',{
        color: "hsl(71, 86%, 49%)",
        border: "2px solid #fff",
        duration: 10,
        repeat: -1,
        yoyo:true,
        ease: 'circ.inOut'
    })
    
    gsap.to('.title-download', {
        opacity: 0.5,
        duration: 4,
        ease: "linear",
        repeat: -1,
        yoyo: true
    })


    gsap.to('.marquee-title>h2', {
        x: "100%",
        duration: 10,
        ease: "linear",
        repeat: -1,

    })

    // visamate project gsap code starts here man

    gsap.to('.how-large-title', {
        scrollTrigger: {
            trigger: ".how",
            scroller: "body",
            start: "top 80%",
            end: "top 40%",
            scrub: true,
        },
        opacity: 1,
    });

    gsap.to('#anim-ltr', {
        scrollTrigger: {
            trigger: ".how-crucial",
            scroller: "body",
            start: "top 70%",
            end: "top 40%",
            scrub: 2
        },
        left: "50%",
        ease: "linear"
    });
 
    gsap.to('.next-project>h2', {
            y: "-10%",
            duration: 0.5,
            ease: "linear",
            repeat: -1,
            yoyo: true
    });

    gsap.fromTo('.lamp-img',{
        rotate: "15deg",
    },{
        rotate: "-15deg",
        duration: 3,
        ease: "linear",
        repeat: -1,
        yoyo: true
    })

    const tla = gsap.timeline({
        scrollTrigger: {
            trigger: ".projects-grid",
            scroller: "body",
            start: "top 50%",
            end: "top top",
            scrub: true
        }
    });

    tla.from('#fixit-right', {
        x: "10%",
        ease: "linear",
        opacity:0
    }, 'a');
    tla.from('#intern-left', {
        x: "-10%",
        ease: "linear",
        opacity: 0
    },'a');
    
    function scrollTop(){
        if (window.scrollY>50){
            btn2top.style.display = "block";
        }
        else {
            btn2top.style.display = "none";
        }
    }
    scrollTop();
    window.addEventListener('scroll', scrollTop);



});











// vanilla JS PANELL

// clock analog vanilla/gsap starto

setInterval(setClock, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
  
function setClock(){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) /  12
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}
  
function setRotation(element, rotationRatio){
    element.style.setProperty('--rotation', rotationRatio * 360)
}

// clock analog vanilla/gsap endo


// mouse-move should be given a fallback if in case browser don't render

let cursorBlur = document.querySelector('#cursor-move-blur');

document.addEventListener('mousemove', function(event) {
  gsap.to(cursorBlur, {
    left: event.clientX + "px",
    top: event.clientY + "px",
    ease: "linear"
  });
});

// mouse-move section js ends here


let navBar = document.querySelector('.nav-items');

function openMenu(){
    navBar.style.right = "0";
    gsap.from('.svg_2',{
        rotation:360,
        opacity:0,
        duration:2,
        x:'2rem',
        ease:'circ.inOut'
    });
}

function hideMenu() {
    navBar.style.right = "-100%";
    gsap.from('.svg_2',{
        rotation:360,
        y: '-10rem',
        duration:1,
        ease:'circ.inOut'
    });
}

function isSmallDevice() {
    return window.innerWidth < 768; // Adjust the breakpoint as needed
  }
  
  // Hide the navbar by default on small devices
  if (isSmallDevice()) {
    hideMenu();
}

// button to top code here -- falback included triggered

let btn2top = document.querySelector('#btntotop');
btn2top.addEventListener('click', () => {
    gsap.to(window, {
        scrollTo: {
            y: 0
        },
        duration: 0.5,
        delay: 0,
        ease: 'power3.in'
    });
});


const texts = ['UX Design • Story Telling • Visual Design', 'Film Making • Video Editing • Riding Motorbikes'];
let index = 0;
let currentText = '';
let letter = '';
let isDeleting = false;

function autoWrite() {
  if (index === texts.length) {
    index = 0;
  }

  currentText = texts[index];

  if (isDeleting) {
    letter = currentText.slice(0, --letter.length);
  } else {
    letter = currentText.slice(0, ++letter.length);
  }

  document.getElementById('main-text').textContent = letter;

  if (letter.length === currentText.length && !isDeleting) {
    isDeleting = true;
    setTimeout(autoWrite, 500);
  } else if (letter.length === 0 && isDeleting) {
    isDeleting = false;
    index++;
    setTimeout(autoWrite, 500);
  } else {
    setTimeout(autoWrite, 200);
  }
}

autoWrite();




// button to top code ENDS here -- falback included triggered















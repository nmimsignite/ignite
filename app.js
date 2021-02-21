// var images = new Array();
// images[0] = "./assets/ignitelogo.svg";
// images[1] = "./assets/ignitelogoGlitched.svg";
// setInterval("changeImage()", 1000);
// var x = 0;

// function changeImage() {
//   document.getElementById("logo").src = images[x];
//   x++;
//   if (images.length == x) {
//     x = 0;
//   }
// }

function animatePages() {
  console.log("Works.");

  controller = new ScrollMagic.Controller();

  //Select some things
  const sectioners = document.querySelectorAll(".page");
  const nav = document.querySelector(".nav");
  sectioners.forEach((section, index, sections) => {
    const RevealTagline1 = section.querySelector(".notUnderline");
    const RevealTagline2 = section.querySelector(".underline");
    const Reveal = section.querySelector(".anima");
    const RevealHolder = section.querySelector(".holder");

    const RevealImg = section.querySelector(".welcomeIcon");
    const RevealCard = section.querySelector(".featureCard");
    const RevealMessage = section.querySelector(".message1");

    //Timeline
    const slide = gsap.timeline({
      defaults: {
        duration: 0.7,
        ease: "power3.inOut",
      },
      scrollTrigger: {
        pin: true,
      },
    });

    // slide.fromTo(
    //   RevealImg,
    //   0.6,
    //   {
    //     // y: "-100%",
    //     scale: 0,
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     scale: 1,
    //     autoAlpha: 1,
    //   },
    //   "power4.inOut",
    //   "-=0.6"
    // );
    slide.fromTo(
      ".logo",
      0.6,
      {
        y: "50%",
        // x: "100%",
        scale: 1,
        opacity: 0,
      },
      {
        y: "0%",
        // x: "0%",
        scale: 1,
        autoAlpha: 1,
        ease: "power3.inOut",
      }
      //   "power3.inOut"
    );
    slide.fromTo(
      RevealTagline1,
      0.3,
      {
        y: "50%",
        // scale: 0,
        opacity: 0,
      },
      {
        y: "0%",
        // scale: 1,
        autoAlpha: 1,
        ease: "power3.inOut",
      }
    );
    slide.fromTo(
      RevealTagline2,
      0.3,
      {
        y: "50%",
        // scale: 0,
        opacity: 0,
      },
      {
        y: "0%",
        // scale: 1,
        autoAlpha: 1,
        ease: "power3.inOut",
      }
    );
    slide.fromTo(
      ".requestButton",
      0.3,

      {
        y: "50%",
        opacity: 0,
        // scale: 0,
      },
      {
        y: "0%",
        autoAlpha: 1,
        ease: "power3.inOut",
        // scale: 1,
      }
      //   "-=0.2"
    );
    slide.fromTo(
      ".lookman",
      0.3,

      {
        y: "50%",
        opacity: 0,
        // scale: 0,
      },
      {
        y: "0%",
        autoAlpha: 1,
        ease: "power3.inOut",
        // scale: 1,
      }
      //   "-=0.2"
    );

    slide.fromTo(
      ".mike",
      {
        x: "200%",
        scale: 0,
        opacity: 0,
      },
      {
        x: "0%",
        opacity: 1,
        scale: 1,
        visibility: "visible",
      }
      //   "-=2"
    );

    // slide.fromTo(
    //   RevealHolder,
    //   {
    //     y: "0%",
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     opacity: 1,
    //     scale: 1,
    //     visibility: "visible",
    //   },
    //   "-=1.8"
    // );
    // slide.fromTo(
    //   RevealMessage,
    //   {
    //     y: "100%",
    //     opacity: 0,
    //   },
    //   {
    //     y: "0%",
    //     opacity: 1,
    //   }
    // );

    //Tween for timeline

    //Create Scene

    slideScene = new ScrollMagic.Scene({
      triggerElement: section,
      triggerHook: 0.2,
      reverse: false,
    })

      .setTween(slide)
      .addTo(controller);
    //Another One
  });

  //Parallax
}
function animateThings() {
  // const pairHook = document.querySelector(".pair");
  const pairers = document.querySelectorAll(".pair");

  pairers.forEach((pairHook, index, pairs) => {
    const Ptl = new TimelineMax();
    console.log("pairhook", pairHook);
    const child = pairHook.querySelectorAll(".parallax");
    // let childRight = pairHook.querySelectorAll(".parallaxRight");
    // const ideathon = pairHook.querySelector(".ideathon");
    const illustrationReveal = pairHook.querySelectorAll(".illustration");
    // const illustrationRevealRight = pairHook.querySelector(
    //   ".illustrationRight"
    // );
    // const Ptl = gsap.timeline({
    //   defaults: {
    //     duration: 20,
    //     ease: "power3.inOut",
    //   },
    //   scrollTrigger: {
    //     pin: true,
    //   },
    // });
    Ptl.fromTo(
      illustrationReveal,
      {
        // scale: 0,
        // x: -400,
        y: 300,
        opacity: 0,
      },
      {
        scale: 1,
        x: 0,
        y: 0,
        opacity: 1,
      }
      // "power3.inOut"
    );

    Ptl.fromTo(
      child,
      {
        // scale: 0,
        // x: 400,
        y: 300,
        opacity: 0.3,
      },
      {
        scale: 1,
        x: 0,
        y: -40,
        opacity: 1,
      }
      // "power3.inOut"
    );
    // Ptl.fromTo(
    //   illustrationRevealRight,

    //   {
    //     // scale: 0,
    //     // x: -200,
    //     y: 40,
    //     opacity: 0,
    //   },
    //   {
    //     scale: 1,
    //     y: 0,
    //     x: 0,
    //     opacity: 1,
    //   }
    // );

    // Ptl.fromTo(
    //   childRight,

    //   {
    //     // scale: 0,
    //     y: 40,
    //     x: 200,
    //     opacity: 0,
    //   },
    //   {
    //     scale: 1,
    //     y: 0,
    //     x: 0,
    //     opacity: 1,
    //   }
    //   // "power3.inOut"
    // );
    // Ptl.fromTo(
    //   ideathon,
    //   1,
    //   {
    //     background: "#554cc2",
    //   },
    //   {
    //     background: "linear-gradient(139.41deg, #EBBE21 5.11%, #D67300 91.8%)",
    //   },
    //   "-=1.8"
    // );
    // Ptl.fromTo(
    // child,
    // 1.5,
    // {
    //   y: 60,
    //   ease: "power1.inOut",
    // },
    // {
    //   // scale: 0,
    //   y: -120,
    //   // opacity: 0,
    // }
    // );
    var scene = new ScrollMagic.Scene({
      triggerElement: pairHook,
      triggerHook: 0.7,
      duration: "100%",
      // pin: true,

      // end: "+=4000",
    })
      .setTween(Ptl)
      // .addIndicators()
      .addTo(controller);
  });
}

const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");
const $rotators = document.querySelectorAll(".rotator");
// var follower = this.querySelector(".follower");
// Listeners
document.body.addEventListener("mousemove", onMouseMove);
for (let i = 0; i < $hoverables.length; i++) {
  $hoverables[i].addEventListener("mouseenter", onMouseHover);
  $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
}
for (let i = 0; i < $rotators.length; i++) {
  $rotators[i].addEventListener("mouseenter", onMouseRotate);
  $rotators[i].addEventListener("mouseleave", onMouseRotateOut);
}

// Move the cursor
function onMouseMove(e) {
  TweenMax.to($bigBall, 0.4, {
    x: e.clientX - 14,
    y: e.clientY - 14,
  });
  TweenMax.to($smallBall, 0.1, {
    x: e.clientX - 5,
    y: e.clientY - 7,
  });
}
// TweenMax.to(follower, 0.3, {
//   x: e.clientX - 10,
//   y: e.clientY - 14,
//   ease: Power4.easeOut,
// });
// Hover an element
function onMouseHover() {
  TweenMax.to($bigBall, 0.3, {
    scale: 2,
    // rotation: 18,
    // width: "200px",
    // height: "150px",
    // cx: "40px",
    // r: "40px",
    // width: 30,
    // force3D: false,
    // attr: { width: 100, height: 100 },
  });
}
function onMouseHoverOut() {
  TweenMax.to($bigBall, 0.3, {
    // rotation: 10,
    scale: 1,
  });
}

// Hover an element
function onMouseRotate() {
  TweenMax.to($bigBall, 0.3, {
    scale: 2,
    rotation: 720,
  });
}
function onMouseRotateOut() {
  TweenMax.to($bigBall, 0.3, {
    rotation: 0,
    scale: 1,
    // repeat: 0,
  });
}

function skewEffect() {
  let proxy = { skew: 0 },
    skewSetter = gsap.quickSetter(".skewElem", "skewY", "deg"), // fast
    clamp = gsap.utils.clamp(-30, 30); // don't let the skew go beyond 20 degrees.

  ScrollTrigger.create({
    onUpdate: (self) => {
      let skew = clamp(self.getVelocity() / -1200);
      // only do something if the skew is MORE severe. Remember, we're always tweening back to 0, so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly rather than jumping to the smaller skew.
      if (Math.abs(skew) > Math.abs(proxy.skew)) {
        proxy.skew = skew;
        gsap.to(proxy, {
          skew: 0,
          duration: 0.8,
          ease: "power3",
          overwrite: true,
          onUpdate: () => skewSetter(proxy.skew),
        });
      }
    },
  });

  // make the right edge "stick" to the scroll bar. force3D: true improves performance
  gsap.set(".skewElem", { transformOrigin: "right center", force3D: true });
}

animatePages();
animateThings();
skewEffect();

barba.init({
  views: [
    {
      namespace: "home",
      beforeEnter() {
        animatePages();
        animateThings();
        skewEffect();
      },
    },
    {
      namespace: "ideathon",
      beforeEnter() {
        animatePages();
      },
    },
    {
      namespace: "typeform",
    },
  ],
  transitions: [
    {
      name: "opacity-transition",
      leave({ current, next }) {
        let done = this.async();
        const t1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        t1.fromTo(
          current.container,
          1,
          { opacity: 1 },
          { opacity: 0, onComplete: done }
        );
        t1.fromTo(
          ".swipe",
          0.6,
          { x: "-100%" },
          { x: "0%", onComplete: done },
          "-=0.5"
        );
        // return gsap.to(current.container, {
        //   // x: -200,
        //   opacity: 0,
        // });
      },
      enter({ current, next }) {
        // window.scrollTo(0, 0);

        let done = this.async();
        const t1 = gsap.timeline({ defaults: { ease: "power3.inOut" } });
        t1.fromTo(
          ".swipe",
          0.6,
          { x: "0%" },
          { x: "100%", stagger: 0.2, onComplete: done }
          // "-=0.5"
        );
        t1.fromTo(next.container, 0.2, { opacity: 0 }, { opacity: 1 });

        // return gsap.from(next.container, {
        //   //   scale: 0,
        //   // x: 200,
        //   opacity: 0,
        // });
      },
    },
  ],
});

// $("#ex1").modal({
//   fadeDuration: 1000,
//   // fadeDelay: 0.5,
// });

// $("#manual-ajax").click(function (event) {
//   event.preventDefault();
//   this.blur(); // Manually remove focus from clicked link.
//   $.get(this.href, function (html) {
//     $(html).appendTo("body").modal();
//   });
// });

// $("#fade").modal({
//   fadeDuration: 100,
// });

// $(".twitter").mouseenter(function () {
//   $(".page4").css("background-color", "#2aa9e0").fadeIn("slow");
// });

// $(".twitter").mouseleave(function () {
//   $(".page4").css("background-color", "black");
// });

// $(".youtube").mouseenter(function () {
//   $(".page4").css("background-color", "#e62e2e");
// });
// $(".youtube").mouseleave(function () {
//   $(".page4").css("background-color", " black");
// });

// $(".instagram").mouseenter(function () {
//   $(".page4").css("background", "#C837AB");
// });
// $(".instagram").mouseleave(function () {
//   $(".page4").css("background", "black");
// });

// $(".youtube").mouseleave(function () {
//   $(".page4").css("background-color", " black");
// });

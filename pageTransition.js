barba.init({
  views: [
    {
      namespace: "home",
    },
    { namespace: "ideathon" },
  ],
  transitions: [
    {
      name: "opacity-transition",
      leave({ current, next }) {
        // const t1 = gsap.timeline({ defaults: { ease: "power2.inOut" } });
        // t1.fromTo(current.container, 1);
        return gsap.to(current.container, {
          x: -200,
          opacity: 0,
        });
      },
      enter({ current, next }) {
        return gsap.from(next.container, {
          //   scale: 0,
          x: 200,
          opacity: 0,
        });
      },
    },
  ],
});

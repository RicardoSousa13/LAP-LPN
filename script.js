const preview = document.getElementById("preview");
document.querySelectorAll(".item").forEach((el) => {
  el.addEventListener("mouseenter", () => {
    preview.src = el.dataset.img;
    preview.style.opacity = 1;
  });
  el.addEventListener("mouseleave", () => {
    preview.style.opacity = 0;
  });
});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.fromTo(
    el,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.35,
      ease: "ease",
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
        toggleActions: "play none none none",
      },
      onComplete: () => {
        el.style.transform = "translateY(0)";
      },
    }
  );
});

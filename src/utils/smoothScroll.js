import Lenis from "@studio-freight/lenis";

export default function smoothScroll() {
    document.documentElement.style.scrollBehavior = "smooth";
  const lenis = new Lenis({
    smooth: true,
    lerp: 0.08,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

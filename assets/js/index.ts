import lottie from "lottie-web"
import type { AnimationItem } from "lottie-web"

const anim = lottie.loadAnimation({
  container: document.getElementById('lottie'),
  renderer: 'svg',
  loop: false,
  autoplay: false,
  path: './public/lottie/data.json'
})

window.addEventListener('scroll', () => animate(window.innerHeight * 4, anim))

const animate = (duration: number, animObject: AnimationItem) => {
  const scrollPos = document.body.getBoundingClientRect().top
  const frame = 1 + (animObject.totalFrames / 100) * (scrollPos / (duration / 100)) * -1;
  animObject.goToAndStop(frame, true);
}

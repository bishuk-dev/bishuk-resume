import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function initMotion() {
  document.documentElement.classList.add('motion-ready');

  if (reducedMotion) {
    document.documentElement.classList.add('reduced-motion');
    return;
  }

  const lenis = new Lenis({
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 0.92,
    touchMultiplier: 1.05,
  });

  lenis.on('scroll', () => ScrollTrigger.update());
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);

  const intro = gsap.timeline({ defaults: { ease: 'power3.out' } });
  intro
    .from('.boot-line', { opacity: 0, y: 12, duration: 0.35, stagger: 0.08 })
    .from('.hero-title .word', { yPercent: 115, rotate: 2, duration: 0.85, stagger: 0.08 }, '-=0.05')
    .from('.hero-copy', { opacity: 0, y: 24, duration: 0.55 }, '-=0.35')
    .from('.hero-actions', { opacity: 0, y: 18, duration: 0.45 }, '-=0.3')
    .from('.player-card', { opacity: 0, scale: 0.82, rotate: -2.5, duration: 0.7 }, '-=0.62')
    .from('.scroll-prompt', { opacity: 0, y: -8, duration: 0.35 }, '-=0.2');

  gsap.to('.hero-grid', {
    yPercent: 32,
    ease: 'none',
    scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
  });

  gsap.to('.pixel-orb', {
    yPercent: -24,
    scale: 1.22,
    rotate: 8,
    ease: 'none',
    scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
  });

  gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
    gsap.from(element, {
      opacity: 0,
      y: 46,
      duration: 0.8,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 84%',
        toggleActions: 'play none none reverse',
      },
    });
  });

  const journeyNodes = gsap.utils.toArray<HTMLElement>('[data-map-node]');
  const mapTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#journey',
      start: 'top top',
      end: '+=2400',
      pin: '.journey-stage',
      scrub: 1,
      anticipatePin: 1,
    },
  });

  mapTimeline
    .to('.world-map', { scale: 1.55, xPercent: -5, yPercent: -5, ease: 'none', duration: 1 })
    .to('.map-path-progress', { strokeDashoffset: 0, ease: 'none', duration: 2 }, 0)
    .to(journeyNodes, { opacity: 1, scale: 1, stagger: 0.38, duration: 0.24, ease: 'back.out(2)' }, 0.25)
    .to('.map-camera-label', { opacity: 1, y: 0, duration: 0.2 }, 1.25)
    .to('.world-map', { scale: 2.2, xPercent: -13, yPercent: -9, ease: 'none', duration: 1.3 }, 1.1)
    .to('.map-camera-label', { opacity: 0, duration: 0.15 }, 2.15);

  const media = gsap.matchMedia();
  media.add('(min-width: 900px)', () => {
    const track = document.querySelector<HTMLElement>('.project-track');
    if (!track) return;

    const distance = () => Math.max(0, track.scrollWidth - window.innerWidth + 120);

    gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: '#projects',
        start: 'top top',
        end: () => `+=${distance() + window.innerHeight * 0.75}`,
        pin: '.projects-stage',
        scrub: 1,
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  });

  gsap.utils.toArray<HTMLElement>('.inventory-card').forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 36,
      rotate: index % 2 === 0 ? -1.5 : 1.5,
      duration: 0.58,
      ease: 'power2.out',
      scrollTrigger: { trigger: card, start: 'top 88%' },
    });
  });

  const cursor = document.querySelector<HTMLElement>('.pixel-cursor');
  if (cursor && window.matchMedia('(pointer: fine)').matches) {
    const moveX = gsap.quickTo(cursor, 'x', { duration: 0.18, ease: 'power3.out' });
    const moveY = gsap.quickTo(cursor, 'y', { duration: 0.18, ease: 'power3.out' });
    window.addEventListener('pointermove', (event) => {
      moveX(event.clientX - 7);
      moveY(event.clientY - 7);
    });
  }

  ScrollTrigger.refresh();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initMotion, { once: true });
} else {
  initMotion();
}

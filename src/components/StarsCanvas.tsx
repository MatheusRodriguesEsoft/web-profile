'use client';

import { useEffect, useRef } from 'react';

const STAR_COLOR = '#fff';
const STAR_SIZE = 3;
const STAR_MIN_SCALE = 0.2;
const OVERFLOW_THRESHOLD = 50;

const StarsCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    if (!canvas) return;
    const context = canvas.getContext('2d')!;
    if (!context) return;

    const scale = window.devicePixelRatio || 1;
    let width: number;
    let height: number;

    const stars: { x: number; y: number; z: number }[] = [];

    let pointerX: number | null = null;
    let pointerY: number | null = null;

    const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };

    let touchInput = false;

    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    function generate() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function placeStar(star: { x: number; y: number; z: number }) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star: { x: number; y: number; z: number }) {
      let direction = 'z';

      const vx = Math.abs(velocity.x);
      const vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        const axis = vx > vy
          ? Math.random() < vx / (vx + vy) ? 'h' : 'v'
          : Math.random() < vy / (vx + vy) ? 'v' : 'h';

        if (axis === 'h') {
          direction = velocity.x > 0 ? 'l' : 'r';
        } else {
          direction = velocity.y > 0 ? 't' : 'b';
        }
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      switch (direction) {
        case 'z':
          star.z = 0.1;
          star.x = Math.random() * width;
          star.y = Math.random() * height;
          break;
        case 'l':
          star.x = -OVERFLOW_THRESHOLD;
          star.y = height * Math.random();
          break;
        case 'r':
          star.x = width + OVERFLOW_THRESHOLD;
          star.y = height * Math.random();
          break;
        case 't':
          star.x = width * Math.random();
          star.y = -OVERFLOW_THRESHOLD;
          break;
        case 'b':
          star.x = width * Math.random();
          star.y = height + OVERFLOW_THRESHOLD;
          break;
      }
    }

    function resize() {
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;
      canvas.width = width;
      canvas.height = height;
      stars.forEach(placeStar);
    }

    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;
        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function render() {
      context.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        const tailX = velocity.x * 2 || 0.5;
        const tailY = velocity.y * 2 || 0.5;

        context.beginPath();
        context.moveTo(star.x, star.y);
        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    }

    function step() {
      update();
      render();
      requestAnimationFrame(step);
    }

    function movePointer(x: number, y: number) {
      if (pointerX !== null && pointerY !== null) {
        const ox = x - pointerX;
        const oy = y - pointerY;
        velocity.tx += (ox / (8 * scale)) * (touchInput ? 1 : -1);
        velocity.ty += (oy / (8 * scale)) * (touchInput ? 1 : -1);
      }
      pointerX = x;
      pointerY = y;
    }

    function onMouseMove(event: MouseEvent) {
      touchInput = false;
      movePointer(event.clientX, event.clientY);
    }

    function onTouchMove(event: TouchEvent) {
      touchInput = true;
      movePointer(event.touches[0].clientX, event.touches[0].clientY);
      event.preventDefault();
    }

    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }

    generate();
    resize();
    step();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onMouseLeave);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onMouseLeave);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full"
    />
  );
};

export default StarsCanvas;

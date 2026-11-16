import React, { useEffect, useRef } from 'react';

export default function TechBackgroundVideo({
  videoSrc = "/videos/it-datacenter-hero.mp4?v=3",
  showParticles = true,
}) {
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  // Guarantee video playback across all browsers
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;

    const playVideo = () => {
      video.play().catch((err) => {
        console.warn("Video play attempt:", err);
      });
    };

    playVideo();

    // In case browser suspended autoplay before user gesture
    window.addEventListener('click', playVideo, { once: true });
    window.addEventListener('touchstart', playVideo, { once: true });

    return () => {
      window.removeEventListener('click', playVideo);
      window.removeEventListener('touchstart', playVideo);
    };
  }, [videoSrc]);

  // Supplemental digital tech particle canvas
  useEffect(() => {
    if (!showParticles) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };

    window.addEventListener('resize', handleResize);

    const particleCount = Math.min(30, Math.floor((width * height) / 35000));
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        radius: Math.random() * 1.5 + 0.8,
        alpha: Math.random() * 0.35 + 0.15,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 90) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(22, 200, 232, ${0.1 * (1 - dist / 90)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(22, 200, 232, ${p.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [showParticles]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none z-0">
      {/* 1. Real Cinematic Enterprise Video Background */}
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
        style={{
          filter: 'brightness(0.95) contrast(1.1)',
        }}
      />

      {/* 2. Deep Navy Blue Enterprise Tint Overlay */}
      <div className="absolute inset-0 bg-[#061B35]/40 mix-blend-multiply pointer-events-none z-[1]" />

      {/* 3. Gradient Vignette to keep center text legible while outer servers and lights pop */}
      <div
        className="absolute inset-0 pointer-events-none z-[2]"
        style={{
          background: `
            radial-gradient(ellipse at 50% 45%, rgba(6, 27, 53, 0.4) 0%, rgba(4, 16, 33, 0.7) 75%, rgba(4, 16, 33, 0.95) 100%),
            linear-gradient(to bottom, rgba(6, 27, 53, 0.45) 0%, transparent 25%, transparent 65%, rgba(4, 16, 33, 0.95) 100%)
          `,
        }}
      />

      {/* 4. Subtle Electric Blue Lighting Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-oryon-tech/15 rounded-full blur-[100px] pointer-events-none z-[3]" />

      {/* 5. Light Digital Particles */}
      {showParticles && (
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full opacity-40 pointer-events-none z-[4]"
        />
      )}
    </div>
  );
}

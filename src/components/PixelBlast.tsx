import { useRef, useEffect, useCallback } from "react";

interface PixelBlastProps {
  pixelSize?: number;
  color?: string;
  patternScale?: number;
  patternDensity?: number;
  pixelSizeJitter?: number;
  enableRipples?: boolean;
  rippleSpeed?: number;
  rippleThickness?: number;
  rippleIntensityScale?: number;
  speed?: number;
  edgeFade?: number;
  className?: string;
}

function hash(x: number, y: number): number {
  let h = x * 374761393 + y * 668265263;
  h = ((h ^ (h >> 13)) * 1274126177) | 0;
  return (h ^ (h >> 16)) >>> 0;
}

function smoothstep(t: number): number {
  return t * t * (3 - 2 * t);
}

function noise2D(x: number, y: number): number {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const sx = smoothstep(fx);
  const sy = smoothstep(fy);

  const n00 = (hash(ix, iy) & 0xffff) / 0xffff;
  const n10 = (hash(ix + 1, iy) & 0xffff) / 0xffff;
  const n01 = (hash(ix, iy + 1) & 0xffff) / 0xffff;
  const n11 = (hash(ix + 1, iy + 1) & 0xffff) / 0xffff;

  const nx0 = n00 + sx * (n10 - n00);
  const nx1 = n01 + sx * (n11 - n01);
  return nx0 + sy * (nx1 - nx0);
}

function fbm(x: number, y: number): number {
  return noise2D(x, y) * 0.6 + noise2D(x * 2, y * 2) * 0.3 + noise2D(x * 4, y * 4) * 0.1;
}

// Parse hex color to r,g,b
function hexToRgb(hex: string): [number, number, number] {
  const v = parseInt(hex.replace("#", ""), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

interface Ripple {
  x: number;
  y: number;
  birth: number;
}

export function PixelBlast({
  pixelSize = 12,
  color = "#51369C",
  patternScale = 2.5,
  patternDensity = 0.8,
  pixelSizeJitter = 0.5,
  enableRipples = false,
  rippleSpeed = 0.3,
  rippleThickness = 0.12,
  rippleIntensityScale = 1.2,
  speed = 0.5,
  edgeFade = 0.15,
  className,
}: PixelBlastProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const visibleRef = useRef(true);
  const ripplesRef = useRef<Ripple[]>([]);

  const threshold = 1 - patternDensity;
  const noiseScale = 0.08 / patternScale;
  const rippleDuration = 1500 / rippleSpeed;
  const rippleWidth = rippleThickness * 400;
  const [cr, cg, cb] = hexToRgb(color);

  const draw = useCallback(
    (ctx: CanvasRenderingContext2D, w: number, h: number, time: number) => {
      const spacing = pixelSize;
      const baseRadius = pixelSize * 0.42;
      const cols = Math.ceil(w / spacing) + 1;
      const rows = Math.ceil(h / spacing) + 1;
      const t = time * 0.0004 * speed;
      // Edge fade distance in pixels
      const fadeDist = edgeFade > 0 ? Math.max(w, h) * edgeFade : 0;

      ctx.clearRect(0, 0, w, h);

      const ripples = ripplesRef.current;
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (time - ripples[i].birth > rippleDuration) ripples.splice(i, 1);
      }

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const px = col * spacing;
          const py = row * spacing;
          const nx = col * noiseScale;
          const ny = row * noiseScale;

          let val = fbm(nx + t, ny + t * 0.7);

          // Ripple influence
          if (enableRipples) {
            for (const rp of ripples) {
              const rdx = px - rp.x;
              const rdy = py - rp.y;
              const dist = Math.sqrt(rdx * rdx + rdy * rdy);
              const age = (time - rp.birth) / rippleDuration;
              const ringRadius = age * 350 * rippleSpeed;
              const ringDelta = Math.abs(dist - ringRadius);
              if (ringDelta < rippleWidth) {
                val += (1 - ringDelta / rippleWidth) * (1 - age) * 0.5 * rippleIntensityScale;
              }
            }
          }

          // Edge fade: compute alpha based on distance to nearest edge
          let alpha = 1;
          if (fadeDist > 0) {
            const distToEdge = Math.min(px, py, w - px, h - py);
            alpha = Math.min(1, distToEdge / fadeDist);
            alpha = smoothstep(alpha);
          }

          if (val > threshold) {
            const jitter = pixelSizeJitter > 0
              ? 1 - pixelSizeJitter * ((hash(col, row) & 0xff) / 0xff - 0.5) * 2
              : 1;
            const r = baseRadius * jitter * Math.min(1, (val - threshold) / 0.3);
            if (r > 0.3) {
              const dotAlpha = alpha * Math.min(1, (val - threshold) / 0.15);
              ctx.fillStyle = `rgba(${cr},${cg},${cb},${dotAlpha})`;
              ctx.beginPath();
              ctx.arc(px, py, r, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }
    },
    [cr, cg, cb, pixelSize, noiseScale, threshold, speed, pixelSizeJitter, enableRipples, rippleDuration, rippleSpeed, rippleWidth, rippleIntensityScale, edgeFade]
  );

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = 0,
      h = 0;

    const resize = () => {
      const parent = canvas.parentElement!;
      const dpr = window.devicePixelRatio || 1;
      w = parent.clientWidth;
      h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas.parentElement!);

    const io = new IntersectionObserver(
      ([e]) => {
        visibleRef.current = e.isIntersecting;
      },
      { threshold: 0 }
    );
    io.observe(canvas);

    const loop = (time: number) => {
      if (visibleRef.current) draw(ctx, w, h, time);
      animRef.current = requestAnimationFrame(loop);
    };
    animRef.current = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
      io.disconnect();
    };
  }, [draw]);

  const handleClick = (e: React.MouseEvent) => {
    if (!enableRipples) return;
    const rect = canvasRef.current!.getBoundingClientRect();
    ripplesRef.current.push({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      birth: performance.now(),
    });
  };

  return (
    <canvas
      ref={canvasRef}
      onClick={handleClick}
      className={className}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
    />
  );
}

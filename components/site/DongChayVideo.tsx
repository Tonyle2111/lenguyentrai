"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { Icon } from "@/components/ui/Icon";

/**
 * Video chuyển động "Xách nước vs xây đường ống" (Claude Design — Dong Chay Video).
 * Khung gốc 1920×1080, 24 giây, lặp lại; co giãn theo chiều rộng khung chứa.
 * Bốn cảnh: Hook 4,5s → Water 6,5s → Pipe 7s → Close 6s.
 */

const W = 1920, H = 1080;
const CUES = { Hook: 0, Water: 4.5, Pipe: 11, Close: 18 };
const TOTAL = 24;
/** Khung hình tĩnh khi người xem bật "giảm chuyển động": đường ống đã dựng xong. */
const STILL_T = 17.4;

const C = { kem: "#FFF8EC", white: "#FFFFFF", soft: "#FFF0D8", ink: "#141A2E", muted: "#565C72", line: "#EBDDC4", amber: "#F9A51A", cam: "#F47B2E", fire: "#EC4A0C", camText: "#B73B08" };
const GRAD = "linear-gradient(135deg, #F9A51A 0%, #F47B2E 52%, #EC4A0C 100%)";
const SANS = "var(--font-sans), 'Be Vietnam Pro', system-ui, sans-serif";
const SERIF = "var(--font-serif), 'Noto Serif', Georgia, serif";
const MONO = "var(--font-mono), 'JetBrains Mono', ui-monospace, monospace";

// ── Nội suy ─────────────────────────────────────────────────────────────────
type Ease = (t: number) => number;
const Easing: Record<string, Ease> = {
  inQuad: (t) => t * t,
  outCubic: (t) => 1 - Math.pow(1 - t, 3),
  inOutCubic: (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2),
  outQuart: (t) => 1 - Math.pow(1 - t, 4),
};
function tween(T: number, start: number, end: number, ease: Ease) {
  if (T <= start) return 0;
  if (T >= end) return 1;
  return ease((T - start) / (end - start));
}
const enter = (T: number, s: number, d = 0.6) => tween(T, s, s + d, Easing.outCubic);
const draw = (T: number, s: number, d = 1) => tween(T, s, s + d, Easing.inOutCubic);
const pop = (T: number, s: number, d = 0.45) => tween(T, s, s + d, Easing.outQuart);
/** Hiện từ a, ẩn trước b (mờ dần trong f giây). */
const win = (T: number, a: number, b: number, f = 0.45) => enter(T, a, f) * (1 - enter(T, b - f, f));
const rise = (p: number, px = 40): CSSProperties => ({ opacity: p, transform: `translateY(${(1 - p) * px}px)` });

// ── Thành phần ──────────────────────────────────────────────────────────────
function Eyebrow({ children, p }: { children: ReactNode; p: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 18, ...rise(p, 20) }}>
      <div style={{ width: 44 * p, height: 8, borderRadius: 4, background: GRAD }} />
      <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 28, letterSpacing: "0.14em", textTransform: "uppercase", color: C.camText }}>{children}</div>
    </div>
  );
}

function Headline({ children, p, size = 128 }: { children: ReactNode; p: number; size?: number }) {
  return <div style={{ fontFamily: SANS, fontWeight: 800, fontSize: size, lineHeight: 1.06, letterSpacing: "-0.035em", color: C.ink, ...rise(p, 50) }}>{children}</div>;
}

function Backdrop({ T }: { T: number }) {
  const drift = Math.sin(T * 0.35) * 40;
  return (
    <div style={{ position: "absolute", inset: 0, background: C.kem, overflow: "hidden" }}>
      <div style={{ position: "absolute", width: 1400, height: 1400, right: -460 + drift, bottom: -620 - drift * 0.6, borderRadius: "50%", background: "radial-gradient(circle, rgba(249,165,26,.42) 0%, rgba(244,123,46,.16) 38%, rgba(255,248,236,0) 68%)" }} />
    </div>
  );
}

function TopBar({ T }: { T: number }) {
  const p = win(T, 0.2, CUES.Close + 0.2, 0.5);
  return (
    <div style={{ position: "absolute", left: 120, right: 120, top: 64, display: "flex", alignItems: "center", justifyContent: "space-between", opacity: p }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo/lnt-mark.png" alt="" style={{ width: 64, height: 64 }} />
      <div style={{ fontFamily: MONO, fontWeight: 600, fontSize: 22, letterSpacing: "0.12em", color: C.muted }}>LENGUYENTRAI.COM</div>
    </div>
  );
}

function Hook({ T }: { T: number }) {
  const v = win(T, 0, CUES.Water + 0.1, 0.5);
  const bar = draw(T, 0.5, 0.9);
  const l1 = enter(T, 0.7, 0.8), l2 = enter(T, 1.5, 0.8);
  const zoom = 1 + 0.03 * draw(T, 0, CUES.Water);
  return (
    <div style={{ position: "absolute", left: 160, right: 160, top: 340, opacity: v, transform: `scale(${zoom})`, transformOrigin: "0% 50%" }}>
      <Eyebrow p={enter(T, 0.3)}>Tư duy dòng tiền</Eyebrow>
      <div style={{ position: "relative", marginTop: 56, paddingLeft: 56 }}>
        <div style={{ position: "absolute", left: 0, top: 8, width: 8, height: `${bar * 100}%`, borderRadius: 4, background: GRAD }} />
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 84, lineHeight: 1.3, color: C.ink }}>
          <div style={rise(l1, 30)}>Nếu ngày mai bạn ngừng làm việc,</div>
          <div style={rise(l2, 30)}>dòng tiền của bạn còn chảy bao lâu?</div>
        </div>
      </div>
    </div>
  );
}

function Water({ T }: { T: number }) {
  const Ws = CUES.Water, P = CUES.Pipe;
  const v = win(T, Ws, P + 0.1, 0.5);
  if (v <= 0) return null;
  const buckets = [0, 1, 2, 3].map((i) => Ws + 1.5 + i * 0.75);
  const stop = Ws + 4.6;
  let level = buckets.reduce((a, b) => a + 0.2 * enter(T, b + 0.32, 0.4), 0);
  level *= 1 - draw(T, stop + 0.2, 1.3);
  const started = buckets.filter((b) => T >= b).length;
  const stopped = T >= stop;
  const hours = stopped ? 0 : started;
  const tankH = 480, tankW = 260;
  const zoom = 1 + 0.04 * draw(T, Ws, P - Ws);
  const msgA = win(T, Ws + 1.2, stop, 0.4), msgB = enter(T, stop + 0.15, 0.5);
  return (
    <div style={{ position: "absolute", left: 160, right: 160, top: 210, height: 720, display: "flex", alignItems: "center", gap: 96, opacity: v, transform: `scale(${zoom})`, transformOrigin: "60% 55%" }}>
      <div style={{ flex: 1, minWidth: 0 }}>
        <Eyebrow p={enter(T, Ws + 0.2)}>Cách thứ nhất</Eyebrow>
        <div style={{ marginTop: 32 }}>
          <Headline p={enter(T, Ws + 0.4, 0.7)}>Xách nước</Headline>
        </div>
        <div style={{ position: "relative", height: 180, marginTop: 48 }}>
          <div style={{ position: "absolute", inset: 0, fontFamily: SANS, fontSize: 48, lineHeight: 1.35, color: C.ink, ...rise(msgA, 20) }}>
            Mỗi xô nước đổi bằng
            <br />
            một giờ của bạn.
          </div>
          <div style={{ position: "absolute", inset: 0, fontFamily: SANS, fontWeight: 800, fontSize: 60, lineHeight: 1.2, letterSpacing: "-0.02em", color: C.ink, ...rise(msgB, 20) }}>
            Dừng tay.
            <br />
            <span style={{ color: C.camText }}>Dòng tiền dừng.</span>
          </div>
        </div>
      </div>
      <div style={{ flex: "none", background: C.white, border: `2px solid ${C.line}`, borderRadius: 40, padding: "72px 64px 80px", display: "flex", gap: 64, alignItems: "flex-end", ...rise(enter(T, Ws + 0.8, 0.7), 60) }}>
        <div style={{ position: "relative", width: tankW, height: tankH, flex: "none" }}>
          {buckets.map((b, i) => {
            const f = tween(T, b, b + 0.38, Easing.inQuad);
            const on = T >= b && T < b + 0.4;
            const surface = tankH - tankH * (0.2 * i) - 10;
            return <div key={i} style={{ position: "absolute", left: tankW / 2 - 16, top: -110 + f * (surface + 110) - 32, width: 32, height: 44, borderRadius: "50% 50% 50% 50% / 60% 60% 40% 40%", background: C.amber, opacity: on ? 1 : 0 }} />;
          })}
          <div style={{ position: "absolute", inset: 0, borderRadius: "20px 20px 32px 32px", border: `4px solid ${C.ink}`, borderTop: "none", overflow: "hidden", background: C.soft }}>
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: `${level * 100}%`, background: C.amber }} />
          </div>
          <div style={{ position: "absolute", left: tankW / 2 - 7, bottom: -36, width: 14, height: 36 * (stopped ? 1 : 0.4), background: C.amber, borderRadius: 7, opacity: level > 0.02 ? 1 : 0 }} />
        </div>
        <div style={{ width: 240, display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 24, letterSpacing: "0.12em", color: C.muted }}>GIỜ LÀM</div>
          <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 140, lineHeight: 1, fontVariantNumeric: "tabular-nums", color: stopped ? C.fire : C.ink }}>{String(hours).padStart(2, "0")}</div>
          <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 24, letterSpacing: "0.12em", color: C.muted, marginTop: 28 }}>DÒNG TIỀN</div>
          <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 64, lineHeight: 1, fontVariantNumeric: "tabular-nums", color: C.ink }}>{String(Math.round(level * 100)).padStart(2, "0")}%</div>
        </div>
      </div>
    </div>
  );
}

const NODES = [
  { n: "01", label: "Công sức ban đầu", sub: "Thời gian, học hỏi, thử sai" },
  { n: "02", label: "Hệ thống", sub: "Quy trình, con người, tài sản" },
  { n: "03", label: "Dòng tiền", sub: "Tiếp tục chảy khi bạn nghỉ", result: true },
];

function Pipe({ T }: { T: number }) {
  const S = CUES.Pipe, E = CUES.Close;
  const v = win(T, S, E + 0.1, 0.5);
  if (v <= 0) return null;
  const zoom = 1 + 0.04 * draw(T, S, E - S);
  const gap = 600, nodeD = 104;
  const t0 = S + 1.3;
  const nodeP = NODES.map((_, i) => pop(T, t0 + i * 1.1));
  const segP = [0, 1].map((i) => draw(T, t0 + 0.3 + i * 1.1, 0.8));
  const flow = (T * 40) % 40;
  const quote = enter(T, S + 4.9, 0.7);
  return (
    <div style={{ position: "absolute", left: 160, right: 160, top: 200, opacity: v, transform: `scale(${zoom})`, transformOrigin: "50% 55%" }}>
      <Eyebrow p={enter(T, S + 0.2)}>Cách thứ hai</Eyebrow>
      <div style={{ marginTop: 32 }}>
        <Headline p={enter(T, S + 0.4, 0.7)}>
          Xây <span style={{ backgroundImage: GRAD, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>đường ống</span>
        </Headline>
      </div>
      <div style={{ position: "relative", marginTop: 80, height: 260 }}>
        {segP.map((p, i) => (
          <div key={i} style={{ position: "absolute", top: nodeD / 2 - 7, left: nodeD / 2 + i * gap, height: 14, width: gap * p, borderRadius: 7, backgroundImage: `repeating-linear-gradient(90deg, ${C.amber} 0 20px, ${C.cam} 20px 40px)`, backgroundPosition: `${flow}px 0` }} />
        ))}
        {NODES.map((nd, i) => {
          const p = nodeP[i];
          return (
            <div key={i} style={{ position: "absolute", top: 0, left: i * gap, width: 440 }}>
              <div
                style={{
                  width: nodeD, height: nodeD, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxSizing: "border-box",
                  background: nd.result ? GRAD : C.white, border: nd.result ? "none" : `4px solid ${C.cam}`,
                  fontFamily: MONO, fontWeight: 700, fontSize: 36, color: nd.result ? C.ink : C.camText,
                  opacity: p, transform: `scale(${0.6 + 0.4 * p})`, boxShadow: nd.result ? `0 0 0 ${18 * p}px rgba(249,165,26,${0.22 * p})` : "none",
                }}
              >
                {nd.n}
              </div>
              <div style={{ marginTop: 36, ...rise(enter(T, t0 + i * 1.1 + 0.15, 0.6), 24) }}>
                <div style={{ fontFamily: SANS, fontWeight: 700, fontSize: 48, letterSpacing: "-0.02em", color: C.ink }}>{nd.label}</div>
                <div style={{ fontFamily: SANS, fontSize: 30, color: C.muted, marginTop: 8 }}>{nd.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
      <div style={{ marginTop: 40, fontFamily: SANS, fontWeight: 800, fontSize: 60, lineHeight: 1.15, letterSpacing: "-0.025em", color: C.ink, ...rise(quote, 30) }}>
        Tốn công hơn lúc đầu. <span style={{ color: C.camText }}>Chảy lâu về sau.</span>
      </div>
    </div>
  );
}

function Close({ T }: { T: number }) {
  const S = CUES.Close;
  if (T < S) return null;
  const out = 1 - enter(T, TOTAL - 0.6, 0.55);
  const q = enter(T, S + 0.3, 0.8), bar = draw(T, S + 0.2, 0.9);
  const h = enter(T, S + 2.0, 0.8);
  const logo = enter(T, S + 3.2, 0.8), site = enter(T, S + 3.6, 0.7);
  const zoom = 1 + 0.03 * draw(T, S, TOTAL - S);
  return (
    <div style={{ position: "absolute", left: 160, right: 160, top: 220, opacity: out * enter(T, S, 0.4), transform: `scale(${zoom})`, transformOrigin: "0% 50%" }}>
      <div style={{ position: "relative", paddingLeft: 56 }}>
        <div style={{ position: "absolute", left: 0, top: 8, width: 8, height: `${bar * 100}%`, borderRadius: 4, background: GRAD }} />
        <div style={{ fontFamily: SERIF, fontStyle: "italic", fontSize: 60, lineHeight: 1.35, color: C.ink, ...rise(q, 30) }}>Xây hệ thống cần thời gian, công sức và có rủi ro.</div>
      </div>
      <div style={{ marginTop: 72 }}>
        <Headline p={h} size={120}>
          Bước tiếp theo là của bạn.
        </Headline>
      </div>
      <div style={{ marginTop: 120, display: "flex", alignItems: "center", gap: 56 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/assets/logo/lnt-logo-full-transparent.png" alt="" style={{ width: 444, height: 120, objectFit: "contain", objectPosition: "left center", ...rise(logo, 24) }} />
        <div style={{ width: 2, height: 72, background: C.line, opacity: site }} />
        <div style={{ fontFamily: MONO, fontWeight: 700, fontSize: 34, letterSpacing: "0.12em", color: C.ink, ...rise(site, 24) }}>LENGUYENTRAI.COM</div>
      </div>
    </div>
  );
}

function Frame({ T }: { T: number }) {
  return (
    <div style={{ position: "absolute", inset: 0, fontFamily: SANS }}>
      <Backdrop T={T} />
      <TopBar T={T} />
      <Hook T={T} />
      <Water T={T} />
      <Pipe T={T} />
      <Close T={T} />
    </div>
  );
}

// ── Trình phát ──────────────────────────────────────────────────────────────
export function DongChayVideo({ className }: { className?: string }) {
  const boxRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0);
  const [T, setT] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [visible, setVisible] = useState(false);
  const timeRef = useRef(0);

  // Co giãn khung 1920×1080 theo chiều rộng thật.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setScale(e.contentRect.width / W));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Giảm chuyển động: dừng ở một khung tĩnh, người xem tự bấm phát.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      timeRef.current = STILL_T;
      setT(STILL_T);
      setPlaying(false);
    }
  }, []);

  // Chỉ chạy khi video nằm trong màn hình.
  useEffect(() => {
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.15 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !visible) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      timeRef.current = (timeRef.current + Math.min(0.1, (now - last) / 1000)) % TOTAL;
      last = now;
      setT(timeRef.current);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [playing, visible]);

  return (
    <figure className={className}>
      <div ref={boxRef} className="group relative aspect-video w-full overflow-hidden rounded-card border border-line bg-cream shadow-raised">
        <div
          role="img"
          aria-label="Video minh họa: Nếu ngày mai bạn ngừng làm việc, dòng tiền còn chảy bao lâu? Xách nước — mỗi xô đổi một giờ, dừng tay thì dòng tiền dừng. Xây đường ống — công sức ban đầu, hệ thống, dòng tiền tiếp tục chảy khi bạn nghỉ. Xây hệ thống cần thời gian, công sức và có rủi ro. Bước tiếp theo là của bạn."
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: W, height: H, transform: `scale(${scale})`, visibility: scale ? "visible" : "hidden" }}
        >
          <Frame T={T} />
        </div>
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-1 bg-ink/10">
          <div className="h-full bg-flow-h" style={{ width: `${(T / TOTAL) * 100}%` }} />
        </div>
        <button
          type="button"
          onClick={() => setPlaying(!playing)}
          aria-label={playing ? "Tạm dừng video" : "Phát video"}
          className="absolute bottom-2.5 right-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-ink/80 text-cream opacity-80 transition-opacity duration-fast hover:opacity-100 focus-visible:opacity-100 sm:bottom-4 sm:right-4 sm:h-10 sm:w-10"
        >
          {playing ? <PauseGlyph /> : <Icon name="play-circle" size={20} />}
        </button>
      </div>
    </figure>
  );
}

function PauseGlyph() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="3" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
      <rect x="9.5" y="2" width="3.5" height="12" rx="1" fill="currentColor" />
    </svg>
  );
}

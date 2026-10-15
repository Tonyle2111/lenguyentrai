import type { Config } from "tailwindcss";

/**
 * Design system "Dòng Chảy" — mọi màu đều trỏ về CSS variable trong app/globals.css,
 * nên chỉ cần đặt data-theme="dark" lên một phần tử là cả nhánh đổi sang giao diện tối.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // Mốc theo thiết kế: 860 (bố cục 2 cột), 960 (khối mô phỏng), 1180 (thanh điều hướng đầy đủ)
      screens: {
        tab: "860px",
        wide: "960px",
        nav: "1180px",
      },
      colors: {
        // Brand — dải cam theo chiều dòng chảy
        amber: "#F9A51A",
        orange: "#F47B2E",
        fire: "#EC4A0C",
        ink: "#141A2E",
        "ink-2": "#565C72",
        cream: "#FFF8EC",
        "cream-2": "#FFF0D8",
        paper: "#F6EDDD",
        "paper-2": "#A9ACBC",
        "night-line": "#2A3150",
        "accent-dark": "#FFA562",
        // Semantic — đổi theo theme
        page: "var(--bg-page)",
        surface: "var(--bg-surface)",
        soft: "var(--bg-muted)",
        body: "var(--text-body)",
        subtle: "var(--text-muted)",
        accent: "var(--text-accent)",
        line: "var(--border)",
        danger: "var(--danger-text)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      backgroundImage: {
        flow: "var(--gradient-flow)",
        "flow-h": "var(--gradient-flow-h)",
        "flow-v": "var(--gradient-flow-v)",
        glow: "var(--glow-hero)",
        stripes: "var(--pipe-stripes)",
      },
      borderRadius: {
        input: "14px",
        icon: "16px",
        card: "24px",
        arch: "220px 220px 24px 24px",
        "arch-inv": "24px 24px 220px 220px",
      },
      boxShadow: {
        raised: "0 12px 32px -12px rgba(20,26,46,.18)",
        pop: "0 20px 48px -16px rgba(20,26,46,.28)",
        ring: "0 0 0 3px rgba(244,123,46,.35)",
      },
      spacing: {
        gutter: "var(--gutter)",
      },
      maxWidth: {
        content: "1180px",
        measure: "66ch",
      },
      transitionTimingFunction: {
        flow: "cubic-bezier(.22,.61,.36,1)",
      },
      transitionDuration: {
        fast: "140ms",
        base: "220ms",
        slow: "420ms",
      },
      keyframes: {
        "pipe-flow": { from: { backgroundPosition: "0 0" }, to: { backgroundPosition: "28.28px 0" } },
        "pipe-flow-v": { from: { backgroundPosition: "0 0" }, to: { backgroundPosition: "0 28.28px" } },
        "fade-up": { from: { opacity: "0", transform: "translateY(6px)" }, to: { opacity: "1", transform: "none" } },
      },
      animation: {
        "pipe-flow": "pipe-flow 1.4s linear infinite",
        "pipe-flow-v": "pipe-flow-v 1.4s linear infinite",
        "fade-up": "fade-up 420ms cubic-bezier(.22,.61,.36,1) both",
      },
    },
  },
  plugins: [],
};

export default config;

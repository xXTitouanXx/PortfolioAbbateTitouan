import type {Config} from "tailwindcss";

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                purple: {
                    50: "#faf5ff",   // LavenderBlush
                    100: "#f3e8ff",  // LavenderMist
                    200: "#e9d5ff",  // Mauve
                    300: "#d8b4fe",  // LightOrchid
                    400: "#c084fc",  // Orchid
                    500: "#a855f7",  // MediumPurple
                    600: "#9333ea",  // PurpleHeart
                    700: "#7e22ce",  // DarkPurple
                    800: "#6b21a8",  // Amethyst
                    900: "#581c87",  // DeepPurple
                    950: "#3b0764",  // MidnightPurple
                },
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },
            },
            fontSize: {
                "8xl": [
                    "120px",
                    {
                        lineHeight: "120px",
                        letterSpacing: "-6px",
                        fontWeight: "500",
                    },
                ],
                "7xl": [
                    "72px",
                    {
                        lineHeight: "80px",
                        letterSpacing: "-4.5px",
                        fontWeight: "600",
                    },
                ],
                "6xl": [
                    "55px",
                    {
                        lineHeight: "60px",
                        letterSpacing: "-2.5px",
                        fontWeight: "500",
                    },
                ],
                "5xl": [
                    "48px",
                    {
                        lineHeight: "54px",
                        letterSpacing: "-1.6px",
                        fontWeight: "500",
                    },
                ],
                "4xl": [
                    "36px",
                    {
                        lineHeight: "44px",
                        letterSpacing: "-1.2px",
                        fontWeight: "500",
                    },
                ],
                "3xl": [
                    "28px",
                    {
                        lineHeight: "34px",
                        letterSpacing: "-0.8px",
                        fontWeight: "500",
                    },
                ],
                "2xl": [
                    "24px",
                    {
                        lineHeight: "30px",
                        letterSpacing: "-1px",
                        fontWeight: "400",
                    },
                ],
                xl: [
                    "24px",
                    {
                        lineHeight: "30px",
                        letterSpacing: "-1px",
                        fontWeight: "400",
                    },
                ],
                lg: [
                    "21px",
                    {
                        lineHeight: "30px",
                        letterSpacing: "-0.8px",
                        fontWeight: "400",
                    },
                ],
                base: [
                    "17px",
                    {
                        lineHeight: "25px",
                        letterSpacing: "-0.7px",
                        fontWeight: "400",
                    },
                ],
                sm: [
                    "15px",
                    {
                        lineHeight: "23px",
                        letterSpacing: "-0.6px",
                        fontWeight: "400",
                    },
                ],
                caption1: [
                    "20px",
                    {
                        lineHeight: "24px",
                        letterSpacing: "-0.6px",
                        fontWeight: "400",
                    },
                ],
                caption2: [
                    "18px",
                    {
                        lineHeight: "20px",
                        letterSpacing: "-0.3px",
                        fontWeight: "400",
                    },
                ],
                caption3: [
                    "16px",
                    {
                        lineHeight: "18px",
                        letterSpacing: "-0.5px",
                        fontWeight: "400",
                    },
                ],
                caption: [
                    "13px",
                    {
                        lineHeight: "15px",
                        letterSpacing: "-0.2px",
                        fontWeight: "400",
                    },
                ],
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
                pulse: {
                    "0%, 100%": {boxShadow: "0 0 0 0 var(--pulse-color)"},
                    "50%": {boxShadow: "0 0 0 8px var(--pulse-color)"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                pulse: "pulse var(--duration) ease-out infinite",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;

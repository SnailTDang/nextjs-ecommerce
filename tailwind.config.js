/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            sans: ["Inter", "san-serif"],
        },
        extend: {
            boxShadow: {
                "logo-drawer": `0px 4px 8px -4px rgba(58, 53, 65, 0.16),
                0px 6px 10px -4px rgba(58, 53, 65, 0.08),
                0px 4px 6px -4px rgba(58, 53, 65, 0.1)`,
            },

            backgroundColor: {
                "light-primary": "#f4f5fa",
            },
            colors: {
                // "light-primary-bg": "f4f5fa",
                "light-primary": "#3a3541",
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
        },
    },
    plugins: [],
};

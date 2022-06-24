module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#F68966",
                    dark: "#E67956",
                },
                secondary: {
                    DEFAULT: "#CC565C",
                    dark: "#BC464C",
                },
                tertiary: {
                    DEFAULT: "#875A70",
                    dark: "#774A60",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};

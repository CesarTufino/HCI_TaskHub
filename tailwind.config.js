export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/tw-elements/dist/js/**/*.js",
    ],
    theme: {
      extend: {
        boxShadow: {
          'custom': '0 4px 4px rgba(0, 0, 0, 0.25)',
        },
        colors: {
          primary: {
            '1': '#005E8E',
            '60': '#70A6C2',
          },
          secondary: {
            '1': '#F89A53',
          },
          terciary: {
            '1': '#F2F2F2',
            '2': '#A9A9A9',
          },
          grey:{
            '1': '#F2F2F3',
            '2': '#B8B6B9 ',
          },
        },
        borderRadius: {
          'default': '8px',
          'small': '4px',
          'big': '20px',
        },
      },
    },
    plugins: ["tw-elements/dist/plugin.cjs"],
  };
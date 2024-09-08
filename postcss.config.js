import twThemeOneConfig from "./src/themes/ThemeOne/tailwind.theme-one.config.js";
import twThemeTwoConfig from "./src/themes/ThemeOne/tailwind.theme-two.config.js";

export default {
  plugins: {
    /** 
     * This configuration is not necessary 
     * if we specify the path with the `@config` directive in css
     * https://tailwindcss.com/docs/configuration#using-a-different-file-name
     */
    // tailwindcss: { config: { presets: [twThemeOneConfig, twThemeTwoConfig] } }, 
    tailwindcss: {},
    autoprefixer: {},
  },
};

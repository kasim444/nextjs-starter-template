const withPlugins = require("next-compose-plugins");
const nextTranslate = require("next-translate");

module.exports = withPlugins([[nextTranslate, {}]], {
    i18n: {
        locales: ["tr-TR"],
        defaultLocale: "tr-TR",
        localeDetection: false,
    },
    experimental: { esmExternals: false },
});

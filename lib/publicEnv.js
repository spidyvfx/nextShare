// This is an example. Copy this file to lib/publicEnv.js for appropriate usage.
// DOCUMENTATION CAN BE FOUND IN docs/CONFIGURATION.md

module.exports = {
    frontend: {
        redirect: {
            url: "https://example.com", // redirect to page when navigating to /
            enabled: false // enable redirect
        },
        customization: {
            name: "nextShare", // name of the instance
            embedColour: "#00ff00", // colour of openGraph embeds
            // to change the icon: swap out icon.png for your own icon (with the same name)
            // for the favicon: swap out favicon.ico with a new one with the same name (must be .ico)
            // banner: replace banner.png with your own banner with the same name (regular resolution is 1920x1080)
            // or fork this repository and manually change the file namepaths
        }
    }
};

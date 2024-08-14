// THIS IS FOR CORE CONFIGURATION AND SECRET CONFIGURATION
// CHECK lib/publicEnv.js FOR PUBLIC CONFIG (URL REDIRECTS)
// DOCUMENTATION CAN BE FOUND IN docs/CONFIGURATION.md

module.exports = {
    access: {
        baseUrl: "http://localhost:3000"
    },
    listener: {
        hostname: "127.0.0.1",
        port: 3000
    },
    // Refer to docs/CONFIGURATION.md's "Authentication" for more information.
    authentication: [
        {
            user: "spidy", // The username to use when logging in
            friendlyName: "User 1", // The friendly name (shows up in the frontend)
            password: "password", // Set the user password here
            roles: ["admin"] // Set user roles (see configuration docs for details)
        }
    ],
    rootUser: { // Read CONFIGURATION.md for more details
        enabled: false // Set to true to enable the root user
    },
    storage: {
        type: "fs", // Set storage types 
        rootPath: path.join(__dirname + "/datastores"), // If storage type is "fs", set root filesystem path here. This *HAS* to be an absolute path.
        current: "store1", // Set current datastore
        datastores: {
            "store1": { // Name of datastore, used in URLs (other than static URLs for non-image files)
                friendlyName: "Store A", // Friendly name of datastore (shows up in the frontend)
                folder: "store1", // The folder (or bucket, depending on storage type) that the datastore is stored in
                online: true, // If set to offline, the datastore will not be available from the frontend (but will still be accessible from the backend static component)
                fileNamePolicy: {
                    type: "random", // Types are: random, hash
                    fileLength: 14, // Only used if type is random
                },
                acceptedFilesPolicy: {
                    type: "all", // Types are: all (all files allowed), whitelist (only extensions on whitelist are allowed / all other extensions are blocked), blacklist (extensions on blacklist are blocked)
                    whitelist: ["jpg", "png", "gif", "jpeg", "svg", "txt"], // Only used if type is whitelist
                    blacklist: ["exe", "apk", "dmg", "AppImage"] // Only used if type is blacklist
                }
            }
        }
    }
};

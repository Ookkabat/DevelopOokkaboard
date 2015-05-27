
/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */
module.exports = {
    "ui": {
        "port": 3001,
        "weinre": {
            "port": 8080
        }
    },

    // Ookkaboard Settings
    files: [
        '_site/stylesheets/*.css',
        '_site/**/*.html'
    ],
    server: {
        baseDir: '_site'
    },
    rewriteRules: [
        {
            match: /DevelopOokkaboard/g,
            fn: function (match) {
                return '.';
            }
        }
    ],

    //"files": false,
    "watchOptions": {},
    //"server": false,
    "proxy": false,
    "port": 3000,
    "middleware": false,
    "ghostMode": {
        "clicks": true,
        "scroll": true,
        "forms": {
            "submit": true,
            "inputs": true,
            "toggles": true
        }
    },
    "logLevel": "debug",
    "logPrefix": "BS",
    "logConnections": false,
    "logFileChanges": true,
    "logSnippet": true,
    //"rewriteRules": false,
    "open": false,//"local",
    "browser": "default",
    "xip": false,
    "hostnameSuffix": false,
    "reloadOnRestart": false,
    "notify": true,
    "scrollProportionally": true,
    "scrollThrottle": 0,
    "reloadDelay": 0,
    "reloadDebounce": 0,
    "plugins": [],
    "injectChanges": false, //true,
    "startPath": null,
    "minify": true,
    "host": null,
    "codeSync": true,
    "timestamps": true,
    "clientEvents": [
        "scroll",
        "input:text",
        "input:toggles",
        "form:submit",
        "form:reset",
        "click"
    ],
    "socket": {
        "path": "/browser-sync/socket.io",
        "clientPath": "/browser-sync",
        "namespace": "/browser-sync",
        "clients": {
            "heartbeatTimeout": 5000
        }
    },
    "tagNames": {
        "less": "link",
        "scss": "link",
        "css": "link",
        "jpg": "img",
        "jpeg": "img",
        "png": "img",
        "svg": "img",
        "gif": "img",
        "js": "script"
    }
};
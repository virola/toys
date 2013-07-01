# grunt-cli not installed successful


    $ sudo npm install -g grunt-cli
    npm http GET https://registry.npmjs.org/grunt-cli
    npm http 304 https://registry.npmjs.org/grunt-cli

    npm ERR! Error: No compatible version found: grunt-cli
    npm ERR! No valid targets found.
    npm ERR! Perhaps not compatible with your version of node?
    npm ERR!     at installTargetsError (/usr/share/npm/lib/cache.js:488:10)
    npm ERR!     at next_ (/usr/share/npm/lib/cache.js:438:17)
    npm ERR!     at next (/usr/share/npm/lib/cache.js:415:44)
    npm ERR!     at /usr/share/npm/lib/cache.js:408:5
    npm ERR!     at saved (/usr/share/npm/lib/utils/npm-registry-client/get.js:147:7)
    npm ERR!     at Object.oncomplete (/usr/lib/nodejs/graceful-fs.js:230:7)
    npm ERR! You may report this log at:
    npm ERR!     <http://bugs.debian.org/npm>
    npm ERR! or use
    npm ERR!     reportbug --attach /home/virola/project/reveal.js/npm-debug.log npm
    npm ERR! 
    npm ERR! System Linux 3.5.0-23-generic
    npm ERR! command "node" "/usr/bin/npm" "install" "-g" "grunt-cli"
    npm ERR! cwd /home/virola/project/reveal.js
    npm ERR! node -v v0.6.12
    npm ERR! npm -v 1.1.4
    npm ERR! message No compatible version found: grunt-cli
    npm ERR! message No valid targets found.
    npm ERR! message Perhaps not compatible with your version of node?
    npm ERR! 
    npm ERR! Additional logging details can be found in:
    npm ERR!     /home/virola/project/reveal.js/npm-debug.log
    npm not ok


because node version is too low.
see: <https://github.com/gruntjs/grunt/issues/723>

    _Grunt 0.4.x requires Node.js version `>= 0.8.0`._ 




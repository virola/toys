exports.port = 8848;
exports.directoryIndexes = true;
exports.documentRoot = __dirname;

var fs = require('fs');
var path = require('path');

exports.getLocations = function () {
    return [
        { 
            location: '/', 
            handler: home( 'index.html' )
        },

        // JS模拟数据, src/testData
        {
            location: function (request) {

                var pathname = request.pathname;
                var extname = path.extname(pathname);

                pathname = extname 
                     ? path.basename(pathname, extname) : pathname;

                var handlerPath = path.join(
                     exports.documentRoot, 'src/testData', pathname
                );

                return fs.existsSync(handlerPath + '.js');
        
            },
            handler: [function (context) {

                var request = context.request;
                var pathname = request.pathname;
                var extname = path.extname(pathname);

                pathname = extname 
                    ? path.basename(pathname, extname) : pathname;

                var handlerPath = path.join(
                    exports.documentRoot, 'src/testData', pathname
                );

                var handler = require(handlerPath + '.js');

                handler.execute(context);

            }]
        },
        { 
            location: /^\/redirect-local/, 
            handler: redirect('redirect-target', false) 
        },
        { 
            location: /^\/redirect-remote/, 
            handler: redirect('http://www.baidu.com', false) 
        },
        { 
            location: /^\/redirect-target/, 
            handler: content('redirectd!') 
        },
        { 
            location: '/empty', 
            handler: empty() 
        },
        { 
            location: /\.css$/, 
            handler: [
                autoless()
            ]
        },
        { 
            location: /\.less$/, 
            handler: [
                file(),
                less()
            ]
        },
        { 
            location: /^.*$/, 
            handler: [
                file(),
                proxyNoneExists()
            ]
        }
    ];
};

exports.injectResource = function ( res ) {
    for ( var key in res ) {
        global[ key ] = res[ key ];
    }
};

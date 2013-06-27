// BD
var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3F39e6a54216ca63d253b34675c50b7fac' type='text/javascript'%3E%3C/script%3E"));


// GA
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-42080725-1', 'virola-eko.com');
ga('send', 'pageview');


// let's kill IE!
( function() {
    var ieVersion = /msie (\d+\.\d+)/i.test(navigator.userAgent) 
        ? (document.documentMode || + RegExp['\x241']) : undefined;

    if ( ieVersion < 9 ) {
        document.write('<script src="dep/lets-kill-ie.js"></script>');
    }
} )();

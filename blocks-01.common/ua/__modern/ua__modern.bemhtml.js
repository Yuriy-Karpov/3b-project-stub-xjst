block('ua__modern')(
    tag()('script'),
    bem()(false),
    attrs()({
        'data-skip-moving': 'true'
    }),
    content()([
        '/* beautify preserve:start */',
        '!function(e,n,t,r,o){function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):l?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function c(e,n){return typeof e===n}function i(e,n,t){var r;for(var o in e)if(e[o]in n)return t===!1?e[o]:(r=n[e[o]],c(r,"function")?fnBind(r,t||n):r);return!1}function s(e,n,t,r,o){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+d.join(a+" ")+a).split(" ");return c(n,"string")||c(n,"undefined")?testProps(s,n,r,o):(s=(e+" "+v.join(a+" ")+a).split(" "),i(s,n,t))}var u={},f=n.documentElement,l="svg"===f.nodeName.toLowerCase(),m={elem:a("modern-browser")},p=function(){var e,n=m.elem.style;try{n.fontSize="3ch",e=-1!==n.fontSize.indexOf("ch")}catch(t){e=!1}return e};u.csschunit=p();var g="Moz O ms Webkit",d=g.split(" "),v=g.toLowerCase().split(" "),w=function(e,n,t){return 0===e.indexOf("@")?h(e):(-1!=e.indexOf("-")&&(e=cssToDOM(e)),n?s(e,n,t):s(e,"pfx"))},h=function(n){var t,r=prefixes.length,a=e.CSSRule;if(o===a)return o;if(!n)return!1;if(n=n.replace(/^@/,""),t=n.replace(/-/g,"_").toUpperCase()+"_RULE",t in a)return"@"+n;for(var c=0;r>c;c++){var i=prefixes[c],s=i.toUpperCase()+"_"+t;if(s in a)return"@-"+i.toLowerCase()+"-"+n}return!1},y=w("performance",e),E=c(y,"function")?y():y;u.performance=!!E;var C,R=w("crypto",e);if(R&&"getRandomValues"in R&&"Uint32Array"in e){var S=new Uint32Array(10),x=R.getRandomValues(S);C=x&&c(x[0],"number")}var U=C;u.getRandomValues=!!U;var N=n[t].className;N=N.replace(/no-js/g,"js"),u.csschunit&u.performance&u.getRandomValues||(N=N.replace(/modern-browser/g,"old-browser")),N+="ontouchstart"in e||e.DocumentTouch!==o&&n instanceof DocumentTouch?" touch":" no-touch",n[r]&&n[r]("http://www.w3.org/2000/svg","svg").createSVGRect&&(N+=" svg"),n[t].className=N}(window,document,"documentElement","createElementNS");',
        '/* beautify preserve:end */'
    ])
)
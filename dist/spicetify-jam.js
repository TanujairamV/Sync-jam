(async()=>{for(;!Spicetify.React||!Spicetify.ReactDOM;)await new Promise(e=>setTimeout(e,10));var I,o,A,i,q,R,e,t,r,L,b,p,D,H,U,B,O,g,z,_,J,m,y,x,F,Q,G,Y,K,V,W,$,X,a,Z,ee,l,ae,s,ne,oe,te,ie,re,n,c,le,d,ce,de,ue,pe,ge,me,fe,he,be,ye,xe,ve,we,je,Ee,ke,Se,Ce,Pe,Ne,Me,Te,se,u,v,Ie,f,h,Ae,w,qe,j,E,Re,k,S,C,P,Le,ze,De,He,Ue,Be,Oe,_e,Je,N,Fe,Qe,Ge,Ye,Ke,Ve,We,M,T,$e,Xe,Ze,et;I=Object.create,o=Object.defineProperty,A=Object.getOwnPropertyDescriptor,i=Object.getOwnPropertyNames,q=Object.getPrototypeOf,R=Object.prototype.hasOwnProperty,t=(e,t,r)=>(r=null!=e?I(q(e)):{},((t,r,a,n)=>{if(r&&"object"==typeof r||"function"==typeof r)for(let e of i(r))R.call(t,e)||e===a||o(t,e,{get:()=>r[e],enumerable:!(n=A(r,e))||n.enumerable});return t})(!t&&e&&e.__esModule?r:o(r,"default",{value:e,enumerable:!0}),e)),r=(e=(e,t)=>function(){return t||(0,e[i(e)[0]])((t={exports:{}}).exports,t),t.exports})({"external-global-plugin:react"(e,t){t.exports=Spicetify.React}}),L=e({"node_modules/qrcode/lib/can-promise.js"(e,t){t.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}}}),b=e({"node_modules/qrcode/lib/core/utils.js"(e){var t,r=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];e.getSymbolSize=function(e){if(!e)throw new Error('"version" cannot be null or undefined');if(e<1||40<e)throw new Error('"version" should be in range from 1 to 40');return 4*e+17},e.getSymbolTotalCodewords=function(e){return r[e]},e.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},e.setToSJISFunction=function(e){if("function"!=typeof e)throw new Error('"toSJISFunc" is not a valid function.');t=e},e.isKanjiModeEnabled=function(){return void 0!==t},e.toSJIS=function(e){return t(e)}}}),p=e({"node_modules/qrcode/lib/core/error-correction-level.js"(a){a.L={bit:1},a.M={bit:0},a.Q={bit:3},a.H={bit:2},a.isValid=function(e){return e&&void 0!==e.bit&&0<=e.bit&&e.bit<4},a.from=function(e,t){if(a.isValid(e))return e;try{var r=e;if("string"!=typeof r)throw new Error("Param is not a string");switch(r.toLowerCase()){case"l":case"low":return a.L;case"m":case"medium":return a.M;case"q":case"quartile":return a.Q;case"h":case"high":return a.H;default:throw new Error("Unknown EC Level: "+r)}}catch(e){return t}}}}),D=e({"node_modules/qrcode/lib/core/bit-buffer.js"(e,t){function r(){this.buffer=[],this.length=0}r.prototype={get:function(e){var t=Math.floor(e/8);return 1==(this.buffer[t]>>>7-e%8&1)},put:function(t,r){for(let e=0;e<r;e++)this.putBit(1==(t>>>r-e-1&1))},getLengthInBits:function(){return this.length},putBit:function(e){var t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},t.exports=r}}),H=e({"node_modules/qrcode/lib/core/bit-matrix.js"(e,t){function r(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}r.prototype.set=function(e,t,r,a){e=e*this.size+t;this.data[e]=r,a&&(this.reservedBit[e]=!0)},r.prototype.get=function(e,t){return this.data[e*this.size+t]},r.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},r.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},t.exports=r}}),U=e({"node_modules/qrcode/lib/core/alignment-pattern.js"(t){var n=b().getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];var t=Math.floor(e/7)+2,e=n(e),r=145===e?26:2*Math.ceil((e-13)/(2*t-2)),a=[e-7];for(let e=1;e<t-1;e++)a[e]=a[e-1]-r;return a.push(6),a.reverse()},t.getPositions=function(e){var r=[],a=t.getRowColCoords(e),n=a.length;for(let t=0;t<n;t++)for(let e=0;e<n;e++)0===t&&0===e||0===t&&e===n-1||t===n-1&&0===e||r.push([a[t],a[e]]);return r}}}),B=e({"node_modules/qrcode/lib/core/finder-pattern.js"(e){var t=b().getSymbolSize;e.getPositions=function(e){e=t(e);return[[0,0],[e-7,0],[0,e-7]]}}}),O=e({"node_modules/qrcode/lib/core/mask-pattern.js"(s){s.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};var d=3,e=3,t=40,n=10;s.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&0<=e&&e<=7},s.from=function(e){return s.isValid(e)?parseInt(e,10):void 0},s.getPenaltyN1=function(r){var a=r.size;let n=0,o=0,i=0,s=null,l=null;for(let t=0;t<a;t++){o=i=0,s=l=null;for(let e=0;e<a;e++){var c=r.get(t,e);c===s?o++:(5<=o&&(n+=d+(o-5)),s=c,o=1),(c=r.get(e,t))===l?i++:(5<=i&&(n+=d+(i-5)),l=c,i=1)}5<=o&&(n+=d+(o-5)),5<=i&&(n+=d+(i-5))}return n},s.getPenaltyN2=function(r){var a=r.size;let n=0;for(let t=0;t<a-1;t++)for(let e=0;e<a-1;e++){var o=r.get(t,e)+r.get(t,e+1)+r.get(t+1,e)+r.get(t+1,e+1);4!==o&&0!==o||n++}return n*e},s.getPenaltyN3=function(r){var a=r.size;let n=0,o=0,i=0;for(let t=0;t<a;t++)for(let e=o=i=0;e<a;e++)o=o<<1&2047|r.get(t,e),10<=e&&(1488===o||93===o)&&n++,i=i<<1&2047|r.get(e,t),10<=e&&(1488===i||93===i)&&n++;return n*t},s.getPenaltyN4=function(t){let r=0;var a=t.data.length;for(let e=0;e<a;e++)r+=t.data[e];return Math.abs(Math.ceil(100*r/a/5)-10)*n},s.applyMask=function(r,a){var n=a.size;for(let t=0;t<n;t++)for(let e=0;e<n;e++)a.isReserved(e,t)||a.xor(e,t,((e,t,r)=>{switch(e){case s.Patterns.PATTERN000:return(t+r)%2==0;case s.Patterns.PATTERN001:return t%2==0;case s.Patterns.PATTERN010:return r%3==0;case s.Patterns.PATTERN011:return(t+r)%3==0;case s.Patterns.PATTERN100:return(Math.floor(t/2)+Math.floor(r/3))%2==0;case s.Patterns.PATTERN101:return t*r%2+t*r%3==0;case s.Patterns.PATTERN110:return(t*r%2+t*r%3)%2==0;case s.Patterns.PATTERN111:return(t*r%3+(t+r)%2)%2==0;default:throw new Error("bad maskPattern:"+e)}})(r,e,t))},s.getBestMask=function(t,r){var a=Object.keys(s.Patterns).length;let n=0,o=1/0;for(let e=0;e<a;e++){r(e),s.applyMask(e,t);var i=s.getPenaltyN1(t)+s.getPenaltyN2(t)+s.getPenaltyN3(t)+s.getPenaltyN4(t);s.applyMask(e,t),i<o&&(o=i,n=e)}return n}}}),g=e({"node_modules/qrcode/lib/core/error-correction-code.js"(e){var r=p(),a=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],n=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];e.getBlocksCount=function(e,t){switch(t){case r.L:return a[4*(e-1)+0];case r.M:return a[4*(e-1)+1];case r.Q:return a[4*(e-1)+2];case r.H:return a[4*(e-1)+3];default:return}},e.getTotalCodewordsCount=function(e,t){switch(t){case r.L:return n[4*(e-1)+0];case r.M:return n[4*(e-1)+1];case r.Q:return n[4*(e-1)+2];case r.H:return n[4*(e-1)+3];default:return}}}}),z=e({"node_modules/qrcode/lib/core/galois-field.js"(e){var r=new Uint8Array(512),a=new Uint8Array(256);{let t=1;for(let e=0;e<255;e++)r[e]=t,a[t]=e,256&(t<<=1)&&(t^=285);for(let e=255;e<512;e++)r[e]=r[e-255]}e.log=function(e){if(e<1)throw new Error("log("+e+")");return a[e]},e.exp=function(e){return r[e]},e.mul=function(e,t){return 0===e||0===t?0:r[a[e]+a[t]]}}}),_=e({"node_modules/qrcode/lib/core/polynomial.js"(a){var o=z();a.mul=function(r,a){var n=new Uint8Array(r.length+a.length-1);for(let t=0;t<r.length;t++)for(let e=0;e<a.length;e++)n[t+e]^=o.mul(r[t],a[e]);return n},a.mod=function(e,t){let r=new Uint8Array(e);for(;0<=r.length-t.length;){var a=r[0];for(let e=0;e<t.length;e++)r[e]^=o.mul(t[e],a);let e=0;for(;e<r.length&&0===r[e];)e++;r=r.slice(e)}return r},a.generateECPolynomial=function(t){let r=new Uint8Array([1]);for(let e=0;e<t;e++)r=a.mul(r,new Uint8Array([1,o.exp(e)]));return r}}}),J=e({"node_modules/qrcode/lib/core/reed-solomon-encoder.js"(e,t){var a=_();function r(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}r.prototype.initialize=function(e){this.degree=e,this.genPoly=a.generateECPolynomial(this.degree)},r.prototype.encode=function(e){var t,r;if(this.genPoly)return(t=new Uint8Array(e.length+this.degree)).set(e),e=a.mod(t,this.genPoly),0<(t=this.degree-e.length)?((r=new Uint8Array(this.degree)).set(e,t),r):e;throw new Error("Encoder not initialized")},t.exports=r}}),m=e({"node_modules/qrcode/lib/core/version-check.js"(e){e.isValid=function(e){return!isNaN(e)&&1<=e&&e<=40}}}),y=e({"node_modules/qrcode/lib/core/regex.js"(e){var t,r="(?:(?![A-Z0-9 $%*+\\-./:]|"+(t="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+".replace(/u/g,"\\u"))+")(?:.|[\r\n]))+",a=(e.KANJI=new RegExp(t,"g"),e.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),e.BYTE=new RegExp(r,"g"),e.NUMERIC=new RegExp("[0-9]+","g"),e.ALPHANUMERIC=new RegExp("[A-Z $%*+\\-./:]+","g"),new RegExp("^"+t+"$")),n=new RegExp("^[0-9]+$"),o=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");e.testKanji=function(e){return a.test(e)},e.testNumeric=function(e){return n.test(e)},e.testAlphanumeric=function(e){return o.test(e)}}}),x=e({"node_modules/qrcode/lib/core/mode.js"(a){var r=m(),t=y();a.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},a.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},a.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},a.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},a.MIXED={bit:-1},a.getCharCountIndicator=function(e,t){if(!e.ccBits)throw new Error("Invalid mode: "+e);if(r.isValid(t))return 1<=t&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2];throw new Error("Invalid version: "+t)},a.getBestModeForData=function(e){return t.testNumeric(e)?a.NUMERIC:t.testAlphanumeric(e)?a.ALPHANUMERIC:t.testKanji(e)?a.KANJI:a.BYTE},a.toString=function(e){if(e&&e.id)return e.id;throw new Error("Invalid mode")},a.isValid=function(e){return e&&e.bit&&e.ccBits},a.from=function(e,t){if(a.isValid(e))return e;try{var r=e;if("string"!=typeof r)throw new Error("Param is not a string");switch(r.toLowerCase()){case"numeric":return a.NUMERIC;case"alphanumeric":return a.ALPHANUMERIC;case"kanji":return a.KANJI;case"byte":return a.BYTE;default:throw new Error("Unknown mode: "+r)}}catch(e){return t}}}}),F=e({"node_modules/qrcode/lib/core/version.js"(i){var n=b(),o=g(),s=p(),l=x(),c=m(),r=n.getBCHDigit(7973);function d(e,t){return l.getCharCountIndicator(e,t)+4}function u(t,r){for(let e=1;e<=40;e++)if(((e,r)=>{let a=0;return e.forEach(function(e){var t=d(e.mode,r);a+=t+e.getBitsLength()}),a})(t,e)<=i.getCapacity(e,r,l.MIXED))return e}i.from=function(e,t){return c.isValid(e)?parseInt(e,10):t},i.getCapacity=function(e,t,r){if(!c.isValid(e))throw new Error("Invalid QR Code version");void 0===r&&(r=l.BYTE);t=8*(n.getSymbolTotalCodewords(e)-o.getTotalCodewordsCount(e,t));if(r===l.MIXED)return t;var a=t-d(r,e);switch(r){case l.NUMERIC:return Math.floor(a/10*3);case l.ALPHANUMERIC:return Math.floor(a/11*2);case l.KANJI:return Math.floor(a/13);default:l.BYTE;return Math.floor(a/8)}},i.getBestVersionForData=function(e,t){let r;t=s.from(t,s.M);if(Array.isArray(e)){if(1<e.length)return u(e,t);if(0===e.length)return 1;r=e[0]}else r=e;var a=r.mode,n=r.getLength(),o=t;for(let e=1;e<=40;e++)if(n<=i.getCapacity(e,o,a))return e},i.getEncodedBits=function(e){if(!c.isValid(e)||e<7)throw new Error("Invalid QR Code version");let t=e<<12;for(;0<=n.getBCHDigit(t)-r;)t^=7973<<n.getBCHDigit(t)-r;return e<<12|t}}}),Q=e({"node_modules/qrcode/lib/core/format-info.js"(e){var a=b(),n=a.getBCHDigit(1335);e.getEncodedBits=function(e,t){e=e.bit<<3|t;let r=e<<10;for(;0<=a.getBCHDigit(r)-n;)r^=1335<<a.getBCHDigit(r)-n;return 21522^(e<<10|r)}}}),G=e({"node_modules/qrcode/lib/core/numeric-data.js"(e,t){var r=x();function a(e){this.mode=r.NUMERIC,this.data=e.toString()}a.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(e){let t,r,a;for(t=0;t+3<=this.data.length;t+=3)r=this.data.substr(t,3),a=parseInt(r,10),e.put(a,10);var n=this.data.length-t;0<n&&(r=this.data.substr(t),a=parseInt(r,10),e.put(a,3*n+1))},t.exports=a}}),Y=e({"node_modules/qrcode/lib/core/alphanumeric-data.js"(e,t){var r=x(),a=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function n(e){this.mode=r.ALPHANUMERIC,this.data=e}n.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){var r=45*a.indexOf(this.data[t]);r+=a.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(a.indexOf(this.data[t]),6)},t.exports=n}}),K=e({"node_modules/qrcode/lib/core/byte-data.js"(e,t){var r=x();function a(e){this.mode=r.BYTE,this.data="string"==typeof e?(new TextEncoder).encode(e):new Uint8Array(e)}a.getBitsLength=function(e){return 8*e},a.prototype.getLength=function(){return this.data.length},a.prototype.getBitsLength=function(){return a.getBitsLength(this.data.length)},a.prototype.write=function(r){for(let e=0,t=this.data.length;e<t;e++)r.put(this.data[e],8)},t.exports=a}}),V=e({"node_modules/qrcode/lib/core/kanji-data.js"(e,t){var r=x(),a=b();function n(e){this.mode=r.KANJI,this.data=e}n.getBitsLength=function(e){return 13*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(t){let r;for(r=0;r<this.data.length;r++){let e=a.toSJIS(this.data[r]);if(33088<=e&&e<=40956)e-=33088;else{if(!(57408<=e&&e<=60351))throw new Error("Invalid SJIS character: "+this.data[r]+"\nMake sure your charset is UTF-8");e-=49472}e=192*(e>>>8&255)+(255&e),t.put(e,13)}},t.exports=n}}),W=e({"node_modules/dijkstrajs/dijkstra.js"(e,t){var g={single_source_shortest_paths:function(e,t,r){var a,n,o,i,s,l,c,d={},u={},p=(u[t]=0,g.PriorityQueue.make());for(p.push(t,0);!p.empty();)for(o in n=(a=p.pop()).value,i=a.cost,s=e[n]||{})s.hasOwnProperty(o)&&(l=i+s[o],void 0===(c=u[o])||l<c)&&(p.push(o,u[o]=l),d[o]=n);if(void 0!==r&&void 0===u[r])throw t=["Could not find a path from ",t," to ",r,"."].join(""),new Error(t);return d},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],a=t;a;)r.push(a),e[a],a=e[a];return r.reverse(),r},find_path:function(e,t,r){e=g.single_source_shortest_paths(e,t,r);return g.extract_shortest_path_from_predecessor_list(e,r)},PriorityQueue:{make:function(e){var t,r=g.PriorityQueue,a={};for(t in e=e||{},r)r.hasOwnProperty(t)&&(a[t]=r[t]);return a.queue=[],a.sorter=e.sorter||r.default_sorter,a},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};void 0!==t&&(t.exports=g)}}),$=e({"node_modules/qrcode/lib/core/segments.js"(o){var u=x(),n=G(),i=Y(),s=K(),l=V(),c=y(),d=b(),p=W();function g(e){return unescape(encodeURIComponent(e)).length}function m(e,t,r){for(var a,n=[];null!==(a=e.exec(r));)n.push({data:a[0],index:a.index,mode:t,length:a[0].length});return n}function f(e){var t=m(c.NUMERIC,u.NUMERIC,e),r=m(c.ALPHANUMERIC,u.ALPHANUMERIC,e);let a,n;return n=d.isKanjiModeEnabled()?(a=m(c.BYTE,u.BYTE,e),m(c.KANJI,u.KANJI,e)):(a=m(c.BYTE_KANJI,u.BYTE,e),[]),t.concat(r,a,n).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function h(e,t){switch(t){case u.NUMERIC:return n.getBitsLength(e);case u.ALPHANUMERIC:return i.getBitsLength(e);case u.KANJI:return l.getBitsLength(e);case u.BYTE:return s.getBitsLength(e)}}function r(e,t){let r;var a=u.getBestModeForData(e);if((r=u.from(t,a))!==u.BYTE&&r.bit<a.bit)throw new Error('"'+e+'" cannot be encoded with mode '+u.toString(r)+".\n Suggested mode is: "+u.toString(a));switch(r=r!==u.KANJI||d.isKanjiModeEnabled()?r:u.BYTE){case u.NUMERIC:return new n(e);case u.ALPHANUMERIC:return new i(e);case u.KANJI:return new l(e);case u.BYTE:return new s(e)}}o.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(r(t,null)):t.data&&e.push(r(t.data,t.mode)),e},[])},o.fromString=function(e,t){var r=((e,r)=>{var a={},n={start:{}};let o=["start"];for(let t=0;t<e.length;t++){var i=e[t],s=[];for(let e=0;e<i.length;e++){var l=i[e],c=""+t+e;s.push(c),a[c]={node:l,lastCount:0},n[c]={};for(let e=0;e<o.length;e++){var d=o[e];a[d]&&a[d].node.mode===l.mode?(n[d][c]=h(a[d].lastCount+l.length,l.mode)-h(a[d].lastCount,l.mode),a[d].lastCount+=l.length):(a[d]&&(a[d].lastCount=l.length),n[d][c]=h(l.length,l.mode)+4+u.getCharCountIndicator(l.mode,r))}}o=s}for(let e=0;e<o.length;e++)n[o[e]].end=0;return{map:n,table:a}})((t=>{var r=[];for(let e=0;e<t.length;e++){var a=t[e];switch(a.mode){case u.NUMERIC:r.push([a,{data:a.data,mode:u.ALPHANUMERIC,length:a.length},{data:a.data,mode:u.BYTE,length:a.length}]);break;case u.ALPHANUMERIC:r.push([a,{data:a.data,mode:u.BYTE,length:a.length}]);break;case u.KANJI:r.push([a,{data:a.data,mode:u.BYTE,length:g(a.data)}]);break;case u.BYTE:r.push([{data:a.data,mode:u.BYTE,length:g(a.data)}])}}return r})(f(e,d.isKanjiModeEnabled())),t),a=p.find_path(r.map,"start","end"),n=[];for(let e=1;e<a.length-1;e++)n.push(r.table[a[e]].node);return o.fromArray(n.reduce(function(e,t){var r=0<=e.length-1?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},o.rawSplit=function(e){return o.fromArray(f(e,d.isKanjiModeEnabled()))}}}),X=e({"node_modules/qrcode/lib/core/qrcode.js"(e){var N=b(),o=p(),r=D(),M=H(),T=U(),I=B(),A=O(),C=g(),P=J(),q=F(),s=Q(),a=x(),R=$();function L(e,t,r){var a=e.size,n=s.getEncodedBits(t,r);let o,i;for(o=0;o<15;o++)i=1==(n>>o&1),o<6?e.set(o,8,i,!0):o<8?e.set(o+1,8,i,!0):e.set(a-15+o,8,i,!0),o<8?e.set(8,a-o-1,i,!0):o<9?e.set(8,15-o-1+1,i,!0):e.set(8,15-o-1,i,!0);e.set(a-8,8,1,!0)}function z(v,w,j){let E=new r;j.forEach(function(e){E.put(e.mode.bit,4),E.put(e.getLength(),a.getCharCountIndicator(e.mode,v)),e.write(E)});j=8*(N.getSymbolTotalCodewords(v)-C.getTotalCodewordsCount(v,w));for(E.getLengthInBits()+4<=j&&E.put(0,4);E.getLengthInBits()%8!=0;)E.putBit(0);var t=(j-E.getLengthInBits())/8;for(let e=0;e<t;e++)E.put(e%2?17:236,8);{j=E;var k=v;let e=N.getSymbolTotalCodewords(k),t=C.getTotalCodewordsCount(k,w),r=e-t,a=C.getBlocksCount(k,w),n=e%a,o=a-n,i=Math.floor(e/a),s=Math.floor(r/a),l=s+1,c=i-s,d=new P(c),u=0,p=new Array(a),g=new Array(a),m=0,f=new Uint8Array(j.buffer);for(let e=0;e<a;e++){var S=e<o?s:l;p[e]=f.slice(u,u+S),g[e]=d.encode(p[e]),u+=S,m=Math.max(m,S)}let h=new Uint8Array(e),b=0,y,x;for(y=0;y<m;y++)for(x=0;x<a;x++)y<p[x].length&&(h[b++]=p[x][y]);for(y=0;y<c;y++)for(x=0;x<a;x++)h[b++]=g[x][y];return h}}function i(t,r,a,e){let n;if(Array.isArray(t))n=R.fromArray(t);else{if("string"!=typeof t)throw new Error("Invalid data");{let e=r;e||(i=R.rawSplit(t),e=q.getBestVersionForData(i,a)),n=R.fromString(t,e||40)}}var i=q.getBestVersionForData(n,a);if(!i)throw new Error("The amount of data is too big to be stored in a QR Code");if(r){if(r<i)throw new Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+i+".\n")}else r=i;var t=z(r,a,n),i=N.getSymbolSize(r),i=new M(i),o=i,s=r,l=o.size,c=I.getPositions(s);for(let e=0;e<c.length;e++){var d=c[e][0],u=c[e][1];for(let t=-1;t<=7;t++)if(!(d+t<=-1||l<=d+t))for(let e=-1;e<=7;e++)u+e<=-1||l<=u+e||(0<=t&&t<=6&&(0===e||6===e)||0<=e&&e<=6&&(0===t||6===t)||2<=t&&t<=4&&2<=e&&e<=4?o.set(d+t,u+e,!0,!0):o.set(d+t,u+e,!1,!0))}var p=i,g=p.size;for(let e=8;e<g-8;e++){var m=e%2==0;p.set(e,6,m,!0),p.set(6,e,m,!0)}var f=i,s=r,h=T.getPositions(s);for(let e=0;e<h.length;e++){var b=h[e][0],y=h[e][1];for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++)-2===t||2===t||-2===e||2===e||0===t&&0===e?f.set(b+t,y+e,!0,!0):f.set(b+t,y+e,!1,!0)}if(L(i,a,0),7<=r){var x,v,w,j=i,s=r,E=j.size,k=q.getEncodedBits(s);for(let e=0;e<18;e++)x=Math.floor(e/3),v=e%3+E-8-3,w=1==(k>>e&1),j.set(x,v,w,!0),j.set(v,x,w,!0)}{var S=i,C=t,P=S.size;let e=-1,a=P-1,n=7,o=0;for(let r=P-1;0<r;r-=2)for(6===r&&r--;;){for(let t=0;t<2;t++)if(!S.isReserved(a,r-t)){let e=!1;o<C.length&&(e=1==(C[o]>>>n&1)),S.set(a,r-t,e),-1===--n&&(o++,n=7)}if((a+=e)<0||P<=a){a-=e,e=-e;break}}}return isNaN(e)&&(e=A.getBestMask(i,L.bind(null,i,a))),A.applyMask(e,i),L(i,a,e),{modules:i,version:r,errorCorrectionLevel:a,maskPattern:e,segments:n}}e.create=function(e,t){if(void 0===e||""===e)throw new Error("No input text");let r=o.M,a,n;return void 0!==t&&(r=o.from(t.errorCorrectionLevel,o.M),a=q.from(t.version),n=A.from(t.maskPattern),t.toSJISFunc)&&N.setToSJISFunction(t.toSJISFunc),i(e,a,r,n)}}}),a=e({"node_modules/qrcode/lib/renderer/utils.js"(m){function n(e){if("string"!=typeof(e="number"==typeof e?e.toString():e))throw new Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||8<t.length)throw new Error("Invalid hex color: "+e);6===(t=3!==t.length&&4!==t.length?t:Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))).length&&t.push("F","F");e=parseInt(t.join(""),16);return{r:e>>24&255,g:e>>16&255,b:e>>8&255,a:255&e,hex:"#"+t.slice(0,6).join("")}}m.getOptions=function(e){(e=e||{}).color||(e.color={});var t=null==e.margin||e.margin<0?4:e.margin,r=e.width&&21<=e.width?e.width:void 0,a=e.scale||4;return{width:r,scale:r?4:a,margin:t,color:{dark:n(e.color.dark||"#000000ff"),light:n(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},m.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},m.getImageWidth=function(e,t){var r=m.getScale(e,t);return Math.floor((e+2*t.margin)*r)},m.qrToImageData=function(a,e,n){var o=e.modules.size,i=e.modules.data,s=m.getScale(o,n),l=Math.floor((o+2*n.margin)*s),c=n.margin*s,d=[n.color.light,n.color.dark];for(let r=0;r<l;r++)for(let t=0;t<l;t++){var u,p,g=4*(r*l+t);let e=n.color.light;r>=c&&t>=c&&r<l-c&&t<l-c&&(u=Math.floor((r-c)/s),p=Math.floor((t-c)/s),e=d[i[u*o+p]?1:0]),a[g++]=e.r,a[g++]=e.g,a[g++]=e.b,a[g]=e.a}}}}),Z=e({"node_modules/qrcode/lib/renderer/canvas.js"(n){var i=a();n.render=function(e,t,r){let a=r,n=t;void 0!==a||t&&t.getContext||(a=t,t=void 0),t||(n=(()=>{try{return document.createElement("canvas")}catch(e){throw new Error("You need to specify a canvas element")}})()),a=i.getOptions(a);var r=i.getImageWidth(e.modules.size,a),t=n.getContext("2d"),o=t.createImageData(r,r);return i.qrToImageData(o.data,e,a),e=n,r=r,t.clearRect(0,0,e.width,e.height),e.style||(e.style={}),e.height=r,e.width=r,e.style.height=r+"px",e.style.width=r+"px",t.putImageData(o,0,0),n},n.renderToDataURL=function(e,t,r){let a=r;void 0!==a||t&&t.getContext||(a=t,t=void 0),a=a||{};r=n.render(e,t,a),e=a.type||"image/png",t=a.rendererOpts||{};return r.toDataURL(e,t.quality)}}}),ee=e({"node_modules/qrcode/lib/renderer/svg-tag.js"(e){var i=a();function s(e,t){var r=e.a/255,e=t+'="'+e.hex+'"';return r<1?e+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':e}function d(e,t,r){let a=e+t;return void 0!==r&&(a+=" "+r),a}e.render=function(e,t,r){var t=i.getOptions(t),a=e.modules.size,e=e.modules.data,n=a+2*t.margin,o=t.color.light.a?"<path "+s(t.color.light,"fill")+' d="M0 0h'+n+"v"+n+'H0z"/>':"",e="<path "+s(t.color.dark,"stroke")+' d="'+((t,r,a)=>{let n="",o=0,i=!1,s=0;for(let e=0;e<t.length;e++){var l=Math.floor(e%r),c=Math.floor(e/r);l||(i=i||!0),t[e]?(s++,0<e&&0<l&&t[e-1]||(n+=i?d("M",l+a,.5+c+a):d("m",o,0),o=0,i=!1),l+1<r&&t[e+1]||(n+=d("h",s),s=0)):o++}return n})(e,a,t.margin)+'"/>',a='<svg xmlns="http://www.w3.org/2000/svg" '+(t.width?'width="'+t.width+'" height="'+t.width+'" ':"")+('viewBox="0 0 '+n+" "+n+'"')+' shape-rendering="crispEdges">'+o+e+"</svg>\n";return"function"==typeof r&&r(null,a),a}}}),e=e({"node_modules/qrcode/lib/browser.js"(e){var l=L(),c=X(),t=Z(),a=ee();function r(a,n,o,i,t){var e=[].slice.call(arguments,1),r=e.length,e="function"==typeof e[r-1];if(!e&&!l())throw new Error("Callback required as last argument");if(!e){if(r<1)throw new Error("Too few arguments provided");return 1===r?(o=n,n=i=void 0):2!==r||n.getContext||(i=o,o=n,n=void 0),new Promise(function(e,t){try{var r=c.create(o,i);e(a(r,n,i))}catch(e){t(e)}})}if(r<2)throw new Error("Too few arguments provided");2===r?(t=o,o=n,n=i=void 0):3===r&&(n.getContext&&void 0===t?(t=i,i=void 0):(t=i,i=o,o=n,n=void 0));try{var s=c.create(o,i);t(null,a(s,n,i))}catch(e){t(e)}}e.create=c.create,e.toCanvas=r.bind(null,t.render),e.toDataURL=r.bind(null,t.renderToDataURL),e.toString=r.bind(null,function(e,t,r){return a.render(e,r)})}}),l=t(r()),ae=t(r()),s=e=>e?e.startsWith("https://")?e:e.startsWith("spotify:image:")?"https://i.scdn.co/image/"+e.slice(14):"":"",ne=async()=>{var e,t,r,a,n;try{var o=await(null==(r=null==(t=Spicetify.Platform)?void 0:t.UserAPI)?void 0:r.getUser());if(null!=o&&o.displayName)return{name:o.displayName,image:s((null==(n=null==(a=o.images)?void 0:a[0])?void 0:n.url)||(null==(e=o.images)?void 0:e[0])||"")}}catch(e){}try{var i=await Spicetify.CosmosAsync.get("sp://identity/v1/profile");if(null!=i&&i.displayName||null!=i&&i.name)return{name:i.displayName||i.name,image:s(i.imageUrl||i.image||"")}}catch(e){}return{name:Spicetify.Username||(null==(r=null==(t=document.querySelector('[data-testid="user-widget-name"]'))?void 0:t.textContent)?void 0:r.trim())||(null==(n=null==(a=document.querySelector(".main-userWidget-displayName"))?void 0:a.textContent)?void 0:n.trim())||"Listener",image:""}},oe=()=>{var e,t,r=null==(r=Spicetify.Player.data)?void 0:r.item;return r?(t=r.metadata||{},{title:r.name||t.title||"Unknown",artist:(null==(e=null==(e=r.artists)?void 0:e[0])?void 0:e.name)||t.artist_name||"Unknown",artUrl:s(t.image_xlarge_url||t.image_large_url||t.image_url||(null==(t=null==(e=r.images)?void 0:e[0])?void 0:t.url)),uri:r.uri,uid:r.uid}):null},te=e=>{var t,r=(null==e?void 0:e.contextTrack)||(null==e?void 0:e.track)||e||{},a=(null==r?void 0:r.metadata)||(null==e?void 0:e.metadata)||{};return{title:r.name||a.name||a.title||e.name||"?",artist:(null==(t=null==(t=r.artists)?void 0:t[0])?void 0:t.name)||a.artist_name||a.album_artist||e.artist_name||"?",artUrl:s(a.image_xlarge_url||a.image_large_url||a.image_url||(null==(t=null==(t=null==(t=r.album)?void 0:t.images)?void 0:t[0])?void 0:t.url)||e.imageUrl||a.thumbnail_url),uri:r.uri||e.uri||"",uid:r.uid||e.uid||""}},ie=async()=>{var r,a,n,o,i;try{let e=[];try{var s,l,c=await(null==(a=null==(r=Spicetify.Platform)?void 0:r.PlayerAPI)?void 0:a.getQueue());c&&(s=c.queued||[],l=c.autoplay||c.context||c.nextTracks||[],0<s.length||0<l.length)&&(e=[...s,...l])}catch(e){}if(e&&0!==e.length||null!=(o=null==(n=Spicetify.Player)?void 0:n.data)&&o.next_tracks&&(e=Spicetify.Player.data.next_tracks),!(e=e&&0!==e.length?e:(null==(i=Spicetify.Queue)?void 0:i.nextTracks)||[])||0===e.length)try{var d=await Spicetify.CosmosAsync.get("sp://player/v2/main/queue");e=(null==d?void 0:d.next_tracks)||(null==d?void 0:d.tracks)||[]}catch(e){}if(!e)return[];let t=new Set;return e.map(te).filter(e=>!(!e.uri||t.has(e.uid||e.uri)||"?"===e.title&&"?"===e.artist||(t.add(e.uid||e.uri),0))).slice(0,40)}catch(e){return[]}},re=class{constructor(){this.ws=null,this.clientId=null,this.onPeerJoinedCallback=null}onPeerJoined(e){this.onPeerJoinedCallback=e}connect(e,a){let t=null,r=null;var n={then(e){t=e},catch(e){return r=e,this}};return this.ws=new WebSocket("wss://jam-rtc.tanujairam.workers.dev/room/"+e),this.ws.onopen=()=>{console.log("[SIGNAL] Connected",e),null!=t&&t()},this.ws.onmessage=e=>{var t;try{var r=JSON.parse(e.data);"CONNECTED"===r.type&&r.clientId?(this.clientId=r.clientId,console.log("[SIGNAL] Client ID:",this.clientId)):"PEER_JOINED"===r.type&&r.clientId?(console.log("[SIGNAL] Peer joined:",r.clientId),null!=(t=this.onPeerJoinedCallback)&&t.call(this,r.clientId)):a(r)}catch(e){console.error("[SIGNAL] Parse error",e)}},this.ws.onerror=e=>{null!=r&&r(e)},n}async waitForClientId(){for(;!this.clientId;)await(t=>({then(e){setTimeout(e,t)}}))(50);return this.clientId}send(e){var t;null!=(t=this.ws)&&t.send(JSON.stringify(e))}close(){var e;null!=(e=this.ws)&&e.close()}},n=class{constructor(e,t){this.connections=new Map,this.peerConnections=new Map,this.signaling=new re,this.roomId=e,this.role=t}addConnection(e,t,r){this.connections.set(e,t),r&&this.peerConnections.set(e,r)}getConnection(e){return this.connections.get(e)}getPeerConnection(e){return this.peerConnections.get(e)}removeConnection(e){var t=this.connections.get(e),t=(t&&(t.close(),this.connections.delete(e)),this.peerConnections.get(e));t&&(t.close(),this.peerConnections.delete(e))}connect(e){var t=this.connections.get(e);if(t)return t;throw new Error("Connection not found: "+e)}destroy(){for(var e of this.connections.values())e.close();for(var t of this.peerConnections.values())t.close();this.connections.clear(),this.peerConnections.clear(),this.signaling.close()}},c=[{urls:["stun:stun.l.google.com:19302","stun:stun.relay.metered.ca:80"]},{urls:"turn:global.relay.metered.ca:80",username:"855afddb586aeb45ff1d8548",credential:"FPSBc6fiSuioTE5V"},{urls:"turn:global.relay.metered.ca:80?transport=tcp",username:"855afddb586aeb45ff1d8548",credential:"FPSBc6fiSuioTE5V"},{urls:"turn:global.relay.metered.ca:443",username:"855afddb586aeb45ff1d8548",credential:"FPSBc6fiSuioTE5V"},{urls:"turns:global.relay.metered.ca:443?transport=tcp",username:"855afddb586aeb45ff1d8548",credential:"FPSBc6fiSuioTE5V"}],le=class{constructor(e){this.channel=null,this.openListeners=[],this.dataListeners=[],this.closeListeners=[],this.errorListeners=[],this.queuedMessages=[],this.closed=!1,this.id=e}attach(e){if(!this.channel&&!this.closed){this.channel=e,this.channel.addEventListener("open",()=>{this.openListeners.forEach(e=>e())}),this.channel.addEventListener("message",e=>{let t=JSON.parse(e.data);this.dataListeners.forEach(e=>e(t))}),this.channel.addEventListener("close",()=>{this.closeListeners.forEach(e=>e())}),this.channel.addEventListener("error",t=>{this.errorListeners.forEach(e=>e(t))}),"open"===this.channel.readyState&&setTimeout(()=>{this.openListeners.forEach(e=>e())},0);for(var t of this.queuedMessages)this.channel.send(JSON.stringify(t));this.queuedMessages=[]}}get open(){return!!this.channel&&"open"===this.channel.readyState}send(e){this.channel&&"open"===this.channel.readyState?this.channel.send(JSON.stringify(e)):this.queuedMessages.push(e)}close(){var e;this.closed=!0,null!=(e=this.channel)&&e.close()}onOpen(e){this.channel?this.channel.addEventListener("open",e):this.openListeners.push(e)}onData(t){this.channel?this.channel.addEventListener("message",e=>t(JSON.parse(e.data))):this.dataListeners.push(t)}onClose(e){this.channel?this.channel.addEventListener("close",e):this.closeListeners.push(e)}onError(e){this.channel?this.channel.addEventListener("error",e):this.errorListeners.push(e)}},d=class{constructor(e,t){this.channel=t,this.id=e}get open(){return"open"===this.channel.readyState}send(e){this.channel.send(JSON.stringify(e))}close(){this.channel.close()}onOpen(e){this.channel.addEventListener("open",e)}onData(t){this.channel.addEventListener("message",e=>{t(JSON.parse(e.data))})}onClose(e){this.channel.addEventListener("close",e)}onError(e){this.channel.addEventListener("error",e)}},ce=async(e,o)=>{let i=new n(e,"host"),s=new Map,l=async(e,t)=>{var r=s.get(e);if(null!=r&&r.length){for(var a of r)await t.addIceCandidate(a);s.delete(e)}};return await i.signaling.connect(e,async r=>{if(r.sender!==i.signaling.clientId){var e,t;if("answer"===r.type&&(console.log("[HOST] Answer received from",r.sender),a=i.getPeerConnection(r.sender))&&(await a.setRemoteDescription(r.answer),console.log("[HOST] Remote description set"),await l(r.sender,a)),"candidate"===r.type){var a=i.getPeerConnection(r.sender);if(!a||!a.remoteDescription)return e=r.sender,n=r.candidate,(t=null!=(t=s.get(e))?t:[]).push(n),void s.set(e,t);await a.addIceCandidate(r.candidate)}if("offer"===r.type){let e=i.getPeerConnection(r.sender);if(!e){let t=e=new RTCPeerConnection({iceServers:c});t.onconnectionstatechange=()=>{console.log("[HOST PC]",t.connectionState)},t.onicegatheringstatechange=()=>{console.log("[HOST GATHER]",t.iceGatheringState)},t.onicecandidateerror=e=>{console.log("[HOST ICE ERROR]",e)},t.oniceconnectionstatechange=()=>{console.log("[HOST ICE STATE]",t.iceConnectionState)},t.ondatachannel=e=>{e.channel.onopen=()=>{console.log("[HOST] DataChannel OPEN",r.sender)},e.channel.onclose=()=>{console.log("[HOST] DataChannel CLOSE",r.sender)};e=new d(r.sender,e.channel);i.addConnection(r.sender,e,t),o(e)},t.onicecandidate=e=>{e.candidate?i.signaling.send({sender:i.signaling.clientId,target:r.sender,type:"candidate",candidate:e.candidate}):console.log("[HOST ICE] COMPLETE")}}await e.setRemoteDescription(r.offer),await l(r.sender,e);var n=await e.createAnswer();await e.setLocalDescription(n),i.signaling.send({sender:i.signaling.clientId,target:r.sender,type:"answer",answer:n})}}}),await i.signaling.waitForClientId(),i.signaling.onPeerJoined(async t=>{console.log("[HOST] Creating RTC for",t);let e=new RTCPeerConnection({iceServers:c});e.onconnectionstatechange=()=>{console.log("[HOST PC]",e.connectionState)},e.onicegatheringstatechange=()=>{console.log("[HOST GATHER]",e.iceGatheringState)},e.onicecandidateerror=e=>{console.log("[HOST ICE ERROR]",e)},e.oniceconnectionstatechange=()=>{console.log("[HOST ICE STATE]",e.iceConnectionState)};var r=e.createDataChannel("jam"),r=(r.onopen=()=>{console.log("[HOST] DataChannel OPEN",t)},r.onclose=()=>{console.log("[HOST] DataChannel CLOSE",t)},new d(t,r)),r=(i.addConnection(t,r,e),o(r),e.onicecandidate=e=>{e.candidate?(console.log("[HOST ICE]",e.candidate.candidate),i.signaling.send({sender:i.signaling.clientId,target:t,type:"candidate",candidate:e.candidate})):console.log("[HOST ICE] COMPLETE")},console.log("[HOST] Creating offer for",t),await e.createOffer());await e.setLocalDescription(r),console.log("[HOST] Sending offer to",t),i.signaling.send({sender:i.signaling.clientId,target:t,type:"offer",offer:r})}),i},de=async(e,o)=>{let i=new n(e,"guest"),s=new Map,l=null;return await i.signaling.connect(e,async e=>{if(!i.signaling.clientId||e.sender!==i.signaling.clientId){if("offer"===e.type){l=e.sender;var r=e.sender;if(!i.getPeerConnection(r)){var a=r;let t=new le(a),e=new RTCPeerConnection({iceServers:c});e.onconnectionstatechange=()=>{console.log("[GUEST PC]",e.connectionState)},e.onicegatheringstatechange=()=>{console.log("[GUEST GATHER]",e.iceGatheringState)},e.onicecandidateerror=e=>{console.log("[GUEST ICE ERROR]",e)},e.oniceconnectionstatechange=()=>{console.log("[GUEST ICE STATE]",e.iceConnectionState)},i.addConnection(a,t,e),e.onicecandidate=e=>{e.candidate?(console.log("[GUEST ICE]",e.candidate.candidate),i.signaling.send({sender:i.signaling.clientId,target:a,type:"candidate",candidate:e.candidate})):console.log("[GUEST ICE] COMPLETE")},e.ondatachannel=e=>{console.log("[GUEST] DataChannel received"),e.channel.onopen=()=>{console.log("[GUEST] DataChannel OPEN")},e.channel.onclose=()=>{console.log("[GUEST] DataChannel CLOSE")},t.attach(e.channel)},t.onClose(()=>{i.removeConnection(a)}),o(t),t}var t=i.getPeerConnection(r);if(!t)return;console.log("[GUEST] Offer from",r),await t.setRemoteDescription(e.offer),console.log("[GUEST] Remote description set"),await(async(e,t)=>{var r=s.get(e);if(null!=r&&r.length){for(var a of r)await t.addIceCandidate(a);s.delete(e)}})(r,t);var n=await t.createAnswer();await t.setLocalDescription(n),console.log("[GUEST] Sending answer"),i.signaling.send({sender:i.signaling.clientId,target:r,type:"answer",answer:n})}"candidate"===e.type&&(t=e.sender)===(l=l||t)&&((r=i.getPeerConnection(t))&&r.remoteDescription?await r.addIceCandidate(e.candidate):(n=t,r=e.candidate,(t=null!=(t=s.get(n))?t:[]).push(r),s.set(n,t)))}}),await i.signaling.waitForClientId(),i},ue=(t,e,r,a)=>{console.log("[JAM] setupConn",t.id),t.onOpen(()=>{console.log("[JAM] connection open",t.id),e.current.set(t.id,t)}),t.onData(e=>{console.log("[JAM] data received",null==e?void 0:e.type,"from",t.id),r(e,t)}),t.onClose(()=>{console.warn("[JAM] connection closed",t.id),e.current.delete(t.id),a(t.id)}),t.onError(e=>{console.error("[JAM] connection error",t.id,e)})},pe=async e=>{e.retries;var t=await(e.userPromise.current||ne()),r=(e.cachedUser.current=t,console.log("[HOST] Creating room..."),Math.random().toString(36).substring(2,8).toUpperCase()),a=await ce(r,e.setupConn),r=(e.setJamId(r),e.setIsHost(!0),e.setConnected(!0),e.setError(null),e.setHostName(t.name),e.setMembers([{id:"host",name:t.name,image:t.image,isHost:!0}]),oe());return r&&e.setNowPlaying(r),e.setIsPlaying(Spicetify.Player.isPlaying()),e.setProgress(Spicetify.Player.getProgress()),e.setDuration(Spicetify.Player.getDuration()),setTimeout(e.refreshQueue,500),console.log("[HOST] Ready for connections"),a},ge=async e=>{var t=await(e.userPromise.current||ne()),r=(e.cachedUser.current=t,e.id.includes("jam=")?e.id.split("jam=")[1]:e.id.trim()),a=(console.log("[GUEST] Join requested"),console.log("[GUEST] User:",t.name),console.log("[GUEST] Room ID:",r),await de(r,e.setupConn));return e.setJamId(r),e.setIsHost(!1),e.setConnected(!1),e.setError(null),e.setMembers([{id:r,name:"Host",isHost:!0},{id:"me",name:t.name,image:t.image}]),a},me=async(e,t,r)=>{var a=r.refs.current;a.isHost&&(r.memberRegistry.current.set(t.id,{name:e.name||"Listener",image:e.image||""}),e=r.buildMembers(),r.setMembers(e),t.send({type:"INIT",np:oe(),queue:await ie(),host:r.cachedUser.current.name,gc:a.guestControls,playing:Spicetify.Player.isPlaying(),members:e,progress:Spicetify.Player.getProgress(),duration:Spicetify.Player.getDuration()}),null!=(a=Spicetify.Player.data)&&a.item&&t.send({type:"PLAY",uri:Spicetify.Player.data.item.uri,pos:Spicetify.Player.getProgress(),ts:Date.now(),paused:!Spicetify.Player.isPlaying()}),r.broadcast({type:"MEMBERS",members:e}))},fe=(e,t)=>{e.np&&(t.setNowPlaying(e.np),t.refs.current.targetUri=e.np.uri),e.queue&&t.setQueue(e.queue),e.host&&t.setHostName(e.host),e.members&&t.setMembers(e.members),void 0!==e.gc&&t.setGuestControls(e.gc),void 0!==e.playing&&t.setIsPlaying(e.playing),void 0!==e.progress&&t.setProgress(e.progress),void 0!==e.duration&&t.setDuration(e.duration)},he=(e,t)=>{t.setMembers(e.members)},be=(e,t)=>{t.setGuestControls(e.on)},ye=(t,e,r)=>{var a=r.refs.current;a.isHost&&a.guestControls&&(Date.now()-(r.cmdThrottle.current.get(e.id)||0)<500||(r.cmdThrottle.current.set(e.id,Date.now()),"play"===t.a?Spicetify.Player.play():"pause"===t.a?Spicetify.Player.pause():"next"===t.a?Spicetify.Player.next():"back"===t.a?Spicetify.Player.back():"seek"===t.a?Spicetify.Player.seek(t.pos):"playuri"===t.a&&(0<=(a=r.queueRef.current.findIndex(e=>e.uri===t.uri))&&(r.pendingQueueRestore.current=r.queueRef.current.slice(a+1),e=r.queueRef.current.slice(a+1),r.setQueue(e),r.broadcast({type:"Q",queue:e})),r.refs.current.targetUri=t.uri,Spicetify.Player.playUri(t.uri))))},xe=(e,t)=>{t.leaveJam(),t.setError("Removed from Jam"),Spicetify.showNotification("Kicked from Jam")},ve=async(a,n)=>{let e,t,o=n.refs.current;if(!o.isHost){var r=(null==(t=null==(e=Spicetify.Player.data)?void 0:e.item)?void 0:t.uri)!==a.uri;if(o.targetUri=a.uri,r&&n.setProgress(0),a.paused)r?(o.ignoreSync=!0,n.setIsPlaying(!1),Spicetify.Player.playUri(a.uri).then(()=>{setTimeout(()=>{Spicetify.Player.pause(),o.ignoreSync=!1},150)}).catch(()=>{o.ignoreSync=!1})):(Spicetify.Player.pause(),n.setIsPlaying(!1));else if(r){o.ignoreSync=!0,n.setIsPlaying(!0);let r=Date.now();Spicetify.Player.playUri(a.uri).then(()=>{var e=Date.now()-r+(Date.now()-a.ts);let t=a.pos+(Date.now()-a.ts);e=setTimeout(()=>Spicetify.Player.seek(t),Math.max(300,e));n.seekTimers.current.push(e)}).catch(()=>{o.ignoreSync=!1})}else{r=Date.now()-a.ts;Spicetify.Player.seek(a.pos+r),n.setIsPlaying(!0),Spicetify.Player.isPlaying()||Spicetify.Player.play()}}a.np&&n.setNowPlaying(a.np)},we=(e,t)=>{t.refs.current.isHost||(Spicetify.Player.pause(),t.setIsPlaying(!1))},je=(e,t)=>{t.refs.current.isHost||(t=Date.now()-e.ts,Spicetify.Player.seek(e.pos+t))},Ee=(e,t)=>{t.refs.current.isHost||(t.setIsPlaying(e.p),void 0!==e.pos&&t.setProgress(e.pos),void 0!==e.dur&&t.setDuration(e.dur))},ke=(e,t)=>{t.refs.current.isHost&&t.addToQueue(e.uri)},Se=(e,t)=>{t.refs.current.isHost&&t.removeFromQueue(e.uri,e.uid)},Ce=(e,t)=>{t.setQueue(e.queue)},Pe=(e,t,r)=>{t.send({type:"PONG",ts:e.ts})},Ne=(e,t)=>{t.setPing(Date.now()-e.ts)},Me=(e,t,r)=>{r.refs.current.isHost&&null!=(r=Spicetify.Player.data)&&r.item&&t.send({type:"PLAY",uri:Spicetify.Player.data.item.uri,pos:Spicetify.Player.getProgress(),ts:Date.now(),np:oe(),paused:!Spicetify.Player.isPlaying()})},Te=async(e,t,r)=>{switch(r.refs.current.isHost||(r.lastHostMsg.current=Date.now()),e.type){case"JOIN":return me(e,t,r);case"INIT":return fe(e,r);case"MEMBERS":return he(e,r);case"GCTRL":return be(e,r);case"CMD":return ye(e,t,r);case"KICK":return xe(e,r);case"PLAY":return ve(e,r);case"PAUSE":return we(e,r);case"SEEK":return je(e,r);case"PS":return Ee(e,r);case"ADD_Q":return ke(e,r);case"RM_Q":return Se(e,r);case"Q":return Ce(e,r);case"PING":return Pe(e,t,r);case"PONG":return Ne(e,r);case"SYNC":return Me(e,t,r)}},se=(0,ae.createContext)(void 0),u=({children:z})=>{let[r,a]=(0,ae.useState)(!1),[e,n]=(0,ae.useState)(""),[D,o]=(0,ae.useState)([]),[i,s]=(0,ae.useState)(!1),[H,l]=(0,ae.useState)(null),[U,c]=(0,ae.useState)(null),[B,O]=(0,ae.useState)("Host"),[t,d]=(0,ae.useState)([]),[u,_]=(0,ae.useState)(!1),[p,g]=(0,ae.useState)(!1),[J,m]=(0,ae.useState)(0),[F,f]=(0,ae.useState)(0),[Q,G]=(0,ae.useState)(-1),[Y,K]=(0,ae.useState)(!1),h=(0,ae.useRef)(null),b=(0,ae.useRef)(new Map),y=(0,ae.useRef)(new Map),x=(0,ae.useRef)({name:"Listener",image:""}),v=(0,ae.useRef)(null),w=(0,ae.useRef)({isHost:!1,connected:!1,guestControls:!1,jamId:"",targetUri:null,ignoreSync:!1,isPlaying:!1,forcingPause:!1}),V=(0,ae.useRef)(new Map),j=(0,ae.useRef)(0),E=(0,ae.useRef)(0),k=(0,ae.useRef)(null),S=(0,ae.useRef)(null),C=(0,ae.useRef)([]),P=(0,ae.useRef)(null),N=(0,ae.useRef)([]),M=(0,ae.useRef)([]),T=((0,ae.useEffect)(()=>{M.current=t},[t]),(0,ae.useEffect)(()=>{w.current.isHost=r},[r]),(0,ae.useEffect)(()=>{w.current.connected=i},[i]),(0,ae.useEffect)(()=>{w.current.guestControls=u},[u]),(0,ae.useEffect)(()=>{w.current.jamId=e},[e]),(0,ae.useEffect)(()=>{w.current.isPlaying=p},[p]),(0,ae.useEffect)(()=>{v.current=ne(),v.current.then(e=>{x.current=e});(async()=>{try{var e=await(await fetch("https://raw.githubusercontent.com/Kyzenkms/spicetify-jam/main/manifest.json")).json();e.version&&"1.0.0"!==e.version&&(K(!0),console.log("[Spicetify Jam] Update available:",e.version))}catch(e){}})()},[]),(0,ae.useCallback)(t=>b.current.forEach(e=>e.open&&e.send(t)),[])),I=(0,ae.useCallback)(()=>b.current.get(w.current.jamId)||Array.from(b.current.values())[0],[]),A=(0,ae.useCallback)(()=>{var e=x.current;let a=[];return w.current.isHost&&(a.push({id:"host",name:e.name,image:e.image,isHost:!0}),b.current.forEach((e,t)=>{var r=y.current.get(t);a.push({id:t,name:(null==r?void 0:r.name)||"Listener",image:(null==r?void 0:r.image)||""})})),a},[]),q=(0,ae.useCallback)(async()=>{var e;w.current.isHost&&(e=await ie(),d(e),T({type:"Q",queue:e}))},[T]),R=(0,ae.useCallback)(async e=>{e=Array.isArray(e)?e:[e];if(w.current.isHost)try{await Spicetify.addToQueue(e.map(e=>({uri:e}))),Spicetify.showNotification(1<e.length?`Added ${e.length} tracks!`:"Added!"),setTimeout(q,1500)}catch(e){Spicetify.showNotification("Failed to add to queue",!0)}else{let t=I();null!=t&&t.open&&(e.forEach(e=>t.send({type:"ADD_Q",uri:e})),Spicetify.showNotification(1<e.length?`Requested ${e.length} tracks!`:"Requested!"))}},[q,I]),W=(0,ae.useCallback)(async(e,t)=>{if(w.current.isHost)try{await Spicetify.removeFromQueue([{uri:e,uid:t}]),setTimeout(q,500)}catch(e){setTimeout(q,800)}else{var r=I();null!=r&&r.open&&r.send({type:"RM_Q",uri:e,uid:t})}},[q,I]);var $=(0,ae.useCallback)((r,a)=>{d(e=>{var e=[...e],[t]=e.splice(r,1);return e.splice(a,0,t),T({type:"Q",queue:e}),e})},[T]),X=(0,ae.useCallback)(e=>{var t;w.current.isHost?(Spicetify.Player.seek(e),T({type:"SEEK",pos:e,ts:Date.now()})):w.current.guestControls&&null!=(t=I())&&t.open&&t.send({type:"CMD",a:"seek",pos:e})},[T,I]),Z=(0,ae.useCallback)(t=>{var e;w.current.isHost?(w.current.targetUri=t,0<=(e=M.current.findIndex(e=>e.uri===t))&&(N.current=M.current.slice(e+1),e=M.current.slice(e+1),d(e),T({type:"Q",queue:e})),Spicetify.Player.playUri(t)):w.current.guestControls&&null!=(e=I())&&e.open&&e.send({type:"CMD",a:"playuri",uri:t})},[I,T]);let L=(0,ae.useCallback)(()=>{var e;b.current.forEach(e=>e.close()),b.current.clear(),y.current.clear(),null!=(e=h.current)&&e.destroy(),h.current=null,s(!1),n(""),a(!1),o([]),d([]),c(null),w.current.targetUri=null,G(-1),E.current=0,k.current&&(clearTimeout(k.current),k.current=null),S.current&&(clearTimeout(S.current),S.current=null),C.current.forEach(clearTimeout),C.current=[],V.current.clear(),N.current=[]},[]);let ee=(0,ae.useCallback)(async(e,t)=>{await Te(e,t,{refs:w,lastHostMsg:j,memberRegistry:y,cachedUser:x,seekTimers:C,buildMembers:A,addToQueue:R,removeFromQueue:W,broadcast:T,setMembers:o,setQueue:d,setNowPlaying:c,setHostName:O,setGuestControls:_,setIsPlaying:g,setProgress:m,setDuration:f,setPing:G,setError:l,leaveJam:L,cmdThrottle:V,queueRef:M,pendingQueueRestore:N})},[A,R,W,T,L]),te=(0,ae.useCallback)(t=>{ue(t,b,ee,e=>{y.current.delete(e),o(A())}),w.current.isHost||t.onOpen(()=>{var e=x.current;t.send({type:"JOIN",name:e.name,image:e.image})})},[ee,A]);let re=async(e,t)=>{i&&L();e=await ge({id:e,name:t,userPromise:v,cachedUser:x,conns:b,setJamId:n,setIsHost:a,setConnected:s,setError:l,setMembers:o,leaveJam:L,reconnectAttempt:E,reconnectTimer:k,setupConn:te,onData:ee});h.current=e};return(0,ae.useEffect)(()=>{let e=setInterval(()=>{if(w.current.isHost)try{g(Spicetify.Player.isPlaying()),m(Spicetify.Player.getProgress()),f(Spicetify.Player.getDuration())}catch(e){}else if(w.current.connected){try{m(Spicetify.Player.getProgress()),f(Spicetify.Player.getDuration())}catch(e){}var e,t=I();null!=t&&t.open&&t.send({type:"PING",ts:Date.now()}),0<j.current&&1e4<Date.now()-j.current&&(l("Connection lost - trying to reconnect..."),j.current=0,E.current<3?(E.current++,k.current=setTimeout(()=>{var e;h.current&&w.current.jamId&&(e=h.current.connect(w.current.jamId),te(e),b.current.set(w.current.jamId,e),s(!0),l(null),E.current=0)},2e3*E.current)):(L(),l("Lost connection to host")));try{Spicetify.Player.isPlaying()===w.current.isPlaying||w.current.isHost||null!=(e=I())&&e.open&&e.send({type:"SYNC"})}catch(e){}}},1e3);return()=>clearInterval(e)},[I,L]),(0,ae.useEffect)(()=>{i&&Spicetify.showNotification("✅ Jam Connected")},[i]),(0,ae.useEffect)(()=>{if(i){let t=()=>{S.current&&clearTimeout(S.current),S.current=setTimeout(()=>{var e=null==(e=null==(e=Spicetify.Player.data)?void 0:e.item)?void 0:e.uri;if(w.current.isHost){var t=oe(),r=(t&&c(t),w.current.targetUri=e||null,!Spicetify.Player.isPlaying());if(T({type:"PLAY",uri:e||"",pos:0,ts:Date.now(),np:t,paused:r}),0<N.current.length){let t=N.current;N.current=[](async()=>{for(var e of t)if(e.uri)try{await Spicetify.addToQueue([{uri:e.uri}])}catch(e){}setTimeout(q,1e3)})()}else setTimeout(q,600)}else w.current.ignoreSync?w.current.ignoreSync=!1:e&&e!==w.current.targetUri&&w.current.targetUri&&(w.current.guestControls?null!=(t=I())&&t.open&&t.send({type:"CMD",a:"playuri",uri:e}):(w.current.ignoreSync=!0,Spicetify.Player.playUri(w.current.targetUri).catch(()=>{w.current.ignoreSync=!1}),Spicetify.showNotification("🔒 Locked to Jam")))},300)},r=()=>{var e,t,r=Spicetify.Player.isPlaying();g(r),w.current.isHost?(t=Spicetify.Player.getProgress(),e=Spicetify.Player.getDuration(),T({type:"PS",p:r,pos:t,dur:e}),r?T({type:"PLAY",uri:w.current.targetUri||"",pos:t,ts:Date.now(),np:oe()}):T({type:"PAUSE"})):r&&(w.current.guestControls?(null!=(e=I())&&e.open&&e.send({type:"SYNC"}),w.current.targetUri&&(e=null==(r=null==(t=Spicetify.Player.data)?void 0:t.item)?void 0:r.uri)&&e!==w.current.targetUri&&(w.current.ignoreSync=!0,Spicetify.Player.playUri(w.current.targetUri).catch(()=>{w.current.ignoreSync=!1}),Spicetify.showNotification("🔒 Locked to Jam"))):w.current.forcingPause||(w.current.forcingPause=!0,Spicetify.Player.pause(),Spicetify.showNotification("🔒 Only the host can resume playback"),setTimeout(()=>{w.current.forcingPause=!1},500),null!=(t=I())&&t.open&&t.send({type:"SYNC"})))},a=(Spicetify.Player.addEventListener("songchange",t),Spicetify.Player.addEventListener("onplaypause",r),w.current.isHost?setInterval(q,5e3):null),n=w.current.isHost?null:setInterval(()=>{var e=I();null!=e&&e.open&&e.send({type:"SYNC"})},15e3);try{if(P.current)try{P.current.deregister()}catch(e){}P.current=new Spicetify.ContextMenu.Item("Add to Jam",e=>R(e),()=>w.current.connected,"plus2px"),P.current.register()}catch(e){}return()=>{var e;Spicetify.Player.removeEventListener("songchange",t),Spicetify.Player.removeEventListener("onplaypause",r),a&&clearInterval(a),n&&clearInterval(n);try{null!=(e=P.current)&&e.deregister()}catch(e){}}}},[i,r,T,q,R,I]),(0,ae.useEffect)(()=>{var e=window.location.hash.slice(1);e.startsWith("jam=")&&(e=e.split("=")[1])&&re(e)},[]),ae.default.createElement(se.Provider,{value:{isHost:r,jamId:e,members:D,connected:i,error:H,nowPlaying:U,hostName:B,queue:t,guestControls:u,isPlaying:p,progress:J,duration:F,ping:Q,updateAvailable:Y,startJam:async(e=0)=>{i&&L();e=await pe({retries:e,userPromise:v,cachedUser:x,setJamId:n,setIsHost:a,setConnected:s,setError:l,setHostName:O,setMembers:o,setNowPlaying:c,setIsPlaying:g,setProgress:m,setDuration:f,refreshQueue:q,setupConn:te});h.current=e},joinJam:re,leaveJam:L,addToQueue:R,removeFromQueue:W,moveInQueue:$,requestSync:()=>{var e;w.current.isHost||null!=(e=I())&&e.open&&e.send({type:"SYNC"})},jumpToTrack:Z,seekTo:X,kickMember:t=>{if(r){let e=b.current.get(t);e&&(e.send({type:"KICK"}),setTimeout(()=>e.close(),500),b.current.delete(t),y.current.delete(t),o(A()))}},toggleGuestControls:()=>{var e;r&&(e=!u,_(e),T({type:"GCTRL",on:e}))},play:()=>{var e;w.current.isHost?(Spicetify.Player.play(),g(!0)):w.current.guestControls&&null!=(e=I())&&e.open&&e.send({type:"CMD",a:"play"})},pause:()=>{var e;w.current.isHost?(Spicetify.Player.pause(),g(!1)):w.current.guestControls&&null!=(e=I())&&e.open&&e.send({type:"CMD",a:"pause"})},next:()=>{var e;w.current.isHost?Spicetify.Player.next():w.current.guestControls&&null!=(e=I())&&e.open&&e.send({type:"CMD",a:"next"})},prev:()=>{var e;w.current.isHost?Spicetify.Player.back():w.current.guestControls&&null!=(e=I())&&e.open&&e.send({type:"CMD",a:"back"})}}},z)},v=t(r()),Ie=t(e()),f=t(r()),h=6,Ae=/^[A-Z0-9]$/,w=e=>e.toUpperCase().replace(/[^A-Z0-9]/g,"").slice(0,h),qe=({value:e,onChange:r,disabled:i=!1,autoFocus:t=!1})=>{let a=(0,f.useMemo)(()=>w(e),[e]),s=(0,f.useMemo)(()=>Array.from({length:h},(e,t)=>a[t]||""),[a]),l=(0,f.useRef)(Array(h).fill(null)),c=((0,f.useEffect)(()=>{var e;t&&!i&&null!=(e=l.current[0])&&e.focus()},[t,i]),(e,t)=>{e=e.join("").replace(/\s+$/g,"");r(e),"number"==typeof t&&requestAnimationFrame(()=>{var e=Math.max(0,Math.min(h-1,t));null!=(e=l.current[e])&&e.focus()})}),d=e=>{var e=Math.max(0,Math.min(h-1,e));null!=(e=l.current[e])&&e.focus()};return f.default.createElement("div",{className:"room-code-input","aria-label":"Room code input"},s.map((e,t)=>{return f.default.createElement("div",{key:t,className:"room-code-cell"},f.default.createElement("input",{ref:e=>l.current[t]=e,type:"text",inputMode:"text",autoComplete:"off",autoCorrect:"off",spellCheck:"false",maxLength:1,value:e,disabled:i,onChange:t=>{if(!i){var t=t.target.value.toUpperCase().replace(/[^A-Z0-9]/g,""),r=[...s];if(t){let e=o;for(var a of t){if(e>=h)break;r[e]=a,e+=1}c(r,e>=h?h-1:e)}else r[o]="",c(r)}},onKeyDown:e=>{var t,r;i||("Backspace"===(t=e.key)?(e.preventDefault(),(r=[...s])[a]?(r[a]="",c(r,a)):0<a&&c(r,a-1)):"Delete"===t?(e.preventDefault(),(r=[...s])[a]="",c(r,a)):"ArrowLeft"===t?(e.preventDefault(),d(a-1)):"ArrowRight"===t?(e.preventDefault(),d(a+1)):1!==t.length||Ae.test(t.toUpperCase())||e.preventDefault())},onPaste:t=>{if(!i){t.preventDefault();t=t.clipboardData.getData("text"),t=w(t);if(t){var r,a=[...s];let e=n;for(r of t){if(e>=h)break;a[e]=r,e+=1}c(a,e>=h?h-1:e)}}},onFocus:e=>e.target.select(),"aria-label":"Room code character "+((n=a=o=t)+1)}));var n,a,o}))},e=t(r()),j=t(r(),1),E=(...e)=>e.filter((e,t,r)=>Boolean(e)&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),Re=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase()),k=e=>{e=Re(e);return e.charAt(0).toUpperCase()+e.slice(1)},S=t(r(),1),C={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},P=t(r(),1),Le=(0,P.createContext)({}),ze=(0,S.forwardRef)(({color:e,size:t,strokeWidth:r,absoluteStrokeWidth:a,className:n="",children:o,iconNode:i,...s},l)=>{var{size:c=24,strokeWidth:d=2,absoluteStrokeWidth:u=!1,color:p="currentColor",className:g=""}=(0,P.useContext)(Le)??{},a=a??u?24*Number(r??d)/Number(t??c):r??d;return(0,S.createElement)("svg",{ref:l,...C,width:t??c??C.width,height:t??c??C.height,stroke:e??p,strokeWidth:a,className:E("lucide",g,n),...!o&&!(e=>{for(var t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(s)&&{"aria-hidden":"true"},...s},[...i.map(([e,t])=>(0,S.createElement)(e,t)),...Array.isArray(o)?o:[o]])}),r=(t=(a,n)=>{var e=(0,j.forwardRef)(({className:e,...t},r)=>(0,j.createElement)(ze,{ref:r,iconNode:n,className:E("lucide-"+k(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),"lucide-"+a,e),...t}));return e.displayName=k(a),e})("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),De=t("copy",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]),He=t("grip-vertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]),Ue=t("link",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]),Be=t("list-music",[["path",{d:"M16 5H3",key:"m91uny"}],["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M11 19H3",key:"zflm78"}],["path",{d:"M21 16V5",key:"yxg4q8"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]),Oe=t("log-out",[["path",{d:"m16 17 5-5-5-5",key:"1bji2h"}],["path",{d:"M21 12H9",key:"dn1m92"}],["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}]]),_e=t("music-2",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]),Je=t("pause",[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]]),N=t("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]),Fe=t("qr-code",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]),Qe=t("settings",[["path",{d:"M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",key:"1i5ecw"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),Ge=t("skip-back",[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]]),Ye=t("skip-forward",[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]]),Ke=t("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]),Ve=t("user-x",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]),We=t("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),t=t("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),M={close:e.default.createElement(t,{size:18}),people:e.default.createElement(We,{size:15}),copy:e.default.createElement(De,{size:14}),check:e.default.createElement(r,{size:14}),qr:e.default.createElement(Fe,{size:14}),leave:e.default.createElement(Oe,{size:14}),jam:e.default.createElement(_e,{size:20}),warn:e.default.createElement(Ke,{size:14}),kick:e.default.createElement(Ve,{size:14}),queue:e.default.createElement(Be,{size:15}),prev:e.default.createElement(Ge,{size:20}),next:e.default.createElement(Ye,{size:20}),play:e.default.createElement(N,{size:28,fill:"currentColor"}),pause:e.default.createElement(Je,{size:28,fill:"currentColor"}),settings:e.default.createElement(Qe,{size:14}),x:e.default.createElement(t,{size:12}),link:e.default.createElement(Ue,{size:14}),playItem:e.default.createElement(N,{size:12,fill:"currentColor"}),drag:e.default.createElement(He,{size:14,style:{opacity:.25}})},T=["linear-gradient(135deg,#1db954,#1ed760)","linear-gradient(135deg,#e84444,#ff6b6b)","linear-gradient(135deg,#4a90d9,#6eb5ff)","linear-gradient(135deg,#f5a623,#ffc857)","linear-gradient(135deg,#b24592,#f15f79)","linear-gradient(135deg,#00c9ff,#92fe9d)"],$e=e=>{e=Math.floor(e/1e3);return Math.floor(e/60)+":"+(e%60).toString().padStart(2,"0")},Xe=`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,300&family=DM+Mono:wght@400;500&display=swap');

  .jam-root {
    font-family: 'DM Sans', sans-serif;
    background: #0a0a0c;
    color: #e8e8ea;

    width: 360px;

    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;

    border-radius: 0;
    overflow: hidden;

    border: 1px solid rgba(255,255,255,0.06);
    box-shadow: none;
  }

  .jam-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 18px 18px 14px;
    border-bottom: 1px solid rgba(255,255,255,0.05);
    background: rgba(255,255,255,0.02);
    flex-shrink: 0;
  }

  .jam-header-left {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .jam-header-right {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .jam-logo-icon {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    background: rgba(255,255,255,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #888;
    transition: all 0.2s ease;
  }

  .jam-logo-icon.active {
    background: rgba(29,185,84,0.15);
    color: #1db954;
    box-shadow: 0 0 16px rgba(29,185,84,0.2);
  }

  .jam-title {
    font-size: 15px;
    font-weight: 600;
    letter-spacing: -0.2px;
    color: #f0f0f2;
  }

  .jam-subtitle {
    font-size: 11px;
    font-weight: 400;
    color: #555;
    margin-top: 1px;
    letter-spacing: 0.2px;
  }

  .jam-icon-btn {
    width: 30px;
    height: 30px;
    border-radius: 8px;
    border: none;
    background: transparent;
    color: #555;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
    padding: 0;
  }

  .jam-icon-btn:hover {
    background: rgba(255,255,255,0.07);
    color: #aaa;
  }

  .jam-icon-btn.green { color: #1db954; }
  .jam-icon-btn.small { width: 26px; height: 26px; border-radius: 6px; }
  .jam-icon-btn.red:hover { background: rgba(228,68,68,0.15); color: #e84444; }

  .jam-body {
    flex: 1;
    min-height: 0;

    padding: 16px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    overflow-y: auto;
    overflow-x: hidden;
  }

  .jam-body.scrollable {
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.08) transparent;
  }

  .jam-body.scrollable::-webkit-scrollbar { width: 4px; }
  .jam-body.scrollable::-webkit-scrollbar-track { background: transparent; }
  .jam-body.scrollable::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.08); border-radius: 4px; }

  .jam-hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px 8px 12px;
    gap: 8px;
  }

  .jam-hero-icon {
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #444;
    margin-bottom: 4px;
  }

  .jam-hero-title {
    font-size: 17px;
    font-weight: 600;
    color: #e8e8ea;
    margin: 0;
    letter-spacing: -0.3px;
  }

  .jam-hero-desc {
    font-size: 12px;
    color: #4a4a52;
    margin: 0;
    line-height: 1.6;
    max-width: 230px;
  }

  .jam-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 16px;
    height: 40px;
    border-radius: 10px;
    border: none;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.18s ease;
    letter-spacing: -0.1px;
  }

  .jam-btn.full { width: 100%; }
  .jam-btn.flex-1 { flex: 1; }

  .jam-btn.green {
    background: #1db954;
    color: #000;
  }

  .jam-btn.green:hover {
    background: #1ed760;
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(29,185,84,0.3);
  }

  .jam-btn.outline {
    background: transparent;
    color: #888;
    border: 1px solid rgba(255,255,255,0.1);
  }

  .jam-btn.outline:hover {
    background: rgba(255,255,255,0.05);
    color: #c0c0c4;
    border-color: rgba(255,255,255,0.16);
  }

  .jam-btn.red {
    background: rgba(228,68,68,0.12);
    color: #e84444;
    border: 1px solid rgba(228,68,68,0.2);
  }

  .jam-btn.red:hover {
    background: rgba(228,68,68,0.2);
    box-shadow: 0 4px 16px rgba(228,68,68,0.15);
  }

  .jam-divider {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #333;
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin: 2px 0;
  }

  .jam-divider-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.05);
  }

  .jam-input {
    width: 100%;
    height: 40px;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: 10px;
    color: #e0e0e4;
    font-family: 'DM Mono', monospace;
    font-size: 12px;
    padding: 0 14px;
    outline: none;
    transition: all 0.15s ease;
    box-sizing: border-box;
  }

  .jam-input::placeholder { color: #383840; }

  .jam-input:focus {
    border-color: rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.06);
  }

  .jam-error {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    background: rgba(228,68,68,0.08);
    border: 1px solid rgba(228,68,68,0.2);
    border-radius: 10px;
    color: #e84444;
    font-size: 12px;
  }

  .jam-live-badge {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 7px 12px;
    background: rgba(29,185,84,0.06);
    border: 1px solid rgba(29,185,84,0.12);
    border-radius: 8px;
    font-size: 11px;
    font-weight: 500;
    color: #1db954;
    letter-spacing: 0.2px;
  }

  .jam-live-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1db954;
    box-shadow: 0 0 6px rgba(29,185,84,0.8);
    animation: pulse 2s ease infinite;
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.85); }
  }

  .jam-badge {
    margin-left: auto;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.8px;
    color: #1db954;
    background: rgba(29,185,84,0.12);
    padding: 2px 7px;
    border-radius: 4px;
    border: 1px solid rgba(29,185,84,0.2);
  }

  .jam-ping {
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid transparent;
  }

  .jam-ping.good { color: #1db954; background: rgba(29,185,84,0.08); border-color: rgba(29,185,84,0.15); }
  .jam-ping.bad { color: #f5a623; background: rgba(245,166,35,0.08); border-color: rgba(245,166,35,0.15); }
  .jam-ping.measuring { color: #555; background: rgba(255,255,255,0.04); }

  .jam-np-card {
    background: rgba(255,255,255,0.03);
    border: 1px solid rgba(255,255,255,0.06);
    border-radius: 14px;
    overflow: hidden;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .jam-np-art-wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .jam-np-art {
    width: 120px;
    height: 120px;
    border-radius: 10px;
    object-fit: cover;
    box-shadow: 0 12px 40px rgba(0,0,0,0.5);
  }

  .jam-np-art.placeholder {
    background: rgba(255,255,255,0.05);
  }

  .jam-np-meta {
    text-align: center;
  }

  .jam-np-label {
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.5px;
    color: #333;
    margin-bottom: 4px;
  }

  .jam-np-title {
    font-size: 15px;
    font-weight: 600;
    color: #f0f0f2;
    letter-spacing: -0.3px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .jam-np-artist {
    font-size: 12px;
    color: #555;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .jam-progress-row {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .jam-time {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #444;
    min-width: 32px;
    flex-shrink: 0;
  }

  .jam-time:last-child { text-align: right; }

  .jam-progress-rail {
    flex: 1;
    height: 3px;
    background: rgba(255,255,255,0.08);
    border-radius: 2px;
    position: relative;
    transition: height 0.15s ease;
  }

  .jam-progress-rail:hover { height: 5px; }

  .jam-progress-fill {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    background: #1db954;
    border-radius: 2px;
    transition: width 0.5s linear;
  }

  .jam-progress-dot {
    position: absolute;
    top: 50%;
    width: 10px;
    height: 10px;
    background: #fff;
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.15s ease;
    box-shadow: 0 1px 4px rgba(0,0,0,0.4);
  }

  .jam-progress-rail:hover .jam-progress-dot { transform: translate(-50%, -50%) scale(1); }

  .jam-controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .jam-ctrl-btn {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: #666;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.15s ease;
    padding: 0;
  }

  .jam-ctrl-btn:hover { color: #ccc; background: rgba(255,255,255,0.06); }

  .jam-ctrl-btn.main {
    width: 44px;
    height: 44px;
    background: #fff;
    color: #000;
    box-shadow: 0 4px 16px rgba(0,0,0,0.3);
  }

  .jam-ctrl-btn.main:hover {
    background: #f0f0f0;
    transform: scale(1.06);
    box-shadow: 0 6px 20px rgba(0,0,0,0.4);
  }

  .jam-section-card {
    background: rgba(255,255,255,0.02);
    border: 1px solid rgba(255,255,255,0.05);
    border-radius: 12px;
    overflow: hidden;
  }

  .jam-section-title {
    display: flex;
    align-items: center;
    gap: 7px;
    padding: 10px 14px 8px;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #333;
    border-bottom: 1px solid rgba(255,255,255,0.04);
  }

  .jam-setting-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    font-size: 12px;
    color: #888;
  }

  .room-code-input {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 10px;
    margin-top: 10px;
  }

  .room-code-cell {
    position: relative;
  }

  .room-code-cell input {
    width: 100%;
    min-height: 56px;
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.12);
    border-radius: 14px;
    color: #f8f8fa;
    font-family: 'DM Sans', sans-serif;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 0.35em;
    text-align: center;
    text-transform: uppercase;
    outline: none;
    transition: border-color 0.2s ease, transform 0.2s ease, background 0.2s ease;
    padding: 0;
    box-sizing: border-box;
  }

  .room-code-cell input::placeholder {
    color: rgba(255,255,255,0.24);
  }

  .room-code-cell input:hover {
    border-color: rgba(255,255,255,0.22);
    transform: translateY(-1px);
  }

  .room-code-cell input:focus {
    border-color: #1db954;
    box-shadow: 0 0 0 4px rgba(29,185,84,0.14);
    background: rgba(255,255,255,0.08);
  }

  .room-code-cell input:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  .jam-toggle {
    width: 38px;
    height: 22px;
    border-radius: 11px;
    border: none;
    background: rgba(255,255,255,0.08);
    cursor: pointer;
    padding: 3px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
  }

  .jam-toggle.on {
    background: #1db954;
  }

  .jam-toggle-knob {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #fff;
    transition: all 0.2s ease;
    box-shadow: 0 1px 4px rgba(0,0,0,0.3);
  }

  .jam-toggle.on .jam-toggle-knob {
    transform: translateX(16px);
  }

  .jam-id-row {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 14px;
  }

  .jam-id-code {
    flex: 1;
    font-family: 'DM Mono', monospace;
    font-size: 11px;
    color: #666;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .jam-share-row {
    display: flex;
    gap: 8px;
    padding: 0 14px 12px;
  }

  .jam-qr-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
    gap: 10px;
    border-top: 1px solid rgba(255,255,255,0.05);
  }

  .jam-qr-box img {
    width: 140px;
    height: 140px;
    border-radius: 8px;
  }

  .jam-qr-label {
    font-size: 11px;
    color: #444;
    letter-spacing: 0.3px;
  }

  .jam-q-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 14px;
    border-top: 1px solid rgba(255,255,255,0.03);
    transition: background 0.12s ease;
  }

  .jam-q-row:hover { background: rgba(255,255,255,0.03); }
  .jam-q-row.drag-src { opacity: 0.35; }
  .jam-q-row.drag-over { background: rgba(29,185,84,0.06); }

  .jam-drag-grip {
    color: #2a2a2e;
    cursor: grab;
    display: flex;
    align-items: center;
    transition: color 0.12s;
  }

  .jam-q-row:hover .jam-drag-grip { color: #444; }

  .jam-q-num {
    font-family: 'DM Mono', monospace;
    font-size: 10px;
    color: #2e2e34;
    min-width: 14px;
    text-align: right;
  }

  .jam-q-thumb {
    width: 32px;
    height: 32px;
    border-radius: 6px;
    overflow: hidden;
    flex-shrink: 0;
  }

  .jam-q-thumb img { width: 100%; height: 100%; object-fit: cover; }
  .jam-q-thumb-ph { width: 100%; height: 100%; background: rgba(255,255,255,0.05); }

  .jam-q-meta {
    flex: 1;
    min-width: 0;
  }

  .jam-q-title {
    font-size: 12px;
    font-weight: 500;
    color: #c0c0c4;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    letter-spacing: -0.1px;
  }

  .jam-q-artist {
    font-size: 10px;
    color: #3a3a42;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-top: 1px;
  }

  .jam-q-btns {
    display: flex;
    gap: 4px;
    opacity: 0;
    transition: opacity 0.15s ease;
  }

  .jam-q-row:hover .jam-q-btns { opacity: 1; }

  .jam-q-btn {
    width: 26px;
    height: 26px;
    border-radius: 6px;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    transition: all 0.12s ease;
    padding: 0;
  }

  .jam-q-btn.green {
    background: rgba(29,185,84,0.12);
    color: #1db954;
  }

  .jam-q-btn.green:hover {
    background: rgba(29,185,84,0.22);
  }

  .jam-q-btn.red {
    background: rgba(228,68,68,0.1);
    color: #e84444;
  }

  .jam-q-btn.red:hover {
    background: rgba(228,68,68,0.2);
  }

  .jam-member-row {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 14px;
    border-top: 1px solid rgba(255,255,255,0.03);
  }

  .jam-avatar {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: 600;
    color: rgba(0,0,0,0.7);
    flex-shrink: 0;
    overflow: hidden;
  }

  .jam-avatar img { width: 100%; height: 100%; object-fit: cover; }

  .jam-member-info { flex: 1; min-width: 0; }

  .jam-member-name {
    font-size: 12px;
    font-weight: 500;
    color: #c0c0c4;
    letter-spacing: -0.1px;
  }

  .jam-member-role {
    font-size: 10px;
    color: #383840;
    margin-top: 1px;
  }

  .jam-footer {
    padding: 12px 16px;
    border-top: 1px solid rgba(255,255,255,0.05);
    background: rgba(0,0,0,0.2);
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
`,Ze=({onClose:e})=>{let r=(()=>{var e=(0,ae.useContext)(se);if(e)return e;throw new Error("useJam must be inside JamProvider")})(),[t,a]=(0,v.useState)(""),[n,o]=(0,v.useState)(""),[i,s]=(0,v.useState)(!1),[l,c]=(0,v.useState)(!1),[d,u]=(0,v.useState)(null),[p,g]=(0,v.useState)(null),m=((0,v.useEffect)(()=>{r.jamId&&Ie.default.toDataURL(r.jamId,{width:200,margin:1,color:{dark:"#000",light:"#fff"}}).then(o)},[r.jamId]),(t,e)=>{var r;try{Spicetify.Platform.ClipboardAPI.copy(t)}catch(e){null!=(r=navigator.clipboard)&&r.writeText(t)}Spicetify.showNotification(e)});var f=0<r.duration?r.progress/r.duration*100:0;let h=r.isHost||r.guestControls;return r.connected?v.default.createElement(v.default.Fragment,null,v.default.createElement("style",null,Xe),v.default.createElement("div",{className:"jam-root"},v.default.createElement("div",{className:"jam-header"},v.default.createElement("div",{className:"jam-header-left"},v.default.createElement("div",{className:"jam-logo-icon active"},M.jam),v.default.createElement("div",null,v.default.createElement("div",{className:"jam-title"},"Jam"),v.default.createElement("div",{className:"jam-subtitle"},r.isHost?"Hosting":"With "+r.hostName))),v.default.createElement("div",{className:"jam-header-right"},!r.isHost&&v.default.createElement("span",{className:"jam-ping "+(r.ping<0?"measuring":150<r.ping?"bad":"good")},r.ping<0?"…":r.ping+"ms"),v.default.createElement("button",{className:"jam-icon-btn",onClick:e},M.close))),v.default.createElement("div",{className:"jam-body scrollable"},r.updateAvailable&&v.default.createElement("div",{className:"jam-error",style:{background:"rgba(29,185,84,0.1)",borderColor:"#1db954",color:"#1db954",cursor:"pointer"},onClick:()=>window.open("https://github.com/Kyzenkms/spicetify-jam","_blank")},v.default.createElement("span",{style:{fontSize:"14px"}},"✨ Update Available! Click to view")),v.default.createElement("div",{className:"jam-live-badge"},v.default.createElement("span",{className:"jam-live-dot"}),v.default.createElement("span",null,"Session Active"),v.default.createElement("span",{className:"jam-badge"},r.isHost?"HOST":"GUEST")),r.nowPlaying&&v.default.createElement("div",{className:"jam-np-card"},v.default.createElement("div",{className:"jam-np-art-wrap"},r.nowPlaying.artUrl?v.default.createElement("img",{className:"jam-np-art",src:r.nowPlaying.artUrl,alt:"",onError:e=>{e.target.style.display="none"}}):v.default.createElement("div",{className:"jam-np-art placeholder"})),v.default.createElement("div",{className:"jam-np-meta"},v.default.createElement("div",{className:"jam-np-label"},"NOW PLAYING"),v.default.createElement("div",{className:"jam-np-title"},r.nowPlaying.title),v.default.createElement("div",{className:"jam-np-artist"},r.nowPlaying.artist)),v.default.createElement("div",{className:"jam-progress-row"},v.default.createElement("span",{className:"jam-time"},$e(r.progress)),v.default.createElement("div",{className:"jam-progress-rail",onClick:e=>{var t;(r.isHost||r.guestControls)&&(t=e.currentTarget.getBoundingClientRect(),e=Math.max(0,Math.min(1,(e.clientX-t.left)/t.width)),r.seekTo(e*r.duration))},style:{cursor:h?"pointer":"default"}},v.default.createElement("div",{className:"jam-progress-fill",style:{width:f+"%"}}),v.default.createElement("div",{className:"jam-progress-dot",style:{left:f+"%"}})),v.default.createElement("span",{className:"jam-time"},$e(r.duration))),h&&v.default.createElement("div",{className:"jam-controls"},v.default.createElement("button",{className:"jam-ctrl-btn",onClick:r.prev},M.prev),v.default.createElement("button",{className:"jam-ctrl-btn main",onClick:r.isPlaying?r.pause:r.play},r.isPlaying?M.pause:M.play),v.default.createElement("button",{className:"jam-ctrl-btn",onClick:r.next},M.next))),r.isHost&&v.default.createElement("div",{className:"jam-section-card"},v.default.createElement("div",{className:"jam-section-title"},M.settings," SESSION SETTINGS"),v.default.createElement("div",{className:"jam-setting-row"},v.default.createElement("span",null,"Guest Playback Controls"),v.default.createElement("button",{className:"jam-toggle "+(r.guestControls?"on":""),onClick:r.toggleGuestControls},v.default.createElement("div",{className:"jam-toggle-knob"})))),r.isHost&&v.default.createElement("div",{className:"jam-section-card"},v.default.createElement("div",{className:"jam-section-title"},"INVITE"),v.default.createElement("div",{className:"jam-id-row"},v.default.createElement("span",{className:"jam-id-code"},r.jamId),v.default.createElement("button",{className:"jam-icon-btn "+(i?"green":""),onClick:()=>{m(r.jamId,"Copied!"),s(!0),setTimeout(()=>s(!1),2e3)}},i?M.check:M.copy)),v.default.createElement("div",{className:"jam-share-row"},v.default.createElement("button",{className:"jam-btn outline flex-1",onClick:()=>m(""+window.location.origin+window.location.pathname+"#jam="+r.jamId,"Link copied!")},M.link," Copy Link"),v.default.createElement("button",{className:"jam-btn outline flex-1",onClick:()=>c(e=>!e)},M.qr," ",l?"Hide QR":"QR Code")),l&&n&&v.default.createElement("div",{className:"jam-qr-box"},v.default.createElement("img",{src:n,alt:"QR"}),v.default.createElement("div",{className:"jam-qr-label"},"Scan to join"))),0<r.queue.length&&v.default.createElement("div",{className:"jam-section-card"},v.default.createElement("div",{className:"jam-section-title"},M.queue," UP NEXT · ",r.queue.length),r.queue.map((e,t)=>v.default.createElement("div",{key:e.uri+"-"+t,className:"jam-q-row"+(d===t?" drag-src":"")+(p===t&&d!==t?" drag-over":""),draggable:h,onDragStart:()=>u(t),onDragOver:e=>{e.preventDefault(),g(t)},onDrop:()=>{null!==d&&d!==t&&r.moveInQueue(d,t),u(null),g(null)},onDragEnd:()=>{u(null),g(null)}},h&&v.default.createElement("div",{className:"jam-drag-grip"},M.drag),v.default.createElement("div",{className:"jam-q-num"},t+1),v.default.createElement("div",{className:"jam-q-thumb"},e.artUrl?v.default.createElement("img",{src:e.artUrl,alt:"",onError:e=>{e.target.style.display="none"}}):v.default.createElement("div",{className:"jam-q-thumb-ph"})),v.default.createElement("div",{className:"jam-q-meta"},v.default.createElement("div",{className:"jam-q-title"},e.title),v.default.createElement("div",{className:"jam-q-artist"},e.artist)),h&&v.default.createElement("div",{className:"jam-q-btns"},v.default.createElement("button",{className:"jam-q-btn green",title:"Play now",onClick:()=>r.jumpToTrack(e.uri)},M.playItem),v.default.createElement("button",{className:"jam-q-btn red",title:"Remove",onClick:()=>r.removeFromQueue(e.uri,e.uid)},M.x))))),v.default.createElement("div",{className:"jam-section-card"},v.default.createElement("div",{className:"jam-section-title"},M.people," LISTENERS · ",r.members.length),r.members.map((e,t)=>v.default.createElement("div",{key:e.id+t,className:"jam-member-row"},v.default.createElement("div",{className:"jam-avatar",style:{background:T[t%T.length]}},e.image?v.default.createElement("img",{src:e.image,alt:"",onError:e=>{e.target.style.display="none"}}):((e.name||"?").trim()[0]||"?").toUpperCase()),v.default.createElement("div",{className:"jam-member-info"},v.default.createElement("div",{className:"jam-member-name"},e.name||"Listener"),v.default.createElement("div",{className:"jam-member-role"},e.isHost?"● Host":"○ Listener")),r.isHost&&!e.isHost&&v.default.createElement("button",{className:"jam-icon-btn small red",onClick:()=>r.kickMember(e.id)},M.kick))))),v.default.createElement("div",{className:"jam-footer"},!r.isHost&&v.default.createElement("button",{className:"jam-btn outline full",onClick:r.requestSync},"Sync to Host"),v.default.createElement("button",{className:"jam-btn red full",onClick:r.leaveJam},M.leave," ",r.isHost?"End Jam":"Leave Jam")))):v.default.createElement(v.default.Fragment,null,v.default.createElement("style",null,Xe),v.default.createElement("div",{className:"jam-root"},v.default.createElement("div",{className:"jam-header"},v.default.createElement("div",{className:"jam-header-left"},v.default.createElement("div",{className:"jam-logo-icon"},M.jam),v.default.createElement("div",null,v.default.createElement("div",{className:"jam-title"},"Social Jam"),v.default.createElement("div",{className:"jam-subtitle"},"Listen together"))),v.default.createElement("button",{className:"jam-icon-btn",onClick:e},M.close)),v.default.createElement("div",{className:"jam-body"},r.updateAvailable&&v.default.createElement("div",{className:"jam-error",style:{background:"rgba(29,185,84,0.1)",borderColor:"#1db954",color:"#1db954",cursor:"pointer",marginBottom:"10px"},onClick:()=>window.open("https://github.com/Kyzenkms/spicetify-jam","_blank")},v.default.createElement("span",{style:{fontSize:"14px"}},"✨ Update Available! Click to view")),v.default.createElement("div",{className:"jam-hero"},v.default.createElement("div",{className:"jam-hero-icon"},M.jam),v.default.createElement("h2",{className:"jam-hero-title"},"Host a Listening Session"),v.default.createElement("p",{className:"jam-hero-desc"},"Sync playback and share your queue with friends in real-time.")),v.default.createElement("button",{className:"jam-btn green full",onClick:r.startJam},"Start a new Jam"),v.default.createElement("div",{className:"jam-divider"},v.default.createElement("div",{className:"jam-divider-line"}),v.default.createElement("span",null,"or join one"),v.default.createElement("div",{className:"jam-divider-line"})),v.default.createElement(qe,{value:t,onChange:a,autoFocus:!0,disabled:!1}),v.default.createElement("button",{className:"jam-btn outline full",style:{marginTop:8},onClick:()=>r.joinJam(t),disabled:6!==t.length},"Join Session"),r.error&&v.default.createElement("div",{className:"jam-error"},M.warn," ",r.error))))},et=async function(){for(;null==Spicetify||!Spicetify.showNotification||null==Spicetify||!Spicetify.Platform;)await new Promise(e=>setTimeout(e,100));for(;!(null!=Spicetify&&Spicetify.Playbar||null!=Spicetify&&Spicetify.Topbar);)await new Promise(e=>setTimeout(e,100));let e=document.getElementById("jam-sidebar"),t=(e||((e=document.createElement("div")).id="jam-sidebar",document.body.appendChild(e)),!1),r=()=>{i&&(i.active=t),s&&s.element&&s.element.classList.toggle("jam-topbar-btn-active",t)},a=()=>{t=!1,null!=e&&e.classList.remove("jam-sidebar-visible"),r()};var n=()=>t?a():(t=!0,null!=e&&e.classList.add("jam-sidebar-visible"),void r()),o='<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>';let i=null,s=null;Spicetify.Playbar?(i=new Spicetify.Playbar.Button("Spicetify Jam",o,n)).register():Spicetify.Topbar&&(s=new Spicetify.Topbar.Button("Spicetify Jam",o,n)),Spicetify.ReactDOM.createRoot?Spicetify.ReactDOM.createRoot(e).render(l.default.createElement(u,null,l.default.createElement(Ze,{onClose:a}))):Spicetify.ReactDOM.render(l.default.createElement(u,null,l.default.createElement(Ze,{onClose:a})),e)},(async()=>{await et()})(),(async()=>{var e;document.getElementById("spicetifyDjam")||((e=document.createElement("style")).id="spicetifyDjam",e.textContent=String.raw`
  @import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap);:root{--jam-green:#1db954;--jam-green-hover:#1ed760;--jam-bg:#121212;--jam-surface:#181818;--jam-surface-hover:rgba(255,255,255,0.04);--jam-border:rgba(255,255,255,0.07);--jam-text:#ffffff;--jam-text-muted:rgba(255,255,255,0.5);--jam-text-subtle:rgba(255,255,255,0.3);--jam-danger:#e84444}#jam-sidebar{position:fixed;top:0;right:0;width:360px;height:calc(100vh - 90px);z-index:9998;transform:translateX(100%);transition:transform .3s cubic-bezier(.4, 0, .2, 1);pointer-events:none}#jam-sidebar.jam-sidebar-visible{transform:translateX(0);pointer-events:all}.jam-topbar-btn{background:0 0;border:none;color:#b3b3b3;width:32px;height:32px;display:flex;align-items:center;justify-content:center;cursor:pointer;border-radius:50%;transition:color .2s,background .2s;padding:0}.jam-topbar-btn:hover{color:#fff;background:rgba(255,255,255,.1)}.jam-topbar-btn-active{color:#1db954!important}@keyframes jamPulse{0%,100%{opacity:1}50%{opacity:.5}}.jam-root{font-family:Inter,system-ui,-apple-system,sans-serif;display:flex;flex-direction:column;height:100%;background:#121212;color:#fff;border-left:1px solid rgba(255,255,255,.08);border-radius:8px 0 0 8px;overflow:hidden;box-shadow:-8px 0 32px rgba(0,0,0,.6)}.jam-header{display:flex;align-items:center;justify-content:space-between;padding:18px 16px 14px;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0;background:var(--jam-surface)}.jam-header-left{display:flex;align-items:center;gap:10px}.jam-header-right{display:flex;align-items:center;gap:6px}.jam-logo-icon{width:36px;height:36px;background:rgba(255,255,255,.07);border-radius:8px;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.6);flex-shrink:0}.jam-logo-icon.active{background:var(--jam-green);color:#fff;box-shadow:0 2px 12px rgba(29,185,84,.45);animation:logo-glow 3s ease-in-out infinite}@keyframes logo-glow{0%,100%{box-shadow:0 2px 12px rgba(29,185,84,.45)}50%{box-shadow:0 2px 24px rgba(29,185,84,.8)}}.jam-title{font-size:16px;font-weight:800;letter-spacing:-.2px}.jam-subtitle{font-size:11px;color:rgba(255,255,255,.4);margin-top:1px}.jam-ping{font-size:10px;font-weight:700;padding:2px 7px;border-radius:10px;background:rgba(255,255,255,.07);color:rgba(255,255,255,.4)}.jam-ping.measuring{color:rgba(255,255,255,.2)}.jam-ping.good{background:rgba(29,185,84,.15);color:var(--jam-green)}.jam-ping.bad{background:rgba(232,68,68,.15);color:var(--jam-danger)}.jam-icon-btn{width:30px;height:30px;border:none;background:rgba(255,255,255,.06);border-radius:6px;color:rgba(255,255,255,.55);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s}.jam-icon-btn:hover{background:rgba(255,255,255,.12);color:#fff}.jam-icon-btn.red:hover{background:rgba(232,68,68,.15);color:var(--jam-danger)}.jam-icon-btn.green{background:rgba(29,185,84,.12);color:var(--jam-green)}.jam-body{flex:1;overflow-y:auto;overflow-x:hidden;padding:14px;display:flex;flex-direction:column;gap:10px}.jam-body::-webkit-scrollbar{width:5px}.jam-body::-webkit-scrollbar-thumb{background:rgba(255,255,255,.1);border-radius:3px}.jam-live-badge{display:flex;align-items:center;gap:7px;padding:9px 12px;background:rgba(29,185,84,.07);border:1px solid rgba(29,185,84,.18);border-radius:8px;font-size:12px;font-weight:600;flex-shrink:0}.jam-live-dot{width:7px;height:7px;border-radius:50%;background:#1db954;flex-shrink:0;animation:live-blink 1.6s ease-in-out infinite}@keyframes live-blink{0%,100%{opacity:1}50%{opacity:.3}}.jam-badge{margin-left:auto;background:var(--jam-green);color:#000;font-size:9px;font-weight:900;letter-spacing:.8px;padding:2px 7px;border-radius:10px;text-transform:uppercase}.jam-np-card{background:var(--jam-surface);border:1px solid var(--jam-border);border-radius:12px;overflow:hidden;flex-shrink:0}.jam-np-art-wrap{width:100%;aspect-ratio:1/1;overflow:hidden;background:#0d0d0d}.jam-np-art{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.jam-np-art.placeholder{background:linear-gradient(135deg,#1a1a2e,#0d0d0d)}.jam-np-meta{padding:14px 14px 6px}.jam-np-label{font-size:9px;font-weight:800;color:#1db954;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:5px}.jam-np-title{font-size:17px;font-weight:900;margin:0 0 3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jam-np-artist{font-size:13px;color:rgba(255,255,255,.5);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jam-progress-row{display:flex;align-items:center;gap:8px;padding:12px 14px 6px}.jam-time{font-size:10px;color:rgba(255,255,255,.35);font-weight:600;flex-shrink:0}.jam-progress-rail{flex:1;height:3px;background:rgba(255,255,255,.1);border-radius:3px;position:relative;cursor:default;transition:height .15s}.jam-progress-rail:hover{height:5px}.jam-progress-fill{position:absolute;left:0;top:0;height:100%;background:#1db954;border-radius:3px;transition:width .25s linear}.jam-progress-dot{position:absolute;top:50%;transform:translate(-50%,-50%);width:11px;height:11px;border-radius:50%;background:#fff;box-shadow:0 1px 4px rgba(0,0,0,.5);opacity:0;transition:opacity .15s;pointer-events:none}.jam-progress-rail:hover .jam-progress-dot{opacity:1}.jam-controls{display:flex;align-items:center;justify-content:center;gap:12px;padding:8px 14px 16px}.jam-ctrl-btn{border:none;background:0 0;color:rgba(255,255,255,.55);cursor:pointer;width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all .15s}.jam-ctrl-btn:hover{color:#fff;transform:scale(1.08)}.jam-ctrl-btn.main{background:#fff;color:#000;width:52px;height:52px;box-shadow:0 3px 16px rgba(255,255,255,.15)}.jam-ctrl-btn.main:hover{transform:scale(1.04);box-shadow:0 4px 20px rgba(255,255,255,.25)}.jam-section-card{background:var(--jam-surface);border:1px solid var(--jam-border);border-radius:12px;overflow:hidden;flex-shrink:0}.jam-section-title{display:flex;align-items:center;gap:6px;font-size:9px;font-weight:800;letter-spacing:1.2px;color:rgba(255,255,255,.3);padding:11px 14px 8px;text-transform:uppercase}.jam-setting-row{display:flex;align-items:center;justify-content:space-between;padding:4px 14px 14px;font-size:13px;font-weight:600;color:rgba(255,255,255,.85)}.jam-toggle{width:40px;height:22px;background:rgba(255,255,255,.1);border:none;border-radius:11px;cursor:pointer;position:relative;transition:background .25s;flex-shrink:0}.jam-toggle.on{background:#1db954}.jam-toggle-knob{position:absolute;top:3px;left:3px;width:16px;height:16px;border-radius:50%;background:#fff;transition:transform .25s;box-shadow:0 1px 4px rgba(0,0,0,.3)}.jam-toggle.on .jam-toggle-knob{transform:translateX(18px)}.jam-q-row{display:flex;align-items:center;gap:9px;padding:7px 12px;border-top:1px solid rgba(255,255,255,.04);transition:background .15s;cursor:default}.jam-q-row:first-of-type{border-top:0}.jam-q-row:hover{background:rgba(255,255,255,.04)}.jam-q-row.drag-over{background:rgba(29,185,84,.08)}.jam-q-row.drag-src{opacity:.3}.jam-drag-grip{color:rgba(255,255,255,.15);cursor:grab;flex-shrink:0}.jam-q-num{width:14px;font-size:10px;color:rgba(255,255,255,.2);font-weight:700;flex-shrink:0;text-align:right}.jam-q-thumb{width:38px;height:38px;border-radius:4px;overflow:hidden;flex-shrink:0;background:#0d0d0d}.jam-q-thumb img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.jam-q-thumb-ph{width:100%;height:100%;background:linear-gradient(135deg,#1a1a2e,#0d0d0d)}.jam-q-meta{flex:1;min-width:0}.jam-q-title{font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jam-q-artist{font-size:11px;color:rgba(255,255,255,.4)}.jam-q-btns{display:flex;gap:3px;opacity:0;transition:opacity .15s;flex-shrink:0}.jam-q-row:hover .jam-q-btns{opacity:1}.jam-q-btn{width:26px;height:26px;border:none;background:rgba(255,255,255,.06);border-radius:5px;cursor:pointer;display:flex;align-items:center;justify-content:center;color:rgba(255,255,255,.5);transition:all .15s}.jam-q-btn.green:hover{background:rgba(29,185,84,.2);color:#1db954}.jam-q-btn.red:hover{background:rgba(232,68,68,.2);color:#e84444}.jam-member-row{display:flex;align-items:center;gap:10px;padding:9px 14px;border-top:1px solid rgba(255,255,255,.04)}.jam-member-row:first-of-type{border-top:0}.jam-avatar{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:14px;color:#000;overflow:hidden;flex-shrink:0}.jam-avatar img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;display:block}.jam-member-info{flex:1;min-width:0}.jam-member-name{font-size:13px;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.jam-member-role{font-size:10px;color:rgba(255,255,255,.35);margin-top:1px}.jam-id-row{display:flex;align-items:center;justify-content:space-between;padding:4px 14px 12px;gap:8px}.jam-id-code{font-family:"Courier New",monospace;font-size:20px;font-weight:900;color:#1db954;letter-spacing:5px}.jam-share-row{display:flex;gap:6px;padding:0 14px 14px}.flex-1{flex:1}.jam-qr-box{margin:0 14px 14px;padding:14px;background:#fff;border-radius:10px;text-align:center}.jam-qr-box img{width:100%;display:block;border-radius:6px}.jam-qr-label{font-size:11px;color:#000;font-weight:700;margin-top:8px}.jam-footer{padding:12px 14px 14px;border-top:1px solid var(--jam-border);flex-shrink:0;background:var(--jam-surface);display:flex;flex-direction:column;gap:7px}.jam-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:0 16px;height:40px;border-radius:20px;font-size:13px;font-weight:700;cursor:pointer;border:none;transition:all .2s;white-space:nowrap;font-family:inherit}.jam-btn.full{width:100%;box-sizing:border-box}.jam-btn.green{background:#1db954;color:#000}.jam-btn.green:hover{background:#1ed760}.jam-btn.outline{background:0 0;border:1.5px solid rgba(255,255,255,.15);color:rgba(255,255,255,.75)}.jam-btn.outline:hover{border-color:rgba(255,255,255,.35);color:#fff;background:rgba(255,255,255,.04)}.jam-btn.red{background:rgba(232,68,68,.12);color:#e84444;border:1.5px solid rgba(232,68,68,.25)}.jam-btn.red:hover{background:#e84444;color:#fff}.jam-input{width:100%;padding:11px 14px;box-sizing:border-box;background:rgba(255,255,255,.05);border:1.5px solid rgba(255,255,255,.1);border-radius:10px;color:#fff;font-size:13px;font-family:inherit;outline:0;transition:border-color .2s}.jam-input::-moz-placeholder{color:rgba(255,255,255,.22)}.jam-input::placeholder{color:rgba(255,255,255,.22)}.jam-input:focus{border-color:rgba(29,185,84,.45)}.jam-divider{display:flex;align-items:center;gap:10px;font-size:11px;color:rgba(255,255,255,.25);font-weight:600}.jam-divider-line{flex:1;height:1px;background:rgba(255,255,255,.07)}.jam-hero{text-align:center;padding:20px 0 8px}.jam-hero-icon{width:60px;height:60px;border-radius:16px;background:linear-gradient(135deg,#1db954,#1ed760);display:flex;align-items:center;justify-content:center;margin:0 auto 14px;color:#fff;box-shadow:0 6px 24px rgba(29,185,84,.35)}.jam-hero-title{font-size:20px;font-weight:900;margin:0 0 8px}.jam-hero-desc{font-size:13px;color:rgba(255,255,255,.45);line-height:1.55;margin:0}.jam-error{display:flex;align-items:center;gap:7px;padding:10px 14px;background:rgba(232,68,68,.08);border:1px solid rgba(232,68,68,.2);border-radius:8px;color:#ff8080;font-size:12px}
      `.trim(),document.head.appendChild(e))})()})();
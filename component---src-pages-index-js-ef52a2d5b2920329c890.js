webpackJsonp([35783957827783],{230:function(e,t){"use strict";e.exports={siteMetadata:{title:"Gatsby Default Starter"},plugins:["gatsby-plugin-react-helmet","gatsby-plugin-sass",{resolve:"gatsby-plugin-typography",options:{pathToConfigModule:"src/utils/typography.js"}}]}},586:function(e,t,n){e.exports=n.p+"static/badge.d2525cbb.svg"},587:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjRkZGRkZGIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xOSA2LjQxTDE3LjU5IDUgMTIgMTAuNTkgNi40MSA1IDUgNi40MSAxMC41OSAxMiA1IDE3LjU5IDYuNDEgMTkgMTIgMTMuNDEgMTcuNTkgMTkgMTkgMTcuNTkgMTMuNDEgMTJ6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPg=="},231:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=o(r),a=n(6),u=o(a);n(480);var i=function(e){var t=e.title,n=e.link;return l.default.createElement("a",{href:n,className:"primary-button"},t)};i.propTypes={title:u.default.string.isRequired},t.default=i,e.exports=t.default},232:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=o(r),a=n(326),u=o(a),i=n(56),c=function(){return l.default.createElement("div",{className:[u.default.card,u.default.cardCorner].join(" ")},l.default.createElement("h2",null,"Increase User Engagement"),l.default.createElement("p",null,"Modestack will help you increase user engagement by accelerating your website."),l.default.createElement("p",null,"Find out soon."),l.default.createElement(i.PrimaryLink,{title:"Contact Us",link:"mailto:info@modestack.co"}))};t.default=c,e.exports=t.default},326:function(e,t){e.exports={cardCorner:"src-components-card----card-module---cardCorner---1oyRr",card:"src-components-card----card-module---card---33J3s"}},56:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.PrimaryButton=t.SecondaryButton=t.Button=t.PrimaryLink=t.SecondaryLink=t.Link=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},l=n(2),a=o(l),u=n(6),i=o(u),c=n(327),s=o(c),d={title:i.default.string.isRequired,textColor:i.default.string,backgroundColor:i.default.string},f=r({},d,{link:i.default.string.isRequired}),p=r({},d,{clickHandler:i.default.func.isRequired}),m=t.Link=function(e){var t=e.title,n=e.link,o=e.textColor,r=e.backgroundColor;return a.default.createElement("a",{href:n,className:s.default.link,style:{backgroundColor:r,color:o}},t)};m.propTypes=f;var b=t.SecondaryLink=function(e){var t=e.title,n=e.link;return a.default.createElement(m,{link:n,title:t,textColor:"#1E365C",backgroundColor:"#eeeeee"})};b.propTypes=f;var g=t.PrimaryLink=function(e){var t=e.title,n=e.link;return a.default.createElement(m,{link:n,title:t,textColor:"#fff",backgroundColor:"#207ce5"})};g.propTypes=f;var y=t.Button=function(e){var t=e.title,n=e.clickHandler,o=e.backgroundColor,r=e.textColor;return a.default.createElement("button",{onClick:n,className:s.default.link,style:{backgroundColor:o,color:r}},t)};y.propTypes=p;var k=t.SecondaryButton=function(e){var t=e.title,n=e.clickHandler;return a.default.createElement(y,{clickHandler:n,title:t,textColor:"#1E365C",backgroundColor:"#eeeeee"})};k.propTypes=p;var h=t.PrimaryButton=function(e){var t=e.title,n=e.clickHandler;return a.default.createElement(y,{clickHandler:n,title:t,textColor:"#fff",backgroundColor:"#207ce5"})};h.propTypes=p},327:function(e,t){e.exports={link:"src-components-common-link----link-module---link---3wmRu",secondaryLink:"src-components-common-link----link-module---secondaryLink---3cE7S"}},328:function(e,t){e.exports={skewedBackground:"src-components-hero----_hero-module---skewedBackground---1kB_U",tagline:"src-components-hero----_hero-module---tagline---2cll3",introContainer:"src-components-hero----_hero-module---introContainer---ahBYR"}},233:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=o(r),a=n(328),u=o(a),i=n(56),c=function(){return l.default.createElement("div",null,l.default.createElement("div",{className:u.default.skewedBackground}),l.default.createElement("div",{className:u.default.introContainer},l.default.createElement("div",{className:u.default.tagline},l.default.createElement("h1",null,"Modestack will make your site blazingly fast"),l.default.createElement("p",null,"Modestack will help you increase user engagement by accelerating your website. Find out soon.")),l.default.createElement(i.Link,{title:"Contact us",link:"mailto:info@modestack.co",backgroundColor:"#fff",textColor:"#207CE5"})))};t.default=c,e.exports=t.default},234:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var r=n(2),l=o(r),a=n(586),u=o(a),i={margin:"0",minHeight:"100px",minWidth:"100px"},c=function(){return l.default.createElement("img",{style:i,src:u.default})};t.default=c,e.exports=t.default},236:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=o(u),c=n(6),s=o(c),d=n(330),f=o(d),p=n(234),m=o(p),b=n(56),g=n(587),y=o(g),k=function(e){function t(){return r(this,t),l(this,e.apply(this,arguments))}return a(t,e),t.prototype.render=function(){var e=this.props.removeSubscriptionBox;return i.default.createElement("div",{className:f.default.subscription},i.default.createElement("div",{className:f.default.topSection},i.default.createElement("span",null,i.default.createElement("h3",{className:f.default.header},"Subscribe today"),i.default.createElement("p",null,"By subscribing to our weekly newsletter you will get the latest resources to improve user engagement of your website ")),i.default.createElement("div",{className:f.default.badgeContainer,onClick:e},i.default.createElement("img",{style:{margin:"0",position:"absolute",top:"0",right:"0",cursor:"pointer",padding:"10px"},src:y.default,alt:""}),i.default.createElement("div",null,i.default.createElement(m.default,null)))),i.default.createElement("div",{className:f.default.navigation},i.default.createElement("span",null,i.default.createElement("input",{style:{height:"100%"},type:"text"})),i.default.createElement("span",null,i.default.createElement(b.SecondaryButton,{clickHandler:this.subscribe,title:"Subscribe"}))))},t.prototype.subscribe=function(){console.log("subscribing")},t}(i.default.Component);k.propTypes={removeSubscriptionBox:s.default.func},t.default=k,e.exports=t.default},330:function(e,t){e.exports={subscription:"src-components-subscription----subscription-module---subscription---37OY5",topSection:"src-components-subscription----subscription-module---topSection---1y3VY",header:"src-components-subscription----subscription-module---header---dGQkG",badgeContainer:"src-components-subscription----subscription-module---badgeContainer---23JFe",navigation:"src-components-subscription----subscription-module---navigation---3yIMm"}},239:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=o(u),c=(n(230),n(56),n(231)),s=(o(c),n(236)),d=o(s),f=n(233),p=o(f),m=n(232),b=(o(m),function(e){function t(n){r(this,t);var o=l(this,e.call(this,n));return o.closeSubscription=o.closeSubscription.bind(o),o.state={showSubscriptionBox:!1},o}return a(t,e),t.prototype.closeSubscription=function(){this.setState({showSubscriptionBox:!1})},t.prototype.render=function(){var e=this.state.showSubscriptionBox?i.default.createElement(d.default,{removeSubscriptionBox:this.closeSubscription}):null;return i.default.createElement("div",null,i.default.createElement(p.default,null),e)},t}(i.default.Component));t.default=b,e.exports=t.default},480:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-ef52a2d5b2920329c890.js.map
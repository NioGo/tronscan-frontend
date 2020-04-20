(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{2947:function(t,n,e){"use strict";var i=e(0),o=e.n(i),r=e(17),a=e.n(r);function s(t){var n=!1;return function(){n||(console.warn(t),n=!0)}}function l(t,n){for(var e=0;e<n.length;e++)if(t(n[e],e,n))return n[e]}s("\n>> Error, via react-flip-move <<\n\nYou provided a stateless functional component as a child to <FlipMove>. Unfortunately, SFCs aren't supported, because Flip Move needs access to the backing instances via refs, and SFCs don't have a public instance that holds that info.\n\nPlease wrap your components in a native element (eg. <div>), or a non-functional component.\n"),s("\n>> Error, via react-flip-move <<\n\nYou provided a primitive (text or number) node as a child to <FlipMove>. Flip Move needs containers with unique keys to move children around.\n\nPlease wrap your value in a native element (eg. <span>), or a component.\n");var p=s("\n>> Warning, via react-flip-move <<\n\nWhen using \"wrapperless\" mode (by supplying 'typeName' of 'null'), strange things happen when the direct parent has the default \"static\" position.\n\nFlipMove has added 'position: relative' to this node, to ensure Flip Move animates correctly.\n\nTo avoid seeing this warning, simply apply a non-static position to that parent node.\n"),c=s("\n>> Warning, via react-flip-move <<\n\nOne or more of Flip Move's child elements have the html attribute 'disabled' set to true.\n\nPlease note that this will cause animations to break in Internet Explorer 11 and below. Either remove the disabled attribute or set 'animation' to false.\n"),h={elevator:{from:{transform:"scale(0)",opacity:"0"},to:{transform:"",opacity:""}},fade:{from:{opacity:"0"},to:{opacity:""}},accordionVertical:{from:{transform:"scaleY(0)",transformOrigin:"center top"},to:{transform:"",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(0)",transformOrigin:"left center"},to:{transform:"",transformOrigin:"left center"}},none:null},d={elevator:{from:{transform:"scale(1)",opacity:"1"},to:{transform:"scale(0)",opacity:"0"}},fade:{from:{opacity:"1"},to:{opacity:"0"}},accordionVertical:{from:{transform:"scaleY(1)",transformOrigin:"center top"},to:{transform:"scaleY(0)",transformOrigin:"center top"}},accordionHorizontal:{from:{transform:"scaleX(1)",transformOrigin:"left center"},to:{transform:"scaleX(0)",transformOrigin:"left center"}},none:null},u=h,f="elevator",m=function(t){return(m=Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)})(t)};function g(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function y(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(t,n):t.__proto__=n)}function v(t,n){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?t:n}var A,b,D=(A=function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()},b={},function(t){return b[t]||(b[t]=A(t)),b[t]}),N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t};function P(t){var n=t.domNode,e=t.styles;Object.keys(e).forEach(function(t){n.style.setProperty(D(t),e[t])})}function B(t){var n=t.childDomNode,e={top:0,left:0,right:0,bottom:0,height:0,width:0},i=t.childBoundingBox||e,o=t.parentBoundingBox||e,r=(0,t.getPosition)(n),a=r.top-o.top,s=r.left-o.left;return[i.left-s,i.top-a]}var O,w=function(){var t={transition:"transitionend","-o-transition":"oTransitionEnd","-moz-transition":"transitionend","-webkit-transition":"webkitTransitionEnd"};if("undefined"==typeof document)return"";var n=document.createElement("fakeelement"),e=l(function(t){return void 0!==n.style.getPropertyValue(t)},Object.keys(t));return e?t[e]:""}(),E=!w;function x(t){return t.key||""}function k(t){return i.Children.toArray(t)}function S(){var t,n;g(this,S);for(var e=arguments.length,i=Array(e),o=0;o<e;o++)i[o]=arguments[o];return(t=n=v(this,O.call.apply(O,[this].concat(i)))).state={children:k(n.props?n.props.children:[]).map(function(t){return C({},t,{element:t,appearing:!0})})},n.childrenData={},n.parentData={domNode:null,boundingBox:null},n.heightPlaceholderData={domNode:null},n.remainingAnimations=0,n.childrenToAnimate=[],n.findDOMContainer=function(){var t=a.a.findDOMNode(n),e=t&&t.parentNode;e&&e instanceof HTMLElement&&("static"===window.getComputedStyle(e).position&&(e.style.position="relative",p()),n.parentData.domNode=e)},n.runAnimation=function(){var t=n.state.children.filter(n.doesChildNeedToBeAnimated),e=t.map(function(t){return n.computeInitialStyles(t)});t.forEach(function(t,i){n.remainingAnimations+=1,n.childrenToAnimate.push(x(t)),n.animateChild(t,i,e[i])}),"function"==typeof n.props.onStartAll&&n.callChildrenHook(n.props.onStartAll)},n.doesChildNeedToBeAnimated=function(t){if(!x(t))return!1;var e=n.getChildData(x(t)),i=e.domNode,o=e.boundingBox,r=n.parentData.boundingBox;if(!i)return!1;var a=n.props,s=a.appearAnimation,l=a.enterAnimation,p=a.leaveAnimation,c=a.getPosition,h=t.appearing&&s,d=t.entering&&l,u=t.leaving&&p;if(h||d||u)return!0;var f=B({childDomNode:i,childBoundingBox:o,parentBoundingBox:r,getPosition:c}),m=f[0],g=f[1];return 0!==m||0!==g},v(n,t)}var F=function(t){var n,e,r;return y(a,r=i.Component),a.prototype.checkChildren=function(){},a.prototype.convertProps=function(t){var n={children:t.children,easing:t.easing,onStart:t.onStart,onFinish:t.onFinish,onStartAll:t.onStartAll,onFinishAll:t.onFinishAll,typeName:t.typeName,disableAllAnimations:t.disableAllAnimations,getPosition:t.getPosition,maintainContainerHeight:t.maintainContainerHeight,verticalAlignment:t.verticalAlignment,duration:this.convertTimingProp("duration"),delay:this.convertTimingProp("delay"),staggerDurationBy:this.convertTimingProp("staggerDurationBy"),staggerDelayBy:this.convertTimingProp("staggerDelayBy"),appearAnimation:this.convertAnimationProp(t.appearAnimation,u),enterAnimation:this.convertAnimationProp(t.enterAnimation,h),leaveAnimation:this.convertAnimationProp(t.leaveAnimation,d),delegated:{}};this.checkChildren(n.children);var e=Object.keys(n),i=function(t,n){var e=1<arguments.length&&void 0!==n?n:[],i={};return Object.keys(t).forEach(function(n){-1===e.indexOf(n)&&(i[n]=t[n])}),i}(this.props,e);return i.style=C({position:"relative"},i.style),n.delegated=i,n},a.prototype.convertTimingProp=function(t){var n=this.props[t],e="number"==typeof n?n:parseInt(n,10);return isNaN(e)?a.defaultProps[t]:e},a.prototype.convertAnimationProp=function(t,n){switch(void 0===t?"undefined":N(t)){case"boolean":return n[t?f:"none"];case"string":return-1===Object.keys(n).indexOf(t)?n[f]:n[t];default:return t}},a.prototype.render=function(){return o.a.createElement(t,this.convertProps(this.props))},e=n=a,n.defaultProps={easing:"ease-in-out",duration:350,delay:0,staggerDurationBy:0,staggerDelayBy:0,typeName:"div",enterAnimation:f,leaveAnimation:f,disableAllAnimations:!1,getPosition:function(t){return t.getBoundingClientRect()},maintainContainerHeight:!1,verticalAlignment:"top"},e;function a(){return g(this,a),v(this,r.apply(this,arguments))}}((y(S,O=i.Component),S.prototype.componentDidMount=function(){null===this.props.typeName&&this.findDOMContainer(),this.props.appearAnimation&&!this.isAnimationDisabled(this.props)&&(this.prepForAnimation(),this.runAnimation())},S.prototype.componentDidUpdate=function(t){null===this.props.typeName&&this.findDOMContainer(),function(t,n){if(t===n)return 1;var e=!m(t)||!m(n),i=t.length!==n.length;return!e&&!i&&function(t,n){for(var e=0;e<n.length;e++)if(!t(n[e],e))return 0;return 1}(function(t,e){return t===n[e]},t)}(k(this.props.children).map(function(t){return t.key}),k(t.children).map(function(t){return t.key}))||this.isAnimationDisabled(this.props)||(this.prepForAnimation(),this.runAnimation())},S.prototype.calculateNextSetOfChildren=function(t){var n=this,e=t.map(function(t){var e=n.findChildByKey(t.key),i=!e||e.leaving;return C({},t,{element:t,entering:i})}),i=0;return this.state.children.forEach(function(o,r){if(!l(function(t){return t.key===x(o)},t)&&n.props.leaveAnimation){var a=C({},o,{leaving:!0}),s=r+i;e.splice(s,0,a),i+=1}}),e},S.prototype.prepForAnimation=function(){var t=this,n=this.props,e=n.leaveAnimation,i=n.maintainContainerHeight,o=n.getPosition;e&&(this.state.children.filter(function(t){return t.leaving}).forEach(function(n){var e=t.getChildData(x(n));!t.isAnimationDisabled(t.props)&&e.domNode&&e.domNode.disabled&&c(),e.boundingBox&&function(t,n){var e=t.domNode,i=t.boundingBox;if(e&&i){var o=window.getComputedStyle(e),r=["margin-top","margin-left","margin-right"].reduce(function(t,n){var e,i=o.getPropertyValue(n);return C({},t,((e={})[n]=Number(i.replace("px","")),e))},{});P({domNode:e,styles:{position:"absolute",top:("bottom"===n?i.top-i.height:i.top)-r["margin-top"]+"px",left:i.left-r["margin-left"]+"px",right:i.right-r["margin-right"]+"px"}})}}(e,t.props.verticalAlignment)}),i&&this.heightPlaceholderData.domNode&&function(t){var n=t.domNode,e=t.parentData,i=t.getPosition,o=e.domNode,r=e.boundingBox;if(o&&r){P({domNode:n,styles:{height:"0"}});var a=r.height-i(o).height;P({domNode:n,styles:{height:0<a?a+"px":"0"}})}}({domNode:this.heightPlaceholderData.domNode,parentData:this.parentData,getPosition:o})),this.state.children.forEach(function(n){var e=t.getChildData(x(n)).domNode;e&&(n.entering||n.leaving||P({domNode:e,styles:{transition:""}}))})},S.prototype.UNSAFE_componentWillReceiveProps=function(t){this.updateBoundingBoxCaches();var n=k(t.children);this.setState({children:this.isAnimationDisabled(t)?n.map(function(t){return C({},t,{element:t})}):this.calculateNextSetOfChildren(n)})},S.prototype.animateChild=function(t,n,e){var i=this,o=this.getChildData(x(t)).domNode;o&&(P({domNode:o,styles:e}),this.props.onStart&&this.props.onStart(t,o),requestAnimationFrame(function(){requestAnimationFrame(function(){var e={transition:function(t,n){var e=n.delay,i=n.duration,o=n.staggerDurationBy,r=n.staggerDelayBy,a=n.easing;return e+=t*r,i+=t*o,["transform","opacity"].map(function(t){return t+" "+i+"ms "+a+" "+e+"ms"}).join(", ")}(n,i.props),transform:"",opacity:""};t.appearing&&i.props.appearAnimation?e=C({},e,i.props.appearAnimation.to):t.entering&&i.props.enterAnimation?e=C({},e,i.props.enterAnimation.to):t.leaving&&i.props.leaveAnimation&&(e=C({},e,i.props.leaveAnimation.to)),P({domNode:o,styles:e})})}),this.bindTransitionEndHandler(t))},S.prototype.bindTransitionEndHandler=function(t){var n=this,e=this.getChildData(x(t)).domNode;e&&e.addEventListener(w,function i(o){o.target===e&&(e.style.transition="",n.triggerFinishHooks(t,e),e.removeEventListener(w,i),t.leaving&&n.removeChildData(x(t)))})},S.prototype.triggerFinishHooks=function(t,n){var e=this;if(this.props.onFinish&&this.props.onFinish(t,n),this.remainingAnimations-=1,0===this.remainingAnimations){var i=this.state.children.filter(function(t){return!t.leaving}).map(function(t){return C({},t,{element:t.element,appearing:!1,entering:!1})});this.setState({children:i},function(){"function"==typeof e.props.onFinishAll&&e.callChildrenHook(e.props.onFinishAll),e.childrenToAnimate=[]}),this.heightPlaceholderData.domNode&&(this.heightPlaceholderData.domNode.style.height="0")}},S.prototype.callChildrenHook=function(t){var n=this,e=[],i=[];this.childrenToAnimate.forEach(function(t){var o=n.findChildByKey(t);o&&(e.push(o),n.hasChildData(t)&&i.push(n.getChildData(t).domNode))}),t(e,i)},S.prototype.updateBoundingBoxCaches=function(){var t=this,n=this.parentData.domNode;if(n){this.parentData.boundingBox=this.props.getPosition(n);var e=[];this.state.children.forEach(function(i){var o=x(i);if(o)if(t.hasChildData(o)){var r=t.getChildData(o);r.domNode&&i?e.push(function(t){var n=t.childDomNode,e=t.getPosition,i=e(t.parentDomNode),o=e(n),r=o.top,a=o.left,s=o.right,l=o.bottom,p=o.width,c=o.height;return{top:r-i.top,left:a-i.left,right:i.right-s,bottom:i.bottom-l,width:p,height:c}}({childDomNode:r.domNode,parentDomNode:n,getPosition:t.props.getPosition})):e.push(null)}else e.push(null);else e.push(null)}),this.state.children.forEach(function(n,i){var o=x(n),r=e[i];o&&t.setChildData(o,{boundingBox:r})})}},S.prototype.computeInitialStyles=function(t){if(t.appearing)return this.props.appearAnimation?this.props.appearAnimation.from:{};if(t.entering)return this.props.enterAnimation?C({position:"",top:"",left:"",right:"",bottom:""},this.props.enterAnimation.from):{};if(t.leaving)return this.props.leaveAnimation?this.props.leaveAnimation.from:{};var n=this.getChildData(x(t)),e=n.domNode,i=n.boundingBox,o=this.parentData.boundingBox;if(!e)return{};var r=B({childDomNode:e,childBoundingBox:i,parentBoundingBox:o,getPosition:this.props.getPosition});return{transform:"translate("+r[0]+"px, "+r[1]+"px)"}},S.prototype.isAnimationDisabled=function(t){return E||t.disableAllAnimations||0===t.duration&&0===t.delay&&0===t.staggerDurationBy&&0===t.staggerDelayBy},S.prototype.findChildByKey=function(t){return l(function(n){return x(n)===t},this.state.children)},S.prototype.hasChildData=function(t){return Object.prototype.hasOwnProperty.call(this.childrenData,t)},S.prototype.getChildData=function(t){return this.hasChildData(t)?this.childrenData[t]:{}},S.prototype.setChildData=function(t,n){this.childrenData[t]=C({},this.getChildData(t),n)},S.prototype.removeChildData=function(t){delete this.childrenData[t],this.setState(function(n){return C({},n,{children:n.children.filter(function(n){return n.element.key!==t})})})},S.prototype.createHeightPlaceholder=function(){var t=this,n=this.props.typeName,e="ul"===n||"ol"===n?"li":"div";return Object(i.createElement)(e,{key:"height-placeholder",ref:function(n){t.heightPlaceholderData.domNode=n},style:{visibility:"hidden",height:0}})},S.prototype.childrenWithRefs=function(){var t=this;return this.state.children.map(function(n){return Object(i.cloneElement)(n.element,{ref:function(e){if(e){var i=function(t){if("undefined"==typeof HTMLElement)return null;if(t instanceof HTMLElement)return t;var n=Object(r.findDOMNode)(t);return n&&n.nodeType===Node.TEXT_NODE?null:n}(e);t.setChildData(x(n),{domNode:i})}}})})},S.prototype.render=function(){var t=this,n=this.props,e=n.typeName,o=n.delegated,r=n.leaveAnimation,a=n.maintainContainerHeight,s=this.childrenWithRefs();if(r&&a&&s.push(this.createHeightPlaceholder()),!e)return s;var l=C({},o,{children:s,ref:function(n){t.parentData.domNode=n}});return Object(i.createElement)(e,l)},S));n.a=F}}]);
!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={};Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var i="Expected a function",o=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,u=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,g=Math.max,v=Math.min,b=function(){return d.Date.now()};function p(e,t,n){var r,o,a,f,u,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(i);function p(t){var n=r,i=o;return r=o=void 0,c=t,f=e.apply(i,n)}function E(e){return c=e,u=setTimeout(j,t),s?p(e):f}function O(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=a}function j(){var e=b();if(O(e))return h(e);u=setTimeout(j,function(e){var n=t-(e-l);return d?v(n,a-(e-c)):n}(e))}function h(e){return u=void 0,m&&r?p(e):(r=o=void 0,f)}function T(){var e=b(),n=O(e);if(r=arguments,o=this,l=e,n){if(void 0===u)return E(l);if(d)return u=setTimeout(j,t),p(l)}return void 0===u&&(u=setTimeout(j,t)),f}return t=S(t)||0,y(n)&&(s=!!n.leading,a=(d="maxWait"in n)?g(S(n.maxWait)||0,t):a,m="trailing"in n?!!n.trailing:m),T.cancel=function(){void 0!==u&&clearTimeout(u),c=0,r=l=o=u=void 0},T.flush=function(){return void 0===u?f:h(b())},T}function y(t){var n=void 0===t?"undefined":e(r)(t);return!!t&&("object"==n||"function"==n)}function S(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(r)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var i=f.test(t);return i||u.test(t)?l(t.slice(2),i?2:8):a.test(t)?NaN:+t}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError(i);return y(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),p(e,t,{leading:r,maxWait:t,trailing:o})};var E={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector(".feedback-form input[name='email']"),messageEl:document.querySelector(".feedback-form textarea[name='message']")},O={};function j(){O.email="",O.message=""}localStorage.getItem("feedback-form-state")||(j(),localStorage.setItem("feedback-form-state",JSON.stringify(O))),O=JSON.parse(localStorage.getItem("feedback-form-state")),E.inputEl.value=O.email,E.messageEl.value=O.message,E.formEl.addEventListener("input",e(t)((function(e){O.email=E.inputEl.value,O.message=E.messageEl.value,localStorage.setItem("feedback-form-state",JSON.stringify(O))}),500)),E.formEl.addEventListener("submit",(function(e){if(e.preventDefault(),""===O.email||""===O.message)return void alert("Fill in all the fields");e.currentTarget.reset(),j(),localStorage.setItem("feedback-form-state",JSON.stringify(O))}))}();
//# sourceMappingURL=03-feedback.734eb559.js.map
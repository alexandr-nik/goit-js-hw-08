function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=u||l||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return c.Date.now()};function p(e,t,n){var r,i,o,a,f,u,l=0,c=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,o=i;return r=i=void 0,l=t,a=e.apply(o,n)}function E(e){return l=e,f=setTimeout(h,t),c?y(e):a}function S(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-l>=o}function h(){var e=g();if(S(e))return j(e);f=setTimeout(h,function(e){var n=t-(e-u);return s?d(n,o-(e-l)):n}(e))}function j(e){return f=void 0,p&&r?y(e):(r=i=void 0,a)}function T(){var e=g(),n=S(e);if(r=arguments,i=this,u=e,n){if(void 0===f)return E(u);if(s)return f=setTimeout(h,t),y(u)}return void 0===f&&(f=setTimeout(h,t)),a}return t=b(t)||0,v(n)&&(c=!!n.leading,o=(s="maxWait"in n)?m(b(n.maxWait)||0,t):o,p="trailing"in n?!!n.trailing:p),T.cancel=function(){void 0!==f&&clearTimeout(f),l=0,r=u=i=f=void 0},T.flush=function(){return void 0===f?a:j(g())},T}function v(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(v(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=v(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return v(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),p(e,t,{leading:r,maxWait:t,trailing:i})};const y={formEl:document.querySelector(".feedback-form"),inputEl:document.querySelector(".feedback-form input[name='email']"),messageEl:document.querySelector(".feedback-form textarea[name='message']")};let E={};localStorage.getItem("feedback-form-state")&&(E=JSON.parse(localStorage.getItem("feedback-form-state")),y.inputEl.value=E.email,y.messageEl.value=E.message),y.formEl.addEventListener("input",e(t)((function(e){E.email=y.inputEl.value,E.message=y.messageEl.value,localStorage.setItem("feedback-form-state",JSON.stringify(E))}),500)),y.formEl.addEventListener("submit",(function(e){if(e.preventDefault(),""===E.email||""===E.message)return void alert("Fill in all the fields");console.log(E),e.currentTarget.reset(),E={},localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.39ba19d8.js.map
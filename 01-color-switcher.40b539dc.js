!function(){var t=function(t){return document.querySelector(t)},n=t("[data-start]"),e=t("[data-stop]");var r=null;n.addEventListener("click",(function(){r=setInterval((function(){t("body").style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),n.addEventListener("click",(function(){return n.disabled=!0})),e.addEventListener("click",(function(){return clearInterval(r)})),e.addEventListener("click",(function(){return n.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.40b539dc.js.map

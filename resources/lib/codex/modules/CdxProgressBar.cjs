"use strict";const r=require("vue"),n=require("./useWarnOnce.cjs"),d=require("./_plugin-vue_export-helper.js"),i=r.defineComponent({name:"CdxProgressBar",props:{inline:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},setup(e,{attrs:s}){n(()=>!e.inline&&!s["aria-label"]&&!s["aria-hidden"],"CdxProgressBar: Progress bars require one of the following attribute, aria-label or aria-hidden. See documentation on https://doc.wikimedia.org/codex/latest/components/demos/progressbar.html");const a=r.computed(()=>({"cdx-progress-bar--block":!e.inline,"cdx-progress-bar--inline":e.inline,"cdx-progress-bar--enabled":!e.disabled,"cdx-progress-bar--disabled":e.disabled})),o=r.computed(()=>e.inline?"true":void 0);return{rootClasses:a,computedAriaHidden:o}}}),t=["aria-hidden","aria-disabled"],l=r.createElementVNode("div",{class:"cdx-progress-bar__bar"},null,-1),c=[l];function u(e,s,a,o,p,g){return r.openBlock(),r.createElementBlock("div",{class:r.normalizeClass(["cdx-progress-bar",e.rootClasses]),role:"progressbar","aria-hidden":e.computedAriaHidden,"aria-disabled":e.disabled},c,10,t)}const b=d._export_sfc(i,[["render",u]]);module.exports=b;
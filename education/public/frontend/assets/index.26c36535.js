var E=(s,t,r)=>new Promise((o,e)=>{var n=c=>{try{l(r.next(c))}catch(h){e(h)}},a=c=>{try{l(r.throw(c))}catch(h){e(h)}},l=c=>c.done?o(c.value):Promise.resolve(c.value).then(n,a);l((r=r.apply(s,t)).next())});import{c as g,r as P,a as R,b as x,d as I,u as A,o as p,e as m,F as k,f as O,g as u,t as $,_ as j,h as b,i as V,R as D,j as S,s as w,k as C,l as T,C as F,I as N,m as B}from"./vendor.f06f8c68.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(e){if(e.ep)return;e.ep=!0;const n=r(e);fetch(e.href,n)}};G();const H="modulepreload",y={},U="/assets/education/frontend/",i=function(t,r){return!r||r.length===0?t():Promise.all(r.map(o=>{if(o=`${U}${o}`,o in y)return;y[o]=!0;const e=o.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":H,e||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),e)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",c)})})).then(()=>t())},v=g({url:"frappe.auth.get_logged_user",cache:"User",onError(s){s&&s.exc_type==="AuthenticationError"&&f.push({name:"LoginPage"})}});function L(){let t=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return t==="Guest"&&(t=null),t}const _=P({login:g({url:"login",makeParams({email:s,password:t}){return{usr:s,pwd:t}},onSuccess(s){v.reload(),_.user=L(),_.login.reset(),f.replace(s.default_route||"/")}}),logout:g({url:"logout",onSuccess(){v.reset(),_.user=L(),f.replace({name:"Login"})}}),user:L(),isLoggedIn:R(()=>!!_.user)}),q=[{path:"/",name:"Home",component:()=>i(()=>import("./Home.e54729a4.js"),["assets/Home.e54729a4.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])},{name:"Login",path:"/account/login",component:()=>i(()=>import("./Login.b28e6bb1.js"),["assets/Login.b28e6bb1.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])},{path:"/schedule",name:"Schedule",component:()=>i(()=>import("./Schedule.9971a08a.js"),["assets/Schedule.9971a08a.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])},{path:"/grades",name:"Grades",component:()=>i(()=>import("./Grades.d4bd844f.js"),["assets/Grades.d4bd844f.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])},{path:"/fees",name:"Fees",component:()=>i(()=>import("./Fees.346b58e4.js"),["assets/Fees.346b58e4.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])},{path:"/attendance",name:"Attendance",component:()=>i(()=>import("./Attendance.949de197.js"),["assets/Attendance.949de197.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])},{path:"/leaves",name:"Leaves",component:()=>i(()=>import("./Leaves.12ef3bbc.js"),["assets/Leaves.12ef3bbc.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])},{path:"/profile",name:"Profile",component:()=>i(()=>import("./Profile.3c876433.js"),["assets/Profile.3c876433.js","assets/vendor.f06f8c68.js","assets/vendor.1875b906.css"])}];let f=x({history:I("/frontend"),routes:q});f.beforeEach((s,t,r)=>E(void 0,null,function*(){let o=_.isLoggedIn;try{yield v.promise}catch(e){o=!1}s.name==="Login"&&o?r({name:"Home"}):s.name!=="Login"&&!o?r({name:"Login"}):r()}));const W={class:"w-56 flex flex-col p-10"},K=["onClick"],z={setup(s){const t=A(),r=[{label:"Dashboard",to:"/"},{label:"Schedule",to:"schedule"},{label:"Grades",to:"grades"},{label:"Fees",to:"fees"},{label:"Attendance",to:"attendance"},{label:"Leave",to:"leaves"},{label:"Profile",to:"profile"}],o=e=>{t.push(e)};return(e,n)=>(p(),m("div",W,[(p(),m(k,null,O(r,a=>u("button",{class:"text-left mb-2 text-lg",onClick:l=>o(a.to)},$(a.label),9,K)),64))]))}},J={},M={class:"flex justify-end gap-3 items-center px-5 py-2.5 h-12 border-b-[1px] border-gray-400"},Q=u("h3",{class:"cursor-pointer"},"Notifications",-1),X=u("h3",{class:"cursor-pointer"},"Profile",-1),Y=[Q,X];function Z(s,t){return p(),m("header",M,Y)}var ee=j(J,[["render",Z]]);const te={class:"flex h-screen w-screen"},oe={class:"h-full border-r bg-gray-50"},se={class:"flex-1 flex flex-col h-full overflow-auto"},re={setup(s){return(t,r)=>(p(),m("div",null,[u("div",te,[u("div",oe,[b(z)]),u("div",se,[b(ee),b(V(D),{class:"pl-5 pt-5"})])])]))}};let d=S(re);w("resourceFetcher",B);d.use(f);d.use(C);d.component("Button",T);d.component("Card",F);d.component("Input",N);d.mount("#app");export{_ as s};

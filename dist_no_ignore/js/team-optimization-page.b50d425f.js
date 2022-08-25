"use strict";(self["webpackChunkgenshin_artifacts"]=self["webpackChunkgenshin_artifacts"]||[]).push([[121],{38755:function(e,t,o){var n=o(10311);const a={preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024",width:"1.2em",height:"1.2em"},l=(0,n.createElementVNode)("path",{fill:"currentColor",d:"M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"},null,-1),i=[l];function c(e,t){return(0,n.openBlock)(),(0,n.createElementBlock)("svg",a,i)}t["Z"]={name:"ep-plus",render:c}},6643:function(e,t,o){o.d(t,{Z:function(){return w}});var n=o(25791),a=(o(20048),o(10311));const l={key:1,class:"no-item",style:{padding:"8px"}};function i(e,t,o,n,i,c){return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[c.list.length>0?((0,a.openBlock)(!0),(0,a.createElementBlock)(a.Fragment,{key:0},(0,a.renderList)(c.list,(e=>((0,a.openBlock)(),(0,a.createElementBlock)("div",{key:e.name,class:"item"},[(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(e.name),1),(0,a.createElementVNode)("span",null,(0,a.toDisplayString)(e.value.toFixed(3)),1)])))),128)):((0,a.openBlock)(),(0,a.createElementBlock)("div",l," 无加成 "))])}o(2707);var c={name:"AttributeComposition",props:["composition"],computed:{list(){let e=[];for(const t in this.composition)e.push({name:t,value:this.composition[t]});return e.sort(((e,t)=>e.name.localeCompare(t.name))),e}}},r=o(83744);const s=(0,r.Z)(c,[["render",i],["__scopeId","data-v-a1776db8"]]);var u=s;const m={class:"attribute-item"},d={class:"title"},p={class:"value"};function f(e,t,o,l,i,c){const r=u,s=n.Q0;return(0,a.openBlock)(),(0,a.createElementBlock)("div",m,[(0,a.createVNode)(s,null,{content:(0,a.withCtx)((()=>[(0,a.createVNode)(r,{composition:o.composition},null,8,["composition"])])),default:(0,a.withCtx)((()=>[(0,a.createElementVNode)("span",d,(0,a.toDisplayString)(o.title),1)])),_:1}),(0,a.createElementVNode)("span",p,(0,a.toDisplayString)(c.displayValue),1)])}var v={name:"AttributeItem",components:{AttributeComposition:u},props:{composition:{},title:{},percentage:{default:!1}},computed:{sum(){let e=0;for(const t in this.composition)e+=this.composition[t];return e},displayValue(){return this.percentage?`${(100*this.sum).toFixed(1)}%`:Math.round(this.sum)}}};const g=(0,r.Z)(v,[["render",f],["__scopeId","data-v-d42f263e"]]);var h=g;const k={class:"class"},V={class:"class"},b={class:"class"};function y(e,t,o,n,l,i){const c=h;return(0,a.openBlock)(),(0,a.createElementBlock)("div",null,[(0,a.createElementVNode)("h3",k,(0,a.toDisplayString)(n.t("stat.base")),1),(0,a.createVNode)(c,{title:n.t("stat.lifeStatic"),composition:o.attribute.hp},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.attackStatic"),composition:o.attribute.atk},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.defendStatic"),composition:o.attribute.def},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.elementalMastery"),composition:o.attribute.elemental_mastery},null,8,["title","composition"]),(0,a.createElementVNode)("h3",V,(0,a.toDisplayString)(n.t("stat.advanced")),1),(0,a.createVNode)(c,{title:n.t("stat.critical"),composition:o.attribute.critical,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.criticalDamage"),composition:o.attribute.critical_damage,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.cureEffect"),composition:o.attribute.healing_bonus,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.recharge"),composition:o.attribute.recharge,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.shield"),composition:o.attribute.shield_strength,percentage:!0},null,8,["title","composition"]),(0,a.createElementVNode)("h3",b,(0,a.toDisplayString)(n.t("stat.ele")),1),(0,a.createVNode)(c,{title:n.t("stat.fireBonus"),composition:o.attribute.bonus_pyro,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.waterBonus"),composition:o.attribute.bonus_hydro,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.dendroBonus"),composition:o.attribute.bonus_dendro,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.thunderBonus"),composition:o.attribute.bonus_electro,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.windBonus"),composition:o.attribute.bonus_anemo,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.iceBonus"),composition:o.attribute.bonus_cryo,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.rockBonus"),composition:o.attribute.bonus_geo,percentage:!0},null,8,["title","composition"]),(0,a.createVNode)(c,{title:n.t("stat.physicalBonus"),composition:o.attribute.bonus_physical,percentage:!0},null,8,["title","composition"])])}var B=o(91919),N={name:"AttributePanel",components:{AttributeItem:h},props:{attribute:{type:Object}},computed:{attack(){let e=this.attribute;return e.attackStatic+e.attackBasic+e.attackPercentage},defend(){let e=this.attribute;return e.defendStatic+e.defendBasic+e.defendPercentage},life(){let e=this.attribute;return e.lifeStatic+e.lifeBasic+e.lifePercentage}},setup(){const{t:e}=(0,B.QT)();return{t:e}}};const _=(0,r.Z)(N,[["render",y],["__scopeId","data-v-1b9e2d1d"]]);var w=_},2875:function(e,t,o){o.d(t,{YK:function(){return a},$o:function(){return i},eH:function(){return c}});o(33948);var n=o(86315);o(60285),o(41637);function a(e,t){const n=new Worker(new URL(o.p+o.u(674),o.b));return new Promise(((o,a)=>{n.onmessage=function(a){const l=a.data.type;if("ready"===l)n.postMessage({input:e,artifacts:t});else if("result"===l){const e=a.data.data.result;n.terminate(),o(e)}},n.onerror=function(e){a(e)}}))}o(94631);var l=o(55979);function i(e,t,n=12e4){const a=new Worker(new URL(o.p+o.u(223),o.b)),i=(0,l.p$)(e);return new Promise(((e,o)=>{const l=setTimeout((()=>{o("计算超时")}),n);a.onmessage=o=>{if("ready"===o.data.type)a.postMessage({potentialFunctionInterface:i,artifacts:t});else{const t=o.data.data.results;clearTimeout(l),e(t)}},a.onerror=e=>{o("计算发生错误："+e.message),clearTimeout(l)}})).finally((()=>{a.terminate()}))}async function c(e,t,o,a){const l=await(0,n.n)();return l.CommonInterface.get_artifacts_rank_by_character(e,t,o,a)}},94631:function(e,t,o){o.d(t,{Y:function(){return n}});o(33948),o(60285),o(41637);function n(e,t,n=3e5){const a=new Worker(new URL(o.p+o.u(650),o.b));return new Promise(((o,l)=>{const i=setTimeout((()=>{l("计算超时")}),n);a.onmessage=n=>{if("ready"===n.data.type)a.postMessage({optimizeConfig:e,artifacts:t});else{const e=n.data.data.results;clearTimeout(i),o(e)}},a.onerror=()=>{l("计算发生错误")}})).finally((()=>{a.terminate()}))}},97092:function(e,t,o){o.r(t),o.d(t,{default:function(){return Q}});var n=o(79509),a=o(89804),l=o(10311),i=o(35267),c=(o(45177),o(19651)),r=(o(71683),o(31838)),s=(o(87228),o(7810)),u=(o(44163),o(77049)),m=(o(75915),o(21491)),d=(o(72142),o(28785)),p=(o(9638),o(33948),o(67637)),f=o(2875),v=o(70797),g=o(80377),h=o(33996),k=o(59818),V=(o(50657),o(60096),o(7502)),b={__name:"SelectPreset",props:{modelValue:String},setup(e){const t=(0,V.B)(),o=(0,l.computed)((()=>{let e=[];for(let o of t.allFlat.value)e.push(o.name);return e}));return(t,n)=>{const a=k.BT,i=k.km;return(0,l.openBlock)(),(0,l.createBlock)(i,{"model-value":e.modelValue,"onUpdate:modelValue":n[0]||(n[0]=e=>t.$emit("update:modelValue",e))},{default:(0,l.withCtx)((()=>[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(o),(e=>((0,l.openBlock)(),(0,l.createBlock)(a,{key:e,label:e,value:e},null,8,["label","value"])))),128))])),_:1},8,["model-value"])}}};const y=b;var B=y,N=o(6643),_=o(68095),w=o(86315),E=o(55979),x=o(74148),C=o(38755),S=o(42894),D=o(19344),T=o(91919);const P=e=>((0,l.pushScopeId)("data-v-2110fb4b"),e=e(),(0,l.popScopeId)(),e),z=(0,l.createTextVNode)("In theory, you should not see this"),I={key:1,style:{padding:"0 20px"}},Z={style:{"margin-bottom":"12px"}},F={style:{display:"flex","justify-content":"space-between","align-items":"center"},class:"member-header"},L={class:"team-title"},U={class:"common-title2"},M={class:"common-title2"},A={class:"result-item-top"},$=P((()=>(0,l.createElementVNode)("div",{class:"result-item-buttons"},null,-1))),R={class:"result-item-content"},j={key:1,style:{display:"flex","justify-content":"center"}};var Y=(0,l.defineComponent)({__name:"TeamOptimizationPage",async setup(e){let t,o;const{t:k}=(0,T.QT)(),b=(0,_.n)(),y=(0,V.B)(),P=([t,o]=(0,l.withAsyncContext)((()=>(0,w.n)())),t=await t,o(),t),Y=(0,l.ref)([null]),H=(0,l.ref)([0]),O=8;function Q(){Y.value.length!==O?(Y.value.push(null),H.value.push(0)):(0,n.z8)({message:"最多支持8个成员",type:"error"})}function W(e){1!==Y.value.length&&(Y.value.splice(e,1),H.value.splice(e,1))}const K=(0,l.computed)((()=>{let e=[];for(let t of Y.value.values())if(t){const o=y.presets.value[t];o&&e.push(o)}return e})),q=(0,l.ref)([]),G=(0,l.ref)(0),J=(0,l.computed)((()=>0===q.value.length?null:q.value[G.value]));function X(e){G.value=e-1}const ee=(0,l.ref)(!1),te=(0,l.ref)(null);function oe(e){let t=[];if(J.value){const o=Object.values(J.value[e]),n=[];for(let e of o){const t=b.artifacts.value.get(e);t&&n.push(t)}t=n.map((e=>(0,p.Lz)(e)))}return{character:K.value[e].item.character,weapon:K.value[e].item.weapon,buffs:K.value[e].item.buffs,artifacts:t}}async function ne(e){const t=oe(e);te.value=await P.CommonInterface.get_attribute(t),ee.value=!0}function ae(e){b.toggleArtifact(e)}const le=(0,l.computed)((()=>{let e=[];for(let t of b.artifacts.value.values())t.level>=16&&!t.omit&&e.push(t);return e})),ie=(0,l.computed)((()=>le.value.map(p.Lz))),ce=(0,l.computed)((()=>K.value.map((e=>(0,v.DR)(e.item))))),re={mva_step:5,work_space:1e3,max_re_optimize:5,max_search:1e6,count:1e3},se=(0,l.computed)((()=>({single_interfaces:ce.value,weights:H.value,hyper_param:re})));function ue(){const e=K.value.length===Y.value.length;if(!e)return void(0,n.z8)({message:"请选择计算预设",type:"error"});const t=(0,E.p$)(se.value),o=ie.value,l=a.kN.service({text:"莫娜占卜中（可能需要数分钟）",lock:!0,fullscreen:!0});(0,f.YK)(t,o).then((e=>{q.value=e.artifacts,G.value=0})).catch((e=>{var t;(0,n.z8)({message:`计算过程发生错误：${null!==(t=e.message)&&void 0!==t?t:e}`,type:"error"}),console.error(e)})).finally((()=>{l.close()}))}return(e,t)=>{const o=d.GT,n=m.zd,a=u.mi,p=s.BM,f=r.Dv,v=c.d6,V=i.dq;return(0,l.openBlock)(),(0,l.createElementBlock)("div",null,[(0,l.createVNode)(n,{title:(0,l.unref)(k)("misc.panel"),modelValue:ee.value,"onUpdate:modelValue":t[0]||(t[0]=e=>ee.value=e),size:(0,l.unref)(g.B)?"30%":"100%"},{default:(0,l.withCtx)((()=>[te.value?((0,l.openBlock)(),(0,l.createElementBlock)("div",I,[(0,l.createVNode)((0,l.unref)(N.Z),{attribute:te.value},null,8,["attribute"])])):((0,l.openBlock)(),(0,l.createBlock)(o,{key:0},{default:(0,l.withCtx)((()=>[z])),_:1}))])),_:1},8,["title","modelValue","size"]),(0,l.createVNode)(V,{gutter:16},{default:(0,l.withCtx)((()=>[(0,l.createVNode)(f,{md:6,sm:24,class:"mona-scroll-hidden left"},{default:(0,l.withCtx)((()=>[(0,l.createElementVNode)("div",Z,[(0,l.createVNode)(a,{type:"primary",icon:(0,l.unref)(x.Z),onClick:ue},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)((0,l.unref)(k)("teamPage.start")),1)])),_:1},8,["icon"]),(0,l.createVNode)(a,{icon:(0,l.unref)(C.Z),onClick:Q},{default:(0,l.withCtx)((()=>[(0,l.createTextVNode)((0,l.toDisplayString)((0,l.unref)(k)("teamPage.add")),1)])),_:1},8,["icon"])]),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)(Y.value,((e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:t,class:"member-item"},[(0,l.createElementVNode)("div",F,[(0,l.createElementVNode)("p",L,(0,l.toDisplayString)((0,l.unref)(k)("teamPage.member"))+(0,l.toDisplayString)(t+1),1),(0,l.createElementVNode)("div",null,[(0,l.createVNode)(a,{circle:"",text:"",icon:(0,l.unref)(S.Z),onClick:e=>W(t),style:{color:"white"}},null,8,["icon","onClick"])])]),(0,l.createElementVNode)("p",U,(0,l.toDisplayString)((0,l.unref)(k)("misc.preset")),1),(0,l.createVNode)(B,{modelValue:Y.value[t],"onUpdate:modelValue":e=>Y.value[t]=e},null,8,["modelValue","onUpdate:modelValue"]),(0,l.createElementVNode)("p",M,(0,l.toDisplayString)((0,l.unref)(k)("teamPage.weight")),1),(0,l.createVNode)(p,{modelValue:H.value[t],"onUpdate:modelValue":e=>H.value[t]=e,min:0,max:1,step:.01,"show-input":!0,style:{"padding-left":"8px"}},null,8,["modelValue","onUpdate:modelValue","step"])])))),128))])),_:1}),(0,l.createVNode)(f,{md:18,sm:24,class:"mona-scroll-hidden right"},{default:(0,l.withCtx)((()=>[(0,l.unref)(J)?((0,l.openBlock)(),(0,l.createElementBlock)(l.Fragment,{key:0},[(0,l.createVNode)(v,{"model-value":G.value+1,"onUpdate:modelValue":X,min:1,max:q.value.length,style:{"margin-bottom":"12px"}},null,8,["model-value","max"]),((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(J),((e,t)=>((0,l.openBlock)(),(0,l.createElementBlock)("div",{key:t,class:"result-item"},[(0,l.createElementVNode)("div",A,[(0,l.createElementVNode)("div",null,[(0,l.createVNode)(a,{icon:(0,l.unref)(D.Z),circle:"",text:"",title:(0,l.unref)(k)("teamPage.showStat"),onClick:e=>ne(t)},null,8,["icon","title","onClick"])]),$]),(0,l.createElementVNode)("div",R,[((0,l.openBlock)(!0),(0,l.createElementBlock)(l.Fragment,null,(0,l.renderList)((0,l.unref)(J)[t],(e=>((0,l.openBlock)(),(0,l.createBlock)(h.Z,{key:e,item:(0,l.unref)(b).artifacts.value.get(e),buttons:!0,"lock-button":!0,"delete-button":!1,"edit-button":!1,onToggle:t=>ae(e)},null,8,["item","onToggle"])))),128))])])))),128))],64)):((0,l.openBlock)(),(0,l.createElementBlock)("div",j,[(0,l.createVNode)(o)]))])),_:1})])),_:1})])}}}),H=o(83744);const O=(0,H.Z)(Y,[["__scopeId","data-v-2110fb4b"]]);var Q=O}}]);
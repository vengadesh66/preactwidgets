(()=>{var ze=Object.defineProperty,Me=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var re=(t,e,o)=>e in t?ze(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ie=(t,e)=>{for(var o in e||(e={}))We.call(e,o)&&re(t,o,e[o]);if(_e)for(var o of _e(e))$e.call(e,o)&&re(t,o,e[o]);return t},ae=(t,e)=>Me(t,Re(e));var B,h,pe,Be,N,le,fe,de,me,K,V,Y,je,z={},he=[],Oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function T(t,e){for(var o in e)t[o]=e[o];return t}function Q(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function v(t,e,o){var n,i,r,l={};for(r in e)r=="key"?n=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?B.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return R(t,l,n,i,null)}function R(t,e,o,n,i){var r={type:t,props:e,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i==null?++pe:i,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(r),r}function E(t){return t.children}function W(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?F(t):null}function ve(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return ve(t)}}function ue(t){(!t.__d&&(t.__d=!0)&&N.push(t)&&!$.__r++||le!=h.debounceRendering)&&((le=h.debounceRendering)||fe)($)}function $(){for(var t,e,o,n,i,r,l,u=1;N.length;)N.length>u&&N.sort(de),t=N.shift(),u=N.length,t.__d&&(o=void 0,n=void 0,i=(n=(e=t).__v).__e,r=[],l=[],e.__P&&((o=T({},n)).__v=n.__v+1,h.vnode&&h.vnode(o),X(e.__P,o,n,e.__n,e.__P.namespaceURI,32&n.__u?[i]:null,r,i==null?F(n):i,!!(32&n.__u),l),o.__v=n.__v,o.__.__k[o.__i]=o,ye(r,o,l),n.__e=n.__=null,o.__e!=i&&ve(o)));$.__r=0}function ge(t,e,o,n,i,r,l,u,p,a,f){var _,c,s,g,k,b,m,d=n&&n.__k||he,C=e.length;for(p=qe(o,e,d,p,C),_=0;_<C;_++)(s=o.__k[_])!=null&&(c=s.__i==-1?z:d[s.__i]||z,s.__i=_,b=X(t,s,c,i,r,l,u,p,a,f),g=s.__e,s.ref&&c.ref!=s.ref&&(c.ref&&Z(c.ref,null,s),f.push(s.ref,s.__c||g,s)),k==null&&g!=null&&(k=g),(m=!!(4&s.__u))||c.__k===s.__k?p=be(s,p,t,m):typeof s.type=="function"&&b!==void 0?p=b:g&&(p=g.nextSibling),s.__u&=-7);return o.__e=k,p}function qe(t,e,o,n,i){var r,l,u,p,a,f=o.length,_=f,c=0;for(t.__k=new Array(i),r=0;r<i;r++)(l=e[r])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=t.__k[r]=R(null,l,null,null,null):j(l)?l=t.__k[r]=R(E,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=t.__k[r]=R(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):t.__k[r]=l,p=r+c,l.__=t,l.__b=t.__b+1,u=null,(a=l.__i=Je(l,o,p,_))!=-1&&(_--,(u=o[a])&&(u.__u|=2)),u==null||u.__v==null?(a==-1&&(i>f?c--:i<f&&c++),typeof l.type!="function"&&(l.__u|=4)):a!=p&&(a==p-1?c--:a==p+1?c++:(a>p?c--:c++,l.__u|=4))):t.__k[r]=null;if(_)for(r=0;r<f;r++)(u=o[r])!=null&&(2&u.__u)==0&&(u.__e==n&&(n=F(u)),ke(u,u));return n}function be(t,e,o,n){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=be(i[r],e,o,n));return e}t.__e!=e&&(n&&(e&&t.type&&!e.parentNode&&(e=F(t)),o.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Je(t,e,o,n){var i,r,l,u=t.key,p=t.type,a=e[o],f=a!=null&&(2&a.__u)==0;if(a===null&&u==null||f&&u==a.key&&p==a.type)return o;if(n>(f?1:0)){for(i=o-1,r=o+1;i>=0||r<e.length;)if((a=e[l=i>=0?i--:r++])!=null&&(2&a.__u)==0&&u==a.key&&p==a.type)return l}return-1}function se(t,e,o){e[0]=="-"?t.setProperty(e,o==null?"":o):t[e]=o==null?"":typeof o!="number"||Oe.test(e)?o:o+"px"}function M(t,e,o,n,i){var r,l;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)o&&e in o||se(t.style,e,"");if(o)for(e in o)n&&o[e]==n[e]||se(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(me,"$1")),l=e.toLowerCase(),e=l in t||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=o,o?n?o.u=n.u:(o.u=K,t.addEventListener(e,r?Y:V,r)):t.removeEventListener(e,r?Y:V,r);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o==null?"":o;break e}catch(u){}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function ce(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=K++;else if(e.t<o.u)return;return o(h.event?h.event(e):e)}}}function X(t,e,o,n,i,r,l,u,p,a){var f,_,c,s,g,k,b,m,d,C,S,P,H,I,D,L,A,w=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(p=!!(32&o.__u),r=[u=e.__e=o.__e]),(f=h.__b)&&f(e);e:if(typeof w=="function")try{if(m=e.props,d="prototype"in w&&w.prototype.render,C=(f=w.contextType)&&n[f.__c],S=f?C?C.props.value:f.__:n,o.__c?b=(_=e.__c=o.__c).__=_.__E:(d?e.__c=_=new w(m,S):(e.__c=_=new W(m,S),_.constructor=w,_.render=Ye),C&&C.sub(_),_.state||(_.state={}),_.__n=n,c=_.__d=!0,_.__h=[],_._sb=[]),d&&_.__s==null&&(_.__s=_.state),d&&w.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=T({},_.__s)),T(_.__s,w.getDerivedStateFromProps(m,_.__s))),s=_.props,g=_.state,_.__v=e,c)d&&w.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),d&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(d&&w.getDerivedStateFromProps==null&&m!==s&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(m,S),e.__v==o.__v||!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(m,_.__s,S)===!1){for(e.__v!=o.__v&&(_.props=m,_.state=_.__s,_.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(U){U&&(U.__=e)}),P=0;P<_._sb.length;P++)_.__h.push(_._sb[P]);_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(m,_.__s,S),d&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(s,g,k)})}if(_.context=S,_.props=m,_.__P=t,_.__e=!1,H=h.__r,I=0,d){for(_.state=_.__s,_.__d=!1,H&&H(e),f=_.render(_.props,_.state,_.context),D=0;D<_._sb.length;D++)_.__h.push(_._sb[D]);_._sb=[]}else do _.__d=!1,H&&H(e),f=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++I<25);_.state=_.__s,_.getChildContext!=null&&(n=T(T({},n),_.getChildContext())),d&&!c&&_.getSnapshotBeforeUpdate!=null&&(k=_.getSnapshotBeforeUpdate(s,g)),L=f,f!=null&&f.type===E&&f.key==null&&(L=xe(f.props.children)),u=ge(t,j(L)?L:[L],e,o,n,i,r,l,u,p,a),_.base=e.__e,e.__u&=-161,_.__h.length&&l.push(_),b&&(_.__E=_.__=null)}catch(U){if(e.__v=null,p||r!=null)if(U.then){for(e.__u|=p?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;r[r.indexOf(u)]=null,e.__e=u}else{for(A=r.length;A--;)Q(r[A]);G(e)}else e.__e=o.__e,e.__k=o.__k,U.then||G(e);h.__e(U,e,o)}else r==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):u=e.__e=Ve(o.__e,e,o,n,i,r,l,p,a);return(f=h.diffed)&&f(e),128&e.__u?void 0:u}function G(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(G)}function ye(t,e,o){for(var n=0;n<o.length;n++)Z(o[n],o[++n],o[++n]);h.__c&&h.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){h.__e(r,i.__v)}})}function xe(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:j(t)?t.map(xe):T({},t)}function Ve(t,e,o,n,i,r,l,u,p){var a,f,_,c,s,g,k,b=o.props||z,m=e.props,d=e.type;if(d=="svg"?i="http://www.w3.org/2000/svg":d=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(a=0;a<r.length;a++)if((s=r[a])&&"setAttribute"in s==!!d&&(d?s.localName==d:s.nodeType==3)){t=s,r[a]=null;break}}if(t==null){if(d==null)return document.createTextNode(m);t=document.createElementNS(i,d,m.is&&m),u&&(h.__m&&h.__m(e,r),u=!1),r=null}if(d==null)b===m||u&&t.data==m||(t.data=m);else{if(r=r&&B.call(t.childNodes),!u&&r!=null)for(b={},a=0;a<t.attributes.length;a++)b[(s=t.attributes[a]).name]=s.value;for(a in b)if(s=b[a],a!="children"){if(a=="dangerouslySetInnerHTML")_=s;else if(!(a in m)){if(a=="value"&&"defaultValue"in m||a=="checked"&&"defaultChecked"in m)continue;M(t,a,null,s,i)}}for(a in m)s=m[a],a=="children"?c=s:a=="dangerouslySetInnerHTML"?f=s:a=="value"?g=s:a=="checked"?k=s:u&&typeof s!="function"||b[a]===s||M(t,a,s,b[a],i);if(f)u||_&&(f.__html==_.__html||f.__html==t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(_&&(t.innerHTML=""),ge(e.type=="template"?t.content:t,j(c)?c:[c],e,o,n,d=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,l,r?r[0]:o.__k&&F(o,0),u,p),r!=null)for(a=r.length;a--;)Q(r[a]);u||(a="value",d=="progress"&&g==null?t.removeAttribute("value"):g!=null&&(g!==t[a]||d=="progress"&&!g||d=="option"&&g!=b[a])&&M(t,a,g,b[a],i),a="checked",k!=null&&k!=t[a]&&M(t,a,k,b[a],i))}return t}function Z(t,e,o){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(i){h.__e(i,o)}}function ke(t,e,o){var n,i;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||Z(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){h.__e(r,e)}n.base=n.__P=null}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&ke(n[i],e,o||typeof t.type!="function");o||Q(t.__e),t.__c=t.__=t.__e=void 0}function Ye(t,e,o){return this.constructor(t,o)}function we(t,e,o){var n,i,r,l;e==document&&(e=document.documentElement),h.__&&h.__(t,e),i=(n=typeof o=="function")?null:o&&o.__k||e.__k,r=[],l=[],X(e,t=(!n&&o||e).__k=v(E,null,[t]),i||z,z,e.namespaceURI,!n&&o?[o]:i?null:e.firstChild?B.call(e.childNodes):null,r,!n&&o?o:i?i.__e:e.firstChild,n,l),ye(r,t,l)}B=he.slice,h={__e:function(t,e,o,n){for(var i,r,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),l=i.__d),l)return i.__E=i}catch(u){t=u}throw t}},pe=0,Be=function(t){return t!=null&&t.constructor===void 0},W.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=T({},this.state),typeof t=="function"&&(t=t(T({},o),this.props)),t&&T(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),ue(this))},W.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ue(this))},W.prototype.render=E,N=[],fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,de=function(t,e){return t.__v.__b-e.__v.__b},$.__r=0,me=/(PointerCapture)$|Capture$/i,K=0,V=ce(!1),Y=ce(!0),je=0;var q,y,ee,Ce,te=0,Ne=[],x=h,Se=x.__b,Te=x.__r,Ee=x.diffed,He=x.__c,Le=x.unmount,Pe=x.__;function Ae(t,e){x.__h&&x.__h(y,t,te||e),te=0;var o=y.__H||(y.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function J(t){return te=1,Ge(Fe,t)}function Ge(t,e,o){var n=Ae(q++,2);if(n.t=t,!n.__c&&(n.__=[o?o(e):Fe(void 0,e),function(u){var p=n.__N?n.__N[0]:n.__[0],a=n.t(p,u);p!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.__f)){var i=function(u,p,a){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(c){return!!c.__c});if(f.every(function(c){return!c.__N}))return!r||r.call(this,u,p,a);var _=n.__c.props!==u;return f.forEach(function(c){if(c.__N){var s=c.__[0];c.__=c.__N,c.__N=void 0,s!==c.__[0]&&(_=!0)}}),r&&r.call(this,u,p,a)||_};y.__f=!0;var r=y.shouldComponentUpdate,l=y.componentWillUpdate;y.componentWillUpdate=function(u,p,a){if(this.__e){var f=r;r=void 0,i(u,p,a),r=f}l&&l.call(this,u,p,a)},y.shouldComponentUpdate=i}return n.__N||n.__}function Ue(t,e){var o=Ae(q++,3);!x.__s&&Xe(o.__H,e)&&(o.__=t,o.u=e,y.__H.__h.push(o))}function Ke(){for(var t;t=Ne.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(O),t.__H.__h.forEach(oe),t.__H.__h=[]}catch(e){t.__H.__h=[],x.__e(e,t.__v)}}x.__b=function(t){y=null,Se&&Se(t)},x.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Pe&&Pe(t,e)},x.__r=function(t){Te&&Te(t),q=0;var e=(y=t.__c).__H;e&&(ee===y?(e.__h=[],y.__h=[],e.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(e.__h.forEach(O),e.__h.forEach(oe),e.__h=[],q=0)),ee=y},x.diffed=function(t){Ee&&Ee(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ne.push(e)!==1&&Ce===x.requestAnimationFrame||((Ce=x.requestAnimationFrame)||Qe)(Ke)),e.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),ee=y=null},x.__c=function(t,e){e.some(function(o){try{o.__h.forEach(O),o.__h=o.__h.filter(function(n){return!n.__||oe(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],x.__e(n,o.__v)}}),He&&He(t,e)},x.unmount=function(t){Le&&Le(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{O(n)}catch(i){e=i}}),o.__H=void 0,e&&x.__e(e,o.__v))};var De=typeof requestAnimationFrame=="function";function Qe(t){var e,o=function(){clearTimeout(n),De&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(o,35);De&&(e=requestAnimationFrame(o))}function O(t){var e=y,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),y=e}function oe(t){var e=y;t.__c=t.__(),y=e}function Xe(t,e){return!t||t.length!==e.length||e.some(function(o,n){return o!==t[n]})}function Fe(t,e){return typeof e=="function"?e(t):e}function Ie({contentPath:t,aemAuthor:e}){let[o,n]=J({name:"",email:"",termsAccepted:!1}),[i,r]=J(null),[l,u]=J("");Ue(()=>{if(!t)return;let s=window.location.hostname.includes("adobeaemcloud.com")||window.location.hostname.includes("localhost"),g=()=>{r({promoTitle:"Join Our Community",promoSubtitle:"Get exclusive updates",promoDescription:"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:"",title:"Join Our Newsletter",nameLabel:"Your Name",emailLabel:"Your Email",buttonText:"Sign Up",termsLabel:"I agree to the Terms and Conditions"})};if(s&&e){let k=t.replace(/^\/content\/dam/,""),b=`${e}/api/assets${k}.json`;fetch(b,{credentials:"include"}).then(m=>m.json()).then(m=>{var C,S,P,H,I,D,L,A,w;let d=(m==null?void 0:m.elements)||{};r({promoTitle:((C=d.promoTitle)==null?void 0:C.value)||"Join Our Community",promoSubtitle:((S=d.promoSubtitle)==null?void 0:S.value)||"",promoDescription:((P=d.promoDescription)==null?void 0:P.value)||"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:((H=d.promoBackgroundImage)==null?void 0:H.value)||"",title:((I=d.title)==null?void 0:I.value)||"Join Our Newsletter",nameLabel:((D=d.nameLabel)==null?void 0:D.value)||"Your Name",emailLabel:((L=d.emailLabel)==null?void 0:L.value)||"Your Email",buttonText:((A=d.buttonText)==null?void 0:A.value)||"Sign Up",termsLabel:((w=d.termsLabel)==null?void 0:w.value)||"I agree to the Terms and Conditions"})}).catch(g)}else g()},[t,e]);let p=s=>{let{name:g,value:k,type:b,checked:m}=s.target;n(ae(ie({},o),{[g]:b==="checkbox"?m:k}))},a=async s=>{s.preventDefault(),u("Submitting..."),await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),u("\u2705 Submitted")};if(!i)return v("div",null,"Loading...");let f=i.promoBackgroundImage?{backgroundImage:`url(${i.promoBackgroundImage})`}:{},c=`urn:aemconnection:${t.startsWith("/content/dam")?t:`/content/dam${t.startsWith("/")?"":"/"}${t}`}/jcr:content/data/master`;return v("div",{class:"signup-container"},v("div",{class:"promo-column",style:f},v("div",{class:"promo-overlay"},v("h2",{class:"promo-title","data-aue-resource":c,"data-aue-prop":"promoTitle","data-aue-type":"text"},i.promoTitle),i.promoSubtitle&&v("h3",{class:"promo-subtitle","data-aue-resource":c,"data-aue-prop":"promoSubtitle","data-aue-type":"text"},i.promoSubtitle),v("p",{class:"promo-description","data-aue-resource":c,"data-aue-prop":"promoDescription","data-aue-type":"richtext"},i.promoDescription))),v("div",{class:"form-column"},v("form",{class:"signup",onSubmit:a},v("div",{class:"title","data-aue-resource":c,"data-aue-prop":"title","data-aue-type":"text"},i.title),v("label",{"data-aue-resource":c,"data-aue-prop":"nameLabel","data-aue-type":"text"},i.nameLabel),v("input",{type:"text",name:"name",placeholder:i.nameLabel,value:o.name,onInput:p,required:!0}),v("label",{"data-aue-resource":c,"data-aue-prop":"emailLabel","data-aue-type":"text"},i.emailLabel),v("input",{type:"email",name:"email",placeholder:i.emailLabel,value:o.email,onInput:p,required:!0}),v("div",{class:"terms-checkbox"},v("input",{type:"checkbox",id:"termsAccepted",name:"termsAccepted",checked:o.termsAccepted,onInput:p,required:!0}),v("label",{for:"termsAccepted","data-aue-resource":c,"data-aue-prop":"termsLabel","data-aue-type":"text"},i.termsLabel)),v("button",{type:"submit","data-aue-resource":c,"data-aue-prop":"buttonText","data-aue-type":"text"},i.buttonText),l&&v("div",{class:"status"},l))))}var ne=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("div"),o=this.getAttribute("content-path"),n=this.getAttribute("aem-author");this.shadowRoot.appendChild(this.styles()),this.shadowRoot.appendChild(e),we(v(Ie,{contentPath:o,aemAuthor:n}),e)}styles(){let e=document.createElement("style");return e.textContent=`
      * { box-sizing: border-box; }
      
      .signup-container {
        display: flex;
        max-width: 1200px;
        min-height: 500px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Arial, sans-serif;
      }
      
      /* Left Column - Promotional Content */
      .promo-column {
        flex: 1;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        background-size: cover;
        background-position: center;
        position: relative;
        padding: 48px;
        color: #fff;
        display: flex;
        align-items: center;
      }
      
      .promo-overlay {
        position: relative;
        z-index: 1;
      }
      
      .promo-column::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.3);
        z-index: 0;
      }
      
      .promo-title {
        font-size: 36px;
        font-weight: 700;
        margin: 0 0 16px 0;
        line-height: 1.2;
      }
      
      .promo-subtitle {
        font-size: 20px;
        font-weight: 500;
        margin: 0 0 24px 0;
        opacity: 0.95;
      }
      
      .promo-description {
        font-size: 16px;
        line-height: 1.6;
        margin: 0;
        opacity: 0.9;
      }
      
      /* Right Column - Form */
      .form-column {
        flex: 1;
        background: #fff;
        padding: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .signup {
        width: 100%;
        max-width: 400px;
        display: flex;
        flex-direction: column;
        gap: 16px;
      }
      
      .title {
        font-size: 28px;
        font-weight: 700;
        text-align: center;
        color: #1a202c;
        margin-bottom: 8px;
      }
      
      label {
        font-size: 14px;
        font-weight: 600;
        color: #4a5568;
        margin-bottom: -8px;
      }
      
      input {
        padding: 12px 16px;
        border-radius: 8px;
        border: 2px solid #e2e8f0;
        font-size: 16px;
        transition: border-color 0.2s;
      }
      
      input:focus {
        outline: none;
        border-color: #667eea;
      }
      
      button {
        padding: 14px 24px;
        border: none;
        border-radius: 8px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: #fff;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: transform 0.2s, box-shadow 0.2s;
        margin-top: 8px;
      }
      
      button:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
      }
      
      button:active {
        transform: translateY(0);
      }
      
      .status {
        font-size: 14px;
        text-align: center;
        padding: 8px;
        border-radius: 6px;
        background: #f0fdf4;
        color: #166534;
      }
      
      /* Responsive Design */
      @media (max-width: 768px) {
        .signup-container {
          flex-direction: column;
        }
        
        .promo-column {
          min-height: 300px;
          padding: 32px 24px;
        }
        
        .promo-title {
          font-size: 28px;
        }
        
        .promo-subtitle {
          font-size: 18px;
        }
        
        .form-column {
          padding: 32px 24px;
        }
        
        .title {
          font-size: 24px;
        }
      }
    `,e}};customElements.define("signup-widget",ne);})();

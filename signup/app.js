(()=>{var Ie=Object.defineProperty,ze=Object.defineProperties;var Me=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Re=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable;var re=(t,e,o)=>e in t?Ie(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ie=(t,e)=>{for(var o in e||(e={}))Re.call(e,o)&&re(t,o,e[o]);if(_e)for(var o of _e(e))$e.call(e,o)&&re(t,o,e[o]);return t},ae=(t,e)=>ze(t,Me(e));var R,h,pe,je,L,le,fe,de,me,G,J,V,Be,A={},he=[],Oe=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,$=Array.isArray;function T(t,e){for(var o in e)t[o]=e[o];return t}function K(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,o){var n,i,r,l={};for(r in e)r=="key"?n=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?R.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return I(t,l,n,i,null)}function I(t,e,o,n,i){var r={type:t,props:e,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i==null?++pe:i,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(r),r}function E(t){return t.children}function z(t,e){this.props=t,this.context=e}function D(t,e){if(e==null)return t.__?D(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?D(t):null}function ge(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return ge(t)}}function ue(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!M.__r++||le!=h.debounceRendering)&&((le=h.debounceRendering)||fe)(M)}function M(){for(var t,e,o,n,i,r,l,u=1;L.length;)L.length>u&&L.sort(de),t=L.shift(),u=L.length,t.__d&&(o=void 0,n=void 0,i=(n=(e=t).__v).__e,r=[],l=[],e.__P&&((o=T({},n)).__v=n.__v+1,h.vnode&&h.vnode(o),Q(e.__P,o,n,e.__n,e.__P.namespaceURI,32&n.__u?[i]:null,r,i==null?D(n):i,!!(32&n.__u),l),o.__v=n.__v,o.__.__k[o.__i]=o,ye(r,o,l),n.__e=n.__=null,o.__e!=i&&ge(o)));M.__r=0}function ve(t,e,o,n,i,r,l,u,d,a,m){var _,p,s,v,k,b,f,c=n&&n.__k||he,w=e.length;for(d=qe(o,e,c,d,w),_=0;_<w;_++)(s=o.__k[_])!=null&&(p=s.__i==-1?A:c[s.__i]||A,s.__i=_,b=Q(t,s,p,i,r,l,u,d,a,m),v=s.__e,s.ref&&p.ref!=s.ref&&(p.ref&&X(p.ref,null,s),m.push(s.ref,s.__c||v,s)),k==null&&v!=null&&(k=v),(f=!!(4&s.__u))||p.__k===s.__k?d=be(s,d,t,f):typeof s.type=="function"&&b!==void 0?d=b:v&&(d=v.nextSibling),s.__u&=-7);return o.__e=k,d}function qe(t,e,o,n,i){var r,l,u,d,a,m=o.length,_=m,p=0;for(t.__k=new Array(i),r=0;r<i;r++)(l=e[r])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=t.__k[r]=I(null,l,null,null,null):$(l)?l=t.__k[r]=I(E,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=t.__k[r]=I(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):t.__k[r]=l,d=r+p,l.__=t,l.__b=t.__b+1,u=null,(a=l.__i=Je(l,o,d,_))!=-1&&(_--,(u=o[a])&&(u.__u|=2)),u==null||u.__v==null?(a==-1&&(i>m?p--:i<m&&p++),typeof l.type!="function"&&(l.__u|=4)):a!=d&&(a==d-1?p--:a==d+1?p++:(a>d?p--:p++,l.__u|=4))):t.__k[r]=null;if(_)for(r=0;r<m;r++)(u=o[r])!=null&&(2&u.__u)==0&&(u.__e==n&&(n=D(u)),ke(u,u));return n}function be(t,e,o,n){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=be(i[r],e,o,n));return e}t.__e!=e&&(n&&(e&&t.type&&!e.parentNode&&(e=D(t)),o.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Je(t,e,o,n){var i,r,l,u=t.key,d=t.type,a=e[o],m=a!=null&&(2&a.__u)==0;if(a===null&&u==null||m&&u==a.key&&d==a.type)return o;if(n>(m?1:0)){for(i=o-1,r=o+1;i>=0||r<e.length;)if((a=e[l=i>=0?i--:r++])!=null&&(2&a.__u)==0&&u==a.key&&d==a.type)return l}return-1}function se(t,e,o){e[0]=="-"?t.setProperty(e,o==null?"":o):t[e]=o==null?"":typeof o!="number"||Oe.test(e)?o:o+"px"}function W(t,e,o,n,i){var r,l;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)o&&e in o||se(t.style,e,"");if(o)for(e in o)n&&o[e]==n[e]||se(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(me,"$1")),l=e.toLowerCase(),e=l in t||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=o,o?n?o.u=n.u:(o.u=G,t.addEventListener(e,r?V:J,r)):t.removeEventListener(e,r?V:J,r);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o==null?"":o;break e}catch(u){}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function ce(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=G++;else if(e.t<o.u)return;return o(h.event?h.event(e):e)}}}function Q(t,e,o,n,i,r,l,u,d,a){var m,_,p,s,v,k,b,f,c,w,S,H,F,ne,U,N,q,C=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(d=!!(32&o.__u),r=[u=e.__e=o.__e]),(m=h.__b)&&m(e);e:if(typeof C=="function")try{if(f=e.props,c="prototype"in C&&C.prototype.render,w=(m=C.contextType)&&n[m.__c],S=m?w?w.props.value:m.__:n,o.__c?b=(_=e.__c=o.__c).__=_.__E:(c?e.__c=_=new C(f,S):(e.__c=_=new z(f,S),_.constructor=C,_.render=Ye),w&&w.sub(_),_.state||(_.state={}),_.__n=n,p=_.__d=!0,_.__h=[],_._sb=[]),c&&_.__s==null&&(_.__s=_.state),c&&C.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=T({},_.__s)),T(_.__s,C.getDerivedStateFromProps(f,_.__s))),s=_.props,v=_.state,_.__v=e,p)c&&C.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),c&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(c&&C.getDerivedStateFromProps==null&&f!==s&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(f,S),e.__v==o.__v||!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(f,_.__s,S)===!1){for(e.__v!=o.__v&&(_.props=f,_.state=_.__s,_.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(P){P&&(P.__=e)}),H=0;H<_._sb.length;H++)_.__h.push(_._sb[H]);_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(f,_.__s,S),c&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(s,v,k)})}if(_.context=S,_.props=f,_.__P=t,_.__e=!1,F=h.__r,ne=0,c){for(_.state=_.__s,_.__d=!1,F&&F(e),m=_.render(_.props,_.state,_.context),U=0;U<_._sb.length;U++)_.__h.push(_._sb[U]);_._sb=[]}else do _.__d=!1,F&&F(e),m=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++ne<25);_.state=_.__s,_.getChildContext!=null&&(n=T(T({},n),_.getChildContext())),c&&!p&&_.getSnapshotBeforeUpdate!=null&&(k=_.getSnapshotBeforeUpdate(s,v)),N=m,m!=null&&m.type===E&&m.key==null&&(N=xe(m.props.children)),u=ve(t,$(N)?N:[N],e,o,n,i,r,l,u,d,a),_.base=e.__e,e.__u&=-161,_.__h.length&&l.push(_),b&&(_.__E=_.__=null)}catch(P){if(e.__v=null,d||r!=null)if(P.then){for(e.__u|=d?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;r[r.indexOf(u)]=null,e.__e=u}else{for(q=r.length;q--;)K(r[q]);Y(e)}else e.__e=o.__e,e.__k=o.__k,P.then||Y(e);h.__e(P,e,o)}else r==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):u=e.__e=Ve(o.__e,e,o,n,i,r,l,d,a);return(m=h.diffed)&&m(e),128&e.__u?void 0:u}function Y(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(Y)}function ye(t,e,o){for(var n=0;n<o.length;n++)X(o[n],o[++n],o[++n]);h.__c&&h.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){h.__e(r,i.__v)}})}function xe(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:$(t)?t.map(xe):T({},t)}function Ve(t,e,o,n,i,r,l,u,d){var a,m,_,p,s,v,k,b=o.props||A,f=e.props,c=e.type;if(c=="svg"?i="http://www.w3.org/2000/svg":c=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(a=0;a<r.length;a++)if((s=r[a])&&"setAttribute"in s==!!c&&(c?s.localName==c:s.nodeType==3)){t=s,r[a]=null;break}}if(t==null){if(c==null)return document.createTextNode(f);t=document.createElementNS(i,c,f.is&&f),u&&(h.__m&&h.__m(e,r),u=!1),r=null}if(c==null)b===f||u&&t.data==f||(t.data=f);else{if(r=r&&R.call(t.childNodes),!u&&r!=null)for(b={},a=0;a<t.attributes.length;a++)b[(s=t.attributes[a]).name]=s.value;for(a in b)if(s=b[a],a!="children"){if(a=="dangerouslySetInnerHTML")_=s;else if(!(a in f)){if(a=="value"&&"defaultValue"in f||a=="checked"&&"defaultChecked"in f)continue;W(t,a,null,s,i)}}for(a in f)s=f[a],a=="children"?p=s:a=="dangerouslySetInnerHTML"?m=s:a=="value"?v=s:a=="checked"?k=s:u&&typeof s!="function"||b[a]===s||W(t,a,s,b[a],i);if(m)u||_&&(m.__html==_.__html||m.__html==t.innerHTML)||(t.innerHTML=m.__html),e.__k=[];else if(_&&(t.innerHTML=""),ve(e.type=="template"?t.content:t,$(p)?p:[p],e,o,n,c=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,l,r?r[0]:o.__k&&D(o,0),u,d),r!=null)for(a=r.length;a--;)K(r[a]);u||(a="value",c=="progress"&&v==null?t.removeAttribute("value"):v!=null&&(v!==t[a]||c=="progress"&&!v||c=="option"&&v!=b[a])&&W(t,a,v,b[a],i),a="checked",k!=null&&k!=t[a]&&W(t,a,k,b[a],i))}return t}function X(t,e,o){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(i){h.__e(i,o)}}function ke(t,e,o){var n,i;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||X(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){h.__e(r,e)}n.base=n.__P=null}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&ke(n[i],e,o||typeof t.type!="function");o||K(t.__e),t.__c=t.__=t.__e=void 0}function Ye(t,e,o){return this.constructor(t,o)}function we(t,e,o){var n,i,r,l;e==document&&(e=document.documentElement),h.__&&h.__(t,e),i=(n=typeof o=="function")?null:o&&o.__k||e.__k,r=[],l=[],Q(e,t=(!n&&o||e).__k=g(E,null,[t]),i||A,A,e.namespaceURI,!n&&o?[o]:i?null:e.firstChild?R.call(e.childNodes):null,r,!n&&o?o:i?i.__e:e.firstChild,n,l),ye(r,t,l)}R=he.slice,h={__e:function(t,e,o,n){for(var i,r,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),l=i.__d),l)return i.__E=i}catch(u){t=u}throw t}},pe=0,je=function(t){return t!=null&&t.constructor===void 0},z.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=T({},this.state),typeof t=="function"&&(t=t(T({},o),this.props)),t&&T(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),ue(this))},z.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ue(this))},z.prototype.render=E,L=[],fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,de=function(t,e){return t.__v.__b-e.__v.__b},M.__r=0,me=/(PointerCapture)$|Capture$/i,G=0,J=ce(!1),V=ce(!0),Be=0;var B,y,Z,Se,ee=0,Fe=[],x=h,Ce=x.__b,Te=x.__r,Ee=x.diffed,He=x.__c,Le=x.unmount,Pe=x.__;function Ne(t,e){x.__h&&x.__h(y,t,ee||e),ee=0;var o=y.__H||(y.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function O(t){return ee=1,Ge(Ue,t)}function Ge(t,e,o){var n=Ne(B++,2);if(n.t=t,!n.__c&&(n.__=[o?o(e):Ue(void 0,e),function(u){var d=n.__N?n.__N[0]:n.__[0],a=n.t(d,u);d!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=y,!y.__f)){var i=function(u,d,a){if(!n.__c.__H)return!0;var m=n.__c.__H.__.filter(function(p){return!!p.__c});if(m.every(function(p){return!p.__N}))return!r||r.call(this,u,d,a);var _=n.__c.props!==u;return m.forEach(function(p){if(p.__N){var s=p.__[0];p.__=p.__N,p.__N=void 0,s!==p.__[0]&&(_=!0)}}),r&&r.call(this,u,d,a)||_};y.__f=!0;var r=y.shouldComponentUpdate,l=y.componentWillUpdate;y.componentWillUpdate=function(u,d,a){if(this.__e){var m=r;r=void 0,i(u,d,a),r=m}l&&l.call(this,u,d,a)},y.shouldComponentUpdate=i}return n.__N||n.__}function Ae(t,e){var o=Ne(B++,3);!x.__s&&Xe(o.__H,e)&&(o.__=t,o.u=e,y.__H.__h.push(o))}function Ke(){for(var t;t=Fe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(j),t.__H.__h.forEach(te),t.__H.__h=[]}catch(e){t.__H.__h=[],x.__e(e,t.__v)}}x.__b=function(t){y=null,Ce&&Ce(t)},x.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Pe&&Pe(t,e)},x.__r=function(t){Te&&Te(t),B=0;var e=(y=t.__c).__H;e&&(Z===y?(e.__h=[],y.__h=[],e.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(e.__h.forEach(j),e.__h.forEach(te),e.__h=[],B=0)),Z=y},x.diffed=function(t){Ee&&Ee(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Fe.push(e)!==1&&Se===x.requestAnimationFrame||((Se=x.requestAnimationFrame)||Qe)(Ke)),e.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),Z=y=null},x.__c=function(t,e){e.some(function(o){try{o.__h.forEach(j),o.__h=o.__h.filter(function(n){return!n.__||te(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],x.__e(n,o.__v)}}),He&&He(t,e)},x.unmount=function(t){Le&&Le(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{j(n)}catch(i){e=i}}),o.__H=void 0,e&&x.__e(e,o.__v))};var De=typeof requestAnimationFrame=="function";function Qe(t){var e,o=function(){clearTimeout(n),De&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(o,35);De&&(e=requestAnimationFrame(o))}function j(t){var e=y,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),y=e}function te(t){var e=y;t.__c=t.__(),y=e}function Xe(t,e){return!t||t.length!==e.length||e.some(function(o,n){return o!==t[n]})}function Ue(t,e){return typeof e=="function"?e(t):e}function We({contentPath:t,aemAuthor:e}){let[o,n]=O({name:"",email:"",termsAccepted:!1}),[i,r]=O(null),[l,u]=O("");Ae(()=>{if(!t)return;let s=window.location.hostname.includes("adobeaemcloud.com")||window.location.hostname.includes("localhost"),v=()=>{r({promoTitle:"Join Our Community",promoSubtitle:"Get exclusive updates",promoDescription:"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:"",title:"Join Our Newsletter",nameLabel:"Your Name",emailLabel:"Your Email",buttonText:"Sign Up",termsLabel:"I agree to the Terms and Conditions"})};if(s&&e){let k=t.replace(/\.html$/,""),b=`${e}${k}.json`;console.log("[SignupWidget] Fetching CF from:",b),console.log("[SignupWidget] contentPath:",t),console.log("[SignupWidget] aemAuthor:",e),fetch(b,{credentials:"include"}).then(f=>{if(console.log("[SignupWidget] Response status:",f.status),!f.ok)throw new Error(`HTTP ${f.status}`);return f.json()}).then(f=>{var S,H;console.log("[SignupWidget] CF data received:",f);let c=((H=(S=f==null?void 0:f["jcr:content"])==null?void 0:S.data)==null?void 0:H.master)||f||{};console.log("[SignupWidget] Master data:",c);let w={promoTitle:c.promotitle||c.promoTitle||"Join Our Community",promoSubtitle:c.promosubtitle||c.promoSubtitle||"Get exclusive updates",promoDescription:c.promodescription||c.promoDescription||"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:c.promobackgroundimage||c.promoBackgroundImage||"",title:c.title||"Join Our Newsletter",nameLabel:c.namelabel||c.nameLabel||"Your Name",emailLabel:c.emaillabel||c.emailLabel||"Your Email",buttonText:c.buttontext||c.buttonText||"Sign Up",termsLabel:c.termslabel||c.termsLabel||"I agree to the Terms and Conditions"};console.log("[SignupWidget] Setting content:",w),r(w)}).catch(f=>{console.error("[SignupWidget] CF fetch error:",f),v()})}else v()},[t,e]);let d=s=>{let{name:v,value:k,type:b,checked:f}=s.target;n(ae(ie({},o),{[v]:b==="checkbox"?f:k}))},a=async s=>{s.preventDefault(),u("Submitting..."),await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),u("\u2705 Submitted")};if(!i)return g("div",null,"Loading...");let m=i.promoBackgroundImage?{backgroundImage:`url(${i.promoBackgroundImage})`}:{},p=`urn:aemconnection:${t.startsWith("/content/dam")?t:`/content/dam${t.startsWith("/")?"":"/"}${t}`}/jcr:content/data/master`;return g("div",{class:"signup-container"},g("div",{class:"promo-column",style:m},g("div",{class:"promo-overlay"},g("h2",{class:"promo-title","data-aue-resource":p,"data-aue-prop":"promoTitle","data-aue-type":"text"},i.promoTitle),i.promoSubtitle&&g("h3",{class:"promo-subtitle","data-aue-resource":p,"data-aue-prop":"promoSubtitle","data-aue-type":"text"},i.promoSubtitle),g("p",{class:"promo-description","data-aue-resource":p,"data-aue-prop":"promoDescription","data-aue-type":"richtext"},i.promoDescription))),g("div",{class:"form-column"},g("form",{class:"signup",onSubmit:a},g("div",{class:"title","data-aue-resource":p,"data-aue-prop":"title","data-aue-type":"text"},i.title),g("label",{"data-aue-resource":p,"data-aue-prop":"nameLabel","data-aue-type":"text"},i.nameLabel),g("input",{type:"text",name:"name",placeholder:i.nameLabel,value:o.name,onInput:d,required:!0}),g("label",{"data-aue-resource":p,"data-aue-prop":"emailLabel","data-aue-type":"text"},i.emailLabel),g("input",{type:"email",name:"email",placeholder:i.emailLabel,value:o.email,onInput:d,required:!0}),g("div",{class:"terms-checkbox"},g("input",{type:"checkbox",id:"termsAccepted",name:"termsAccepted",checked:o.termsAccepted,onInput:d,required:!0}),g("label",{for:"termsAccepted","data-aue-resource":p,"data-aue-prop":"termsLabel","data-aue-type":"text"},i.termsLabel)),g("button",{type:"submit","data-aue-resource":p,"data-aue-prop":"buttonText","data-aue-type":"text"},i.buttonText),l&&g("div",{class:"status"},l))))}var oe=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("div"),o=this.getAttribute("content-path"),n=this.getAttribute("aem-author");this.shadowRoot.appendChild(this.styles()),this.shadowRoot.appendChild(e),we(g(We,{contentPath:o,aemAuthor:n}),e)}styles(){let e=document.createElement("style");return e.textContent=`
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
    `,e}};customElements.define("signup-widget",oe);})();

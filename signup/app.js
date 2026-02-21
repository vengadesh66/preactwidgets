(()=>{var Ge=Object.defineProperty,Ke=Object.defineProperties;var Qe=Object.getOwnPropertyDescriptors;var he=Object.getOwnPropertySymbols;var Xe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable;var ve=(t,e,o)=>e in t?Ge(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ge=(t,e)=>{for(var o in e||(e={}))Xe.call(e,o)&&ve(t,o,e[o]);if(he)for(var o of he(e))Ze.call(e,o)&&ve(t,o,e[o]);return t},be=(t,e)=>Ke(t,Qe(e));var j,h,Se,et,F,ye,Ce,Te,Ee,K,V,Y,tt,I={},He=[],ot=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,B=Array.isArray;function H(t,e){for(var o in e)t[o]=e[o];return t}function Q(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function v(t,e,o){var n,i,r,l={};for(r in e)r=="key"?n=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?j.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return M(t,l,n,i,null)}function M(t,e,o,n,i){var r={type:t,props:e,key:o,ref:n,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i==null?++Se:i,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(r),r}function L(t){return t.children}function R(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?U(t):null}function Le(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return Le(t)}}function xe(t){(!t.__d&&(t.__d=!0)&&F.push(t)&&!$.__r++||ye!=h.debounceRendering)&&((ye=h.debounceRendering)||Ce)($)}function $(){for(var t,e,o,n,i,r,l,u=1;F.length;)F.length>u&&F.sort(Te),t=F.shift(),u=F.length,t.__d&&(o=void 0,n=void 0,i=(n=(e=t).__v).__e,r=[],l=[],e.__P&&((o=H({},n)).__v=n.__v+1,h.vnode&&h.vnode(o),X(e.__P,o,n,e.__n,e.__P.namespaceURI,32&n.__u?[i]:null,r,i==null?U(n):i,!!(32&n.__u),l),o.__v=n.__v,o.__.__k[o.__i]=o,Ae(r,o,l),n.__e=n.__=null,o.__e!=i&&Le(o)));$.__r=0}function De(t,e,o,n,i,r,l,u,p,a,f){var _,c,s,g,S,y,d,m=n&&n.__k||He,T=e.length;for(p=nt(o,e,m,p,T),_=0;_<T;_++)(s=o.__k[_])!=null&&(c=s.__i==-1?I:m[s.__i]||I,s.__i=_,y=X(t,s,c,i,r,l,u,p,a,f),g=s.__e,s.ref&&c.ref!=s.ref&&(c.ref&&Z(c.ref,null,s),f.push(s.ref,s.__c||g,s)),S==null&&g!=null&&(S=g),(d=!!(4&s.__u))||c.__k===s.__k?p=Pe(s,p,t,d):typeof s.type=="function"&&y!==void 0?p=y:g&&(p=g.nextSibling),s.__u&=-7);return o.__e=S,p}function nt(t,e,o,n,i){var r,l,u,p,a,f=o.length,_=f,c=0;for(t.__k=new Array(i),r=0;r<i;r++)(l=e[r])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=t.__k[r]=M(null,l,null,null,null):B(l)?l=t.__k[r]=M(L,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=t.__k[r]=M(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):t.__k[r]=l,p=r+c,l.__=t,l.__b=t.__b+1,u=null,(a=l.__i=_t(l,o,p,_))!=-1&&(_--,(u=o[a])&&(u.__u|=2)),u==null||u.__v==null?(a==-1&&(i>f?c--:i<f&&c++),typeof l.type!="function"&&(l.__u|=4)):a!=p&&(a==p-1?c--:a==p+1?c++:(a>p?c--:c++,l.__u|=4))):t.__k[r]=null;if(_)for(r=0;r<f;r++)(u=o[r])!=null&&(2&u.__u)==0&&(u.__e==n&&(n=U(u)),Ne(u,u));return n}function Pe(t,e,o,n){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=Pe(i[r],e,o,n));return e}t.__e!=e&&(n&&(e&&t.type&&!e.parentNode&&(e=U(t)),o.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function _t(t,e,o,n){var i,r,l,u=t.key,p=t.type,a=e[o],f=a!=null&&(2&a.__u)==0;if(a===null&&u==null||f&&u==a.key&&p==a.type)return o;if(n>(f?1:0)){for(i=o-1,r=o+1;i>=0||r<e.length;)if((a=e[l=i>=0?i--:r++])!=null&&(2&a.__u)==0&&u==a.key&&p==a.type)return l}return-1}function ke(t,e,o){e[0]=="-"?t.setProperty(e,o==null?"":o):t[e]=o==null?"":typeof o!="number"||ot.test(e)?o:o+"px"}function z(t,e,o,n,i){var r,l;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof n=="string"&&(t.style.cssText=n=""),n)for(e in n)o&&e in o||ke(t.style,e,"");if(o)for(e in o)n&&o[e]==n[e]||ke(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(Ee,"$1")),l=e.toLowerCase(),e=l in t||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=o,o?n?o.u=n.u:(o.u=K,t.addEventListener(e,r?Y:V,r)):t.removeEventListener(e,r?Y:V,r);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o==null?"":o;break e}catch(u){}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function we(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=K++;else if(e.t<o.u)return;return o(h.event?h.event(e):e)}}}function X(t,e,o,n,i,r,l,u,p,a){var f,_,c,s,g,S,y,d,m,T,w,b,D,W,A,P,N,C=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(p=!!(32&o.__u),r=[u=e.__e=o.__e]),(f=h.__b)&&f(e);e:if(typeof C=="function")try{if(d=e.props,m="prototype"in C&&C.prototype.render,T=(f=C.contextType)&&n[f.__c],w=f?T?T.props.value:f.__:n,o.__c?y=(_=e.__c=o.__c).__=_.__E:(m?e.__c=_=new C(d,w):(e.__c=_=new R(d,w),_.constructor=C,_.render=it),T&&T.sub(_),_.state||(_.state={}),_.__n=n,c=_.__d=!0,_.__h=[],_._sb=[]),m&&_.__s==null&&(_.__s=_.state),m&&C.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=H({},_.__s)),H(_.__s,C.getDerivedStateFromProps(d,_.__s))),s=_.props,g=_.state,_.__v=e,c)m&&C.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),m&&_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m&&C.getDerivedStateFromProps==null&&d!==s&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(d,w),e.__v==o.__v||!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(d,_.__s,w)===!1){for(e.__v!=o.__v&&(_.props=d,_.state=_.__s,_.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(E){E&&(E.__=e)}),b=0;b<_._sb.length;b++)_.__h.push(_._sb[b]);_._sb=[],_.__h.length&&l.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(d,_.__s,w),m&&_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(s,g,S)})}if(_.context=w,_.props=d,_.__P=t,_.__e=!1,D=h.__r,W=0,m){for(_.state=_.__s,_.__d=!1,D&&D(e),f=_.render(_.props,_.state,_.context),A=0;A<_._sb.length;A++)_.__h.push(_._sb[A]);_._sb=[]}else do _.__d=!1,D&&D(e),f=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++W<25);_.state=_.__s,_.getChildContext!=null&&(n=H(H({},n),_.getChildContext())),m&&!c&&_.getSnapshotBeforeUpdate!=null&&(S=_.getSnapshotBeforeUpdate(s,g)),P=f,f!=null&&f.type===L&&f.key==null&&(P=Fe(f.props.children)),u=De(t,B(P)?P:[P],e,o,n,i,r,l,u,p,a),_.base=e.__e,e.__u&=-161,_.__h.length&&l.push(_),y&&(_.__E=_.__=null)}catch(E){if(e.__v=null,p||r!=null)if(E.then){for(e.__u|=p?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;r[r.indexOf(u)]=null,e.__e=u}else{for(N=r.length;N--;)Q(r[N]);G(e)}else e.__e=o.__e,e.__k=o.__k,E.then||G(e);h.__e(E,e,o)}else r==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):u=e.__e=rt(o.__e,e,o,n,i,r,l,p,a);return(f=h.diffed)&&f(e),128&e.__u?void 0:u}function G(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(G)}function Ae(t,e,o){for(var n=0;n<o.length;n++)Z(o[n],o[++n],o[++n]);h.__c&&h.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){h.__e(r,i.__v)}})}function Fe(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:B(t)?t.map(Fe):H({},t)}function rt(t,e,o,n,i,r,l,u,p){var a,f,_,c,s,g,S,y=o.props||I,d=e.props,m=e.type;if(m=="svg"?i="http://www.w3.org/2000/svg":m=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(a=0;a<r.length;a++)if((s=r[a])&&"setAttribute"in s==!!m&&(m?s.localName==m:s.nodeType==3)){t=s,r[a]=null;break}}if(t==null){if(m==null)return document.createTextNode(d);t=document.createElementNS(i,m,d.is&&d),u&&(h.__m&&h.__m(e,r),u=!1),r=null}if(m==null)y===d||u&&t.data==d||(t.data=d);else{if(r=r&&j.call(t.childNodes),!u&&r!=null)for(y={},a=0;a<t.attributes.length;a++)y[(s=t.attributes[a]).name]=s.value;for(a in y)if(s=y[a],a!="children"){if(a=="dangerouslySetInnerHTML")_=s;else if(!(a in d)){if(a=="value"&&"defaultValue"in d||a=="checked"&&"defaultChecked"in d)continue;z(t,a,null,s,i)}}for(a in d)s=d[a],a=="children"?c=s:a=="dangerouslySetInnerHTML"?f=s:a=="value"?g=s:a=="checked"?S=s:u&&typeof s!="function"||y[a]===s||z(t,a,s,y[a],i);if(f)u||_&&(f.__html==_.__html||f.__html==t.innerHTML)||(t.innerHTML=f.__html),e.__k=[];else if(_&&(t.innerHTML=""),De(e.type=="template"?t.content:t,B(c)?c:[c],e,o,n,m=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,l,r?r[0]:o.__k&&U(o,0),u,p),r!=null)for(a=r.length;a--;)Q(r[a]);u||(a="value",m=="progress"&&g==null?t.removeAttribute("value"):g!=null&&(g!==t[a]||m=="progress"&&!g||m=="option"&&g!=y[a])&&z(t,a,g,y[a],i),a="checked",S!=null&&S!=t[a]&&z(t,a,S,y[a],i))}return t}function Z(t,e,o){try{if(typeof t=="function"){var n=typeof t.__u=="function";n&&t.__u(),n&&e==null||(t.__u=t(e))}else t.current=e}catch(i){h.__e(i,o)}}function Ne(t,e,o){var n,i;if(h.unmount&&h.unmount(t),(n=t.ref)&&(n.current&&n.current!=t.__e||Z(n,null,e)),(n=t.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(r){h.__e(r,e)}n.base=n.__P=null}if(n=t.__k)for(i=0;i<n.length;i++)n[i]&&Ne(n[i],e,o||typeof t.type!="function");o||Q(t.__e),t.__c=t.__=t.__e=void 0}function it(t,e,o){return this.constructor(t,o)}function Ue(t,e,o){var n,i,r,l;e==document&&(e=document.documentElement),h.__&&h.__(t,e),i=(n=typeof o=="function")?null:o&&o.__k||e.__k,r=[],l=[],X(e,t=(!n&&o||e).__k=v(L,null,[t]),i||I,I,e.namespaceURI,!n&&o?[o]:i?null:e.firstChild?j.call(e.childNodes):null,r,!n&&o?o:i?i.__e:e.firstChild,n,l),Ae(r,t,l)}j=He.slice,h={__e:function(t,e,o,n){for(var i,r,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,n||{}),l=i.__d),l)return i.__E=i}catch(u){t=u}throw t}},Se=0,et=function(t){return t!=null&&t.constructor===void 0},R.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=H({},this.state),typeof t=="function"&&(t=t(H({},o),this.props)),t&&H(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),xe(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),xe(this))},R.prototype.render=L,F=[],Ce=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Te=function(t,e){return t.__v.__b-e.__v.__b},$.__r=0,Ee=/(PointerCapture)$|Capture$/i,K=0,V=we(!1),Y=we(!0),tt=0;var q,x,ee,We,te=0,Oe=[],k=h,Ie=k.__b,ze=k.__r,Me=k.diffed,Re=k.__c,$e=k.unmount,je=k.__;function qe(t,e){k.__h&&k.__h(x,t,te||e),te=0;var o=x.__H||(x.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function J(t){return te=1,at(Ve,t)}function at(t,e,o){var n=qe(q++,2);if(n.t=t,!n.__c&&(n.__=[o?o(e):Ve(void 0,e),function(u){var p=n.__N?n.__N[0]:n.__[0],a=n.t(p,u);p!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=x,!x.__f)){var i=function(u,p,a){if(!n.__c.__H)return!0;var f=n.__c.__H.__.filter(function(c){return!!c.__c});if(f.every(function(c){return!c.__N}))return!r||r.call(this,u,p,a);var _=n.__c.props!==u;return f.forEach(function(c){if(c.__N){var s=c.__[0];c.__=c.__N,c.__N=void 0,s!==c.__[0]&&(_=!0)}}),r&&r.call(this,u,p,a)||_};x.__f=!0;var r=x.shouldComponentUpdate,l=x.componentWillUpdate;x.componentWillUpdate=function(u,p,a){if(this.__e){var f=r;r=void 0,i(u,p,a),r=f}l&&l.call(this,u,p,a)},x.shouldComponentUpdate=i}return n.__N||n.__}function Je(t,e){var o=qe(q++,3);!k.__s&&st(o.__H,e)&&(o.__=t,o.u=e,x.__H.__h.push(o))}function lt(){for(var t;t=Oe.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(O),t.__H.__h.forEach(oe),t.__H.__h=[]}catch(e){t.__H.__h=[],k.__e(e,t.__v)}}k.__b=function(t){x=null,Ie&&Ie(t)},k.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),je&&je(t,e)},k.__r=function(t){ze&&ze(t),q=0;var e=(x=t.__c).__H;e&&(ee===x?(e.__h=[],x.__h=[],e.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(e.__h.forEach(O),e.__h.forEach(oe),e.__h=[],q=0)),ee=x},k.diffed=function(t){Me&&Me(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Oe.push(e)!==1&&We===k.requestAnimationFrame||((We=k.requestAnimationFrame)||ut)(lt)),e.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),ee=x=null},k.__c=function(t,e){e.some(function(o){try{o.__h.forEach(O),o.__h=o.__h.filter(function(n){return!n.__||oe(n)})}catch(n){e.some(function(i){i.__h&&(i.__h=[])}),e=[],k.__e(n,o.__v)}}),Re&&Re(t,e)},k.unmount=function(t){$e&&$e(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(n){try{O(n)}catch(i){e=i}}),o.__H=void 0,e&&k.__e(e,o.__v))};var Be=typeof requestAnimationFrame=="function";function ut(t){var e,o=function(){clearTimeout(n),Be&&cancelAnimationFrame(e),setTimeout(t)},n=setTimeout(o,35);Be&&(e=requestAnimationFrame(o))}function O(t){var e=x,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),x=e}function oe(t){var e=x;t.__c=t.__(),x=e}function st(t,e){return!t||t.length!==e.length||e.some(function(o,n){return o!==t[n]})}function Ve(t,e){return typeof e=="function"?e(t):e}function Ye({contentPath:t,aemAuthor:e}){let[o,n]=J({name:"",email:"",termsAccepted:!1}),[i,r]=J(null),[l,u]=J("");Je(()=>{if(!t)return;let s=window.location.hostname.includes("adobeaemcloud.com")||window.location.hostname.includes("localhost"),g=()=>{r({promoTitle:"Join Our Community",promoSubtitle:"Get exclusive updates",promoDescription:"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:"",title:"Join Our Newsletter",nameLabel:"Your Name",emailLabel:"Your Email",buttonText:"Sign Up",termsLabel:"I agree to the Terms and Conditions"})};if(s&&e){let S=t.replace(/\.html$/,"").replace(/^\/content\/dam/,""),y=`/api/assets${S}.json`,d=`${e}/api/assets${S}.json`,m=window.location.origin.includes("adobeaemcloud.com"),T=m?y:d;console.log("[SignupWidget] Fetching CF from:",T),console.log("[SignupWidget] isOnAuthorDomain:",m),console.log("[SignupWidget] contentPath:",t),console.log("[SignupWidget] aemAuthor:",e),fetch(T,{credentials:"include"}).then(w=>{if(console.log("[SignupWidget] Response status:",w.status),!w.ok)throw new Error(`HTTP ${w.status}`);return w.json()}).then(w=>{var W,A,P,N,C,E,_e,re,ie,ae,le,ue,se,ce,pe,fe,de,me;console.log("[SignupWidget] CF data received:",w);let b=((W=w==null?void 0:w.properties)==null?void 0:W.elements)||{};console.log("[SignupWidget] Elements:",b);let D={promoTitle:((A=b.promotitle)==null?void 0:A.value)||((P=b.promoTitle)==null?void 0:P.value)||"Join Our Community",promoSubtitle:((N=b.promosubtitle)==null?void 0:N.value)||((C=b.promoSubtitle)==null?void 0:C.value)||"Get exclusive updates",promoDescription:((E=b.promodescription)==null?void 0:E.value)||((_e=b.promoDescription)==null?void 0:_e.value)||"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:((re=b.promobackgroundimage)==null?void 0:re.value)||((ie=b.promoBackgroundImage)==null?void 0:ie.value)||"",title:((ae=b.title)==null?void 0:ae.value)||"Join Our Newsletter",nameLabel:((le=b.namelabel)==null?void 0:le.value)||((ue=b.nameLabel)==null?void 0:ue.value)||"Your Name",emailLabel:((se=b.emaillabel)==null?void 0:se.value)||((ce=b.emailLabel)==null?void 0:ce.value)||"Your Email",buttonText:((pe=b.buttontext)==null?void 0:pe.value)||((fe=b.buttonText)==null?void 0:fe.value)||"Sign Up",termsLabel:((de=b.termslabel)==null?void 0:de.value)||((me=b.termsLabel)==null?void 0:me.value)||"I agree to the Terms and Conditions"};console.log("[SignupWidget] Setting content:",D),r(D)}).catch(w=>{console.error("[SignupWidget] CF fetch error:",w),g()})}else g()},[t,e]);let p=s=>{let{name:g,value:S,type:y,checked:d}=s.target;n(be(ge({},o),{[g]:y==="checkbox"?d:S}))},a=async s=>{s.preventDefault(),u("Submitting..."),await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),u("\u2705 Submitted")};if(!i)return v("div",null,"Loading...");let f=i.promoBackgroundImage?{backgroundImage:`url(${i.promoBackgroundImage})`}:{},c=`urn:aemconnection:${t.startsWith("/content/dam")?t:`/content/dam${t.startsWith("/")?"":"/"}${t}`}/jcr:content/data/master`;return v("div",{class:"signup-container"},v("div",{class:"promo-column",style:f},v("div",{class:"promo-overlay"},v("h2",{class:"promo-title","data-aue-resource":c,"data-aue-prop":"promoTitle","data-aue-type":"text"},i.promoTitle),i.promoSubtitle&&v("h3",{class:"promo-subtitle","data-aue-resource":c,"data-aue-prop":"promoSubtitle","data-aue-type":"text"},i.promoSubtitle),v("p",{class:"promo-description","data-aue-resource":c,"data-aue-prop":"promoDescription","data-aue-type":"richtext"},i.promoDescription))),v("div",{class:"form-column"},v("form",{class:"signup",onSubmit:a},v("div",{class:"title","data-aue-resource":c,"data-aue-prop":"title","data-aue-type":"text"},i.title),v("label",{"data-aue-resource":c,"data-aue-prop":"nameLabel","data-aue-type":"text"},i.nameLabel),v("input",{type:"text",name:"name",placeholder:i.nameLabel,value:o.name,onInput:p,required:!0}),v("label",{"data-aue-resource":c,"data-aue-prop":"emailLabel","data-aue-type":"text"},i.emailLabel),v("input",{type:"email",name:"email",placeholder:i.emailLabel,value:o.email,onInput:p,required:!0}),v("div",{class:"terms-checkbox"},v("input",{type:"checkbox",id:"termsAccepted",name:"termsAccepted",checked:o.termsAccepted,onInput:p,required:!0}),v("label",{for:"termsAccepted","data-aue-resource":c,"data-aue-prop":"termsLabel","data-aue-type":"text"},i.termsLabel)),v("button",{type:"submit","data-aue-resource":c,"data-aue-prop":"buttonText","data-aue-type":"text"},i.buttonText),l&&v("div",{class:"status"},l))))}var ne=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("div"),o=this.getAttribute("content-path"),n=this.getAttribute("aem-author");this.shadowRoot.appendChild(this.styles()),this.shadowRoot.appendChild(e),Ue(v(Ye,{contentPath:o,aemAuthor:n}),e)}styles(){let e=document.createElement("style");return e.textContent=`
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

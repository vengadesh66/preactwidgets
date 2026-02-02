(()=>{var Me=Object.defineProperty,Ae=Object.defineProperties;var Re=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var Be=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable;var re=(t,e,o)=>e in t?Me(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,ie=(t,e)=>{for(var o in e||(e={}))Be.call(e,o)&&re(t,o,e[o]);if(_e)for(var o of _e(e))We.call(e,o)&&re(t,o,e[o]);return t},ae=(t,e)=>Ae(t,Re(e));var W,h,pe,je,L,le,fe,de,me,K,V,Y,Oe,z={},he=[],$e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function E(t,e){for(var o in e)t[o]=e[o];return t}function Q(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function g(t,e,o){var _,i,r,l={};for(r in e)r=="key"?_=e[r]:r=="ref"?i=e[r]:l[r]=e[r];if(arguments.length>2&&(l.children=arguments.length>3?W.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(r in t.defaultProps)l[r]===void 0&&(l[r]=t.defaultProps[r]);return A(t,l,_,i,null)}function A(t,e,o,_,i){var r={type:t,props:e,key:o,ref:_,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i==null?++pe:i,__i:-1,__u:0};return i==null&&h.vnode!=null&&h.vnode(r),r}function T(t){return t.children}function R(t,e){this.props=t,this.context=e}function U(t,e){if(e==null)return t.__?U(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?U(t):null}function ve(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return ve(t)}}function ue(t){(!t.__d&&(t.__d=!0)&&L.push(t)&&!B.__r++||le!=h.debounceRendering)&&((le=h.debounceRendering)||fe)(B)}function B(){for(var t,e,o,_,i,r,l,u=1;L.length;)L.length>u&&L.sort(de),t=L.shift(),u=L.length,t.__d&&(o=void 0,_=void 0,i=(_=(e=t).__v).__e,r=[],l=[],e.__P&&((o=E({},_)).__v=_.__v+1,h.vnode&&h.vnode(o),X(e.__P,o,_,e.__n,e.__P.namespaceURI,32&_.__u?[i]:null,r,i==null?U(_):i,!!(32&_.__u),l),o.__v=_.__v,o.__.__k[o.__i]=o,ye(r,o,l),_.__e=_.__=null,o.__e!=i&&ve(o)));B.__r=0}function ge(t,e,o,_,i,r,l,u,p,a,c){var n,f,s,v,y,x,m,d=_&&_.__k||he,w=e.length;for(p=qe(o,e,d,p,w),n=0;n<w;n++)(s=o.__k[n])!=null&&(f=s.__i==-1?z:d[s.__i]||z,s.__i=n,x=X(t,s,f,i,r,l,u,p,a,c),v=s.__e,s.ref&&f.ref!=s.ref&&(f.ref&&Z(f.ref,null,s),c.push(s.ref,s.__c||v,s)),y==null&&v!=null&&(y=v),(m=!!(4&s.__u))||f.__k===s.__k?p=be(s,p,t,m):typeof s.type=="function"&&x!==void 0?p=x:v&&(p=v.nextSibling),s.__u&=-7);return o.__e=y,p}function qe(t,e,o,_,i){var r,l,u,p,a,c=o.length,n=c,f=0;for(t.__k=new Array(i),r=0;r<i;r++)(l=e[r])!=null&&typeof l!="boolean"&&typeof l!="function"?(typeof l=="string"||typeof l=="number"||typeof l=="bigint"||l.constructor==String?l=t.__k[r]=A(null,l,null,null,null):j(l)?l=t.__k[r]=A(T,{children:l},null,null,null):l.constructor===void 0&&l.__b>0?l=t.__k[r]=A(l.type,l.props,l.key,l.ref?l.ref:null,l.__v):t.__k[r]=l,p=r+f,l.__=t,l.__b=t.__b+1,u=null,(a=l.__i=Je(l,o,p,n))!=-1&&(n--,(u=o[a])&&(u.__u|=2)),u==null||u.__v==null?(a==-1&&(i>c?f--:i<c&&f++),typeof l.type!="function"&&(l.__u|=4)):a!=p&&(a==p-1?f--:a==p+1?f++:(a>p?f--:f++,l.__u|=4))):t.__k[r]=null;if(n)for(r=0;r<c;r++)(u=o[r])!=null&&(2&u.__u)==0&&(u.__e==_&&(_=U(u)),ke(u,u));return _}function be(t,e,o,_){var i,r;if(typeof t.type=="function"){for(i=t.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=t,e=be(i[r],e,o,_));return e}t.__e!=e&&(_&&(e&&t.type&&!e.parentNode&&(e=U(t)),o.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Je(t,e,o,_){var i,r,l,u=t.key,p=t.type,a=e[o],c=a!=null&&(2&a.__u)==0;if(a===null&&u==null||c&&u==a.key&&p==a.type)return o;if(_>(c?1:0)){for(i=o-1,r=o+1;i>=0||r<e.length;)if((a=e[l=i>=0?i--:r++])!=null&&(2&a.__u)==0&&u==a.key&&p==a.type)return l}return-1}function se(t,e,o){e[0]=="-"?t.setProperty(e,o==null?"":o):t[e]=o==null?"":typeof o!="number"||$e.test(e)?o:o+"px"}function M(t,e,o,_,i){var r,l;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof _=="string"&&(t.style.cssText=_=""),_)for(e in _)o&&e in o||se(t.style,e,"");if(o)for(e in o)_&&o[e]==_[e]||se(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")r=e!=(e=e.replace(me,"$1")),l=e.toLowerCase(),e=l in t||e=="onFocusOut"||e=="onFocusIn"?l.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+r]=o,o?_?o.u=_.u:(o.u=K,t.addEventListener(e,r?Y:V,r)):t.removeEventListener(e,r?Y:V,r);else{if(i=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o==null?"":o;break e}catch(u){}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function ce(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=K++;else if(e.t<o.u)return;return o(h.event?h.event(e):e)}}}function X(t,e,o,_,i,r,l,u,p,a){var c,n,f,s,v,y,x,m,d,w,S,D,H,F,I,P,J,C=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(p=!!(32&o.__u),r=[u=e.__e=o.__e]),(c=h.__b)&&c(e);e:if(typeof C=="function")try{if(m=e.props,d="prototype"in C&&C.prototype.render,w=(c=C.contextType)&&_[c.__c],S=c?w?w.props.value:c.__:_,o.__c?x=(n=e.__c=o.__c).__=n.__E:(d?e.__c=n=new C(m,S):(e.__c=n=new R(m,S),n.constructor=C,n.render=Ye),w&&w.sub(n),n.state||(n.state={}),n.__n=_,f=n.__d=!0,n.__h=[],n._sb=[]),d&&n.__s==null&&(n.__s=n.state),d&&C.getDerivedStateFromProps!=null&&(n.__s==n.state&&(n.__s=E({},n.__s)),E(n.__s,C.getDerivedStateFromProps(m,n.__s))),s=n.props,v=n.state,n.__v=e,f)d&&C.getDerivedStateFromProps==null&&n.componentWillMount!=null&&n.componentWillMount(),d&&n.componentDidMount!=null&&n.__h.push(n.componentDidMount);else{if(d&&C.getDerivedStateFromProps==null&&m!==s&&n.componentWillReceiveProps!=null&&n.componentWillReceiveProps(m,S),e.__v==o.__v||!n.__e&&n.shouldComponentUpdate!=null&&n.shouldComponentUpdate(m,n.__s,S)===!1){for(e.__v!=o.__v&&(n.props=m,n.state=n.__s,n.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(N){N&&(N.__=e)}),D=0;D<n._sb.length;D++)n.__h.push(n._sb[D]);n._sb=[],n.__h.length&&l.push(n);break e}n.componentWillUpdate!=null&&n.componentWillUpdate(m,n.__s,S),d&&n.componentDidUpdate!=null&&n.__h.push(function(){n.componentDidUpdate(s,v,y)})}if(n.context=S,n.props=m,n.__P=t,n.__e=!1,H=h.__r,F=0,d){for(n.state=n.__s,n.__d=!1,H&&H(e),c=n.render(n.props,n.state,n.context),I=0;I<n._sb.length;I++)n.__h.push(n._sb[I]);n._sb=[]}else do n.__d=!1,H&&H(e),c=n.render(n.props,n.state,n.context),n.state=n.__s;while(n.__d&&++F<25);n.state=n.__s,n.getChildContext!=null&&(_=E(E({},_),n.getChildContext())),d&&!f&&n.getSnapshotBeforeUpdate!=null&&(y=n.getSnapshotBeforeUpdate(s,v)),P=c,c!=null&&c.type===T&&c.key==null&&(P=xe(c.props.children)),u=ge(t,j(P)?P:[P],e,o,_,i,r,l,u,p,a),n.base=e.__e,e.__u&=-161,n.__h.length&&l.push(n),x&&(n.__E=n.__=null)}catch(N){if(e.__v=null,p||r!=null)if(N.then){for(e.__u|=p?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;r[r.indexOf(u)]=null,e.__e=u}else{for(J=r.length;J--;)Q(r[J]);G(e)}else e.__e=o.__e,e.__k=o.__k,N.then||G(e);h.__e(N,e,o)}else r==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):u=e.__e=Ve(o.__e,e,o,_,i,r,l,p,a);return(c=h.diffed)&&c(e),128&e.__u?void 0:u}function G(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(G)}function ye(t,e,o){for(var _=0;_<o.length;_++)Z(o[_],o[++_],o[++_]);h.__c&&h.__c(e,t),t.some(function(i){try{t=i.__h,i.__h=[],t.some(function(r){r.call(i)})}catch(r){h.__e(r,i.__v)}})}function xe(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:j(t)?t.map(xe):E({},t)}function Ve(t,e,o,_,i,r,l,u,p){var a,c,n,f,s,v,y,x=o.props||z,m=e.props,d=e.type;if(d=="svg"?i="http://www.w3.org/2000/svg":d=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),r!=null){for(a=0;a<r.length;a++)if((s=r[a])&&"setAttribute"in s==!!d&&(d?s.localName==d:s.nodeType==3)){t=s,r[a]=null;break}}if(t==null){if(d==null)return document.createTextNode(m);t=document.createElementNS(i,d,m.is&&m),u&&(h.__m&&h.__m(e,r),u=!1),r=null}if(d==null)x===m||u&&t.data==m||(t.data=m);else{if(r=r&&W.call(t.childNodes),!u&&r!=null)for(x={},a=0;a<t.attributes.length;a++)x[(s=t.attributes[a]).name]=s.value;for(a in x)if(s=x[a],a!="children"){if(a=="dangerouslySetInnerHTML")n=s;else if(!(a in m)){if(a=="value"&&"defaultValue"in m||a=="checked"&&"defaultChecked"in m)continue;M(t,a,null,s,i)}}for(a in m)s=m[a],a=="children"?f=s:a=="dangerouslySetInnerHTML"?c=s:a=="value"?v=s:a=="checked"?y=s:u&&typeof s!="function"||x[a]===s||M(t,a,s,x[a],i);if(c)u||n&&(c.__html==n.__html||c.__html==t.innerHTML)||(t.innerHTML=c.__html),e.__k=[];else if(n&&(t.innerHTML=""),ge(e.type=="template"?t.content:t,j(f)?f:[f],e,o,_,d=="foreignObject"?"http://www.w3.org/1999/xhtml":i,r,l,r?r[0]:o.__k&&U(o,0),u,p),r!=null)for(a=r.length;a--;)Q(r[a]);u||(a="value",d=="progress"&&v==null?t.removeAttribute("value"):v!=null&&(v!==t[a]||d=="progress"&&!v||d=="option"&&v!=x[a])&&M(t,a,v,x[a],i),a="checked",y!=null&&y!=t[a]&&M(t,a,y,x[a],i))}return t}function Z(t,e,o){try{if(typeof t=="function"){var _=typeof t.__u=="function";_&&t.__u(),_&&e==null||(t.__u=t(e))}else t.current=e}catch(i){h.__e(i,o)}}function ke(t,e,o){var _,i;if(h.unmount&&h.unmount(t),(_=t.ref)&&(_.current&&_.current!=t.__e||Z(_,null,e)),(_=t.__c)!=null){if(_.componentWillUnmount)try{_.componentWillUnmount()}catch(r){h.__e(r,e)}_.base=_.__P=null}if(_=t.__k)for(i=0;i<_.length;i++)_[i]&&ke(_[i],e,o||typeof t.type!="function");o||Q(t.__e),t.__c=t.__=t.__e=void 0}function Ye(t,e,o){return this.constructor(t,o)}function we(t,e,o){var _,i,r,l;e==document&&(e=document.documentElement),h.__&&h.__(t,e),i=(_=typeof o=="function")?null:o&&o.__k||e.__k,r=[],l=[],X(e,t=(!_&&o||e).__k=g(T,null,[t]),i||z,z,e.namespaceURI,!_&&o?[o]:i?null:e.firstChild?W.call(e.childNodes):null,r,!_&&o?o:i?i.__e:e.firstChild,_,l),ye(r,t,l)}W=he.slice,h={__e:function(t,e,o,_){for(var i,r,l;e=e.__;)if((i=e.__c)&&!i.__)try{if((r=i.constructor)&&r.getDerivedStateFromError!=null&&(i.setState(r.getDerivedStateFromError(t)),l=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(t,_||{}),l=i.__d),l)return i.__E=i}catch(u){t=u}throw t}},pe=0,je=function(t){return t!=null&&t.constructor===void 0},R.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=E({},this.state),typeof t=="function"&&(t=t(E({},o),this.props)),t&&E(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),ue(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),ue(this))},R.prototype.render=T,L=[],fe=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,de=function(t,e){return t.__v.__b-e.__v.__b},B.__r=0,me=/(PointerCapture)$|Capture$/i,K=0,V=ce(!1),Y=ce(!0),Oe=0;var $,b,ee,Se,te=0,Ue=[],k=h,Ce=k.__b,Ee=k.__r,Te=k.diffed,He=k.__c,De=k.unmount,Le=k.__;function Fe(t,e){k.__h&&k.__h(b,t,te||e),te=0;var o=b.__H||(b.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function q(t){return te=1,Ge(ze,t)}function Ge(t,e,o){var _=Fe($++,2);if(_.t=t,!_.__c&&(_.__=[o?o(e):ze(void 0,e),function(u){var p=_.__N?_.__N[0]:_.__[0],a=_.t(p,u);p!==a&&(_.__N=[a,_.__[1]],_.__c.setState({}))}],_.__c=b,!b.__f)){var i=function(u,p,a){if(!_.__c.__H)return!0;var c=_.__c.__H.__.filter(function(f){return!!f.__c});if(c.every(function(f){return!f.__N}))return!r||r.call(this,u,p,a);var n=_.__c.props!==u;return c.forEach(function(f){if(f.__N){var s=f.__[0];f.__=f.__N,f.__N=void 0,s!==f.__[0]&&(n=!0)}}),r&&r.call(this,u,p,a)||n};b.__f=!0;var r=b.shouldComponentUpdate,l=b.componentWillUpdate;b.componentWillUpdate=function(u,p,a){if(this.__e){var c=r;r=void 0,i(u,p,a),r=c}l&&l.call(this,u,p,a)},b.shouldComponentUpdate=i}return _.__N||_.__}function Pe(t,e){var o=Fe($++,3);!k.__s&&Xe(o.__H,e)&&(o.__=t,o.u=e,b.__H.__h.push(o))}function Ke(){for(var t;t=Ue.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(O),t.__H.__h.forEach(oe),t.__H.__h=[]}catch(e){t.__H.__h=[],k.__e(e,t.__v)}}k.__b=function(t){b=null,Ce&&Ce(t)},k.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Le&&Le(t,e)},k.__r=function(t){Ee&&Ee(t),$=0;var e=(b=t.__c).__H;e&&(ee===b?(e.__h=[],b.__h=[],e.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(e.__h.forEach(O),e.__h.forEach(oe),e.__h=[],$=0)),ee=b},k.diffed=function(t){Te&&Te(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(Ue.push(e)!==1&&Se===k.requestAnimationFrame||((Se=k.requestAnimationFrame)||Qe)(Ke)),e.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),ee=b=null},k.__c=function(t,e){e.some(function(o){try{o.__h.forEach(O),o.__h=o.__h.filter(function(_){return!_.__||oe(_)})}catch(_){e.some(function(i){i.__h&&(i.__h=[])}),e=[],k.__e(_,o.__v)}}),He&&He(t,e)},k.unmount=function(t){De&&De(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(_){try{O(_)}catch(i){e=i}}),o.__H=void 0,e&&k.__e(e,o.__v))};var Ne=typeof requestAnimationFrame=="function";function Qe(t){var e,o=function(){clearTimeout(_),Ne&&cancelAnimationFrame(e),setTimeout(t)},_=setTimeout(o,35);Ne&&(e=requestAnimationFrame(o))}function O(t){var e=b,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),b=e}function oe(t){var e=b;t.__c=t.__(),b=e}function Xe(t,e){return!t||t.length!==e.length||e.some(function(o,_){return o!==t[_]})}function ze(t,e){return typeof e=="function"?e(t):e}function Ie({contentPath:t,aemAuthor:e}){let[o,_]=q({name:"",email:""}),[i,r]=q(null),[l,u]=q("");Pe(()=>{if(!t)return;let n=window.location.hostname.includes("adobeaemcloud.com")||window.location.hostname.includes("localhost"),f=()=>{r({promoTitle:"Join Our Community",promoSubtitle:"Get exclusive updates",promoDescription:"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:"",title:"Join Our Newsletter",nameLabel:"Your Name",emailLabel:"Your Email",buttonText:"Sign Up"})};if(n&&e){let s=`${e}/api/assets${t}.json`;fetch(s,{credentials:"include"}).then(v=>v.json()).then(v=>{var x,m,d,w,S,D,H,F;let y=(v==null?void 0:v.elements)||{};r({promoTitle:((x=y.promoTitle)==null?void 0:x.value)||"Join Our Community",promoSubtitle:((m=y.promoSubtitle)==null?void 0:m.value)||"",promoDescription:((d=y.promoDescription)==null?void 0:d.value)||"Sign up today and be the first to know about our latest updates, exclusive offers, and community events.",promoBackgroundImage:((w=y.promoBackgroundImage)==null?void 0:w.value)||"",title:((S=y.title)==null?void 0:S.value)||"Join Our Newsletter",nameLabel:((D=y.nameLabel)==null?void 0:D.value)||"Your Name",emailLabel:((H=y.emailLabel)==null?void 0:H.value)||"Your Email",buttonText:((F=y.buttonText)==null?void 0:F.value)||"Sign Up"})}).catch(f)}else f()},[t,e]);let p=n=>_(ae(ie({},o),{[n.target.name]:n.target.value})),a=async n=>{n.preventDefault(),u("Submitting..."),await fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(o),headers:{"Content-Type":"application/json"}}),u("\u2705 Submitted")};if(!i)return g("div",null,"Loading...");let c=i.promoBackgroundImage?{backgroundImage:`url(${i.promoBackgroundImage})`}:{};return g("div",{class:"signup-container"},g("div",{class:"promo-column",style:c},g("div",{class:"promo-overlay"},g("h2",{class:"promo-title","data-aue-resource":t,"data-aue-prop":"promoTitle","data-aue-type":"text","data-aue-host":e},i.promoTitle),i.promoSubtitle&&g("h3",{class:"promo-subtitle","data-aue-resource":t,"data-aue-prop":"promoSubtitle","data-aue-type":"text","data-aue-host":e},i.promoSubtitle),g("p",{class:"promo-description","data-aue-resource":t,"data-aue-prop":"promoDescription","data-aue-type":"richtext","data-aue-host":e},i.promoDescription))),g("div",{class:"form-column"},g("form",{class:"signup",onSubmit:a},g("div",{class:"title","data-aue-resource":t,"data-aue-prop":"title","data-aue-type":"text","data-aue-host":e},i.title),g("label",{"data-aue-resource":t,"data-aue-prop":"nameLabel","data-aue-type":"text","data-aue-host":e},i.nameLabel),g("input",{type:"text",name:"name",placeholder:i.nameLabel,value:o.name,onInput:p,required:!0}),g("label",{"data-aue-resource":t,"data-aue-prop":"emailLabel","data-aue-type":"text","data-aue-host":e},i.emailLabel),g("input",{type:"email",name:"email",placeholder:i.emailLabel,value:o.email,onInput:p,required:!0}),g("button",{type:"submit","data-aue-resource":t,"data-aue-prop":"buttonText","data-aue-type":"text","data-aue-host":e},i.buttonText),l&&g("div",{class:"status"},l))))}var ne=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let e=document.createElement("div"),o=this.getAttribute("content-path"),_=this.getAttribute("aem-author");this.shadowRoot.appendChild(this.styles()),this.shadowRoot.appendChild(e),we(g(Ie,{contentPath:o,aemAuthor:_}),e)}styles(){let e=document.createElement("style");return e.textContent=`
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

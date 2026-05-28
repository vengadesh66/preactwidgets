(()=>{var Ae=Object.defineProperty,je=Object.defineProperties;var qe=Object.getOwnPropertyDescriptors;var _e=Object.getOwnPropertySymbols;var We=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var se=(t,e,o)=>e in t?Ae(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,q=(t,e)=>{for(var o in e||(e={}))We.call(e,o)&&se(t,o,e[o]);if(_e)for(var o of _e(e))Le.call(e,o)&&se(t,o,e[o]);return t},Y=(t,e)=>je(t,qe(e));var z,g,fe,Re,H,ie,me,de,pe,Q,J,G,$e,M={},he=[],ze=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,I=Array.isArray;function E(t,e){for(var o in e)t[o]=e[o];return t}function X(t){t&&t.parentNode&&t.parentNode.removeChild(t)}function p(t,e,o){var r,n,_,s={};for(_ in e)_=="key"?r=e[_]:_=="ref"?n=e[_]:s[_]=e[_];if(arguments.length>2&&(s.children=arguments.length>3?z.call(arguments,2):o),typeof t=="function"&&t.defaultProps!=null)for(_ in t.defaultProps)s[_]===void 0&&(s[_]=t.defaultProps[_]);return L(t,s,r,n,null)}function L(t,e,o,r,n){var _={type:t,props:e,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:n==null?++fe:n,__i:-1,__u:0};return n==null&&g.vnode!=null&&g.vnode(_),_}function S(t){return t.children}function R(t,e){this.props=t,this.context=e}function F(t,e){if(e==null)return t.__?F(t.__,t.__i+1):null;for(var o;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null)return o.__e;return typeof t.type=="function"?F(t):null}function ge(t){var e,o;if((t=t.__)!=null&&t.__c!=null){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if((o=t.__k[e])!=null&&o.__e!=null){t.__e=t.__c.base=o.__e;break}return ge(t)}}function le(t){(!t.__d&&(t.__d=!0)&&H.push(t)&&!$.__r++||ie!=g.debounceRendering)&&((ie=g.debounceRendering)||me)($)}function $(){for(var t,e,o,r,n,_,s,l=1;H.length;)H.length>l&&H.sort(de),t=H.shift(),l=H.length,t.__d&&(o=void 0,r=void 0,n=(r=(e=t).__v).__e,_=[],s=[],e.__P&&((o=E({},r)).__v=r.__v+1,g.vnode&&g.vnode(o),Z(e.__P,o,r,e.__n,e.__P.namespaceURI,32&r.__u?[n]:null,_,n==null?F(r):n,!!(32&r.__u),s),o.__v=r.__v,o.__.__k[o.__i]=o,ye(_,o,s),r.__e=r.__=null,o.__e!=n&&ge(o)));$.__r=0}function be(t,e,o,r,n,_,s,l,u,i,m){var a,h,f,b,k,x,c,d=r&&r.__k||he,w=e.length;for(u=Ie(o,e,d,u,w),a=0;a<w;a++)(f=o.__k[a])!=null&&(h=f.__i==-1?M:d[f.__i]||M,f.__i=a,x=Z(t,f,h,n,_,s,l,u,i,m),b=f.__e,f.ref&&h.ref!=f.ref&&(h.ref&&ee(h.ref,null,f),m.push(f.ref,f.__c||b,f)),k==null&&b!=null&&(k=b),(c=!!(4&f.__u))||h.__k===f.__k?u=ve(f,u,t,c):typeof f.type=="function"&&x!==void 0?u=x:b&&(u=b.nextSibling),f.__u&=-7);return o.__e=k,u}function Ie(t,e,o,r,n){var _,s,l,u,i,m=o.length,a=m,h=0;for(t.__k=new Array(n),_=0;_<n;_++)(s=e[_])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=t.__k[_]=L(null,s,null,null,null):I(s)?s=t.__k[_]=L(S,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=t.__k[_]=L(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):t.__k[_]=s,u=_+h,s.__=t,s.__b=t.__b+1,l=null,(i=s.__i=Oe(s,o,u,a))!=-1&&(a--,(l=o[i])&&(l.__u|=2)),l==null||l.__v==null?(i==-1&&(n>m?h--:n<m&&h++),typeof s.type!="function"&&(s.__u|=4)):i!=u&&(i==u-1?h--:i==u+1?h++:(i>u?h--:h++,s.__u|=4))):t.__k[_]=null;if(a)for(_=0;_<m;_++)(l=o[_])!=null&&(2&l.__u)==0&&(l.__e==r&&(r=F(l)),ke(l,l));return r}function ve(t,e,o,r){var n,_;if(typeof t.type=="function"){for(n=t.__k,_=0;n&&_<n.length;_++)n[_]&&(n[_].__=t,e=ve(n[_],e,o,r));return e}t.__e!=e&&(r&&(e&&t.type&&!e.parentNode&&(e=F(t)),o.insertBefore(t.__e,e||null)),e=t.__e);do e=e&&e.nextSibling;while(e!=null&&e.nodeType==8);return e}function Oe(t,e,o,r){var n,_,s,l=t.key,u=t.type,i=e[o],m=i!=null&&(2&i.__u)==0;if(i===null&&l==null||m&&l==i.key&&u==i.type)return o;if(r>(m?1:0)){for(n=o-1,_=o+1;n>=0||_<e.length;)if((i=e[s=n>=0?n--:_++])!=null&&(2&i.__u)==0&&l==i.key&&u==i.type)return s}return-1}function ce(t,e,o){e[0]=="-"?t.setProperty(e,o==null?"":o):t[e]=o==null?"":typeof o!="number"||ze.test(e)?o:o+"px"}function W(t,e,o,r,n){var _,s;e:if(e=="style")if(typeof o=="string")t.style.cssText=o;else{if(typeof r=="string"&&(t.style.cssText=r=""),r)for(e in r)o&&e in o||ce(t.style,e,"");if(o)for(e in o)r&&o[e]==r[e]||ce(t.style,e,o[e])}else if(e[0]=="o"&&e[1]=="n")_=e!=(e=e.replace(pe,"$1")),s=e.toLowerCase(),e=s in t||e=="onFocusOut"||e=="onFocusIn"?s.slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=o,o?r?o.u=r.u:(o.u=Q,t.addEventListener(e,_?G:J,_)):t.removeEventListener(e,_?G:J,_);else{if(n=="http://www.w3.org/2000/svg")e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!="width"&&e!="height"&&e!="href"&&e!="list"&&e!="form"&&e!="tabIndex"&&e!="download"&&e!="rowSpan"&&e!="colSpan"&&e!="role"&&e!="popover"&&e in t)try{t[e]=o==null?"":o;break e}catch(l){}typeof o=="function"||(o==null||o===!1&&e[4]!="-"?t.removeAttribute(e):t.setAttribute(e,e=="popover"&&o==1?"":o))}}function ue(t){return function(e){if(this.l){var o=this.l[e.type+t];if(e.t==null)e.t=Q++;else if(e.t<o.u)return;return o(g.event?g.event(e):e)}}}function Z(t,e,o,r,n,_,s,l,u,i){var m,a,h,f,b,k,x,c,d,w,C,A,T,ae,j,D,B,N=e.type;if(e.constructor!==void 0)return null;128&o.__u&&(u=!!(32&o.__u),_=[l=e.__e=o.__e]),(m=g.__b)&&m(e);e:if(typeof N=="function")try{if(c=e.props,d="prototype"in N&&N.prototype.render,w=(m=N.contextType)&&r[m.__c],C=m?w?w.props.value:m.__:r,o.__c?x=(a=e.__c=o.__c).__=a.__E:(d?e.__c=a=new N(c,C):(e.__c=a=new R(c,C),a.constructor=N,a.render=Be),w&&w.sub(a),a.state||(a.state={}),a.__n=r,h=a.__d=!0,a.__h=[],a._sb=[]),d&&a.__s==null&&(a.__s=a.state),d&&N.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=E({},a.__s)),E(a.__s,N.getDerivedStateFromProps(c,a.__s))),f=a.props,b=a.state,a.__v=e,h)d&&N.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),d&&a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(d&&N.getDerivedStateFromProps==null&&c!==f&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(c,C),e.__v==o.__v||!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(c,a.__s,C)===!1){for(e.__v!=o.__v&&(a.props=c,a.state=a.__s,a.__d=!1),e.__e=o.__e,e.__k=o.__k,e.__k.some(function(P){P&&(P.__=e)}),A=0;A<a._sb.length;A++)a.__h.push(a._sb[A]);a._sb=[],a.__h.length&&s.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(c,a.__s,C),d&&a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(f,b,k)})}if(a.context=C,a.props=c,a.__P=t,a.__e=!1,T=g.__r,ae=0,d){for(a.state=a.__s,a.__d=!1,T&&T(e),m=a.render(a.props,a.state,a.context),j=0;j<a._sb.length;j++)a.__h.push(a._sb[j]);a._sb=[]}else do a.__d=!1,T&&T(e),m=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++ae<25);a.state=a.__s,a.getChildContext!=null&&(r=E(E({},r),a.getChildContext())),d&&!h&&a.getSnapshotBeforeUpdate!=null&&(k=a.getSnapshotBeforeUpdate(f,b)),D=m,m!=null&&m.type===S&&m.key==null&&(D=xe(m.props.children)),l=be(t,I(D)?D:[D],e,o,r,n,_,s,l,u,i),a.base=e.__e,e.__u&=-161,a.__h.length&&s.push(a),x&&(a.__E=a.__=null)}catch(P){if(e.__v=null,u||_!=null)if(P.then){for(e.__u|=u?160:128;l&&l.nodeType==8&&l.nextSibling;)l=l.nextSibling;_[_.indexOf(l)]=null,e.__e=l}else{for(B=_.length;B--;)X(_[B]);K(e)}else e.__e=o.__e,e.__k=o.__k,P.then||K(e);g.__e(P,e,o)}else _==null&&e.__v==o.__v?(e.__k=o.__k,e.__e=o.__e):l=e.__e=Ve(o.__e,e,o,r,n,_,s,u,i);return(m=g.diffed)&&m(e),128&e.__u?void 0:l}function K(t){t&&t.__c&&(t.__c.__e=!0),t&&t.__k&&t.__k.forEach(K)}function ye(t,e,o){for(var r=0;r<o.length;r++)ee(o[r],o[++r],o[++r]);g.__c&&g.__c(e,t),t.some(function(n){try{t=n.__h,n.__h=[],t.some(function(_){_.call(n)})}catch(_){g.__e(_,n.__v)}})}function xe(t){return typeof t!="object"||t==null||t.__b&&t.__b>0?t:I(t)?t.map(xe):E({},t)}function Ve(t,e,o,r,n,_,s,l,u){var i,m,a,h,f,b,k,x=o.props||M,c=e.props,d=e.type;if(d=="svg"?n="http://www.w3.org/2000/svg":d=="math"?n="http://www.w3.org/1998/Math/MathML":n||(n="http://www.w3.org/1999/xhtml"),_!=null){for(i=0;i<_.length;i++)if((f=_[i])&&"setAttribute"in f==!!d&&(d?f.localName==d:f.nodeType==3)){t=f,_[i]=null;break}}if(t==null){if(d==null)return document.createTextNode(c);t=document.createElementNS(n,d,c.is&&c),l&&(g.__m&&g.__m(e,_),l=!1),_=null}if(d==null)x===c||l&&t.data==c||(t.data=c);else{if(_=_&&z.call(t.childNodes),!l&&_!=null)for(x={},i=0;i<t.attributes.length;i++)x[(f=t.attributes[i]).name]=f.value;for(i in x)if(f=x[i],i!="children"){if(i=="dangerouslySetInnerHTML")a=f;else if(!(i in c)){if(i=="value"&&"defaultValue"in c||i=="checked"&&"defaultChecked"in c)continue;W(t,i,null,f,n)}}for(i in c)f=c[i],i=="children"?h=f:i=="dangerouslySetInnerHTML"?m=f:i=="value"?b=f:i=="checked"?k=f:l&&typeof f!="function"||x[i]===f||W(t,i,f,x[i],n);if(m)l||a&&(m.__html==a.__html||m.__html==t.innerHTML)||(t.innerHTML=m.__html),e.__k=[];else if(a&&(t.innerHTML=""),be(e.type=="template"?t.content:t,I(h)?h:[h],e,o,r,d=="foreignObject"?"http://www.w3.org/1999/xhtml":n,_,s,_?_[0]:o.__k&&F(o,0),l,u),_!=null)for(i=_.length;i--;)X(_[i]);l||(i="value",d=="progress"&&b==null?t.removeAttribute("value"):b!=null&&(b!==t[i]||d=="progress"&&!b||d=="option"&&b!=x[i])&&W(t,i,b,x[i],n),i="checked",k!=null&&k!=t[i]&&W(t,i,k,x[i],n))}return t}function ee(t,e,o){try{if(typeof t=="function"){var r=typeof t.__u=="function";r&&t.__u(),r&&e==null||(t.__u=t(e))}else t.current=e}catch(n){g.__e(n,o)}}function ke(t,e,o){var r,n;if(g.unmount&&g.unmount(t),(r=t.ref)&&(r.current&&r.current!=t.__e||ee(r,null,e)),(r=t.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(_){g.__e(_,e)}r.base=r.__P=null}if(r=t.__k)for(n=0;n<r.length;n++)r[n]&&ke(r[n],e,o||typeof t.type!="function");o||X(t.__e),t.__c=t.__=t.__e=void 0}function Be(t,e,o){return this.constructor(t,o)}function we(t,e,o){var r,n,_,s;e==document&&(e=document.documentElement),g.__&&g.__(t,e),n=(r=typeof o=="function")?null:o&&o.__k||e.__k,_=[],s=[],Z(e,t=(!r&&o||e).__k=p(S,null,[t]),n||M,M,e.namespaceURI,!r&&o?[o]:n?null:e.firstChild?z.call(e.childNodes):null,_,!r&&o?o:n?n.__e:e.firstChild,r,s),ye(_,t,s)}z=he.slice,g={__e:function(t,e,o,r){for(var n,_,s;e=e.__;)if((n=e.__c)&&!n.__)try{if((_=n.constructor)&&_.getDerivedStateFromError!=null&&(n.setState(_.getDerivedStateFromError(t)),s=n.__d),n.componentDidCatch!=null&&(n.componentDidCatch(t,r||{}),s=n.__d),s)return n.__E=n}catch(l){t=l}throw t}},fe=0,Re=function(t){return t!=null&&t.constructor===void 0},R.prototype.setState=function(t,e){var o;o=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=E({},this.state),typeof t=="function"&&(t=t(E({},o),this.props)),t&&E(o,t),t!=null&&this.__v&&(e&&this._sb.push(e),le(this))},R.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),le(this))},R.prototype.render=S,H=[],me=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,de=function(t,e){return t.__v.__b-e.__v.__b},$.__r=0,pe=/(PointerCapture)$|Capture$/i,Q=0,J=ue(!1),G=ue(!0),$e=0;var oe,v,te,Ce,re=0,De=[],y=g,Ne=y.__b,Ee=y.__r,Se=y.diffed,He=y.__c,Pe=y.unmount,Fe=y.__;function Ye(t,e){y.__h&&y.__h(v,t,re||e),re=0;var o=v.__H||(v.__H={__:[],__h:[]});return t>=o.__.length&&o.__.push({}),o.__[t]}function U(t){return re=1,Je(Me,t)}function Je(t,e,o){var r=Ye(oe++,2);if(r.t=t,!r.__c&&(r.__=[o?o(e):Me(void 0,e),function(l){var u=r.__N?r.__N[0]:r.__[0],i=r.t(u,l);u!==i&&(r.__N=[i,r.__[1]],r.__c.setState({}))}],r.__c=v,!v.__f)){var n=function(l,u,i){if(!r.__c.__H)return!0;var m=r.__c.__H.__.filter(function(h){return!!h.__c});if(m.every(function(h){return!h.__N}))return!_||_.call(this,l,u,i);var a=r.__c.props!==l;return m.forEach(function(h){if(h.__N){var f=h.__[0];h.__=h.__N,h.__N=void 0,f!==h.__[0]&&(a=!0)}}),_&&_.call(this,l,u,i)||a};v.__f=!0;var _=v.shouldComponentUpdate,s=v.componentWillUpdate;v.componentWillUpdate=function(l,u,i){if(this.__e){var m=_;_=void 0,n(l,u,i),_=m}s&&s.call(this,l,u,i)},v.shouldComponentUpdate=n}return r.__N||r.__}function Ge(){for(var t;t=De.shift();)if(t.__P&&t.__H)try{t.__H.__h.forEach(O),t.__H.__h.forEach(ne),t.__H.__h=[]}catch(e){t.__H.__h=[],y.__e(e,t.__v)}}y.__b=function(t){v=null,Ne&&Ne(t)},y.__=function(t,e){t&&e.__k&&e.__k.__m&&(t.__m=e.__k.__m),Fe&&Fe(t,e)},y.__r=function(t){Ee&&Ee(t),oe=0;var e=(v=t.__c).__H;e&&(te===v?(e.__h=[],v.__h=[],e.__.forEach(function(o){o.__N&&(o.__=o.__N),o.u=o.__N=void 0})):(e.__h.forEach(O),e.__h.forEach(ne),e.__h=[],oe=0)),te=v},y.diffed=function(t){Se&&Se(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(De.push(e)!==1&&Ce===y.requestAnimationFrame||((Ce=y.requestAnimationFrame)||Ke)(Ge)),e.__H.__.forEach(function(o){o.u&&(o.__H=o.u),o.u=void 0})),te=v=null},y.__c=function(t,e){e.some(function(o){try{o.__h.forEach(O),o.__h=o.__h.filter(function(r){return!r.__||ne(r)})}catch(r){e.some(function(n){n.__h&&(n.__h=[])}),e=[],y.__e(r,o.__v)}}),He&&He(t,e)},y.unmount=function(t){Pe&&Pe(t);var e,o=t.__c;o&&o.__H&&(o.__H.__.forEach(function(r){try{O(r)}catch(n){e=n}}),o.__H=void 0,e&&y.__e(e,o.__v))};var Te=typeof requestAnimationFrame=="function";function Ke(t){var e,o=function(){clearTimeout(r),Te&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(o,35);Te&&(e=requestAnimationFrame(o))}function O(t){var e=v,o=t.__c;typeof o=="function"&&(t.__c=void 0,o()),v=e}function ne(t){var e=v;t.__c=t.__(),v=e}function Me(t,e){return typeof e=="function"?e(t):e}function Ue({title:t="Contact Us",submitEndpoint:e="/api/contact",onSuccess:o=()=>{},onError:r=()=>{}}){let[n,_]=U({name:"",email:"",phone:"",subject:"",message:""}),[s,l]=U({}),[u,i]=U("idle"),[m,a]=U(""),h=c=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(c).toLowerCase()),f=c=>c?/^[\d\s\-()]+$/.test(c)&&c.replace(/\D/g,"").length>=10:!0,b=()=>{let c={};return n.name.trim()?n.name.trim().length<2&&(c.name="Name must be at least 2 characters"):c.name="Name is required",n.email.trim()?h(n.email)||(c.email="Please enter a valid email address"):c.email="Email is required",n.phone&&!f(n.phone)&&(c.phone="Please enter a valid phone number"),n.message.trim()?n.message.trim().length<10?c.message="Message must be at least 10 characters":n.message.length>5e3&&(c.message="Message is too long (max 5000 characters)"):c.message="Message is required",l(c),Object.keys(c).length===0},k=c=>{let{name:d,value:w}=c.target;_(C=>Y(q({},C),{[d]:w})),s[d]&&l(C=>Y(q({},C),{[d]:""}))};return p("div",{className:"contact-form-container"},p("h2",{className:"contact-form-title"},t),u==="success"&&p("div",{className:"contact-form-message success",role:"alert"},p("strong",null,"Thank you!")," Your message has been sent successfully. We'll get back to you soon."),u==="error"&&m&&p("div",{className:"contact-form-message error",role:"alert"},p("strong",null,"Error:")," ",m),p("form",{onSubmit:async c=>{if(c.preventDefault(),!b()){i("error"),a("Please fix the errors above");return}i("submitting"),a("");try{let d=await fetch(e,{method:"POST",headers:q({"Content-Type":"application/json"},window.csrfToken&&{"X-CSRF-Token":window.csrfToken}),body:JSON.stringify({name:n.name.trim(),email:n.email.trim(),phone:n.phone.trim(),subject:n.subject.trim(),message:n.message.trim(),timestamp:new Date().toISOString()})});if(!d.ok)throw new Error(`Submission failed: ${d.status}`);let w=await d.json();i("success"),_({name:"",email:"",phone:"",subject:"",message:""}),o(w)}catch(d){console.error("[ContactForm] Submission error:",d),i("error"),a("Unable to submit form. Please try again later."),r(d)}},className:"contact-form",noValidate:!0},p("div",{className:`form-group ${s.name?"has-error":""}`},p("label",{htmlFor:"contact-name",className:"form-label"},"Name ",p("span",{className:"required"},"*")),p("input",{type:"text",id:"contact-name",name:"name",value:n.name,onChange:k,className:"form-input",placeholder:"Your full name",required:!0,disabled:u==="submitting","aria-invalid":s.name?"true":"false","aria-describedby":s.name?"error-name":void 0}),s.name&&p("span",{className:"form-error",id:"error-name",role:"alert"},s.name)),p("div",{className:`form-group ${s.email?"has-error":""}`},p("label",{htmlFor:"contact-email",className:"form-label"},"Email ",p("span",{className:"required"},"*")),p("input",{type:"email",id:"contact-email",name:"email",value:n.email,onChange:k,className:"form-input",placeholder:"your.email@example.com",required:!0,disabled:u==="submitting","aria-invalid":s.email?"true":"false","aria-describedby":s.email?"error-email":void 0}),s.email&&p("span",{className:"form-error",id:"error-email",role:"alert"},s.email)),p("div",{className:`form-group ${s.phone?"has-error":""}`},p("label",{htmlFor:"contact-phone",className:"form-label"},"Phone ",p("span",{className:"optional"},"(optional)")),p("input",{type:"tel",id:"contact-phone",name:"phone",value:n.phone,onChange:k,className:"form-input",placeholder:"(555) 123-4567",disabled:u==="submitting","aria-invalid":s.phone?"true":"false","aria-describedby":s.phone?"error-phone":void 0}),s.phone&&p("span",{className:"form-error",id:"error-phone",role:"alert"},s.phone)),p("div",{className:"form-group"},p("label",{htmlFor:"contact-subject",className:"form-label"},"Subject ",p("span",{className:"optional"},"(optional)")),p("input",{type:"text",id:"contact-subject",name:"subject",value:n.subject,onChange:k,className:"form-input",placeholder:"How can we help?",disabled:u==="submitting"})),p("div",{className:`form-group ${s.message?"has-error":""}`},p("label",{htmlFor:"contact-message",className:"form-label"},"Message ",p("span",{className:"required"},"*")),p("textarea",{id:"contact-message",name:"message",value:n.message,onChange:k,className:"form-textarea",placeholder:"Tell us more about your inquiry...",rows:"6",required:!0,disabled:u==="submitting","aria-invalid":s.message?"true":"false","aria-describedby":s.message?"error-message":void 0}),s.message&&p("span",{className:"form-error",id:"error-message",role:"alert"},s.message),p("span",{className:"form-hint"},n.message.length," / 5000 characters")),p("button",{type:"submit",className:"form-submit",disabled:u==="submitting"},u==="submitting"?"Sending...":"Send Message")))}var V=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["title","submit-endpoint"]}attributeChangedCallback(e,o,r){o!==r&&this.render()}render(){let e=this.getAttribute("title")||"Contact Us",o=this.getAttribute("submit-endpoint")||"/api/contact",r=l=>{console.log("[ContactFormWidget] Form submitted successfully:",l),this.dispatchEvent(new CustomEvent("contact-success",{detail:l,bubbles:!0,composed:!0}))},n=l=>{console.error("[ContactFormWidget] Form submission failed:",l),this.dispatchEvent(new CustomEvent("contact-error",{detail:{error:l.message},bubbles:!0,composed:!0}))},_=document.createElement("div");we(p(Ue,{title:e,submitEndpoint:o,onSuccess:r,onError:n}),_);let s=document.createElement("style");s.textContent=`
      /* Contact Form Widget Styles - Shadow DOM Scoped */
      * {
        box-sizing: border-box;
      }

      .contact-form-container {
        font-family: var(--body-font-family, system-ui, -apple-system, sans-serif);
        max-width: 600px;
        margin: 0 auto;
        padding: 2rem;
        background-color: #ffffff;
        border-radius: 8px;
        box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
      }

      .contact-form-title {
        margin: 0 0 1.5rem;
        font-size: 1.75rem;
        font-weight: 700;
        color: #202020;
        text-align: center;
      }

      .contact-form {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
      }

      /* Messages */
      .contact-form-message {
        padding: 1rem;
        border-radius: 4px;
        margin-bottom: 1rem;
      }

      .contact-form-message.success {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
      }

      .contact-form-message.error {
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        color: #721c24;
      }

      /* Form groups */
      .form-group {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .form-group.has-error .form-input,
      .form-group.has-error .form-textarea {
        border-color: #dc3545;
      }

      .form-label {
        font-weight: 600;
        font-size: 0.9375rem;
        color: #2c2c2c;
      }

      .required {
        color: #dc3545;
      }

      .optional {
        font-weight: 400;
        color: #6c757d;
        font-size: 0.875rem;
      }

      .form-input,
      .form-textarea {
        padding: 0.75rem;
        font-size: 1rem;
        border: 1px solid #ced4da;
        border-radius: 4px;
        font-family: inherit;
        transition: border-color 0.15s ease;
      }

      .form-input:focus,
      .form-textarea:focus {
        outline: none;
        border-color: #0065ff;
        box-shadow: 0 0 0 3px rgba(0, 101, 255, 0.1);
      }

      .form-input:disabled,
      .form-textarea:disabled {
        background-color: #e9ecef;
        cursor: not-allowed;
      }

      .form-textarea {
        resize: vertical;
        min-height: 120px;
      }

      .form-error {
        color: #dc3545;
        font-size: 0.875rem;
        display: block;
      }

      .form-hint {
        color: #6c757d;
        font-size: 0.8125rem;
      }

      /* Submit button */
      .form-submit {
        padding: 0.875rem 2rem;
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        background: linear-gradient(135deg, #0065ff 0%, #0047b3 100%);
        border: none;
        border-radius: 4px;
        cursor: pointer;
        transition: transform 0.2s ease, box-shadow 0.2s ease;
        margin-top: 0.5rem;
      }

      .form-submit:hover:not(:disabled) {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 101, 255, 0.3);
      }

      .form-submit:active:not(:disabled) {
        transform: translateY(0);
      }

      .form-submit:disabled {
        background: #6c757d;
        cursor: not-allowed;
        opacity: 0.6;
      }

      /* Responsive */
      @media (max-width: 640px) {
        .contact-form-container {
          padding: 1.5rem;
        }

        .contact-form-title {
          font-size: 1.5rem;
        }
      }

      /* Dark mode */
      @media (prefers-color-scheme: dark) {
        .contact-form-container {
          background-color: #2c2c2c;
        }

        .contact-form-title {
          color: #f0f0f0;
        }

        .form-label {
          color: #e0e0e0;
        }

        .form-input,
        .form-textarea {
          background-color: #1c1c1c;
          border-color: #4a4a4a;
          color: #f0f0f0;
        }

        .form-input:focus,
        .form-textarea:focus {
          border-color: #0065ff;
        }
      }
    `,this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(s),this.shadowRoot.appendChild(_)}};customElements.get("contact-form-widget")||customElements.define("contact-form-widget",V);var ft=V;})();

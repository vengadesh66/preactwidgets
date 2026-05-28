(()=>{var $,g,ce,Le,T,ie,le,de,fe,X,J,K,Fe,U={},pe=[],Re=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,j=Array.isArray;function C(e,t){for(var n in t)e[n]=t[n];return e}function Y(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function m(e,t,n){var o,i,_,s={};for(_ in t)_=="key"?o=t[_]:_=="ref"?i=t[_]:s[_]=t[_];if(arguments.length>2&&(s.children=arguments.length>3?$.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(_ in e.defaultProps)s[_]===void 0&&(s[_]=e.defaultProps[_]);return z(e,s,o,i,null)}function z(e,t,n,o,i){var _={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i==null?++ce:i,__i:-1,__u:0};return i==null&&g.vnode!=null&&g.vnode(_),_}function N(e){return e.children}function I(e,t){this.props=e,this.context=t}function P(e,t){if(t==null)return e.__?P(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?P(e):null}function me(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return me(e)}}function ae(e){(!e.__d&&(e.__d=!0)&&T.push(e)&&!W.__r++||ie!=g.debounceRendering)&&((ie=g.debounceRendering)||le)(W)}function W(){for(var e,t,n,o,i,_,s,u=1;T.length;)T.length>u&&T.sort(de),e=T.shift(),u=T.length,e.__d&&(n=void 0,o=void 0,i=(o=(t=e).__v).__e,_=[],s=[],t.__P&&((n=C({},o)).__v=o.__v+1,g.vnode&&g.vnode(n),Z(t.__P,n,o,t.__n,t.__P.namespaceURI,32&o.__u?[i]:null,_,i==null?P(o):i,!!(32&o.__u),s),n.__v=o.__v,n.__.__k[n.__i]=n,ge(_,n,s),o.__e=o.__=null,n.__e!=i&&me(n)));W.__r=0}function he(e,t,n,o,i,_,s,u,d,a,l){var r,f,c,w,y,v,p,h=o&&o.__k||pe,E=t.length;for(d=ze(n,t,h,d,E),r=0;r<E;r++)(c=n.__k[r])!=null&&(f=c.__i==-1?U:h[c.__i]||U,c.__i=r,v=Z(e,c,f,i,_,s,u,d,a,l),w=c.__e,c.ref&&f.ref!=c.ref&&(f.ref&&ee(f.ref,null,c),l.push(c.ref,c.__c||w,c)),y==null&&w!=null&&(y=w),(p=!!(4&c.__u))||f.__k===c.__k?d=ve(c,d,e,p):typeof c.type=="function"&&v!==void 0?d=v:w&&(d=w.nextSibling),c.__u&=-7);return n.__e=y,d}function ze(e,t,n,o,i){var _,s,u,d,a,l=n.length,r=l,f=0;for(e.__k=new Array(i),_=0;_<i;_++)(s=t[_])!=null&&typeof s!="boolean"&&typeof s!="function"?(typeof s=="string"||typeof s=="number"||typeof s=="bigint"||s.constructor==String?s=e.__k[_]=z(null,s,null,null,null):j(s)?s=e.__k[_]=z(N,{children:s},null,null,null):s.constructor===void 0&&s.__b>0?s=e.__k[_]=z(s.type,s.props,s.key,s.ref?s.ref:null,s.__v):e.__k[_]=s,d=_+f,s.__=e,s.__b=e.__b+1,u=null,(a=s.__i=Ie(s,n,d,r))!=-1&&(r--,(u=n[a])&&(u.__u|=2)),u==null||u.__v==null?(a==-1&&(i>l?f--:i<l&&f++),typeof s.type!="function"&&(s.__u|=4)):a!=d&&(a==d-1?f--:a==d+1?f++:(a>d?f--:f++,s.__u|=4))):e.__k[_]=null;if(r)for(_=0;_<l;_++)(u=n[_])!=null&&(2&u.__u)==0&&(u.__e==o&&(o=P(u)),ye(u,u));return o}function ve(e,t,n,o){var i,_;if(typeof e.type=="function"){for(i=e.__k,_=0;i&&_<i.length;_++)i[_]&&(i[_].__=e,t=ve(i[_],t,n,o));return t}e.__e!=t&&(o&&(t&&e.type&&!t.parentNode&&(t=P(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t=t&&t.nextSibling;while(t!=null&&t.nodeType==8);return t}function Ie(e,t,n,o){var i,_,s,u=e.key,d=e.type,a=t[n],l=a!=null&&(2&a.__u)==0;if(a===null&&u==null||l&&u==a.key&&d==a.type)return n;if(o>(l?1:0)){for(i=n-1,_=n+1;i>=0||_<t.length;)if((a=t[s=i>=0?i--:_++])!=null&&(2&a.__u)==0&&u==a.key&&d==a.type)return s}return-1}function se(e,t,n){t[0]=="-"?e.setProperty(t,n==null?"":n):e[t]=n==null?"":typeof n!="number"||Re.test(t)?n:n+"px"}function R(e,t,n,o,i){var _,s;e:if(t=="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof o=="string"&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||se(e.style,t,"");if(n)for(t in n)o&&n[t]==o[t]||se(e.style,t,n[t])}else if(t[0]=="o"&&t[1]=="n")_=t!=(t=t.replace(fe,"$1")),s=t.toLowerCase(),t=s in e||t=="onFocusOut"||t=="onFocusIn"?s.slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o?n.u=o.u:(n.u=X,e.addEventListener(t,_?K:J,_)):e.removeEventListener(t,_?K:J,_);else{if(i=="http://www.w3.org/2000/svg")t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!="width"&&t!="height"&&t!="href"&&t!="list"&&t!="form"&&t!="tabIndex"&&t!="download"&&t!="rowSpan"&&t!="colSpan"&&t!="role"&&t!="popover"&&t in e)try{e[t]=n==null?"":n;break e}catch(u){}typeof n=="function"||(n==null||n===!1&&t[4]!="-"?e.removeAttribute(t):e.setAttribute(t,t=="popover"&&n==1?"":n))}}function ue(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=X++;else if(t.t<n.u)return;return n(g.event?g.event(t):t)}}}function Z(e,t,n,o,i,_,s,u,d,a){var l,r,f,c,w,y,v,p,h,E,H,L,D,_e,F,M,G,k=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(d=!!(32&n.__u),_=[u=t.__e=n.__e]),(l=g.__b)&&l(t);e:if(typeof k=="function")try{if(p=t.props,h="prototype"in k&&k.prototype.render,E=(l=k.contextType)&&o[l.__c],H=l?E?E.props.value:l.__:o,n.__c?v=(r=t.__c=n.__c).__=r.__E:(h?t.__c=r=new k(p,H):(t.__c=r=new I(p,H),r.constructor=k,r.render=$e),E&&E.sub(r),r.state||(r.state={}),r.__n=o,f=r.__d=!0,r.__h=[],r._sb=[]),h&&r.__s==null&&(r.__s=r.state),h&&k.getDerivedStateFromProps!=null&&(r.__s==r.state&&(r.__s=C({},r.__s)),C(r.__s,k.getDerivedStateFromProps(p,r.__s))),c=r.props,w=r.state,r.__v=t,f)h&&k.getDerivedStateFromProps==null&&r.componentWillMount!=null&&r.componentWillMount(),h&&r.componentDidMount!=null&&r.__h.push(r.componentDidMount);else{if(h&&k.getDerivedStateFromProps==null&&p!==c&&r.componentWillReceiveProps!=null&&r.componentWillReceiveProps(p,H),t.__v==n.__v||!r.__e&&r.shouldComponentUpdate!=null&&r.shouldComponentUpdate(p,r.__s,H)===!1){for(t.__v!=n.__v&&(r.props=p,r.state=r.__s,r.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(S){S&&(S.__=t)}),L=0;L<r._sb.length;L++)r.__h.push(r._sb[L]);r._sb=[],r.__h.length&&s.push(r);break e}r.componentWillUpdate!=null&&r.componentWillUpdate(p,r.__s,H),h&&r.componentDidUpdate!=null&&r.__h.push(function(){r.componentDidUpdate(c,w,y)})}if(r.context=H,r.props=p,r.__P=e,r.__e=!1,D=g.__r,_e=0,h){for(r.state=r.__s,r.__d=!1,D&&D(t),l=r.render(r.props,r.state,r.context),F=0;F<r._sb.length;F++)r.__h.push(r._sb[F]);r._sb=[]}else do r.__d=!1,D&&D(t),l=r.render(r.props,r.state,r.context),r.state=r.__s;while(r.__d&&++_e<25);r.state=r.__s,r.getChildContext!=null&&(o=C(C({},o),r.getChildContext())),h&&!f&&r.getSnapshotBeforeUpdate!=null&&(y=r.getSnapshotBeforeUpdate(c,w)),M=l,l!=null&&l.type===N&&l.key==null&&(M=we(l.props.children)),u=he(e,j(M)?M:[M],t,n,o,i,_,s,u,d,a),r.base=t.__e,t.__u&=-161,r.__h.length&&s.push(r),v&&(r.__E=r.__=null)}catch(S){if(t.__v=null,d||_!=null)if(S.then){for(t.__u|=d?160:128;u&&u.nodeType==8&&u.nextSibling;)u=u.nextSibling;_[_.indexOf(u)]=null,t.__e=u}else{for(G=_.length;G--;)Y(_[G]);Q(t)}else t.__e=n.__e,t.__k=n.__k,S.then||Q(t);g.__e(S,t,n)}else _==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):u=t.__e=We(n.__e,t,n,o,i,_,s,d,a);return(l=g.diffed)&&l(t),128&t.__u?void 0:u}function Q(e){e&&e.__c&&(e.__c.__e=!0),e&&e.__k&&e.__k.forEach(Q)}function ge(e,t,n){for(var o=0;o<n.length;o++)ee(n[o],n[++o],n[++o]);g.__c&&g.__c(t,e),e.some(function(i){try{e=i.__h,i.__h=[],e.some(function(_){_.call(i)})}catch(_){g.__e(_,i.__v)}})}function we(e){return typeof e!="object"||e==null||e.__b&&e.__b>0?e:j(e)?e.map(we):C({},e)}function We(e,t,n,o,i,_,s,u,d){var a,l,r,f,c,w,y,v=n.props||U,p=t.props,h=t.type;if(h=="svg"?i="http://www.w3.org/2000/svg":h=="math"?i="http://www.w3.org/1998/Math/MathML":i||(i="http://www.w3.org/1999/xhtml"),_!=null){for(a=0;a<_.length;a++)if((c=_[a])&&"setAttribute"in c==!!h&&(h?c.localName==h:c.nodeType==3)){e=c,_[a]=null;break}}if(e==null){if(h==null)return document.createTextNode(p);e=document.createElementNS(i,h,p.is&&p),u&&(g.__m&&g.__m(t,_),u=!1),_=null}if(h==null)v===p||u&&e.data==p||(e.data=p);else{if(_=_&&$.call(e.childNodes),!u&&_!=null)for(v={},a=0;a<e.attributes.length;a++)v[(c=e.attributes[a]).name]=c.value;for(a in v)if(c=v[a],a!="children"){if(a=="dangerouslySetInnerHTML")r=c;else if(!(a in p)){if(a=="value"&&"defaultValue"in p||a=="checked"&&"defaultChecked"in p)continue;R(e,a,null,c,i)}}for(a in p)c=p[a],a=="children"?f=c:a=="dangerouslySetInnerHTML"?l=c:a=="value"?w=c:a=="checked"?y=c:u&&typeof c!="function"||v[a]===c||R(e,a,c,v[a],i);if(l)u||r&&(l.__html==r.__html||l.__html==e.innerHTML)||(e.innerHTML=l.__html),t.__k=[];else if(r&&(e.innerHTML=""),he(t.type=="template"?e.content:e,j(f)?f:[f],t,n,o,h=="foreignObject"?"http://www.w3.org/1999/xhtml":i,_,s,_?_[0]:n.__k&&P(n,0),u,d),_!=null)for(a=_.length;a--;)Y(_[a]);u||(a="value",h=="progress"&&w==null?e.removeAttribute("value"):w!=null&&(w!==e[a]||h=="progress"&&!w||h=="option"&&w!=v[a])&&R(e,a,w,v[a],i),a="checked",y!=null&&y!=e[a]&&R(e,a,y,v[a],i))}return e}function ee(e,t,n){try{if(typeof e=="function"){var o=typeof e.__u=="function";o&&e.__u(),o&&t==null||(e.__u=e(t))}else e.current=t}catch(i){g.__e(i,n)}}function ye(e,t,n){var o,i;if(g.unmount&&g.unmount(e),(o=e.ref)&&(o.current&&o.current!=e.__e||ee(o,null,t)),(o=e.__c)!=null){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(_){g.__e(_,t)}o.base=o.__P=null}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&ye(o[i],t,n||typeof e.type!="function");n||Y(e.__e),e.__c=e.__=e.__e=void 0}function $e(e,t,n){return this.constructor(e,n)}function be(e,t,n){var o,i,_,s;t==document&&(t=document.documentElement),g.__&&g.__(e,t),i=(o=typeof n=="function")?null:n&&n.__k||t.__k,_=[],s=[],Z(t,e=(!o&&n||t).__k=m(N,null,[e]),i||U,U,t.namespaceURI,!o&&n?[n]:i?null:t.firstChild?$.call(t.childNodes):null,_,!o&&n?n:i?i.__e:t.firstChild,o,s),ge(_,e,s)}$=pe.slice,g={__e:function(e,t,n,o){for(var i,_,s;t=t.__;)if((i=t.__c)&&!i.__)try{if((_=i.constructor)&&_.getDerivedStateFromError!=null&&(i.setState(_.getDerivedStateFromError(e)),s=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,o||{}),s=i.__d),s)return i.__E=i}catch(u){e=u}throw e}},ce=0,Le=function(e){return e!=null&&e.constructor===void 0},I.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=C({},this.state),typeof e=="function"&&(e=e(C({},n),this.props)),e&&C(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ae(this))},I.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ae(this))},I.prototype.render=N,T=[],le=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,de=function(e,t){return e.__v.__b-t.__v.__b},W.__r=0,fe=/(PointerCapture)$|Capture$/i,X=0,J=ue(!1),K=ue(!0),Fe=0;var A,b,te,xe,B=0,Pe=[],x=g,ke=x.__b,Ce=x.__r,Ne=x.diffed,Ee=x.__c,He=x.unmount,Te=x.__;function oe(e,t){x.__h&&x.__h(b,e,B||t),B=0;var n=b.__H||(b.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function V(e){return B=1,je(Ue,e)}function je(e,t,n){var o=oe(A++,2);if(o.t=e,!o.__c&&(o.__=[n?n(t):Ue(void 0,t),function(u){var d=o.__N?o.__N[0]:o.__[0],a=o.t(d,u);d!==a&&(o.__N=[a,o.__[1]],o.__c.setState({}))}],o.__c=b,!b.__f)){var i=function(u,d,a){if(!o.__c.__H)return!0;var l=o.__c.__H.__.filter(function(f){return!!f.__c});if(l.every(function(f){return!f.__N}))return!_||_.call(this,u,d,a);var r=o.__c.props!==u;return l.forEach(function(f){if(f.__N){var c=f.__[0];f.__=f.__N,f.__N=void 0,c!==f.__[0]&&(r=!0)}}),_&&_.call(this,u,d,a)||r};b.__f=!0;var _=b.shouldComponentUpdate,s=b.componentWillUpdate;b.componentWillUpdate=function(u,d,a){if(this.__e){var l=_;_=void 0,i(u,d,a),_=l}s&&s.call(this,u,d,a)},b.shouldComponentUpdate=i}return o.__N||o.__}function De(e,t){var n=oe(A++,3);!x.__s&&Me(n.__H,t)&&(n.__=e,n.u=t,b.__H.__h.push(n))}function re(e){return B=5,qe(function(){return{current:e}},[])}function qe(e,t){var n=oe(A++,7);return Me(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function Be(){for(var e;e=Pe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(q),e.__H.__h.forEach(ne),e.__H.__h=[]}catch(t){e.__H.__h=[],x.__e(t,e.__v)}}x.__b=function(e){b=null,ke&&ke(e)},x.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Te&&Te(e,t)},x.__r=function(e){Ce&&Ce(e),A=0;var t=(b=e.__c).__H;t&&(te===b?(t.__h=[],b.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.u=n.__N=void 0})):(t.__h.forEach(q),t.__h.forEach(ne),t.__h=[],A=0)),te=b},x.diffed=function(e){Ne&&Ne(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Pe.push(t)!==1&&xe===x.requestAnimationFrame||((xe=x.requestAnimationFrame)||Ve)(Be)),t.__H.__.forEach(function(n){n.u&&(n.__H=n.u),n.u=void 0})),te=b=null},x.__c=function(e,t){t.some(function(n){try{n.__h.forEach(q),n.__h=n.__h.filter(function(o){return!o.__||ne(o)})}catch(o){t.some(function(i){i.__h&&(i.__h=[])}),t=[],x.__e(o,n.__v)}}),Ee&&Ee(e,t)},x.unmount=function(e){He&&He(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(o){try{q(o)}catch(i){t=i}}),n.__H=void 0,t&&x.__e(t,n.__v))};var Se=typeof requestAnimationFrame=="function";function Ve(e){var t,n=function(){clearTimeout(o),Se&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,35);Se&&(t=requestAnimationFrame(n))}function q(e){var t=b,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),b=t}function ne(e){var t=b;e.__c=e.__(),b=t}function Me(e,t){return!e||e.length!==t.length||t.some(function(n,o){return n!==e[o]})}function Ue(e,t){return typeof t=="function"?t(e):t}function Ae({targetDate:e,title:t="Countdown",expiredMessage:n="Event has started!",onExpire:o=()=>{}}){let[i,_]=V(null),[s,u]=V(!1),[d,a]=V(null),l=re(null),r=re(!1),f=y=>{try{let v=new Date(y);if(isNaN(v.getTime()))throw new Error("Invalid date format");return v}catch(v){return a(`Invalid date: ${y}`),console.error("[CountdownTimer] Date parse error:",v),null}},c=y=>{let v=new Date().getTime(),p=y-v;return p<=0?{days:0,hours:0,minutes:0,seconds:0,expired:!0}:{days:Math.floor(p/(1e3*60*60*24)),hours:Math.floor(p%(1e3*60*60*24)/(1e3*60*60)),minutes:Math.floor(p%(1e3*60*60)/(1e3*60)),seconds:Math.floor(p%(1e3*60)/1e3),expired:!1}};if(De(()=>{if(!e){a("No target date provided");return}let y=f(e);if(!y)return;let v=y.getTime(),p=c(v);if(_(p),p.expired){u(!0),r.current||(r.current=!0,o());return}return l.current=setInterval(()=>{let h=c(v);_(h),h.expired&&!r.current&&(u(!0),r.current=!0,clearInterval(l.current),o())},1e3),()=>{l.current&&clearInterval(l.current)}},[e,o]),d)return m("div",{className:"countdown-error"},m("p",{className:"countdown-error-message"},"\u26A0\uFE0F ",d),m("p",{className:"countdown-error-hint"},'Please provide a valid date (e.g., "2026-12-31T23:59:59")'));if(!i)return m("div",{className:"countdown-loading"},m("p",null,"Loading countdown..."));if(s)return m("div",{className:"countdown-expired"},m("h3",{className:"countdown-title"},t),m("p",{className:"countdown-expired-message"},n));let w=y=>String(y).padStart(2,"0");return m("div",{className:"countdown-container"},t&&m("h3",{className:"countdown-title"},t),m("div",{className:"countdown-display"},m("div",{className:"countdown-unit"},m("div",{className:"countdown-value"},w(i.days)),m("div",{className:"countdown-label"},i.days===1?"Day":"Days")),m("div",{className:"countdown-separator"},":"),m("div",{className:"countdown-unit"},m("div",{className:"countdown-value"},w(i.hours)),m("div",{className:"countdown-label"},i.hours===1?"Hour":"Hours")),m("div",{className:"countdown-separator"},":"),m("div",{className:"countdown-unit"},m("div",{className:"countdown-value"},w(i.minutes)),m("div",{className:"countdown-label"},i.minutes===1?"Minute":"Minutes")),m("div",{className:"countdown-separator"},":"),m("div",{className:"countdown-unit"},m("div",{className:"countdown-value"},w(i.seconds)),m("div",{className:"countdown-label"},i.seconds===1?"Second":"Seconds"))))}var O=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render()}static get observedAttributes(){return["target-date","title","expired-message"]}attributeChangedCallback(t,n,o){n!==o&&this.render()}disconnectedCallback(){}render(){let t=this.getAttribute("target-date"),n=this.getAttribute("title")||"Countdown",o=this.getAttribute("expired-message")||"Time is up!",i=()=>{console.log("[CountdownTimerWidget] Countdown expired"),this.dispatchEvent(new CustomEvent("countdown-expired",{bubbles:!0,composed:!0}))},_=document.createElement("div");be(m(Ae,{targetDate:t,title:n,expiredMessage:o,onExpire:i}),_);let s=document.createElement("style");s.textContent=`
      /* Countdown Timer Widget Styles - Shadow DOM Scoped */
      * {
        box-sizing: border-box;
      }

      .countdown-container {
        font-family: var(--body-font-family, system-ui, -apple-system, sans-serif);
        text-align: center;
        padding: 2rem;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        color: #ffffff;
      }

      .countdown-title {
        margin: 0 0 1.5rem;
        font-size: 1.75rem;
        font-weight: 700;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .countdown-display {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.75rem;
        flex-wrap: wrap;
      }

      .countdown-unit {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.15);
        backdrop-filter: blur(10px);
        border-radius: 8px;
        padding: 1rem 1.25rem;
        min-width: 80px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      }

      .countdown-value {
        font-size: 2.5rem;
        font-weight: 700;
        line-height: 1;
        font-variant-numeric: tabular-nums;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      .countdown-label {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-top: 0.5rem;
        opacity: 0.9;
        font-weight: 600;
      }

      .countdown-separator {
        font-size: 2rem;
        font-weight: 700;
        opacity: 0.7;
        align-self: center;
        margin-top: -0.75rem;
      }

      /* Expired state */
      .countdown-expired {
        font-family: var(--body-font-family, system-ui, -apple-system, sans-serif);
        text-align: center;
        padding: 2rem;
        background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        border-radius: 12px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
        color: #ffffff;
      }

      .countdown-expired-message {
        font-size: 1.5rem;
        font-weight: 700;
        margin: 0;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }

      /* Error state */
      .countdown-error {
        font-family: var(--body-font-family, system-ui, -apple-system, sans-serif);
        padding: 1.5rem;
        background-color: #f8d7da;
        border: 1px solid #f5c6cb;
        border-radius: 8px;
        color: #721c24;
      }

      .countdown-error-message {
        margin: 0 0 0.5rem;
        font-weight: 600;
      }

      .countdown-error-hint {
        margin: 0;
        font-size: 0.875rem;
        color: #581019;
      }

      /* Loading state */
      .countdown-loading {
        font-family: var(--body-font-family, system-ui, -apple-system, sans-serif);
        padding: 2rem;
        text-align: center;
        color: #666;
      }

      /* Responsive */
      @media (max-width: 640px) {
        .countdown-container,
        .countdown-expired {
          padding: 1.5rem;
        }

        .countdown-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .countdown-unit {
          min-width: 70px;
          padding: 0.75rem 1rem;
        }

        .countdown-value {
          font-size: 2rem;
        }

        .countdown-label {
          font-size: 0.6875rem;
        }

        .countdown-separator {
          font-size: 1.5rem;
        }

        .countdown-expired-message {
          font-size: 1.25rem;
        }
      }

      /* Extra small screens */
      @media (max-width: 480px) {
        .countdown-display {
          gap: 0.5rem;
        }

        .countdown-unit {
          min-width: 60px;
          padding: 0.5rem 0.75rem;
        }

        .countdown-value {
          font-size: 1.75rem;
        }

        .countdown-separator {
          display: none;
        }
      }

      /* Dark mode - adjust for better contrast */
      @media (prefers-color-scheme: dark) {
        .countdown-error {
          background-color: #3d1f1f;
          border-color: #5c2929;
          color: #f8d7da;
        }

        .countdown-error-hint {
          color: #f5c6cb;
        }

        .countdown-loading {
          color: #b0b0b0;
        }
      }

      /* Reduced motion - disable animations */
      @media (prefers-reduced-motion: reduce) {
        .countdown-value {
          transition: none;
        }
      }

      /* Print - simplify */
      @media print {
        .countdown-container,
        .countdown-expired {
          background: #f9f9f9;
          color: #000;
          box-shadow: none;
          border: 1px solid #ddd;
        }

        .countdown-unit {
          background-color: #e9e9e9;
        }

        .countdown-value,
        .countdown-title,
        .countdown-expired-message {
          text-shadow: none;
        }
      }
    `,this.shadowRoot.innerHTML="",this.shadowRoot.appendChild(s),this.shadowRoot.appendChild(_)}};customElements.get("countdown-timer-widget")||customElements.define("countdown-timer-widget",O);var _t=O;})();

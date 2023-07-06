(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const au={databaseURL:"https://team-13-project-413be-default-rtdb.europe-west1.firebasedatabase.app/",apiKey:"AIzaSyCvkX26L4YS0lizKeJhcLE5fJdRdrZp4B8",authDomain:"team-13-project-413be.firebaseapp.com",projectId:"team-13-project-413be",storageBucket:"team-13-project-413be.appspot.com",messagingSenderId:"849787238311",appId:"1:849787238311:web:9cb6055cfc3ae801272882"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let s=t.charCodeAt(i);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},cu=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const s=t[n++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=t[n++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(c>>10)),e[i++]=String.fromCharCode(56320+(c&1023))}else{const r=t[n++],o=t[n++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ga={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<t.length;s+=3){const r=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,o||(p=64)),i.push(n[u],n[h],n[p],n[y])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(pa(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):cu(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<t.length;){const r=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,r==null||a==null||l==null||h==null)throw new lu;const p=r<<2|a>>4;if(i.push(p),l!==64){const y=a<<4&240|l>>2;if(i.push(y),h!==64){const _=l<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class lu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uu=function(t){const e=pa(t);return ga.encodeByteArray(e,!0)},si=function(t){return uu(t).replace(/\./g,"")},ma=function(t){try{return ga.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du=()=>hu().__FIREBASE_DEFAULTS__,fu=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},pu=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ma(t[1]);return e&&JSON.parse(e)},tr=()=>{try{return du()||fu()||pu()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ya=t=>{var e,n;return(n=(e=tr())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},gu=t=>{const e=ya(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]},va=()=>{var t;return(t=tr())===null||t===void 0?void 0:t.config},wa=t=>{var e;return(e=tr())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yu(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",s=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[si(JSON.stringify(n)),si(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function vu(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Y())}function wu(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Eu(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Iu(){const t=Y();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function _u(){try{return typeof indexedDB=="object"}catch{return!1}}function Tu(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="FirebaseError";class be extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Su,Object.setPrototypeOf(this,be.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,En.prototype.create)}}class En{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?Au(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new be(s,a,i)}}function Au(t,e){return t.replace(Cu,(n,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const Cu=/\{\$([^}]+)}/g;function ku(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ri(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const s of n){if(!i.includes(s))return!1;const r=t[s],o=e[s];if(eo(r)&&eo(o)){if(!ri(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!n.includes(s))return!1;return!0}function eo(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function zt(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,r]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(r)}}),e}function Kt(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function bu(t,e){const n=new Ru(t,e);return n.subscribe.bind(n)}class Ru{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let s;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");Du(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:i},s.next===void 0&&(s.next=rs),s.error===void 0&&(s.error=rs),s.complete===void 0&&(s.complete=rs);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Du(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function rs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){return t&&t._delegate?t._delegate:t}class Ze{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ke="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new mu;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Pu(e))try{this.getOrInitializeService({instanceIdentifier:Ke})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ke){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ke){return this.instances.has(e)}getOptions(e=Ke){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,n){var i;const s=this.normalizeInstanceIdentifier(n),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const s of i)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Ou(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ke){return this.component?this.component.multipleInstances?e:Ke:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ou(t){return t===Ke?void 0:t}function Pu(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Nu(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const Mu={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},xu=A.INFO,Uu={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},Fu=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),s=Uu[e];if(s)console[s](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nr{constructor(e){this.name=e,this._logLevel=xu,this._logHandler=Fu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Mu[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const Vu=(t,e)=>e.some(n=>t instanceof n);let to,no;function Bu(){return to||(to=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $u(){return no||(no=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ea=new WeakMap,Cs=new WeakMap,Ia=new WeakMap,os=new WeakMap,ir=new WeakMap;function ju(t){const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(xe(t.result)),s()},o=()=>{i(t.error),s()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ea.set(n,t)}).catch(()=>{}),ir.set(e,t),e}function Hu(t){if(Cs.has(t))return;const e=new Promise((n,i)=>{const s=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),s()},o=()=>{i(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Cs.set(t,e)}let ks={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Cs.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ia.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return xe(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function qu(t){ks=t(ks)}function zu(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(as(this),e,...n);return Ia.set(i,e.sort?e.sort():[e]),xe(i)}:$u().includes(t)?function(...e){return t.apply(as(this),e),xe(Ea.get(this))}:function(...e){return xe(t.apply(as(this),e))}}function Ku(t){return typeof t=="function"?zu(t):(t instanceof IDBTransaction&&Hu(t),Vu(t,Bu())?new Proxy(t,ks):t)}function xe(t){if(t instanceof IDBRequest)return ju(t);if(os.has(t))return os.get(t);const e=Ku(t);return e!==t&&(os.set(t,e),ir.set(e,t)),e}const as=t=>ir.get(t);function Wu(t,e,{blocked:n,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(t,e),a=xe(o);return i&&o.addEventListener("upgradeneeded",c=>{i(xe(o.result),c.oldVersion,c.newVersion,xe(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{r&&c.addEventListener("close",()=>r()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Gu=["get","getKey","getAll","getAllKeys","count"],Qu=["put","add","delete","clear"],cs=new Map;function io(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cs.get(e))return cs.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,s=Qu.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(s||Gu.includes(n)))return;const r=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return i&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return cs.set(e,r),r}qu(t=>({...t,get:(e,n,i)=>io(e,n)||t.get(e,n,i),has:(e,n)=>!!io(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ju(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function Ju(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bs="@firebase/app",so="0.9.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et=new nr("@firebase/app"),Yu="@firebase/app-compat",Zu="@firebase/analytics-compat",eh="@firebase/analytics",th="@firebase/app-check-compat",nh="@firebase/app-check",ih="@firebase/auth",sh="@firebase/auth-compat",rh="@firebase/database",oh="@firebase/database-compat",ah="@firebase/functions",ch="@firebase/functions-compat",lh="@firebase/installations",uh="@firebase/installations-compat",hh="@firebase/messaging",dh="@firebase/messaging-compat",fh="@firebase/performance",ph="@firebase/performance-compat",gh="@firebase/remote-config",mh="@firebase/remote-config-compat",yh="@firebase/storage",vh="@firebase/storage-compat",wh="@firebase/firestore",Eh="@firebase/firestore-compat",Ih="firebase",_h="9.23.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs="[DEFAULT]",Th={[bs]:"fire-core",[Yu]:"fire-core-compat",[eh]:"fire-analytics",[Zu]:"fire-analytics-compat",[nh]:"fire-app-check",[th]:"fire-app-check-compat",[ih]:"fire-auth",[sh]:"fire-auth-compat",[rh]:"fire-rtdb",[oh]:"fire-rtdb-compat",[ah]:"fire-fn",[ch]:"fire-fn-compat",[lh]:"fire-iid",[uh]:"fire-iid-compat",[hh]:"fire-fcm",[dh]:"fire-fcm-compat",[fh]:"fire-perf",[ph]:"fire-perf-compat",[gh]:"fire-rc",[mh]:"fire-rc-compat",[yh]:"fire-gcs",[vh]:"fire-gcs-compat",[wh]:"fire-fst",[Eh]:"fire-fst-compat","fire-js":"fire-js",[Ih]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oi=new Map,Ds=new Map;function Sh(t,e){try{t.container.addComponent(e)}catch(n){et.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function wt(t){const e=t.name;if(Ds.has(e))return et.debug(`There were multiple attempts to register component ${e}.`),!1;Ds.set(e,t);for(const n of oi.values())Sh(n,t);return!0}function sr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ah={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ue=new En("app","Firebase",Ah);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ue.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt=_h;function _a(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Rs,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ue.create("bad-app-name",{appName:String(s)});if(n||(n=va()),!n)throw Ue.create("no-options");const r=oi.get(s);if(r){if(ri(n,r.options)&&ri(i,r.config))return r;throw Ue.create("duplicate-app",{appName:s})}const o=new Lu(s);for(const c of Ds.values())o.addComponent(c);const a=new Ch(n,i,o);return oi.set(s,a),a}function Ta(t=Rs){const e=oi.get(t);if(!e&&t===Rs&&va())return _a();if(!e)throw Ue.create("no-app",{appName:t});return e}function Fe(t,e,n){var i;let s=(i=Th[t])!==null&&i!==void 0?i:t;n&&(s+=`-${n}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),et.warn(a.join(" "));return}wt(new Ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kh="firebase-heartbeat-database",bh=1,tn="firebase-heartbeat-store";let ls=null;function Sa(){return ls||(ls=Wu(kh,bh,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(tn)}}}).catch(t=>{throw Ue.create("idb-open",{originalErrorMessage:t.message})})),ls}async function Rh(t){try{return await(await Sa()).transaction(tn).objectStore(tn).get(Aa(t))}catch(e){if(e instanceof be)et.warn(e.message);else{const n=Ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});et.warn(n.message)}}}async function ro(t,e){try{const i=(await Sa()).transaction(tn,"readwrite");await i.objectStore(tn).put(e,Aa(t)),await i.done}catch(n){if(n instanceof be)et.warn(n.message);else{const i=Ue.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});et.warn(i.message)}}}function Aa(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh=1024,Nh=30*24*60*60*1e3;class Oh{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Lh(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=oo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Nh}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=oo(),{heartbeatsToSend:n,unsentEntries:i}=Ph(this._heartbeatsCache.heartbeats),s=si(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function oo(){return new Date().toISOString().substring(0,10)}function Ph(t,e=Dh){const n=[];let i=t.slice();for(const s of t){const r=n.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),ao(n)>e){r.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),ao(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Lh{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return _u()?Tu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Rh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ro(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function ao(t){return si(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mh(t){wt(new Ze("platform-logger",e=>new Xu(e),"PRIVATE")),wt(new Ze("heartbeat",e=>new Oh(e),"PRIVATE")),Fe(bs,so,t),Fe(bs,so,"esm2017"),Fe("fire-js","")}Mh("");var xh="firebase",Uh="9.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fe(xh,Uh,"app");function rr(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(t);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(t,i[s])&&(n[i[s]]=t[i[s]]);return n}function Ca(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Fh=Ca,ka=new En("auth","Firebase",Ca());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=new nr("@firebase/auth");function Vh(t,...e){ai.logLevel<=A.WARN&&ai.warn(`Auth (${Nt}): ${t}`,...e)}function Qn(t,...e){ai.logLevel<=A.ERROR&&ai.error(`Auth (${Nt}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(t,...e){throw or(t,...e)}function me(t,...e){return or(t,...e)}function Bh(t,e,n){const i=Object.assign(Object.assign({},Fh()),{[e]:n});return new En("auth","Firebase",i).create(e,{appName:t.name})}function or(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return ka.create(t,...e)}function v(t,e,...n){if(!t)throw or(e,...n)}function _e(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qn(e),new Error(e)}function Ae(t,e){t||_e(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function $h(){return co()==="http:"||co()==="https:"}function co(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&($h()||wu()||"connection"in navigator)?navigator.onLine:!0}function Hh(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ae(n>e,"Short delay should be less than long delay!"),this.isMobile=vu()||Eu()}get(){return jh()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ar(t,e){Ae(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;_e("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;_e("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;_e("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=new _n(3e4,6e4);function Ot(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ot(t,e,n,i,s={}){return Ra(t,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=In(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),ba.fetch()(Da(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},r))})}async function Ra(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},qh),e);try{const s=new Kh(t),r=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Vn(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Vn(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Vn(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw Vn(t,"user-disabled",o);const u=i[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Bh(t,u,l);he(t,u)}}catch(s){if(s instanceof be)throw s;he(t,"network-request-failed",{message:String(s)})}}async function Tn(t,e,n,i,s={}){const r=await ot(t,e,n,i,s);return"mfaPendingCredential"in r&&he(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Da(t,e,n,i){const s=`${e}${n}?${i}`;return t.config.emulator?ar(t.config,s):`${t.config.apiScheme}://${s}`}class Kh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(me(this.auth,"network-request-failed")),zh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Vn(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const s=me(t,e,i);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wh(t,e){return ot(t,"POST","/v1/accounts:delete",e)}async function Gh(t,e){return ot(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Qh(t,e=!1){const n=Z(t),i=await n.getIdToken(e),s=cr(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Qt(us(s.auth_time)),issuedAtTime:Qt(us(s.iat)),expirationTime:Qt(us(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function us(t){return Number(t)*1e3}function cr(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Qn("JWT malformed, contained fewer than 3 sections"),null;try{const s=ma(n);return s?JSON.parse(s):(Qn("Failed to decode base64 JWT payload"),null)}catch(s){return Qn("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Xh(t){const e=cr(t);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Et(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof be&&Jh(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function Jh({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qt(this.lastLoginAt),this.creationTime=Qt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t){var e;const n=t.auth,i=await t.getIdToken(),s=await Et(t,Gh(n,{idToken:i}));v(s==null?void 0:s.users.length,n,"internal-error");const r=s.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?td(r.providerUserInfo):[],a=ed(t.providerData,o),c=t.isAnonymous,l=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Na(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function Zh(t){const e=Z(t);await ci(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ed(t,e){return[...t.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function td(t){return t.map(e=>{var{providerId:n}=e,i=rr(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nd(t,e){const n=await Ra(t,{},async()=>{const i=In({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=t.config,o=Da(t,s,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ba.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Xh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:s,expiresIn:r}=await nd(e,n);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:s,expirationTime:r}=n,o=new nn;return i&&(v(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(v(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(v(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new nn,this.toJSON())}_performRefresh(){return _e("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(t,e){v(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Xe{constructor(e){var{uid:n,auth:i,stsTokenManager:s}=e,r=rr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Yh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Na(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Et(this,this.stsTokenManager.getToken(this.auth,e));return v(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Qh(this,e)}reload(){return Zh(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Xe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ci(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Et(this,Wh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,s,r,o,a,c,l,u;const h=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,y=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,ne=(l=n.createdAt)!==null&&l!==void 0?l:void 0,se=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:Re,emailVerified:de,isAnonymous:$t,providerData:ze,stsTokenManager:jt}=n;v(Re&&jt,e,"internal-error");const ss=nn.fromJSON(this.name,jt);v(typeof Re=="string",e,"internal-error"),De(h,e.name),De(p,e.name),v(typeof de=="boolean",e,"internal-error"),v(typeof $t=="boolean",e,"internal-error"),De(y,e.name),De(_,e.name),De(b,e.name),De(C,e.name),De(ne,e.name),De(se,e.name);const ct=new Xe({uid:Re,auth:e,email:p,emailVerified:de,displayName:h,isAnonymous:$t,photoURL:_,phoneNumber:y,tenantId:b,stsTokenManager:ss,createdAt:ne,lastLoginAt:se});return ze&&Array.isArray(ze)&&(ct.providerData=ze.map(ou=>Object.assign({},ou))),C&&(ct._redirectEventId=C),ct}static async _fromIdTokenResponse(e,n,i=!1){const s=new nn;s.updateFromServerResponse(n);const r=new Xe({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await ci(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo=new Map;function Te(t){Ae(t instanceof Function,"Expected a class definition");let e=lo.get(t);return e?(Ae(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,lo.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Oa.type="NONE";const uo=Oa;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t,e,n){return`firebase:${t}:${e}:${n}`}class ft{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Xn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Xn("persistence",s.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Xe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new ft(Te(uo),e,i);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let r=s[0]||Te(uo);const o=Xn(i,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Xe._fromJSON(e,u);l!==r&&(a=h),r=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!r._shouldAllowMigration||!c.length?new ft(r,e,i):(r=c[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==r)try{await l._remove(o)}catch{}})),new ft(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ho(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ma(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pa(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ua(e))return"Blackberry";if(Fa(e))return"Webos";if(lr(e))return"Safari";if((e.includes("chrome/")||La(e))&&!e.includes("edge/"))return"Chrome";if(xa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Pa(t=Y()){return/firefox\//i.test(t)}function lr(t=Y()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function La(t=Y()){return/crios\//i.test(t)}function Ma(t=Y()){return/iemobile/i.test(t)}function xa(t=Y()){return/android/i.test(t)}function Ua(t=Y()){return/blackberry/i.test(t)}function Fa(t=Y()){return/webos/i.test(t)}function Ri(t=Y()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function id(t=Y()){var e;return Ri(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function sd(){return Iu()&&document.documentMode===10}function Va(t=Y()){return Ri(t)||xa(t)||Fa(t)||Ua(t)||/windows phone/i.test(t)||Ma(t)}function rd(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t,e=[]){let n;switch(t){case"Browser":n=ho(Y());break;case"Worker":n=`${ho(Y())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Nt}/${i}`}async function $a(t,e){return ot(t,"GET","/v2/recaptchaConfig",Ot(t,e))}function fo(t){return t!==void 0&&t.enterprise!==void 0}class ja{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Ha(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=s=>{const r=me("internal-error");r.customData=s,n(r)},i.type="text/javascript",i.charset="UTF-8",od().appendChild(i)})}function ad(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const cd="https://www.google.com/recaptcha/enterprise.js?render=",ld="recaptcha-enterprise",ud="NO_RECAPTCHA";class qa{constructor(e){this.type=ld,this.auth=Pt(e)}async verify(e="verify",n=!1){async function i(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,a)=>{$a(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new ja(c);return r.tenantId==null?r._agentRecaptchaConfig=l:r._tenantRecaptchaConfigs[r.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(r,o,a){const c=window.grecaptcha;fo(c)?c.enterprise.ready(()=>{c.enterprise.execute(r,{action:e}).then(l=>{o(l)}).catch(()=>{o(ud)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{i(this.auth).then(a=>{if(!n&&fo(window.grecaptcha))s(a,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Ha(cd+a).then(()=>{s(a,r,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function li(t,e,n,i=!1){const s=new qa(t);let r;try{r=await s.verify(n)}catch{r=await s.verify(n,!0)}const o=Object.assign({},e);return i?Object.assign(o,{captchaResp:r}):Object.assign(o,{captchaResponse:r}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=r=>new Promise((o,a)=>{try{const c=e(r);o(c)}catch(c){a(c)}});i.onAbort=n,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dd{constructor(e,n,i,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new po(this),this.idTokenSubscription=new po(this),this.beforeStateQueue=new hd(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ka,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Te(n)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await ft.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ci(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Hh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Z(e):null;return n&&v(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Te(e))})}async initializeRecaptchaConfig(){const e=await $a(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new ja(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new qa(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new En("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Te(e)||this._popupRedirectResolver;v(n,this,"argument-error"),this.redirectPersistenceManager=await ft.create(this,[Te(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,s){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,i,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ba(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Vh(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Pt(t){return Z(t)}class po{constructor(e){this.auth=e,this.observer=null,this.addObserver=bu(n=>this.observer=n)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fd(t,e){const n=sr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),r=n.getOptions();if(ri(r,e??{}))return s;he(s,"already-initialized")}return n.initialize({options:e})}function pd(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(Te);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function gd(t,e,n){const i=Pt(t);v(i._canInitEmulator,i,"emulator-config-failed"),v(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),r=za(e),{host:o,port:a}=md(e),c=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||yd()}function za(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function md(t){const e=za(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:go(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:go(o)}}}function go(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function yd(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return _e("not implemented")}_getIdTokenResponse(e){return _e("not implemented")}_linkToIdToken(e,n){return _e("not implemented")}_getReauthenticationResolver(e){return _e("not implemented")}}async function vd(t,e){return ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hs(t,e){return Tn(t,"POST","/v1/accounts:signInWithPassword",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wd(t,e){return Tn(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}async function Ed(t,e){return Tn(t,"POST","/v1/accounts:signInWithEmailLink",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends ur{constructor(e,n,i,s=null){super("password",i),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new sn(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new sn(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const i={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const s=await li(e,i,"signInWithPassword");return hs(e,s)}else return hs(e,i).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const r=await li(e,i,"signInWithPassword");return hs(e,r)}else return Promise.reject(s)});case"emailLink":return wd(e,{email:this._email,oobCode:this._password});default:he(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return vd(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ed(e,{idToken:n,email:this._email,oobCode:this._password});default:he(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pt(t,e){return Tn(t,"POST","/v1/accounts:signInWithIdp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Id="http://localhost";class tt extends ur{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):he("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=n,r=rr(n,["providerId","signInMethod"]);if(!i||!s)return null;const o=new tt(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return pt(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,pt(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,pt(e,n)}buildRequest(){const e={requestUri:Id,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=In(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _d(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Td(t){const e=zt(Kt(t)).link,n=e?zt(Kt(e)).deep_link_id:null,i=zt(Kt(t)).deep_link_id;return(i?zt(Kt(i)).link:null)||i||n||e||t}class hr{constructor(e){var n,i,s,r,o,a;const c=zt(Kt(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(i=c.oobCode)!==null&&i!==void 0?i:null,h=_d((s=c.mode)!==null&&s!==void 0?s:null);v(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(r=c.continueUrl)!==null&&r!==void 0?r:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Td(e);try{return new hr(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(){this.providerId=Lt.PROVIDER_ID}static credential(e,n){return sn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=hr.parseLink(n);return v(i,"argument-error"),sn._fromEmailAndCode(e,i.code,i.tenantId)}}Lt.PROVIDER_ID="password";Lt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Lt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ka{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Ka{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne extends Sn{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:Ne.PROVIDER_ID,signInMethod:Ne.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ne.credentialFromTaggedObject(e)}static credentialFromError(e){return Ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ne.credential(e.oauthAccessToken)}catch{return null}}}Ne.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ne.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Sn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return tt._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Oe.credential(n,i)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe extends Sn{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:Pe.PROVIDER_ID,signInMethod:Pe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Pe.credentialFromTaggedObject(e)}static credentialFromError(e){return Pe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Pe.credential(e.oauthAccessToken)}catch{return null}}}Pe.GITHUB_SIGN_IN_METHOD="github.com";Pe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends Sn{constructor(){super("twitter.com")}static credential(e,n){return tt._fromParams({providerId:Le.PROVIDER_ID,signInMethod:Le.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Le.credentialFromTaggedObject(e)}static credentialFromError(e){return Le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Le.credential(n,i)}catch{return null}}}Le.TWITTER_SIGN_IN_METHOD="twitter.com";Le.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ds(t,e){return Tn(t,"POST","/v1/accounts:signUp",Ot(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,s=!1){const r=await Xe._fromIdTokenResponse(e,i,s),o=mo(i);return new nt({user:r,providerId:o,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const s=mo(i);return new nt({user:e,providerId:s,_tokenResponse:i,operationType:n})}}function mo(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui extends be{constructor(e,n,i,s){var r;super(n.code,n.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,ui.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,s){return new ui(e,n,i,s)}}function Wa(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?ui._fromErrorAndOperation(t,r,e,i):r})}async function Sd(t,e,n=!1){const i=await Et(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return nt._forOperation(t,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ad(t,e,n=!1){const{auth:i}=t,s="reauthenticate";try{const r=await Et(t,Wa(i,s,e,t),n);v(r.idToken,i,"internal-error");const o=cr(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(t.uid===a,i,"user-mismatch"),nt._forOperation(t,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&he(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ga(t,e,n=!1){const i="signIn",s=await Wa(t,i,e),r=await nt._fromIdTokenResponse(t,i,s);return n||await t._updateCurrentUser(r.user),r}async function Cd(t,e){return Ga(Pt(t),e)}async function kd(t,e,n){var i;const s=Pt(t),r={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((i=s._getRecaptchaConfig())===null||i===void 0)&&i.emailPasswordEnabled){const l=await li(s,r,"signUpPassword");o=ds(s,l)}else o=ds(s,r).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await li(s,r,"signUpPassword");return ds(s,u)}else return Promise.reject(l)});const a=await o.catch(l=>Promise.reject(l)),c=await nt._fromIdTokenResponse(s,"signIn",a);return await s._updateCurrentUser(c.user),c}function bd(t,e,n){return Cd(Z(t),Lt.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rd(t,e){return ot(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dd(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=Z(t),r={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Et(i,Rd(i.auth,r));i.displayName=o.displayName||null,i.photoURL=o.photoUrl||null;const a=i.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=i.displayName,a.photoURL=i.photoURL),await i._updateTokensIfNecessary(o)}function Nd(t,e,n,i){return Z(t).onIdTokenChanged(e,n,i)}function Od(t,e,n){return Z(t).beforeAuthStateChanged(e,n)}function Pd(t,e,n,i){return Z(t).onAuthStateChanged(e,n,i)}const hi="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(hi,"1"),this.storage.removeItem(hi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ld(){const t=Y();return lr(t)||Ri(t)}const Md=1e3,xd=10;class Xa extends Qa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ld()&&rd(),this.fallbackToPolling=Va(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),s=this.localCache[n];i!==s&&e(n,s,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(i);!n&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);sd()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,xd):s()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},Md)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xa.type="LOCAL";const Ud=Xa;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja extends Qa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ja.type="SESSION";const Ya=Ja;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fd(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const i=new Di(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:s,data:r}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,r)),c=await Fd(a);n.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Di.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,c)=>{const l=dr("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const p=h;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(p.data.response);break;default:clearTimeout(u),clearTimeout(r),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(){return window}function Bd(t){ye().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(){return typeof ye().WorkerGlobalScope<"u"&&typeof ye().importScripts=="function"}async function $d(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function jd(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Hd(){return Za()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec="firebaseLocalStorageDb",qd=1,di="firebaseLocalStorage",tc="fbase_key";class An{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ni(t,e){return t.transaction([di],e?"readwrite":"readonly").objectStore(di)}function zd(){const t=indexedDB.deleteDatabase(ec);return new An(t).toPromise()}function Os(){const t=indexedDB.open(ec,qd);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(di,{keyPath:tc})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(di)?e(i):(i.close(),await zd(),e(await Os()))})})}async function yo(t,e,n){const i=Ni(t,!0).put({[tc]:e,value:n});return new An(i).toPromise()}async function Kd(t,e){const n=Ni(t,!1).get(e),i=await new An(n).toPromise();return i===void 0?null:i.value}function vo(t,e){const n=Ni(t,!0).delete(e);return new An(n).toPromise()}const Wd=800,Gd=3;class nc{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Os(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>Gd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Za()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Di._getInstance(Hd()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $d(),!this.activeServiceWorker)return;this.sender=new Vd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||jd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Os();return await yo(e,hi,"1"),await vo(e,hi),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>yo(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>Kd(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vo(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ni(s,!1).getAll();return new An(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Wd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}nc.type="LOCAL";const Qd=nc;new _n(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xd(t,e){return e?Te(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends ur{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return pt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return pt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return pt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Jd(t){return Ga(t.auth,new fr(t),t.bypassAuthState)}function Yd(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Ad(n,new fr(t),t.bypassAuthState)}async function Zd(t){const{auth:e,user:n}=t;return v(n,e,"internal-error"),Sd(n,new fr(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{constructor(e,n,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Jd;case"linkViaPopup":case"linkViaRedirect":return Zd;case"reauthViaPopup":case"reauthViaRedirect":return Yd;default:he(this.auth,"internal-error")}}resolve(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ae(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new _n(2e3,1e4);class ht extends ic{constructor(e,n,i,s,r){super(e,n,s,r),this.provider=i,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){Ae(this.filter.length===1,"Popup operations only handle one event");const e=dr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(me(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,ef.get())};e()}}ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tf="pendingRedirect",Jn=new Map;class nf extends ic{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Jn.get(this.auth._key());if(!e){try{const i=await sf(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Jn.set(this.auth._key(),e)}return this.bypassAuthState||Jn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sf(t,e){const n=af(e),i=of(t);if(!await i._isAvailable())return!1;const s=await i._get(n)==="true";return await i._remove(n),s}function rf(t,e){Jn.set(t._key(),e)}function of(t){return Te(t._redirectPersistence)}function af(t){return Xn(tf,t.config.apiKey,t.name)}async function cf(t,e,n=!1){const i=Pt(t),s=Xd(i,e),o=await new nf(i,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf=10*60*1e3;class uf{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hf(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!sc(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(me(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lf&&this.cachedEventUids.clear(),this.cachedEventUids.has(wo(e))}saveEventToCache(e){this.cachedEventUids.add(wo(e)),this.lastProcessedEventTime=Date.now()}}function wo(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function sc({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hf(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return sc(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function df(t,e={}){return ot(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pf=/^https?/;async function gf(t){if(t.config.emulator)return;const{authorizedDomains:e}=await df(t);for(const n of e)try{if(mf(n))return}catch{}he(t,"unauthorized-domain")}function mf(t){const e=Ns(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===i}if(!pf.test(n))return!1;if(ff.test(t))return i===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=new _n(3e4,6e4);function Eo(){const t=ye().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function vf(t){return new Promise((e,n)=>{var i,s,r;function o(){Eo(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Eo(),n(me(t,"network-request-failed"))},timeout:yf.get()})}if(!((s=(i=ye().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=ye().gapi)===null||r===void 0)&&r.load)o();else{const a=ad("iframefcb");return ye()[a]=()=>{gapi.load?o():n(me(t,"network-request-failed"))},Ha(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Yn=null,e})}let Yn=null;function wf(t){return Yn=Yn||vf(t),Yn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ef=new _n(5e3,15e3),If="__/auth/iframe",_f="emulator/auth/iframe",Tf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Sf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Af(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ar(e,_f):`https://${t.config.authDomain}/${If}`,i={apiKey:e.apiKey,appName:t.name,v:Nt},s=Sf.get(t.config.apiHost);s&&(i.eid=s);const r=t._getFrameworks();return r.length&&(i.fw=r.join(",")),`${n}?${In(i).slice(1)}`}async function Cf(t){const e=await wf(t),n=ye().gapi;return v(n,t,"internal-error"),e.open({where:document.body,url:Af(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=me(t,"network-request-failed"),a=ye().setTimeout(()=>{r(o)},Ef.get());function c(){ye().clearTimeout(a),s(i)}i.ping(c).then(c,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bf=500,Rf=600,Df="_blank",Nf="http://localhost";class Io{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Of(t,e,n,i=bf,s=Rf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const c=Object.assign(Object.assign({},kf),{width:i.toString(),height:s.toString(),top:r,left:o}),l=Y().toLowerCase();n&&(a=La(l)?Df:n),Pa(l)&&(e=e||Nf,c.scrollbars="yes");const u=Object.entries(c).reduce((p,[y,_])=>`${p}${y}=${_},`,"");if(id(l)&&a!=="_self")return Pf(e||"",a),new Io(null);const h=window.open(e||"",a,u);v(h,t,"popup-blocked");try{h.focus()}catch{}return new Io(h)}function Pf(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lf="__/auth/handler",Mf="emulator/auth/handler",xf=encodeURIComponent("fac");async function _o(t,e,n,i,s,r){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Nt,eventId:s};if(e instanceof Ka){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ku(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof Sn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${xf}=${encodeURIComponent(c)}`:"";return`${Uf(t)}?${In(a).slice(1)}${l}`}function Uf({config:t}){return t.emulator?ar(t,Mf):`https://${t.authDomain}/${Lf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="webStorageSupport";class Ff{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ya,this._completeRedirectFn=cf,this._overrideRedirectResult=rf}async _openPopup(e,n,i,s){var r;Ae((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await _o(e,n,i,Ns(),s);return Of(e,o,dr())}async _openRedirect(e,n,i,s){await this._originValidation(e);const r=await _o(e,n,i,Ns(),s);return Bd(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:r}=this.eventManagers[n];return s?Promise.resolve(s):(Ae(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await Cf(e),i=new uf(e);return n.register("authEvent",s=>(v(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fs,{type:fs},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[fs];o!==void 0&&n(!!o),he(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gf(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Va()||lr()||Ri()}}const Vf=Ff;var To="@firebase/auth",So="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bf{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $f(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jf(t){wt(new Ze("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;v(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ba(t)},l=new dd(i,s,r,c);return pd(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),wt(new Ze("auth-internal",e=>{const n=Pt(e.getProvider("auth").getImmediate());return(i=>new Bf(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Fe(To,So,$f(t)),Fe(To,So,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hf=5*60,qf=wa("authIdTokenMaxAge")||Hf;let Ao=null;const zf=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>qf)return;const s=n==null?void 0:n.token;Ao!==s&&(Ao=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Kf(t=Ta()){const e=sr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=fd(t,{popupRedirectResolver:Vf,persistence:[Qd,Ud,Ya]}),i=wa("authTokenSyncURL");if(i){const r=zf(i);Od(n,r,()=>r(n.currentUser)),Nd(n,o=>r(o))}const s=ya("auth");return s&&gd(n,`http://${s}`),n}jf("Browser");var Wf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},g,pr=pr||{},E=Wf||self;function Oi(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Cn(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Gf(t){return Object.prototype.hasOwnProperty.call(t,ps)&&t[ps]||(t[ps]=++Qf)}var ps="closure_uid_"+(1e9*Math.random()>>>0),Qf=0;function Xf(t,e,n){return t.call.apply(t.bind,arguments)}function Jf(t,e,n){if(!t)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,i),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function X(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?X=Xf:X=Jf,X.apply(null,arguments)}function Bn(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var i=n.slice();return i.push.apply(i,arguments),t.apply(this,i)}}function $(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(i,s,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(i,o)}}function je(){this.s=this.s,this.o=this.o}var Yf=0;je.prototype.s=!1;je.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Yf!=0)&&Gf(this)};je.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const rc=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gr(t){const e=t.length;if(0<e){const n=Array(e);for(let i=0;i<e;i++)n[i]=t[i];return n}return[]}function Co(t,e){for(let n=1;n<arguments.length;n++){const i=arguments[n];if(Oi(i)){const s=t.length||0,r=i.length||0;t.length=s+r;for(let o=0;o<r;o++)t[s+o]=i[o]}else t.push(i)}}function J(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}J.prototype.h=function(){this.defaultPrevented=!0};var Zf=function(){if(!E.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{E.addEventListener("test",()=>{},e),E.removeEventListener("test",()=>{},e)}catch{}return t}();function rn(t){return/^[\s\xa0]*$/.test(t)}function Pi(){var t=E.navigator;return t&&(t=t.userAgent)?t:""}function fe(t){return Pi().indexOf(t)!=-1}function mr(t){return mr[" "](t),t}mr[" "]=function(){};function ep(t,e){var n=Kp;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var tp=fe("Opera"),It=fe("Trident")||fe("MSIE"),oc=fe("Edge"),Ps=oc||It,ac=fe("Gecko")&&!(Pi().toLowerCase().indexOf("webkit")!=-1&&!fe("Edge"))&&!(fe("Trident")||fe("MSIE"))&&!fe("Edge"),np=Pi().toLowerCase().indexOf("webkit")!=-1&&!fe("Edge");function cc(){var t=E.document;return t?t.documentMode:void 0}var Ls;e:{var gs="",ms=function(){var t=Pi();if(ac)return/rv:([^\);]+)(\)|;)/.exec(t);if(oc)return/Edge\/([\d\.]+)/.exec(t);if(It)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(np)return/WebKit\/(\S+)/.exec(t);if(tp)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ms&&(gs=ms?ms[1]:""),It){var ys=cc();if(ys!=null&&ys>parseFloat(gs)){Ls=String(ys);break e}}Ls=gs}var Ms;if(E.document&&It){var ko=cc();Ms=ko||parseInt(Ls,10)||void 0}else Ms=void 0;var ip=Ms;function on(t,e){if(J.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(ac){e:{try{mr(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,i?(this.clientX=i.clientX!==void 0?i.clientX:i.pageX,this.clientY=i.clientY!==void 0?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:sp[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&on.$.h.call(this)}}$(on,J);var sp={2:"touch",3:"pen",4:"mouse"};on.prototype.h=function(){on.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var kn="closure_listenable_"+(1e6*Math.random()|0),rp=0;function op(t,e,n,i,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!i,this.la=s,this.key=++rp,this.fa=this.ia=!1}function Li(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function yr(t,e,n){for(const i in t)e.call(n,t[i],i,t)}function ap(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function lc(t){const e={};for(const n in t)e[n]=t[n];return e}const bo="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function uc(t,e){let n,i;for(let s=1;s<arguments.length;s++){i=arguments[s];for(n in i)t[n]=i[n];for(let r=0;r<bo.length;r++)n=bo[r],Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}}function Mi(t){this.src=t,this.g={},this.h=0}Mi.prototype.add=function(t,e,n,i,s){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=Us(t,e,i,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new op(e,this.src,r,!!i,s),e.ia=n,t.push(e)),e};function xs(t,e){var n=e.type;if(n in t.g){var i=t.g[n],s=rc(i,e),r;(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(Li(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Us(t,e,n,i){for(var s=0;s<t.length;++s){var r=t[s];if(!r.fa&&r.listener==e&&r.capture==!!n&&r.la==i)return s}return-1}var vr="closure_lm_"+(1e6*Math.random()|0),vs={};function hc(t,e,n,i,s){if(i&&i.once)return fc(t,e,n,i,s);if(Array.isArray(e)){for(var r=0;r<e.length;r++)hc(t,e[r],n,i,s);return null}return n=Ir(n),t&&t[kn]?t.O(e,n,Cn(i)?!!i.capture:!!i,s):dc(t,e,n,!1,i,s)}function dc(t,e,n,i,s,r){if(!e)throw Error("Invalid event type");var o=Cn(s)?!!s.capture:!!s,a=Er(t);if(a||(t[vr]=a=new Mi(t)),n=a.add(e,n,i,o,r),n.proxy)return n;if(i=cp(),n.proxy=i,i.src=t,i.listener=n,t.addEventListener)Zf||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),i,s);else if(t.attachEvent)t.attachEvent(gc(e.toString()),i);else if(t.addListener&&t.removeListener)t.addListener(i);else throw Error("addEventListener and attachEvent are unavailable.");return n}function cp(){function t(n){return e.call(t.src,t.listener,n)}const e=lp;return t}function fc(t,e,n,i,s){if(Array.isArray(e)){for(var r=0;r<e.length;r++)fc(t,e[r],n,i,s);return null}return n=Ir(n),t&&t[kn]?t.P(e,n,Cn(i)?!!i.capture:!!i,s):dc(t,e,n,!0,i,s)}function pc(t,e,n,i,s){if(Array.isArray(e))for(var r=0;r<e.length;r++)pc(t,e[r],n,i,s);else i=Cn(i)?!!i.capture:!!i,n=Ir(n),t&&t[kn]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=Us(r,n,i,s),-1<n&&(Li(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=Er(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Us(e,n,i,s)),(n=-1<t?e[t]:null)&&wr(n))}function wr(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[kn])xs(e.i,t);else{var n=t.type,i=t.proxy;e.removeEventListener?e.removeEventListener(n,i,t.capture):e.detachEvent?e.detachEvent(gc(n),i):e.addListener&&e.removeListener&&e.removeListener(i),(n=Er(e))?(xs(n,t),n.h==0&&(n.src=null,e[vr]=null)):Li(t)}}}function gc(t){return t in vs?vs[t]:vs[t]="on"+t}function lp(t,e){if(t.fa)t=!0;else{e=new on(e,this);var n=t.listener,i=t.la||t.src;t.ia&&wr(t),t=n.call(i,e)}return t}function Er(t){return t=t[vr],t instanceof Mi?t:null}var ws="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ir(t){return typeof t=="function"?t:(t[ws]||(t[ws]=function(e){return t.handleEvent(e)}),t[ws])}function V(){je.call(this),this.i=new Mi(this),this.S=this,this.J=null}$(V,je);V.prototype[kn]=!0;V.prototype.removeEventListener=function(t,e,n,i){pc(this,t,e,n,i)};function z(t,e){var n,i=t.J;if(i)for(n=[];i;i=i.J)n.push(i);if(t=t.S,i=e.type||e,typeof e=="string")e=new J(e,t);else if(e instanceof J)e.target=e.target||t;else{var s=e;e=new J(i,t),uc(e,s)}if(s=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];s=$n(o,i,!0,e)&&s}if(o=e.g=t,s=$n(o,i,!0,e)&&s,s=$n(o,i,!1,e)&&s,n)for(r=0;r<n.length;r++)o=e.g=n[r],s=$n(o,i,!1,e)&&s}V.prototype.N=function(){if(V.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)Li(n[i]);delete t.g[e],t.h--}}this.J=null};V.prototype.O=function(t,e,n,i){return this.i.add(String(t),e,!1,n,i)};V.prototype.P=function(t,e,n,i){return this.i.add(String(t),e,!0,n,i)};function $n(t,e,n,i){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&xs(t.i,o),s=a.call(c,i)!==!1&&s}}return s&&!i.defaultPrevented}var _r=E.JSON.stringify;class up{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function hp(){var t=Tr;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class dp{constructor(){this.h=this.g=null}add(e,n){const i=mc.get();i.set(e,n),this.h?this.h.next=i:this.g=i,this.h=i}}var mc=new up(()=>new fp,t=>t.reset());class fp{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function pp(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function gp(t){E.setTimeout(()=>{throw t},0)}let an,cn=!1,Tr=new dp,yc=()=>{const t=E.Promise.resolve(void 0);an=()=>{t.then(mp)}};var mp=()=>{for(var t;t=hp();){try{t.h.call(t.g)}catch(n){gp(n)}var e=mc;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}cn=!1};function xi(t,e){V.call(this),this.h=t||1,this.g=e||E,this.j=X(this.qb,this),this.l=Date.now()}$(xi,V);g=xi.prototype;g.ga=!1;g.T=null;g.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),z(this,"tick"),this.ga&&(Sr(this),this.start()))}};g.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Sr(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}g.N=function(){xi.$.N.call(this),Sr(this),delete this.g};function Ar(t,e,n){if(typeof t=="function")n&&(t=X(t,n));else if(t&&typeof t.handleEvent=="function")t=X(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:E.setTimeout(t,e||0)}function vc(t){t.g=Ar(()=>{t.g=null,t.i&&(t.i=!1,vc(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yp extends je{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:vc(this)}N(){super.N(),this.g&&(E.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ln(t){je.call(this),this.h=t,this.g={}}$(ln,je);var Ro=[];function wc(t,e,n,i){Array.isArray(n)||(n&&(Ro[0]=n.toString()),n=Ro);for(var s=0;s<n.length;s++){var r=hc(e,n[s],i||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function Ec(t){yr(t.g,function(e,n){this.g.hasOwnProperty(n)&&wr(e)},t),t.g={}}ln.prototype.N=function(){ln.$.N.call(this),Ec(this)};ln.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ui(){this.g=!0}Ui.prototype.Ea=function(){this.g=!1};function vp(t,e,n,i,s,r){t.info(function(){if(t.g)if(r)for(var o="",a=r.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+i+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function wp(t,e,n,i,s,r,o){t.info(function(){return"XMLHTTP RESP ("+i+") [ attempt "+s+"]: "+e+`
`+n+`
`+r+" "+o})}function dt(t,e,n,i){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+Ip(t,n)+(i?" "+i:"")})}function Ep(t,e){t.info(function(){return"TIMEOUT: "+e})}Ui.prototype.info=function(){};function Ip(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var i=n[t];if(!(2>i.length)){var s=i[1];if(Array.isArray(s)&&!(1>s.length)){var r=s[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return _r(n)}catch{return e}}var at={},Do=null;function Fi(){return Do=Do||new V}at.Ta="serverreachability";function Ic(t){J.call(this,at.Ta,t)}$(Ic,J);function un(t){const e=Fi();z(e,new Ic(e))}at.STAT_EVENT="statevent";function _c(t,e){J.call(this,at.STAT_EVENT,t),this.stat=e}$(_c,J);function ee(t){const e=Fi();z(e,new _c(e,t))}at.Ua="timingevent";function Tc(t,e){J.call(this,at.Ua,t),this.size=e}$(Tc,J);function bn(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return E.setTimeout(function(){t()},e)}var Vi={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Sc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Cr(){}Cr.prototype.h=null;function No(t){return t.h||(t.h=t.i())}function Ac(){}var Rn={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function kr(){J.call(this,"d")}$(kr,J);function br(){J.call(this,"c")}$(br,J);var Fs;function Bi(){}$(Bi,Cr);Bi.prototype.g=function(){return new XMLHttpRequest};Bi.prototype.i=function(){return{}};Fs=new Bi;function Dn(t,e,n,i){this.l=t,this.j=e,this.m=n,this.W=i||1,this.U=new ln(this),this.P=_p,t=Ps?125:void 0,this.V=new xi(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Cc}function Cc(){this.i=null,this.g="",this.h=!1}var _p=45e3,Vs={},fi={};g=Dn.prototype;g.setTimeout=function(t){this.P=t};function Bs(t,e,n){t.L=1,t.v=ji(Ce(e)),t.s=n,t.S=!0,kc(t,null)}function kc(t,e){t.G=Date.now(),Nn(t),t.A=Ce(t.v);var n=t.A,i=t.W;Array.isArray(i)||(i=[String(i)]),Mc(n.i,"t",i),t.C=0,n=t.l.J,t.h=new Cc,t.g=nl(t.l,n?e:null,!t.s),0<t.O&&(t.M=new yp(X(t.Pa,t,t.g),t.O)),wc(t.U,t.g,"readystatechange",t.nb),e=t.I?lc(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),un(),vp(t.j,t.u,t.A,t.m,t.W,t.s)}g.nb=function(t){t=t.target;const e=this.M;e&&pe(t)==3?e.l():this.Pa(t)};g.Pa=function(t){try{if(t==this.g)e:{const u=pe(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Ps||this.g&&(this.h.h||this.g.ja()||Mo(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?un(3):un(2)),$i(this);var n=this.g.da();this.ca=n;t:if(bc(this)){var i=Mo(this.g);t="";var s=i.length,r=pe(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){We(this),Xt(this);var o="";break t}this.h.i=new E.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(i[e],{stream:r&&e==s-1});i.splice(0,s),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,wp(this.j,this.u,this.A,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!rn(a)){var l=a;break t}}l=null}if(n=l)dt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,$s(this,n);else{this.i=!1,this.o=3,ee(12),We(this),Xt(this);break e}}this.S?(Rc(this,u,o),Ps&&this.i&&u==3&&(wc(this.U,this.V,"tick",this.mb),this.V.start())):(dt(this.j,this.m,o,null),$s(this,o)),u==4&&We(this),this.i&&!this.J&&(u==4?Yc(this.l,this):(this.i=!1,Nn(this)))}else Hp(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ee(12)):(this.o=0,ee(13)),We(this),Xt(this)}}}catch{}finally{}};function bc(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Rc(t,e,n){let i=!0,s;for(;!t.J&&t.C<n.length;)if(s=Tp(t,n),s==fi){e==4&&(t.o=4,ee(14),i=!1),dt(t.j,t.m,null,"[Incomplete Response]");break}else if(s==Vs){t.o=4,ee(15),dt(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}else dt(t.j,t.m,s,null),$s(t,s);bc(t)&&s!=fi&&s!=Vs&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ee(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Lr(e),e.M=!0,ee(11))):(dt(t.j,t.m,n,"[Invalid Chunked Response]"),We(t),Xt(t))}g.mb=function(){if(this.g){var t=pe(this.g),e=this.g.ja();this.C<e.length&&($i(this),Rc(this,t,e),this.i&&t!=4&&Nn(this))}};function Tp(t,e){var n=t.C,i=e.indexOf(`
`,n);return i==-1?fi:(n=Number(e.substring(n,i)),isNaN(n)?Vs:(i+=1,i+n>e.length?fi:(e=e.slice(i,i+n),t.C=i+n,e)))}g.cancel=function(){this.J=!0,We(this)};function Nn(t){t.Y=Date.now()+t.P,Dc(t,t.P)}function Dc(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=bn(X(t.lb,t),e)}function $i(t){t.B&&(E.clearTimeout(t.B),t.B=null)}g.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(Ep(this.j,this.A),this.L!=2&&(un(),ee(17)),We(this),this.o=2,Xt(this)):Dc(this,this.Y-t)};function Xt(t){t.l.H==0||t.J||Yc(t.l,t)}function We(t){$i(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Sr(t.V),Ec(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function $s(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||js(n.i,t))){if(!t.K&&js(n.i,t)&&n.H==3){try{var i=n.Ja.g.parse(e)}catch{i=null}if(Array.isArray(i)&&i.length==3){var s=i;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)mi(n),zi(n);else break e;Pr(n),ee(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=bn(X(n.ib,n),6e3));if(1>=Fc(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Ge(n,11)}else if((t.K||n.g==t)&&mi(n),!rn(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=l[5];p!=null&&typeof p=="number"&&0<p&&(i=1.5*p,n.L=i,n.l.info("backChannelRequestTimeoutMs_="+i)),i=n;const y=t.g;if(y){const _=y.g?y.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var r=i.i;r.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(Rr(r,r.h),r.h=null))}if(i.F){const b=y.g?y.g.getResponseHeader("X-HTTP-Session-Id"):null;b&&(i.Da=b,D(i.I,i.F,b))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),i=n;var o=t;if(i.wa=tl(i,i.J?i.pa:null,i.Y),o.K){Vc(i.i,o);var a=o,c=i.L;c&&a.setTimeout(c),a.B&&($i(a),Nn(a)),i.g=o}else Xc(i);0<n.j.length&&Ki(n)}else l[0]!="stop"&&l[0]!="close"||Ge(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Ge(n,7):Or(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}un(4)}catch{}}function Sp(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Oi(t)){for(var e=[],n=t.length,i=0;i<n;i++)e.push(t[i]);return e}e=[],n=0;for(i in t)e[n++]=t[i];return e}function Ap(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Oi(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const i in t)e[n++]=i;return e}}}function Nc(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Oi(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=Ap(t),i=Sp(t),s=i.length,r=0;r<s;r++)e.call(void 0,i[r],n&&n[r],t)}var Oc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Cp(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var i=t[n].indexOf("="),s=null;if(0<=i){var r=t[n].substring(0,i);s=t[n].substring(i+1)}else r=t[n];e(r,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Je(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Je){this.h=t.h,pi(this,t.j),this.s=t.s,this.g=t.g,gi(this,t.m),this.l=t.l;var e=t.i,n=new hn;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Oo(this,n),this.o=t.o}else t&&(e=String(t).match(Oc))?(this.h=!1,pi(this,e[1]||"",!0),this.s=Wt(e[2]||""),this.g=Wt(e[3]||"",!0),gi(this,e[4]),this.l=Wt(e[5]||"",!0),Oo(this,e[6]||"",!0),this.o=Wt(e[7]||"")):(this.h=!1,this.i=new hn(null,this.h))}Je.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Gt(e,Po,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Gt(e,Po,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Gt(n,n.charAt(0)=="/"?Rp:bp,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Gt(n,Np)),t.join("")};function Ce(t){return new Je(t)}function pi(t,e,n){t.j=n?Wt(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function gi(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Oo(t,e,n){e instanceof hn?(t.i=e,Op(t.i,t.h)):(n||(e=Gt(e,Dp)),t.i=new hn(e,t.h))}function D(t,e,n){t.i.set(e,n)}function ji(t){return D(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Wt(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Gt(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,kp),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function kp(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Po=/[#\/\?@]/g,bp=/[#\?:]/g,Rp=/[#\?]/g,Dp=/[#\?@]/g,Np=/#/g;function hn(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function He(t){t.g||(t.g=new Map,t.h=0,t.i&&Cp(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}g=hn.prototype;g.add=function(t,e){He(this),this.i=null,t=Mt(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Pc(t,e){He(t),e=Mt(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Lc(t,e){return He(t),e=Mt(t,e),t.g.has(e)}g.forEach=function(t,e){He(this),this.g.forEach(function(n,i){n.forEach(function(s){t.call(e,s,i,this)},this)},this)};g.ta=function(){He(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let i=0;i<e.length;i++){const s=t[i];for(let r=0;r<s.length;r++)n.push(e[i])}return n};g.Z=function(t){He(this);let e=[];if(typeof t=="string")Lc(this,t)&&(e=e.concat(this.g.get(Mt(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};g.set=function(t,e){return He(this),this.i=null,t=Mt(this,t),Lc(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};g.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Mc(t,e,n){Pc(t,e),0<n.length&&(t.i=null,t.g.set(Mt(t,e),gr(n)),t.h+=n.length)}g.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var i=e[n];const r=encodeURIComponent(String(i)),o=this.Z(i);for(i=0;i<o.length;i++){var s=r;o[i]!==""&&(s+="="+encodeURIComponent(String(o[i]))),t.push(s)}}return this.i=t.join("&")};function Mt(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function Op(t,e){e&&!t.j&&(He(t),t.i=null,t.g.forEach(function(n,i){var s=i.toLowerCase();i!=s&&(Pc(this,i),Mc(this,s,n))},t)),t.j=e}var Pp=class{constructor(t,e){this.g=t,this.map=e}};function xc(t){this.l=t||Lp,E.PerformanceNavigationTiming?(t=E.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(E.g&&E.g.Ka&&E.g.Ka()&&E.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Lp=10;function Uc(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Fc(t){return t.h?1:t.g?t.g.size:0}function js(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Rr(t,e){t.g?t.g.add(e):t.h=e}function Vc(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}xc.prototype.cancel=function(){if(this.i=Bc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Bc(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return gr(t.i)}var Mp=class{stringify(t){return E.JSON.stringify(t,void 0)}parse(t){return E.JSON.parse(t,void 0)}};function xp(){this.g=new Mp}function Up(t,e,n){const i=n||"";try{Nc(t,function(s,r){let o=s;Cn(s)&&(o=_r(s)),e.push(i+r+"="+encodeURIComponent(o))})}catch(s){throw e.push(i+"type="+encodeURIComponent("_badmap")),s}}function Fp(t,e){const n=new Ui;if(E.Image){const i=new Image;i.onload=Bn(jn,n,i,"TestLoadImage: loaded",!0,e),i.onerror=Bn(jn,n,i,"TestLoadImage: error",!1,e),i.onabort=Bn(jn,n,i,"TestLoadImage: abort",!1,e),i.ontimeout=Bn(jn,n,i,"TestLoadImage: timeout",!1,e),E.setTimeout(function(){i.ontimeout&&i.ontimeout()},1e4),i.src=t}else e(!1)}function jn(t,e,n,i,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(i)}catch{}}function On(t){this.l=t.fc||null,this.j=t.ob||!1}$(On,Cr);On.prototype.g=function(){return new Hi(this.l,this.j)};On.prototype.i=function(t){return function(){return t}}({});function Hi(t,e){V.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Dr,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}$(Hi,V);var Dr=0;g=Hi.prototype;g.open=function(t,e){if(this.readyState!=Dr)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,dn(this)};g.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||E).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};g.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Pn(this)),this.readyState=Dr};g.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,dn(this)),this.g&&(this.readyState=3,dn(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof E.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;$c(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function $c(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}g.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Pn(this):dn(this),this.readyState==3&&$c(this)}};g.Za=function(t){this.g&&(this.response=this.responseText=t,Pn(this))};g.Ya=function(t){this.g&&(this.response=t,Pn(this))};g.ka=function(){this.g&&Pn(this)};function Pn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,dn(t)}g.setRequestHeader=function(t,e){this.v.append(t,e)};g.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};g.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function dn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Hi.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var Vp=E.JSON.parse;function P(t){V.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=jc,this.L=this.M=!1}$(P,V);var jc="",Bp=/^https?$/i,$p=["POST","PUT"];g=P.prototype;g.Oa=function(t){this.M=t};g.ha=function(t,e,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Fs.g(),this.C=this.u?No(this.u):No(Fs),this.g.onreadystatechange=X(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(r){Lo(this,r);return}if(t=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var s in i)n.set(s,i[s]);else if(typeof i.keys=="function"&&typeof i.get=="function")for(const r of i.keys())n.set(r,i.get(r));else throw Error("Unknown input type for opt_headers: "+String(i));i=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),s=E.FormData&&t instanceof E.FormData,!(0<=rc($p,e))||i||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{zc(this),0<this.B&&((this.L=jp(this.g))?(this.g.timeout=this.B,this.g.ontimeout=X(this.ua,this)):this.A=Ar(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Lo(this,r)}};function jp(t){return It&&typeof t.timeout=="number"&&t.ontimeout!==void 0}g.ua=function(){typeof pr<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,z(this,"timeout"),this.abort(8))};function Lo(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Hc(t),qi(t)}function Hc(t){t.F||(t.F=!0,z(t,"complete"),z(t,"error"))}g.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,z(this,"complete"),z(this,"abort"),qi(this))};g.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qi(this,!0)),P.$.N.call(this)};g.La=function(){this.s||(this.G||this.v||this.l?qc(this):this.kb())};g.kb=function(){qc(this)};function qc(t){if(t.h&&typeof pr<"u"&&(!t.C[1]||pe(t)!=4||t.da()!=2)){if(t.v&&pe(t)==4)Ar(t.La,0,t);else if(z(t,"readystatechange"),pe(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var i;if(i=o===0){var s=String(t.I).match(Oc)[1]||null;!s&&E.self&&E.self.location&&(s=E.self.location.protocol.slice(0,-1)),i=!Bp.test(s?s.toLowerCase():"")}n=i}if(n)z(t,"complete"),z(t,"success");else{t.m=6;try{var r=2<pe(t)?t.g.statusText:""}catch{r=""}t.j=r+" ["+t.da()+"]",Hc(t)}}finally{qi(t)}}}}function qi(t,e){if(t.g){zc(t);const n=t.g,i=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||z(t,"ready");try{n.onreadystatechange=i}catch{}}}function zc(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(E.clearTimeout(t.A),t.A=null)}g.isActive=function(){return!!this.g};function pe(t){return t.g?t.g.readyState:0}g.da=function(){try{return 2<pe(this)?this.g.status:-1}catch{return-1}};g.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};g.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),Vp(e)}};function Mo(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case jc:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Hp(t){const e={};t=(t.g&&2<=pe(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let i=0;i<t.length;i++){if(rn(t[i]))continue;var n=pp(t[i]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const r=e[s]||[];e[s]=r,r.push(n)}ap(e,function(i){return i.join(", ")})}g.Ia=function(){return this.m};g.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Kc(t){let e="";return yr(t,function(n,i){e+=i,e+=":",e+=n,e+=`\r
`}),e}function Nr(t,e,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=Kc(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):D(t,e,n))}function Ht(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Wc(t){this.Ga=0,this.j=[],this.l=new Ui,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ht("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ht("baseRetryDelayMs",5e3,t),this.hb=Ht("retryDelaySeedMs",1e4,t),this.eb=Ht("forwardChannelMaxRetries",2,t),this.xa=Ht("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new xc(t&&t.concurrentRequestLimit),this.Ja=new xp,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}g=Wc.prototype;g.ra=8;g.H=1;function Or(t){if(Gc(t),t.H==3){var e=t.W++,n=Ce(t.I);if(D(n,"SID",t.K),D(n,"RID",e),D(n,"TYPE","terminate"),Ln(t,n),e=new Dn(t,t.l,e),e.L=2,e.v=ji(Ce(n)),n=!1,E.navigator&&E.navigator.sendBeacon)try{n=E.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&E.Image&&(new Image().src=e.v,n=!0),n||(e.g=nl(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Nn(e)}el(t)}function zi(t){t.g&&(Lr(t),t.g.cancel(),t.g=null)}function Gc(t){zi(t),t.u&&(E.clearTimeout(t.u),t.u=null),mi(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&E.clearTimeout(t.m),t.m=null)}function Ki(t){if(!Uc(t.i)&&!t.m){t.m=!0;var e=t.Na;an||yc(),cn||(an(),cn=!0),Tr.add(e,t),t.C=0}}function qp(t,e){return Fc(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=bn(X(t.Na,t,e),Zc(t,t.C)),t.C++,!0)}g.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Dn(this,this.l,t);let r=this.s;if(this.U&&(r?(r=lc(r),uc(r,this.U)):r=this.U),this.o!==null||this.O||(s.I=r,r=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var i=this.j[n];if("__data__"in i.map&&(i=i.map.__data__,typeof i=="string")){i=i.length;break t}i=void 0}if(i===void 0)break;if(e+=i,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Qc(this,s,e),n=Ce(this.I),D(n,"RID",t),D(n,"CVER",22),this.F&&D(n,"X-HTTP-Session-Id",this.F),Ln(this,n),r&&(this.O?e="headers="+encodeURIComponent(String(Kc(r)))+"&"+e:this.o&&Nr(n,this.o,r)),Rr(this.i,s),this.bb&&D(n,"TYPE","init"),this.P?(D(n,"$req",e),D(n,"SID","null"),s.aa=!0,Bs(s,n,null)):Bs(s,n,e),this.H=2}}else this.H==3&&(t?xo(this,t):this.j.length==0||Uc(this.i)||xo(this))};function xo(t,e){var n;e?n=e.m:n=t.W++;const i=Ce(t.I);D(i,"SID",t.K),D(i,"RID",n),D(i,"AID",t.V),Ln(t,i),t.o&&t.s&&Nr(i,t.o,t.s),n=new Dn(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Qc(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Rr(t.i,n),Bs(n,i,e)}function Ln(t,e){t.na&&yr(t.na,function(n,i){D(e,i,n)}),t.h&&Nc({},function(n,i){D(e,i,n)})}function Qc(t,e,n){n=Math.min(t.j.length,n);var i=t.h?X(t.h.Va,t.h,t):null;e:{var s=t.j;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=s[0].g,o.push("ofs="+r)):r=0:o.push("ofs="+r);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=r,0>l)r=Math.max(0,s[c].g-100),a=!1;else try{Up(u,o,"req"+l+"_")}catch{i&&i(u)}}if(a){i=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,i}function Xc(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;an||yc(),cn||(an(),cn=!0),Tr.add(e,t),t.A=0}}function Pr(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=bn(X(t.Ma,t),Zc(t,t.A)),t.A++,!0)}g.Ma=function(){if(this.u=null,Jc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=bn(X(this.jb,this),t)}};g.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ee(10),zi(this),Jc(this))};function Lr(t){t.B!=null&&(E.clearTimeout(t.B),t.B=null)}function Jc(t){t.g=new Dn(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Ce(t.wa);D(e,"RID","rpc"),D(e,"SID",t.K),D(e,"AID",t.V),D(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&D(e,"TO",t.qa),D(e,"TYPE","xmlhttp"),Ln(t,e),t.o&&t.s&&Nr(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=ji(Ce(e)),n.s=null,n.S=!0,kc(n,t)}g.ib=function(){this.v!=null&&(this.v=null,zi(this),Pr(this),ee(19))};function mi(t){t.v!=null&&(E.clearTimeout(t.v),t.v=null)}function Yc(t,e){var n=null;if(t.g==e){mi(t),Lr(t),t.g=null;var i=2}else if(js(t.i,e))n=e.F,Vc(t.i,e),i=1;else return;if(t.H!=0){if(e.i)if(i==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;i=Fi(),z(i,new Tc(i,n)),Ki(t)}else Xc(t);else if(s=e.o,s==3||s==0&&0<e.ca||!(i==1&&qp(t,e)||i==2&&Pr(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:Ge(t,5);break;case 4:Ge(t,10);break;case 3:Ge(t,6);break;default:Ge(t,2)}}}function Zc(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Ge(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var i=X(t.pb,t);n||(n=new Je("//www.google.com/images/cleardot.gif"),E.location&&E.location.protocol=="http"||pi(n,"https"),ji(n)),Fp(n.toString(),i)}else ee(2);t.H=0,t.h&&t.h.za(e),el(t),Gc(t)}g.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ee(2)):(this.l.info("Failed to ping google.com"),ee(1))};function el(t){if(t.H=0,t.ma=[],t.h){const e=Bc(t.i);(e.length!=0||t.j.length!=0)&&(Co(t.ma,e),Co(t.ma,t.j),t.i.i.length=0,gr(t.j),t.j.length=0),t.h.ya()}}function tl(t,e,n){var i=n instanceof Je?Ce(n):new Je(n);if(i.g!="")e&&(i.g=e+"."+i.g),gi(i,i.m);else{var s=E.location;i=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var r=new Je(null);i&&pi(r,i),e&&(r.g=e),s&&gi(r,s),n&&(r.l=n),i=r}return n=t.F,e=t.Da,n&&e&&D(i,n,e),D(i,"VER",t.ra),Ln(t,i),i}function nl(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new P(new On({ob:!0})):new P(t.va),e.Oa(t.J),e}g.isActive=function(){return!!this.h&&this.h.isActive(this)};function il(){}g=il.prototype;g.Ba=function(){};g.Aa=function(){};g.za=function(){};g.ya=function(){};g.isActive=function(){return!0};g.Va=function(){};function yi(){if(It&&!(10<=Number(ip)))throw Error("Environmental error: no available transport.")}yi.prototype.g=function(t,e){return new ae(t,e)};function ae(t,e){V.call(this),this.g=new Wc(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!rn(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!rn(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new xt(this)}$(ae,V);ae.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ee(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=tl(t,null,t.Y),Ki(t)};ae.prototype.close=function(){Or(this.g)};ae.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_r(t),t=n);e.j.push(new Pp(e.fb++,t)),e.H==3&&Ki(e)};ae.prototype.N=function(){this.g.h=null,delete this.j,Or(this.g),delete this.g,ae.$.N.call(this)};function sl(t){kr.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}$(sl,kr);function rl(){br.call(this),this.status=1}$(rl,br);function xt(t){this.g=t}$(xt,il);xt.prototype.Ba=function(){z(this.g,"a")};xt.prototype.Aa=function(t){z(this.g,new sl(t))};xt.prototype.za=function(t){z(this.g,new rl)};xt.prototype.ya=function(){z(this.g,"b")};function zp(){this.blockSize=-1}function Ee(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}$(Ee,zp);Ee.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Es(t,e,n){n||(n=0);var i=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)i[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)i[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var r=t.g[3],o=e+(r^n&(s^r))+i[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[1]+3905402710&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[2]+606105819&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[5]+1200080426&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[6]+2821735955&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[9]+2336552879&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[10]+4294925233&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(r^n&(s^r))+i[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=r+(s^e&(n^s))+i[13]+4254626195&4294967295,r=e+(o<<12&4294967295|o>>>20),o=s+(n^r&(e^n))+i[14]+2792965006&4294967295,s=r+(o<<17&4294967295|o>>>15),o=n+(e^s&(r^e))+i[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^r&(n^s))+i[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[6]+3225465664&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[11]+643717713&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[10]+38016083&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[15]+3634488961&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[14]+3275163606&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[3]+4107603335&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^r&(n^s))+i[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=r+(n^s&(e^n))+i[2]+4243563512&4294967295,r=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(r^e))+i[7]+1735328473&4294967295,s=r+(o<<14&4294967295|o>>>18),o=n+(r^e&(s^r))+i[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^r)+i[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[8]+2272392833&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[11]+1839030562&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[4]+1272893353&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[7]+4139469664&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[0]+3936430074&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[3]+3572445317&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^r)+i[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=r+(e^n^s)+i[12]+3873151461&4294967295,r=e+(o<<11&4294967295|o>>>21),o=s+(r^e^n)+i[15]+530742520&4294967295,s=r+(o<<16&4294967295|o>>>16),o=n+(s^r^e)+i[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~r))+i[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[7]+1126891415&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[14]+2878612391&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[3]+2399980690&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[10]+4293915773&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[15]+4264355552&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[6]+2734768916&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~r))+i[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=r+(n^(e|~s))+i[11]+3174756917&4294967295,r=e+(o<<10&4294967295|o>>>22),o=s+(e^(r|~n))+i[2]+718787259&4294967295,s=r+(o<<15&4294967295|o>>>17),o=n+(r^(s|~e))+i[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+r&4294967295}Ee.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,i=this.m,s=this.h,r=0;r<e;){if(s==0)for(;r<=n;)Es(this,t,r),r+=this.blockSize;if(typeof t=="string"){for(;r<e;)if(i[s++]=t.charCodeAt(r++),s==this.blockSize){Es(this,i),s=0;break}}else for(;r<e;)if(i[s++]=t[r++],s==this.blockSize){Es(this,i),s=0;break}}this.h=s,this.i+=e};Ee.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var i=0;32>i;i+=8)t[n++]=this.g[e]>>>i&255;return t};function k(t,e){this.h=e;for(var n=[],i=!0,s=t.length-1;0<=s;s--){var r=t[s]|0;i&&r==e||(n[s]=r,i=!1)}this.g=n}var Kp={};function Mr(t){return-128<=t&&128>t?ep(t,function(e){return new k([e|0],0>e?-1:0)}):new k([t|0],0>t?-1:0)}function ge(t){if(isNaN(t)||!isFinite(t))return gt;if(0>t)return q(ge(-t));for(var e=[],n=1,i=0;t>=n;i++)e[i]=t/n|0,n*=Hs;return new k(e,0)}function ol(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return q(ol(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=ge(Math.pow(e,8)),i=gt,s=0;s<t.length;s+=8){var r=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+r),e);8>r?(r=ge(Math.pow(e,r)),i=i.R(r).add(ge(o))):(i=i.R(n),i=i.add(ge(o)))}return i}var Hs=4294967296,gt=Mr(0),qs=Mr(1),Uo=Mr(16777216);g=k.prototype;g.ea=function(){if(ce(this))return-q(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var i=this.D(n);t+=(0<=i?i:Hs+i)*e,e*=Hs}return t};g.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(Se(this))return"0";if(ce(this))return"-"+q(this).toString(t);for(var e=ge(Math.pow(t,6)),n=this,i="";;){var s=wi(n,e).g;n=vi(n,s.R(e));var r=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,Se(n))return r+i;for(;6>r.length;)r="0"+r;i=r+i}};g.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function Se(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function ce(t){return t.h==-1}g.X=function(t){return t=vi(this,t),ce(t)?-1:Se(t)?0:1};function q(t){for(var e=t.g.length,n=[],i=0;i<e;i++)n[i]=~t.g[i];return new k(n,~t.h).add(qs)}g.abs=function(){return ce(this)?q(this):this};g.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0,s=0;s<=e;s++){var r=i+(this.D(s)&65535)+(t.D(s)&65535),o=(r>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);i=o>>>16,r&=65535,o&=65535,n[s]=o<<16|r}return new k(n,n[n.length-1]&-2147483648?-1:0)};function vi(t,e){return t.add(q(e))}g.R=function(t){if(Se(this)||Se(t))return gt;if(ce(this))return ce(t)?q(this).R(q(t)):q(q(this).R(t));if(ce(t))return q(this.R(q(t)));if(0>this.X(Uo)&&0>t.X(Uo))return ge(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],i=0;i<2*e;i++)n[i]=0;for(i=0;i<this.g.length;i++)for(var s=0;s<t.g.length;s++){var r=this.D(i)>>>16,o=this.D(i)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*i+2*s]+=o*c,Hn(n,2*i+2*s),n[2*i+2*s+1]+=r*c,Hn(n,2*i+2*s+1),n[2*i+2*s+1]+=o*a,Hn(n,2*i+2*s+1),n[2*i+2*s+2]+=r*a,Hn(n,2*i+2*s+2)}for(i=0;i<e;i++)n[i]=n[2*i+1]<<16|n[2*i];for(i=e;i<2*e;i++)n[i]=0;return new k(n,0)};function Hn(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qt(t,e){this.g=t,this.h=e}function wi(t,e){if(Se(e))throw Error("division by zero");if(Se(t))return new qt(gt,gt);if(ce(t))return e=wi(q(t),e),new qt(q(e.g),q(e.h));if(ce(e))return e=wi(t,q(e)),new qt(q(e.g),e.h);if(30<t.g.length){if(ce(t)||ce(e))throw Error("slowDivide_ only works with positive integers.");for(var n=qs,i=e;0>=i.X(t);)n=Fo(n),i=Fo(i);var s=lt(n,1),r=lt(i,1);for(i=lt(i,2),n=lt(n,2);!Se(i);){var o=r.add(i);0>=o.X(t)&&(s=s.add(n),r=o),i=lt(i,1),n=lt(n,1)}return e=vi(t,s.R(e)),new qt(s,e)}for(s=gt;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),i=Math.ceil(Math.log(n)/Math.LN2),i=48>=i?1:Math.pow(2,i-48),r=ge(n),o=r.R(e);ce(o)||0<o.X(t);)n-=i,r=ge(n),o=r.R(e);Se(r)&&(r=qs),s=s.add(r),t=vi(t,o)}return new qt(s,t)}g.gb=function(t){return wi(this,t).h};g.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)&t.D(i);return new k(n,this.h&t.h)};g.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)|t.D(i);return new k(n,this.h|t.h)};g.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],i=0;i<e;i++)n[i]=this.D(i)^t.D(i);return new k(n,this.h^t.h)};function Fo(t){for(var e=t.g.length+1,n=[],i=0;i<e;i++)n[i]=t.D(i)<<1|t.D(i-1)>>>31;return new k(n,t.h)}function lt(t,e){var n=e>>5;e%=32;for(var i=t.g.length-n,s=[],r=0;r<i;r++)s[r]=0<e?t.D(r+n)>>>e|t.D(r+n+1)<<32-e:t.D(r+n);return new k(s,t.h)}yi.prototype.createWebChannel=yi.prototype.g;ae.prototype.send=ae.prototype.u;ae.prototype.open=ae.prototype.m;ae.prototype.close=ae.prototype.close;Vi.NO_ERROR=0;Vi.TIMEOUT=8;Vi.HTTP_ERROR=6;Sc.COMPLETE="complete";Ac.EventType=Rn;Rn.OPEN="a";Rn.CLOSE="b";Rn.ERROR="c";Rn.MESSAGE="d";V.prototype.listen=V.prototype.O;P.prototype.listenOnce=P.prototype.P;P.prototype.getLastError=P.prototype.Sa;P.prototype.getLastErrorCode=P.prototype.Ia;P.prototype.getStatus=P.prototype.da;P.prototype.getResponseJson=P.prototype.Wa;P.prototype.getResponseText=P.prototype.ja;P.prototype.send=P.prototype.ha;P.prototype.setWithCredentials=P.prototype.Oa;Ee.prototype.digest=Ee.prototype.l;Ee.prototype.reset=Ee.prototype.reset;Ee.prototype.update=Ee.prototype.j;k.prototype.add=k.prototype.add;k.prototype.multiply=k.prototype.R;k.prototype.modulo=k.prototype.gb;k.prototype.compare=k.prototype.X;k.prototype.toNumber=k.prototype.ea;k.prototype.toString=k.prototype.toString;k.prototype.getBits=k.prototype.D;k.fromNumber=ge;k.fromString=ol;var Wp=function(){return new yi},Gp=function(){return Fi()},Is=Vi,Qp=Sc,Xp=at,Vo={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Jp=On,qn=Ac,Yp=P,Zp=k;const Bo="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}W.UNAUTHENTICATED=new W(null),W.GOOGLE_CREDENTIALS=new W("google-credentials-uid"),W.FIRST_PARTY=new W("first-party-uid"),W.MOCK_USER=new W("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ut="9.23.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it=new nr("@firebase/firestore");function $o(){return it.logLevel}function m(t,...e){if(it.logLevel<=A.DEBUG){const n=e.map(xr);it.debug(`Firestore (${Ut}): ${t}`,...n)}}function st(t,...e){if(it.logLevel<=A.ERROR){const n=e.map(xr);it.error(`Firestore (${Ut}): ${t}`,...n)}}function Ei(t,...e){if(it.logLevel<=A.WARN){const n=e.map(xr);it.warn(`Firestore (${Ut}): ${t}`,...n)}}function xr(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(t="Unexpected state"){const e=`FIRESTORE (${Ut}) INTERNAL ASSERTION FAILED: `+t;throw st(e),new Error(e)}function B(t,e){t||T()}function N(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends be{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class eg{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(W.UNAUTHENTICATED))}shutdown(){}}class tg{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ng{constructor(e){this.t=e,this.currentUser=W.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const s=c=>this.i!==i?(i=this.i,n(c)):Promise.resolve();let r=new Ye;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Ye,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=r;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Ye)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(B(typeof i.accessToken=="string"),new al(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return B(e===null||typeof e=="string"),new W(e)}}class ig{constructor(e,n,i){this.h=e,this.l=n,this.m=i,this.type="FirstParty",this.user=W.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class sg{constructor(e,n,i){this.h=e,this.l=n,this.m=i}getToken(){return Promise.resolve(new ig(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(W.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class rg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class og{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const i=r=>{r.error!=null&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,m("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>i(r))};const s=r=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>s(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?s(r):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(B(typeof n.token=="string"),this.T=n.token,new rg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ag(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cl{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const s=ag(40);for(let r=0;r<s.length;++r)i.length<20&&s[r]<n&&(i+=e.charAt(s[r]%e.length))}return i}}function R(t,e){return t<e?-1:t>e?1:0}function _t(t,e,n){return t.length===e.length&&t.every((i,s)=>n(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new w(d.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new w(d.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return F.fromMillis(Date.now())}static fromDate(e){return F.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new F(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?R(this.nanoseconds,e.nanoseconds):R(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.timestamp=e}static fromTimestamp(e){return new O(e)}static min(){return new O(new F(0,0))}static max(){return new O(new F(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,n,i){n===void 0?n=0:n>e.length&&T(),i===void 0?i=e.length-n:i>e.length-n&&T(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return fn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof fn?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let s=0;s<i;s++){const r=e.get(s),o=n.get(s);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class M extends fn{construct(e,n,i){return new M(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new w(d.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(s=>s.length>0))}return new M(n)}static emptyPath(){return new M([])}}const cg=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Q extends fn{construct(e,n,i){return new Q(e,n,i)}static isValidIdentifier(e){return cg.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Q.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Q(["__name__"])}static fromServerFormat(e){const n=[];let i="",s=0;const r=()=>{if(i.length===0)throw new w(d.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new w(d.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new w(d.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(i+=a,s++):(r(),s++)}if(r(),o)throw new w(d.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Q(n)}static emptyPath(){return new Q([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(e){this.path=e}static fromPath(e){return new I(M.fromString(e))}static fromName(e){return new I(M.fromString(e).popFirst(5))}static empty(){return new I(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return M.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new I(new M(e.slice()))}}function lg(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,s=O.fromTimestamp(i===1e9?new F(n+1,0):new F(n,i));return new Ve(s,I.empty(),e)}function ug(t){return new Ve(t.readTime,t.key,-1)}class Ve{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Ve(O.min(),I.empty(),-1)}static max(){return new Ve(O.max(),I.empty(),-1)}}function hg(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=I.comparator(t.documentKey,e.documentKey),n!==0?n:R(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fg{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ll(t){if(t.code!==d.FAILED_PRECONDITION||t.message!==dg)throw t;m("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&T(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new f((i,s)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(i,s)},this.catchCallback=r=>{this.wrapFailure(n,r).next(i,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof f?n:f.resolve(n)}catch(n){return f.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):f.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):f.reject(n)}static resolve(e){return new f((n,i)=>{n(e)})}static reject(e){return new f((n,i)=>{i(e)})}static waitFor(e){return new f((n,i)=>{let s=0,r=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++r,o&&r===s&&n()},c=>i(c))}),o=!0,r===s&&n()})}static or(e){let n=f.resolve(!1);for(const i of e)n=n.next(s=>s?f.resolve(s):i());return n}static forEach(e,n){const i=[];return e.forEach((s,r)=>{i.push(n.call(this,s,r))}),this.waitFor(i)}static mapArray(e,n){return new f((i,s)=>{const r=e.length,o=new Array(r);let a=0;for(let c=0;c<r;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===r&&i(o)},u=>s(u))}})}static doWhile(e,n){return new f((i,s)=>{const r=()=>{e()===!0?n().next(()=>{r()},s):i()};r()})}}function Wi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ot(i),this.ut=i=>n.writeSequenceNumber(i))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}ul.ct=-1;function Ur(t){return t==null}function Ii(t){return t===0&&1/t==-1/0}function pg(t){return typeof t=="number"&&Number.isInteger(t)&&!Ii(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ft(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function hl(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,n){this.comparator=e,this.root=n||j.EMPTY}insert(e,n){return new ie(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,j.BLACK,null,null))}remove(e){return new ie(this.comparator,this.root.remove(e,this.comparator).copy(null,null,j.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return n+i.left.size;s<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new zn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new zn(this.root,e,this.comparator,!1)}getReverseIterator(){return new zn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new zn(this.root,e,this.comparator,!0)}}class zn{constructor(e,n,i,s){this.isReverse=s,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?i(e.key,n):1,n&&s&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class j{constructor(e,n,i,s,r){this.key=e,this.value=n,this.color=i??j.RED,this.left=s??j.EMPTY,this.right=r??j.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,s,r){return new j(e??this.key,n??this.value,i??this.color,s??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let s=this;const r=i(e,s.key);return s=r<0?s.copy(null,null,null,s.left.insert(e,n,i),null):r===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return j.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return j.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,j.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,j.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw T();const e=this.left.check();if(e!==this.right.check())throw T();return e+(this.isRed()?0:1)}}j.EMPTY=null,j.RED=!0,j.BLACK=!1;j.EMPTY=new class{constructor(){this.size=0}get key(){throw T()}get value(){throw T()}get color(){throw T()}get left(){throw T()}get right(){throw T()}copy(t,e,n,i,s){return this}insert(t,e,n){return new j(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.comparator=e,this.data=new ie(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ho(this.data.getIterator())}getIteratorFrom(e){return new Ho(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof te)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,r=i.getNext().key;if(this.comparator(s,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new te(this.comparator);return n.data=e,n}}class Ho{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.fields=e,e.sort(Q.comparator)}static empty(){return new oe([])}unionWith(e){let n=new te(Q.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new oe(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return _t(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new gg("Invalid base64 string: "+s):s}}(e);return new ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let r=0;r<i.length;++r)s+=String.fromCharCode(i[r]);return s}(e);return new ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return R(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ke.EMPTY_BYTE_STRING=new ke("");const mg=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function rt(t){if(B(!!t),typeof t=="string"){let e=0;const n=mg.exec(t);if(B(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function pn(t){return typeof t=="string"?ke.fromBase64String(t):ke.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function dl(t){const e=t.mapValue.fields.__previous_value__;return Fr(e)?dl(e):e}function _i(t){const e=rt(t.mapValue.fields.__local_write_time__.timestampValue);return new F(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yg{constructor(e,n,i,s,r,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=s,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ti{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ti("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ti&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Tt(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Fr(t)?4:vg(t)?9007199254740991:10:T()}function Ie(t,e){if(t===e)return!0;const n=Tt(t);if(n!==Tt(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return _i(t).isEqual(_i(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const r=rt(i.timestampValue),o=rt(s.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return pn(i.bytesValue).isEqual(pn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return H(i.geoPointValue.latitude)===H(s.geoPointValue.latitude)&&H(i.geoPointValue.longitude)===H(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return H(i.integerValue)===H(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const r=H(i.doubleValue),o=H(s.doubleValue);return r===o?Ii(r)===Ii(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return _t(t.arrayValue.values||[],e.arrayValue.values||[],Ie);case 10:return function(i,s){const r=i.mapValue.fields||{},o=s.mapValue.fields||{};if(jo(r)!==jo(o))return!1;for(const a in r)if(r.hasOwnProperty(a)&&(o[a]===void 0||!Ie(r[a],o[a])))return!1;return!0}(t,e);default:return T()}}function gn(t,e){return(t.values||[]).find(n=>Ie(n,e))!==void 0}function St(t,e){if(t===e)return 0;const n=Tt(t),i=Tt(e);if(n!==i)return R(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(s,r){const o=H(s.integerValue||s.doubleValue),a=H(r.integerValue||r.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return qo(t.timestampValue,e.timestampValue);case 4:return qo(_i(t),_i(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(s,r){const o=pn(s),a=pn(r);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(s,r){const o=s.split("/"),a=r.split("/");for(let c=0;c<o.length&&c<a.length;c++){const l=R(o[c],a[c]);if(l!==0)return l}return R(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,r){const o=R(H(s.latitude),H(r.latitude));return o!==0?o:R(H(s.longitude),H(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,r){const o=s.values||[],a=r.values||[];for(let c=0;c<o.length&&c<a.length;++c){const l=St(o[c],a[c]);if(l)return l}return R(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,r){if(s===Kn.mapValue&&r===Kn.mapValue)return 0;if(s===Kn.mapValue)return 1;if(r===Kn.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=r.fields||{},l=Object.keys(c);a.sort(),l.sort();for(let u=0;u<a.length&&u<l.length;++u){const h=R(a[u],l[u]);if(h!==0)return h;const p=St(o[a[u]],c[l[u]]);if(p!==0)return p}return R(a.length,l.length)}(t.mapValue,e.mapValue);default:throw T()}}function qo(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return R(t,e);const n=rt(t),i=rt(e),s=R(n.seconds,i.seconds);return s!==0?s:R(n.nanos,i.nanos)}function At(t){return zs(t)}function zs(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(i){const s=rt(i);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?pn(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,I.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(i){let s="[",r=!0;for(const o of i.values||[])r?r=!1:s+=",",s+=zs(o);return s+"]"}(t.arrayValue):"mapValue"in t?function(i){const s=Object.keys(i.fields||{}).sort();let r="{",o=!0;for(const a of s)o?o=!1:r+=",",r+=`${a}:${zs(i.fields[a])}`;return r+"}"}(t.mapValue):T();var e,n}function Ks(t){return!!t&&"integerValue"in t}function Vr(t){return!!t&&"arrayValue"in t}function Zn(t){return!!t&&"mapValue"in t}function Jt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ft(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Jt(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Jt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vg(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(e){this.value=e}static empty(){return new re({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Zn(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Jt(n)}setAll(e){let n=Q.emptyPath(),i={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,i,s),i={},s=[],n=a.popLast()}o?i[a.lastSegment()]=Jt(o):s.push(a.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,i,s)}delete(e){const n=this.field(e.popLast());Zn(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Ie(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=n.mapValue.fields[e.get(i)];Zn(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,i){Ft(n,(s,r)=>e[s]=r);for(const s of i)delete e[s]}clone(){return new re(Jt(this.value))}}function fl(t){const e=[];return Ft(t.fields,(n,i)=>{const s=new Q([n]);if(Zn(i)){const r=fl(i.mapValue).fields;if(r.length===0)e.push(s);else for(const o of r)e.push(s.child(o))}else e.push(s)}),new oe(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(e,n,i,s,r,o,a){this.key=e,this.documentType=n,this.version=i,this.readTime=s,this.createTime=r,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ue(e,0,O.min(),O.min(),O.min(),re.empty(),0)}static newFoundDocument(e,n,i,s){return new ue(e,1,n,O.min(),i,s,0)}static newNoDocument(e,n){return new ue(e,2,n,O.min(),O.min(),re.empty(),0)}static newUnknownDocument(e,n){return new ue(e,3,n,O.min(),O.min(),re.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(O.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=re.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=re.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=O.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ue&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ue(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this.position=e,this.inclusive=n}}function zo(t,e,n){let i=0;for(let s=0;s<t.position.length;s++){const r=e[s],o=t.position[s];if(r.field.isKeyField()?i=I.comparator(I.fromName(o.referenceValue),n.key):i=St(o,n.data.field(r.field)),r.dir==="desc"&&(i*=-1),i!==0)break}return i}function Ko(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Ie(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n="asc"){this.field=e,this.dir=n}}function wg(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{}class U extends pl{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new Ig(e,n,i):n==="array-contains"?new Sg(e,i):n==="in"?new Ag(e,i):n==="not-in"?new Cg(e,i):n==="array-contains-any"?new kg(e,i):new U(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new _g(e,i):new Tg(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(St(n,this.value)):n!==null&&Tt(this.value)===Tt(n)&&this.matchesComparison(St(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return T()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Be extends pl{constructor(e,n){super(),this.filters=e,this.op=n,this.lt=null}static create(e,n){return new Be(e,n)}matches(e){return gl(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.lt!==null||(this.lt=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.lt}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.ft(n=>n.isInequality());return e!==null?e.field:null}ft(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function gl(t){return t.op==="and"}function ml(t){return Eg(t)&&gl(t)}function Eg(t){for(const e of t.filters)if(e instanceof Be)return!1;return!0}function Ws(t){if(t instanceof U)return t.field.canonicalString()+t.op.toString()+At(t.value);if(ml(t))return t.filters.map(e=>Ws(e)).join(",");{const e=t.filters.map(n=>Ws(n)).join(",");return`${t.op}(${e})`}}function yl(t,e){return t instanceof U?function(n,i){return i instanceof U&&n.op===i.op&&n.field.isEqual(i.field)&&Ie(n.value,i.value)}(t,e):t instanceof Be?function(n,i){return i instanceof Be&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce((s,r,o)=>s&&yl(r,i.filters[o]),!0):!1}(t,e):void T()}function vl(t){return t instanceof U?function(e){return`${e.field.canonicalString()} ${e.op} ${At(e.value)}`}(t):t instanceof Be?function(e){return e.op.toString()+" {"+e.getFilters().map(vl).join(" ,")+"}"}(t):"Filter"}class Ig extends U{constructor(e,n,i){super(e,n,i),this.key=I.fromName(i.referenceValue)}matches(e){const n=I.comparator(e.key,this.key);return this.matchesComparison(n)}}class _g extends U{constructor(e,n){super(e,"in",n),this.keys=wl("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tg extends U{constructor(e,n){super(e,"not-in",n),this.keys=wl("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function wl(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>I.fromName(i.referenceValue))}class Sg extends U{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Vr(n)&&gn(n.arrayValue,this.value)}}class Ag extends U{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&gn(this.value.arrayValue,n)}}class Cg extends U{constructor(e,n){super(e,"not-in",n)}matches(e){if(gn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!gn(this.value.arrayValue,n)}}class kg extends U{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Vr(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>gn(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bg{constructor(e,n=null,i=[],s=[],r=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=s,this.limit=r,this.startAt=o,this.endAt=a,this.dt=null}}function Wo(t,e=null,n=[],i=[],s=null,r=null,o=null){return new bg(t,e,n,i,s,r,o)}function Br(t){const e=N(t);if(e.dt===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>Ws(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),Ur(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>At(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>At(i)).join(",")),e.dt=n}return e.dt}function $r(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wg(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!yl(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Ko(t.startAt,e.startAt)&&Ko(t.endAt,e.endAt)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi{constructor(e,n=null,i=[],s=[],r=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=s,this.limit=r,this.limitType=o,this.startAt=a,this.endAt=c,this.wt=null,this._t=null,this.startAt,this.endAt}}function Rg(t,e,n,i,s,r,o,a){return new Gi(t,e,n,i,s,r,o,a)}function Dg(t){return new Gi(t)}function Go(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ng(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Og(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Pg(t){return t.collectionGroup!==null}function mt(t){const e=N(t);if(e.wt===null){e.wt=[];const n=Og(e),i=Ng(e);if(n!==null&&i===null)n.isKeyField()||e.wt.push(new Yt(n)),e.wt.push(new Yt(Q.keyField(),"asc"));else{let s=!1;for(const r of e.explicitOrderBy)e.wt.push(r),r.field.isKeyField()&&(s=!0);if(!s){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.wt.push(new Yt(Q.keyField(),r))}}}return e.wt}function Ct(t){const e=N(t);if(!e._t)if(e.limitType==="F")e._t=Wo(e.path,e.collectionGroup,mt(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of mt(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new Yt(r.field,o))}const i=e.endAt?new Si(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Si(e.startAt.position,e.startAt.inclusive):null;e._t=Wo(e.path,e.collectionGroup,n,e.filters,e.limit,i,s)}return e._t}function Gs(t,e,n){return new Gi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function El(t,e){return $r(Ct(t),Ct(e))&&t.limitType===e.limitType}function Il(t){return`${Br(Ct(t))}|lt:${t.limitType}`}function Qo(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(i=>vl(i)).join(", ")}]`),Ur(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(i=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(i)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>At(i)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>At(i)).join(",")),`Target(${n})`}(Ct(t))}; limitType=${t.limitType})`}function jr(t,e){return e.isFoundDocument()&&function(n,i){const s=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):I.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,i){for(const s of mt(n))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,i){for(const s of n.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(n,i){return!(n.startAt&&!function(s,r,o){const a=zo(s,r,o);return s.inclusive?a<=0:a<0}(n.startAt,mt(n),i)||n.endAt&&!function(s,r,o){const a=zo(s,r,o);return s.inclusive?a>=0:a>0}(n.endAt,mt(n),i))}(t,e)}function Lg(t){return(e,n)=>{let i=!1;for(const s of mt(t)){const r=Mg(s,e,n);if(r!==0)return r;i=i||s.field.isKeyField()}return 0}}function Mg(t,e,n){const i=t.field.isKeyField()?I.comparator(e.key,n.key):function(s,r,o){const a=r.data.field(s),c=o.data.field(s);return a!==null&&c!==null?St(a,c):T()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return T()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[s,r]of i)if(this.equalsFn(s,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return void(s[r]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[n]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Ft(this.inner,(n,i)=>{for(const[s,r]of i)e(s,r)})}isEmpty(){return hl(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xg=new ie(I.comparator);function Ai(){return xg}const _l=new ie(I.comparator);function Wn(...t){let e=_l;for(const n of t)e=e.insert(n.key,n);return e}function Tl(t){let e=_l;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Qe(){return Zt()}function Sl(){return Zt()}function Zt(){return new Vt(t=>t.toString(),(t,e)=>t.isEqual(e))}const Ug=new ie(I.comparator),Fg=new te(I.comparator);function G(...t){let e=Fg;for(const n of t)e=e.add(n);return e}const Vg=new te(R);function Bg(){return Vg}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ii(e)?"-0":e}}function Cl(t){return{integerValue:""+t}}function $g(t,e){return pg(e)?Cl(e):Al(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(){this._=void 0}}function jg(t,e,n){return t instanceof Ci?function(i,s){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Fr(s)&&(s=dl(s)),s&&(r.fields.__previous_value__=s),{mapValue:r}}(n,e):t instanceof kt?bl(t,e):t instanceof bt?Rl(t,e):function(i,s){const r=kl(i,s),o=Xo(r)+Xo(i.gt);return Ks(r)&&Ks(i.gt)?Cl(o):Al(i.serializer,o)}(t,e)}function Hg(t,e,n){return t instanceof kt?bl(t,e):t instanceof bt?Rl(t,e):n}function kl(t,e){return t instanceof ki?Ks(n=e)||function(i){return!!i&&"doubleValue"in i}(n)?e:{integerValue:0}:null;var n}class Ci extends Qi{}class kt extends Qi{constructor(e){super(),this.elements=e}}function bl(t,e){const n=Dl(e);for(const i of t.elements)n.some(s=>Ie(s,i))||n.push(i);return{arrayValue:{values:n}}}class bt extends Qi{constructor(e){super(),this.elements=e}}function Rl(t,e){let n=Dl(e);for(const i of t.elements)n=n.filter(s=>!Ie(s,i));return{arrayValue:{values:n}}}class ki extends Qi{constructor(e,n){super(),this.serializer=e,this.gt=n}}function Xo(t){return H(t.integerValue||t.doubleValue)}function Dl(t){return Vr(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e,n){this.field=e,this.transform=n}}function qg(t,e){return t.field.isEqual(e.field)&&function(n,i){return n instanceof kt&&i instanceof kt||n instanceof bt&&i instanceof bt?_t(n.elements,i.elements,Ie):n instanceof ki&&i instanceof ki?Ie(n.gt,i.gt):n instanceof Ci&&i instanceof Ci}(t.transform,e.transform)}class zg{constructor(e,n){this.version=e,this.transformResults=n}}class ve{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ve}static exists(e){return new ve(void 0,e)}static updateTime(e){return new ve(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ei(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Xi{}function Ol(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Ll(t.key,ve.none()):new Mn(t.key,t.data,ve.none());{const n=t.data,i=re.empty();let s=new te(Q.comparator);for(let r of e.fields)if(!s.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?i.delete(r):i.set(r,o),s=s.add(r)}return new qe(t.key,i,new oe(s.toArray()),ve.none())}}function Kg(t,e,n){t instanceof Mn?function(i,s,r){const o=i.value.clone(),a=Yo(i.fieldTransforms,s,r.transformResults);o.setAll(a),s.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qe?function(i,s,r){if(!ei(i.precondition,s))return void s.convertToUnknownDocument(r.version);const o=Yo(i.fieldTransforms,s,r.transformResults),a=s.data;a.setAll(Pl(i)),a.setAll(o),s.convertToFoundDocument(r.version,a).setHasCommittedMutations()}(t,e,n):function(i,s,r){s.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function en(t,e,n,i){return t instanceof Mn?function(s,r,o,a){if(!ei(s.precondition,r))return o;const c=s.value.clone(),l=Zo(s.fieldTransforms,a,r);return c.setAll(l),r.convertToFoundDocument(r.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof qe?function(s,r,o,a){if(!ei(s.precondition,r))return o;const c=Zo(s.fieldTransforms,a,r),l=r.data;return l.setAll(Pl(s)),l.setAll(c),r.convertToFoundDocument(r.version,l).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(u=>u.field))}(t,e,n,i):function(s,r,o){return ei(s.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function Wg(t,e){let n=null;for(const i of t.fieldTransforms){const s=e.data.field(i.field),r=kl(i.transform,s||null);r!=null&&(n===null&&(n=re.empty()),n.set(i.field,r))}return n||null}function Jo(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&_t(n,i,(s,r)=>qg(s,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Mn extends Xi{constructor(e,n,i,s=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class qe extends Xi{constructor(e,n,i,s,r=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=s,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Pl(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Yo(t,e,n){const i=new Map;B(t.length===n.length);for(let s=0;s<n.length;s++){const r=t[s],o=r.transform,a=e.data.field(r.field);i.set(r.field,Hg(o,a,n[s]))}return i}function Zo(t,e,n){const i=new Map;for(const s of t){const r=s.transform,o=n.data.field(s.field);i.set(s.field,jg(r,o,e))}return i}class Ll extends Xi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Gg extends Xi{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e,n,i,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const r=this.mutations[s];r.key.isEqual(e.key)&&Kg(r,e,i[s])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=en(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=en(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=Sl();return this.mutations.forEach(s=>{const r=e.get(s.key),o=r.overlayedDocument;let a=this.applyToLocalView(o,r.mutatedFields);a=n.has(s.key)?null:a;const c=Ol(o,a);c!==null&&i.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(O.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),G())}isEqual(e){return this.batchId===e.batchId&&_t(this.mutations,e.mutations,(n,i)=>Jo(n,i))&&_t(this.baseMutations,e.baseMutations,(n,i)=>Jo(n,i))}}class Hr{constructor(e,n,i,s){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=s}static from(e,n,i){B(e.mutations.length===i.length);let s=Ug;const r=e.mutations;for(let o=0;o<r.length;o++)s=s.insert(r[o].key,i[o].version);return new Hr(e,n,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xg{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var L,S;function Jg(t){switch(t){default:return T();case d.CANCELLED:case d.UNKNOWN:case d.DEADLINE_EXCEEDED:case d.RESOURCE_EXHAUSTED:case d.INTERNAL:case d.UNAVAILABLE:case d.UNAUTHENTICATED:return!1;case d.INVALID_ARGUMENT:case d.NOT_FOUND:case d.ALREADY_EXISTS:case d.PERMISSION_DENIED:case d.FAILED_PRECONDITION:case d.ABORTED:case d.OUT_OF_RANGE:case d.UNIMPLEMENTED:case d.DATA_LOSS:return!0}}function Yg(t){if(t===void 0)return st("GRPC error has no .code"),d.UNKNOWN;switch(t){case L.OK:return d.OK;case L.CANCELLED:return d.CANCELLED;case L.UNKNOWN:return d.UNKNOWN;case L.DEADLINE_EXCEEDED:return d.DEADLINE_EXCEEDED;case L.RESOURCE_EXHAUSTED:return d.RESOURCE_EXHAUSTED;case L.INTERNAL:return d.INTERNAL;case L.UNAVAILABLE:return d.UNAVAILABLE;case L.UNAUTHENTICATED:return d.UNAUTHENTICATED;case L.INVALID_ARGUMENT:return d.INVALID_ARGUMENT;case L.NOT_FOUND:return d.NOT_FOUND;case L.ALREADY_EXISTS:return d.ALREADY_EXISTS;case L.PERMISSION_DENIED:return d.PERMISSION_DENIED;case L.FAILED_PRECONDITION:return d.FAILED_PRECONDITION;case L.ABORTED:return d.ABORTED;case L.OUT_OF_RANGE:return d.OUT_OF_RANGE;case L.UNIMPLEMENTED:return d.UNIMPLEMENTED;case L.DATA_LOSS:return d.DATA_LOSS;default:return T()}}(S=L||(L={}))[S.OK=0]="OK",S[S.CANCELLED=1]="CANCELLED",S[S.UNKNOWN=2]="UNKNOWN",S[S.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",S[S.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",S[S.NOT_FOUND=5]="NOT_FOUND",S[S.ALREADY_EXISTS=6]="ALREADY_EXISTS",S[S.PERMISSION_DENIED=7]="PERMISSION_DENIED",S[S.UNAUTHENTICATED=16]="UNAUTHENTICATED",S[S.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",S[S.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",S[S.ABORTED=10]="ABORTED",S[S.OUT_OF_RANGE=11]="OUT_OF_RANGE",S[S.UNIMPLEMENTED=12]="UNIMPLEMENTED",S[S.INTERNAL=13]="INTERNAL",S[S.UNAVAILABLE=14]="UNAVAILABLE",S[S.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Zp([4294967295,4294967295],0);class Zg{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Qs(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function em(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tm(t,e){return Qs(t,e.toTimestamp())}function yt(t){return B(!!t),O.fromTimestamp(function(e){const n=rt(e);return new F(n.seconds,n.nanos)}(t))}function Ml(t,e){return function(n){return new M(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function nm(t){const e=M.fromString(t);return B(um(e)),e}function Xs(t,e){return Ml(t.databaseId,e.path)}function im(t){const e=nm(t);return e.length===4?M.emptyPath():rm(e)}function sm(t){return new M(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rm(t){return B(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function ea(t,e,n){return{name:Xs(t,e),fields:n.value.mapValue.fields}}function om(t,e){let n;if(e instanceof Mn)n={update:ea(t,e.key,e.value)};else if(e instanceof Ll)n={delete:Xs(t,e.key)};else if(e instanceof qe)n={update:ea(t,e.key,e.data),updateMask:lm(e.fieldMask)};else{if(!(e instanceof Gg))return T();n={verify:Xs(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,r){const o=r.transform;if(o instanceof Ci)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof kt)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bt)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ki)return{fieldPath:r.field.canonicalString(),increment:o.gt};throw T()}(0,i))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:tm(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:T()}(t,e.precondition)),n}function am(t,e){return t&&t.length>0?(B(e!==void 0),t.map(n=>function(i,s){let r=i.updateTime?yt(i.updateTime):yt(s);return r.isEqual(O.min())&&(r=yt(s)),new zg(r,i.transformResults||[])}(n,e))):[]}function cm(t){let e=im(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let s=null;if(i>0){B(i===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let r=[];n.where&&(r=function(u){const h=xl(u);return h instanceof Be&&ml(h)?h.getFilters():[h]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(u=>function(h){return new Yt(ut(h.field),function(p){switch(p){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(u)));let a=null;n.limit&&(a=function(u){let h;return h=typeof u=="object"?u.value:u,Ur(h)?null:h}(n.limit));let c=null;n.startAt&&(c=function(u){const h=!!u.before,p=u.values||[];return new Si(p,h)}(n.startAt));let l=null;return n.endAt&&(l=function(u){const h=!u.before,p=u.values||[];return new Si(p,h)}(n.endAt)),Rg(e,s,o,r,a,"F",c,l)}function xl(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ut(e.unaryFilter.field);return U.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=ut(e.unaryFilter.field);return U.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ut(e.unaryFilter.field);return U.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ut(e.unaryFilter.field);return U.create(r,"!=",{nullValue:"NULL_VALUE"});default:return T()}}(t):t.fieldFilter!==void 0?function(e){return U.create(ut(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return T()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Be.create(e.compositeFilter.filters.map(n=>xl(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return T()}}(e.compositeFilter.op))}(t):T()}function ut(t){return Q.fromServerFormat(t.fieldPath)}function lm(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function um(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e){this.fe=e}}function dm(t){const e=cm({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Gs(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(){this.rn=new pm}addToCollectionParentIndex(e,n){return this.rn.add(n),f.resolve()}getCollectionParents(e,n){return f.resolve(this.rn.getEntries(n))}addFieldIndex(e,n){return f.resolve()}deleteFieldIndex(e,n){return f.resolve()}getDocumentsMatchingTarget(e,n){return f.resolve(null)}getIndexType(e,n){return f.resolve(0)}getFieldIndexes(e,n){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,n){return f.resolve(Ve.min())}getMinOffsetFromCollectionGroup(e,n){return f.resolve(Ve.min())}updateCollectionGroup(e,n,i){return f.resolve()}updateIndexEntries(e,n){return f.resolve()}}class pm{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n]||new te(M.comparator),r=!s.has(i);return this.index[n]=s.add(i),r}has(e){const n=e.lastSegment(),i=e.popLast(),s=this.index[n];return s&&s.has(i)}getEntries(e){return(this.index[e]||new te(M.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.Nn=e}next(){return this.Nn+=2,this.Nn}static kn(){return new Rt(0)}static Mn(){return new Rt(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(){this.changes=new Vt(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ue.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?f.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ym{constructor(e,n,i,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(i!==null&&en(i.mutation,s,oe.empty(),F.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,G()).next(()=>i))}getLocalViewOfDocuments(e,n,i=G()){const s=Qe();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,i).next(r=>{let o=Wn();return r.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const i=Qe();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,G()))}populateOverlays(e,n,i){const s=[];return i.forEach(r=>{n.has(r)||s.push(r)}),this.documentOverlayCache.getOverlays(e,s).next(r=>{r.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,i,s){let r=Ai();const o=Zt(),a=Zt();return n.forEach((c,l)=>{const u=i.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof qe)?r=r.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),en(u.mutation,l,u.mutation.getFieldMask(),F.now())):o.set(l.key,oe.empty())}),this.recalculateAndSaveOverlays(e,r).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new mm(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const i=Zt();let s=new ie((o,a)=>o-a),r=G();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=i.get(c)||oe.empty();u=a.applyToLocalView(l,u),i.set(c,u);const h=(s.get(a.batchId)||G()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Sl();u.forEach(p=>{if(!r.has(p)){const y=Ol(n.get(p),i.get(p));y!==null&&h.set(p,y),r=r.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return f.waitFor(o)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i){return function(s){return I.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Pg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i):this.getDocumentsMatchingCollectionQuery(e,n,i)}getNextDocuments(e,n,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,s).next(r=>{const o=s-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,s-r.size):f.resolve(Qe());let a=-1,c=r;return o.next(l=>f.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),r.get(u)?f.resolve():this.remoteDocumentCache.getEntry(e,u).next(p=>{c=c.insert(u,p)}))).next(()=>this.populateOverlays(e,l,r)).next(()=>this.computeViews(e,c,l,G())).next(u=>({batchId:a,changes:Tl(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new I(n)).next(i=>{let s=Wn();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,i){const s=n.collectionGroup;let r=Wn();return this.indexManager.getCollectionParents(e,s).next(o=>f.forEach(o,a=>{const c=function(l,u){return new Gi(u,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i).next(l=>{l.forEach((u,h)=>{r=r.insert(u,h)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(r=>(s=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s))).next(r=>{s.forEach((a,c)=>{const l=c.getKey();r.get(l)===null&&(r=r.insert(l,ue.newInvalidDocument(l)))});let o=Wn();return r.forEach((a,c)=>{const l=s.get(a);l!==void 0&&en(l.mutation,c,oe.empty(),F.now()),jr(n,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vm{constructor(e){this.serializer=e,this.cs=new Map,this.hs=new Map}getBundleMetadata(e,n){return f.resolve(this.cs.get(n))}saveBundleMetadata(e,n){var i;return this.cs.set(n.id,{id:(i=n).id,version:i.version,createTime:yt(i.createTime)}),f.resolve()}getNamedQuery(e,n){return f.resolve(this.hs.get(n))}saveNamedQuery(e,n){return this.hs.set(n.name,function(i){return{name:i.name,query:dm(i.bundledQuery),readTime:yt(i.readTime)}}(n)),f.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wm{constructor(){this.overlays=new ie(I.comparator),this.ls=new Map}getOverlay(e,n){return f.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Qe();return f.forEach(n,s=>this.getOverlay(e,s).next(r=>{r!==null&&i.set(s,r)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((s,r)=>{this.we(e,n,r)}),f.resolve()}removeOverlaysForBatchId(e,n,i){const s=this.ls.get(i);return s!==void 0&&(s.forEach(r=>this.overlays=this.overlays.remove(r)),this.ls.delete(i)),f.resolve()}getOverlaysForCollection(e,n,i){const s=Qe(),r=n.length+1,o=new I(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===r&&c.largestBatchId>i&&s.set(c.getKey(),c)}return f.resolve(s)}getOverlaysForCollectionGroup(e,n,i,s){let r=new ie((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>i){let u=r.get(l.largestBatchId);u===null&&(u=Qe(),r=r.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Qe(),c=r.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return f.resolve(a)}we(e,n,i){const s=this.overlays.get(i.key);if(s!==null){const o=this.ls.get(s.largestBatchId).delete(i.key);this.ls.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(i.key,new Xg(n,i));let r=this.ls.get(n);r===void 0&&(r=G(),this.ls.set(n,r)),this.ls.set(n,r.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(){this.fs=new te(x.ds),this.ws=new te(x._s)}isEmpty(){return this.fs.isEmpty()}addReference(e,n){const i=new x(e,n);this.fs=this.fs.add(i),this.ws=this.ws.add(i)}gs(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.ys(new x(e,n))}ps(e,n){e.forEach(i=>this.removeReference(i,n))}Is(e){const n=new I(new M([])),i=new x(n,e),s=new x(n,e+1),r=[];return this.ws.forEachInRange([i,s],o=>{this.ys(o),r.push(o.key)}),r}Ts(){this.fs.forEach(e=>this.ys(e))}ys(e){this.fs=this.fs.delete(e),this.ws=this.ws.delete(e)}Es(e){const n=new I(new M([])),i=new x(n,e),s=new x(n,e+1);let r=G();return this.ws.forEachInRange([i,s],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new x(e,0),i=this.fs.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class x{constructor(e,n){this.key=e,this.As=n}static ds(e,n){return I.comparator(e.key,n.key)||R(e.As,n.As)}static _s(e,n){return R(e.As,n.As)||I.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Em{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.vs=1,this.Rs=new te(x.ds)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,s){const r=this.vs;this.vs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Qg(r,n,i,s);this.mutationQueue.push(o);for(const a of s)this.Rs=this.Rs.add(new x(a.key,r)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,n){return f.resolve(this.Ps(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,s=this.bs(i),r=s<0?0:s;return f.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.vs-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new x(n,0),s=new x(n,Number.POSITIVE_INFINITY),r=[];return this.Rs.forEachInRange([i,s],o=>{const a=this.Ps(o.As);r.push(a)}),f.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new te(R);return n.forEach(s=>{const r=new x(s,0),o=new x(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([r,o],a=>{i=i.add(a.As)})}),f.resolve(this.Vs(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,s=i.length+1;let r=i;I.isDocumentKey(r)||(r=r.child(""));const o=new x(new I(r),0);let a=new te(R);return this.Rs.forEachWhile(c=>{const l=c.key.path;return!!i.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.As)),!0)},o),f.resolve(this.Vs(a))}Vs(e){const n=[];return e.forEach(i=>{const s=this.Ps(i);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){B(this.Ss(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Rs;return f.forEach(n.mutations,s=>{const r=new x(s.key,n.batchId);return i=i.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=i})}Cn(e){}containsKey(e,n){const i=new x(n,0),s=this.Rs.firstAfterOrEqual(i);return f.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Ss(e,n){return this.bs(e)}bs(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Ps(e){const n=this.bs(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(e){this.Ds=e,this.docs=new ie(I.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,s=this.docs.get(i),r=s?s.size:0,o=this.Ds(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return f.resolve(i?i.document.mutableCopy():ue.newInvalidDocument(n))}getEntries(e,n){let i=Ai();return n.forEach(s=>{const r=this.docs.get(s);i=i.insert(s,r?r.document.mutableCopy():ue.newInvalidDocument(s))}),f.resolve(i)}getDocumentsMatchingQuery(e,n,i,s){let r=Ai();const o=n.path,a=new I(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||hg(ug(u),i)<=0||(s.has(u.key)||jr(n,u))&&(r=r.insert(u.key,u.mutableCopy()))}return f.resolve(r)}getAllFromCollectionGroup(e,n,i,s){T()}Cs(e,n){return f.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new _m(this)}getSize(e){return f.resolve(this.size)}}class _m extends gm{constructor(e){super(),this.os=e}applyChanges(e){const n=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?n.push(this.os.addEntry(e,s)):this.os.removeEntry(i)}),f.waitFor(n)}getFromCache(e,n){return this.os.getEntry(e,n)}getAllFromCache(e,n){return this.os.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(e){this.persistence=e,this.xs=new Vt(n=>Br(n),$r),this.lastRemoteSnapshotVersion=O.min(),this.highestTargetId=0,this.Ns=0,this.ks=new qr,this.targetCount=0,this.Ms=Rt.kn()}forEachTarget(e,n){return this.xs.forEach((i,s)=>n(s)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Ns)}allocateTargetId(e){return this.highestTargetId=this.Ms.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Ns&&(this.Ns=n),f.resolve()}Fn(e){this.xs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Ms=new Rt(n),this.highestTargetId=n),e.sequenceNumber>this.Ns&&(this.Ns=e.sequenceNumber)}addTargetData(e,n){return this.Fn(n),this.targetCount+=1,f.resolve()}updateTargetData(e,n){return this.Fn(n),f.resolve()}removeTargetData(e,n){return this.xs.delete(n.target),this.ks.Is(n.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,n,i){let s=0;const r=[];return this.xs.forEach((o,a)=>{a.sequenceNumber<=n&&i.get(a.targetId)===null&&(this.xs.delete(o),r.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),f.waitFor(r).next(()=>s)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,n){const i=this.xs.get(n)||null;return f.resolve(i)}addMatchingKeys(e,n,i){return this.ks.gs(n,i),f.resolve()}removeMatchingKeys(e,n,i){this.ks.ps(n,i);const s=this.persistence.referenceDelegate,r=[];return s&&n.forEach(o=>{r.push(s.markPotentiallyOrphaned(e,o))}),f.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.ks.Is(n),f.resolve()}getMatchingKeysForTargetId(e,n){const i=this.ks.Es(n);return f.resolve(i)}containsKey(e,n){return f.resolve(this.ks.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sm{constructor(e,n){this.$s={},this.overlays={},this.Os=new ul(0),this.Fs=!1,this.Fs=!0,this.referenceDelegate=e(this),this.Bs=new Tm(this),this.indexManager=new fm,this.remoteDocumentCache=function(i){return new Im(i)}(i=>this.referenceDelegate.Ls(i)),this.serializer=new hm(n),this.qs=new vm(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Fs=!1,Promise.resolve()}get started(){return this.Fs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wm,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.$s[e.toKey()];return i||(i=new Em(n,this.referenceDelegate),this.$s[e.toKey()]=i),i}getTargetCache(){return this.Bs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.qs}runTransaction(e,n,i){m("MemoryPersistence","Starting transaction:",e);const s=new Am(this.Os.next());return this.referenceDelegate.Us(),i(s).next(r=>this.referenceDelegate.Ks(s).next(()=>r)).toPromise().then(r=>(s.raiseOnCommittedEvent(),r))}Gs(e,n){return f.or(Object.values(this.$s).map(i=>()=>i.containsKey(e,n)))}}class Am extends fg{constructor(e){super(),this.currentSequenceNumber=e}}class zr{constructor(e){this.persistence=e,this.Qs=new qr,this.js=null}static zs(e){return new zr(e)}get Ws(){if(this.js)return this.js;throw T()}addReference(e,n,i){return this.Qs.addReference(i,n),this.Ws.delete(i.toString()),f.resolve()}removeReference(e,n,i){return this.Qs.removeReference(i,n),this.Ws.add(i.toString()),f.resolve()}markPotentiallyOrphaned(e,n){return this.Ws.add(n.toString()),f.resolve()}removeTarget(e,n){this.Qs.Is(n.targetId).forEach(s=>this.Ws.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(r=>this.Ws.add(r.toString()))}).next(()=>i.removeTargetData(e,n))}Us(){this.js=new Set}Ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Ws,i=>{const s=I.fromPath(i);return this.Hs(e,s).next(r=>{r||n.removeEntry(s,O.min())})}).next(()=>(this.js=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hs(e,n).next(i=>{i?this.Ws.delete(n.toString()):this.Ws.add(n.toString())})}Ls(e){return 0}Hs(e,n){return f.or([()=>f.resolve(this.Qs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gs(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(e,n,i,s){this.targetId=e,this.fromCache=n,this.Fi=i,this.Bi=s}static Li(e,n){let i=G(),s=G();for(const r of n.docChanges)switch(r.type){case 0:i=i.add(r.doc.key);break;case 1:s=s.add(r.doc.key)}return new Kr(e,n.fromCache,i,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(){this.qi=!1}initialize(e,n){this.Ui=e,this.indexManager=n,this.qi=!0}getDocumentsMatchingQuery(e,n,i,s){return this.Ki(e,n).next(r=>r||this.Gi(e,n,s,i)).next(r=>r||this.Qi(e,n))}Ki(e,n){if(Go(n))return f.resolve(null);let i=Ct(n);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Gs(n,null,"F"),i=Ct(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(r=>{const o=G(...r);return this.Ui.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,i).next(c=>{const l=this.ji(n,a);return this.zi(n,l,o,c.readTime)?this.Ki(e,Gs(n,null,"F")):this.Wi(e,l,n,c)}))})))}Gi(e,n,i,s){return Go(n)||s.isEqual(O.min())?this.Qi(e,n):this.Ui.getDocuments(e,i).next(r=>{const o=this.ji(n,r);return this.zi(n,o,i,s)?this.Qi(e,n):($o()<=A.DEBUG&&m("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qo(n)),this.Wi(e,o,n,lg(s,-1)))})}ji(e,n){let i=new te(Lg(e));return n.forEach((s,r)=>{jr(e,r)&&(i=i.add(r))}),i}zi(e,n,i,s){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(s)>0)}Qi(e,n){return $o()<=A.DEBUG&&m("QueryEngine","Using full collection scan to execute query:",Qo(n)),this.Ui.getDocumentsMatchingQuery(e,n,Ve.min())}Wi(e,n,i,s){return this.Ui.getDocumentsMatchingQuery(e,i,s).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class km{constructor(e,n,i,s){this.persistence=e,this.Hi=n,this.serializer=s,this.Ji=new ie(R),this.Yi=new Vt(r=>Br(r),$r),this.Xi=new Map,this.Zi=e.getRemoteDocumentCache(),this.Bs=e.getTargetCache(),this.qs=e.getBundleCache(),this.tr(i)}tr(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new ym(this.Zi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Zi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function bm(t,e,n,i){return new km(t,e,n,i)}async function Ul(t,e){const n=N(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let s;return n.mutationQueue.getAllMutationBatches(i).next(r=>(s=r,n.tr(e),n.mutationQueue.getAllMutationBatches(i))).next(r=>{const o=[],a=[];let c=G();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of r){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(i,c).next(l=>({er:l,removedBatchIds:o,addedBatchIds:a}))})})}function Rm(t,e){const n=N(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),r=n.Zi.newChangeBuffer({trackRemovals:!0});return function(o,a,c,l){const u=c.batch,h=u.keys();let p=f.resolve();return h.forEach(y=>{p=p.next(()=>l.getEntry(a,y)).next(_=>{const b=c.docVersions.get(y);B(b!==null),_.version.compareTo(b)<0&&(u.applyToRemoteDocument(_,c),_.isValidDocument()&&(_.setReadTime(c.commitVersion),l.addEntry(_)))})}),p.next(()=>o.mutationQueue.removeMutationBatch(a,u))}(n,i,e,r).next(()=>r.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let a=G();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>n.localDocuments.getDocuments(i,s))})}function Dm(t){const e=N(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Bs.getLastRemoteSnapshotVersion(n))}function Nm(t,e){const n=N(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}class ta{constructor(){this.activeTargetIds=Bg()}lr(e){this.activeTargetIds=this.activeTargetIds.add(e)}dr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}hr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Om{constructor(){this.Hr=new ta,this.Jr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.Hr.lr(e),this.Jr[e]||"not-current"}updateQueryState(e,n,i){this.Jr[e]=n}removeLocalQueryTarget(e){this.Hr.dr(e)}isLocalQueryTarget(e){return this.Hr.activeTargetIds.has(e)}clearQueryState(e){delete this.Jr[e]}getAllActiveQueryTargets(){return this.Hr.activeTargetIds}isActiveQueryTarget(e){return this.Hr.activeTargetIds.has(e)}start(){return this.Hr=new ta,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pm{Yr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this.Xr=()=>this.Zr(),this.eo=()=>this.no(),this.so=[],this.io()}Yr(e){this.so.push(e)}shutdown(){window.removeEventListener("online",this.Xr),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Xr),window.addEventListener("offline",this.eo)}Zr(){m("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.so)e(0)}no(){m("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.so)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gn=null;function _s(){return Gn===null?Gn=268435456+Math.round(2147483648*Math.random()):Gn++,"0x"+Gn.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mm{constructor(e){this.ro=e.ro,this.oo=e.oo}uo(e){this.co=e}ao(e){this.ho=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.ro(e)}fo(){this.co()}wo(e){this.ho(e)}_o(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K="WebChannelConnection";class xm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.mo=n+"://"+e.host,this.yo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get po(){return!1}Io(e,n,i,s,r){const o=_s(),a=this.To(e,n);m("RestConnection",`Sending RPC '${e}' ${o}:`,a,i);const c={};return this.Eo(c,s,r),this.Ao(e,a,c,i).then(l=>(m("RestConnection",`Received RPC '${e}' ${o}: `,l),l),l=>{throw Ei("RestConnection",`RPC '${e}' ${o} failed with error: `,l,"url: ",a,"request:",i),l})}vo(e,n,i,s,r,o){return this.Io(e,n,i,s,r)}Eo(e,n,i){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ut,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,r)=>e[r]=s),i&&i.headers.forEach((s,r)=>e[r]=s)}To(e,n){const i=Lm[e];return`${this.mo}/v1/${n}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Ao(e,n,i,s){const r=_s();return new Promise((o,a)=>{const c=new Yp;c.setWithCredentials(!0),c.listenOnce(Qp.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Is.NO_ERROR:const u=c.getResponseJson();m(K,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(u)),o(u);break;case Is.TIMEOUT:m(K,`RPC '${e}' ${r} timed out`),a(new w(d.DEADLINE_EXCEEDED,"Request time out"));break;case Is.HTTP_ERROR:const h=c.getStatus();if(m(K,`RPC '${e}' ${r} failed with status:`,h,"response text:",c.getResponseText()),h>0){let p=c.getResponseJson();Array.isArray(p)&&(p=p[0]);const y=p==null?void 0:p.error;if(y&&y.status&&y.message){const _=function(b){const C=b.toLowerCase().replace(/_/g,"-");return Object.values(d).indexOf(C)>=0?C:d.UNKNOWN}(y.status);a(new w(_,y.message))}else a(new w(d.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new w(d.UNAVAILABLE,"Connection failed."));break;default:T()}}finally{m(K,`RPC '${e}' ${r} completed.`)}});const l=JSON.stringify(s);m(K,`RPC '${e}' ${r} sending request:`,s),c.send(n,"POST",l,i,15)})}Ro(e,n,i){const s=_s(),r=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=Wp(),a=Gp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.xmlHttpFactory=new Jp({})),this.Eo(c.initMessageHeaders,n,i),c.encodeInitMessageHeaders=!0;const u=r.join("");m(K,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let p=!1,y=!1;const _=new Mm({ro:C=>{y?m(K,`Not sending because RPC '${e}' stream ${s} is closed:`,C):(p||(m(K,`Opening RPC '${e}' stream ${s} transport.`),h.open(),p=!0),m(K,`RPC '${e}' stream ${s} sending:`,C),h.send(C))},oo:()=>h.close()}),b=(C,ne,se)=>{C.listen(ne,Re=>{try{se(Re)}catch(de){setTimeout(()=>{throw de},0)}})};return b(h,qn.EventType.OPEN,()=>{y||m(K,`RPC '${e}' stream ${s} transport opened.`)}),b(h,qn.EventType.CLOSE,()=>{y||(y=!0,m(K,`RPC '${e}' stream ${s} transport closed`),_.wo())}),b(h,qn.EventType.ERROR,C=>{y||(y=!0,Ei(K,`RPC '${e}' stream ${s} transport errored:`,C),_.wo(new w(d.UNAVAILABLE,"The operation could not be completed")))}),b(h,qn.EventType.MESSAGE,C=>{var ne;if(!y){const se=C.data[0];B(!!se);const Re=se,de=Re.error||((ne=Re[0])===null||ne===void 0?void 0:ne.error);if(de){m(K,`RPC '${e}' stream ${s} received error:`,de);const $t=de.status;let ze=function(ss){const ct=L[ss];if(ct!==void 0)return Yg(ct)}($t),jt=de.message;ze===void 0&&(ze=d.INTERNAL,jt="Unknown error status: "+$t+" with message "+de.message),y=!0,_.wo(new w(ze,jt)),h.close()}else m(K,`RPC '${e}' stream ${s} received:`,se),_._o(se)}}),b(a,Xp.STAT_EVENT,C=>{C.stat===Vo.PROXY?m(K,`RPC '${e}' stream ${s} detected buffering proxy`):C.stat===Vo.NOPROXY&&m(K,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.fo()},0),_}}function Ts(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(t){return new Zg(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(e,n,i=1e3,s=1.5,r=6e4){this.ii=e,this.timerId=n,this.Po=i,this.bo=s,this.Vo=r,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(e){this.cancel();const n=Math.floor(this.So+this.ko()),i=Math.max(0,Date.now()-this.Co),s=Math.max(0,n-i);s>0&&m("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.So} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,s,()=>(this.Co=Date.now(),e())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){this.Do!==null&&(this.Do.skipDelay(),this.Do=null)}cancel(){this.Do!==null&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(e,n,i,s,r,o,a,c){this.ii=e,this.$o=i,this.Oo=s,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Fo=0,this.Bo=null,this.Lo=null,this.stream=null,this.qo=new Fl(e,n)}Uo(){return this.state===1||this.state===5||this.Ko()}Ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Go()}async stop(){this.Uo()&&await this.close(0)}Qo(){this.state=0,this.qo.reset()}jo(){this.Ko()&&this.Bo===null&&(this.Bo=this.ii.enqueueAfterDelay(this.$o,6e4,()=>this.zo()))}Wo(e){this.Ho(),this.stream.send(e)}async zo(){if(this.Ko())return this.close(0)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}Jo(){this.Lo&&(this.Lo.cancel(),this.Lo=null)}async close(e,n){this.Ho(),this.Jo(),this.qo.cancel(),this.Fo++,e!==4?this.qo.reset():n&&n.code===d.RESOURCE_EXHAUSTED?(st(n.toString()),st("Using maximum backoff delay to prevent overloading the backend."),this.qo.xo()):n&&n.code===d.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Yo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ao(n)}Yo(){}auth(){this.state=1;const e=this.Xo(this.Fo),n=this.Fo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.Fo===n&&this.Zo(i,s)},i=>{e(()=>{const s=new w(d.UNKNOWN,"Fetching auth token failed: "+i.message);return this.tu(s)})})}Zo(e,n){const i=this.Xo(this.Fo);this.stream=this.eu(e,n),this.stream.uo(()=>{i(()=>(this.state=2,this.Lo=this.ii.enqueueAfterDelay(this.Oo,1e4,()=>(this.Ko()&&(this.state=3),Promise.resolve())),this.listener.uo()))}),this.stream.ao(s=>{i(()=>this.tu(s))}),this.stream.onMessage(s=>{i(()=>this.onMessage(s))})}Go(){this.state=5,this.qo.No(async()=>{this.state=0,this.start()})}tu(e){return m("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.Fo===e?n():(m("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Fm extends Um{constructor(e,n,i,s,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,s,o),this.serializer=r,this.ru=!1}get ou(){return this.ru}start(){this.ru=!1,this.lastStreamToken=void 0,super.start()}Yo(){this.ru&&this.uu([])}eu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(B(!!e.streamToken),this.lastStreamToken=e.streamToken,this.ru){this.qo.reset();const n=am(e.writeResults,e.commitTime),i=yt(e.commitTime);return this.listener.cu(i,n)}return B(!e.writeResults||e.writeResults.length===0),this.ru=!0,this.listener.au()}hu(){const e={};e.database=sm(this.serializer),this.Wo(e)}uu(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>om(this.serializer,i))};this.Wo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm extends class{}{constructor(e,n,i,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=s,this.lu=!1}fu(){if(this.lu)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}Io(e,n,i){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,r])=>this.connection.Io(e,n,i,s,r)).catch(s=>{throw s.name==="FirebaseError"?(s.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(d.UNKNOWN,s.toString())})}vo(e,n,i,s){return this.fu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.vo(e,n,i,r,o,s)).catch(r=>{throw r.name==="FirebaseError"?(r.code===d.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new w(d.UNKNOWN,r.toString())})}terminate(){this.lu=!0}}class Bm{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.wu=0,this._u=null,this.mu=!0}gu(){this.wu===0&&(this.yu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.pu("Backend didn't respond within 10 seconds."),this.yu("Offline"),Promise.resolve())))}Iu(e){this.state==="Online"?this.yu("Unknown"):(this.wu++,this.wu>=1&&(this.Tu(),this.pu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.yu("Offline")))}set(e){this.Tu(),this.wu=0,e==="Online"&&(this.mu=!1),this.yu(e)}yu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}pu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.mu?(st(n),this.mu=!1):m("OnlineStateTracker",n)}Tu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $m{constructor(e,n,i,s,r){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.Eu=[],this.Au=new Map,this.vu=new Set,this.Ru=[],this.Pu=r,this.Pu.Yr(o=>{i.enqueueAndForget(async()=>{Un(this)&&(m("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=N(a);c.vu.add(4),await xn(c),c.bu.set("Unknown"),c.vu.delete(4),await Yi(c)}(this))})}),this.bu=new Bm(i,s)}}async function Yi(t){if(Un(t))for(const e of t.Ru)await e(!0)}async function xn(t){for(const e of t.Ru)await e(!1)}function Un(t){return N(t).vu.size===0}async function Vl(t,e,n){if(!Wi(e))throw e;t.vu.add(1),await xn(t),t.bu.set("Offline"),n||(n=()=>Dm(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{m("RemoteStore","Retrying IndexedDB access"),await n(),t.vu.delete(1),await Yi(t)})}function Bl(t,e){return e().catch(n=>Vl(t,n,e))}async function Zi(t){const e=N(t),n=$e(e);let i=e.Eu.length>0?e.Eu[e.Eu.length-1].batchId:-1;for(;jm(e);)try{const s=await Nm(e.localStore,i);if(s===null){e.Eu.length===0&&n.jo();break}i=s.batchId,Hm(e,s)}catch(s){await Vl(e,s)}$l(e)&&jl(e)}function jm(t){return Un(t)&&t.Eu.length<10}function Hm(t,e){t.Eu.push(e);const n=$e(t);n.Ko()&&n.ou&&n.uu(e.mutations)}function $l(t){return Un(t)&&!$e(t).Uo()&&t.Eu.length>0}function jl(t){$e(t).start()}async function qm(t){$e(t).hu()}async function zm(t){const e=$e(t);for(const n of t.Eu)e.uu(n.mutations)}async function Km(t,e,n){const i=t.Eu.shift(),s=Hr.from(i,e,n);await Bl(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Zi(t)}async function Wm(t,e){e&&$e(t).ou&&await async function(n,i){if(s=i.code,Jg(s)&&s!==d.ABORTED){const r=n.Eu.shift();$e(n).Qo(),await Bl(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,i)),await Zi(n)}var s}(t,e),$l(t)&&jl(t)}async function ia(t,e){const n=N(t);n.asyncQueue.verifyOperationInProgress(),m("RemoteStore","RemoteStore received new credentials");const i=Un(n);n.vu.add(3),await xn(n),i&&n.bu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.vu.delete(3),await Yi(n)}async function Gm(t,e){const n=N(t);e?(n.vu.delete(2),await Yi(n)):e||(n.vu.add(2),await xn(n),n.bu.set("Unknown"))}function $e(t){return t.Du||(t.Du=function(e,n,i){const s=N(e);return s.fu(),new Fm(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{uo:qm.bind(null,t),ao:Wm.bind(null,t),au:zm.bind(null,t),cu:Km.bind(null,t)}),t.Ru.push(async e=>{e?(t.Du.Qo(),await Zi(t)):(await t.Du.stop(),t.Eu.length>0&&(m("RemoteStore",`Stopping write stream with ${t.Eu.length} pending writes`),t.Eu=[]))})),t.Du}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,i,s,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=s,this.removalCallback=r,this.deferred=new Ye,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,i,s,r){const o=Date.now()+i,a=new Wr(e,n,o,s,r);return a.start(i),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(d.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hl(t,e){if(st("AsyncQueue",`${e}: ${t}`),Wi(t))return new w(d.UNAVAILABLE,`${e}: ${t}`);throw t}class Qm{constructor(){this.queries=new Vt(e=>Il(e),El),this.onlineState="Unknown",this.ku=new Set}}function Xm(t){t.ku.forEach(e=>{e.next()})}class Jm{constructor(e,n,i,s,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=s,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.dc={},this.wc=new Vt(a=>Il(a),El),this._c=new Map,this.mc=new Set,this.gc=new ie(I.comparator),this.yc=new Map,this.Ic=new qr,this.Tc={},this.Ec=new Map,this.Ac=Rt.Mn(),this.onlineState="Unknown",this.vc=void 0}get isPrimaryClient(){return this.vc===!0}}async function Ym(t,e,n){const i=ny(t);try{const s=await function(r,o){const a=N(r),c=F.now(),l=o.reduce((p,y)=>p.add(y.key),G());let u,h;return a.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Ai(),_=G();return a.Zi.getEntries(p,l).next(b=>{y=b,y.forEach((C,ne)=>{ne.isValidDocument()||(_=_.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(p,y)).next(b=>{u=b;const C=[];for(const ne of o){const se=Wg(ne,u.get(ne.key).overlayedDocument);se!=null&&C.push(new qe(ne.key,se,fl(se.value.mapValue),ve.exists(!0)))}return a.mutationQueue.addMutationBatch(p,c,C,o)}).next(b=>{h=b;const C=b.applyToLocalDocumentSet(u,_);return a.documentOverlayCache.saveOverlays(p,b.batchId,C)})}).then(()=>({batchId:h.batchId,changes:Tl(u)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(r,o,a){let c=r.Tc[r.currentUser.toKey()];c||(c=new ie(R)),c=c.insert(o,a),r.Tc[r.currentUser.toKey()]=c}(i,s.batchId,n),await es(i,s.changes),await Zi(i.remoteStore)}catch(s){const r=Hl(s,"Failed to persist write");n.reject(r)}}function sa(t,e,n){const i=N(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const s=[];i.wc.forEach((r,o)=>{const a=o.view.Mu(e);a.snapshot&&s.push(a.snapshot)}),function(r,o){const a=N(r);a.onlineState=o;let c=!1;a.queries.forEach((l,u)=>{for(const h of u.listeners)h.Mu(o)&&(c=!0)}),c&&Xm(a)}(i.eventManager,e),s.length&&i.dc.nu(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function Zm(t,e){const n=N(t),i=e.batch.batchId;try{const s=await Rm(n.localStore,e);zl(n,i,null),ql(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await es(n,s)}catch(s){await ll(s)}}async function ey(t,e,n){const i=N(t);try{const s=await function(r,o){const a=N(r);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let l;return a.mutationQueue.lookupMutationBatch(c,o).next(u=>(B(u!==null),l=u.keys(),a.mutationQueue.removeMutationBatch(c,u))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,l,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,l)).next(()=>a.localDocuments.getDocuments(c,l))})}(i.localStore,e);zl(i,e,n),ql(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await es(i,s)}catch(s){await ll(s)}}function ql(t,e){(t.Ec.get(e)||[]).forEach(n=>{n.resolve()}),t.Ec.delete(e)}function zl(t,e,n){const i=N(t);let s=i.Tc[i.currentUser.toKey()];if(s){const r=s.get(e);r&&(n?r.reject(n):r.resolve(),s=s.remove(e)),i.Tc[i.currentUser.toKey()]=s}}async function es(t,e,n){const i=N(t),s=[],r=[],o=[];i.wc.isEmpty()||(i.wc.forEach((a,c)=>{o.push(i.Rc(c,e,n).then(l=>{if((l||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Kr.Li(c.targetId,l);r.push(u)}}))}),await Promise.all(o),i.dc.nu(s),await async function(a,c){const l=N(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",u=>f.forEach(c,h=>f.forEach(h.Fi,p=>l.persistence.referenceDelegate.addReference(u,h.targetId,p)).next(()=>f.forEach(h.Bi,p=>l.persistence.referenceDelegate.removeReference(u,h.targetId,p)))))}catch(u){if(!Wi(u))throw u;m("LocalStore","Failed to update sequence numbers: "+u)}for(const u of c){const h=u.targetId;if(!u.fromCache){const p=l.Ji.get(h),y=p.snapshotVersion,_=p.withLastLimboFreeSnapshotVersion(y);l.Ji=l.Ji.insert(h,_)}}}(i.localStore,r))}async function ty(t,e){const n=N(t);if(!n.currentUser.isEqual(e)){m("SyncEngine","User change. New user:",e.toKey());const i=await Ul(n.localStore,e);n.currentUser=e,function(s,r){s.Ec.forEach(o=>{o.forEach(a=>{a.reject(new w(d.CANCELLED,r))})}),s.Ec.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await es(n,i.er)}}function ny(t){const e=N(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Zm.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ey.bind(null,e),e}class ra{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ji(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return bm(this.persistence,new Cm,e.initialUser,this.serializer)}createPersistence(e){return new Sm(zr.zs,this.serializer)}createSharedClientState(e){return new Om}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class iy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>sa(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=ty.bind(null,this.syncEngine),await Gm(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new Qm}createDatastore(e){const n=Ji(e.databaseInfo.databaseId),i=(s=e.databaseInfo,new xm(s));var s;return function(r,o,a,c){return new Vm(r,o,a,c)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return n=this.localStore,i=this.datastore,s=e.asyncQueue,r=a=>sa(this.syncEngine,a,0),o=na.D()?new na:new Pm,new $m(n,i,s,r,o);var n,i,s,r,o}createSyncEngine(e,n){return function(i,s,r,o,a,c,l){const u=new Jm(i,s,r,o,a,c);return l&&(u.vc=!0),u}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=N(e);m("RemoteStore","RemoteStore shutting down."),n.vu.add(5),await xn(n),n.Pu.shutdown(),n.bu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=s,this.user=W.UNAUTHENTICATED,this.clientId=cl.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async r=>{m("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(i,r=>(m("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(d.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ye;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=Hl(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Ss(t,e){t.asyncQueue.verifyOperationInProgress(),m("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async s=>{i.isEqual(s)||(await Ul(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function oa(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oy(t);m("FirestoreClient","Initializing OnlineComponentProvider");const i=await t.getConfiguration();await e.initialize(n,i),t.setCredentialChangeListener(s=>ia(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,r)=>ia(e.remoteStore,r)),t._onlineComponents=e}function ry(t){return t.name==="FirebaseError"?t.code===d.FAILED_PRECONDITION||t.code===d.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function oy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){m("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ss(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!ry(n))throw n;Ei("Error using user provided cache. Falling back to memory cache: "+n),await Ss(t,new ra)}}else m("FirestoreClient","Using default OfflineComponentProvider"),await Ss(t,new ra);return t._offlineComponents}async function ay(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(m("FirestoreClient","Using user provided OnlineComponentProvider"),await oa(t,t._uninitializedComponentsProvider._online)):(m("FirestoreClient","Using default OnlineComponentProvider"),await oa(t,new iy))),t._onlineComponents}function cy(t){return ay(t).then(e=>e.syncEngine)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t,e,n){if(!n)throw new w(d.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function uy(t,e,n,i){if(e===!0&&i===!0)throw new w(d.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ca(t){if(!I.isDocumentKey(t))throw new w(d.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Gr(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":T()}function mn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(d.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Gr(t);throw new w(d.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class la{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new w(d.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new w(d.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}uy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Kl((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(d.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(n=this.experimentalLongPollingOptions,i=e.experimentalLongPollingOptions,n.timeoutSeconds===i.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var n,i}}class Qr{constructor(e,n,i,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new la({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(d.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new w(d.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new la(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new eg;switch(n.type){case"firstParty":return new sg(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new w(d.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=aa.get(e);n&&(m("ComponentProvider","Removing Datastore"),aa.delete(e),n.terminate())}(this),Promise.resolve()}}function hy(t,e,n,i={}){var s;const r=(t=mn(t,Qr))._getSettings(),o=`${e}:${n}`;if(r.host!=="firestore.googleapis.com"&&r.host!==o&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},r),{host:o,ssl:!1})),i.mockUserToken){let a,c;if(typeof i.mockUserToken=="string")a=i.mockUserToken,c=W.MOCK_USER;else{a=yu(i.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=i.mockUserToken.sub||i.mockUserToken.user_id;if(!l)throw new w(d.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new W(l)}t._authCredentials=new tg(new al(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new yn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new we(this.firestore,e,this._key)}}class Xr{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new Xr(this.firestore,e,this._query)}}class yn extends Xr{constructor(e,n,i){super(e,n,Dg(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new we(this.firestore,null,new I(e))}withConverter(e){return new yn(this.firestore,e,this._path)}}function As(t,e,...n){if(t=Z(t),arguments.length===1&&(e=cl.A()),ly("doc","path",e),t instanceof Qr){const i=M.fromString(e,...n);return ca(i),new we(t,null,new I(i))}{if(!(t instanceof we||t instanceof yn))throw new w(d.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(M.fromString(e,...n));return ca(i),new we(t.firestore,t instanceof yn?t.converter:null,new I(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dy{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Fl(this,"async_queue_retry"),this.Xc=()=>{const n=Ts();n&&m("AsyncQueue","Visibility state changed to "+n.visibilityState),this.qo.Mo()};const e=Ts();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Zc(),this.ta(e)}enterRestrictedMode(e){if(!this.jc){this.jc=!0,this.Jc=e||!1;const n=Ts();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xc)}}enqueue(e){if(this.Zc(),this.jc)return new Promise(()=>{});const n=new Ye;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Qc.push(e),this.ea()))}async ea(){if(this.Qc.length!==0){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(e){if(!Wi(e))throw e;m("AsyncQueue","Operation failed with retryable error: "+e)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(e){const n=this.Gc.then(()=>(this.Hc=!0,e().catch(i=>{this.Wc=i,this.Hc=!1;const s=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(i);throw st("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.Hc=!1,i))));return this.Gc=n,n}enqueueAfterDelay(e,n,i){this.Zc(),this.Yc.indexOf(e)>-1&&(n=0);const s=Wr.createAndSchedule(this,e,n,i,r=>this.na(r));return this.zc.push(s),s}Zc(){this.Wc&&T()}verifyOperationInProgress(){}async sa(){let e;do e=this.Gc,await e;while(e!==this.Gc)}ia(e){for(const n of this.zc)if(n.timerId===e)return!0;return!1}ra(e){return this.sa().then(()=>{this.zc.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this.zc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.sa()})}oa(e){this.Yc.push(e)}na(e){const n=this.zc.indexOf(e);this.zc.splice(n,1)}}class Jr extends Qr{constructor(e,n,i,s){super(e,n,i,s),this.type="firestore",this._queue=new dy,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Wl(this),this._firestoreClient.terminate()}}function fy(t,e){const n=typeof t=="object"?t:Ta(),i=typeof t=="string"?t:e||"(default)",s=sr(n,"firestore").getImmediate({identifier:i});if(!s._initialized){const r=gu("firestore");r&&hy(s,...r)}return s}function py(t){return t._firestoreClient||Wl(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Wl(t){var e,n,i;const s=t._freezeSettings(),r=function(o,a,c,l){return new yg(o,a,c,l.host,l.ssl,l.experimentalForceLongPolling,l.experimentalAutoDetectLongPolling,Kl(l.experimentalLongPollingOptions),l.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new sy(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=s.cache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new vn(ke.fromBase64String(e))}catch(n){throw new w(d.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new vn(ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new w(d.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Q(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new w(d.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new w(d.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return R(this._lat,e._lat)||R(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy=/^__.*__$/;class my{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new qe(e,this.data,this.fieldMask,n,this.fieldTransforms):new Mn(e,this.data,n,this.fieldTransforms)}}class Ql{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new qe(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Xl(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw T()}}class ts{constructor(e,n,i,s,r,o){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=s,r===void 0&&this.ua(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get ca(){return this.settings.ca}aa(e){return new ts(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ha(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.fa(e),s}da(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.aa({path:i,la:!1});return s.ua(),s}wa(e){return this.aa({path:void 0,la:!0})}_a(e){return bi(e,this.settings.methodName,this.settings.ma||!1,this.path,this.settings.ga)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}ua(){if(this.path)for(let e=0;e<this.path.length;e++)this.fa(this.path.get(e))}fa(e){if(e.length===0)throw this._a("Document fields must not be empty");if(Xl(this.ca)&&gy.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class yy{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||Ji(e)}ya(e,n,i,s=!1){return new ts({ca:e,methodName:n,ga:i,path:Q.emptyPath(),la:!1,ma:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Jl(t){const e=t._freezeSettings(),n=Ji(t._databaseId);return new yy(t._databaseId,!!e.ignoreUndefinedProperties,n)}function vy(t,e,n,i,s,r={}){const o=t.ya(r.merge||r.mergeFields?2:0,e,n,s);Zr("Data must be an object, but it was:",o,i);const a=Zl(i,o);let c,l;if(r.merge)c=new oe(o.fieldMask),l=o.fieldTransforms;else if(r.mergeFields){const u=[];for(const h of r.mergeFields){const p=Js(e,h,n);if(!o.contains(p))throw new w(d.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);nu(u,p)||u.push(p)}c=new oe(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new my(new re(a),c,l)}class ns extends Fn{_toFieldTransform(e){if(e.ca!==2)throw e.ca===1?e._a(`${this._methodName}() can only appear at the top level of your update data`):e._a(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ns}}function Yl(t,e,n){return new ts({ca:3,ga:e.settings.ga,methodName:t._methodName,la:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class wy extends Fn{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=Yl(this,e,!0),i=this.pa.map(r=>Bt(r,n)),s=new kt(i);return new Nl(e.path,s)}isEqual(e){return this===e}}class Ey extends Fn{constructor(e,n){super(e),this.pa=n}_toFieldTransform(e){const n=Yl(this,e,!0),i=this.pa.map(r=>Bt(r,n)),s=new bt(i);return new Nl(e.path,s)}isEqual(e){return this===e}}function Iy(t,e,n,i){const s=t.ya(1,e,n);Zr("Data must be an object, but it was:",s,i);const r=[],o=re.empty();Ft(i,(c,l)=>{const u=tu(e,c,n);l=Z(l);const h=s.da(u);if(l instanceof ns)r.push(u);else{const p=Bt(l,h);p!=null&&(r.push(u),o.set(u,p))}});const a=new oe(r);return new Ql(o,a,s.fieldTransforms)}function _y(t,e,n,i,s,r){const o=t.ya(1,e,n),a=[Js(e,i,n)],c=[s];if(r.length%2!=0)throw new w(d.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<r.length;p+=2)a.push(Js(e,r[p])),c.push(r[p+1]);const l=[],u=re.empty();for(let p=a.length-1;p>=0;--p)if(!nu(l,a[p])){const y=a[p];let _=c[p];_=Z(_);const b=o.da(y);if(_ instanceof ns)l.push(y);else{const C=Bt(_,b);C!=null&&(l.push(y),u.set(y,C))}}const h=new oe(l);return new Ql(u,h,o.fieldTransforms)}function Bt(t,e){if(eu(t=Z(t)))return Zr("Unsupported field value:",e,t),Zl(t,e);if(t instanceof Fn)return function(n,i){if(!Xl(i.ca))throw i._a(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.la&&e.ca!==4)throw e._a("Nested arrays are not supported");return function(n,i){const s=[];let r=0;for(const o of n){let a=Bt(o,i.wa(r));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),r++}return{arrayValue:{values:s}}}(t,e)}return function(n,i){if((n=Z(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return $g(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=F.fromDate(n);return{timestampValue:Qs(i.serializer,s)}}if(n instanceof F){const s=new F(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Qs(i.serializer,s)}}if(n instanceof Gl)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof vn)return{bytesValue:em(i.serializer,n._byteString)};if(n instanceof we){const s=i.databaseId,r=n.firestore._databaseId;if(!r.isEqual(s))throw i._a(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:Ml(n.firestore._databaseId||i.databaseId,n._key.path)}}throw i._a(`Unsupported field value: ${Gr(n)}`)}(t,e)}function Zl(t,e){const n={};return hl(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ft(t,(i,s)=>{const r=Bt(s,e.ha(i));r!=null&&(n[i]=r)}),{mapValue:{fields:n}}}function eu(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof F||t instanceof Gl||t instanceof vn||t instanceof we||t instanceof Fn)}function Zr(t,e,n){if(!eu(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const i=Gr(n);throw i==="an object"?e._a(t+" a custom object"):e._a(t+" "+i)}}function Js(t,e,n){if((e=Z(e))instanceof Yr)return e._internalPath;if(typeof e=="string")return tu(t,e);throw bi("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ty=new RegExp("[~\\*/\\[\\]]");function tu(t,e,n){if(e.search(Ty)>=0)throw bi(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Yr(...e.split("."))._internalPath}catch{throw bi(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bi(t,e,n,i,s){const r=i&&!i.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(r||o)&&(c+=" (found",r&&(c+=` in field ${i}`),o&&(c+=` in document ${s}`),c+=")"),new w(d.INVALID_ARGUMENT,a+t+c)}function nu(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sy(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}function Ay(t,e,n){t=mn(t,we);const i=mn(t.firestore,Jr),s=Sy(t.converter,e,n);return iu(i,[vy(Jl(i),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,ve.none())])}function ua(t,e,n,...i){t=mn(t,we);const s=mn(t.firestore,Jr),r=Jl(s);let o;return o=typeof(e=Z(e))=="string"||e instanceof Yr?_y(r,"updateDoc",t._key,e,n,i):Iy(r,"updateDoc",t._key,e),iu(s,[o.toMutation(t._key,ve.exists(!0))])}function iu(t,e){return function(n,i){const s=new Ye;return n.asyncQueue.enqueueAndForget(async()=>Ym(await cy(n),i,s)),s.promise}(py(t),e)}function Cy(...t){return new wy("arrayUnion",t)}function ky(...t){return new Ey("arrayRemove",t)}(function(t,e=!0){(function(n){Ut=n})(Nt),wt(new Ze("firestore",(n,{instanceIdentifier:i,options:s})=>{const r=n.getProvider("app").getImmediate(),o=new Jr(new ng(n.getProvider("auth-internal")),new og(n.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new w(d.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ti(a.options.projectId,c)}(r,i),r);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),Fe(Bo,"3.13.0",t),Fe(Bo,"3.13.0","esm2017")})();const by=document.querySelector("#authorization"),su=_a(au);function Ry(){const t=document.querySelector(".user-name"),e=document.querySelector("#userPhoto"),n=document.querySelector("#arrow"),i=localStorage.getItem("name");t.textContent=`${i}`,e.classList.remove("inactive"),n.style.fill="#ffffff",n.style.stroke="#ffffff"}const ha={auth:Kf(su),async signUp(t,e,n){if(typeof t!="string"||t.trim()===""||typeof e!="string"||e.trim()===""||typeof n!="string"||n.trim()==="")throw new Error("Невірний тип даних вхідних параметрів.");try{const i=await kd(this.auth,e,n);return await this.updateUserName(i.user,t),console.log(i.user),await this.signIn(e,n),await this.checkAuth(),i}catch(i){throw console.error("Помилка при реєстрації користувача:",i,i.code),new Error("Не вдалося зареєструвати користувача.")}},signIn(t,e){if(typeof t!="string"||t.trim()===""||typeof e!="string"||e.trim()==="")throw new Error("Невірний тип даних вхідних параметрів.");try{return bd(this.auth,t,e),this.checkAuth()}catch{throw new Error("Не вдалося авторизувати користувача.")}},async updateUserName(t,e){try{await Dd(t,{displayName:e}),console.log("User name updated successfully")}catch(n){console.log("Error updating user name:",n)}},checkAuth(t){return Pd(this.auth,e=>{e&&(localStorage.clear(),console.dir(e),by.classList.add("visually-hidden"),localStorage.setItem("uid",e.uid),localStorage.setItem("exist",!0),localStorage.setItem("name",e.displayName),Ry())})}};fy(su);const Ys=document.getElementById("logout-button"),Dy=document.querySelector("#authorization"),Ny=document.querySelector("#mobile-menu"),Oy=document.querySelector(".header-container"),Py=document.querySelector("#mob-menu-open"),Ly=document.querySelector("#m-close"),Zs=document.querySelector("#btn-signup"),da=document.querySelector("#avatar"),fa=document.querySelector("#blokLinkMb"),My=document.querySelector("#mobileUN");function zy(){localStorage.getItem("exist")?(Zs.style.display="none",da.style.display="flex",fa.style.display="flex",Ys.style.display="flex",My.textContent=`${localStorage.getItem("name")}`):(Zs.style.display="block",da.style.display="none",fa.style.display="none",Ys.style.display="none")}function xy(t){t.preventDefault(),localStorage.clear(),location.reload()}function Uy(){Dy.classList.remove("visually-hidden"),Ny.classList.add("hidden"),Oy.classList.remove("fixed"),Py.classList.remove("inactive"),Ly.classList.remove("active"),console.log("2")}Zs.addEventListener("click",Uy);Ys.addEventListener("click",xy);const Ky="shoping-list",ti=document.querySelector(".support-btn-prev"),ni=document.querySelector(".support-btn-next"),ii=document.getElementById("funds-list");let Dt=window.innerWidth>=768?6:4,Me=0;function Fy(){Me=Math.max(Me-Dt,0),is()}function Vy(){Me=Math.min(Me+Dt,ii.children.length-Dt),is()}function is(){Me===0?(ti.classList.add("visually-hidden"),ni.classList.remove("visually-hidden")):Me+Dt>=ii.children.length?(ti.classList.remove("visually-hidden"),ni.classList.add("visually-hidden")):(ti.classList.remove("visually-hidden"),ni.classList.remove("visually-hidden"));for(let t=0;t<ii.children.length;t++){const e=ii.children[t];t>=Me&&t<Me+Dt?e.style.display="flex":e.style.display="none"}}function By(){Dt=window.innerWidth>=768?6:4,is()}ni.addEventListener("click",t=>{t.preventDefault(),Vy()});ti.addEventListener("click",t=>{t.preventDefault(),Fy()});window.addEventListener("resize",()=>{By()});is();const vt=document.querySelector(".sign-form"),$y=document.querySelectorAll('input[type="radio"]'),le={backdrop:document.querySelector("#authorization"),open:document.querySelector(".heder-modal-login"),close:document.querySelector(".modal-authorization-close"),logoutBtn:document.querySelector("#logOut"),modWindow:document.querySelector(".modal-authorization")};le.open.addEventListener("click",wn);le.close.addEventListener("click",wn);localStorage.getItem("exist")?(le.open.removeEventListener("click",wn),le.open.addEventListener("click",er),le.logoutBtn.addEventListener("click",ru)):(le.open.addEventListener("click",wn),le.open.removeEventListener("click",er));function wn(){le.backdrop.classList.toggle("visually-hidden")}function er(){le.logoutBtn.classList.toggle("active")}function ru(t){t.preventDefault(),localStorage.clear(),location.reload()}$y.forEach(t=>{t.addEventListener("change",()=>{t.value==="sign-in"?qy():Hy()})});vt.addEventListener("submit",jy);function jy(t){t.preventDefault();const{name:e=null,email:n,password:i}=vt;e?(ha.signUp(e.value,n.value,i.value).then(s=>{}),vt.reset()):(ha.signIn(n.value,i.value),vt.reset()),le.open.removeEventListener("click",wn),le.open.addEventListener("click",er),le.logoutBtn.addEventListener("click",ru)}function Hy(){vt.innerHTML=`<label for="name" class="visually-hidden">name</label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        required
        class="sign-up-form-input name hide"
      />

      <label for="email" class="visually-hidden">eMAIL</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="eMAIL"
        required
        class="sign-up-form-input"
      />

      <label for="password" class="visually-hidden">pASSWORD</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="pASSWORD"
        required
        class="sign-up-form-input"
      />

      <button type="submit" class="submit-btn" id="submit">Sign up</button>`}function qy(){vt.innerHTML=`<label for="email" class="visually-hidden">eMAIL</label>
  <input
    type="email"
    id="email"
    name="email"
    placeholder="eMAIL"
    required
    class="sign-up-form-input"
  />

  <label for="password" class="visually-hidden">pASSWORD</label>
  <input
    type="password"
    id="password"
    name="password"
    placeholder="pASSWORD"
    required
    class="sign-up-form-input"
  />

  <button type="submit" class="submit-btn" id="submit">Sign in</button>`}export{Ky as a,Ry as l,zy as m};

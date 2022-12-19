import{d as C,r as D,o as b,a as n,c as l,b as d,l as u,t as f,_ as k,h as x,i as g,w as V,k as _}from"./app.8e593f3f.js";const I={class:"imgContent"},E={class:"img-container"},$=["src"],w={key:2,class:"plus"},N={class:"tip"},j=C({__name:"uploadImg",props:{modelValue:null,tip:null,max:null},emits:["update:modelValue"],setup(p,{emit:e}){const t=p,s=D(""),o=D(!1),r="image/jpg,image/jpeg,image/png,image/gif".split(",");function h(i){const a=i.target.files[0];if(!a)return;const{size:m,name:y,type:A}=a;if(m>(t.max||500)*1024){console.warn("文件大小",`${m/1024}k`),alert(`文件尺寸不得超过${t.max||500}k, '${y}' 不符合要求`),c();return}if(a&&r.includes(A)){const F=new FileReader;s.value="",o.value=!0,F.readAsDataURL(a),F.onloadend=v=>{e("update:modelValue",a),s.value=v.target.result,o.value=!1}}else alert(`文件仅支持图片格式, '${y}' 不符合要求`),c();i.target.value=null}function c(){e("update:modelValue",""),s.value=""}return b(()=>{s.value=t.modelValue}),(i,a)=>(n(),l("div",I,[d("div",E,[s.value?(n(),l("img",{key:0,src:s.value,class:"img"},null,8,$)):u("",!0),d("input",{type:"file",accept:"image/*",ref:"file",onChange:h,title:""},null,544),s.value?(n(),l("i",{key:1,class:"remove",onClick:c},"×")):u("",!0),s.value?u("",!0):(n(),l("i",w,"+"))]),d("div",N,f(p.tip||"仅支持jpg,png,gif文件"),1)]))}});const q=k(j,[["__scopeId","data-v-84f7b12e"]]),B=_('<h1 id="图片上传" tabindex="-1">图片上传 <a class="header-anchor" href="#图片上传" aria-hidden="true">#</a></h1><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-hidden="true">#</a></h2><p>使用<code>FileReader</code>方法，选择图片后读取到<code>base64</code>格式的图片信息，通过赋值给<code>img</code>的<code>src</code>实现图片预览</p>',3),O=_(`<div class="language-vue line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">uploadImg</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">v-model</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;">imgurl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">uploadImg</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#A6ACCD;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">ref</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> uploadImg </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">./uploadImg/uploadImg.vue</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> imgurl </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">ref</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="props" tabindex="-1">Props <a class="header-anchor" href="#props" aria-hidden="true">#</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>v-model</td><td>any</td><td>图片路径或对象</td></tr><tr><td>max</td><td>number</td><td>图片大小限制，默认500k</td></tr><tr><td>tip</td><td>string</td><td>仅支持jpg,png,gif文件</td></tr></tbody></table>`,3),S=JSON.parse('{"title":"图片上传","description":"","frontmatter":{},"headers":[{"level":2,"title":"Demo","slug":"demo","link":"#demo","children":[]},{"level":2,"title":"Props","slug":"props","link":"#props","children":[]}],"relativePath":"components/图片上传.md"}'),P={name:"components/图片上传.md"},M=C({...P,setup(p){const e=D("");return(t,s)=>{const o=x("ClientOnly");return n(),l("div",null,[B,g(o,null,{default:V(()=>[g(q,{modelValue:e.value,"onUpdate:modelValue":s[0]||(s[0]=r=>e.value=r)},null,8,["modelValue"])]),_:1}),O])}}});export{S as __pageData,M as default};

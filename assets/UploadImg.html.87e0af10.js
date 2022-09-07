import{_ as l,d as c,g as d,r as s,o as r,c as i,a as t,w as k,f as e}from"./app.c90e916d.js";const g=e('<h1 id="\u56FE\u7247\u4E0A\u4F20" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247\u4E0A\u4F20" aria-hidden="true">#</a> \u56FE\u7247\u4E0A\u4F20</h1><h2 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> Demo</h2><p>\u4F7F\u7528<code>FileReader</code>\u65B9\u6CD5\uFF0C\u9009\u62E9\u56FE\u7247\u540E\u8BFB\u53D6\u5230<code>base64</code>\u683C\u5F0F\u7684\u56FE\u7247\u4FE1\u606F\uFF0C\u901A\u8FC7\u8D4B\u503C\u7ED9<code>img</code>\u7684<code>src</code>\u5B9E\u73B0\u56FE\u7247\u9884\u89C8</p>',3),m=e(`<div class="language-vue ext-vue"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>uploadImg</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>imgurl<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>uploadImg</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> imgurl <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;/images/logo.svg&#39;</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><h2 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u7C7B\u578B</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>v-model</td><td>any</td><td>\u56FE\u7247\u8DEF\u5F84\u6216\u5BF9\u8C61</td></tr><tr><td>max</td><td>number</td><td>\u56FE\u7247\u5927\u5C0F\u9650\u5236\uFF0C\u9ED8\u8BA4500k</td></tr><tr><td>tip</td><td>string</td><td>\u4EC5\u652F\u6301jpg,png,gif\u6587\u4EF6</td></tr></tbody></table>`,3),F=c({__name:"UploadImg.html",setup(h){const a=d("/images/logo.svg");return(E,n)=>{const p=s("uploadImg"),u=s("ClientOnly");return r(),i("div",null,[g,t(u,null,{default:k(()=>[t(p,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=o=>a.value=o)},null,8,["modelValue"])]),_:1}),m])}}});var v=l(F,[["__file","UploadImg.html.vue"]]);export{v as default};
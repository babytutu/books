import{_ as n,c as a,a2 as l,o as p}from"./chunks/framework.BPuE4Feg.js";const b=JSON.parse('{"title":"Mockjs","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Mockjs.md","filePath":"tools/Mockjs.md"}'),e={name:"tools/Mockjs.md"};function o(c,s,r,t,i,B){return p(),a("div",null,s[0]||(s[0]=[l(`<h1 id="mockjs" tabindex="-1">Mockjs <a class="header-anchor" href="#mockjs" aria-label="Permalink to &quot;Mockjs&quot;">​</a></h1><blockquote><p>生成随机数据，拦截 Ajax 请求</p></blockquote><p><a href="http://mockjs.com/" target="_blank" rel="noreferrer">官网</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#98C379;"> i</span><span style="color:#98C379;"> mockjs</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>具体例子</li></ul><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Mock</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;mockjs&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Random</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Mock</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">Random</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> template</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">  name</span><span style="color:#ABB2BF;">: </span><span style="color:#E5C07B;">Random</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">cname</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Mock</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mock</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// =&gt; {name: &quot;李雷&quot;}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="语法规范" tabindex="-1">语法规范 <a class="header-anchor" href="#语法规范" aria-label="Permalink to &quot;语法规范&quot;">​</a></h2><h3 id="数据模板" tabindex="-1">数据模板 <a class="header-anchor" href="#数据模板" aria-label="Permalink to &quot;数据模板&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>// 属性名   name</span></span>
<span class="line"><span>// 生成规则 rule</span></span>
<span class="line"><span>// 属性值   value</span></span>
<span class="line"><span>&#39;name|rule&#39;: value</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>列子</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Mock</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;mockjs&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// Number</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> template</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#98C379;">  &#39;number1|1-10.1-2&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">  &#39;number2|1.1-2&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">  &#39;number3|1.3&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#98C379;">  &#39;number4|1.10&#39;</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1.123</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Mock</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mock</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// =&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   number1: 2.4,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   number2: 1.8,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   number3: 1.888,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   number4: 1.1238143732</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="数据占位符" tabindex="-1">数据占位符 <a class="header-anchor" href="#数据占位符" aria-label="Permalink to &quot;数据占位符&quot;">​</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span>@占位符</span></span>
<span class="line"><span>@占位符(参数 [, 参数])</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>例子</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Mock</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;mockjs&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// @</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> template</span><span style="color:#56B6C2;"> =</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">  city</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;@city(true)&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  cname</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;@cname&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  color</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;@color&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Mock</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mock</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;">template</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// =&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// {</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   city: &quot;广东省 东莞市&quot;,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   cname: &quot;范芳&quot;,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">//   color: &quot;#a1f279&quot;,</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h2 id="常用方法" tabindex="-1">常用方法 <a class="header-anchor" href="#常用方法" aria-label="Permalink to &quot;常用方法&quot;">​</a></h2><h3 id="mock-mock" tabindex="-1">Mock.mock() <a class="header-anchor" href="#mock-mock" aria-label="Permalink to &quot;Mock.mock()&quot;">​</a></h3><ul><li>Mock.mock( template )</li></ul><blockquote><p>根据数据模板生成模拟数据</p></blockquote><ul><li>Mock.mock( rurl, template )</li></ul><blockquote><p>记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。</p></blockquote><p>这个方法就老厉害了～直接把ajax请求给拦截了</p><ul><li>Mock.mock( rurl, function( options ) )</li></ul><blockquote><p>记录用于生成响应数据的函数。当拦截到匹配 rurl 的 Ajax 请求时，函数 function(options) 将被执行，并把执行结果作为响应数据返回。</p></blockquote><p>可以获取接口中的传参，根据参数返回不同的数据，让mock数据更真实一些</p><blockquote><p>options 指向本次请求的 Ajax 选项集，含有 url、type 和 body 三个属性</p></blockquote><h3 id="mock-random" tabindex="-1">Mock.Random <a class="header-anchor" href="#mock-random" aria-label="Permalink to &quot;Mock.Random&quot;">​</a></h3><p><a href="https://github.com/nuysoft/Mock/wiki/Mock.Random" target="_blank" rel="noreferrer">详细API文档</a></p><blockquote><p>是一个工具类，用于生成各种随机数据。 Mock.Random 的方法在数据模板中称为『占位符』，书写格式为 @占位符(参数 [, 参数])</p></blockquote><p>一个例子</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code" tabindex="0"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Mock</span><span style="color:#56B6C2;"> =</span><span style="color:#61AFEF;"> require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;mockjs&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#C678DD;">const</span><span style="color:#E5C07B;"> Random</span><span style="color:#56B6C2;"> =</span><span style="color:#E5C07B;"> Mock</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">Random</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Random</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">email</span><span style="color:#ABB2BF;">())</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// =&gt; &quot;n.clark@miller.io&quot;</span></span>
<span class="line"><span style="color:#E5C07B;">console</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">log</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">Mock</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">mock</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;@email&#39;</span><span style="color:#ABB2BF;">))</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">// =&gt; &quot;y.lee@lewis.org&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,32)]))}const u=n(e,[["render",o]]);export{b as __pageData,u as default};
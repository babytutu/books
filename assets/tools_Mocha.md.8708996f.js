import{_ as s,c as a,o as n,Q as l}from"./chunks/framework.77441a25.js";const b=JSON.parse('{"title":"Mocha","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Mocha.md","filePath":"tools/Mocha.md"}'),p={name:"tools/Mocha.md"},o=l(`<h1 id="mocha" tabindex="-1">Mocha <a class="header-anchor" href="#mocha" aria-label="Permalink to &quot;Mocha&quot;">​</a></h1><blockquote><p>（发音&quot;摩卡&quot;）诞生于2011年，是现在最流行的JavaScript测试框架之一，在浏览器和Node环境都可以使用。</p></blockquote><p><a href="https://mochajs.org/" target="_blank" rel="noreferrer">Mocha</a></p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">npm</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">install</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">--D</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">mocha</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>add.test.js</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">assert</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">require</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;assert&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">x</span><span style="color:#ABB2BF;">, </span><span style="color:#E06C75;font-style:italic;">y</span><span style="color:#ABB2BF;">) {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#C678DD;">return</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">x</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">+</span><span style="color:#ABB2BF;"> </span><span style="color:#E06C75;">y</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">describe</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;add&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#61AFEF;">it</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;1+1=2&#39;</span><span style="color:#ABB2BF;">, () </span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">assert</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">equal</span><span style="color:#ABB2BF;">(</span><span style="color:#61AFEF;">add</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;">), </span><span style="color:#D19A66;">2</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">  })</span></span>
<span class="line"><span style="color:#ABB2BF;">})</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>package.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;script&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">&quot;test&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;mocha&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="watch" tabindex="-1">Watch <a class="header-anchor" href="#watch" aria-label="Permalink to &quot;Watch&quot;">​</a></h2><p>package.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;script&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#E06C75;">&quot;watch&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;mocha -w&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="report" tabindex="-1">Report <a class="header-anchor" href="#report" aria-label="Permalink to &quot;Report&quot;">​</a></h2><p>package.json</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro"><code><span class="line"><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">&quot;script&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">&quot;report&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;mocha -R doc &gt; test.html &amp;&amp; mocha -R markdown &gt; test.md&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>`,17),e=[o];function r(t,c,i,B,d,y){return n(),a("div",null,e)}const h=s(p,[["render",r]]);export{b as __pageData,h as default};

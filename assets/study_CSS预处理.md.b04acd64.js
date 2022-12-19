import{_ as s,a as n,c as a,k as l}from"./app.8e593f3f.js";const F=JSON.parse('{"title":"CSS预处理 - Stylus","description":"","frontmatter":{},"headers":[{"level":2,"title":"选择器","slug":"选择器","link":"#选择器","children":[{"level":3,"title":"缩进","slug":"缩进","link":"#缩进","children":[]},{"level":3,"title":"父级引用","slug":"父级引用","link":"#父级引用","children":[]}]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[{"level":3,"title":"属性查找","slug":"属性查找","link":"#属性查找","children":[]}]},{"level":2,"title":"函数","slug":"函数","link":"#函数","children":[{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"默认参数","slug":"默认参数","link":"#默认参数","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]}]},{"level":2,"title":"@IMPORT","slug":"import","link":"#import","children":[]}],"relativePath":"study/CSS预处理.md"}'),p={name:"study/CSS预处理.md"},e=l(`<h1 id="css预处理-stylus" tabindex="-1">CSS预处理 - Stylus <a class="header-anchor" href="#css预处理-stylus" aria-hidden="true">#</a></h1><p>EXPRESSIVE, DYNAMIC, ROBUST CSS</p><p><a href="https://stylus-lang.com/" target="_blank" rel="noreferrer">Stylus官方网站</a></p><p><a href="https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus" target="_blank" rel="noreferrer">vscode插件</a></p><h2 id="选择器" tabindex="-1">选择器 <a class="header-anchor" href="#选择器" aria-hidden="true">#</a></h2><h3 id="缩进" tabindex="-1">缩进 <a class="header-anchor" href="#缩进" aria-hidden="true">#</a></h3><p>括号，冒号，分号，逗号都可选</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">textarea</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">eee</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">textarea</span></span>
<span class="line"><span style="color:#F07178;">input</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">eee</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="父级引用" tabindex="-1">父级引用 <a class="header-anchor" href="#父级引用" aria-hidden="true">#</a></h3><p>&amp; 符号代表父级选择器</p><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">textarea</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">eee</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">textarea</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">input</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">000</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#F07178;">textarea</span></span>
<span class="line"><span style="color:#F07178;">input</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">border</span><span style="color:#89DDFF;"> </span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> solid </span><span style="color:#89DDFF;">#</span><span style="color:#A6ACCD;">eee</span></span>
<span class="line"><span style="color:#A6ACCD;">  &amp;</span><span style="color:#89DDFF;">:</span><span style="color:#C792EA;">hover</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">border-color</span><span style="color:#89DDFF;"> #</span><span style="color:#A6ACCD;">000</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="变量" tabindex="-1">变量 <a class="header-anchor" href="#变量" aria-hidden="true">#</a></h2><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$font-size </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">14px</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">body</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">font</span><span style="color:#89DDFF;"> </span><span style="color:#A6ACCD;">$font-size Arial, sans-serif</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="属性查找" tabindex="-1">属性查找 <a class="header-anchor" href="#属性查找" aria-hidden="true">#</a></h3><p>通过前置 @ 字符在属性名前来访问该属性名对应的值</p><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">logo</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">width</span><span style="color:#89DDFF;"> </span><span style="color:#F78C6C;">150px</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">height</span><span style="color:#89DDFF;"> </span><span style="color:#F78C6C;">80px</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-left</span><span style="color:#89DDFF;"> </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">@width </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">margin-top</span><span style="color:#89DDFF;"> </span><span style="color:#82AAFF;">-</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">@height </span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="函数" tabindex="-1">函数 <a class="header-anchor" href="#函数" aria-hidden="true">#</a></h2><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h3><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">b</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;"> +</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">body</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">, </span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">15px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="默认参数" tabindex="-1">默认参数 <a class="header-anchor" href="#默认参数" aria-hidden="true">#</a></h3><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">a</span><span style="color:#89DDFF;">, </span><span style="color:#A6ACCD;">b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#82AAFF;">a</span><span style="color:#89DDFF;"> +</span><span style="color:#A6ACCD;"> b</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">body</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;"> </span><span style="color:#82AAFF;">add</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">10px</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-css line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">body</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">padding</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">20px</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p><code>arguments</code>包含了传递过来的所有参数</p><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">  n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">for</span><span style="color:#A6ACCD;"> num</span><span style="color:#F78C6C;"> in</span><span style="color:#A6ACCD;"> arguments</span></span>
<span class="line"><span style="color:#A6ACCD;">    n </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> n </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> num</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">sum</span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">3</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">4</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">5</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#676E95;">// =&gt; 15</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="import" tabindex="-1">@IMPORT <a class="header-anchor" href="#import" aria-hidden="true">#</a></h2><p>引用文件</p><div class="language-stylus line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">stylus</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">reset.css</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar.styl</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,31),o=[e];function r(c,t,i,y,C,D){return n(),a("div",null,o)}const u=s(p,[["render",r]]);export{F as __pageData,u as default};

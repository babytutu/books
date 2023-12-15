import{_ as s,c as n,o as a,R as e}from"./chunks/framework.zaQn3Cfr.js";const m=JSON.parse('{"title":"VitePress","description":"","frontmatter":{},"headers":[],"relativePath":"tools/VitePress.md","filePath":"tools/VitePress.md"}'),l={name:"tools/VitePress.md"},p=e(`<h1 id="vitepress" tabindex="-1">VitePress <a class="header-anchor" href="#vitepress" aria-label="Permalink to &quot;VitePress&quot;">​</a></h1><blockquote><p>Vue 驱动的静态网站生成器</p></blockquote><p><a href="https://vitepress.vuejs.org/" target="_blank" rel="noreferrer">Vitepress官方文档</a></p><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><blockquote><p>以books目录为例</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">mkdir</span><span style="color:#98C379;"> books</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#98C379;"> books</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">git</span><span style="color:#98C379;"> init</span></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#98C379;"> init</span></span>
<span class="line"></span>
<span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#98C379;"> add</span><span style="color:#D19A66;"> -D</span><span style="color:#98C379;"> vitepress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="增加脚本" tabindex="-1">增加脚本 <a class="header-anchor" href="#增加脚本" aria-label="Permalink to &quot;增加脚本&quot;">​</a></h2><p>在 <code>package.json</code> 中添加一些 <code>scripts</code></p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#E06C75;">  &quot;scripts&quot;</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;start&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vitepress dev docs&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;docs:build&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vitepress build docs&quot;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    &quot;docs:serve&quot;</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;vitepress serve docs&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>添加<code>.gitignore</code>文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>node_modules</span></span>
<span class="line"><span>.temp</span></span>
<span class="line"><span>.cache</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="增加第一个文件" tabindex="-1">增加第一个文件 <a class="header-anchor" href="#增加第一个文件" aria-label="Permalink to &quot;增加第一个文件&quot;">​</a></h2><p>新建目录<code>docs</code>,目录下新建<code>index.md</code></p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;"># Hello VitePress</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="开启本地调试" tabindex="-1">开启本地调试 <a class="header-anchor" href="#开启本地调试" aria-label="Permalink to &quot;开启本地调试&quot;">​</a></h2><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">yarn</span><span style="color:#98C379;"> start</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="增加菜单配置" tabindex="-1">增加菜单配置 <a class="header-anchor" href="#增加菜单配置" aria-label="Permalink to &quot;增加菜单配置&quot;">​</a></h2><p>在<code>docs/.vitepress</code>目录下，新建<code>config.js</code></p><p><a href="https://vitepress.vuejs.org/config/theme-configs" target="_blank" rel="noreferrer">默认主题配置官方文档</a></p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">export</span><span style="color:#C678DD;"> default</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#E06C75;">  lang</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;en-US&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  title</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;VitePress&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">  description</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;Vite &amp; Vue powered static site generator.&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  // Theme related configurations.</span></span>
<span class="line"><span style="color:#E06C75;">  themeConfig</span><span style="color:#ABB2BF;">: {</span></span>
<span class="line"><span style="color:#E06C75;">    logo</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;/logo.svg&#39;</span><span style="color:#ABB2BF;">,</span></span>
<span class="line"><span style="color:#E06C75;">    nav</span><span style="color:#ABB2BF;">: [...],</span></span>
<span class="line"><span style="color:#E06C75;">    sidebar</span><span style="color:#ABB2BF;">: { ... }</span></span>
<span class="line"><span style="color:#ABB2BF;">  }</span></span>
<span class="line"><span style="color:#ABB2BF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="markdown" tabindex="-1">Markdown <a class="header-anchor" href="#markdown" aria-label="Permalink to &quot;Markdown&quot;">​</a></h2><p><a href="https://v2.vuepress.vuejs.org/zh/reference/default-theme/markdown.html" target="_blank" rel="noreferrer">自定义容器</a></p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">::: tip</span></span>
<span class="line"><span style="color:#ABB2BF;">这是一个提示</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: warning</span></span>
<span class="line"><span style="color:#ABB2BF;">这是一个警告</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: danger</span></span>
<span class="line"><span style="color:#ABB2BF;">这是一个危险警告</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">::: details</span></span>
<span class="line"><span style="color:#ABB2BF;">这是一个 details 标签</span></span>
<span class="line"><span style="color:#ABB2BF;">:::</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>这是一个提示</p></div><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这是一个警告</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>这是一个危险警告</p></div><details class="details custom-block"><summary>Details</summary><p>这是一个 details 标签</p></details><h2 id="配置首页" tabindex="-1">配置首页 <a class="header-anchor" href="#配置首页" aria-label="Permalink to &quot;配置首页&quot;">​</a></h2><p><a href="https://vitepress.vuejs.org/guide/theme-home-page" target="_blank" rel="noreferrer">官方文档</a></p><p>例子</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">---</span></span>
<span class="line"><span style="color:#E06C75;">layout</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">home</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">hero</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">  name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">VitePress</span></span>
<span class="line"><span style="color:#E06C75;">  text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Vite &amp; Vue powered static site generator.</span></span>
<span class="line"><span style="color:#E06C75;">  tagline</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Lorem ipsum...</span></span>
<span class="line"><span style="color:#E06C75;">  image</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#E06C75;">    src</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/logo.png</span></span>
<span class="line"><span style="color:#E06C75;">    alt</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">VitePress</span></span>
<span class="line"><span style="color:#E06C75;">  actions</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    - </span><span style="color:#E06C75;">theme</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">brand</span></span>
<span class="line"><span style="color:#E06C75;">      text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">Get Started</span></span>
<span class="line"><span style="color:#E06C75;">      link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">/guide/what-is-vitepress</span></span>
<span class="line"><span style="color:#ABB2BF;">    - </span><span style="color:#E06C75;">theme</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">alt</span></span>
<span class="line"><span style="color:#E06C75;">      text</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">View on GitHub</span></span>
<span class="line"><span style="color:#E06C75;">      link</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">https://github.com/vuejs/vitepress</span></span>
<span class="line"><span style="color:#ABB2BF;">---</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>通过设置<code>hero</code>,<code>actions</code>,<code>features</code>来配置个性化信息，效果同Vuepress官网首页</p><h2 id="vue-组件" tabindex="-1">Vue 组件 <a class="header-anchor" href="#vue-组件" aria-label="Permalink to &quot;Vue 组件&quot;">​</a></h2><p>使用组件时，用内置的<code>ClientOnly</code>包裹</p><div class="language-md line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#ABB2BF;">&lt;ClientOnly&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;MyComponent /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/ClientOnly&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="部署github-pages" tabindex="-1">部署GitHub Pages <a class="header-anchor" href="#部署github-pages" aria-label="Permalink to &quot;部署GitHub Pages&quot;">​</a></h2><p><a href="https://vitepress.vuejs.org/guide/deploying#github-pages" target="_blank" rel="noreferrer">部署说明官方文档</a></p><p>新建<code>.github/workflows/docs.yml</code></p><h2 id="目录结构" tabindex="-1">目录结构 <a class="header-anchor" href="#目录结构" aria-label="Permalink to &quot;目录结构&quot;">​</a></h2><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>├─ .github</span></span>
<span class="line"><span>│  └─ workflows</span></span>
<span class="line"><span>│     └─ docs.yml</span></span>
<span class="line"><span>├─ docs</span></span>
<span class="line"><span>│  ├─ .vitepress</span></span>
<span class="line"><span>│  │  └─ config.js</span></span>
<span class="line"><span>│  └─ index.md</span></span>
<span class="line"><span>├─ .gitignore</span></span>
<span class="line"><span>└─ package.json</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,40),o=[p];function r(c,t,i,d,b,u){return a(),n("div",null,o)}const y=s(l,[["render",r]]);export{m as __pageData,y as default};

import{_ as s,c as a,o as n,V as e}from"./chunks/framework.CN9jWNAZ.js";const y=JSON.parse('{"title":"Oh My ZSH!","description":"","frontmatter":{},"headers":[],"relativePath":"tools/Oh-My-ZSH.md","filePath":"tools/Oh-My-ZSH.md"}'),l={name:"tools/Oh-My-ZSH.md"},p=e(`<h1 id="oh-my-zsh" tabindex="-1">Oh My ZSH! <a class="header-anchor" href="#oh-my-zsh" aria-label="Permalink to &quot;Oh My ZSH!&quot;">​</a></h1><blockquote><p>超级终端</p></blockquote><h3 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">sh</span><span style="color:#D19A66;"> -c</span><span style="color:#98C379;"> &quot;$(</span><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -fsSL</span><span style="color:#98C379;"> https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>mirror in mainland China</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">sh</span><span style="color:#D19A66;"> -c</span><span style="color:#98C379;"> &quot;$(</span><span style="color:#61AFEF;">curl</span><span style="color:#D19A66;"> -fsSL</span><span style="color:#98C379;"> https://gitee.com/mcornella/ohmyzsh/raw/master/tools/install.sh)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>设置为默认终端</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">chsh</span><span style="color:#D19A66;"> -s</span><span style="color:#98C379;"> $(</span><span style="color:#56B6C2;">which</span><span style="color:#98C379;"> zsh)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="解决权限错误" tabindex="-1">解决权限错误 <a class="header-anchor" href="#解决权限错误" aria-label="Permalink to &quot;解决权限错误&quot;">​</a></h4><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>Insecure completion-dependent directories detected:</span></span>
<span class="line"><span>/usr/local/share/zsh</span></span>
<span class="line"><span>/usr/local/share/zsh/site-functions</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>修改配置</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">nano</span><span style="color:#98C379;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>在配置文件第一行加上</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span>ZSH_DISABLE_COMPFIX=&quot;true&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>保存配置并重新加载配置</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#56B6C2;">source</span><span style="color:#98C379;"> .zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="定制化zsh配置" tabindex="-1">定制化zsh配置 <a class="header-anchor" href="#定制化zsh配置" aria-label="Permalink to &quot;定制化zsh配置&quot;">​</a></h3><p><a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Settings" target="_blank" rel="noreferrer">配置文档</a></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">nano</span><span style="color:#98C379;"> ~/.zshrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="修改主题" tabindex="-1">修改主题 <a class="header-anchor" href="#修改主题" aria-label="Permalink to &quot;修改主题&quot;">​</a></h3><p><a href="https://github.com/ohmyzsh/ohmyzsh/wiki/Themes" target="_blank" rel="noreferrer">主题列表</a></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#E06C75;">ZSH_THEME</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;pygmalion&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="定义别名" tabindex="-1">定义别名 <a class="header-anchor" href="#定义别名" aria-label="Permalink to &quot;定义别名&quot;">​</a></h3><blockquote><p><code>alias</code>是别名，表示你输入&#39;pz&#39;就会执行等号后面的命令</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> pz</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;nano ~/.zshrc&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> ns</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;npm start&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>ctrl + x 退出，如果内容有修改，会提示是否保存修改（Y/N），修改配置后需要执行命令重启，可以通过&#39;source ~/.zshrc&#39;或者&#39;. ~/.zshrc&#39;立刻加载修改后的设置，使之生效，或者重新打开终端（原理是，每次新开终端，都会读取.zshrc文件）</p><blockquote><p>默认的终端也可以定制,配置方式一致</p></blockquote><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">nano</span><span style="color:#98C379;"> ~/.bashrc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="实用alias" tabindex="-1">实用alias <a class="header-anchor" href="#实用alias" aria-label="Permalink to &quot;实用alias&quot;">​</a></h4><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> pz</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;nano ~/.zshrc&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> cq</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;. ~/.zshrc&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> ip</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;ipconfig getifaddr en1&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> ns</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;npm start&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> ni</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;npm i&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> sshkey</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;pbcopy &lt; ~/.ssh/id_rsa.pub&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> sall</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;defaults write com.apple.finder AppleShowAllFiles YES&quot;</span></span>
<span class="line"><span style="color:#C678DD;">alias</span><span style="color:#E06C75;"> noall</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&quot;defaults write com.apple.finder AppleShowAllFiles NO&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,30),o=[p];function r(c,t,i,d,u,h){return n(),a("div",null,o)}const m=s(l,[["render",r]]);export{y as __pageData,m as default};
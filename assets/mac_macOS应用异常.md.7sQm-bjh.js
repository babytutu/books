import{_ as s,c as a,o as e,R as n}from"./chunks/framework.zaQn3Cfr.js";const h=JSON.parse('{"title":"macOS 运行应用出现「意外退出」及「崩溃闪退」问题修复方法","description":"","frontmatter":{},"headers":[],"relativePath":"mac/macOS应用异常.md","filePath":"mac/macOS应用异常.md"}'),o={name:"mac/macOS应用异常.md"},p=n('<h1 id="macos-运行应用出现「意外退出」及「崩溃闪退」问题修复方法" tabindex="-1">macOS 运行应用出现「意外退出」及「崩溃闪退」问题修复方法 <a class="header-anchor" href="#macos-运行应用出现「意外退出」及「崩溃闪退」问题修复方法" aria-label="Permalink to &quot;macOS 运行应用出现「意外退出」及「崩溃闪退」问题修复方法&quot;">​</a></h1><p>更新系统后有很多软件打不开，或者出现闪退的情况，是因为Apple苹果公司在新系统中删除了TNT的证书</p><p>打开终端工具输入并执行如下命令：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">sudo</span><span style="color:#98C379;"> codesign</span><span style="color:#D19A66;"> --force</span><span style="color:#D19A66;"> --deep</span><span style="color:#D19A66;"> --sign</span><span style="color:#98C379;"> -</span><span style="color:#ABB2BF;"> (应用路径)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>应用路径：打开访达（Finder），点击左侧导航栏的 应用程序，找到相关应用，将它拖进终端命令- 的后面，然后按下回车即可，注意最后一个 - 后面有一个空格。</p><p>正常情况下只有一行提示，即成功：</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki one-dark-pro vp-code"><code><span class="line"><span style="color:#61AFEF;">/文件位置</span><span style="color:#98C379;"> :</span><span style="color:#98C379;"> replacing</span><span style="color:#98C379;"> existing</span><span style="color:#98C379;"> signature</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>',7),c=[p];function l(r,t,i,d,_,m){return e(),a("div",null,c)}const b=s(o,[["render",l]]);export{h as __pageData,b as default};

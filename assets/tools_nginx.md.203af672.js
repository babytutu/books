import{_ as s,a as n,c as a,k as l}from"./app.8e593f3f.js";const y=JSON.parse('{"title":"Nginx 入门","description":"","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"Windows 下安装","slug":"windows-下安装","link":"#windows-下安装","children":[]},{"level":3,"title":"Mac 下安装","slug":"mac-下安装","link":"#mac-下安装","children":[]}]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[]},{"level":2,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[{"level":3,"title":"查看基本信息","slug":"查看基本信息","link":"#查看基本信息","children":[]},{"level":3,"title":"验证配置文件","slug":"验证配置文件","link":"#验证配置文件","children":[]},{"level":3,"title":"执行指定命令","slug":"执行指定命令","link":"#执行指定命令","children":[]},{"level":3,"title":"使用指定的配置文件","slug":"使用指定的配置文件","link":"#使用指定的配置文件","children":[]}]},{"level":2,"title":"虚拟主机","slug":"虚拟主机","link":"#虚拟主机","children":[]},{"level":2,"title":"nginx 防盗链","slug":"nginx-防盗链","link":"#nginx-防盗链","children":[{"level":3,"title":"验证结果","slug":"验证结果","link":"#验证结果","children":[]}]},{"level":2,"title":"匹配规则","slug":"匹配规则","link":"#匹配规则","children":[{"level":3,"title":"禁止访问某些后缀文件","slug":"禁止访问某些后缀文件","link":"#禁止访问某些后缀文件","children":[]},{"level":3,"title":"禁止访问目录或目录下文件","slug":"禁止访问目录或目录下文件","link":"#禁止访问目录或目录下文件","children":[]},{"level":3,"title":"禁止直接访问文件","slug":"禁止直接访问文件","link":"#禁止直接访问文件","children":[]}]},{"level":2,"title":"本地测试","slug":"本地测试","link":"#本地测试","children":[{"level":3,"title":"访问","slug":"访问","link":"#访问","children":[]},{"level":3,"title":"日志","slug":"日志","link":"#日志","children":[]}]},{"level":2,"title":"设置软链","slug":"设置软链","link":"#设置软链","children":[]}],"relativePath":"tools/nginx.md"}'),e={name:"tools/nginx.md"},p=l(`<h1 id="nginx-入门" tabindex="-1">Nginx 入门 <a class="header-anchor" href="#nginx-入门" aria-hidden="true">#</a></h1><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h2><h3 id="windows-下安装" tabindex="-1">Windows 下安装 <a class="header-anchor" href="#windows-下安装" aria-hidden="true">#</a></h3><p><a href="http://nginx.org/en/docs/windows.html" target="_blank" rel="noreferrer">安装文档</a></p><p><a href="http://nginx.org/en/download.html" target="_blank" rel="noreferrer">http://nginx.org/en/download.html</a></p><p>下载window安装包</p><p>以c盘为例，解压到<code>nginx-1.21.6</code>，进入文件夹，<code>start nginx</code>即可开启nginx</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">cd c:\\</span></span>
<span class="line"><span style="color:#A6ACCD;">unzip nginx-1.21.6.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">cd nginx-1.21.6</span></span>
<span class="line"><span style="color:#A6ACCD;">start nginx</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="mac-下安装" tabindex="-1">Mac 下安装 <a class="header-anchor" href="#mac-下安装" aria-hidden="true">#</a></h3><p>强烈建议使用<a href="https://brew.sh/" target="_blank" rel="noreferrer">homebrew</a></p><p>安装homebrew</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/bin/bash -c </span><span style="color:#89DDFF;">&quot;$(</span><span style="color:#C3E88D;">curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh</span><span style="color:#89DDFF;">)&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>通过homebrew安装nginx</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew install nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>升级</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew upgrade nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>删除</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew uninstall nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>获取安装信息</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">brew info nginx</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>结果示例</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx: stable 1.19.2 (bottled), HEAD</span></span>
<span class="line"><span style="color:#A6ACCD;">HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server</span></span>
<span class="line"><span style="color:#A6ACCD;">https://nginx.org/</span></span>
<span class="line"><span style="color:#A6ACCD;">/usr/local/Cellar/nginx/1.19.2 (11 files, 2.2MB) *</span></span>
<span class="line"><span style="color:#A6ACCD;">Built from source on 2022-03-21 at 11:32:20</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h2><p>此为mac下路径</p><ul><li><p>配置文件路径：/usr/local/etc/nginx/nginx.conf</p></li><li><p>安装路径：/usr/local/Cellar/nginx/1.19.2</p></li><li><p>服务器默认路径：/usr/local/var/www</p></li><li><p>日志路径：/usr/local/var/log</p></li></ul><h2 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h2><p>执行<code>nginx -h</code>获取命令合集</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx version: nginx/1.19.2</span></span>
<span class="line"><span style="color:#A6ACCD;">Usage: nginx [-?hvVtTq] [-s signal] [-c filename] [-p prefix] [-g directives]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  -?,-h         : this help</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v            : show version and exit</span></span>
<span class="line"><span style="color:#A6ACCD;">  -V            : show version and configure options then exit</span></span>
<span class="line"><span style="color:#A6ACCD;">  -t            : test configuration and exit</span></span>
<span class="line"><span style="color:#A6ACCD;">  -T            : test configuration, dump it and exit</span></span>
<span class="line"><span style="color:#A6ACCD;">  -q            : suppress non-error messages during configuration testing</span></span>
<span class="line"><span style="color:#A6ACCD;">  -s signal     : send signal to a master process: stop, quit, reopen, reload</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p prefix     : set prefix path (default: /usr/local/Cellar/nginx/1.19.2/)</span></span>
<span class="line"><span style="color:#A6ACCD;">  -c filename   : set configuration file (default: /usr/local/etc/nginx/nginx.conf)</span></span>
<span class="line"><span style="color:#A6ACCD;">  -g directives : set global directives out of configuration file</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="查看基本信息" tabindex="-1">查看基本信息 <a class="header-anchor" href="#查看基本信息" aria-hidden="true">#</a></h3><p>获取版本信息</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -v</span></span>
<span class="line"><span style="color:#A6ACCD;">// nginx version: nginx/1.19.2</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="验证配置文件" tabindex="-1">验证配置文件 <a class="header-anchor" href="#验证配置文件" aria-hidden="true">#</a></h3><p>修改配置文件后，强烈建议校验准确性</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -t</span></span>
<span class="line"><span style="color:#A6ACCD;">// nginx: the configuration file /usr/local/etc/nginx/nginx.conf syntax is ok</span></span>
<span class="line"><span style="color:#A6ACCD;">// nginx: configuration file /usr/local/etc/nginx/nginx.conf </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> is successful</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="执行指定命令" tabindex="-1">执行指定命令 <a class="header-anchor" href="#执行指定命令" aria-hidden="true">#</a></h3><p>stop, quit, reopen, reload</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 启动</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx</span></span>
<span class="line"><span style="color:#A6ACCD;">// 快速关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s stop</span></span>
<span class="line"><span style="color:#A6ACCD;">// 请求处理完成后关闭</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s quit</span></span>
<span class="line"><span style="color:#A6ACCD;">// 重新打开日志文件</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s reopen</span></span>
<span class="line"><span style="color:#A6ACCD;">// 重新加载配置文件</span></span>
<span class="line"><span style="color:#A6ACCD;">nginx -s reload</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="使用指定的配置文件" tabindex="-1">使用指定的配置文件 <a class="header-anchor" href="#使用指定的配置文件" aria-hidden="true">#</a></h3><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nginx -c /path/xxx.conf</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="虚拟主机" tabindex="-1">虚拟主机 <a class="header-anchor" href="#虚拟主机" aria-hidden="true">#</a></h2><p>端口号 8081，默认首页 index.html</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">  listen       8081;</span></span>
<span class="line"><span style="color:#A6ACCD;">  server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">    root   html;</span></span>
<span class="line"><span style="color:#A6ACCD;">    index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="nginx-防盗链" tabindex="-1">nginx 防盗链 <a class="header-anchor" href="#nginx-防盗链" aria-hidden="true">#</a></h2><p>设置 valid_referers</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location ~* \\.(gif|jpg|png|swf|js)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  valid_referers 127.0.0.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if ($invalid_referer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  root  /usr/local/etc/nginx/test;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">  root   /usr/local/etc/nginx/test;</span></span>
<span class="line"><span style="color:#A6ACCD;">  index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h3 id="验证结果" tabindex="-1">验证结果 <a class="header-anchor" href="#验证结果" aria-hidden="true">#</a></h3><p>直接访问文件，返回 404</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl -I http://127.0.0.1:8081/js/test.js</span></span>
<span class="line"><span style="color:#A6ACCD;">// 404</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>添加 referer 后访问，返回 200</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">curl -I http://127.0.0.1:8081/js/test.js -e </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">http://127.0.0.1</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">// 200</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="匹配规则" tabindex="-1">匹配规则 <a class="header-anchor" href="#匹配规则" aria-hidden="true">#</a></h2><p>= 表示精确匹配</p><p>^~ 表示 uri 以某个字符串开头</p><p>~ 正则匹配(区分大小写)</p><p>~* 正则匹配(不区分大小写) !~和!~*分别为区分大小写不匹配及不区分大小写不匹配的正则</p><p>/ 任何请求都会匹配</p><p>匹配优先级：</p><p>= &gt; ^~ &gt; /</p><h3 id="禁止访问某些后缀文件" tabindex="-1">禁止访问某些后缀文件 <a class="header-anchor" href="#禁止访问某些后缀文件" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location ~ \\.(js|txt)$ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  deny all;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="禁止访问目录或目录下文件" tabindex="-1">禁止访问目录或目录下文件 <a class="header-anchor" href="#禁止访问目录或目录下文件" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">// 禁止访问目录</span></span>
<span class="line"><span style="color:#A6ACCD;">location ^~ /js/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  deny all;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 禁止访问目录下文件</span></span>
<span class="line"><span style="color:#A6ACCD;">location ^~ /js {</span></span>
<span class="line"><span style="color:#A6ACCD;">  deny all;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h3 id="禁止直接访问文件" tabindex="-1">禁止直接访问文件 <a class="header-anchor" href="#禁止直接访问文件" aria-hidden="true">#</a></h3><p>直接访问文件的<code>referer</code>为空。通过 html 去加载 js 会有<code>referer</code>，设置白名单后可保证无法直接访问文件</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">location ^~ /js/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">  valid_referers localhost 127.0.0.1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if ($invalid_referer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  root   /usr/local/etc/nginx/test;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h2 id="本地测试" tabindex="-1">本地测试 <a class="header-anchor" href="#本地测试" aria-hidden="true">#</a></h2><p>一个简单的例子</p><p>/usr/local/etc/nginx</p><p>nginx默认路径新增<code>test</code>文件夹</p><p>文件夹内容如下</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">.</span></span>
<span class="line"><span style="color:#A6ACCD;">├── index.html</span></span>
<span class="line"><span style="color:#A6ACCD;">└── js</span></span>
<span class="line"><span style="color:#A6ACCD;">    └── test.js</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">1 directory, 2 files</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><details class="details custom-block"><summary>index.html</summary><div class="language-html line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F07178;">DOCTYPE</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">en</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">charset</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">http-equiv</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">X-UA-Compatible</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">IE=edge</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">meta</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">viewport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">content</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">width=device-width, initial-scale=1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">test</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">  &lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">src</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">js/test.js</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  Hello!</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">html</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></details><details class="details custom-block"><summary>test.js</summary><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">window</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">onload</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">append</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">test.js加载成功</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></details><p>/usr/local/etc/nginx/nginx.conf</p><p><code>http</code>内部新增一个<code>server</code>，实现以下功能</p><ul><li>端口号8081</li><li>日志路径<code>/usr/local/Cellar/nginx/1.19.2/logs/test.access.log</code></li><li>路径配置到<code>test</code>文件夹</li><li>js目录下文件无法在浏览器中直接访问</li><li>静态资源不缓存，更改代码后刷新即可生效</li></ul><details class="details custom-block"><summary>nginx.conf server部分</summary><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;"># 测试nginx功能</span></span>
<span class="line"><span style="color:#A6ACCD;">    server {</span></span>
<span class="line"><span style="color:#A6ACCD;">        listen       8081;</span></span>
<span class="line"><span style="color:#A6ACCD;">        server_name  localhost;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        access_log  logs/test.access.log  main;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 设置不缓存</span></span>
<span class="line"><span style="color:#A6ACCD;">            add_header Cache-Control no-cache;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">            root   /usr/local/etc/nginx/test;</span></span>
<span class="line"><span style="color:#A6ACCD;">            index  index.html index.htm;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">        location ^~ /js/ {</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 设置白名单</span></span>
<span class="line"><span style="color:#A6ACCD;">            valid_referers localhost 127.0.0.1 10.0.7.31;</span></span>
<span class="line"><span style="color:#A6ACCD;">            # 设置无法直接通过url打开文件</span></span>
<span class="line"><span style="color:#A6ACCD;">            if ($invalid_referer) {</span></span>
<span class="line"><span style="color:#A6ACCD;">                return 404;</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">            root   /usr/local/etc/nginx/test;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div></details><h3 id="访问" tabindex="-1">访问 <a class="header-anchor" href="#访问" aria-hidden="true">#</a></h3><p>浏览器访问<code>http://localhost:8081/</code>，页面展示</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">Hello! test.js加载成功</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>浏览器访问<code>http://localhost:8081/js/test.js</code>，页面<code>404 Not Found</code></p><h3 id="日志" tabindex="-1">日志 <a class="header-anchor" href="#日志" aria-hidden="true">#</a></h3><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">127.0.0.1 - - [21/Mar/2022:16:32:33 +0800] &quot;GET /js/test.js HTTP/1.1&quot; 200 77 &quot;http://localhost:8081/&quot; &quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1 - - [21/Mar/2022:16:35:55 +0800] &quot;GET /js/test.js HTTP/1.1&quot; 404 555 &quot;-&quot; &quot;Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.74 Safari/537.36&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="设置软链" tabindex="-1">设置软链 <a class="header-anchor" href="#设置软链" aria-hidden="true">#</a></h2><p>通过<code>ln -sf 来源 指向</code></p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ln -sf /Users/tutu/Downloads/code/test /usr/local/etc/nginx/test</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入/usr/local/etc/nginx，执行ll</p><p>出现1个test，被软链到了/Users/tutu/Downloads/code/test</p><div class="language- line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">test -&gt; /Users/tutu/Downloads/code/test</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>再次软链，实现二次指向，可实现不改nginx自由替换指向目录</p><div class="language-bash line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">ln -sf /Users/tutu/Downloads/code/demo /Users/tutu/Downloads/code/test</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>最终nginx的test目录，实际指向的是demo目录，此原理可用于前端部署，通过软链切换文件夹实现更新。</p>`,92),r=[p];function o(c,i,t,d,b,u){return n(),a("div",null,r)}const A=s(e,[["render",o]]);export{y as __pageData,A as default};

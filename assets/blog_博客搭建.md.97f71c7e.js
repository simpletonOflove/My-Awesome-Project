import{_ as s,o as n,c as e,Q as a}from"./chunks/framework.f3821829.js";const l="/My-Awesome-Project/blog/view.jpg",p="/My-Awesome-Project/blog/pages-setting.jpg",o="/My-Awesome-Project/blog/actions-setting.jpg",c="/My-Awesome-Project/blog/access-setting.jpg",t="/My-Awesome-Project/blog/access-setting1.jpg",i="/My-Awesome-Project/blog/secrets-setting.jpg",r="/My-Awesome-Project/blog/actions-setting1.jpg",q=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"blog/博客搭建.md","filePath":"blog/博客搭建.md"}'),y={name:"blog/博客搭建.md"},d=a(`<h2 id="安装vitepress" tabindex="-1">安装<code>vitepress</code> <a class="header-anchor" href="#安装vitepress" aria-label="Permalink to &quot;安装\`vitepress\`&quot;">​</a></h2><blockquote><p>由于vitepress目前版本更新比较频繁，配置可能会有一些差异，想用最新版本的话建议参照<a href="https://vitepress.dev/" target="_blank" rel="noreferrer">官网</a>进行安装配置</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">mkdir your-project</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm init</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm install -D vitepress</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">mkdir your-project</span></span>
<span class="line"><span style="color:#24292e;">pnpm init</span></span>
<span class="line"><span style="color:#24292e;">pnpm install -D vitepress</span></span></code></pre></div><h2 id="安装向导" tabindex="-1">安装向导 <a class="header-anchor" href="#安装向导" aria-label="Permalink to &quot;安装向导&quot;">​</a></h2><blockquote><p>VitePress 附带一个命令行设置向导，可帮助您搭建基本项目的基架。安装后，通过运行以下命令启动向导</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">npx vitepress init</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">npx vitepress init</span></span></code></pre></div><blockquote><p>您会看到几个简单的问题：</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">┌  Welcome to VitePress!</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ./docs</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◇  Site title:</span></span>
<span class="line"><span style="color:#e1e4e8;">│  My Awesome Project</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◇  Site description:</span></span>
<span class="line"><span style="color:#e1e4e8;">│  A VitePress Site</span></span>
<span class="line"><span style="color:#e1e4e8;">│</span></span>
<span class="line"><span style="color:#e1e4e8;">◆  Theme:</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ○ Default Theme + Customization</span></span>
<span class="line"><span style="color:#e1e4e8;">│  ○ Custom Theme</span></span>
<span class="line"><span style="color:#e1e4e8;">└</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">┌  Welcome to VitePress!</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◇  Where should VitePress initialize the config?</span></span>
<span class="line"><span style="color:#24292e;">│  ./docs</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◇  Site title:</span></span>
<span class="line"><span style="color:#24292e;">│  My Awesome Project</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◇  Site description:</span></span>
<span class="line"><span style="color:#24292e;">│  A VitePress Site</span></span>
<span class="line"><span style="color:#24292e;">│</span></span>
<span class="line"><span style="color:#24292e;">◆  Theme:</span></span>
<span class="line"><span style="color:#24292e;">│  ● Default Theme (Out of the box, good-looking docs)</span></span>
<span class="line"><span style="color:#24292e;">│  ○ Default Theme + Customization</span></span>
<span class="line"><span style="color:#24292e;">│  ○ Custom Theme</span></span>
<span class="line"><span style="color:#24292e;">└</span></span></code></pre></div><h2 id="查看效果" tabindex="-1">查看效果 <a class="header-anchor" href="#查看效果" aria-label="Permalink to &quot;查看效果&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">pnpm run docs:dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">pnpm run docs:dev</span></span></code></pre></div><img src="`+l+`" alt="效果预览"><h2 id="配置文件" tabindex="-1">配置文件 <a class="header-anchor" href="#配置文件" aria-label="Permalink to &quot;配置文件&quot;">​</a></h2><blockquote><p>在docs/.vitepress文件夹中有一个 config.mts 文件，我们可以在这里配置文档项目，配置项参考<a href="https://vitepress.dev/reference/site-config" target="_blank" rel="noreferrer">官网配置</a></p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">// 路由表</span></span>
<span class="line"><span style="color:#e1e4e8;">import { blog } from &#39;./router/blog.mjs&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// https://vitepress.dev/reference/site-config</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  base:&quot;/My-Awesome-Project/&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  title: &quot;一纸话长安&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  description: &quot;我的个人博客&quot;,</span></span>
<span class="line"><span style="color:#e1e4e8;">  themeConfig: {</span></span>
<span class="line"><span style="color:#e1e4e8;">    // https://vitepress.dev/reference/default-theme-config</span></span>
<span class="line"><span style="color:#e1e4e8;">    nav: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      { text: &#39;首页&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">      { text: &#39;Examples&#39;, link: &#39;/markdown-examples&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">    sidebar:  [</span></span>
<span class="line"><span style="color:#e1e4e8;">      {</span></span>
<span class="line"><span style="color:#e1e4e8;">        text: &#39;Examples&#39;,</span></span>
<span class="line"><span style="color:#e1e4e8;">        items: [</span></span>
<span class="line"><span style="color:#e1e4e8;">          { text: &#39;Markdown Examples&#39;, link: &#39;/markdown-examples&#39; },</span></span>
<span class="line"><span style="color:#e1e4e8;">          { text: &#39;Runtime API Examples&#39;, link: &#39;/api-examples&#39; }</span></span>
<span class="line"><span style="color:#e1e4e8;">        ]</span></span>
<span class="line"><span style="color:#e1e4e8;">      }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">    socialLinks: [</span></span>
<span class="line"><span style="color:#e1e4e8;">      { icon: &#39;github&#39;, link: &#39;https://github.com/vuejs/vitepress&#39; }</span></span>
<span class="line"><span style="color:#e1e4e8;">    ],</span></span>
<span class="line"><span style="color:#e1e4e8;">  }</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#24292e;">// 路由表</span></span>
<span class="line"><span style="color:#24292e;">import { blog } from &#39;./router/blog.mjs&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// https://vitepress.dev/reference/site-config</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  base:&quot;/My-Awesome-Project/&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  title: &quot;一纸话长安&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  description: &quot;我的个人博客&quot;,</span></span>
<span class="line"><span style="color:#24292e;">  themeConfig: {</span></span>
<span class="line"><span style="color:#24292e;">    // https://vitepress.dev/reference/default-theme-config</span></span>
<span class="line"><span style="color:#24292e;">    nav: [</span></span>
<span class="line"><span style="color:#24292e;">      { text: &#39;首页&#39;, link: &#39;/&#39; },</span></span>
<span class="line"><span style="color:#24292e;">      { text: &#39;Examples&#39;, link: &#39;/markdown-examples&#39; },</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">    sidebar:  [</span></span>
<span class="line"><span style="color:#24292e;">      {</span></span>
<span class="line"><span style="color:#24292e;">        text: &#39;Examples&#39;,</span></span>
<span class="line"><span style="color:#24292e;">        items: [</span></span>
<span class="line"><span style="color:#24292e;">          { text: &#39;Markdown Examples&#39;, link: &#39;/markdown-examples&#39; },</span></span>
<span class="line"><span style="color:#24292e;">          { text: &#39;Runtime API Examples&#39;, link: &#39;/api-examples&#39; }</span></span>
<span class="line"><span style="color:#24292e;">        ]</span></span>
<span class="line"><span style="color:#24292e;">      }</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">    socialLinks: [</span></span>
<span class="line"><span style="color:#24292e;">      { icon: &#39;github&#39;, link: &#39;https://github.com/vuejs/vitepress&#39; }</span></span>
<span class="line"><span style="color:#24292e;">    ],</span></span>
<span class="line"><span style="color:#24292e;">  }</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><h2 id="同步代码github" tabindex="-1">同步代码Github <a class="header-anchor" href="#同步代码github" aria-label="Permalink to &quot;同步代码Github&quot;">​</a></h2><ol><li>修改<code>config</code>的<code>base</code>,<code>base</code>为你的仓库名</li></ol><blockquote><p>站点将部署在这个base URL。如果你计划将站点部署到子路径（例如GitHub页面），则需要设置这个选项。比如，你计划将站点部署到<code>https://foo.github.io/bar/</code>,那么你需要设置<code>base</code>为<code>/bar/</code>。注意，<code>base</code>需要以<code>/</code>开始并以<code>/</code>结尾</p></blockquote><blockquote><p>因为base会自动的被插入到到其他配置中所有以/开始的链接之前，所以你只需要指定一次。</p></blockquote><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">// https://vitepress.dev/reference/site-config</span></span>
<span class="line"><span style="color:#e1e4e8;">export default defineConfig({</span></span>
<span class="line"><span style="color:#e1e4e8;">  base: &#39;/base/&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">import { defineConfig } from &#39;vitepress&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">// https://vitepress.dev/reference/site-config</span></span>
<span class="line"><span style="color:#24292e;">export default defineConfig({</span></span>
<span class="line"><span style="color:#24292e;">  base: &#39;/base/&#39;</span></span>
<span class="line"><span style="color:#24292e;">})</span></span></code></pre></div><ol start="2"><li>添加<code>gitignore</code>文件</li></ol><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">node_modules</span></span>
<span class="line"><span style="color:#e1e4e8;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#e1e4e8;">docs/.vitepress/cache</span></span>
<span class="line"><span style="color:#e1e4e8;">.DS_Store</span></span>
<span class="line"><span style="color:#e1e4e8;">dist</span></span>
<span class="line"><span style="color:#e1e4e8;">.npmrc</span></span>
<span class="line"><span style="color:#e1e4e8;">.cache</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">tests/server/static</span></span>
<span class="line"><span style="color:#e1e4e8;">tests/server/static/upload</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">.local</span></span>
<span class="line"><span style="color:#e1e4e8;"># local env files</span></span>
<span class="line"><span style="color:#e1e4e8;">.env.local</span></span>
<span class="line"><span style="color:#e1e4e8;">.env.*.local</span></span>
<span class="line"><span style="color:#e1e4e8;">.eslintcache</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># Log files</span></span>
<span class="line"><span style="color:#e1e4e8;">npm-debug.log*</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn-debug.log*</span></span>
<span class="line"><span style="color:#e1e4e8;">yarn-error.log*</span></span>
<span class="line"><span style="color:#e1e4e8;">pnpm-debug.log*</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># .vscode</span></span>
<span class="line"><span style="color:#e1e4e8;">*.suo</span></span>
<span class="line"><span style="color:#e1e4e8;">*.ntvs*</span></span>
<span class="line"><span style="color:#e1e4e8;">*.njsproj</span></span>
<span class="line"><span style="color:#e1e4e8;">*.sln</span></span>
<span class="line"><span style="color:#e1e4e8;">*.sw?</span></span>
<span class="line"><span style="color:#e1e4e8;">/os_del.cmd</span></span>
<span class="line"><span style="color:#e1e4e8;">/.vscode/</span></span>
<span class="line"><span style="color:#e1e4e8;">/.history/</span></span>
<span class="line"><span style="color:#e1e4e8;">/svn clear.bat</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">node_modules</span></span>
<span class="line"><span style="color:#24292e;">docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#24292e;">docs/.vitepress/cache</span></span>
<span class="line"><span style="color:#24292e;">.DS_Store</span></span>
<span class="line"><span style="color:#24292e;">dist</span></span>
<span class="line"><span style="color:#24292e;">.npmrc</span></span>
<span class="line"><span style="color:#24292e;">.cache</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">tests/server/static</span></span>
<span class="line"><span style="color:#24292e;">tests/server/static/upload</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">.local</span></span>
<span class="line"><span style="color:#24292e;"># local env files</span></span>
<span class="line"><span style="color:#24292e;">.env.local</span></span>
<span class="line"><span style="color:#24292e;">.env.*.local</span></span>
<span class="line"><span style="color:#24292e;">.eslintcache</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># Log files</span></span>
<span class="line"><span style="color:#24292e;">npm-debug.log*</span></span>
<span class="line"><span style="color:#24292e;">yarn-debug.log*</span></span>
<span class="line"><span style="color:#24292e;">yarn-error.log*</span></span>
<span class="line"><span style="color:#24292e;">pnpm-debug.log*</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># .vscode</span></span>
<span class="line"><span style="color:#24292e;">*.suo</span></span>
<span class="line"><span style="color:#24292e;">*.ntvs*</span></span>
<span class="line"><span style="color:#24292e;">*.njsproj</span></span>
<span class="line"><span style="color:#24292e;">*.sln</span></span>
<span class="line"><span style="color:#24292e;">*.sw?</span></span>
<span class="line"><span style="color:#24292e;">/os_del.cmd</span></span>
<span class="line"><span style="color:#24292e;">/.vscode/</span></span>
<span class="line"><span style="color:#24292e;">/.history/</span></span>
<span class="line"><span style="color:#24292e;">/svn clear.bat</span></span></code></pre></div><ol start="3"><li>在github上创建仓库，同步代码</li></ol><h2 id="github-pages配置" tabindex="-1">GitHub Pages配置 <a class="header-anchor" href="#github-pages配置" aria-label="Permalink to &quot;GitHub Pages配置&quot;">​</a></h2><ol><li><code>GitHub Pages</code> 是基于某个分支来进行部署的, 所以这里我创建了一个新的分支 <code>gh-pages</code> 作为 <code>GitHub Pages</code> 的源分支</li><li>默认情况下, 仓库是没有开启 <code>GitHub Pages</code> 配置的, 我们需要进入仓库配置页面进行简单的配置: <code>Settings -&gt; Pages -&gt; Branch -&gt; save</code></li></ol><img src="`+p+'" alt="github pages"><h2 id="github-actions配置" tabindex="-1">GitHub Actions配置 <a class="header-anchor" href="#github-actions配置" aria-label="Permalink to &quot;GitHub Actions配置&quot;">​</a></h2><h3 id="设置-github-actions" tabindex="-1">设置 <code>GitHub Actions</code> <a class="header-anchor" href="#设置-github-actions" aria-label="Permalink to &quot;设置 `GitHub Actions`&quot;">​</a></h3><p>我们需要进入仓库配置页面进行简单的配置:<code>Settings -&gt; Actions -&gt; General</code></p><img src="'+o+'" alt="github action"><h3 id="生成access-token" tabindex="-1">生成<code>Access Token</code> <a class="header-anchor" href="#生成access-token" aria-label="Permalink to &quot;生成`Access Token`&quot;">​</a></h3><ol><li>我们需要<code>GitHub</code>配置个人信息：<code>用户头像 -&gt; Settings -&gt; Developer settings -&gt; Personal access tokens -&gt; Tokens(classic)</code></li></ol><img src="'+c+'" alt="github access"><ol start="2"><li>至少要勾选上 repo，否则这个 token 没有仓库权限，自动部署会失败。然后点击生成 token，生成后复制保存起来。</li></ol><img src="'+t+'" alt="github access"><h3 id="创建-secrets" tabindex="-1">创建 <code>Secrets</code> <a class="header-anchor" href="#创建-secrets" aria-label="Permalink to &quot;创建 `Secrets`&quot;">​</a></h3><p>我们需要进入仓库配置页面进行简单的配置:<code>Settings -&gt; Secrets and variables -&gt; Actions -&gt;New repository secret</code>, 名称为 ACCESS_TOKEN，值就是上一步生成的 token 值</p><img src="'+i+'" alt="github secrets"><h3 id="创建任务文件" tabindex="-1">创建任务文件 <a class="header-anchor" href="#创建任务文件" aria-label="Permalink to &quot;创建任务文件&quot;">​</a></h3><blockquote><p>这部也可以略过，进行下步自动部署，任务文件配置看最下面 <img src="'+r+`" alt="github actions"></p></blockquote><h3 id="自动部署" tabindex="-1">自动部署 <a class="header-anchor" href="#自动部署" aria-label="Permalink to &quot;自动部署&quot;">​</a></h3><blockquote><p>在项目根目录下新建自动部署任务文件<code>.github/workflows/deploy.yml</code></p></blockquote><p><code>deploy.yml</code></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;"># 1. 为工作流定义名字</span></span>
<span class="line"><span style="color:#e1e4e8;">name: Deploy VitePress site to Pages</span></span>
<span class="line"><span style="color:#e1e4e8;"># 2. 触发条件修改为: 当 main 或 master 分支, 有 push 的时候, 执行任务</span></span>
<span class="line"><span style="color:#e1e4e8;">on:</span></span>
<span class="line"><span style="color:#e1e4e8;">  push:</span></span>
<span class="line"><span style="color:#e1e4e8;">    branches:</span></span>
<span class="line"><span style="color:#e1e4e8;">      - main</span></span>
<span class="line"><span style="color:#e1e4e8;">    # tags:</span></span>
<span class="line"><span style="color:#e1e4e8;">    #   - &#39;*&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#e1e4e8;"># 3. 创建工作流</span></span>
<span class="line"><span style="color:#e1e4e8;">jobs:</span></span>
<span class="line"><span style="color:#e1e4e8;">  # 工作流名称</span></span>
<span class="line"><span style="color:#e1e4e8;">  deploy-and-sync:</span></span>
<span class="line"><span style="color:#e1e4e8;">    # 依赖环境</span></span>
<span class="line"><span style="color:#e1e4e8;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#e1e4e8;">    steps:</span></span>
<span class="line"><span style="color:#e1e4e8;">      # step 1. 获取源码, 拉取仓库代码</span></span>
<span class="line"><span style="color:#e1e4e8;">      # 步骤名</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Checkout 🛎️</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 使用插件 =&gt; https://github.com/actions/checkout</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: actions/checkout@v4</span></span>
<span class="line"><span style="color:#e1e4e8;">        # 插件携带参数</span></span>
<span class="line"><span style="color:#e1e4e8;">        # with:</span></span>
<span class="line"><span style="color:#e1e4e8;">        #   ref: &#39;master&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      # step 2. 使用指定版本 node</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Install pnpm</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: corepack enable</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          node-version: &#39;18&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">          cache: &#39;pnpm&#39;</span></span>
<span class="line"><span style="color:#e1e4e8;">      # step 3. 安装依赖并打包</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: pnpm install</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Build Site</span></span>
<span class="line"><span style="color:#e1e4e8;">        run: pnpm run docs:build</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">      # step 4. 项目部署, 将打包后的产物合并到指定的分支上</span></span>
<span class="line"><span style="color:#e1e4e8;">      - name: Deploy for GitHub 🚀</span></span>
<span class="line"><span style="color:#e1e4e8;">        uses: JamesIves/github-pages-deploy-action@v4.4.1</span></span>
<span class="line"><span style="color:#e1e4e8;">        with:</span></span>
<span class="line"><span style="color:#e1e4e8;">          branch: gh-pages</span></span>
<span class="line"><span style="color:#e1e4e8;">          folder: docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#e1e4e8;">          # enable single-commit to reduce the repo size</span></span>
<span class="line"><span style="color:#e1e4e8;">          single-commit: true</span></span>
<span class="line"><span style="color:#e1e4e8;">          clean: true</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;"># 1. 为工作流定义名字</span></span>
<span class="line"><span style="color:#24292e;">name: Deploy VitePress site to Pages</span></span>
<span class="line"><span style="color:#24292e;"># 2. 触发条件修改为: 当 main 或 master 分支, 有 push 的时候, 执行任务</span></span>
<span class="line"><span style="color:#24292e;">on:</span></span>
<span class="line"><span style="color:#24292e;">  push:</span></span>
<span class="line"><span style="color:#24292e;">    branches:</span></span>
<span class="line"><span style="color:#24292e;">      - main</span></span>
<span class="line"><span style="color:#24292e;">    # tags:</span></span>
<span class="line"><span style="color:#24292e;">    #   - &#39;*&#39;</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">  workflow_dispatch:</span></span>
<span class="line"><span style="color:#24292e;"># 3. 创建工作流</span></span>
<span class="line"><span style="color:#24292e;">jobs:</span></span>
<span class="line"><span style="color:#24292e;">  # 工作流名称</span></span>
<span class="line"><span style="color:#24292e;">  deploy-and-sync:</span></span>
<span class="line"><span style="color:#24292e;">    # 依赖环境</span></span>
<span class="line"><span style="color:#24292e;">    runs-on: ubuntu-latest</span></span>
<span class="line"><span style="color:#24292e;">    steps:</span></span>
<span class="line"><span style="color:#24292e;">      # step 1. 获取源码, 拉取仓库代码</span></span>
<span class="line"><span style="color:#24292e;">      # 步骤名</span></span>
<span class="line"><span style="color:#24292e;">      - name: Checkout 🛎️</span></span>
<span class="line"><span style="color:#24292e;">        # 使用插件 =&gt; https://github.com/actions/checkout</span></span>
<span class="line"><span style="color:#24292e;">        uses: actions/checkout@v4</span></span>
<span class="line"><span style="color:#24292e;">        # 插件携带参数</span></span>
<span class="line"><span style="color:#24292e;">        # with:</span></span>
<span class="line"><span style="color:#24292e;">        #   ref: &#39;master&#39;</span></span>
<span class="line"><span style="color:#24292e;">      # step 2. 使用指定版本 node</span></span>
<span class="line"><span style="color:#24292e;">      - name: Install pnpm</span></span>
<span class="line"><span style="color:#24292e;">        run: corepack enable</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - uses: actions/setup-node@v3</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          node-version: &#39;18&#39;</span></span>
<span class="line"><span style="color:#24292e;">          cache: &#39;pnpm&#39;</span></span>
<span class="line"><span style="color:#24292e;">      # step 3. 安装依赖并打包</span></span>
<span class="line"><span style="color:#24292e;">      - name: Install dependencies</span></span>
<span class="line"><span style="color:#24292e;">        run: pnpm install</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      - name: Build Site</span></span>
<span class="line"><span style="color:#24292e;">        run: pnpm run docs:build</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">      # step 4. 项目部署, 将打包后的产物合并到指定的分支上</span></span>
<span class="line"><span style="color:#24292e;">      - name: Deploy for GitHub 🚀</span></span>
<span class="line"><span style="color:#24292e;">        uses: JamesIves/github-pages-deploy-action@v4.4.1</span></span>
<span class="line"><span style="color:#24292e;">        with:</span></span>
<span class="line"><span style="color:#24292e;">          branch: gh-pages</span></span>
<span class="line"><span style="color:#24292e;">          folder: docs/.vitepress/dist</span></span>
<span class="line"><span style="color:#24292e;">          # enable single-commit to reduce the repo size</span></span>
<span class="line"><span style="color:#24292e;">          single-commit: true</span></span>
<span class="line"><span style="color:#24292e;">          clean: true</span></span></code></pre></div>`,43),h=[d];function u(g,m,b,v,k,f){return n(),e("div",null,h)}const x=s(y,[["render",u]]);export{q as __pageData,x as default};

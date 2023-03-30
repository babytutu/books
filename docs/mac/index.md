# Mac小技巧
## 解决端口被占用

> 查看被占用端口对应PID

```bash
lsof -i:9001
```

终端会把坏人给列出来

```bash
COMMAND  PID USER   FD   TYPE   DEVICE SIZE/OFF NODE NAME
node    7500 tutu   24u  IPv4  0x27bd9      0t0  TCP *:etlservicemgr (LISTEN)
```

> 解放端口号

```bash
kill 92239
```

## macOS 运行应用出现「意外退出」及「崩溃闪退」问题修复方法

更新系统后有很多软件打不开，或者出现闪退的情况，是因为Apple苹果公司在新系统中删除了TNT的证书

打开终端工具输入并执行如下命令：

```bash
sudo codesign --force --deep --sign - (应用路径)
```

应用路径：打开访达（Finder），点击左侧导航栏的 应用程序，找到相关应用，将它拖进终端命令- 的后面，然后按下回车即可，注意最后一个 - 后面有一个空格。

正常情况下只有一行提示，即成功：

```bash
/文件位置 : replacing existing signature
```

## 强制升级macOS

MacBook Pro（13 英寸，2011）A1278 使用macOS Catalina Patcher成功安装macOS Catalina

1. 准备好一个16G以上的U盘（8G的不够用）；
2. 到大神Collin的个人网站上，下载软件；[macOS Catalina Patcher](http://dosdude1.com/catalina/)
3. 双击下载的dmg文件，生成一个硬盘映像；
4. 双击图标，打开程序；
5. 打开后界面，英文的，继续；
6. 安装文件有两个选择：已经下载过的，在线下载
7. 选择要安装此系统的方法，选中间那个，创建一个启动U盘；
8. 插入那个事先准备好的16G空白U盘。
9. 出现警告，点Yes；
10. 开始创建，需要点时间；
11. 启动U盘创建完成，退出；
12. 在要安装系统的电脑上，插入制作好的启动U盘，开机，按Option键，选择U盘启动。进入实用工具后，用磁盘工具“将内部驱动器（用于安装macOS Catalina的驱动器）格式化为APFS，进入重新安装macOS开始安装；
13. 注意：安装完成，第一次重启，系统开始配置，再次自动重启，安装补丁成功。
14. 第一次进入桌面，提示要完成补丁升级；
15. 补丁升级完成，重启；
16. 在启动台其他里，有个Patch Updater，用于补丁升级
17. MacBook Pro（13 英寸，2011 年末）A1278安装macOS Catalina，成功！
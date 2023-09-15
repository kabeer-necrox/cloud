Welcome to Ubuntu 22.04.2 LTS (GNU/Linux 5.19.0-1025-aws x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/advantage

  System information as of Fri Sep  8 12:25:42 UTC 2023

  System load:  0.080078125       Processes:             95
  Usage of /:   20.6% of 7.57GB   Users logged in:       0
  Memory usage: 24%               IPv4 address for eth0: 172.31.43.172
  Swap usage:   0%

Expanded Security Maintenance for Applications is not enabled.

0 updates can be applied immediately.

Enable ESM Apps to receive additional future security updates.
See https://ubuntu.com/esm or run: sudo pro status


The list of available updates is more than a week old.
To check for new updates run: sudo apt update


The programs included with the Ubuntu system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Ubuntu comes with ABSOLUTELY NO WARRANTY, to the extent permitted by
applicable law.

To run a command as administrator (user "root"), use "sudo <command>".
See "man sudo_root" for details.

ubuntu@ip-172-31-43-172:~$ sudo apt update
Hit:1 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy InRelease
Get:2 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates InRelease [119 kB]
Get:3 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports InRelease [109 kB]
Get:4 http://security.ubuntu.com/ubuntu jammy-security InRelease [110 kB]
Get:5 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/universe amd64 Packages [14.1 MB]
Get:6 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/universe Translation-en [5652 kB]
Get:7 http://security.ubuntu.com/ubuntu jammy-security/main amd64 Packages [761 kB]  
Get:8 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/universe amd64 c-n-f Metadata [286 kB]
Get:9 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/multiverse amd64 Packages [217 kB] 
Get:10 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/multiverse Translation-en [112 kB]
Get:11 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/multiverse amd64 c-n-f Metadata [8372 B]
Get:12 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 Packages [970 kB]
Get:13 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main Translation-en [222 kB]
Get:14 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 c-n-f Metadata [15.6 kB]
Get:15 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/restricted amd64 Packages [838 kB]
Get:16 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/restricted Translation-en [135 kB]
Get:17 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/restricted amd64 c-n-f Metadata [536 B]
Get:18 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/universe amd64 Packages [979 kB]
Get:19 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/universe Translation-en [213 kB]
Get:20 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/universe amd64 c-n-f Metadata [21.8 kB]
Get:21 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/multiverse amd64 Packages [41.6 kB]
Get:22 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/multiverse Translation-en [9768 B]
Get:23 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/multiverse amd64 c-n-f Metadata [476 B]
Get:24 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/main amd64 Packages [41.7 kB]
Get:25 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/main Translation-en [10.5 kB]
Get:26 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/main amd64 c-n-f Metadata [388 B]
Get:27 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/restricted amd64 c-n-f Metadata [116 B]
Get:28 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/universe amd64 Packages [24.3 kB]
Get:29 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/universe Translation-en [16.4 kB]
Get:30 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/universe amd64 c-n-f Metadata [640 B]
Get:31 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-backports/multiverse amd64 c-n-f Metadata [116 B]
Get:32 http://security.ubuntu.com/ubuntu jammy-security/main Translation-en [164 kB]
Get:33 http://security.ubuntu.com/ubuntu jammy-security/main amd64 c-n-f Metadata [11.3 kB]
Get:34 http://security.ubuntu.com/ubuntu jammy-security/restricted amd64 Packages [822 kB]
Get:35 http://security.ubuntu.com/ubuntu jammy-security/restricted Translation-en [132 kB]
Get:36 http://security.ubuntu.com/ubuntu jammy-security/restricted amd64 c-n-f Metadata [536 B]
Get:37 http://security.ubuntu.com/ubuntu jammy-security/universe amd64 Packages [781 kB]
Get:38 http://security.ubuntu.com/ubuntu jammy-security/universe Translation-en [143 kB]
Get:39 http://security.ubuntu.com/ubuntu jammy-security/universe amd64 c-n-f Metadata [16.7 kB]
Get:40 http://security.ubuntu.com/ubuntu jammy-security/multiverse amd64 Packages [36.5 kB]
Get:41 http://security.ubuntu.com/ubuntu jammy-security/multiverse Translation-en [7060 B]
Get:42 http://security.ubuntu.com/ubuntu jammy-security/multiverse amd64 c-n-f Metadata [260 B]
Fetched 27.1 MB in 5s (5491 kB/s)                           
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
113 packages can be upgraded. Run 'apt list --upgradable' to see them.
ubuntu@ip-172-31-43-172:~$ sudo apt install nginx
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
The following additional packages will be installed:
  fontconfig-config fonts-dejavu-core libdeflate0 libfontconfig1 libgd3 libjbig0 libjpeg-turbo8 libjpeg8 libnginx-mod-http-geoip2
  libnginx-mod-http-image-filter libnginx-mod-http-xslt-filter libnginx-mod-mail libnginx-mod-stream libnginx-mod-stream-geoip2 libtiff5 libwebp7
  libxpm4 nginx-common nginx-core
Suggested packages:
  libgd-tools fcgiwrap nginx-doc ssl-cert
The following NEW packages will be installed:
  fontconfig-config fonts-dejavu-core libdeflate0 libfontconfig1 libgd3 libjbig0 libjpeg-turbo8 libjpeg8 libnginx-mod-http-geoip2
  libnginx-mod-http-image-filter libnginx-mod-http-xslt-filter libnginx-mod-mail libnginx-mod-stream libnginx-mod-stream-geoip2 libtiff5 libwebp7
  libxpm4 nginx nginx-common nginx-core
0 upgraded, 20 newly installed, 0 to remove and 113 not upgraded.
Need to get 2691 kB of archives.
After this operation, 8335 kB of additional disk space will be used.
Do you want to continue? [Y/n] y
Get:1 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/main amd64 fonts-dejavu-core all 2.37-2build1 [1041 kB]
Get:2 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/main amd64 fontconfig-config all 2.13.1-4.2ubuntu5 [29.1 kB]
Get:3 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/main amd64 libdeflate0 amd64 1.10-2 [70.9 kB]
Get:4 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/main amd64 libfontconfig1 amd64 2.13.1-4.2ubuntu5 [131 kB]
Get:5 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/main amd64 libjpeg-turbo8 amd64 2.1.2-0ubuntu1 [134 kB]
Get:6 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/main amd64 libjpeg8 amd64 8c-2ubuntu10 [2264 B]
Get:7 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libjbig0 amd64 2.1-3.1ubuntu0.22.04.1 [29.2 kB]
Get:8 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libwebp7 amd64 1.2.2-2ubuntu0.22.04.1 [206 kB]
Get:9 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libtiff5 amd64 4.3.0-6ubuntu0.5 [184 kB]
Get:10 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libxpm4 amd64 1:3.5.12-1ubuntu0.22.04.1 [36.4 kB]
Get:11 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy/main amd64 libgd3 amd64 2.3.0-2ubuntu2 [129 kB]
Get:12 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 nginx-common all 1.18.0-6ubuntu14.4 [40.0 kB]
Get:13 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libnginx-mod-http-geoip2 amd64 1.18.0-6ubuntu14.4 [11.9 kB]
Get:14 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libnginx-mod-http-image-filter amd64 1.18.0-6ubuntu14.4 [15.4 kB]
Get:15 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libnginx-mod-http-xslt-filter amd64 1.18.0-6ubuntu14.4 [13.7 kB]
Get:16 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libnginx-mod-mail amd64 1.18.0-6ubuntu14.4 [45.7 kB]
Get:17 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libnginx-mod-stream amd64 1.18.0-6ubuntu14.4 [72.9 kB]
Get:18 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 libnginx-mod-stream-geoip2 amd64 1.18.0-6ubuntu14.4 [10.1 kB]
Get:19 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 nginx-core amd64 1.18.0-6ubuntu14.4 [484 kB]
Get:20 http://us-east-1.ec2.archive.ubuntu.com/ubuntu jammy-updates/main amd64 nginx amd64 1.18.0-6ubuntu14.4 [3872 B]
Fetched 2691 kB in 0s (23.7 MB/s)
Preconfiguring packages ...
Selecting previously unselected package fonts-dejavu-core.
(Reading database ... 64295 files and directories currently installed.)
Preparing to unpack .../00-fonts-dejavu-core_2.37-2build1_all.deb ...
Unpacking fonts-dejavu-core (2.37-2build1) ...
Selecting previously unselected package fontconfig-config.
Preparing to unpack .../01-fontconfig-config_2.13.1-4.2ubuntu5_all.deb ...
Unpacking fontconfig-config (2.13.1-4.2ubuntu5) ...
Selecting previously unselected package libdeflate0:amd64.
Preparing to unpack .../02-libdeflate0_1.10-2_amd64.deb ...
Unpacking libdeflate0:amd64 (1.10-2) ...
Selecting previously unselected package libfontconfig1:amd64.
Preparing to unpack .../03-libfontconfig1_2.13.1-4.2ubuntu5_amd64.deb ...
Unpacking libfontconfig1:amd64 (2.13.1-4.2ubuntu5) ...
Selecting previously unselected package libjpeg-turbo8:amd64.
Preparing to unpack .../04-libjpeg-turbo8_2.1.2-0ubuntu1_amd64.deb ...
Unpacking libjpeg-turbo8:amd64 (2.1.2-0ubuntu1) ...
Selecting previously unselected package libjpeg8:amd64.
Preparing to unpack .../05-libjpeg8_8c-2ubuntu10_amd64.deb ...
Unpacking libjpeg8:amd64 (8c-2ubuntu10) ...
Selecting previously unselected package libjbig0:amd64.
Preparing to unpack .../06-libjbig0_2.1-3.1ubuntu0.22.04.1_amd64.deb ...
Unpacking libjbig0:amd64 (2.1-3.1ubuntu0.22.04.1) ...
Selecting previously unselected package libwebp7:amd64.
Preparing to unpack .../07-libwebp7_1.2.2-2ubuntu0.22.04.1_amd64.deb ...
Unpacking libwebp7:amd64 (1.2.2-2ubuntu0.22.04.1) ...
Selecting previously unselected package libtiff5:amd64.
Preparing to unpack .../08-libtiff5_4.3.0-6ubuntu0.5_amd64.deb ...
Unpacking libtiff5:amd64 (4.3.0-6ubuntu0.5) ...
Selecting previously unselected package libxpm4:amd64.
Preparing to unpack .../09-libxpm4_1%3a3.5.12-1ubuntu0.22.04.1_amd64.deb ...
Unpacking libxpm4:amd64 (1:3.5.12-1ubuntu0.22.04.1) ...
Selecting previously unselected package libgd3:amd64.
Preparing to unpack .../10-libgd3_2.3.0-2ubuntu2_amd64.deb ...
Unpacking libgd3:amd64 (2.3.0-2ubuntu2) ...
Selecting previously unselected package nginx-common.
Preparing to unpack .../11-nginx-common_1.18.0-6ubuntu14.4_all.deb ...
Unpacking nginx-common (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package libnginx-mod-http-geoip2.
Preparing to unpack .../12-libnginx-mod-http-geoip2_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking libnginx-mod-http-geoip2 (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package libnginx-mod-http-image-filter.
Preparing to unpack .../13-libnginx-mod-http-image-filter_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking libnginx-mod-http-image-filter (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package libnginx-mod-http-xslt-filter.
Preparing to unpack .../14-libnginx-mod-http-xslt-filter_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking libnginx-mod-http-xslt-filter (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package libnginx-mod-mail.
Preparing to unpack .../15-libnginx-mod-mail_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking libnginx-mod-mail (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package libnginx-mod-stream.
Preparing to unpack .../16-libnginx-mod-stream_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking libnginx-mod-stream (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package libnginx-mod-stream-geoip2.
Preparing to unpack .../17-libnginx-mod-stream-geoip2_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking libnginx-mod-stream-geoip2 (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package nginx-core.
Preparing to unpack .../18-nginx-core_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking nginx-core (1.18.0-6ubuntu14.4) ...
Selecting previously unselected package nginx.
Preparing to unpack .../19-nginx_1.18.0-6ubuntu14.4_amd64.deb ...
Unpacking nginx (1.18.0-6ubuntu14.4) ...
Setting up libxpm4:amd64 (1:3.5.12-1ubuntu0.22.04.1) ...
Setting up libdeflate0:amd64 (1.10-2) ...
Setting up nginx-common (1.18.0-6ubuntu14.4) ...
Created symlink /etc/systemd/system/multi-user.target.wants/nginx.service → /lib/systemd/system/nginx.service.
Setting up libjbig0:amd64 (2.1-3.1ubuntu0.22.04.1) ...
Setting up libnginx-mod-http-xslt-filter (1.18.0-6ubuntu14.4) ...
Setting up fonts-dejavu-core (2.37-2build1) ...
Setting up libjpeg-turbo8:amd64 (2.1.2-0ubuntu1) ...
Setting up libwebp7:amd64 (1.2.2-2ubuntu0.22.04.1) ...
Setting up libnginx-mod-http-geoip2 (1.18.0-6ubuntu14.4) ...
Setting up libjpeg8:amd64 (8c-2ubuntu10) ...
Setting up libnginx-mod-mail (1.18.0-6ubuntu14.4) ...
Setting up fontconfig-config (2.13.1-4.2ubuntu5) ...
Setting up libnginx-mod-stream (1.18.0-6ubuntu14.4) ...
Setting up libtiff5:amd64 (4.3.0-6ubuntu0.5) ...
Setting up libfontconfig1:amd64 (2.13.1-4.2ubuntu5) ...
Setting up libnginx-mod-stream-geoip2 (1.18.0-6ubuntu14.4) ...
Setting up libgd3:amd64 (2.3.0-2ubuntu2) ...
Setting up libnginx-mod-http-image-filter (1.18.0-6ubuntu14.4) ...
Setting up nginx-core (1.18.0-6ubuntu14.4) ...
 * Upgrading binary nginx                                                                                                                      [ OK ] 
Setting up nginx (1.18.0-6ubuntu14.4) ...
Processing triggers for ufw (0.36.1-4build1) ...
Processing triggers for man-db (2.10.2-1) ...
Processing triggers for libc-bin (2.35-0ubuntu3.1) ...
Scanning processes...                                                                                                                                 
Scanning linux images...                                                                                                                              

Running kernel seems to be up-to-date.

No services need to be restarted.

No containers need to be restarted.

No user sessions are running outdated binaries.

No VM guests are running outdated hypervisor (qemu) binaries on this host.
ubuntu@ip-172-31-43-172:~$ sudo ufw app list
Available applications:
  Nginx Full
  Nginx HTTP
  Nginx HTTPS
  OpenSSH
ubuntu@ip-172-31-43-172:~$ sudo ufw allow 'Nginx HTTP'
Rules updated
Rules updated (v6)
ubuntu@ip-172-31-43-172:~$ sudo ufw status
Status: inactive
ubuntu@ip-172-31-43-172:~$ systemctl status nginx
● nginx.service - A high performance web server and a reverse proxy server
     Loaded: loaded (/lib/systemd/system/nginx.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2023-09-08 12:26:23 UTC; 3min 12s ago
       Docs: man:nginx(8)
    Process: 2529 ExecStartPre=/usr/sbin/nginx -t -q -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
    Process: 2530 ExecStart=/usr/sbin/nginx -g daemon on; master_process on; (code=exited, status=0/SUCCESS)
   Main PID: 2624 (nginx)
      Tasks: 2 (limit: 1141)
     Memory: 4.4M
        CPU: 23ms
     CGroup: /system.slice/nginx.service
             ├─2624 "nginx: master process /usr/sbin/nginx -g daemon on; master_process on;"
             └─2627 "nginx: worker process" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" "" ""

Sep 08 12:26:23 ip-172-31-43-172 systemd[1]: Starting A high performance web server and a reverse proxy server...
Sep 08 12:26:23 ip-172-31-43-172 systemd[1]: Started A high performance web server and a reverse proxy server.
ubuntu@ip-172-31-43-172:~$ cd /var/www/html/
ubuntu@ip-172-31-43-172:/var/www/html$ ls
index.nginx-debian.html
ubuntu@ip-172-31-43-172:/var/www/html$ rm -r index.nginx-debian.html 
rm: remove write-protected regular file 'index.nginx-debian.html'? 
ubuntu@ip-172-31-43-172:/var/www/html$ sudo rm -r index.nginx-debian.html 
ubuntu@ip-172-31-43-172:/var/www/html$ sudo git clone https://github.com/kabeer-necrox/flex.git
Cloning into 'flex'...
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (4/4), done.
remote: Total 4 (delta 0), reused 4 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.
ubuntu@ip-172-31-43-172:/var/www/html$ ls
flex
ubuntu@ip-172-31-43-172:/var/www/html$ cd flex/
ubuntu@ip-172-31-43-172:/var/www/html/flex$ ls
index.html  style.css
ubuntu@ip-172-31-43-172:/var/www/html/flex$ cp ~/index.html ~/style.css ~/var/www/html
cp: target '/home/ubuntu/var/www/html' is not a directory
ubuntu@ip-172-31-43-172:/var/www/html/flex$ cp ~/index.html ~/styleindex.html ~/style.css ~/var/www/html/
cp: target '/home/ubuntu/var/www/html/' is not a directory
ubuntu@ip-172-31-43-172:/var/www/html/flex$ pwd
/var/www/html/flex
ubuntu@ip-172-31-43-172:/var/www/html/flex$ cp ~/index.html ~/style.css ~/var/www/html/
cp: target '/home/ubuntu/var/www/html/' is not a directory
ubuntu@ip-172-31-43-172:/var/www/html/flex$ sudo cp ~/index.html ~/style.css /var/www/html/
cp: cannot stat '/home/ubuntu/index.html': No such file or directory
cp: cannot stat '/home/ubuntu/style.css': No such file or directory
ubuntu@ip-172-31-43-172:/var/www/html/flex$ cd ..
ubuntu@ip-172-31-43-172:/var/www/html$ ls
flex
ubuntu@ip-172-31-43-172:/var/www/html$ cd
ubuntu@ip-172-31-43-172:~$ cd /etc/nginx/
ubuntu@ip-172-31-43-172:/etc/nginx$ ls
conf.d        fastcgi_params  koi-win     modules-available  nginx.conf    scgi_params      sites-enabled  uwsgi_params
fastcgi.conf  koi-utf         mime.types  modules-enabled    proxy_params  sites-available  snippets       win-utf
ubuntu@ip-172-31-43-172:/etc/nginx$ cd /sites-enabled
-bash: cd: /sites-enabled: No such file or directory
ubuntu@ip-172-31-43-172:/etc/nginx$ cd /sites-enabled/
-bash: cd: /sites-enabled/: No such file or directory
ubuntu@ip-172-31-43-172:/etc/nginx$ cd /ites-enabled/
-bash: cd: /ites-enabled/: No such file or directory
ubuntu@ip-172-31-43-172:/etc/nginx$ cd sites-enabled/
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ ls
default
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo d
dash                                debconf-set-selections              dir                                 dosfslabel
date                                debconf-show                        dircolors                           dpkg
dbus-cleanup-sockets                debian-distro-info                  dirmngr                             dpkg-deb
dbus-daemon                         debugfs                             dirmngr-client                      dpkg-divert
dbus-monitor                        declare                             dirname                             dpkg-maintscript-helper
dbus-run-session                    delgroup                            dirs                                dpkg-preconfigure
dbus-send                           delpart                             disown                              dpkg-query
dbus-update-activation-environment  deluser                             distro-info                         dpkg-realpath
dbus-uuidgen                        delv                                dmesg                               dpkg-reconfigure
dcb                                 depmod                              dmeventd                            dpkg-split
dd                                  dequote                             dmidecode                           dpkg-statoverride
deallocvt                           devlink                             dmsetup                             dpkg-trigger
deb-systemd-helper                  df                                  dmstats                             du
deb-systemd-invoke                  dh_bash-completion                  dnsdomainname                       dumpe2fs
debconf                             dhclient                            do                                  dumpkeys
debconf-apt-progress                dhclient-script                     do-release-upgrade                  dwp
debconf-communicate                 diff                                domainname                          
debconf-copydb                      diff3                               done                                
debconf-escape                      dig                                 dosfsck                             
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo d
dash                                debconf-set-selections              dir                                 dosfslabel
date                                debconf-show                        dircolors                           dpkg
dbus-cleanup-sockets                debian-distro-info                  dirmngr                             dpkg-deb
dbus-daemon                         debugfs                             dirmngr-client                      dpkg-divert
dbus-monitor                        declare                             dirname                             dpkg-maintscript-helper
dbus-run-session                    delgroup                            dirs                                dpkg-preconfigure
dbus-send                           delpart                             disown                              dpkg-query
dbus-update-activation-environment  deluser                             distro-info                         dpkg-realpath
dbus-uuidgen                        delv                                dmesg                               dpkg-reconfigure
dcb                                 depmod                              dmeventd                            dpkg-split
dd                                  dequote                             dmidecode                           dpkg-statoverride
deallocvt                           devlink                             dmsetup                             dpkg-trigger
deb-systemd-helper                  df                                  dmstats                             du
deb-systemd-invoke                  dh_bash-completion                  dnsdomainname                       dumpe2fs
debconf                             dhclient                            do                                  dumpkeys
debconf-apt-progress                dhclient-script                     do-release-upgrade                  dwp
debconf-communicate                 diff                                domainname                          
debconf-copydb                      diff3                               done                                
debconf-escape                      dig                                 dosfsck                             
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo defualt
sudo: defualt: command not found
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo defult
sudo: defult: command not found
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ ls
default
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo default
sudo: default: command not found
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo nano default
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo nano default
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo nano default
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ sudo systemctl restart nginx
ubuntu@ip-172-31-43-172:/etc/nginx/sites-enabled$ cd ..
ubuntu@ip-172-31-43-172:/etc/nginx$ ls
conf.d        fastcgi_params  koi-win     modules-available  nginx.conf    scgi_params      sites-enabled  uwsgi_params
fastcgi.conf  koi-utf         mime.types  modules-enabled    proxy_params  sites-available  snippets       win-utf
ubuntu@ip-172-31-43-172:/etc/nginx$ ^C
ubuntu@ip-172-31-43-172:/etc/nginx$ 
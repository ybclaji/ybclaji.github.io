#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
cd /Users/yuebaocheng/Desktop/vuepresstest
git add -A
git commit -m 'deploy'
git push -f git@github.com:ybclaji/vuepress.git master
cd -

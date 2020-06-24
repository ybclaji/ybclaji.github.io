## 基本操作
### git init——初始化仓库
```
$ mkdir git-tutorial
$ cd git-tutorial
$ git init
Initialized empty Git repository in /Users/hirocaster/github/github-book
/git-tutorial/.git/
```
如果初始化成功，执行了git init命令的目录下就会生成.git 目录。这个.git 目录里存储着管理当前目录内容所需的仓库数据,称为工作树
### git status——查看仓库的状态
```
$ git status
On branch master

No commits yet

nothing to commit (create/copy files and use "git add" to track)
```
当前处于master分支
```
$ touch README.md

Administrator@PC-ybc MINGW64 /f/study/gitTest (master)
$ git status
On branch master

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        README.md

nothing added to commit but untracked files present (use "git add" to track)

```
添加了README.md文件,git status显示出了变化
### git add——向暂存区中添加文件
如果只是用Git 仓库的工作树创建了文件，那么该文件并不会被记
入Git 仓库的版本管理对象当中。因此我们用git status命令查看
README.md 文件时，它会显示在Untracked files 里。
```
$ git add README.md

Administrator@PC-ybc MINGW64 /f/study/gitTest (master)
$ git status
On branch master

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   README.md

```
使用git add命令把工作树或者工作区文件加入到暂存区（stage或者index）,暂存区是提交前一个临时区域
### git commit——保存仓库的历史记录
git commit命令可以将当前暂存区中的文件实际保存到仓库的历
史记录中。通过这些记录，我们就可以在工作树中复原文件
#### 提交一行信息
```
$ git commit -m "first commit"
[master (root-commit) 9798985] first commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.md
```
#### 提交详细信息
不使用-m 参数
```
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
# On branch master
#
# Initial commit
#
# Changes to be committed:
# (use "git rm --cached <file>..." to unstage)
#
# new file: README.md
#
```
#### 终止提交
如果在编辑器启动后想中止提交，请将提交信息留空并直接关闭编
辑器，随后提交就会被中止
#### 查看提交后的状态
```
$ git status
# On branch master
nothing to commit, working directory clean
```
当前工作树处于刚刚完成提交的最新状态，所以结果显示没有更改。
### git log——查看提交日志
git log命令可以查看以往仓库中提交的日志。包括可以查看什
么人在什么时候进行了提交或合并，以及操作前后有怎样的差别。
```
$ git log
commit 7f87d4c0a61f9d6d92d9098634c77d21bb367273 (HEAD -> master)
Author: yanxiaose <ybclaji@126.com>
Date:   Tue Jun 23 16:50:24 2020 +0800

    不使用-m参数提交

commit 97989858097c04ddbf14d55a5d3d7cc4973b80f8
Author: yanxiaose <ybclaji@126.com>
Date:   Tue Jun 23 16:48:44 2020 +0800

    first commit
```
#### 只显示提交信息的第一行
```
$ git log --pretty=short
commit f420c24ffe530e184eebc98b739033d078ac643c (HEAD -> master)
Author: yanxiaose <ybclaji@126.com>

    add git 教程

commit 7f87d4c0a61f9d6d92d9098634c77d21bb367273
Author: yanxiaose <ybclaji@126.com>

    不使用-m参数提交

commit 97989858097c04ddbf14d55a5d3d7cc4973b80f8
Author: yanxiaose <ybclaji@126.com>

    first commit
```
#### 只显示指定目录、文件的日志
```
$ git log README.md
commit f420c24ffe530e184eebc98b739033d078ac643c (HEAD -> master)
Author: yanxiaose <ybclaji@126.com>
Date:   Wed Jun 24 10:55:55 2020 +0800

    add git 教程

commit 7f87d4c0a61f9d6d92d9098634c77d21bb367273
Author: yanxiaose <ybclaji@126.com>
Date:   Tue Jun 23 16:50:24 2020 +0800

    不使用-m参数提交

commit 97989858097c04ddbf14d55a5d3d7cc4973b80f8
Author: yanxiaose <ybclaji@126.com>
Date:   Tue Jun 23 16:48:44 2020 +0800

    first commit


```
#### 显示文件的改动

````
$ git log -p README.md
commit f420c24ffe530e184eebc98b739033d078ac643c (HEAD -> master)
Author: yanxiaose <ybclaji@126.com>
Date:   Wed Jun 24 10:55:55 2020 +0800

    add git 教程

diff --git a/README.md b/README.md
index 72943a1..f9bb8d9 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,2 @@
 aaa
+git 教程

commit 7f87d4c0a61f9d6d92d9098634c77d21bb367273
Author: yanxiaose <ybclaji@126.com>
Date:   Tue Jun 23 16:50:24 2020 +0800

    不使用-m参数提交

diff --git a/README.md b/README.md
index e69de29..72943a1 100644
--- a/README.md
:
````
### git diff——查看更改前后的差别
git diff命令可以查看工作树、暂存区、最新提交之间的差别
#### 查看工作树和暂存区的差别
```
$ git diff
warning: LF will be replaced by CRLF in README.md.
The file will have its original line endings in your working directory
diff --git a/README.md b/README.md
index 72943a1..f9bb8d9 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,2 @@
 aaa
+git 教程
```
这里解释一下显示的内容。“+”号标出的是新添加的行，被删除的
行则用“-”号标出
#### 查看工作树和最新提交的差别
在执行git commit命令之前先执行
git diff HEAD命令，查看本次提交与上次提交之间有什么差别，等
确认完毕后再进行提交。这里的HEAD 是指向当前分支中最新一次提交
的指针。
```
$ git diff HEAD
diff --git a/README.md b/README.md
index 72943a1..f9bb8d9 100644
--- a/README.md
+++ b/README.md
@@ -1 +1,2 @@
 aaa
+git 教程
```

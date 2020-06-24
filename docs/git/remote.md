## 推送到远程仓库
先在git上创建远程仓库，前面的文档有。
### git remote add——添加远程仓库
按照格式执行git remote add命令之后，Git 会自动将
git@github.com:github-book/git-tutorial.git远程仓库的
名称设置为origin（标识符）。
```
$ git remote add origin git@github.com:ybclaji/gitExercise.git
```
### git push——推送至远程仓库
如果想将当前分支下本地仓库中的内容推送给远程仓库，需要用到
git push命令。现在假定我们在master 分支下进行操作
```
$ git push -u origin master
Counting objects: 20, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (10/10), done.
Writing objects: 100% (20/20), 1.60 KiB, done.
Total 20 (delta 3), reused 0 (delta 0)
To git@github.com:github-book/git-tutorial.git
* [new branch] master -> master
Branch master set up to track remote branch master from origin.
```
像这样执行git push命令，当前分支的内容就会被推送给远程仓库
origin 的master 分支。-u参数可以在推送的同时，将origin 仓库的master 分
支设置为本地仓库当前分支的upstream（上游）。添加了这个参数，将来
运行git pull命令从远程仓库获取内容时，本地仓库的这个分支就可
以直接从origin 的master 分支获取内容，省去了另外添加参数的麻烦<br>
执行该操作后，当前本地仓库master 分支的内容将会被推送到
GitHub 的远程仓库中。在GitHub 上也可以确认远程master 分支的内容和本地master 分支相同
### 推送至master 以外的分支
除了master 分支之外，远程仓库也可以创建其他分支，在本地创建feature-D分支，以同名形式push至远程仓库
```
$ git checkout -b feature-D
Switched to a new branch 'feature-D'
$ git push -u origin feature-D
Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
remote:
remote: Create a pull request for 'feature-D' on GitHub by visiting:
remote:      https://github.com/ybclaji/gitExercise/pull/new/feature-D
remote:
To github.com:ybclaji/gitExercise.git
 * [new branch]      feature-D -> feature-D
Branch 'feature-D' set up to track remote branch 'feature-D' from 'origin'.
```
## 从远程仓库获取
以为同学先开发一部分push到了代码库，另一个同学接着共同开发，他需要获取代码
### git clone——获取远程仓库
新建个目录用于测试gitTest1,将github上的仓库clone到本地,执行git clone命令后我们会默认处于master 分支下，同时系统
会自动将origin 设置成该远程仓库的标识符。也就是说，当前本地仓库
的master 分支与GitHub 端远程仓库（origin）的master 分支在内容上是
完全相同的
```
$ cd ../gitTest1/
$ git clone git@github.com:ybclaji/gitExercise.git
Cloning into 'gitExercise'...
Warning: Permanently added the RSA host key for IP address '13.229.188.59' to the list of known hosts.
remote: Enumerating objects: 29, done.
remote: Counting objects: 100% (29/29), done.
remote: Compressing objects: 100% (8/8), done.
remote: Total 29 (delta 3), reused 29 (delta 3), pack-reused 0
Receiving objects: 100% (29/29), done.
Resolving deltas: 100% (3/3), done.
```
-a 参数同时显示本地库和远程库
```
$ git branch -a
* master
  remotes/origin/HEAD -> origin/master
  remotes/origin/feature-D
  remotes/origin/master
```
#### 获取远程的feature-D 分支
-b 参数的后面是本地仓库中新建分支的名称。为了便于理解，我
们仍将其命名为feature-D，让它与远程仓库的对应分支保持同名。新建
分支名称后面是获取来源的分支名称。例子中指定了origin/feature-D，
就是说以名为origin 的仓库（这里指GitHub 端的仓库）的feature-D 分
支为来源，在本地仓库中创建feature-D 分支。
```
$ git checkout -b feature-D origin/feature-D
Switched to a new branch 'feature-D'
Branch 'feature-D' set up to track remote branch 'feature-D' from 'origin'.
```
执行完上面的命令，head指向feature-D
#### 向本地的feature-D 分支提交更改
在本地修改README.md添加feature-D
```
$ git diff
diff --git a/README.md b/README.md
index f81cdf8..4c92626 100644
--- a/README.md
+++ b/README.md
@@ -4,3 +4,4 @@ feature-A
 fix-B
 -fix-c
 -feature-C
+-feature-D
$ git commit -am "add feature-D"
[feature-D c30f1be] add feature-D
 1 file changed, 1 insertion(+)
```
#### 推送feature-D 分支
```
$ git push
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 4 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 283 bytes | 141.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To github.com:ybclaji/gitExercise.git
   2d984a1..c30f1be  feature-D -> feature-D
```
### git pull——获取最新的远程仓库分支
回到gitTest目录，这边有feature-D分支但是没有提交，远程仓库中feature-D分支中有了提交，这时可以使用git pull来更新本地feature-D分支的状态
```
$ git pull origin feature-D
remote: Enumerating objects: 5, done.
remote: Counting objects: 100% (5/5), done.
remote: Compressing objects: 100% (2/2), done.
remote: Total 3 (delta 0), reused 3 (delta 0), pack-reused 0
Unpacking objects: 100% (3/3), 263 bytes | 1024 bytes/s, done.
From github.com:ybclaji/gitExercise
 * branch            feature-D  -> FETCH_HEAD
   2d984a1..c30f1be  feature-D  -> origin/feature-D
Updating 2d984a1..c30f1be
Fast-forward
 README.md | 1 +
 1 file changed, 1 insertion(+)
 $ cat README.md
 aaa
 git 教程
 feature-A
 fix-B
 -fix-c
 -feature-C
 -feature-D

```
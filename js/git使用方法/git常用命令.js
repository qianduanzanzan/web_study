git
init
将本文件夹初始化成一个本地git仓库
git
clone
'xxx'
将github上的远程克隆到本地
git
add [file1] [file2]
添加文件到暂存区，包括修改的文件、新增的文件
git
add [dir]
添加目录到暂存区，包括子目录
git
add.添加所有修改、新增文件（未跟踪）到暂存区
git
rm [file]
删除工作区文件，并且将这次删除放入暂存区
git
commit - m
'说明'
提交变更，参数 - m设置提交的描述信息，应该正确提交，不带该参数会进入说明编辑模式
git
commit - a
参数 - a，表示直接从工作区提交到版本库，略过了
git
add步骤，不包括新增的文件
git
commit [file]
提交暂存区的指定文件到仓库区
git
log - n20
查看日志(最近20条)，不带参数 - n则显示所有日志
git
log - n20--
oneline
参数“--oneline”可以让日志输出更简洁（一行）
git
log--
follow [file]
显示某个文件的版本历史
git
blame [file]
以列表形式显示指定文件的修改记录
git
reflog
查看所有可用的历史版本记录（实际是HEAD变更记录），包含被回退的记录
git
status
查看本地仓库状态，比较常用的指令，加参数 - s简洁模式
git
diff
查看暂存区和工作区的差异
git
diff [file]
查看暂存区和工作区指定文件的差异
git
diff [id] [id]
查看两次提交之间的差异
git
diff [branch]
查看工作区和分支直接的差异
git
remote - v
查看所有远程仓库，不带参数 - v只显示名称
git
tag
查看标签列表
git
pull [remote] [branch]
取回远程仓库指定分支的变化，并与本地版本合并
git
pull
取回远程仓库当前分支的变化，并与本地版本合并
git
fetch [remote]
获取远程仓库的所有变动到本地仓库，不会自动合并！需要手动合并
git
push
把当前分支的改变推送到远程仓库
git
push [remote] [branch]
推送本地当前分支到远程仓库的指定分支
git
push [remote]--
force / -f
强行推送当前分支到远程仓库，即使有冲突，⚠️很危险！
git
push [remote]--
all
推送所有分支到远程仓库
git
branch
查看本地分支列表，以及当前分支
git
branch - a
查看所有分支(包括本地和远程分支)
列表，以及当前分支
git
branch - r
列出所有远程分支
git
branch [branch - name]
新建一个分支，但依然停留在当前分支
git
branch - d [branch - name]
删除指定的分支，-D（大写）强制删除
git
checkout - b [branch - name]
从当前分支创建并切换到[branch - name]
分支
git
checkout [branch - name]
切换到指定分支，并更新工作区
git
checkout.撤销工作区的（未暂存）修改，把暂存区恢复到工作区。
git
merge [branch]
合并指定分支到当前分支
git
reset--
hard [commit]
回退到指定版本，并重置工作区、暂存区内容。
git
stash
把未提交内容隐藏起来，包括未暂存、已暂存。 等以后恢复现场后继续工作
git
stash
list
查看所有被隐藏的内容列表
git
stash
pop
恢复被隐藏的内容，同时删除隐藏记录
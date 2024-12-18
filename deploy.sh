#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e


#push_addr=`git remote get-url --push origin` # git提交地址，也可以手动设置，比如：push_addr=git@github.com:xugaoyi/vuepress-theme-vdoing.git
#commit_info=`git describe --all --always --long`
#push_addr=https://gitee.com/zhangtqup/blog.git
#dist_path=docs/.vuepress/dist # 打包生成的文件夹路径
# dist_path=docs/.vuepress
#push_branch=master # 推送的分支
#push_name="张天庆"
#push_email="15652533044@163.com"

# 生成静态文件
# npm run build:win

# 进入生成的文件夹
# cd $dist_path
# echo $dist_path
#上传至gitee
#rm -rf .git
#git init
#git remote set-url origin https://gitee.com/zhangtqup/blog.git
#git remote add origin $push_addr
#git config --global user.name $push_name
#git config --global user.email $push_email
#echo "添加"
#git add -A
#echo "commit"
#git commit -m "deploy, $commit_info"
#echo "push"
#git push -f origin $push_branch

#上传至个人服务器

scp -P 22 -r dist.tar.gz root@www.zhangtq.com:/var/www/vuepress/
ssh root@www.zhangtq.com -p 22 "cd /var/www/vuepress/ && tar -xvf dist.tar.gz && rm -f dist.tar.gz"
rm -f dist.tar.gz && rm -rf dist/
# 将代码同步更新到github
ssh zhangtianqing@www.zhangtq.com -p 22 "cd /home/zhangtianqing/vuepress-theme-vdoing && git checkout master && git pull gitee master && git checkout main && git merge gitee/master && git push github main"

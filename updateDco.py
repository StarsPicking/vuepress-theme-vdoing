# hexo 和vuepress-theme-vdoing 博客文章同步脚本
import os
import shutil
import re


def copy_file(src, dest):
    '''
    会完整复制src中的文件和文件夹到目标文件夹中
    '''
    os.makedirs(dest, exist_ok=True)
    for item in os.listdir(src):
        src_item = os.path.join(src, item)
        dest_item = os.path.join(dest, item)
        # 处理文件夹和文件
        if os.path.isdir(src_item):
            # 递归复制文件和文件夹
            copy_file(src_item, dest_item)
        else:
            # 复制文件
            shutil.copy2(src_item, dest_item)
    print("文件复制完成")



class CopyFile:
    '''
    会完整复制src中的文件和文件夹到目标文件夹中
    '''
    def __init__(self, src, dest):
        self.src = src
        self.dest = dest
    def copyT(self):
        shutil.copytree(self.src, self.dest, dirs_exist_ok=True)
        print("文件复制完成")


class CopyFile2:

    def __init__(self, src, dest):
        self.src = src
        self.dest = dest
        self.excludeDirs = [".vuepress", "@pages", "_posts", "《Git》学习笔记", "00.目录页"]
        self.InitDir()
    def InitDir(self):
        os.makedirs(self.dest, exist_ok=True)
    
    def copyFile(self):
        if os.path.isfile(self.src):
            shutil.copy2(self.src, self.dest)
        else:
            self.copyDirFile(self.src, self.dest)

    def copyDirFile(self, src, dest):
        for item in os.listdir(src):
            if item in self.excludeDirs:
                continue
            src_item = os.path.join(src, item)
            src_item = re.sub(r'\\',"/", src_item)
            print(src_item, "4444")
            # dest_item = os.path.join(dest, item)
            # 处理文件夹和文件
            if os.path.isdir(src_item):
                # 递归复制文件和文件夹
                self.copyDirFile(src_item, self.dest)
            else:
                # 复制文件
                shutil.copy2(src_item, self.dest)
        print("文件复制完成")       


if __name__ == "__main__":
    print(os.getcwd())
    c = CopyFile2("./docs", "../blog-hexo-next/source/_posts")
    c.copyFile()

关于开发模式的探讨
=====

git flow 快速协同开发

## 安装
    
    git clone --recursive git://github.com/nvie/gitflow.git
    cd gitflow
    
    vi Makefile
    # 修改 prefix 到有权限的执行目录，并把这个prefix加到path中
    
    make install
        
## 配置git仓库
    
在本代码仓库目录下执行：

    git flow init
    
会提示设置默认的主干、开发分支、命名方式等：
    
    Which branch should be used for bringing forth production releases?
       - master
    Branch name for production releases: [master]
    Branch name for "next release" development: [develop]
    
    How to name your supporting branch prefixes?
    Feature branches? [feature/]
    Release branches? [release/]
    Hotfix branches? [hotfix/]
    Support branches? [support/]
    Version tag prefix? []

使用默认的即可。

## 如何使用？

### 开发新功能

开发新卡片时：

    git flow feature start <ecl_ec_weigou_foo>

完成开发：

    git flow feature finish <ecl_ec_weigou_foo>


上传到提测分支:

    git push origin develop

完成测试后，上线时发布版本：

    git flow release start <20140428>

在finish之前你还可以在这个分支上做最后一点hotfix。
然后，发布这个版本：

    git flow release finish <20140428>

tag已经打上了，那么就推到主干(以及develop)上线吧。
    
    git push origin master develop --tags

以上。完成~


### BUG临时修复

新建一个hotfix分支:

    git flow hotfix start <bugfix>

完成修复后：

    git flow hotfix finish 'bugfix'

这时修复内容已经自动合入master/develop分支，同时以`<bugfix>`为名打了一个tag

然后就是将本地内容推送到主干：

    git push origin master develop --tags

完成~    
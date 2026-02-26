#!/bin/bash

# 跨境数字资产咨询中心网站部署脚本
# 使用方法：./deploy.sh "提交信息"

set -e  # 遇到错误时退出

echo "🚀 开始部署跨境数字资产咨询中心网站..."

# 检查参数
if [ $# -eq 0 ]; then
    COMMIT_MSG="更新网站内容 $(date '+%Y-%m-%d %H:%M:%S')"
else
    COMMIT_MSG="$1"
fi

# 检查是否在正确的目录
if [ ! -f "index.html" ]; then
    echo "❌ 错误：请在网站根目录运行此脚本"
    exit 1
fi

# 检查Git是否已初始化
if [ ! -d ".git" ]; then
    echo "📦 初始化Git仓库..."
    git init
fi

# 添加所有文件
echo "📁 添加文件到Git..."
git add .

# 提交更改
echo "💾 提交更改：$COMMIT_MSG"
git commit -m "$COMMIT_MSG" || echo "⚠️  没有新的更改需要提交"

# 检查远程仓库
REMOTE_URL=$(git remote get-url origin 2>/dev/null || echo "")

if [ -z "$REMOTE_URL" ]; then
    echo "🔗 请先设置GitHub远程仓库："
    echo ""
    echo "1. 在GitHub创建新仓库：https://github.com/new"
    echo "2. 仓库名称建议：cbdacc-website"
    echo "3. 然后运行以下命令："
    echo ""
    echo "   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git"
    echo "   git branch -M main"
    echo "   git push -u origin main"
    echo ""
    echo "4. 在GitHub仓库设置中启用GitHub Pages："
    echo "   Settings → Pages → Source: main → /(root)"
    echo ""
    exit 0
else
    echo "🌐 推送到远程仓库：$REMOTE_URL"
    git push origin main
    
    echo ""
    echo "✅ 部署完成！"
    echo "📊 网站将在1-2分钟内通过GitHub Pages上线"
    echo "🔗 请访问你的GitHub仓库的Settings → Pages查看URL"
fi

echo ""
echo "📋 后续操作："
echo "1. 访问GitHub仓库的Settings → Pages查看部署状态"
echo "2. 测试网站功能：导航、响应式、表单等"
echo "3. 开始执行市场验证计划"
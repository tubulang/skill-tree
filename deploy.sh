#!/bin/bash

# GitHub Pages 部署脚本

echo "🚀 开始部署到 GitHub Pages..."

# 检查是否有未提交的更改
if [[ -n $(git status --porcelain) ]]; then
  echo "❌ 有未提交的更改，请先提交所有更改"
  exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 构建项目
echo "🔨 构建项目..."
npm run build

# 检查构建是否成功
if [ $? -ne 0 ]; then
  echo "❌ 构建失败"
  exit 1
fi

# 部署到 GitHub Pages
echo "🌐 部署到 GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
  echo "✅ 部署成功！"
  echo "🔗 访问地址: https://tubulang.github.io/skill-tree/"
  echo ""
  echo "📝 配置说明："
  echo "1. 确保在 GitHub 仓库设置中启用了 Pages"
  echo "2. 选择 gh-pages 分支作为 Pages 源"
  echo "3. 等待几分钟让 GitHub Pages 生效"
else
  echo "❌ 部署失败"
  exit 1
fi

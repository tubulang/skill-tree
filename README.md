# AI 技能树 - 智能学习与成长平台

[![Deploy to GitHub Pages](https://github.com/tubulang/skill-tree/actions/workflows/deploy.yml/badge.svg)](https://github.com/tubulang/skill-tree/actions/workflows/deploy.yml)
[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://tubulang.github.io/skill-tree/)

一个基于 AI 的技能树系统，结合游戏化学习、任务管理和社交圈子功能，助力用户高效成长。

## 🌐 在线演示

🔗 **Live Demo**: https://tubulang.github.io/skill-tree/

## 🎯 项目特色

### 🌳 核心功能

- **智能技能树**: AI 推荐学习路径，可视化技能依赖关系
- **游戏化学习**: 经验值、等级、成就系统，让学习充满乐趣
- **任务管理**: Notion 风格的任务界面，将技能学习拆解为可执行任务
- **学习圈子**: 基于技能标签的智能圈子推荐，找到学习伙伴
- **微博式笔记**: Flomo 风格的轻量级笔记系统
- **人生规划**: 基于年龄的学习能力评估和时间管理

### 🎮 游戏化元素

- **技能等级**: 认识 → 了解 → 会用 → 熟悉 → 精通 → 大神
- **经验值系统**: 完成任务获得 XP，解锁新技能
- **连续学习**: 记录学习连续天数，培养学习习惯
- **成就徽章**: 多种成就类型，激励持续学习
- **AI 推荐**: 基于当前技能水平智能推荐学习路径

## 🛠 技术栈

- **前端框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式方案**: Tailwind CSS
- **状态管理**: Zustand
- **路由管理**: React Router DOM
- **图标库**: Lucide React
- **动画库**: Framer Motion
- **图表库**: Recharts
- **包管理**: npm/pnpm

## 🚀 快速开始

### 环境要求

- Node.js >= 16
- npm 或 pnpm

### 安装依赖

```bash
npm install
# 或
pnpm install
```

### 启动开发服务器

```bash
npm run dev
# 或
pnpm dev
```

访问 http://localhost:3000 查看应用。

### 构建生产版本

```bash
npm run build
# 或
pnpm build
```

## 🚀 GitHub Pages 部署

### 自动部署（推荐）

项目已配置 GitHub Actions 自动部署：

1. **推送代码到 GitHub**：
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **启用 GitHub Pages**：
   - 进入你的 GitHub 仓库设置页面
   - 找到 "Pages" 设置
   - 选择 "Deploy from a branch"
   - 选择 `gh-pages` 分支
   - 点击 "Save"

3. **等待部署完成**：
   - GitHub Actions 会自动构建并部署项目
   - 部署完成后可以通过 `https://your-username.github.io/Skill-Tree/` 访问

### 手动部署

如果需要手动部署，可以使用以下命令：

```bash
# 方法1：使用部署脚本
./deploy.sh

# 方法2：使用 npm 脚本
npm run deploy
```

### 部署配置说明

- **base 路径**: 项目配置了 `/Skill-Tree/` 作为基础路径，适用于 GitHub Pages
- **路由配置**: React Router 使用 `basename="/Skill-Tree"` 确保路由正常工作
- **自动化部署**: 每次推送到 `main` 或 `master` 分支时自动触发部署
- **构建优化**: 启用了 sourcemap 方便调试生产环境问题

## 📋 功能详情

### 🌳 技能树系统

- **可视化技能图**: SVG 绘制的技能依赖关系图
- **技能状态**: 锁定、可学习、学习中、已完成
- **进度跟踪**: 每个技能都有经验值和完成度
- **AI 推荐**: 根据当前技能推荐最优学习路径

### ✅ 任务管理

- **任务分解**: 将技能学习拆解为具体可执行的任务
- **子任务支持**: 支持任务的进一步分解
- **状态管理**: 待办、进行中、已完成
- **时间估算**: 预估和实际完成时间跟踪
- **优先级**: 高、中、低优先级标记

### 👥 学习圈子

- **智能推荐**: 基于技能标签自动推荐相关圈子
- **分类浏览**: 按技术领域、难度等分类
- **活跃度追踪**: 显示圈子最近活跃时间和成员数
- **互动功能**: 点赞、评论、分享学习心得

### 📝 学习笔记

- **快速记录**: 类似 Flomo 的轻量级笔记
- **技能关联**: 笔记可以关联到具体技能和任务
- **心情记录**: 记录学习时的情绪状态
- **可见性控制**: 私密、圈子可见、公开分享

## 🎨 设计理念

### 用户体验

- **简洁直观**: 清晰的信息架构和导航
- **响应式设计**: 支持桌面端和移动端
- **即时反馈**: 操作后的即时视觉反馈
- **渐进式学习**: 从简单到复杂的学习路径

### 视觉设计

- **现代化界面**: 使用 Tailwind CSS 构建现代化 UI
- **统一色彩**: 蓝色主色调，表示专业和信任
- **动效设计**: 适度的过渡动画增强用户体验
- **图标系统**: 统一的 Lucide 图标库

## 🤖 AI 功能

### 智能推荐

- **技能推荐**: 基于当前技能水平推荐下一步学习内容
- **学习路径**: 自动生成最优的技能学习顺序
- **圈子推荐**: 推荐相关的学习圈子和伙伴
- **任务拆解**: AI 辅助将技能学习拆解为具体任务

### 个性化学习

- **年龄评估**: 根据年龄评估学习能力和时间规划
- **学习偏好**: 支持不同的学习风格偏好
- **进度预测**: 预测技能掌握所需时间
- **学习提醒**: 智能学习提醒和计划建议

---

⭐️ 如果这个项目对你有帮助，请给个 Star 支持一下！

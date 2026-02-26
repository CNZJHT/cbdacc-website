# 网站部署指南 - GitHub Pages

## 网站概述
跨境数字资产咨询中心网站已开发完成，包含以下功能：
- ✅ 响应式设计（移动端适配）
- ✅ 6个完整页面（首页、服务、关于、案例、资源、联系）
- ✅ 专业CSS样式和JavaScript交互
- ✅ 完整的SEO优化
- ✅ 联系表单功能

## 部署步骤（GitHub Pages）

### 步骤1：创建GitHub仓库
1. 访问 https://github.com/new
2. 创建新仓库，名称建议：`cbdacc-website` 或 `cross-border-digital-assets`
3. 选择公开仓库（Public）
4. 不要初始化README、.gitignore或license

### 步骤2：推送代码到GitHub
在终端中执行以下命令：

```bash
# 进入网站文件夹
cd /Users/homg/openclaw/projects/token-outbound-project/website

# 添加GitHub远程仓库
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# 推送代码
git branch -M main
git push -u origin main
```

### 步骤3：启用GitHub Pages
1. 在GitHub仓库页面，点击 **Settings**（设置）
2. 在左侧菜单选择 **Pages**（页面）
3. 在 **Source**（来源）部分：
   - 分支选择：`main`
   - 文件夹选择：`/(root)`（根目录）
4. 点击 **Save**（保存）

### 步骤4：等待部署完成
- GitHub Pages通常需要1-2分钟部署
- 部署完成后会显示绿色提示和网站URL
- 网站URL格式：`https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## 替代部署方案（Netlify）

如果GitHub Pages部署有问题，可以使用Netlify：

### 步骤1：注册Netlify
1. 访问 https://app.netlify.com/signup
2. 使用GitHub账号登录

### 步骤2：部署网站
1. 点击 **Add new site** → **Import an existing project**
2. 选择 **GitHub** 作为部署方式
3. 授权并选择你的仓库
4. 部署设置：
   - Build command: 留空（静态网站）
   - Publish directory: `/`（根目录）
5. 点击 **Deploy site**

### 步骤3：自定义域名（可选）
1. 在Netlify控制台选择你的网站
2. 点击 **Domain settings**
3. 点击 **Add custom domain**
4. 输入你的域名并按照指引配置DNS

## 网站测试

部署完成后，请测试以下功能：

### 基础功能测试
1. ✅ 所有页面都能正常访问
2. ✅ 导航菜单工作正常
3. ✅ 响应式设计（在不同设备上测试）
4. ✅ 联系表单显示正常

### 性能测试
1. ✅ 页面加载速度（目标：<3秒）
2. ✅ 移动端体验
3. ✅ 浏览器兼容性（Chrome、Firefox、Safari）

## 后续维护

### 内容更新
要更新网站内容，只需：
1. 编辑对应的HTML文件
2. 提交更改到GitHub
3. GitHub Pages会自动重新部署

### 添加新功能
- 添加新页面：创建新的HTML文件并更新导航菜单
- 修改样式：编辑`css/style.css`文件
- 添加交互：编辑`js/main.js`文件

## 技术支持

如有任何部署问题，请联系：
- 磐石（AI助理）
- 或参考GitHub Pages官方文档：https://docs.github.com/en/pages

---

**网站预览：**
所有文件已准备就绪，部署后即可通过公开URL访问。
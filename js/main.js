// 跨境数字资产咨询中心 - 主JavaScript文件

document.addEventListener('DOMContentLoaded', function() {
    // 初始化所有功能
    initNavigation();
    initAnimations();
    initContactForm();
    initLanguageSwitcher();
    initServiceCards();
    initStatsCounter();
    initMobileMenu();
    
    console.log('网站初始化完成 - 跨境数字资产咨询中心');
});

// 导航功能
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        const linkPath = link.getAttribute('href');
        
        // 移除所有active类
        link.classList.remove('active');
        
        // 设置当前页面active
        if (currentPath.endsWith(linkPath) || 
            (currentPath === '/' && linkPath === 'index.html') ||
            (currentPath.endsWith('/') && linkPath === 'index.html')) {
            link.classList.add('active');
        }
        
        // 平滑滚动
        if (linkPath.startsWith('#')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });
}

// 动画初始化
function initAnimations() {
    // 观察器配置
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    // 创建观察器
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // 观察需要动画的元素
    const animatedElements = document.querySelectorAll('.service-card, .feature-item, .case-card');
    animatedElements.forEach(element => {
        observer.observe(element);
    });
    
    // 页面加载动画
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);
}

// 联系表单处理
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // 获取表单数据
        const formData = new FormData(this);
        const formDataObj = Object.fromEntries(formData.entries());
        
        // 简单验证
        if (!formDataObj.name || !formDataObj.email || !formDataObj.message) {
            showMessage('请填写所有必填字段', 'error');
            return;
        }
        
        if (!isValidEmail(formDataObj.email)) {
            showMessage('请输入有效的邮箱地址', 'error');
            return;
        }
        
        // 显示加载状态
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = '发送中...';
        submitBtn.disabled = true;
        
        // 模拟发送（实际使用时需要替换为真实API）
        setTimeout(() => {
            // 这里应该发送到服务器
            // 例如：fetch('/api/contact', { method: 'POST', body: JSON.stringify(formDataObj) })
            
            showMessage('感谢您的咨询！我们会在24小时内回复您。', 'success');
            contactForm.reset();
            
            // 恢复按钮状态
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // 记录到控制台（开发用）
            console.log('联系表单提交:', formDataObj);
            
        }, 1500);
    });
}

// 邮箱验证
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// 显示消息
function showMessage(message, type = 'info') {
    // 移除现有消息
    const existingMessage = document.querySelector('.message-alert');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.className = `message-alert message-${type}`;
    messageEl.textContent = message;
    
    // 添加到页面
    document.body.appendChild(messageEl);
    
    // 自动消失
    setTimeout(() => {
        messageEl.style.opacity = '0';
        setTimeout(() => {
            messageEl.remove();
        }, 300);
    }, 5000);
    
    // 添加样式
    const style = document.createElement('style');
    style.textContent = `
        .message-alert {
            position: fixed;
            top: 100px;
            right: 20px;
            padding: 15px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 9999;
            animation: slideIn 0.3s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.15);
            max-width: 400px;
            transition: opacity 0.3s ease;
        }
        
        .message-success {
            background-color: #10b981;
        }
        
        .message-error {
            background-color: #ef4444;
        }
        
        .message-info {
            background-color: #3b82f6;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    
    document.head.appendChild(style);
}

// 语言切换
function initLanguageSwitcher() {
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            langButtons.forEach(btn => btn.classList.remove('active'));
            
            // 设置当前active
            this.classList.add('active');
            
            // 获取目标语言
            const targetLang = this.textContent.trim().toLowerCase();
            
            // 这里应该跳转到对应语言页面
            // 实际使用时需要根据语言切换页面内容或跳转
            console.log('切换到语言:', targetLang);
            
            // 显示提示
            showMessage(`正在切换到${targetLang === 'en' ? '英文' : '中文'}版本`, 'info');
        });
    });
}

// 服务卡片交互
function initServiceCards() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // 点击卡片跳转
        card.addEventListener('click', function(e) {
            if (!e.target.closest('.service-link')) {
                const link = this.querySelector('.service-link');
                if (link) {
                    window.location.href = link.getAttribute('href');
                }
            }
        });
    });
}

// 统计数字动画
function initStatsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    // 创建观察器
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target;
                const targetValue = parseInt(statNumber.textContent);
                const duration = 2000; // 2秒
                const increment = targetValue / (duration / 16); // 60fps
                let currentValue = 0;
                
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= targetValue) {
                        statNumber.textContent = targetValue + '+';
                        clearInterval(timer);
                    } else {
                        statNumber.textContent = Math.floor(currentValue) + '+';
                    }
                }, 16);
                
                observer.unobserve(statNumber);
            }
        });
    }, { threshold: 0.5 });
    
    // 观察统计数字
    statNumbers.forEach(number => {
        observer.observe(number);
    });
}

// 移动端菜单
function initMobileMenu() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (!menuToggle || !navMenu) return;
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
        
        // 更新aria标签
        const isExpanded = navMenu.classList.contains('active');
        this.setAttribute('aria-expanded', isExpanded);
    });
    
    // 点击菜单外关闭
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
    
    // 点击菜单项关闭
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });
    
    // 键盘导航
    menuToggle.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
}

// 页面性能监控
function initPerformanceMonitoring() {
    // 记录页面加载时间
    window.addEventListener('load', function() {
        const timing = performance.timing;
        const loadTime = timing.loadEventEnd - timing.navigationStart;
        
        console.log(`页面加载时间: ${loadTime}ms`);
        
        // 如果加载时间过长，记录警告
        if (loadTime > 3000) {
            console.warn('页面加载时间超过3秒，建议优化');
        }
    });
    
    // 监控资源加载
    const resources = performance.getEntriesByType('resource');
    resources.forEach(resource => {
        if (resource.duration > 1000) {
            console.warn(`资源加载缓慢: ${resource.name} (${resource.duration}ms)`);
        }
    });
}

// 错误处理
function initErrorHandling() {
    window.addEventListener('error', function(e) {
        console.error('JavaScript错误:', e.error);
        
        // 可以在这里发送错误到服务器
        // sendErrorToServer(e.error);
    });
    
    // 捕获未处理的Promise rejection
    window.addEventListener('unhandledrejection', function(e) {
        console.error('未处理的Promise rejection:', e.reason);
    });
}

// 初始化性能监控和错误处理
initPerformanceMonitoring();
initErrorHandling();

// 导出函数供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        isValidEmail,
        showMessage,
        initNavigation,
        initContactForm
    };
}
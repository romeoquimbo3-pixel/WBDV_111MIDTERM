document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Navigation Logic
    const navItems = document.querySelectorAll('.nav-item');
    const pageTitle = document.getElementById('page-title');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active class from others
            navItems.forEach(i => i.classList.remove('active'));
            // Add to clicked
            item.classList.add('active');
            // Update Title
            const target = item.getAttribute('data-target');
            pageTitle.innerText = target.charAt(0).toUpperCase() + target.slice(1);
            showToast(`Loaded ${target}`);
        });
    });

    // 2. 2FA Security Toggle Logic
    const toggleBtn = document.getElementById('toggle-2fa');
    const authStatusBox = document.getElementById('auth-status-box');
    const icon1 = document.getElementById('icon-1');
    const icon2 = document.getElementById('icon-2');

    toggleBtn.addEventListener('click', () => {
        const isActive = toggleBtn.innerText === "Disable 2FA";

        if (isActive) {
            // Turning it off
            toggleBtn.innerText = "Enable 2FA";
            authStatusBox.style.color = "#94a3b8";
            authStatusBox.querySelector('span').innerText = "2FA Currently Disabled";
            authStatusBox.querySelector('i').className = "fas fa-times-circle";
            icon1.classList.remove('active-icon');
            icon2.classList.remove('active-icon');
            showToast("Security Downgraded");
        } else {
            // Turning it on
            toggleBtn.innerText = "Disable 2FA";
            authStatusBox.style.color = "#10b981";
            authStatusBox.querySelector('span').innerText = "Two-Factor Auth (2FA) Enabled";
            authStatusBox.querySelector('i').className = "fas fa-check-circle";
            icon1.classList.add('active-icon');
            icon2.classList.add('active-icon');
            showToast("Security Enhanced");
        }
    });

    // 3. UI Helpers
    const refreshBtn = document.getElementById('refresh-btn');
    refreshBtn.addEventListener('click', () => {
        showToast("Refreshing data...");
    });

    const notifBtn = document.getElementById('notif-btn');
    notifBtn.addEventListener('click', () => {
        showToast("No new notifications");
    });

    // Toast Function
    function showToast(message) {
        const toast = document.getElementById('toast');
        toast.innerText = message;
        toast.classList.remove('hidden');
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 2500);
    }
});
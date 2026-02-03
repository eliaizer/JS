// Инициализация темы при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    setupThemeToggle();
});

// Инициализация темы из localStorage или по системным предпочтениям
function initTheme() {
    const savedTheme = localStorage.getItem('theme');
    let theme = savedTheme;

    if (!theme) {
        // Проверяем системные предпочтения
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        theme = prefersDark ? 'dark' : 'light';
    }

    setTheme(theme);
}

// Установка темы
function setTheme(theme) {
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
    localStorage.setItem('theme', theme);
    updateThemeButton();
}

// Переключение темы
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
}

// Обновление внешнего вида кнопки
function updateThemeButton() {
    const button = document.getElementById('themeToggle');
    if (!button) return;

    const currentTheme = document.documentElement.getAttribute('data-theme');
    button.textContent = currentTheme === 'dark' ? '☀️' : '🌙';
}

// Установка слушателя для кнопки переключения
function setupThemeToggle() {
    const button = document.getElementById('themeToggle');
    if (button) {
        button.addEventListener('click', toggleTheme);
    }
}

// Синхронизация тем между вкладками
window.addEventListener('storage', (e) => {
    if (e.key === 'theme') {
        setTheme(e.newValue);
    }
});
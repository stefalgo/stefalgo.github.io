function toggleColorScheme() {
    document.documentElement.classList.toggle('darkMode');
    document.documentElement.classList.toggle('lightMode');
}

document.addEventListener('DOMContentLoaded', () => {
    window.toggleColorScheme = toggleColorScheme;
});
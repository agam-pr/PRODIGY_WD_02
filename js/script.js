function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    
    // ✅ Correct way to change background
    banner.style.background = `url("./images/movies/${bg}") no-repeat center center/cover`;

    contents.forEach(content => {
        content.classList.remove('active');
        if (content.classList.contains(title)) {
            content.classList.add('active');
        }
    });
}

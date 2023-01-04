window.onscroll = () => {
    const header = document.querySelector('.header');
    const headerTop = document.querySelector('.header-top');

    if (document.documentElement.scrollTop > 0) {
        headerTop.classList.add('d-none');
        header.classList.add('fixed');
    } else {
        headerTop.classList.remove('d-none');
        header.classList.remove('fixed');
    }
};
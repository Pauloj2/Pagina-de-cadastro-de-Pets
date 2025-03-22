const mode = document.getElementById('mode_icon');

mode.addEventListener('click', () => {
    const form = document.getElementById('cadastro_form');
    if(mode.classList.contains('bxs-moon')){
        mode.classList.remove('bxs-moon');
        mode.classList.add('bxs-sun');

        form.classList.add('dark');
        return;
    }

    mode.classList.add('bxs-moon');
    mode.classList.remove('bxs-sun');
    form.classList.remove('dark');
});
const cursor = document.querySelector('.cursor');
const card = document.querySelectorAll('.card');
document.addEventListener('mousemove', (e) => {
    cursor.classList.remove('cursor-hide');
    cursor.setAttribute('style',`left: ${e.pageX + 7}px; top: ${e.pageY - 5}px`)
})

card.forEach(el => {
    el.addEventListener('mouseenter', () => {
        // cursor.classList.add('cursor-green');
    })
    el.addEventListener('mouseleave', () => {
        // cursor.classList.remove('cursor-green');
    })
})

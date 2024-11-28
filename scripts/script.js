const cursor = document.querySelector('.cursor');
const cursorTip = document.querySelector('.cursor-note');
const card = document.querySelectorAll('.card');
const projectName = document.querySelectorAll('.name');

document.addEventListener('mousemove', (e) => {
    // cursor.classList.remove('cursor-hide');
    cursor.setAttribute('style',`left: ${e.pageX + 7}px; top: ${e.pageY - 5}px`)
    cursorTip.setAttribute('style',`left: ${e.pageX + 15}px; top: ${e.pageY - 5}px`)
})

card.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-green');
    })
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-green');
    })
})

projectName.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor-hidden');
        cursorTip.classList.remove('cursor-hidden');
    })
    el.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hidden');
        cursorTip.classList.add('cursor-hidden');
    })
})

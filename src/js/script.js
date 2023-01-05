const shareContainer = document.querySelector('.share-container')
const shareButton = document.querySelector('.share-btn')
const darkColor = getComputedStyle(document.documentElement).getPropertyValue('--neutral-very-dark-color')

document.querySelector('.share-btn').addEventListener('click', ()=>{
    shareContainer.classList.toggle('hidden')
    if (!shareContainer.classList.contains('hidden')) {
        shareButton.style.backgroundColor = darkColor
        shareButton.style.color = 'white'
    } else {
        shareButton.style.backgroundColor = ''
        shareButton.style.color = darkColor
    }
})


const allbox = document.querySelectorAll('#slide2>.box2')
const allspan = document.querySelectorAll('.line>span')
allbox.forEach((val) => {
    val.setAttribute('data-h', val.offsetTop)
    val.classList.add(val.getAttribute('data-fs'))
})
allspan.forEach((item) => {
    item.setAttribute('data-top', item.offsetTop)
})
window.addEventListener('scroll', () => {
    let st = window.scrollY
    allbox.forEach((val) => {
        if ((st - 195) > val.getAttribute('data-h')) {
            let fclass = val.getAttribute('data-fs')
            val.classList.remove(fclass)
        }
    })
    allspan.forEach((item) => {
        if ((st - 98) > item.getAttribute('data-top')) {
            item.classList.add(item.getAttribute('data-fs'))
        }
    })

})
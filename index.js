window.addEventListener('DOMContentLoaded', () => {
    const options = {root: null, rootMargin: "0px 0px 30px 0px", threshold: 0}

    const io1 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('preappear')
                entry.target.classList.add('appear')
                observer.unobserve(entry.target)
            }
        })
    }, options)
    
    const list1 = document.querySelectorAll('.preappear')
    list1.forEach(element => io1.observe(element))

    const io2 = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.remove('preup')
                entry.target.classList.add('up')
                observer.unobserve(entry.target)
            }
        })
    })

    const list2 = document.querySelectorAll('.preup')
    list2.forEach(element => io2.observe(element))
})
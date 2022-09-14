const array = document.getElementsByClassName('add')
for (const b of array) {
    b.addEventListener('click', e => {
        e.preventDefault()
        const datos = {
            title: b.getAttribute('data-title'),
            desc:b.getAttribute('data-desc'),
            img: b.getAttribute('data-img'),
            price: b.getAttribute('data-price'),
            id: b.getAttribute('data-id')
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }
        fetch('/cart', options)
                .then(res => res.json)
                .then(dat => console.log(dat))
                .catch(err => console.log(err))
    })
}
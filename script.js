let add_button = document.getElementById("add_box")
let menu = document.getElementById("menu")
let done_button = document.getElementById("done")
let cancel_button = document.getElementById('cancel')
let save_button = document.getElementById('save')
let color_input = document.getElementById('color_code')
let color_name = document.getElementById('color_name')
let items = document.getElementById('items')
let load_button = document.getElementById('load')
let delete_button = document.getElementById('delete')

function copyText(textId) {
    let colorText = document.getElementById(textId)
    console.log(colorText.innerHTML)
    navigator.clipboard.writeText(colorText.innerHTML)
}


function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( localStorage.getItem(keys[i]) );
        console.log(values)
    }

    return values;
}

function allStorage2() {

    var archive = [],
        keys = Object.keys(localStorage),
        i = 0, key;

    for (; key = keys[i]; i++) {
        archive.push( key + '=' + localStorage.getItem(key));
        console.log(archive)
    }

    return archive;
}

add_button.addEventListener('click', function() {

    if(menu.classList.contains('hidden')) {
        menu.classList.remove('hidden')
    }

    let box = document.createElement('div')
    let inner_box = document.createElement('div')
    let h1 = document.createElement('h1')
    let h5 = document.createElement('h5')
    let button = document.createElement('button')

    button.innerText = 'copy'

    done_button.addEventListener('click', function() {
        box.classList.add('box')
        inner_box.classList.add('inner-box')
        inner_box.style.backgroundColor = color_input.value
        h1.innerText = color_input.value
        h5.innerText = color_name.value

        let colorCardInfo = {
            h1: color_input.value,
            h5: color_name.value
        }

        console.log(colorCardInfo)

        let stringColorCardInfo = JSON.stringify(colorCardInfo)
        localStorage.setItem(`${color_name.value}`, stringColorCardInfo)

        allStorage()
        allStorage2()
        console.log(archive)

        button.addEventListener('click', function() {
            navigator.clipboard.writeText(color_input.value)
        })

        box.appendChild(inner_box)
        box.appendChild(button)
        inner_box.appendChild(h1)
        inner_box.appendChild(h5)
        items.appendChild(box)

        menu.classList.add('hidden')
        color_input.value = null
        color_name.value = null

    })
    
})

cancel_button.addEventListener('click', function() {
    if(menu.classList.length < 2) {
        menu.classList.add('hidden')
        color_input.value = null
        color_name.value = null
    }
})

save_button.addEventListener('click', function() {

})


delete_button.addEventListener('click', function() {
    window.localStorage.clear()
    console.log(window.localStorage)
})
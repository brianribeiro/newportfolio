//-----ABOUT BELOW-----//

let dropIndex = 0
let last = 0
dropdown(dropIndex)

function currentDropdown(option) {
    dropdown(dropIndex = option)
}

function dropdown(option) {
    if (option == 1) {
        document.getElementById('certification_1').classList.toggle('show')
        document.getElementById('certification_button_1').classList.toggle('drop_button_selected')
        document.getElementsById('expand_image').src = './images/expand.png'
    } else if (option == 2) {
        document.getElementById('certification_2').classList.toggle('show')
        document.getElementById('certification_button_2').classList.toggle('drop_button_selected')
    } else if (option == 3) {
        document.getElementById('certification_3').classList.toggle('show')
        document.getElementById('last_button').classList.toggle('drop_button_selected')
        last++
        lastMargin()
    }
}

function lastMargin() {
    if (last % 2 == 1) {
        document.getElementById('last_button').style.marginBottom = '0px'
    } else {
        document.getElementById('last_button').style.marginBottom = '50px'
    }
}

//-----ABOUT ABOVE-----//
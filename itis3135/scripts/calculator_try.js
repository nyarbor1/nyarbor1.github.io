numberButtons = document.getElementsByClassName('number')
operatorButtons = document.getElementsByClassName('operator')
output = document.getElementById('output')
equals = document.getElementById('equals')
clear = document.getElementById('clear')
deleteBtn = document.getElementById('deleteBtn')

for(item of numberButtons) {
    item.onclick = (event) => {
        let value = event.target.innerText;
        output.innerText += value;
    }
}

for(item of operatorButtons) {
    let value = '';
    item.onclick = (event) => {
        if(event.target.value != undefined) {
            value = event.target.value
            output.innerText = output.innerText + ' ' + value + '\xa0'; // (\xa0) is a whitespace
        } else {
            value = event.target.parentNode.value
            output.innerText = output.innerText + ' ' + value + '\xa0'; // (\xa0) is a whitespace
        }
    }
}

equals.onclick = () => {
    output.innerText = eval(output.innerText)
}

clear.onclick = () => {
    output.innerText = ""
}

deleteBtn.onclick = () => {
    output.innerText = output.innerText.slice(0, -1)
}   
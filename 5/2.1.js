document.getElementById('switch-input').addEventListener('input', (event)=> {
    let item = document.getElementById('text')

    if (event.target.value && event.target.value !== '') {
        item.innerHTML = setSwitchValue(Number(event.target.value))
    } else {
        item.innerHTML = ''
    }
})

function setSwitchValue(event) {
    let value = "";
    
    switch (event) {
        case 0:
            value = 'zero'
            break;

        case 1:
            value = "unu"
            break;
        
        case 2:
            value ="doi"
            break;
        
        case 3:
            value = "trei"
            break;

        case 4:
            value = "patru"
            break;

        case 5:
            value = "cinci"
            break;
        
        case 6:
            value = "sase"
            break;
        
        case 7:
            value =  "sapte
            break;
        
        case 8:
            value =  "opt"
            break;

        case 9:
            value =  "noua"
            break;

        default:
            value =''
        
  }
  return value;
}

const btns = document.querySelectorAll('.btn');
const display = document.querySelector('.box');



btns.forEach(button => {
    button.addEventListener('click', function (e) {
        switch (e.target.innerText) {
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!'
                }
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1)
                break;
            default:
                display.innerText += e.target.innerText;
        }

    })
});
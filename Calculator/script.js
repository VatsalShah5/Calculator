let string = "";
let dotUsed = false; // Flag to track if the dot has been used

let buttons = document.querySelectorAll('button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === 'AC') {
            string = "";
            dotUsed = false; // Reset the dot usage flag
            document.querySelector('input').value = string;
        } else if (e.target.innerHTML === '<sup class="green">+</sup>/-') {
            string = "-";
            document.querySelector('input').value = string;
        } else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    });
});

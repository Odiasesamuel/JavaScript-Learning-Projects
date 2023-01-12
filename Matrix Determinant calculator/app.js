// UI variables
const a1Input = document.getElementById('a1'),
    a2Input = document.getElementById('a2'),
    a3Input = document.getElementById('a3'),
    b1Input = document.getElementById('b1'),
    b2Input = document.getElementById('b2'),
    b3Input = document.getElementById('b3'),
    c1Input = document.getElementById('c1'),
    c2Input = document.getElementById('c2'),
    c3Input = document.getElementById('c3'),
    calculate = document.getElementById('calculate'),
    answer = document.getElementById('ans');


// Event Listener
calculate.addEventListener('click', calculateMatrix)

// Calculatr matrix
function calculateMatrix() {
    let a1 = a1Input.value;
    let a2 = a2Input.value;
    let a3 = a3Input.value;
    let b1 = b1Input.value;
    let b2 = b2Input.value;
    let b3 = b3Input.value;
    let c1 = c1Input.value;
    let c2 = c2Input.value;
    let c3 = c3Input.value;

    let x = a1 * (b2 * c3 - b3 * c2);
    let y = b1 * (a3 * c2 - a2 * c3);
    let z = c1 * (a2 * b3 - a3 * b2);
    let solution = x + y + z;



    if (isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(b1) || isNaN(b2) || isNaN(b3) || isNaN(c1) || isNaN(c2) || isNaN(c3) || a1, a2, a3, b1, b2, b3, c1, c2, c3 === '' || isNaN(solution)) {
        errorBox('Please insert a number in all input fields', 'error');

        setTimeout(() => {
            document.querySelector('.error').remove();
            answer.value = '';
            if (isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(b1) || isNaN(b2) || isNaN(b3) || isNaN(c1) || isNaN(c2) || isNaN(c3)) {
                a1Input.value = '',
                    a2Input.value = '',
                    a3Input.value = '',
                    b1Input.value = '',
                    b2Input.value = '',
                    b3Input.value = '',
                    c1Input.value = '',
                    c2Input.value = '',
                    c3Input.value = '';
            }
        }, 2000)


    } else {
        errorBox('Calculating ...', 'success');
        setTimeout(() => {
            document.querySelector('.success').remove();
            answer.value = solution;
        }, 2000)
    }


}

// Error
function errorBox(msg, className) {
    // Create Div 
    const error = document.createElement('div');
    // Add class name
    error.className = className;
    // Create text node and append to error
    error.appendChild(document.createTextNode(msg));
    // Get a parent
    const container = document.querySelector('.container');
    const row1 = document.querySelector('.row1');
    // Insert
    container.insertBefore(error, row1);
}





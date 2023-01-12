class Matrix {
    constructor(a1, a2, a3, b1, b2, b3, c1, c2, c3) {
        this.a1 = a1;
        this.a2 = a2;
        this.a3 = a3;
        this.b1 = b1;
        this.b2 = b2;
        this.b3 = b3;
        this.c1 = c1;
        this.c2 = c2;
        this.c3 = c3;
    }
}

class Calculate {
    calculateDeterminat(a1, a2, a3, b1, b2, b3, c1, c2, c3) {
        let x = a1*(b2*c3 - b3*c2);
        let y = b1*(a3*c2 - a2*c3);
        let z = c1*(a2*b3 - a3*b2);
        return x + y + z
    }
}

class UI {
    errorBox(msg, className) {
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
}



// Event listener to calculate the matrix
const cal = document.getElementById('calculate');
calculate.addEventListener('click', function() {
    const a1 = document.getElementById('a1').value,
    a2 = document.getElementById('a2').value,
    a3 = document.getElementById('a3').value,
    b1 = document.getElementById('b1').value,
    b2 = document.getElementById('b2').value,
    b3 = document.getElementById('b3').value,
    c1 = document.getElementById('c1').value,
    c2 = document.getElementById('c2').value,
    c3 = document.getElementById('c3').value;

    // Instantiate matrix
    const matrix = new Matrix(a1, a2, a3, b1, b2, b3, c1, c2, c3);

    // Instantiate Calculate
    const calculate = new Calculate()

    // Instatiate UI
    const ui = new UI()

    const solution = calculate.calculateDeterminat(a1, a2, a3, b1, b2, b3, c1, c2, c3);

        

    // Validate
    if(isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(b1) || isNaN(b2) || isNaN(b3) || isNaN(c1) || isNaN(c2) || isNaN(c3) || a1, a2, a3, b1, b2, b3, c1, c2, c3 === '' || isNaN(solution)) {
        ui.errorBox('Please insert a number in all input fields', 'error')

        document.getElementById('ans').value = '';
        
        setTimeout(() => {
            document.querySelector('.error').remove();
            if(isNaN(a1) || isNaN(a2) || isNaN(a3) || isNaN(b1) || isNaN(b2) || isNaN(b3) || isNaN(c1) || isNaN(c2) || isNaN(c3)) {
            document.getElementById('a1').value = '';
            document.getElementById('a2').value = '';
            document.getElementById('a3').value = '';
            document.getElementById('b1').value = '';
            document.getElementById('b2').value = '';
            document.getElementById('b3').value = '';
            document.getElementById('c1').value = '';
            document.getElementById('c2').value = '';
            document.getElementById('c3').value = '';
            }

        }, 2000)
    } else {
        ui.errorBox('Calculating ...', 'success')
        setTimeout(() => {
            document.querySelector('.success').remove();

            document.getElementById('ans').value = solution
        }, 2000);
    }
})
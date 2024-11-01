window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    const convertButton = document.getElementById('convertButton');
    const cInput = document.querySelector('#cInput');
    const fInput = document.querySelector('#fInput');

    cInput.addEventListener('input', () => {
        if (fInput.value.trim() !== "") {
            fInput.value = "";
        }
    });

    fInput.addEventListener('input', () => {
        if (cInput.value.trim() !== "") {
            cInput.value = "";
        }
    })


    convertButton.addEventListener('click', performConversion);
}

function convertCtoF(degreesCelsius) {
    return degreesCelsius * 9/5 + 32;
}

function convertFtoC(degreesFahrenheit) {
    return (degreesFahrenheit - 32) * 5/9;
}

function performConversion() {
    const cInput = document.querySelector('#cInput');
    const fInput = document.querySelector('#fInput');
    const errorMessage = document.querySelector('#errorMessage');
    const weatherImage = document.querySelector('#weatherImage');

    let celsiusValue = cInput.value.trim();
    let fahrenheitValue = fInput.value.trim();

    // Clear any previous error messages
    errorMessage.textContent = '';

    // Validate inputs
    if (celsiusValue && fahrenheitValue) {
        errorMessage.textContent = 'Please enter a value in only one field.';
        return;
    } else if (!celsiusValue && !fahrenheitValue) {
        errorMessage.textContent = 'Please enter a value in one of the fields.';
        return;
    }

    if (celsiusValue) {
        // Convert C to F
        const celsius = parseFloat(celsiusValue);
        if (isNaN(celsius)) {
            errorMessage.textContent = `${celsiusValue} is not a number`;
            return;
        }
        const fahrenheit = convertCtoF(celsius);
        fInput.value = fahrenheit;
        updateImage(fahrenheit);
    } else if (fahrenheitValue) {
        // Convert F to C
        const fahrenheit = parseFloat(fahrenheitValue);
        if (isNaN(fahrenheit)) {
            errorMessage.textContent = `${fahrenheitValue} is not a number`;
            return;
        }
        const celsius = convertFtoC(fahrenheit);
        cInput.value = celsius;
        updateImage(fahrenheit);
    }
}

function updateImage(fahrenheit) {
    const weatherImage = document.querySelector('#weatherImage');

    if (fahrenheit < 32) {
        weatherImage.src = 'images/cold.png';
        weatherImage.alt = 'Cold';
    } else if (fahrenheit >= 32 && fahrenheit <= 50) {
        weatherImage.src = 'images/cool.png';
        weatherImage.alt = 'Cool';
    } else {
        weatherImage.src = 'images/warm.png';
        weatherImage.alt = 'Warm';
    }
}
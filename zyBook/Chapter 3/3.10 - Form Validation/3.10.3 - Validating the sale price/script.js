document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener("input", function () {
        let salePriceWidget = document.querySelector('#salePrice');
        let errorMsg = document.querySelector('#errorMsg');

        errorMsg.innerHTML = '';

        if (salePriceWidget.value.length === 0) {
            errorMsg.innerHTML = 'Sale price is missing.';
        } else if (isNaN(salePriceWidget.value)) {
            errorMsg.innerHTML = 'Please enter a number.';
        } else {
            let salePrice = parseFloat(salePriceWidget.value);
            if (salePrice < 10 || salePrice > 1000) {
                errorMsg.innerHTML = 'Must be between $10 and $1,000.';
            }
        }
    })
});

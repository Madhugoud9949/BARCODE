document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.querySelector('.userInput');
    const generateBtn = document.querySelector('.generate-btn');
    const barcode = document.querySelector('#barcode');

    generateBtn.addEventListener('click', function () {
        const text = userInput.value.trim();

        if (text !== '') {
         
            JsBarcode("#barcode", text);
        } else {
          
            barcode.innerHTML = '';
        }
    });
});

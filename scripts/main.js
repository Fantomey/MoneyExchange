// const resultElement = document.getElementById('result');
// const amountInput = document.querySelector('.amount');
// const fromCurrencySelect = document.querySelector('.from');
// const toCurrencySelect = document.querySelector('.to');




// const darkModeBtn = document.querySelector('.btn-change-themes');



// if (localStorage.getItem('darkMode') === 'dark') {
//     darkModeBtn.classList.add("btn-change-themes--active");
//     document.body.classList.add("dark");
// } else {
//     darkModeBtn.classList.remove("btn-change-themes--active");
//     document.body.classList.remove("dark");
// }


// darkModeBtn.addEventListener('click', () => {
//     darkModeBtn.classList.toggle('btn-change-themes--active');
//     const isDark = document.body.classList.toggle('dark');


//     if (isDark) {
//         localStorage.setItem('darkMode', 'dark');
//     } else {
//         localStorage.setItem('darkMode', 'light');
//     }
// });






// const btn = document.querySelector('.convert-button');
// btn.addEventListener('click', () => {
//     resultElement.style.display = 'block';
// });




// async function fetchExchangeRates() {
//     try {
//         const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.error('Error getting exchange rates:', error);
//     }
// }




// function populateCurrencyOptions(currencies) {
//     fromCurrencySelect.innerHTML = '';
//     toCurrencySelect.innerHTML = '';

//     for (const [currencyCode] of Object.entries(currencies)) {
//         const option = document.createElement('option');
//         option.value = currencyCode;
//         option.textContent = currencyCode;
//         fromCurrencySelect.appendChild(option.cloneNode(true));
//         toCurrencySelect.appendChild(option);
//     }


//     updateAmountInputPlaceholder();
// }




// function updateAmountInputPlaceholder() {
//     if (fromCurrencySelect) {
//         amountInput.placeholder = `${fromCurrencySelect.value} 1.00`;
//     }
// }






// function transfer() {
//     if (fromCurrencySelect && toCurrencySelect) {
//         const fromCurrency = fromCurrencySelect.value;
//         const toCurrency = toCurrencySelect.value;

//         fromCurrencySelect.value = toCurrency;
//         toCurrencySelect.value = fromCurrency;

//         updateAmountInputPlaceholder();
//     }
// }





// async function convertCurrency() {
//     const amount = parseFloat(amountInput.value);
//     const fromCurrency = fromCurrencySelect.value;
//     const toCurrency = toCurrencySelect.value;

//     if (isNaN(amount)) {
//         resultElement.textContent = 'Please enter the correct amount';
//         return;
//     }

//     const exchangeRates = await fetchExchangeRates();
//     if (!exchangeRates) return;

//     const rate = exchangeRates.rates[toCurrency] / exchangeRates.rates[fromCurrency];
//     const convertedAmount = amount * rate;

//     resultElement.textContent = `Result : ${convertedAmount.toFixed(2)} ${toCurrency}`;
// }






// document.addEventListener('DOMContentLoaded', async () => {
//     const swapButton = document.querySelector('.swap-button');
//     const exchangeRates = await fetchExchangeRates();
//     if (exchangeRates) {
//         populateCurrencyOptions(exchangeRates.rates);

//         document.querySelector('.convert-button').addEventListener('click', convertCurrency);
//         swapButton.addEventListener('click', transfer);


//         fromCurrencySelect.addEventListener('change', updateAmountInputPlaceholder);
//         toCurrencySelect.addEventListener('change', updateAmountInputPlaceholder);
//     }
// });




























const resultElement = document.getElementById('result');
const amountInput = document.querySelector('.amount');
const fromCurrencySelect = document.querySelector('.from');
const toCurrencySelect = document.querySelector('.to');

const darkModeBtn = document.querySelector('.btn-change-themes');

if (localStorage.getItem('darkMode') === 'dark') {
    darkModeBtn.classList.add("btn-change-themes--active");
    document.body.classList.add("dark");
} else {
    darkModeBtn.classList.remove("btn-change-themes--active");
    document.body.classList.remove("dark");
}

darkModeBtn.addEventListener('click', () => {
    darkModeBtn.classList.toggle('btn-change-themes--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('darkMode', 'dark');
    } else {
        localStorage.setItem('darkMode', 'light');
    }
});

const btn = document.querySelector('.convert-button');
btn.addEventListener('click', () => {
    resultElement.style.display = 'block';
});

async function fetchExchangeRates() {
    try {
        const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error getting exchange rates:', error);
    }
}


const popularCurrencies = [
    'USD', // United States Dollar
    'EUR', // Euro
    'JPY', // Japanese Yen
    'GBP', // British Pound Sterling
    'AUD', // Australian Dollar
    'CAD', // Canadian Dollar
    'CHF', // Swiss Franc
    'CNY', // Chinese Yuan
    'SEK', // Swedish Krona
    'NZD', // New Zealand Dollar
    'MXN', // Mexican Peso
    'SGD', // Singapore Dollar
    'HKD', // Hong Kong Dollar
    'NOK', // Norwegian Krone
    'KRW', // South Korean Won
    'TRY', // Turkish Lira
    'INR', // Indian Rupee
    'RUB', // Russian Ruble
    'BRL', // Brazilian Real
    'ZAR', // South African Rand
    'PLN', // Polish Zloty
    'AED', // United Arab Emirates Dirham

];



function populateCurrencyOptions(currencies) {
    fromCurrencySelect.innerHTML = '';
    toCurrencySelect.innerHTML = '';


    const filteredCurrencies = Object.keys(currencies).filter(code => popularCurrencies.includes(code));


    filteredCurrencies.forEach(currencyCode => {
        const option = document.createElement('option');
        option.value = currencyCode;
        option.textContent = currencyCode;
        fromCurrencySelect.appendChild(option.cloneNode(true));
        toCurrencySelect.appendChild(option);
    });

    updateAmountInputPlaceholder();
}

function updateAmountInputPlaceholder() {
    if (fromCurrencySelect) {
        amountInput.placeholder = `${fromCurrencySelect.value} 1.00`;
    }
}

function transfer() {
    if (fromCurrencySelect && toCurrencySelect) {
        const fromCurrency = fromCurrencySelect.value;
        const toCurrency = toCurrencySelect.value;

        fromCurrencySelect.value = toCurrency;
        toCurrencySelect.value = fromCurrency;

        updateAmountInputPlaceholder();
    }
}

async function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromCurrency = fromCurrencySelect.value;
    const toCurrency = toCurrencySelect.value;

    if (isNaN(amount)) {
        resultElement.textContent = 'Please enter the correct amount';
        return;
    }

    const exchangeRates = await fetchExchangeRates();
    if (!exchangeRates) return;

    const rate = exchangeRates.rates[toCurrency] / exchangeRates.rates[fromCurrency];
    const convertedAmount = amount * rate;

    resultElement.textContent = `Result : ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

document.addEventListener('DOMContentLoaded', async () => {
    const swapButton = document.querySelector('.swap-button');
    const exchangeRates = await fetchExchangeRates();
    if (exchangeRates) {
        populateCurrencyOptions(exchangeRates.rates);

        document.querySelector('.convert-button').addEventListener('click', convertCurrency);
        swapButton.addEventListener('click', transfer);

        fromCurrencySelect.addEventListener('change', updateAmountInputPlaceholder);
        toCurrencySelect.addEventListener('change', updateAmountInputPlaceholder);
    }
});

const balance = document.getElementById('balance');
const list = document.getElementById('list');
const text = document.getElementById('text');
const amount = document.getElementById('amount');
const btn = document.getElementById('add-transaction');

// Local Storage-il irunthu data-vai edukkirom
const localStorageTransactions = JSON.parse(localStorage.getItem('transactions'));
let transactions = localStorage.getItem('transactions') !== null ? localStorageTransactions : [];

// Transaction-ai add seiya
function addTransaction() {
    if (text.value.trim() === '' || amount.value.trim() === '') {
        alert('fill the details!');
    } else {
        const transaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text.value,
            amount: +amount.value
        };

        transactions.push(transaction);
        updateUI();
        updateLocalStorage();

        text.value = '';
        amount.value = '';
    }
}

// Screen-il list-ai update seiya
function updateUI() {
    list.innerHTML = '';

    transactions.forEach(t => {
        const sign = t.amount < 0 ? '-' : '+';
        const item = document.createElement('div');
        item.classList.add('item');

        item.innerHTML = `
            <div class="icon-text">
                <span class="status-icon ${t.amount < 0 ? 'red' : 'green'}">
                    ${t.amount < 0 ? '&#8722;' : '&#10004;'}
                </span>
                <span>${t.text}</span>
            </div>
            <span class="${t.amount < 0 ? 'red-text' : 'green-text'}">
                ${sign}${Math.abs(t.amount)}.00
            </span>
        `;
        list.appendChild(item);
    });

    // Total Balance update
    const total = transactions.reduce((acc, item) => (acc += item.amount), 0).toFixed(2);
    balance.innerText = `Rs ${total}`;
}

// Data-vai save seiya
function updateLocalStorage() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
}

btn.addEventListener('click', addTransaction);

// Page load aagum pothu display seiya
updateUI();
function openNav() {
    document.getElementById("sidebar").style.width = "300px"; // Sidebar-ai 300px expand pannum
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0"; // Thirumba maraikkum
}


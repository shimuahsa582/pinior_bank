// login button even handler

const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function() {
	const loginArea = document.getElementById('login_area');
	loginArea.style.display = 'none';
	const transactionArea = document.getElementById('transaction_area');
	transactionArea.style.display = 'block';
});

// Deposit button even handler
const depositBtn = document.getElementById('addDeposit');
depositBtn.addEventListener('click', function() {
	const depositNumber = getInputNumber('depositAmount');

	updateSpanText = ('currentDeposit', depositNumber);
	updateSpanText = ('currentBalance', depositNumber);

	document.getElementById('depositAmount').value = ' ';
});

// withdraw  button handler
const withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click', function() {
	const withdrawNumber = getInputNumber('withdrawAmount');

	updateSpanText = ('currentWithdraw', withdrawNumber);
	updateSpanText = ('currentBalance', -1 * withdrawNumber);

	document.getElementById('withdrawAmount').value = ' ';
});
// withdraw function
function getInputNumber(id) {
	const amount = document.getElementById(id).value;
	const amountNumber = parseFloat(amount);
	return amountNumber;
}
// deposit function
function updateSpanText(id, addedNumber) {
	const current = document.getElementById(id).innerText;
	const currentNumber = parseFloat(current);
	const totalAmount = addedNumber + currentNumber;
	document.getElementById(id).innerText = totalAmount;
}

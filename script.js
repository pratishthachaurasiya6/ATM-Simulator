

let balance = 10000;

function checkPin() {
    const pin = document.getElementById('pinInput').value;
    if (pin === "1234") {
        document.getElementById('outputMessage').innerHTML = "PIN Accepted! You can now perform transactions.";
        document.getElementById('atmActions').style.display = "block";
    } else {
        document.getElementById('outputMessage').innerHTML = "Incorrect PIN! Please try again.";
        document.getElementById('atmActions').style.display = "none";
    }
}

function checkBalance() {
    document.getElementById('outputMessage').innerHTML = `Your current balance is Rs ${balance}.`;
}

function deposit() {
    let depositAmount = prompt("Enter the amount to deposit:");
    depositAmount = parseFloat(depositAmount);
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        document.getElementById('outputMessage').innerHTML = `Deposit successful! Your new balance is Rs ${balance}.`;
    } else {
        document.getElementById('outputMessage').innerHTML = "Invalid deposit amount!";
    }
}

function withdraw() {
    let withdrawAmount = prompt("Enter the amount to withdraw:");
    withdrawAmount = parseFloat(withdrawAmount);
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            document.getElementById('outputMessage').innerHTML = `Withdrawal successful! Your new balance is Rs ${balance}.`;
        } else {
            document.getElementById('outputMessage').innerHTML = "Insufficient balance!";
        }
    } else {
        document.getElementById('outputMessage').innerHTML = "Invalid withdrawal amount!";
    }
}

function logout() {
    document.getElementById('outputMessage').innerHTML = "You have successfully logged out.";
    document.getElementById('pinInput').value = "";
    document.getElementById('atmActions').style.display = "none";
}

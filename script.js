let accountBalance = 1000;
let cashBalance = 1000;
let log_time = 2;

window.onload = () => {
    const name = getSystemUser();
    document.getElementById("ownerName").innerHTML = `<b>Name:</b> ${name}`;
};

function proceed() {
    const operation = document.getElementById("operation").value;
    const amount = Number(document.getElementById("amount").value);
    const logBox = document.getElementById("log");

    if (amount <= 0) {
        alert("Please enter a valid amount!");
        return;
    }

    if (operation === "deposit") {
        accountBalance += amount;
    } else if (operation === "withdraw") {
        if (amount > accountBalance) {
            alert("Insufficient account balance!");
            return;
        }
        accountBalance -= amount;
        cashBalance += amount;
    }

    log_time++;

    document.getElementById("accountBalance").value = accountBalance;
    document.getElementById("cashBalance").value = cashBalance;

    const newLog = document.createElement("p");
    newLog.textContent = `${log_time - 1}, ${operation.toUpperCase()} ${amount}, Account balance: ${accountBalance}, Current cash balance: ${cashBalance}`;
    logBox.appendChild(newLog);
}

function convertCurrency() {
    const input = Number(document.getElementById("inputCurrency").value);
    const type = document.getElementById("currencyType").value;
    const rate = 32.32;
    let output = 0;

    if (type === "USD") {
        output = input * rate; // USD → THB
    } else {
        output = input / rate; // THB → USD
    }

    document.getElementById("outputCurrency").value = output.toFixed(2);
}

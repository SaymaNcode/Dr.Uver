function updateLoanValue() {
    let loanAmount = document.getElementById("loanAmount");
    let loanValueDisplay = document.getElementById("loanValue");
    loanValueDisplay.textContent = loanAmount.value + " €";

    let formattedLoanAmount = parseFloat(loanAmount.value).toLocaleString('de-DE'); // 'de-DE' uses dot for thousands

    loanValueDisplay.textContent = formattedLoanAmount + " €";
    // Dynamically update the filled color based on value
    loanAmount.style.setProperty('--value', (loanAmount.value - loanAmount.min) / (loanAmount.max - loanAmount.min) * 100 + '%');
}

// Update the repayment time dynamically and adjust the fill
function updateRepaymentValue() {
    let repaymentTime = document.getElementById("repaymentTime");
    let repaymentValueDisplay = document.getElementById("repaymentValue");
    repaymentValueDisplay.textContent = repaymentTime.value + " MES.";
    // Dynamically update the filled color based on value
    repaymentTime.style.setProperty('--value', (repaymentTime.value - repaymentTime.min) / (repaymentTime.max - repaymentTime.min) * 100 + '%');
}
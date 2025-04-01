document.getElementById("btn").addEventListener("click", function () {
    // Get input values
    const monthlyInvestment = parseFloat(document.querySelector(".mi").value);
    const annualReturnRate = parseFloat(document.querySelector(".er").value);
    const timePeriod = parseFloat(document.querySelector(".tp").value);

    // Validate inputs
    if (isNaN(monthlyInvestment) || isNaN(annualReturnRate) || isNaN(timePeriod) ||  annualReturnRate <= 0 || timePeriod <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }
    if (monthlyInvestment < 100) {
        alert("Monthly investment should exceed 100.");
        return;
    }

    // Convert annual return rate to monthly rate
    const monthlyRate = annualReturnRate / 100 / 12;

    // Calculate the number of months
    const numberOfMonths = timePeriod * 12;

    // SIP formula: M = P × ({[1 + i]^n – 1} / i) × (1 + i)
    const maturityAmount = monthlyInvestment * ((Math.pow(1 + monthlyRate, numberOfMonths) - 1) / monthlyRate) * (1 + monthlyRate);

    // Calculate invested amount
    const investedAmount = monthlyInvestment * numberOfMonths;

    // Display results
    document.getElementById("print_amt").textContent = (maturityAmount - investedAmount).toFixed(2);
    document.getElementById("print_ret").textContent = investedAmount.toFixed(2);
    document.getElementById("print_val").textContent = maturityAmount.toFixed(2);
});

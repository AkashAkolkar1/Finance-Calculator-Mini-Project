document.getElementById("btn").addEventListener("click", function () {
    // Get input values
    const monthlyInvestment = parseFloat(document.querySelector(".mi").value);
    const annualReturnRate = parseFloat(document.querySelector(".er").value);
    const timePeriod = parseFloat(document.querySelector(".tp").value);

    // Validate inputs
    if (isNaN(monthlyInvestment) || isNaN(annualReturnRate) || isNaN(timePeriod) || monthlyInvestment <= 0 || annualReturnRate <= 0 || timePeriod <= 0) {
        alert("Please enter valid positive numbers for all fields.");
        return;
    }

    // Convert annual return rate to monthly rate
    const monthlyRate = annualReturnRate;

    // Calculate the number of months
    const numberOfMonths = timePeriod;

    // SIP formula: M = P + (P x r x t/100)
    const maturityAmount = monthlyInvestment + ((monthlyInvestment*monthlyRate*numberOfMonths)/100)

    // Calculate invested amount
    const investedAmount = ((monthlyInvestment*monthlyRate*numberOfMonths)/100);

    // Display results
    document.getElementById("print_amt").textContent = investedAmount.toFixed(2);
    document.getElementById("print_ret").textContent = monthlyInvestment.toFixed(2);
    document.getElementById("print_val").textContent = maturityAmount.toFixed(2);
});

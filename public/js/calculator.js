function calculateAffordability() {
  let income = '';
  let loanTerm = '';
  let totalDebt = '';
  let affordability = '';
  let errorCheck = '';

  function onClickCalculate() {
    console.log("here")
    if (!income || !loanTerm || !totalDebt || isNaN(income) || isNaN(loanTerm) || isNaN(totalDebt)) {
      errorCheck = "Please enter valid numeric values for income, loan term, and total debt.";
      console.log(errorCheck)
      return;
    }
    const calculatedAffordability = (parseFloat(income) - parseFloat(totalDebt)) / parseFloat(loanTerm);
    affordability = calculatedAffordability.toString();
    console.log('Affordability:', affordability);
  }

  // Expose the function or variables as needed
  window.calculateAffordability = onClickCalculate;
}

// Call the function to set up the variables and functions
calculateAffordability();


// function calculateAffordability() {
    
    // Prompt the user for income, loan term, and total debt
    // const income = prompt("Enter your annual income ($):");
    // const loanTerm = prompt("Enter the loan term (years):");
    // const totalDebt = prompt("Enter your total debt ($):");
  
    // // Validate input
    // if (!income || !loanTerm || !totalDebt || isNaN(income) || isNaN(loanTerm) || isNaN(totalDebt)) {
    //   alert("Please enter valid numeric values for income, loan term, and total debt.");
    //   return;
    // }
  
    // // Your affordability calculation logic here (adjust based on your specific formula)
    // // For example, you might deduct total debt from income before dividing by loan term
    // const affordability = (income - totalDebt) / loanTerm;
  
    // // Display the result
    // document.getElementById('affordabilityResult').innerText = `You can afford a house costing $${affordability.toFixed(2)}`;
  //}
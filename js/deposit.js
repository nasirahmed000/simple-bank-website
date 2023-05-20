document.getElementById('btn-deposit').addEventListener('click', function(){
   const depositField = document.getElementById('deposit-field')
   const newDepositAmountString = depositField.value; 
   const newDepositAmount = parseFloat(newDepositAmountString)

     
    
   const depositTotalElement = document.getElementById('deposit-total')
   const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat (previousDepositTotalString)
    
   const currentDepositTotal = previousDepositTotal+ newDepositAmount;

   depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total')
    const previuosBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat (previuosBalanceTotalString);

    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


//    step 7 
    depositField.value = '';
})
document.getElementById('btn-withdraw').addEventListener('click', function(){
   


    const withDrawField = document.getElementById('withdraw-field')
    const newWithdrawAmountString = withDrawField.value ;
    const newWithdrawAmount = parseFloat( newWithdrawAmountString);


    const withdrawTotalElement = document.getElementById('withdraw-total') ;
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
   


    const balanceTotalElement = document.getElementById('balance-total');
    const previuosBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previuosBalanceTotalString);
     
    withDrawField.value ='';

    if(newWithdrawAmount> previousBalanceTotal){
        alert('tomar baaper bank e eto tk nai ')
        return;
    }
    const currentwithDrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentwithDrawTotal;

    // console.log(previousBalanceTotal);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = newBalanceTotal;


    
})
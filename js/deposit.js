// step 1:

document.getElementById('btn-deposit').addEventListener('click', function(){

    // step2
    const depositField=document.getElementById('deposit-field');
    const newDepositAmountString=depositField.value 
    const newDepositAmount=parseFloat(newDepositAmountString);
    
    // step3
const depositTotalElement=document.getElementById('deposit-total');

const previousDepositTotalString=depositTotalElement.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);
// step5
const currentDepositTotal= previousDepositTotal + newDepositAmount ;

depositTotalElement.innerText= currentDepositTotal;
// step6
const newBalance=document.getElementById('balance-total');
const newBalanceString=newBalance.innerText;
const totalBalance=parseFloat(newBalanceString);

// step7

const allBalance= totalBalance + newDepositAmount;
newBalance.innerText=allBalance;
// step4
depositField.value=''
})

document.getElementById('btn-withdraw').addEventListener('click', function(){
 const getWithdraw=document.getElementById('withdraw-field');
 const totalWithdrawAmountString=getWithdraw.value;
 const totalWithdrawAmount=parseFloat(totalWithdrawAmountString);

 const withdrawElement=document.getElementById('withdraw-total')
 const totalWithdrawBalanceString=withdrawElement.innerText;
 const totalWithdrawBalance=parseFloat(totalWithdrawBalanceString);
 withdrawElement.innerText=totalWithdrawBalance + totalWithdrawAmount;


 const newBalance=document.getElementById('balance-total');
const newBalanceString=newBalance.innerText;
const totalBalance=parseFloat(newBalanceString);

const restAmount=totalBalance - totalWithdrawAmount;

newBalance.innerText=restAmount;

if(totalWithdrawAmount>totalBalance){
    alert('Thapraia kan gorom kore felbo.Tor kase eto taka thakle to withdraw korbi.Fokinni kothkar')
}

 getWithdraw.value =''
})
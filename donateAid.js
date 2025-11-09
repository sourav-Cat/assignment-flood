 
document.getElementById('Donate-Now-for-Aid').addEventListener('click',function(){
    const AiddonationAmount=document.getElementById('inut-donateValue-Aid').value;
   if (!AiddonationAmount || isNaN(AiddonationAmount) || AiddonationAmount <= 0) {
    alert('Please enter a valid amount');
    return;
}
    const AidAvailableBalance=document.getElementById('MainBlance').innerText;
  
    const AidAvailableBalanceInt=parseFloat(AidAvailableBalance);
    const AiddonationAmountInt=parseFloat(AiddonationAmount);
    const AidtotalMainBalance=AidAvailableBalanceInt-AiddonationAmountInt;
    const AiddonateFull=document.getElementById('AidafterDonate').innerText;
    const AidAfterDonate=parseFloat(AiddonationAmount)+parseFloat(AiddonateFull)
    if(AidtotalMainBalance<0){
        alert('Insufficient balance')
        return
    }
    document.getElementById('MainBlance').innerText=AidtotalMainBalance;
    document.getElementById('AidafterDonate').innerText=AidAfterDonate;
    const p=document.createElement('p');
    const date= new Date();
    date.getDate();
    const d= document.createElement('p');
    d.innerText=`${AiddonationAmount} Tk is Donate for Aid , Injured in the Quota Movement, now Balance is ${AidtotalMainBalance}`;
    p.innerText=date;
    p.className = "text-sm text-gray-700 my-2";
     document.getElementById('showing-transection').appendChild(d);
    document.getElementById('showing-transection').appendChild(p);
   
  
})
console.log('connected')
document.getElementById('Donate-Now').addEventListener('click',function(){
    const donationAmount=document.getElementById('inut-donateValue').value;
   if (!donationAmount || isNaN(donationAmount) || donationAmount <= 0) {
    alert('Please enter a valid amount');
    return;
}
    const AvailableBalance=document.getElementById('MainBlance').innerText;
  
    const AvailableBalanceInt=parseFloat(AvailableBalance);
    const donationAmountInt=parseFloat(donationAmount);
    const totalMainBalance=AvailableBalanceInt-donationAmountInt;
    const donateFull=document.getElementById('afterDonate').innerText;
    const AfterDonate=parseFloat(donationAmount)+parseFloat(donateFull)
    if(totalMainBalance<0){
        alert('Insufficient balance')
        return
    }
    document.getElementById('MainBlance').innerText=totalMainBalance;
    document.getElementById('afterDonate').innerText=AfterDonate;
    const p=document.createElement('p');
    p.innerText=`Donate ${donationAmount} Tk ,Balance is ${totalMainBalance}`
    p.className = "text-sm text-gray-700 my-2";
    document.getElementById('history').appendChild(p);
     document.getElementById('input-donateValue').value = '';
})
console.log('connected')
document.getElementById('Donate-Now-for-feni').addEventListener('click',function(){
    const FenidonationAmount=document.getElementById('inut-donateValue-feni').value;
   if (!FenidonationAmount || isNaN(FenidonationAmount) || FenidonationAmount <= 0) {
    alert('Please enter a valid amount');
    return;
}
    const FeniAvailableBalance=document.getElementById('MainBlance').innerText;
  
    const FeniAvailableBalanceInt=parseFloat(FeniAvailableBalance);
    const FenidonationAmountInt=parseFloat(FenidonationAmount);
    const FenitotalMainBalance=FeniAvailableBalanceInt-FenidonationAmountInt;
    const FenidonateFull=document.getElementById('FeniafterDonate').innerText;
    const FeniAfterDonate=parseFloat(FenidonationAmount)+parseFloat(FenidonateFull)
    if(FenitotalMainBalance<0){
        alert('Insufficient balance')
        return
    }
    document.getElementById('MainBlance').innerText=FenitotalMainBalance + ' BDT';
    document.getElementById('FeniafterDonate').innerText=FeniAfterDonate  + ' BDT';
    const p=document.createElement('p');
    const date= new Date();
    date.getDate();
    const d= document.createElement('p');
    d.innerText=`${FenidonationAmount} Tk Donate for Flood Relief in Feni, Bangladesh, now Balance is ${FenitotalMainBalance}`;
    p.innerText=date;
    p.className = "text-sm text-gray-700 my-2";
     document.getElementById('showing-transection').appendChild(d);
    document.getElementById('showing-transection').appendChild(p);
    document.getElementById('inut-donateValue-feni').value = '';
   
  
})

 
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

    // Modal Work 
    const modalAid=document.getElementById('my_modal_3')
    document.getElementById('AidModalShow').innerHTML = '';
    modalAid.showModal()
    const AidmodalShow=document.createElement('P')
    AidmodalShow.innerText=`Thanks For the Donation Amount Of ${AiddonationAmountInt}`
    document.getElementById('AidModalShow').appendChild(AidmodalShow)
    setTimeout(()=>{
        modalAid.close();

    },800
    );




    document.getElementById('MainBlance').innerText=AidtotalMainBalance  + ' BDT';
    document.getElementById('AidafterDonate').innerText=AidAfterDonate  + ' BDT';
    const p=document.createElement('p');
    const date= new Date();
    date.getDate();
    const d= document.createElement('p');
    d.innerText=`${AiddonationAmount} Tk is Donate for Aid , Injured in the Quota Movement, now Balance is ${AidtotalMainBalance}`;
    p.innerText=date;
    p.className = "text-sm text-gray-700 my-2";
     document.getElementById('showing-transection').appendChild(d);
    document.getElementById('showing-transection').appendChild(p);
    document.getElementById('inut-donateValue-Aid').value = '';
})
 
document.getElementById('Donate-Now-for-feni').addEventListener('click',function(event){
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
    //  Modal Work 
    const Fenimodal=document.getElementById('my_modal_feni')
    document.getElementById('ModalShowFeni').innerHTML = '';
    Fenimodal.showModal()
    const FenimodalShow=document.createElement('P')
    FenimodalShow.innerText=`Thanks For the Donation Amount Of ${FenidonationAmountInt}`
    document.getElementById('ModalShowFeni').appendChild(FenimodalShow)
    setTimeout(function(){
        Fenimodal.close();

    },1000
    );
// Modal Work finished 

    document.getElementById('MainBlance').innerText=FenitotalMainBalance  + ' BDT';
    document.getElementById('FeniafterDonate').innerText=FeniAfterDonate  + ' BDT';
    const p=document.createElement('p');
    const date= new Date();
    date.getDate();
    const d= document.createElement('p');
    d.innerText=`${FenidonationAmount} Tk is Donated for flood Relief for Feni, Bangladesh, now Balance is ${FenitotalMainBalance}`;
    p.innerText=date;
    p.className = "text-sm text-gray-700 my-2";
     document.getElementById('showing-transection').appendChild(d);
    document.getElementById('showing-transection').appendChild(p);
    document.getElementById('inut-donateValue-feni').value = '';
   
  
})

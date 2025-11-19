 
document.getElementById('Donate-Now').addEventListener('click',function(event){
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
    //  Modal Work 
    const modal=document.getElementById('my_modal_2')
    document.getElementById('ModalShow').innerHTML = '';
    modal.showModal()
    const modalShow=document.createElement('P')
    modalShow.innerText=`Thanks For the Donation Amount Of ${donationAmountInt}`
    document.getElementById('ModalShow').appendChild(modalShow)
    setTimeout(function() {
        modal.close();

    },1000
    );
// Modal Work finished 

    document.getElementById('MainBlance').innerText=totalMainBalance  + ' BDT';
    document.getElementById('afterDonate').innerText=AfterDonate  + ' BDT';
    const p=document.createElement('p');
    const date= new Date();
    date.getDate();
    const d= document.createElement('p');
    d.innerText=`${donationAmount} Tk is Donated for flood Relief for Noakhali Bangladesh, now Balance is ${totalMainBalance}`;
    p.innerText=date;
    p.className = "text-sm text-gray-700 my-2";
     document.getElementById('showing-transection').appendChild(d);
    document.getElementById('showing-transection').appendChild(p);
    document.getElementById('inut-donateValue').value = '';
   
  
})
console.log('Connected History')
document.getElementById('donate-view').addEventListener('click',function(){
    document.getElementById('donate-show').classList.remove('hidden')
    document.getElementById('transection').classList.add('hidden')
    document.getElementById('history').classList.remove('bg-[#B4F461]')
    document.getElementById('donate-view').classList.add('bg-[#B4F461]')
})
document.getElementById('history').addEventListener('click',function(){
    document.getElementById('transection').classList.remove('hidden')
    document.getElementById('donate-show').classList.add('hidden')
    document.getElementById('donate-view').classList.remove('bg-[#B4F461]')
    document.getElementById('history').classList.add('bg-[#B4F461]')
})
let selectedNumber = null;

const numberBtn = document.querySelectorAll('.ranking-number');

const submitBtn = document.getElementById('submit-btn');
const popup = document.querySelector('.popupBackground');
const rankSelect = document.querySelector('.ranking-selected')

numberBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        selectedNumber = btn.getAttribute('data-value');
    })
})


submitBtn.addEventListener('click', () => {
    if (selectedNumber !== null) {
        rankSelect.textContent = `You selected ${selectedNumber} out of 5`;
        popup.style.display = 'block';

    }else {
        alert('Please select a number');
    }
   
})



popup.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = "none";
        selectedNumber = null; 
        rankSelect.textContent = '';
    }
});
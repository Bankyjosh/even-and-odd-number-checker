function generateNumbers() {
    
    const inputElement = document.getElementById('inputNumber');
    const limit = parseInt(inputElement.value, 10);

    
    const evenList = document.getElementById('evenList');
    const oddList = document.getElementById('oddList');

    
    evenList.innerHTML = '';
    oddList.innerHTML = '';

    
    if (isNaN(limit) || limit < 1) {
        alert("Please enter a valid positive number.");
        return;
    }

    
    for (let i = 1; i <= limit; i++) {
        
        const li = document.createElement('li');
        li.textContent = i;

        
        if (i % 2 === 0) {
            
            evenList.appendChild(li);
        } else {
            
            oddList.appendChild(li);
        }
    }
}

function changeColor() {
    let colors = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple", "Pink", "Black", "Rose", "Brown", "Silver"];
    let randomIndex = Math.floor(Math.random()* colors.length);
    document.body.style. backgroundColor = colors[randomIndex];
    
    
}



function getPin(){
    const pin = Math.round( Math.random()*10000);
    const pinString = pin + '';
    if(pinString.length == 4){
        return pin;
    }
    else{
        // console.log('got 3 digit and calling again', pin);
        return getPin();
    }
}


function generatePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin; 
}

document.getElementById('key-pad').addEventListener('click', function(event){
 const number = event.target.innerText;
 const calcInput = document.getElementById('typed-numbers');
 if(isNaN(number)){
    if(number == 'C'){
        calcInput.value = '';
    }
 }
else {
    // const calcInput = document.getElementById('typed-numbers');
    const previousCalc = calcInput.value;
    const newNumber =previousCalc + number;
    calcInput.value = newNumber;
}
});
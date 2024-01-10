const userGuess  = document.getElementById('userGuess')
const submit  = document.getElementById('submit')
const guesses  = document.getElementById('guesses')
const remainGuess  = document.getElementById('remainGuess')
const showGuess  = document.getElementById('showGuess')

    let preGuess = []




    const remian = function(){
        let gu = remainGuess.value = 10
        gu--
        remainGuess.innerHTML = gu
        remainGuess.value =gu

    }
    
    submit.addEventListener('click', () => {
        const random = Math.floor(Math.random() * 10) + 1;
        let guessValue = userGuess.value;
        
        preGuess.push(guessValue)
        console.log(preGuess)

        console.log('hello', guessValue);
    
        if (guessValue === "" || isNaN(guessValue)) {
            alert('Enter a valid number');
        } else if (parseInt(guessValue) !== random) {
            showGuess.innerHTML = `Your guess ${guessValue} is not equal to ${random}, try again.`;
        } else {
            showGuess.innerHTML = `Your guess ${guessValue} is equal to ${random}, You won!`;
        }
    
        guesses.innerHTML = preGuess
        userGuess.value = '';
        remian()
    });
    



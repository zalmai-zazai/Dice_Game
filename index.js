// function to play the game
function playgame(){

let randomfunc = (rand)=>{
  return  rand = Math.floor(Math.random()*6+1)
}

// gernerate two random numbers using function
randomNumber1 = randomfunc()
randomNumber2 = randomfunc()

// generate the imagenames randomly by concatinating generated numbers
let randomDiceImage = `images/dice${randomNumber1}.png`
let image1 = document.querySelectorAll("img")[0].setAttribute('src', randomDiceImage)

// generate the imagenames randomly by concatinating generated numbers
let randomDiceImage2 = `images/dice${randomNumber2}.png`
let image2 = document.querySelectorAll("img")[1].setAttribute('src', randomDiceImage2)

// function to compare bothe values and show the winner
let comparefunc = (randomNumber1, randomNumber2)=>{

    let textContainer = document.getElementById('refresh')
    
    if(randomNumber1>randomNumber2){
       textContainer.textContent=("Player one wins")
       textContainer.style.color='Green'
        
    }else if(randomNumber1<randomNumber2){
       textContainer.textContent=("Player two wins")
       textContainer.style.color='cyan'
    }else{
        textContainer.textContent=("Match draw")
        textContainer.style.color='pink'
    }
}
comparefunc(randomNumber1,randomNumber2)
}

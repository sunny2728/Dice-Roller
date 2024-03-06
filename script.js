const rollDice =() =>{

    const  numberOfdice = document.getElementById("numofdice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");

   // console.log(Math.floor(Math.random()*6)+1)

   const values = []
   const images = []

   for(let i=0; i<numberOfdice;i++){

    const randonNumber = Math.floor(Math.random()*6+1);
    values.push(randonNumber)
    images.push(`<img src="images/dice-${randonNumber}.png"/>`)

   }

  

    diceResult.innerHTML= `Dice:${values.join(",")}`;
    diceImg.innerHTML = images.join("");


};

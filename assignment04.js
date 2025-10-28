// Problem-01 : Train TT's Fine Calculator 

// const f = '6';
function totalFine( fare ) {
    if(typeof fare === 'number' && fare >=1){
            const fine = fare + fare*(20/100) + 30;
            return fine;
    }
    else{
        return 'Invalid'
    }
}
// console.log(totalFine(f))

// Problem-02 : Clean & Capitalize Characters
function  onlyCharacter( str ) {
    let ary = []
    if(typeof str === 'string'){
    for(let st of str){
        // console.log(st)
        ary.push(st.toUpperCase())
    }
    return ary.join('').split(' ').join('')
    }
    else{
        return 'Invalid'
    }
    
}
// let check = true

// console.log(onlyCharacter(check))

// Problem-03 : FIFA Best Team Award 
function  bestTeam( player1, player2 ) {
    if(typeof player1 && typeof player2 === 'object'){
        let one = player1.foul + player1.cardY + player1.cardR;
          let two = player2.foul + player2.cardY + player2.cardR;
          if(one < two){
            return player1.name;
          }
          else if(two < one){
            return player2.name;
          }
          else if(one === two){
            return 'Tie'
          }
    }
         else{
            return 'Invalid'
         } 
}

//  const playerone = { name: "Germany", foul: 10, cardY: 1, cardR: 1 }
//  const playertwo = "France"

// console.log(bestTeam(playerone, playertwo))

// Problem-04: Same Same But Different  
function  isSame(arr1 , arr2 ) {
    if(arr1.length === arr2.length){
        for(let arrone of arr1){
            arr2.includes(arrone)
            // console.log(arrone)
        }
        return true
    }
    else{
        return false
    }
}
const one = [1, 2, 5]
const two = [1, 2, 3]
// console.log(isSame(one, two))

// Problem-05: Exam Result Report Generator

function  resultReport( marks ) {
    if(typeof marks === 'object'){
        
    }
    let sum = 0;
    let pas = 0;
    let fail = 0;
    for(let mark of marks){
        sum = mark + sum;
        if(mark > 40){
            pas++
        }
        else if(mark < 40){
            fail++
        }
    }
    console.log(fail)
    let avg = Math.round(sum / marks.length);
    return {finalScore: avg, pass: pas, fail: fail}
}

const check = [98, 87, 67, 91, 92, 33, 87]
console.log(resultReport(check))
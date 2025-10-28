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
    if(str === 'string'){
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
let check = true

console.log(onlyCharacter(check))

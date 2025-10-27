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

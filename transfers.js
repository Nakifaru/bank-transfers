// Given N transfers
// Do all the transfers
// Return minimum initial balances


function solution(R, V) {
    //R is a string showing to which Bank money is being transfered to, either to A or to B
    //V is an array holding values of transfers
    //Positions in R and V corresponding
    //R and V same length
    //R is a string of A and B showing to which bank money is to be transfered to
    
    //let initial amount in each bank be 0
    let initialBalanceA = 0
    let initialBalanceB = 0

    //let balances in both banks initially be 0
    let currentbalanceA = 0
    let currentbalanceB = 0


    //split R into an array to be able to access each individual bank transfer
    let ArrR = R.split('')


    //loop through ArrR to get bank being transfered to and where from will be the other one
    //reading the valu and adding to that bank's balance while subtracting from the other
    for (let i = 0; i < R.length; i++) {
        //if value in an index of ArrA is A, get the monetary value of the transfer from the V array. 
        //Add the amount to balanceA and subtract it from balanceB 
        if (ArrR[i] == 'A') {
            // use similar indexes to access values from the ArrR and V
            currentbalanceA += V[i]
            currentbalanceB -= V[i]
        } //if the value in the index is B, do the inverse: add to balanceB and subtract from balanceA
        else if (ArrR[i] == 'B') {
            currentbalanceB += V[i]
            currentbalanceA -= V[i]
        }
        // if the balance goes to negative, add the absolute value to the first value and make the balance 0.
        //We do this since we never want a bank's balance to be in the negative, meaning on credit.
        //Adding the value to the initial balance cancels out the negative value, bringing it to zero, which is the lowest the balance should go to.
        if (currentbalanceA < 0) {
            initialBalanceA += (currentbalanceA * -1)
            currentbalanceA = 0
        } else if (currentbalanceB < 0) {
            initialBalanceB += (currentbalanceB * -1)
            currentbalanceB = 0
        }
    }

    console.log([initialBalanceA, initialBalanceB])
    return [initialBalanceA, initialBalanceB]
}

solution("BAABA", [2, 4, 1, 1, 2])

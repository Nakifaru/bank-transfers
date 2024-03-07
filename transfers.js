// Given N transfers
// Do all the transfers
// Return minimum initial balances

//working with this values for visualization
// R = 'BAABA'
// V = [2, 4, 1, 1, 2]

function solution(R, V) {
    //R and V same length
    //R is a string of A and B showing where money is to be transfered to
    
    //let initial amount in each bank be 0
    let firstA = 0
    let firstB = 0

    //let balances in both banks initially be 0
    let balanceA = 0
    let balanceB = 0


    //split R into an array to be able to access each individual bank transfer
    let ArrR = R.split('')


    //loop through the bank transfers reading the banking and adding to that bank's balance while subtracting from the other
    // use similar indexes to access values from the ArrR and V
    for (let i = 0; i < R.length; i++) {
        if (ArrR[i] == 'A') {
            balanceA += V[i]
            balanceB -= V[i]
        } else if (ArrR[i] == 'B') {
            balanceB += V[i]
            balanceA -= V[i]
        }
        // if the balance goes to negative, add the absolute value to the first value and make the balance 0
        if (balanceA < 0) {
            firstA += (balanceA * -1)
            balanceA = 0
        } else if (balanceB < 0) {
            firstB += (balanceB * -1)
            balanceB = 0
        }
    }

    console.log([firstA, firstB])
    return [firstA, firstB]
}

solution('ABAB', [10,5,10,15])

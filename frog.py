def solution(X, A):
    #create a variable leaf_positions with it being empty. It will hold the positions of the falling leaves.   
    leaf_positions = []
    #loop through A, which contains the postions of each falling leaf after a second
    for index, number in enumerate(A):
        #add the postion of the fallen leaf to leaf_positions
        leaf_positions.append(number)
        #create possible steps, which gets data from leaf_positions. Use dict.fromkeys to prevent duplicates.
        #Sort in ascending order
        possible_steps = sorted(list(dict.fromkeys(leaf_positions)), reverse=False)
        #create a list that contains all the required steps
        required_steps = list(range(1, X + 1))
        #when possible steps contains all the required steps, the frog can cross. Return the index, which is the time in seconds.
        if possible_steps == required_steps:
            print(index)
            return index
        #when we have completely looped through array A and still do not have all the required steps
        #return -1 to show crossing is not possible
        if index == len(A) - 1:
            print(-1)
            return -1
    
solution(5, [1, 3, 1, 4, 2, 3, 5, 4])
//Selection Sort divides the Input Array into two parts
//Sorted and UnSorted Part
//First of all find first smallest number in the unsorted array 
//and swap it with the first element , then find the second smallest number
// and swap it second element and repeat it till the array is sorted


function swap(array,index,min_index){
    [array[index], array[min_index]] = [array[min_index], array[index]]
}

function selection(arr) {
    let arr_length = arr.length;

    for (let i = 0; i < arr_length; i++) {
        //Set current iteration as index of minimum value
        let min_index = i;

        for (let k = i + 1; k < arr_length; k++) {
            // if current iterated value is less than specified minimum, then set its index as minimum index
            if (arr[k] < arr[min_index]) min_index = k;          
        }
        
        //Swap the current iterated value with minimum value
        //Swap only if current iterated index not equal to minimum index
        if (min_index !== i) swap(arr,i,min_index);
    }
    return arr;
}

let sorted_arr = selection([5, 2, 1, 4, 10])
console.log(sorted_arr); //[1,2,4,5,10]

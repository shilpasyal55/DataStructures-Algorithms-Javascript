//In bubble sort every pair of adjacent values is compared,
// and then the two values are swapped
// if the first value is greater than the second.
// This way during each pass through the array, 
// the largest value “bubbles up” to the top

function bubble(arr) {
    let arr_length = arr.length;
    let operations = 0;
    for (let i = 0; i < arr_length; i++) {       
        for (let k = 0; k < arr_length-i; k++) {
            if(arr[k] > arr[k+1]) {
                [arr[k] ,arr[k+1]] = [arr[k+1], arr[k]];
                operations++;
            }
        }   
    }
    // arr.map((i) => {
    //     arr.map((num,k) => {
    //         if (arr[k] > arr[k + 1]) {
    //             [arr[k] ,arr[k+1]] = [arr[k+1], arr[k]]
    //             operations++;
    //         }
    //     })
    // })
    console.log(operations); 
    return arr;
}

const sorted_array = bubble([1, 2, 6, 9, 4, 1, 2, 3, 5, 67, 8, 9, 2, 23, 5, 67, 7, 678, 2, 12, 34, 546, 567, 678, 890, 678, 34, 3453, 123, 345, 46, 57, 678, 4])
console.log(sorted_array);
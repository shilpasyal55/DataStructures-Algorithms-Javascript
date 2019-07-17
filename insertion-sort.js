//Insertion Sort

function insertion(arr) {
    let arr_length = arr.length;

    for( let i = 1; i < arr_length; i++ ) {
        let value = arr[i];
        let current_index = i;

        while(current_index > 0 && arr[current_index - 1] > value) {
            [arr[current_index],arr[current_index - 1]] = [arr[current_index - 1], arr[current_index]]
            current_index--;
        }
    }
   return arr; 
}

let result = insertion([5,2,7,1,8])
console.log(result);


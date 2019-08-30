//Binary Seacrh works on a sorted array
//It follows divide and conquer approach
//It repeatedly divides the array into half and compared the item with the middle element of array
//If middle element is the item to be searched then search is stopped there otherwise 
//we again search the one of half of the array is searched

function BinarySearch(list,item) {

    let start = 0;
    let end = list.length - 1;

    while(start <= end) {
        let mid = (start + end ) / 2
        if(list[mid] == item) return mid;
        else if ( item > list[mid]) start = mid + 1;
        else if (item < list[mid] ) end = mid - 1;     
    }
    return -1
}


let arr = [3,5,6,10,14,25,60]; 
console.log(BinarySearch(arr,5))



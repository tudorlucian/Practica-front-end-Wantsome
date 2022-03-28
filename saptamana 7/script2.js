 /* implementati fct computeSumOfArrayElements

 trebuie sa

 acepete ca argumnt un array din nr
 retrun suma nr din array
 foloseasca insctructia while

 */

 function computeSumOfArrayElements(arr){
     var sum=0;
     var i =0;

     while(i<arr.length){
         sum= sum+ arr[i];
         i++;
     }
     return sum;
 }
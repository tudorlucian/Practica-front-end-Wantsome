var userDetails = {name:"Daniel", age:22, sex:"M"};

var userInfo="Detaliile utilizatorului sunt"



WHILE

var i=0;
while(i<10) {
    console.log(i);
}

var i =0;

do{
console.log(i);
i++;

}
while (i<10)


var numberList =[7,9,-2,1,-13,40,24,15];

for(var i=0; i<numberList.length;i++){
    console.log(numberList);
}

var numberList =[7,9,-2,1,-13,40,24,15];

for(var i=0; i<numberList.length;i++){
    if(numberList[i]<0){
        break;
    }
    console.log(numberList[i]);
}


for(var i=0; i<numberList.length;i++){
    if(numberList[i]<0){
        continue;
    }
    console.log(numberList[i]);
}

for (var i =0; i<100; i++){
    //verificam daca nr este par
    if(i%2===0){
        continue;
    }
    //daca codul ajunge in aces punct, inseame ca i este impar si il afisez
    console.log(1+" este numar impar");

}


function countIndex(n){
    for(nr=0;nr<n; nr++){
        console.log("Sunt la iteratia numarul " + nr);
    }
}
countIndex(2);

function countIndexV2(n){
    var nr=0;
    while(nr<=n){
        nr++;
        console.log("Sunt la iteratia numarul " + n);
    }
}
countIndexV2(3);

function goOverArray(arr){
    for (var i= 0; i<=arr.length; i++) {
        console.log(arr[i]);
    }
}

var myArray = [1,2,3,4,5,6];
goOverArray(myArray);

function goOverArray2(arr){
    var i=0;
    while (i<arr.length);{
        console.log(arr[i]);
        i++;
    }
}

var myArray = [1,2,3,4,5,6];
goOverArray2(myArray);


//scrieti o fct care accepta ca argument un obiect si afiseaza in console elem acestuai prin parcurgerea sa

function goOverObject(myObj) {
    console.log(Object.values(myObj));
    for(var i=0; i<Object.values(myObj).length; i++){
        console.log(Object.vcalues(myObj)[i]);
    }
}



function goOverObject2(myObj){
    for (var key in myObj){
        console.log(myObj)[key];
    }
}

var myObj={
    name: "Mihai",
    city:"Paris"
};
goOverObject(myObj);
goOverObject2(myObj);
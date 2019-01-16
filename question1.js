/*MAP
Use .map to create a new array of objects where each object has a property for petnumber and pettype based on the elements in the array. Print the new array of objects.
let arr = ["dog", "cat", "pig", "hamster"];
let pet_objects = []; // new array to hold objects*/


mane();
function mane()
{
    let arr = ["dog","cat","pig","hamster"];  //defines function
    var pet_objects = arr.map(function(num,inx)  //maps
    {
        let dummyObj=[];    //variable that holds arr
        dummmyObj.petnumber = inx;
        dummyObj.pettype = num;
        return dummyObj;  //returns

    })
}
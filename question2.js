/*FILTER
Use .filter to create an array of pet objects that only holds the hamsters.*/
    let pets =
    [
    {name: 'Spot',type: 'Hamster'},
    {name: 'Harry', type: 'Hamster'},
    {name: 'Kitty', type: 'Cat'}
    ]

let only_ham = pets.filter(function(value,index) //filters
{
    let hamsters = [];
    for( i=0; i<pets.length;i++)     //goes through element in the arrway
    {
        if (pets[i].type == 'Hamster')  //finds hamster in type
        {
            hamsters.name=value;   //returns name of hamster
            hamsters.type= index;   //returns type
            return hamsters;
        }
    }
})

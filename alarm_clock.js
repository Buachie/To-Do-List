setTimeout(function() {
    console.log('Wake up Aaron!');
    
}, 5000) 

var students = ['jonathan', 'jenny', 'elliot']

// For each is a function that can be used on arrays

students.forEach(function (name){
    console.log(name); 
})

function forEach(myArray, myFunction){
    for (var i = 0; i < myArray.length; i++){
        myFunction(myArray[i]);
    }
}
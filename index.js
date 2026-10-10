var users = [
    {
        "name" : "Prabhas",
        "gender" : "Male",
        "image" : "image3.jpg"
    },

    {
        "name" : "Tamannah",
        "gender" : "Female",
        "image" : "image4.jpg"
    }
]

var index = 0;  
function toggleUser(){
    
    if(index == 0){
        index = 1;
    } else {
        index = 0;
    }

    document.getElementById("userName").innerHTML = users[index].name;
    document.getElementById("userGender").innerHTML = users[index].gender;
    document.getElementById("userImage").src = users[index].image;
}
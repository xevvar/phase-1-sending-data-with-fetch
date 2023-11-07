// Add your code here
// document.addEventListener('DOMContentLoaded', function(){

//     fetch("http://localhost:3000/dogs", {

//             method: "POST",
//             headers: {
//                 'Content-Type':'application/json',
//                 accept:'application/json',
//             },
//             body: JSON.stringify({
//                 dogName:'Byron',
//                 dogBreed:'Poodle',
//             })

//     });

// })

function submitData (userName , userEmail){
    const data = {
    name: userName,
    email: userEmail,
        
    }
    
   const postObject = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type":"application/json",
            accept:"application/json"
        }
    
    }
    return fetch("http://localhost:3000/users" , postObject)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
       
        document.querySelector("body").textContent = data.id 
    })
    .catch((err) => {
        document.querySelector("body").textContent = err.message;
      });

}
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"; 


// // TODO: Add SDKs for Firebase products that you want to usem
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCG1-5DDC9eoPs2ffBIib_JKJL7iQRY8Mc",
//   authDomain: "e-learning-8b995.firebaseapp.com",
//   projectId: "e-learning-8b995",
//   storageBucket: "e-learning-8b995.appspot.com",
//   messagingSenderId: "584643760969",
//   appId: "1:584643760969:web:b45301304c720cdec34098"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// //inputs
// const email = document.getElementById('email').value;
// const password = document.getElementById('password').value;
// //sub,it
//  const submit = document.getElementById('submit');
//  submit.addEventListener("click",function(event){
//      event.preventDefault()
//     //  alert(5);
//     firebase.auth().createUserWithEmailAndPassword(email,password)
//     .then((userCredential) => {
//         const user = userCredential.user;
//         alert("creating account")

//     })
//     .catch((error) =>{
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         alert(errorMessage)
//     }); 
//  })

// Import the functions you need from the SDKs you need
// const { initializeApp }= require("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js") ;
// const { getAuth, signInWithPopup, GoogleAuthProvider } = require("https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js")
// // import { } from "firebase/auth";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCG1-5DDC9eoPs2ffBIib_JKJL7iQRY8Mc",
//   authDomain: "e-learning-8b995.firebaseapp.com",
//   projectId: "e-learning-8b995",
//   storageBucket: "e-learning-8b995.appspot.com",
//   messagingSenderId: "584643760969",
//   appId: "1:584643760969:web:b45301304c720cdec34098"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// // Add an event listener to the submit button
// const btn = document.getElementById('submit');
// console.log(btn)
// button.addEventListener('click', () => {
// alert("hello")
// });

// function handleClick() {
// alert("hello")
//     // // Get the email and password input values
//     // var email = document.getElementById('email').value;
//     // var password = document.getElementById('password').value;

//     // // Create a new user with email and password
//     // firebase.auth().createUserWithEmailAndPassword(email, password)
//     //     .then((userCredential) => {
//     //         const user = userCredential.user;
//     //         console.log('User created:', user);
//     //         alert("Account created successfully!");
//     //     })
//     //     .catch((error) => {
//     //         const errorCode = error.code;
//     //         const errorMessage = error.message;
//     //         alert(`Error: ${errorMessage}`);
//     //     });
//     signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // IdP data available using getAdditionalUserInfo(result)
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.customData.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });


// }


const input = document.getElementById('email').value;
 const password = document.getElementById('password').value;
const btn = document.getElementById('submit');
// console.log(btn)
btn.addEventListener("click",function(){
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
    // Extract the email from the input
    const email = input.trim();

    // Validate the email
    if (emailPattern.test(email)) {
        alert("Login Successful");
        return true;

    } else {
        return false;
    }
});

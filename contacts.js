// document.getElementById("Contacts").innerHTML = `<a class="nav-link activePage border-2 border-bottom" href="contacts.html">Contacts</a>`

const firebaseConfig = {
  apiKey: "AIzaSyBqLw4XBhrkF9BG-jJmw__whyZzezF2axc",
  authDomain: "project2-20071.firebaseapp.com",
  projectId: "project2-20071",
  storageBucket: "project2-20071.appspot.com",
  messagingSenderId: "361916779609",
  appId: "1:361916779609:web:5d7936bed2810d414bf548",
  measurementId: "G-S19VYQW0X5"
};

firebase.initializeApp(firebaseConfig);

let dbase = firebase.firestore();

  let submitBtn = document.getElementById("submitBtn");

  submitBtn.addEventListener("click", function(){

  let enterName = document.getElementById("enterName").value;
  let enterEmail = document.getElementById("enterEmail").value;
  let enterPhone = document.getElementById("enterPhone").value;
  let enterMessage = document.getElementById("enterMessage").value;

  if (enterName == ""){
    alert ('Name field must be required to fill up!');
    return false;
  }
  if(enterEmail == ""){
    alert ('Email field must be required to fill up!');
    return false;
  }
  if(enterPhone == ""){
    alert ('Phone field must be required to fill up!');
    return false;
  }
  

  dbase.collection("NameUser").add({
    Name : enterName,
    Email: enterEmail,
    Phone : enterPhone,
    Message : enterMessage,
  })
  .then(function(docRef){
    alert ("Successfully submit informations!", docRef.id);
    window.location.href = "contacts.html";
  })
  .catch(function(error){
    alert ("Error submitting informations!", error);
  });
});


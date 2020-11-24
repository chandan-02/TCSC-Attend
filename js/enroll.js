var config = {
    apiKey: "AIzaSyDVuSMLXGza8J6cxn0rE9CstltjyN40DiY",
    authDomain: "attend-5e815.firebaseapp.com",
    databaseURL: "https://attend-5e815.firebaseio.com",
    projectId: "attend-5e815",
    storageBucket: "attend-5e815.appspot.com",
    messagingSenderId: "192205142266",
    appId: "1:192205142266:web:38c34e8b08e06558c4f143",
    measurementId: "G-6QHRLDWXEF"
 };
firebase.initializeApp(config);

function mainActivity(){
    var nameRef = document.getElementById("nameAuto").value
    var rollRef = document.getElementById("rollAuto").value

    firebase.database().ref('Enrolled/'+rollRef).set({
        name: nameRef,
      },()=>{
          alert("Data succesfully updated !")
          chrome.storage.sync.set({
              userName : nameRef,
              rollMain : rollRef,
              url : 'none'
          },()=>{
              console.log("All Done")
          })
      });
}

document.addEventListener('DOMContentLoaded',function(){
    var enrollRef = document.getElementById("enrollS");
    enrollRef.addEventListener('click',()=>{
        var nameRef = document.getElementById("nameAuto").value
        var rollRef = document.getElementById("rollAuto").value

        if(nameRef != "" && rollRef != "" && rollRef.length == 4){
            mainActivity()
        }
    })
})
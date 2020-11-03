
function storeData(){
    var name = document.getElementById("fullName").value
    var email = document.getElementById("emailMain").value
    var div = document.getElementById("divT").value
    var roll = document.getElementById("rollMain").value
    if(document.querySelector("#autoSubmit:checked") !== null){
        status="Enabled"
    }else{
        status="Disabled"
    }

    chrome.storage.sync.remove(['name','email','div','roll','status'],()=>console.log("DATA REMOVED FROM CHROME STORAGE"))
    chrome.storage.sync.set({
        'name' :name,
        'email':email,
        'div':div,
        'roll':roll,
        'status':status
    }, function() {
        // console.log(status)
        alert("Data Saved to Local Storage Successfully!")
      });

    console.log(name+" "+email+" "+roll+" "+div +" "+status)
}

document.addEventListener('DOMContentLoaded',function(){
    var submit = document.getElementById("submit")
    submit.addEventListener('click',()=>{
        storeData()
    })
})
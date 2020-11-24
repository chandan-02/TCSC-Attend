document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('mark').addEventListener('click',()=>{
        chrome.storage.sync.remove(['url'],function(){
            console.log("Previous Link removed")
        })
        newURL = document.getElementById("url").value
        chrome.storage.sync.set({
            'url':newURL
        },()=>{
            console.log("Processing...")
            // if (newURL != ""){
            //     window.open(newURL)
            // }
            if(newURL.includes("https://")){
                window.open(newURL)
            }
        })
    })
})

document.addEventListener('click',()=>{
        chrome.storage.sync.get(['status','name','warning'], function(result) {
            if(result.status == "Enabled"){
                document.getElementById("bool").style="color:green"
            }else{
                document.getElementById("bool").style="color:red"
            }
            document.getElementById("bool").textContent = result.status
            console.log("DOM : "+document.getElementById("bool").textContent)
        });
   
})

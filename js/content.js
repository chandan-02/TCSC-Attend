//MAIN
// Reference of Submit Button on Google Form -> document.getElementsByClassName("appsMaterialWizButtonEl")[1].click()
// Reference of All "required" input fields -> document.querySelector(".exportInput")[n]  <- This does not seems the right way to do things ?
//use "i`n`" 1-5-9-13 difference of 3 for labels.
//almost alpha complete sleep's right place unknown

if (document.readyState !== "loading") {
    console.log("Document is already ready");
    submit();
} else {
    document.addEventListener("DOMContentLoaded", function () {
        console.log("For some reasons DOM was not loaded earlier. Now good to go");
        submit();
    });
}

function main(){
    chrome.storage.sync.get(["name", "email", "roll", "div"],(data)=>{

        var classN = document.getElementsByClassName("exportInput").length;
        var len = classN * 4;

        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        var count=0;
        async function specialEmail() {
            
            const ref = document.querySelector(`[aria-label="Your email address"]`)
            if(ref){
                count=5;
                chrome.storage.sync.set({'warning':'true'},()=>console.log("They got our real email"));
               
                const reref =  document.querySelector(`[aria-label="Your email address"]`);
                reref.focus();
                document.execCommand('insertText',true,data.email);
                } else {
                    count=1;
            }
            await sleep(1000)
        }//specialfun()

        specialEmail();

        async function name(){
            for(let i = count ; i <= len ;i+=4){
                await sleep(1000);
                let idMain = "i" + i
                if ( document.querySelector("#" + idMain).textContent.toLowerCase().includes(["name"]) ) {
                    const namekeLiye = document.querySelector(`[aria-labelledby=${idMain}]`);
                    namekeLiye.focus();
                    document.execCommand("insertText", false, data.name);
                    break;
                }else {
                    console.log("name : Not email/roll")
                }
            }//for loop   
        }//name function

        name();

        async function email(){
            for(let i = count ; i <= len ;i+=4){
                await sleep(1000);
                let idMain = "i" + i
                if ( document.querySelector("#" + idMain).textContent.toLowerCase().includes(["email"]) ) {
                    const namekeLiye = document.querySelector(`[aria-labelledby=${idMain}]`);
                    namekeLiye.focus();
                    document.execCommand("insertText", false, data.email);
                    break;
                }else {
                    console.log("email : Not name/roll ")
                }
            }//for loop   
        }//email function

        email();

        async function roll(){
            for(let i = count ; i <= len ;i+=4){
                await sleep(1000);
                let idMain = "i" + i
                if ( document.querySelector("#" + idMain).textContent.toLowerCase().includes(["roll"]) ) {
                    const namekeLiye = document.querySelector(`[aria-labelledby=${idMain}]`);
                    namekeLiye.focus();
                    document.execCommand("insertText", false, data.roll);
                    break;
                }else {
                    console.log("roll : Not email/name ")
                }
            }//for loop   
        }//roll function
        
        roll();

        async function rollN(){
            for(let i = count ; i <= len ;i+=4){
                await sleep(1000);
                let idMain = "i" + i
                if ( document.querySelector("#" + idMain).textContent.toLowerCase().includes(["r.no"]) ) {
                    const namekeLiye = document.querySelector(`[aria-labelledby=${idMain}]`);
                    namekeLiye.focus();
                    document.execCommand("insertText", false, data.roll);
                    break;
                }else {
                    console.log("roll : Not email/name ")
                }
            }//for loop   
        }//roll function
        
        rollN();

        async function div(){
            for(let i = count ; i <= len ;i+=4){
                await sleep(1000);
                let idMain = "i" + i
                if ( document.querySelector("#" + idMain).textContent.toLowerCase().includes(["div"]) ) {
                    const namekeLiye = document.querySelector(`[aria-labelledby=${idMain}]`);
                    namekeLiye.focus();
                    document.execCommand("insertText", false, data.div);
                    break;
                }else {
                    console.log("div : Not email/name/roll ")
                }
            }//for loop   
        }//roll function
        
        div();
    })
}
  
function submit(){
    chrome.storage.sync.get(['status'],(data)=>{
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        main(); 
        async function waitAndDo() {
            await sleep(7000)
            if(data.status.toLowerCase() == 'enabled'){
                document.getElementsByClassName("appsMaterialWizButtonEl")[0].click().then(alert("Done"))
            }else{
               console.log("Auto Submit Disabled")
            } 
        }

        waitAndDo();
    })
}
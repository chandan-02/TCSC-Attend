//i m shit .ekdum tatti
function main() {
    chrome.storage.sync.get(["name", "email", "roll", "div", "status"], (res) => {
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }
        var classN = document.getElementsByClassName("exportInput").length;
        var len = classN * 4;

        for (var i = 1; i <= len; i += 4) {
            name(i);
        }

        function name() {
            idMain = "i" + i;
            try {
                if (
                    document
                        .querySelector("#" + idMain)
                        .textContent.toLowerCase()
                        .includes(["name"])
                ) {
                    setTimeout(()=>{
                        const namekeLiye = document.querySelector(
                            `[aria-labelledby=${idMain}]`
                        );
                        namekeLiye.focus();
                        document.execCommand("insertText", false, res.name);
                        namekeLiye.dispatchEvent(new Event("change", { bubbles: true }));
                        console.log("Andar hai hum Name");
                    },2000)
                   
                }
            } catch (error) {
                console.log(error);
            }
        }
        name();
    });
}

var count = 0;

async function specialEmail() {
    const ref = document.querySelector('[aria-label=Your email address]')
    if(ref){
        count=5;
        ref.focus();
        document.execCommand('insertText',true,'explae@email.com')
    } else {
        count=1;
    }
}
//Listen for changes on main branch and act accordingly.

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

firebase.database().ref('Main/').on('value', (res) => {
    var name = [];
    var link = null;
    container = res.val()
    console.log(container)
    for (var key in container) {
        name.push(key)
        link = container[key]
    }
    //Aise hi 
    chrome.storage.sync.get(["userName", "url"], (data) => {
        if (data.url != link) {
            name.forEach(el => {
                // console.log(el)
                if (data.url == "none") {
                    console.log(el)
                    if (el == data.userName) {
                        chrome.storage.sync.set({
                            url: link,
                            done: true
                        })
                        window.open(link)
                    }
                } else {
                    if (el == data.userName) {
                        chrome.storage.sync.set({
                            url: link,
                            done: true
                        })
                        window.open(link)
                    }
                }
                //heyehey
            });
        }
    })
    //  container.forEach(key => {
    //      console.log(key)
    //  });
    //  firebase.database().ref('Test/').set(container)
})

chrome.storage.sync.get(["done", "userName"], (d) => {
    if (d.done) {
        var uN = d.userName
        var objStatus = { [uN]: 'Done' }
        firebase.database().ref('Status/').update(objStatus)
        chrome.storage.sync.set({
            done: false
        })
    }
})


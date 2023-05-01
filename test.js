var p = new Promise(function(resolve, reject) {
    setTimeout(function() {
    resolve("Hello");
    }, 2000);
    }).then();
    var p2= p.then(function(data) {  return data + "John"; })
    p2.then((message)=>{ 
        console.log(message) })
function saveFile (data) {
    var FileSaver = require('file-saver');
    var currentdate = new Date(); 
    var datetime = "Last Save: " + currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    var input = JSON.stringify(data)
    var blob = new Blob(input, {type: "text/plain;charset=utf-8"});
    FileSaver.saveAs(blob, datetime + "hello world.txt");
}
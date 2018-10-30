// Data for the "HTML Lists" Page

var fruits = [ "Apples","Oranges","Pears","Grapes","Pineapples","Mangos" ];

var directory = [
    {type: "file", name: "file1.txt"},
    {type: "file", name: "file2.txt"},
    {type: "directory", name: "HTML Files", files: [{type: "file", name: "file1.html"},{type: "file", name: "file2.html"}]},
    {type: "file", name: "file3.txt"},
    {type: "directory", name: "JavaScript Files", files: [{type: "file", name: "file1.js"},{type: "file", name: "file2.js"},{type: "file", name: "file3.js"}]}
];

window.onload =  function() {
    //Fruits list
    var listElements = document.querySelector("#list");
    var list = "<ol> "
    for (var i = 0; i < fruits.length; i++){
        list += "<li>" +fruits[i] +"</li>";
        if (i == fruits.length){
            list += "</ol>";    
        }
    }
    listElements.innerHTML = list;   

     //Directories list
     var list2Elements = document.querySelector("#list2");
     list2 = "<ul>"
     for (i = 0; i < directory.length; i++){
         if(directory[i].type == "file"){
             list2 += "<li>" +directory[i].name +"</li>"
         }
         else if (directory[i].type == "directory") {
             list2 += directory[i].name + "<ul>";            
                for(var j = 0; j < directory[i].files.length; j++){                
                 list2 += "<li>" + directory[i].files[j].name + "</li>";            
             }
             list2 += "</ul>";
         }

     }
     list2 += "</ul>";
     list2Elements.innerHTML = list2;
}


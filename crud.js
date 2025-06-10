// crud,create,read,update,delete


//Global variable





var row = null;

function Submit(){
    var dataEntered= retrieveData();
    var readData= readingDataFromLocalStorage(dataEntered); 
   if(row==null){
    insert(readData);

    Msg.innerHTML= "data inserted";
   }
   else{
    update();
     Msg.innerHTML= "data update";

   }
   
}

// create 
// retrieve Data from form
function retrieveData() {
    var name1= document.getElementById("name").value;
    var job= document.getElementById("job").value;
    var exp= document.getElementById("exp").value;
    
    var arr=[name1,job,exp];
    return arr;

}
//read
// data in local Storage
function readingDataFromLocalStorage(dataEntered){
// storing data local storage
var n = localStorage.setItem("name1",dataEntered[0]);
var j = localStorage.setItem("job",dataEntered[1]);
var e = localStorage.setItem("experience",dataEntered[2]);

// getting values from local to table
var n1 = localStorage.getItem("name1",n);
var j1 = localStorage.getItem("job",j);
var e1 = localStorage.getItem("experience",e);
var arr= {n1, j1, e1};
return arr;
 
}
//insert  
function insert(readData){ 
     var row = table.insertRow();
    row.insertCell(0).innerHTML = readData.n1;
     row.insertCell(1).innerHTML = readData.j1;
     row.insertCell(2).innerHTML = readData.e1;
     row.insertCell(3).innerHTML=`<button onclick =edit(this)>Edit</button>
                                   <button onclick = remove(this)>Delete</button>`;
}
//edit
function edit(td) {
    row = td.parentElement.parentElement;
    document.getElementById("name").value = row.cells[0].innerHTML;
    document.getElementById("job").value = row.cells[1].innerHTML;
    document.getElementById("exp").value = row.cells[2].innerHTML;
}
//updata
function update(){
    row.cells[0].innerHTML = document.getElementById("name").value;
    row.cells[1].innerHTML = document.getElementById("job").value;
    row.cells[2].innerHTML = document.getElementById("exp").value;
row = null;
}
//remove
function remove(td){
    var ans = confirm("do you want to delete this record?")
    if (ans == true){
    row = td.parentElement.parentElement;
    document.getElementById("table").deleteRow(row.rowIndex);
    }
}

let addtask = document.getElementById("Add-Task");
addtask.addEventListener("click", addListItem);
let enterData = document.getElementById("data-enter");
enterData.addEventListener("keypress", function abc(e){
    // console.log(e.code);
    if(e.code === "Enter"){
        addListItem();
    }
})

function addListItem(){

    let inputvalue = document.getElementById("data-enter");
    if(inputvalue.value.length === 0){
        alert("No data entered");
    }else{
        
        let contentToAdd = inputvalue.value;
        inputvalue.value = "";
        let newListEle = document.createElement('li');
        let listItems = document.getElementById("list-items");
        let elecount = listItems.childElementCount + 1;
        let content = document.createTextNode(contentToAdd);
        newListEle.appendChild(content);

        newListEle.id = "item " + elecount;
        listItems.appendChild(newListEle);

    }
}
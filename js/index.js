// Name - Diya Diya
// Student number - 200489015
// Assignemnt - 3
// Course - COMP1073 Client-Side JavaScript
let table = document.querySelector('table');
let text = document.querySelector('input');
let addBtn = document.querySelector('button');
// Created an addBtnFunction() to add items to the to do list
function addBtnFunction() {
    let textValue = text.value;
    text.value = '';
    //if condition to check whetehr something is entered in the textfield or not
    if (textValue === '') {
      // If nothing is added to the textfield a message will pop up
        alert("Enter your work to be done.");
        return false;
    }
    // If something is added to the textfield it will perform the following 
    else {
        var tr = document.createElement('tr');
        let span = document.createElement('span');
        let removeBtn = document.createElement('button');

        span.textContent = textValue;
        
        var checkbox = document.createElement("INPUT");
        checkbox.setAttribute("type", "checkbox");

        removeBtn.textContent = 'Remove';
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');
        let td3 = document.createElement('td');
        
        td1.appendChild(checkbox);
        td2.appendChild(span);
        td3.appendChild(removeBtn);

        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        //Created a function for the checkbox clicked 
        function checkboxClicked() {
            span.style.textDecoration = "line-through";
            table.appendChild(tr);
        }
        // Created an event listener for the chechbox
        checkbox.addEventListener('change', checkboxClicked);
        table.appendChild(tr);

        // Created a function for the remove button clicked
        function removeBtnClicked() {
            table.removeChild(tr);
        }

        //Created an event listener for the remove button
        removeBtn.addEventListener("click", removeBtnClicked);
    }
}
// Created an event listener for the add button
addBtn.addEventListener("click", addBtnFunction);
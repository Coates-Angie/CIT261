//Select the Elements
const clear = document.querySelector(".clear");
const dateElement = document.getElementById("date");
const list = document.getElementById("list");
const input = document.getElementById("input");

// Class Names for the check, or not checked function
const Check = "fa-check-circle";
const Uncheck = "fa-circle";
const Line_Through = "lineThrough";

// Variables
let List, id;

//get Item list from local storage
let data = localStorage.getItem("ITEM");

if (data) {
    List = JSON.parse(data); // Using JSON to parse the data to the list
    loadList(List); //load the list to the user interface
    id = List.length; // set the id to the last one in the list
} else {

    //Christmas list Array
    List = [];
    id = 0;
}
//load items to the user's interface
function loadList(array) {
    array.forEach(function(item) {
        addNewItem(item.name, item.id, item.done, item.trash);
    });
}

//Clear local storage and refresh page added event listener with a click event to clear list info
clear.addEventListener("click", function() {
    localStorage.clear();
    location.reload();
});

//Show todays Date also shows array for options how to display date
const today = new Date();
const options = { weekday: 'long', month: 'short', day: 'numeric' };
dateElement.innerHTML = today.toLocaleDateString("en-US", options);

function addNewItem(newItem, id, done, trash) {
    if (trash) { return; }

    const Done = done ? Check : Uncheck;
    const Line = done ? Line_Through : "";

    const item = `<li class="item">
                    <i class="far ${Done}" job="complete" id="${id}"></i>
                    <p class="text ${Line}">${newItem}</p>
                    <i class="fas fa-trash-alt" job="delete" id="${id}"></i>
                </li>`;

    const position = "beforeend";

    // DOM insertadjacentHTML()
    list.insertAdjacentHTML(position, item);
}

// Event listener keyup with event keyCode is used to know if the enter key was pressed (enter keycode is 13)
document.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        //Get the value of the input and check if the input is empty. add the list item and empty the input.
        const newItem = input.value;
        if (newItem) {
            addNewItem(newItem, id, false, false);

            List.push({
                name: newItem,
                id: id,
                done: false,
                trash: false
            });

            //Add item to localstorage
            localStorage.setItem("ITEM", JSON.stringify(List));

            id++;
        }

        input.value = "";
    }
});

//Function to indicate if an item is checked complete or not
function completeNewItem(element) {
    element.classList.toggle(Check);
    element.classList.toggle(Uncheck);
    element.parentNode.querySelector(".text").classList.toggle(Line_Through);

    //List array
    List[element.id].done = List[element.id].done ? false : true;
}

//Remove the list item
function removeNewItem(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);

    List[element.id].trash = true;
}
//target an element created dynamically
list.addEventListener("click", function(event) {
    const element = event.target;
    const elementJob = event.target.attributes.job.value;
    //delete or complete job
    if (elementJob == "complete") {
        completeNewItem(element);
    } else if (elementJob == "delete") {
        removeNewItem(element);
    }
    //Add item to localstorage
    localStorage.setItem("ITEM", JSON.stringify(List));

});
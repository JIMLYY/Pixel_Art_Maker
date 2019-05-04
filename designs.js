// Select color input
const colorPick=document.querySelector('#colorPicker');

// Select size input
const width=document.querySelector('#inputWidth');
const height=document.querySelector('#inputHeight');

// When size is submitted by the user, call makeGrid()
const submitButton=document.querySelector('[type=submit]');
const tableBody=document.querySelector('table');

// track the number of clicks 
var clickNumber=0;

// prevent the default behavior only when no cells have been clicked.
submitButton.addEventListener('click', function(event){
    if(clickNumber==0){event.preventDefault();}
});

// makegrid in response to click event
submitButton.addEventListener('click', makeGrid);

/* 
make the table according to the input of users on height and width
clear the table every time before generating the new table 
*/
function makeGrid(){ 
    tableBody.innerHTML="";
    for (let rowInput = 0; rowInput < height.value; rowInput ++){  
        var row = document.createElement('tr');
        for (let colu = 0; colu < width.value; colu ++){
            var cell = document.createElement('td'); 
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    }
};

// add color to the specific cell and track the number of clicks
tableBody.addEventListener('click', function(event){
    if(event.target.nodeName!=='TABLE' && event.target.nodeName!=='TR'){
    event.target.style.backgroundColor=colorPick.value;
    return clickNumber+=1;}
})


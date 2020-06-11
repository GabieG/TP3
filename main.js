
function showUsers()
{
    var bouton = document.getElementById("User");
    bouton.innerHTML = 'Utilisateur';
    bouton.onclick = function(){showUsers()};

    document.getElementById("tab_Task").style.display = "none";
    document.getElementById("Form").style.display = "block";
    document.getElementById("tab_User").style.display = "block";
}
function showTasks()
{
    var bouton = document.getElementById("Task");
    bouton.innerHTML = 'Tâches';
    bouton.onclick = function(){showTasks()};

    document.getElementById("tab_Task").style.display = "block";
    document.getElementById("Form").style.display = "none";
    document.getElementById("tab_User").style.display = "none";
}
// Avec function(data) : 
// On peut voir dans "Inspecter" du navigateur que la console affiche
        //data -> Array(200)
            // -> [0 ... 99]
            // -> [100 ... 199]
            //  length:200
            // __proto__: Array(0)
function getTask()
{
    fetch('https://jsonplaceholder.typicode.com/todos') // url
    .then(response => response.json())  // Transform the data into json
    .then(function (data) {
        console.log('data', data) 
        // Here you get the data to modify as you please
    })                           	 
    .catch(function(error) {
        // If there is any error you will catch them here
        console.log(error);
    });   
}

function createTask(userId, id, title, completed)
{
    
} 

function nextPage(data){
    if(first+numberOfItems<=letterList.length){
    first+=numberOfItems;
    actualPage ++;
    showData(data);
    }
}
function previous(data){
    if(first-numberOfItems >= 0){
      first-=numberOfItems
      actualPage --;
      showData(data);
    }
}
function firstPage(data){
    first = 0
    actualPage = 1;
    showData(data);
}

let maxPages = Math.ceil(letterList.length / numberOfItems );
function lastPage(data){
  first = (maxPages * numberOfItems)-numberOfItems;
  actualPage = maxPages;
  showData(data); 
}
function showPageInfo(){
    document.getElementById('pageInfo').innerHTML = `
      Page ${actualPage} / ${maxPages}
    `
}
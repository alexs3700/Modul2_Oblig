// Controller functions
function getMaxExercises() {
    let excerciseArray = [];
    let temp1 = model.maxes;
    let html = '';
    for (let elem1 in temp1) {
        let temp2 = temp1[elem1];
        let excercise = temp2.excercise;
        excerciseArray.push(excercise);
    }

    html += `<select class="large">`;

    for (let element in excerciseArray) {
        html += `<option>${excerciseArray[element]}</option>`
    }
    html += `</select>`;

    html += `<br><br>`;

   
    return html;
   
    }
    

function getWorkout(i) {
    let workout = model.workouts[i];
    
   return workout;     
    
}
    

function createTableForAllWorkouts() {
    let html = ``;
    let numOfWorkouts = model.workouts.length;
    html += `<table>
                    <caption>Overview of workouts so far.</caption>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Time</th>
                    </tr>
               
            `;

    for (let i = 0; i<numOfWorkouts; i++) {
        let description = getDescription(i);
        let date  = description.date;
        let time = description.time;
        let place = description.place;

        

        html += `<tr>
                    <td>${date}</td>
                    <td>${place}</td>
                    <td>${time}</td>
                </tr>`;
    }

    html += `</table>`;
    document.getElementById('workouts').innerHTML = html;
  
}

function getDescription(i) {
    // Gets description for the i'th workout
    let workout = getWorkout(i);
    let description = null;
    for (let elem in workout) {
        description = workout[elem].description;            
    }
    return description;  
    
}

function listMaxLifts() {
    
    let numOfMaxes = 0;

    for (let elem in model.maxes) {
    numOfMaxes++;
    }
    let maxes = model.maxes;
    let html = '';

    html += `<table>
                <caption>Maxes so far </caption>
                    <tr>
                        <th>Exercise</th>
                        <th>Max</th>
                    </tr>`;

   
    for (let elem in maxes) {
        let excercise = maxes[elem].excercise;
        let max = maxes[elem].max;
        html += `<tr>
                        <td>${excercise}</td>
                        <td>${max}</td>
                    </tr>`;
                }                

    html +=  `</table>`;

    html += `<hr>`

    html += `<br><br>`;

    html += createNewMax();
            
    html += `<br><br>`;

    document.getElementById('maxes').innerHTML = html;

    
            }


let x = null;

function createNewMax() {
        // let maxOptions = getMaxExcercises();
        let html = `<div> <h3>New max for an excercise with a max defined at start.</h3>
                    <input
                        id="changeMaxForExcercise"
                        class="larger"
                        type="text"
                        value="benkpress"
                    />        
               
        <input
                    id="newMax"
                    class="larger"
                    type="text"
                    value="125"
                />

            </br></br>
          


            
        <input
                    class="larger"
                    type="button"
                    value="Change max"
                    onclick="changeMax()"
                    />

        <hr>
        <br><br>
                <div> <h3>Add a new excercise and its max value </h3>
                <input
                        id="newExcercise"
                        class="larger"
                        type="text"
                        value=""
                    />   
                    
                </div>
                   

        <input
                    id="newExcerciseAndMax"
                    class="larger"
                    type="text"
                    value=""
                />

      
            <hr>

        <input
                    class="larger"
                    type="button"
                    value="New excercise with a max"
                    onclick="addNewMax()"
                    />`;


    
        
       return html;
}


function getStatistics() {
    let totalTime = calculate();
    let arr =  calculateVolume();

    // let numOfWorkouts = arr[0].length;

    let lifted1 = arr[0][0];
    let lifted2 = arr[0][1];
    let lifted3 = arr[0][2];


    let numOfWorkouts = arr[3];
    let averageTime = totalTime / numOfWorkouts;
    averageTime = Math.round(averageTime);

    let averageVolume = arr[1];
    let totalVolume = arr[2];

    let statistics = ``;

    statistics = `<table>
                    <caption>Workout statistics </caption>
                    <tr>
                        <th>Average time spent</th>
                        <th>Total time </th>
                        <th>Average volume</th>
                        <th>Total volume</th>
                        <th>Number of workotut</th>
                    </tr>

                    <tr>
                        <td>${averageTime}</td>
                        <td>${totalTime}</td>
                        <td>${averageVolume}</td>
                        <td>${totalVolume}</td>
                        <td>${numOfWorkouts}</td>
                    </tr>
                </table>
        `;
        document.getElementById('statistics').innerHTML = statistics;

    


}



function calculate() {
    let totalTime = null;
    let averageTime = null;
    let numOfWorkouts = model.workouts.length;
    for (let j = 0; j<numOfWorkouts; j++) {
        let temp  = getDescription(j);
        let time = temp.time;
        totalTime += time;
    }       

    averageTime = totalTime / numOfWorkouts;


    return totalTime;
}



// addNewMax('flat benk med strikk', 105);

// console.log(model.maxes);

function addNewMax() {
    let newExcercise = document.getElementById('newExcercise').value;
    let newMax = document.getElementById('newExcerciseAndMax').value;


    

    let maxObject = {excercise: newExcercise, max: newMax};
    // console.log(maxObject);
    

    model.maxes.push(maxObject);
 
    listMaxLifts();

    document.getElementById('newExcercise').value = null;
    document.getElementById('newExcerciseAndMax').value = null;
}
    



function changeMax() {
    let excercise = document.getElementById('changeMaxForExcercise').value;
    let newMax = document.getElementById('newMax').value;

    console.log(excercise, newMax);


    let maxes = model.maxes;
    let index = null
    for (let elem in maxes) {
        let temp = maxes[elem].excercise;
        let max = maxes[elem].max;
    
        if (temp == excercise) {
            index = elem;                
        }
      
    }

    newMax = parseInt(newMax)
    model.maxes[index].max = newMax;
    // showMaxes();
    // console.log(model.maxes);

    listMaxLifts();
    document.getElementById('changeMaxForExcercise').value = null;
    document.getElementById('newMax').value = null;
    
}



function calculateVolume() {
    let excercise = null;
    let numOfWorkouts = model.workouts.length;

    let liftedArray = [];

    let totalVolume = null;

    

    for (let i = 0; i<numOfWorkouts; i++) {
        let temp1 = getExcercises(i);
        let volumePerWorkout = null;
        for (let elem1 in temp1) {               
            let lifted = temp1[elem1].lifted;
            let sets = temp1[elem1].sets;
            let reps = temp1[elem1].reps;

            

            let temp2 = (lifted * sets * reps)
            volumePerWorkout += temp2

            
            }
        liftedArray.push(volumePerWorkout);

            
        }
        
        for (let i = 0; i<numOfWorkouts; i++) {
            totalVolume += liftedArray[i]
        }
        // console.log(totalVolume);

        let averageVolumePerWorkout = totalVolume / numOfWorkouts;


        let array = [liftedArray,averageVolumePerWorkout, totalVolume,numOfWorkouts];
        return array;
    }

function createDescriptionTable(j) {
    let description = getDescription(j);

    let date = description.date;
    let clock = description.clock;
    let place = description.place;
    let time = description.time;
    let lifted = description.lifted;

    let html = `
                <table id="descriptionTable" title="Description">
                    <caption>Description for current workout</caption>                    
                    <tr>
                        <th>Date</th>
                        <th>Clock</th>
                        <th>Place</th>
                        <th>Time</th>
                    </tr>
                    <tr>
                        <td>${date}</td>
                        <td>${clock}</td>
                        <td>${place}</td>
                        <td>${time}</td>
                    </tr>
                </table>`;
    document.getElementById('description').innerHTML = html;
}


function getExcercises(i) {
    // Return collection of every excercises for the i'the workout
    let workout = getWorkout(i);
    let excercises = null;
    let excercise = null;
    let sets = null;
    let reps = null;
    let lifted = null;


    let arr1 = [];

    for (let elem in workout) {
        excercises  = workout[elem].excercises;
    }
    for (let elem in excercises) {
        excercise = excercises[elem].excercise;
        sets = excercises[elem].sets;
        reps = excercises[elem].reps;
        lifted = excercises[elem].lifted;

        let obj = {excercise: excercise, sets: sets, reps: reps, lifted: lifted};
        
        arr1.push(obj);
       
    }
    // console.log(arr1)
    return arr1;       
}



function createTable(j) {
    let htmlTable = document.getElementById('currentWorkout');
    let excercises = getExcercises(j);
    // console.log(excercises);

    let len = excercises.length;
    // console.log(excercises);

    let temp1 = null;

    if (j == 0) {
        temp1 = 'workout1';
    }

    if (j == 1) {
        temp1 = 'workout2';
    }
      

    if (j == 2) {
        temp1 = 'workout3';
    }

    // setCurrentWorkout(j);

    let description = getDescription(j);
    // console.log(description);

    // console.log(description);
    // console.log(time);
      
         

    let html = `<h1>Current Workout: ${temp1} </h1>`;

    html += createDescriptionTable(j);

    html += `
                <table>
                    <caption>Excercises from current workout</caption> 
                    <tr> 
                        <th>Excercise</th>
                        <th>Sets</th>
                        <th>Reps</th>
                        <th>Lifted</th>
                    </tr>`;
    for (let i = 0; i<len; i++) {
        html += createTableRow(i, j);
    }
    html += `</table>`;

  

    html += selectWorkout();




    htmlTable.innerHTML = html;
}



function createTableRow(i, j) {  
    let arr1 = getExcercises(j);    
    let temp1 = arr1[i];
 

    let excercise = temp1.excercise      
   
    let sets = temp1.sets;
    let reps = temp1.reps;
    let lifted = temp1.lifted;

    // console.log(excercise, sets, reps, lifted);
           
       let html2 = `<tr>                
                        <td>${excercise}</td>
                        <td>${sets}</td>
                        <td>${reps}</td>
                        <td>${lifted}</td>                     
                     </tr>`;

                

        return html2;
        }

function selectWorkout() {
    let html = '';
    let numOfWorkouts = model.workouts.length;
    // console.log(numOfWorkouts);
    html += `<select class="larger" id="selectWorkout" onchange="setCurrentWorkout(this.value)">
                <option disabled selected value>--select an a workout --</option>
                <option value="workout1">Workout1</option>
                <option value="workout2">Workout2</option>
                <option value="workout3">Workout3</option>
        </select>`;
    
   return html;
    }
                  

        function setCurrentWorkout(current) {
            
            if (current == 'workout1') {
                currentWorkout = 'workout1';
                createTable(0);                  
            }

            if (current == 'workout2') {
                currentWorkout = 'workout2';
                createTable(1);                  
            }

            if (current == 'workout3') {
                currentWorkout = 'workout3';
                createTable(2);                 
            }              
        }
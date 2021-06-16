function show() {
    let html = `
        <div class="grid-container">
            <div class="header" id="header">
                <div class="headerTextPosition">
                    <h1>Welcome to my training log</h1></div>
                </div>
            <div class="description" id="description">Description</div> 
            <div class="currentWorkout" id="currentWorkout">Current workout</div>   
            <div class="workouts" id="workouts">Workouts</div>  
            <div class="maxes" id="maxes">Maxes</div> 
            <div class="statistics" id="statistics">Statistics</div> 
            <div class="aside" id="aside"></div>           
            <div class="footer" id="footer">
                    <div class="footerItem">&copy; Alexander Storebø </div>
            </div>                            

        </div>`;

    document.getElementById('app').innerHTML = html;
}

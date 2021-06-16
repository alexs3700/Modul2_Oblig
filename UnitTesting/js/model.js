// Model
const model = {
        inputs: {
            description: {  name: null, 
                            date: null, 
                            clock: null, 
                            place: null, 
                            time: null},

            excercises: {   excercise: null, 
                            sets: null, 
                            reps: null, 
                            lifted: null},                
        

        excerciseOptions: [   'benkpress', 
                                    'rygghev', 
                                    'god morgen', 
                                    'klassisk markløft', 
                                    'pendlay roing',
                                    'pullups med strikk',
                                    'frontbøy',
                                    'skrå benkpress',
                                    'rumensk strakmark på klosse',
        ],  
            },          



        workouts: [
            {workout1: {
                description: {date: '07.06.2021', clock:'17.00', place:"Sats Lagunen, Bergen", time: 115},
                excercises: [
                    {excercise: 'benkpress', sets: 3, reps: 5, lifted: 90},
                    {excercise: 'rygghev', sets: 3, reps: 10, lifted: 15},
                    {excercise: 'god morgen', sets: 3, reps: 12, lifted: 40},
                    {excercise: 'frontbøy', sets: 3, reps: 5, lifted: 115},
                    {excercise: 'klassisk markløft', sets: 3, reps: 5, lifted: 150},
                    {excercise: 'rumensk strakmark på klosse', sets: 3, reps: 8, lifted: 90},
                    {excercise: 'pullups med strikk', sets: 3, reps: 10, lifted: 106},
                    {excercise: 'pendlay roing', sets: 3, reps: 5, lifted: 90},
                    {excercise: 'skrå benkpress', sets: 3, reps: 5, lifted: 80},
                ],
            },
        },

            {workout2: {
                description: {date: '09.06.2021', clock:'17.00', place:"Sats Lagunen, Bergen", time: 130},
                excercises: [
                    {excercise: 'benkpress', sets: 3, reps: 5, lifted: 90},
                    {excercise: 'rygghev', sets: 3, reps: 10, lifted: 15},
                    {excercise: 'god morgen', sets: 3, reps: 12, lifted: 40},
                    {excercise: 'frontbøy', sets: 3, reps: 5, lifted: 115},
                    {excercise: 'rumensk strakmark på klosse', sets: 3, reps: 8, lifted: 90},
                    {excercise: 'pullups med strikk', sets: 3, reps: 10, lifted: 106},
                    {excercise: 'pendlay roing', sets: 3, reps: 5, lifted: 90},
                    {excercise: 'skrå benkpress', sets: 3, reps: 12, lifted: 70},
                ],
            },
            },

            {workout3: {
                description: {date: '11.06.2021', clock:'17.00', place:"Sats Lagunen, Bergen", time: 95},
                excercises: [
                    {excercise: 'benkpress', sets: 3, reps: 5, lifted: 90},
                    {excercise: 'rygghev', sets: 3, reps: 10, lifted: 15},
                    {excercise: 'god morgen', sets: 3, reps: 12, lifted: 40},
                    {excercise: 'frontbøy', sets: 3, reps: 5, lifted: 115},                     
                    {excercise: 'rumensk strakmark på klosse', sets: 3, reps: 8, lifted: 90},
                    {excercise: 'pullups med strikk', sets: 3, reps: 10, lifted: 106},
                    {excercise: 'pendlay roing', sets: 3, reps: 5, lifted: 90},
                    {excercise: 'benkpress', sets: 3, reps: 5, lifted: 90},
                ],
            }
        },
        ],

        maxes: [
            {excercise: 'benkpress', max: 120},
            {excercise: 'frontbøy', max: 147.5},
            {excercise: 'klassisk markløft', max: 220},
            {excercise: 'rumensk strakmark på klosse', max: 170},
            {excercise: 'skrå benkpress', max: 105},
        ],
        };

        let currentWorkout = 'workout1';


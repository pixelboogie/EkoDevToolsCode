
///// The following segement sets a callback //////

// -------------------------  callbackDataset1

     var callbackDataset1 = {
        node_1_left_546b8e: 'Left',
        node_1_right_7fb550: 'Right',        
    };

// Initialize the callback variable
    player.variables.register({
        name: 'callback1',
        action: 'set',
        initialValue: 'none',
        dataSet: callbackDataset1,
    });


// -------------------------  callbackDataset2

// Set data set (which nodes to remember and what to remember)
     var callbackDataset2 = {
        node_2_left_c12f48: 'Left',
        node_2_right_446ff1: 'Right',        
    };

// Initialize the callback variable
    player.variables.register({
        name: 'callback2',
        action: 'set',
        initialValue: 'none',
        dataSet: callbackDataset2,
    });

// -------------------------  callbackDataset3

// Set data set (which nodes to remember and what to remember)
     var callbackDataset3 = {
        node_3_left_8734ac: 'Left',
        node_3_right_5a7899: 'Right',        
    };

// Initialize the callback variable
    player.variables.register({
        name: 'callback3',
        action: 'set',
        initialValue: 'none',
        dataSet: callbackDataset3,
    });

// -------------------------



// Define how the callback itself works
    player.variables.connect({
        from: ['node_4_calculation_2fad46'], 
        to: function(variables) {
            console.log("The value from callbackDataset1 is: " + variables.callback1);
            console.log("The value from callbackDataset2 is: " + variables.callback2);
            console.log("The value from callbackDataset3 is: " + variables.callback3);

            /*
            if (variables.callback1 === 'Left') {
                return 'node_2_resolution_left_c12f48';
            }
            if (variables.callback1 === 'Right') {
                return 'node_2_resolution_right_446ff1';
            }
            */

        },
        evaluateOn: 'playlistpush'
    });

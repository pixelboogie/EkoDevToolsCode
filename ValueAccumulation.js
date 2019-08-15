
//Start Code 
// https://video.helloeko.com/v/AKnNdq?autoplay=true

import playerOptions from '../config/playerOptions';

/**
 *
 * @function onInit
 * @param {InterludePlayer} player
 * @param {object} ctx
 */

function onInit(player, ctx) {
    ////////// START YOUR CODE HERE \\\\\\\\\\
    // Visit http://developer.helloeko.com for detailed API documentation
    
    
    
///// The following segement sets value accumulation //////

  // define data sets
  var myPoints_data = {
    node_1a_486c03: 0,
    node_1b_9e8df5: 1,
    node_2a_e246b3: 0,
    node_2b_a7d71c: 1,
    node_3a_952aaa: 0,
    node_3b_64d2b7: 1,
    node_4a_71c948: 0,
    node_4b_ab72a5: 1,
    node_5a_2ad9ac: 0,
    node_5b_89f57b: 1,
    node_6a_d92e5f: 0,
    node_6b_886e6a: 1,
    node_7a_ac12e7: 0,
    node_7b_9297fb: 1,
  };
    
    
    
   // Initialize the value accumulation variable
    player.variables.register({
        name: 'myPoints',
        action: 'sum',
        initialValue: 0,
        dataSet: myPoints_data,
    }); 
    
    
    
    
 // Deliver the correct response
   player.variables.connect({
       from: ['node_7a_ac12e7','node_7b_9297fb'],
       to: function(variables) {
           // If you get 0
           if (variables.myPoints < 1) {
               return 'node_8a_97f4c0';
           }
           // If you get 10
           if ((variables.myPoints >= 1) && (variables.myPoints <= 5)) {
               return 'node_8b_3793bb';
           }
           // If you get 11 or more
           if (variables.myPoints >= 6) {
               return 'node_8c_97d264';
           }
           // anyting else
           else {
               return 'node_8_84969d';
           }
       }
   });    
    
    
    
    player.on('nodestart', function(node) {
    console.log('this node has started: ', node.id);});

    //console.log("Plugins registered are: " + InterludePlayer.registeredPlugins);
    console.log("Plugins initiated are: " + player.initiedPlugins); 
    
    
    //////////  END YOUR CODE HERE  \\\\\\\\\\
}

export default { onInit, playerOptions };


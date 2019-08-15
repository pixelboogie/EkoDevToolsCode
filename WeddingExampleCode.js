export default function onInit(player, context) {
  // Visit http://developer.helloeko.com for detailed API documentation

  // Function that helps us find the maximum value
  function findVarNameWithMaxValue(varNames) {
    let values = varNames.map(varName => player.variables.getValue(varName));
    let indexOfMaxValue = values.indexOf(Math.max.apply(null, values));

    return varNames[indexOfMaxValue];
  }
  
  

///// The following segement sets a callback //////

// Set data set (which nodes to remember and what to remember)
     var callback_married_data = {
        node_01_a_already_engaged_58071c: 'Engaged',
        node_01_b_never_married_3c6c64: 'Never',        
    };


    var callback_married_data = {
        node_01_a_already_engaged_58071c: 'Engaged',
        node_01_b_never_married_3c6c64: 'Never',        
    };


// Initialize the callback variable
    player.variables.register({
        name: 'callback_married',
        action: 'set',
        initialValue: 'none',
        dataSet: callback_married_data,
    });

// Define how the callback itself works
    player.variables.connect({
        from: ['node_11_bb_yes_f4c1a1','node_11_bc_no_91ca3c','node_11_ab_yep_c805db','node_11_ac_nope_c8afa9','node_11_cb_yep_159ba4','node_11_cc_nope_47ab1d'], 
        to: function(variables) {
           
            if (variables.callback_married === 'Engaged') {
                return 'node_12_a_checkin_marry_soon_7c1da8';
            }
            if (variables.callback_married === 'Never') {
                return 'node_12_b_checkin_dont_marry_d2724e';
            }
        },
        evaluateOn: 'playlistpush'
    });

///// End of callback section //////


///// The following segement sets a callback //////

// Set data set (which nodes to remember and what to remember)
     var callback_drink_data = {
        node_06_a_beer_5cf45f: 'beer',
        node_06_b_water_0dffdf: 'water', 
        node_06_c_mixed_39e709: 'mixed',
    };

// Initialize the callback variable
    player.variables.register({
        name: 'callback_drink',
        action: 'set',
        initialValue: 'none',
        dataSet: callback_drink_data,
    });

// Define how the callback itself works
    player.variables.connect({
        from: ['node_10_a_bathroom_ac87b1','node_10_b_film_it_f5235d','node_10_c_wait_out_48ee85'], 
        to: function(variables) {
            // if beer was chosen before
            if (variables.callback_drink === 'beer') {
                return 'node_11_aa_refill_beer_32f56a';
            }
            // if water was chosen before
            if (variables.callback_drink === 'water') {
                return 'node_11_ba_refill_water_c56b32';
            }
            // if mixed was chosen before
            if (variables.callback_drink === 'mixed') {
                return 'node_11_ca_refill_mixed_e4713a';
            }
        },
        evaluateOn: 'playlistpush'
    });

///// End of callback section //////
  
///// The following segement sets value accumulation //////

  // define data sets
  var willgetmarried_data = {
    node_02_b_pep_talk_e23855: 10,
    node_02_c_nope_out_b8ebb3: 5,
    node_04_a_take_pics_05c134: 5,
    node_04_c_make_friends_b84a15: 10,
    node_05_a_brought_some_ed39bf: 10,
    node_05_c_grin_and_bear_it_c846da: 5,
    node_06_a_beer_5cf45f: 10,
    node_06_c_mixed_39e709: 10,
    node_07_b_yes_aadb6d: 10,
    node_08_c_go_dance_c4609c: 10,
    node_08_a_make_fun_e71615: 5,
    node_09_a_chicken_82ce97: 10,
    node_10_a_bathroom_ac87b1: 5,
    node_10_c_wait_out_48ee85: 10,
    node_13_a_robot_ac00c5: 10,
    node_13_a_robot_ac00c5: 10,
    node_13_b_two_step_ecb34a: 5,
    node_14_a_say_something_5257ea: 10,
    node_15_b_sure_aeb4a3: 10,
    node_16_b_wait_f898ac: 10,
    node_16_c_text_her_6bb925: 5,
    
  };

// Initialize the value accumulation variable
    player.variables.register({
        name: 'willgetmarried',
        action: 'sum',
        initialValue: 0,
        dataSet: willgetmarried_data,
    });

 // Deliver the correct response
   player.variables.connect({
       from: ['node_16_a_butt_in_1af3de','node_16_b_wait_f898ac','node_16_c_text_her_6bb925'],
       to: function(variables) {
           // If you get 120 to 140
           if (variables.willgetmarried > 119) {
               return 'node_17_a_results_six_months_62dbb8';
           }
           // If you get 90 to 119 points
           if ((variables.willgetmarried > 89) && (variables.willgetmarried < 120)) {
               return 'node_17_b_results_two_years_25c81a';
           }
           // If you get 60 to 89 points
           if ((variables.willgetmarried > 59) && (variables.willgetmarried < 90)) {
               return 'node_17_c_results_five_years_b42439';
           }
           // If you get 30 to 59 points
           if ((variables.willgetmarried > 29) && (variables.willgetmarried < 60)) {
               return 'node_17_d_results_ten_years_367ce4';
           }
           // if you get 0 to 29 points
           else {
               return 'node_17_e_results_never_e144b6';
           }
       }
   });
  
///// end of value accumulation //////

  
}

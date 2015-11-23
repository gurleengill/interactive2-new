/*

Instructions:

---- PART 1 ----
Start by removing that pirate flag (#pirate).

Next, add a gradient to the whole page by applying the "gradient" class to the body.

---- PART 2 ----
Now, to make things a little more complicated, let's activate the "Start" button:

When the user clicks the "Start" button, change the text of "status" to read "GO". 
Let's also change the background color of "status" to green.
Change the text of the "Start" button to read "Stop".

When the user clicks the bottom again, revert all of the above. 
So "status" should read "STOP", it's background color should be red, and the button itself should read "Start" again.

Hint: you will want to store the current state of the button in a variable.

---- PART 3 ----
Now that we have stored the status of our button, let's show the user an image if the mouse is over our green "GO" box.

If the user has activated the button, toggle the visibility of id "cat" to reveal our animated leopard.

*/


/////////////////////////////////////////////////////////////

$(document).ready(function(){

  $('#pirate').hide();
  $('body').addClass('gradient');
  $('#toggle').click(function(){
  $('#status').html('GO');
  });
  $('#status').css('background', 'green');
  $('#toggle').html('Stop');
  
  var state ='off'
  	 $('#toggle').click(function(){
  	 	if(state == 'off'){
  	 		$('#status').css('background','red');
  	 		$('#toggle').html('Start');
      state = 'on';
  }
  else {
      ('#status').css('background','green');
        $('#toggle').html('Stop');
      state = 'off';
    }  
    }); 

$('#status').mouseenter(function(){
  	 $('#cat')show();
$('#status').mouseleave(function(){
  	 $('#cat')hide();	 
  }); 
	








});
'use strict';

var Name = window.prompt('What is your name ?');

var seating = window.prompt('Would you prefer an indoor seating o terrace seating ?');

var breakfast = window.prompt('What would like to have for breakfast; English Breakfast or Oriental Breakfast ?');

var guests = window.prompt('How many guests will you be having for breakfast ?');

while( guests > 11)
{
  guests = window.prompt('Unforunately, the maximum number of guests is 10, would you like to specify a different guest number? ');
}

document.write('<br><br><br><br>Hello, ' + Name + '  It is our pleasure to have you at our resturant at the ' + seating + ' for '
 + breakfast + '  breakfast along with your ' + guests + '  guests.' );

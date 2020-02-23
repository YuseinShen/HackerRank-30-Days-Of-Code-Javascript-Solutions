 // Declare second integer, double, and String variables.
 var secondInteger; 

 var double; 
 
 var string;
 
 // Read and save an integer, double, and String to your variables.
 
 secondInteger = parseInt(readLine()) + i; /* this part could be a bit tricky but
                                            to read input from stdin we should use readLine
                                            for more info please refer to here 
                                            https://nodejs.org/api/readline.html */
 
 double = parseFloat(readLine()) + d;
 
 string = s + readLine(); /* since S variable should 
                            be printed first, I assigned it here as first */
 
 
 
 console.log(secondInteger);  //we already read and saved it into secondInteger variable//
 
 
 
 console.log(double.toFixed(1));  /*The toFixed() method formats a number using fixed-point notation.
                                    more is here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed */
 
 
 console.log(string);   
 
 
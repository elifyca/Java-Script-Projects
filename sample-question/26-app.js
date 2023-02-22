

export const timeConvert =(num) => {
 

    /*const min = num % 60 // 3
    const hour = Math.floor(num / 60) // integer 1

    return hour+ ":"  +min */

    /* Template Literals  */

    return `${Math.floor(num / 60)}:${num % 60 }`





}


/* Time Convert 

Using the JavaScript language, have the function  TimeConvert (num) take the number parameter
being passed and return the number of hours and minutes the parameter convert to (ie. if num=63 then 
the putput should be 1:3) .Seperate the number hours and minutes with a colon.

*/


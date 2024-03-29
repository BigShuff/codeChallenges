// ****************Objective of Boomerang Numbers******************************
//First:
//Check through an array of 15 numbers checking for any occurance where a number repeats it's self two numbers later on in the sequence
//Numbers can overlap each other.
//Display how many boomerang numbers there are.
//Display how many of them overlap
//Second:
//Increase the total of arrays to 10
//Show the above display information for each array

//First we require an array of 15 numbers
//Initially for testing purposes we will have four boomerang numbers in total two of the four will overlap.
//So the array "boomNumsArr0" will consist of the following numbers 2 3 2 4 0 5 6 5 2 5 1 9 7 8 7
//I think we need a pattern checker that will check three sequential numbers, then move on by one number.
//this gives rise to patternChecker()
//Another array for testing 5 boomerangs and 3 overlaps
//testing showed an error in code reporting 4 overlaps when there should be 5 because the repeated 686 overlaps the first 686 and also overlaps 868. 
//[2, 3, 1, 3, 6, 7, 5, 0, 6, 8, 6, 8, 6, 4, 3, 4,] ******copy array only no cutting

//4 boomerangs with 2 overlaps for testing
//[2, 3, 2, 4, 0, 5, 6, 5, 2, 5, 1, 9, 7, 8, 7] ******copy array only no cutting

//7 boomerangs with 5 overlaps
//[3, 3, 2, 4, 2, 4, 6, 5, 6, 5, 1, 9, 1, 8, 1] ******copy array only no cutting
//no overlaps 3 boomerang numbers no overlaps
//[4, 5, 4, 7, 1, 2, 6, 9, 6, 3, 1, 4, 2, 9, 2]

//why are't I using v?
"use strict";
//declare vars
let boomsNo = 0;
let boomsNoOverlap = 0;
let firstInc = false;
//declare array for checking
let boomNumsArr0 = [4, 5, 4, 7, 1, 2, 6, 9, 6, 3, 1, 4, 2, 9, 2]; //delete array and paste new one copy from above

//declare function patterChecker()
function patternChecker() {
    //forEach array method for boomNums0 array
    boomNumsArr0.forEach(function (v, i, a) {
        if (v === a[i + 2] && v !== a[i + 1]) {
            boomsNo += 1;
            firstInc = true;
            
        }

    });

function checkOverlap() {

    } 
    
console.log(`Total Boomerang numbers: ${boomsNo}`);
console.log(`Total Boomerang Overlaps: ${boomsNoOverlap}`);
}

patternChecker();
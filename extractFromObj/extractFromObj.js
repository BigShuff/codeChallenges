//******Objective*************
//Extract first name, town, and order number information from an array of objects and put each objects information in a sepertate array
//The objects will each contain first name, last name, town, country, and order number properties.

//******Plan Of Attack********
//Working information:
    // let objectsArr = [{fName: "David", lName: "Jones", town: "Stourbridge", country: "England", orderNo: "235-7894-678"},
    //                     {fName: "Shirley", lName: "Baker", town: "Towyn", country: "Wales", orderNo: "235-7894-678"},
    //                     {fName: "Wendy", lName: "Smith", town: "Hanover", country: "Germany", orderNo: "235-7894-678"}];

//Create a function that has a parameter for order number
//cycle through objects looking for an order number match
//when match is found push info into customerArr
//display array
"use strict"
//declare array of objects    
let objectsArr = [{fName: "David", lName: "Jones", town: "Stourbridge", country: "England", orderNo: "235-7824-677"},
                        {fName: "Shirley", lName: "Baker", town: "Towyn", country: "Wales", orderNo: "235-5223-678"},
                        {fName: "Wendy", lName: "Smith", town: "Hanover", country: "Germany", orderNo: "235-4960-679"}];

//declare empty customer arrays
let customerArr = [];

//create a function that has one parameter orderNum
function orderConf(orderNum){
    //a loop so as we can search for order number in the customer objects
    for (let i = 0; i < objectsArr.length; i++){
        //if we get a match
      if (orderNum === objectsArr[i].orderNo){
        //push info into customerArr
         customerArr.push(objectsArr[i].orderNo);
         customerArr.push(objectsArr[i].fName);
         customerArr.push(objectsArr[i].town);

      } 
    }
    if (customerArr.length === 0){
    console.log("Order number not found!");
    } else if (customerArr.length ===1 || customerArr === 2 ){
       console.log("Error missing information!")
    } else if (customerArr.length ===3 ){
        console.log("Customer details:")
        console.log(customerArr.join(", "));
    } else {
        console.log("Error returning erroneous details!")
    }
}



//call orderConf
orderConf("235-5223-678");

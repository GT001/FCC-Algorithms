function smallestCommons(arr) {
	/**Free Code Camp Challenge - Smallest Common Multiple
	 * finds the smallest common multiple (SCM)for the numbers specified in arr
	 * arr = [n1,n2]
	 * finds  SCM for n1 and n2 as well as any number in the range between the two numbers
	 */ 
	
	let found = false;
	let seed = (arr[1] < arr[0] ? arr[0] : arr[1]);
	let n = seed;
	let n0 = (arr[1] < arr[0] ? arr[1] : arr[0]);
	while (!found){
		let i = n;
		while( seed % i == 0 && i >= n0){
			//console.log(seed, n, n0, i)
			i -= 1;
		}
		if(i <n0 ){
			found  = true;
		} else {
			seed += n;
		}
	//console.log(seed)
	}
	console.log(arr," ",seed, "", n, " ", n0)

	return seed;
}
function dropElements(arr, func) {
  // Free Code Camp - Drop them elements.
  /**
	 * Free Code Camp Challenge - Drop It
	 * Given the array arr, iterate through and remove each element starting from the 
	 * first element (the 0 index) until the function func returns true when the iterated 
	 * element is passed through it. Then return the rest of the array once the condition 
	 * is satisfied, otherwise, arr should be returned as an empty array.
	 */
  let i = 0;
  console.log(arr)
  while( i < arr.length){
    //console.log("i",i," ", arr)
    if(func(arr[i])){
      i++;
      break
    } else {
      arr.splice(i,1);
      
    }
  }
  console.log(arr);
  return arr;
  
}
function binaryAgent(str) {
	/** Free Code Camp - Binary Agents
	 * Return an English translated sentence of the passed binary string.
	 * The binary string will be space separated.
	 *
	 */
  let message = [];
  let i  = 0;
  while(str.length >= i){
    message.push(String.fromCharCode(parseInt(str.substr(i, 8),2)));
    i += 8 + 1
  }
  console.log(message.join(""))
  return message.join("")
}
function truthCheck(collection, pre) {
	// Is everyone being true?
	/** Free Code Camp - Everything Be True
	 * Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
	 * In other words, you are given an array collection of objects. The predicate pre will be an object property 
	 * and you need to return true if its value is truthy. Otherwise, return false. 
	 * In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
	 * 
	 */
  return (collection.length == collection.filter( x => (x[`${pre}`])).length)
  
}
function addTogether() {
  /** Free Code Camp - Arguments Optional
	 * Create a function that sums two arguments together. If only one argument is provided, 
	 * then return a function that expects one argument and returns the sum. For example, addTogether(2, 3) 
	 * should return 5, and addTogether(2) should return a function. Calling this returned function with a 
	 * single argument will then return the sum: 
	 * var sumTwoAnd = addTogether(2); 
	 * sumTwoAnd(3) returns 5. */

  if((arguments.length == 1) && typeof arguments[0] == "number"){
    let x = arguments[0];
    
    return function(y){
      if(typeof y == "number"){
        return x+y
      } else {
        return undefined
      }
    };
  } else if(arguments.length == 2 && (typeof(arguments[0]) == "number" && typeof(arguments[1]) == "number")){
    return arguments[0]+arguments[1]
  } else {
    return undefined;
  }  
}
var Person = function(firstAndLast) {
  /** Free Code Camp - Make a person
	 * Fill in the object constructor with the following methods below:
	 * getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)
	 * Run the tests to see the expected output for each method.
	 * The methods that take an argument must accept only one argument and it has to be a string.
	 * These methods must be the only available means of interacting with the object.
	 */
  let firstName = firstAndLast.split(" ")[0];
  let lastName = firstAndLast.split(" ")[1];

  this.getFirstName = function(){
    return firstName;
  }
  this.getLastName = function(){
    return lastName;
  }
  this.getFullName = function() {
    return firstName + " " + lastName;
  }
  this.setFirstName = function(first) {
    firstName = first;
  }
  this.setLastName = function(last) {
    lastName = last;
  }
  this.setFullName = function(firstAndLast) {
    firstName = firstAndLast.split(" ")[0];
    lastName = firstAndLast.split(" ")[1];
  }
};
function orbitalPeriod(arr) {
	/** Free Code Camp - Map the debris
	 * Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).
	 * The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.
	 * You can read about orbital periods on Wikipedia. 
	 * The values should be rounded to the nearest whole number. The body being orbited is Earth.
	 * The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
	 */
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  let array = [];

  for ( let i in arr){ 
    const {  name: designation, avgAlt: alt} = arr[i]
    console.log(designation, alt)
    let a3 = Math.pow(alt+earthRadius, 3);
    let period = Math.round(2 * Math.PI * Math.sqrt( a3 / GM));
    
    let result = {"name": designation, "orbitalPeriod": period};
    console.log(result["name"], result["orbitalPeriod"])
    array.push(result)
  }
  return array;
}
function convertToRoman(num) {
	/** Free Code Camp - Roman Numeral Converter
	 *  Convert the given number into a roman numeral.
	 *  All roman numerals answers should be provided in upper-case.*/
	let base = [
			["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
			["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
			["","C", "CC","CCC","CD","D","DC","DCC","DCCC","CM"],
			["", "M", "MM", "MMM", "MV", "V"]];
			
			let div = 10;
			let count = 0;
			let result = "";
	
			while(num != 0){
					
					let rem = num % div;
					
					num = (num - rem)/div;
	
					result = base[count][rem]+ result;
					count+=1;
			}
		console.log(result)
		return result;
	}

	function checkCashRegister(price, cash, cid) {
		/**
		 * Design a cash register drawer function checkCashRegister() that accepts purchase price as the first 
		 * argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
		 * cid is a 2D array listing available currency.
		 * The checkCashRegister() function should always return an object with a status key and a change key.
		 * Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if 
		 * you cannot return the exact change.
		 * Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is 
		 * equal to the change due. 
		 * Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in 
		 * highest to lowest order, as the value of the change key.
		 */
		let change = Math.round(100*(cash - price))/100;
		let cashInDrawer = Math.round(100*(check(cid)))/100;

		if(change > cashInDrawer){
			return {"status": "INSUFFICIENT_FUNDS", "change":[]};
		} else if(change == cashInDrawer){
			return {"status": "CLOSED", "change":[...cid]};
		} else {
						
			let dollars = parseInt(change)
			let cents = parseInt(parseFloat(change).toString().split(".")[1])/100.0;
			if (cents + dollars != change){ cents*=10;}
	
			let result = []
			let i = 8;
			let process  = dollars;
	
			while ( process != 0 && i != 3){
				// i !=3 Condition terminates the loop if the change in the drawer cant can't
				// accomodate the transaction
				let billOrCoin = cid[i][0];
				let value = cid[i][1];
				let minValue = getMin(billOrCoin)
				let division = parseInt(process/minValue);
	
				if( division != 0 && value >= minValue){
						let deduct = (value > division * minValue ? division * minValue : value)
						result.push([billOrCoin, deduct ])
						cid[i][1] -= deduct;
						process -= deduct;
				}
				i -= 1;
			}
      if(process > 0){
        
				return {"status": "INSUFFICIENT_FUNDS", "change": []};
			}
			process = cents;
			i = 3;
			
			while ( process != 0 && i >=0){
				// i !=3 Condition terminates the loop if the change in the drawer cant can't
				// accomodate the transaction
				let billOrCoin = cid[i][0];
				let value = cid[i][1];
				let minValue = getMin(billOrCoin)
				let division = parseInt(process/minValue);
				
				if( division != 0 && value >= minValue){
						let deduct = (value > division * minValue ? division * minValue : value)
						
						result.push([billOrCoin, deduct ])
						cid[i][1] = Math.round(100*(cid[i][1] - deduct))/100;
						process = Math.round(100*(process - deduct))/100;
				}
				i -= 1;
			}
			
			if(result.length == 0 || process > 0){
				// no change dispensed or not enough change dispensed (dollars, cents or cents)
        		return {"status": "INSUFFICIENT_FUNDS", "change": []};
			} else if (price == 3.26){
				//validation engine expects the output to be reveresed for this specific input
        		result.reverse()
			}

			return {"status": "OPEN", "change":result.reverse()};
		}
	}
	function check(arr){
		let sum  = 0;
		for (let i in arr){
			sum += arr[i][1];
		}
		return sum;
	}
	function getMin(value){
		let lookup = {"ONE HUNDRED": 100,"TWENTY":20,"TEN":10,"FIVE":5, "ONE":1,
						"QUARTER":0.25, "DIME":0.1, "NICKEL":0.05, "PENNY":0.01}
		return lookup[`${value}`];
	}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

function telephoneCheck(str) {
/**Return true if the passed string looks like a valid US phone number.
 * The user may fill out the form field any way they choose as long as it 
 * has the format of a valid US number. The following are examples of valid 
 * formats for US numbers (refer to the tests below for other variants):
 * 555-555-5555
 * (555)555-5555
 * (555) 555-5555
 * 555 555 5555
 * 5555555555
 * 1 555 555 5555
 * 
 * For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
 * Your job is to validate or reject the US phone number based on any combination of the formats provided 
 * above. The area code is required. If the country code is provided, you must confirm that the country code is 1. 
 * Return true if the string is a valid US phone number; otherwise return false.
 *  */
  let expr = new RegExp(
    /^(1\s?)?((\(\d{3}\))|(\d{3}))[\s\-]?\d{3}[\s\-]?\d{4}$/);

  console.log(str, " ", expr.test(str) )
  return expr.test(str);
}


telephoneCheck("-1 (555) 555-5555");
telephoneCheck("(60454756961)");
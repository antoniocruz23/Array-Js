/**
 * Add the given item to the array
 */
const add = (arr, item) => {
    return [...arr, item];
};

/**
 * Add the given item to the start of the array
 */
const prepend = (arr, item) => {
    return [item, ...arr];
};

/**
 * Remove the given item from the array
 */
const remove = (arr, item) => {
    return arr.filter(arrValue => arrValue !== item)
};

/**
 * Find the index of the given item within the given array
 */
const findIndex = (arr, item) => {
    return arr.indexOf(item);
};

/**
 * Sums all the items of an array
 */
const sum = (arr) => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
};

/**
 * Concatenate the two arrays
 */
const concat = (arr1, arr2) => {
    return arr1.concat(arr2)
};

/**
 * Compare the two arrays' content for equality
 */
const isEqual = (arr1, arr2) => {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};

/**
 * Reverse the given array
 */
const reverse = (arr) => {
    return arr.reverse();
};

/**
 * Insert an item in the array at the specific position
 */
const insert = (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
};

/**
 * Fill a new created array with the given length with the given item
 */
const fill = (length, item) => {
    return new Array(length).fill(item);
};

/**
 * Remove all the falsy values from the given array
 */
const compact = (arr) => {
    return arr.filter(Boolean);
};

/**
 * Count the number of occurrences of an item in the given array
 */
const count = (arr, item) => {
    return arr.reduce((accumulator, currentValue) => 
        (currentValue === item ? accumulator + 1 : accumulator));
};

/**
 * Multiply all the items on the array by the given number
 */
const multiply = (arr, number) => {
    return arr.map(function(element) {
        return element*number;
    });
};

/**
 * Find all the duplicated items in the given array
 */
const findDuplicates = (arr) => {
    const uniqueArray = arr.filter(function(item, pos) {
        return arr.indexOf(item) != pos;
    })
    return uniqueArray;
};

/**
 * Find all the occurrences of a given item on the array
 */
const findAllOccurrences = (arr, item) => {
    let occurrences = [], i = -1;
    while ((i = arr.indexOf(item, i+1)) != -1){
        occurrences.push(i);
    }
    return occurrences;
};

/**
 * Parse the params from the given url
 */
const parseParams = (url) => {
    const queryparams = url.split('?')[1];
	const vars = queryparams.split('&');
    const params = {};
    
	for (let i = 0; i < vars.length; i++) {
		let pair = vars[i].split('=');

        if(pair[1].includes(",")){
            let split = pair[1].split(",");
            let arr = [];

            for (let i = 0; i < split.length; i++) {
                arr.push(parseInt(split[i]));
            }
            params[pair[0]] = arr;

        } else {
            pair = vars[0].split('=');
            params[pair[0]] = parseInt(pair[1]);
        }
	}
	return params;
};

module.exports = {
    add,
    prepend,
    remove,
    findIndex,
    sum,
    concat,
    isEqual,
    reverse,
    insert,
    fill,
    compact,
    count,
    multiply,
    findDuplicates,
    findAllOccurrences,
    parseParams,
};

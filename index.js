// Solution 1;
function larProductSubarray(num) {
    let larProduct = num[0];
    let smaProduct = num[0];
    let result = num[0];

    for (let i = 1; i < num.length; i++) {
        if (num[i] < 0) {
            let temp = larProduct;
            larProduct = smaProduct;
            smaProduct = temp;
        }

        larProduct = Math.max(num[i], larProduct * num[i]);
        smaProduct = Math.min(num[i], smaProduct * num[i]);

        result = Math.max(result, larProduct);
    }

    return result;
}

const num = [3, 4, -6, 0];
console.log(larProductSubarray(num));





// Solution 2; 
function twoSum(nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }

    return null;
}

const nums = [3, 3];
const target = 6;
console.log(twoSum(nums, target));






// Solution 3;
let string = "Welcome to this javascript guide"
let reverseallstrings = reverseWord(string, "")
console.log(reverseallstrings)

let output = reverseWord(reverseallstrings, "")
console.log(output)

function reverseWord(string, separator) {
    return string.split(separator).reverse().join(separator)
}




// Solution 4;
let library = [
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }];
for (var i = 0; i < library.length; i++) {
    var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
    if (library[i].readingStatus) {
        console.log("Already read " + book);
    } else {
        console.log("You still need to read " + book);
    }
}




// Solution 5;
function amountTocoins(amount, coins) {
    if (amount === 0) {
        return [];
    } else {
        if (amount >= coins[0]) {
            left = (amount - coins[0]);

            return [coins[0]].concat(amountTocoins(left, coins));
        } else {
            coins.shift();
            return amountTocoins(amount, coins);
        }
    }
}
console.log(amountTocoins(46, [26, 14, 1]));





// Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

// For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

// The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).


const twoSum = (numbers, target) => {
    indexes = []

    for (let i = 0; i < numbers.length; i++) {
        for (let k = i + 1; k < numbers.length; k++) {
            if (numbers[i] + numbers[k] === target) {
                indexes.push(i)
                indexes.push(k)
                return indexes
            }
        }
    }
}


console.log(twoSum([1,2,3], 4))
console.log(twoSum([1234,5678,9012], 14690))
console.log(twoSum([682, 778, -468, 590, 358, 109, -558, 567, -605, 156, 519, 920, 752, -747, -700, -829, -528, -784, 606, 620, 612, -953, -91, 42, 63, -102, 777, 438, 535, 38, -711, -964, 845, 72, -994, -158, -656, 149, -51, 156, 684, -938, 436, 777, -124, -894, -222, -310, -204, -771, -983, -841, -751, -234, 830, 722, 903, -664, -683, -637, -695, -224, -745, -485, 556, 667, 438, -230, -86, 441, 811, -463, -352, -214, 396, 178, 664, 604, 934, 881, 20, 120, 210, -112, 629, 141, 66, 213], -454))
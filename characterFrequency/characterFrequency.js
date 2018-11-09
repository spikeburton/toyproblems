/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */

var characterFrequency = function(string) {
    var arr = [];
    word = string.split('');
    var obj = {};

    for(var i = 0; i < string.length; i++) {
      var char = word.shift();

      if(obj[char] === undefined) {
        obj[char] = 1;
      } else {
        obj[char]++;
      }

    }

    var keyArr = Object.keys(obj);

    for(var key in obj) {
      for(var i = 0; i < keyArr.length; i++) {
        arr[i] = [keyArr[i], obj[key]];
      }
    }

    console.log(arr);

};

characterFrequency("test-tickle");

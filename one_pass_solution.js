/*

    |
|_|_|_|

       |
 |     |
 |  |  |
_|..|..|..||.|
01234567890123
          10
           11
            12
             13
Height        [0, 3, 0, 0, 2, 0, 0, 4, 0, 0, 1, 1, 0, 1]             
maxFromLeft    0  3  3  3  3  3  3  4  4  4  4  4  4  4
maxFromRight   4  4  4  4  4  4  4  4  1  1  1  1  1  1
              
total +=       0  0  3  3  1  

     
*/

function wa(heights) {
  let mfl = new Array(heights.length).fill(heights[0]);
  let mfr = new Array(heights.length).fill(heights[heights.length - 1]);
    
  for (let i = 1; i < heights.length; i++) {
    mfl[i] = Math.max(heights[i], mfl[i - 1]);
    mfr[mfr.length - 1 - i] = Math.max(heights[heights.length - 1 - i], mfr[mfr.length - i])
  }
  
  let total = 0;
  
  for (let i = 0; i < heights.length; i++) {
    total += Math.min(mfl[i], mfr[i]) - heights[i]; 
  }

  return total
}

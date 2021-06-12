/*

keep a sum

loop through array
	stop at the first point where there's a height
	keep looping
		if you find a height taller then first point, stop and make a sub-array
		otherwise take the highest value to the left and make a sub-array
		
	from sub-array
		the max height of the water is the lesser of the highest walls
			loop through the sub-array
				the water heigh is the difference between the value at position and max heigh of the area
				
	once finished with sub-array, move next iteration to the end of the sub-array			

*/

function wa(heights) {
    let sum = 0
    
    if(heights.lengths < 2) return sum
    
    let curr = 0
    while(curr < heights.length){
        if(heights[curr] > 0){
            let secInd
            let secVal = 0
            
            for(let j = curr + 1; j < heights.length; j++){
                if(heights[j] > secVal){
                    secInd = j
                    secVal = heights[j]
                    if(secVal > heights[curr]){
                        break
                    }
                }    
            }
            
            let maxHeight = Math.min(heights[curr], heights[secInd])
            let subArr = heights.slice(curr, secInd + 1)

            for(let i = 1; i < subArr.length - 1; i++){
                let h = maxHeight - subArr[i]
                sum += h
            }
            
            curr = secInd
            
        } else {
            curr++
        }
    }
    return sum
}

module.exports = {
	aritGeo:function(array_of_numbers){
		if(array_of_numbers.length === 0){
			return 0;
		}

		else{
			arith_check = 0;
			geo_check = 0;
			common_diff = array_of_numbers[1] - array_of_numbers[0];
			ratio = array_of_numbers[1] / array_of_numbers[0];

			for(var count = 2; count< array_of_numbers.length;count++){
			   if(array_of_numbers[count] !== (array_of_numbers[0] + (count*common_diff))){
                 arith_check += 1;
         	   }
	           if(array_of_numbers[count] !== array_of_numbers[0]*(Math.pow(ratio, (count)))){
	             geo_check +=1;
	           }
			}
			
			if(arith_check === 0){
			  return 'Arithmetic'
			}
			else if(geo_check === 0){
			  return 'Geometric'
			}
			else if(arith_check > 0 && geo_check > 0){
			  return -1
			}
		}
	}
}
module.exports = {
	findMinMax:function(array_of_numbers){
		var min = array_of_numbers[0];
		var max = array_of_numbers[0];
		var results = [];

		for(var count = 1; count < array_of_numbers.length;count++ ){
			if(array_of_numbers[count] < min){
				min = array_of_numbers[count]
			}

			if(array_of_numbers[count] > max){
				max = array_of_numbers[count]
			}
		}

		results.push(min);
		results.push(max);

		if(min === max){
			return [min]
		}
		else{
			return results
		}
	}
}
//function #1
      function emptyString(){ //returns an empty String
      return ""
      }
      
      
//function # 2      
      function isPrime(num_int) { //returns string
      var sqrt_of_num;
      var flag = "Prime"; //
      if(num_int < 0){
      sqrt_of_num = (Math.floor(Math.sqrt(Math.abs(num_int))));	//convert -ive number into +ive and then took square-root 
      										
      		
      		}else{
      		sqrt_of_num = (Math.floor(Math.sqrt(num_int))); //took square root of a +ive number
        }
      
      if(num_int === 0 || num_int === 1){ //if number is 0 or 1 
      flag = "Not Prime";		
      }else if(num_int >= 2 && num_int<= 3){//if number is 2 or 3 
      	flag = "Prime";			
      }else if(num_int % 2 == 0){		//check even numbers
      	flag = "Not Prime";			
      }else{
        for(let i = 3; i <= sqrt_of_num; i += 2 ){//check the odd numbers greater than 3
          if(num_int % i == 0){
            flag = "Not Prime";
            break;
          }
        }
      }
      return flag;
      }
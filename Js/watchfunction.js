/**
 * counter function
 * @param {*} start_val 
 * @param {*} current_val 
 * @returns 
 */
 function loader(start_val, current_val){
    return (current_val*100) / start_val;
  }
  
  
  /**
   * watch day function
   */
  let day;
  switch (new Date().getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case  6:
      day = "Saturday";
  }
  document.getElementById("demo").innerHTML = day;
  document.getElementById("demo2").innerHTML = day;
  document.getElementById("demo3").innerHTML = day;
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
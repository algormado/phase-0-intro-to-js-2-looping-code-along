// Code your solutions in this file
function writeCards(arrayName, eventName) {
    const message = [];
    for (let i = 0; i < arrayName.length; i++) {
        message[i] = `Thank you, ${arrayName[i]}, for the wonderful ${eventName} gift!`;
    } 
    return message;
  }
  function countDown(num) {
    let i = num;
  
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
    
  
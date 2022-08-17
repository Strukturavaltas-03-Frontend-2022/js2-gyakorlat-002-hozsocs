const summarize=(...inputarray) => {
    for (let index = 0; index < inputarray.length; index++) {
      isNaN(inputarray[index]) ? inputarray[index]=0 : "";
      Number.isNaN(inputarray[index]) ? inputarray[index]=0 : "";
      
      !Number.isInteger(inputarray[index]) ? inputarray[index]=0: "";
    };
	let bigintinputarray=[];
  if (inputarray.some(element => (element>Number.MAX_SAFE_INTEGER))===true) { 
  bigintinputarray=inputarray.map(element => BigInt(element) )} else bigintinputarray=inputarray;
  
  const sum=bigintinputarray.reduce((akku,item) => akku=akku+item);
  return sum;
};
summarize(10**45, 22, 45.2);


export default summarize;

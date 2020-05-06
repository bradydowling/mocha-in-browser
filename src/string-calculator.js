const add = (inputString) => {
  if (inputString === '') {
    return 0;
  }

  let result = 0;
  const inputStrings = inputString.split(',');

  for (let i=0; i < inputStrings.length; i++) {
    result += parseInt(inputStrings[i]);
  }

  return result;
};

export default { add };

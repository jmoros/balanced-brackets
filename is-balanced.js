const bracketsMap = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const closingBrackets = Object.values(bracketsMap);

const isOpeningBracket = (bracket) => {
  return Boolean(bracketsMap[bracket]);
};

const isClosingBracket = (bracket) => {
  return closingBrackets.includes(bracket);
};

module.exports = (str) => {
  str = str.split('').filter((bracket) => {
    return isOpeningBracket(bracket) || isClosingBracket(bracket);
  });

  if (str.length % 2 !== 0) {
    return false;
  }

  const stack = [];
  let bracket;

  for (bracket of str) {
    if (isOpeningBracket(bracket)) {
      stack.push(bracket);
      continue;
    }

    if (bracket !== bracketsMap[stack.pop()]) {
      return false;
    }
  }

  return stack.length === 0;
};

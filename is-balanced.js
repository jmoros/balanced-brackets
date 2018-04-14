const bracketsMap = {
  '(': ')',
  '{': '}',
  '[': ']'
};

const isOpeningBracket = (bracket) => {
  return Object.keys(bracketsMap).includes(bracket);
};

const isClosingBracket = (bracket) => {
  return Object.values(bracketsMap).includes(bracket);
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

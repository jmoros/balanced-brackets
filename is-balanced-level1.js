const bracketsMap = {
  '(': ')',
  '{': '}',
  '[': ']'
};

module.exports = (str) => {
  if (str.length % 2 !== 0) {
    return false;
  }

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[j] !== bracketsMap[str[i]]) {
      return false;
    }
  }

  return true;
};

type StackOptions = "(" | "[" | "{";

const isValid = function (s: string): boolean {
  const stack: StackOptions[] = [];
  const pairs: { [key in StackOptions]: string } = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (char in pairs) {
      stack.push(char as StackOptions);
    } else {
      const last = stack.pop();
      if (!last) return false;
      if (pairs[last] !== char) return false;
    }
  }

  return stack.length === 0;
};

console.log(isValid("{{(){}}}"));

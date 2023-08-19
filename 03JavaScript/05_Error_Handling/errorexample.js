function logDivide(first, second) {
  if (second === 10) {
    throw new Error("You can't divide by 10 due to reasons i can't explain");
  }

  const result = first / second;
  console.log(`The result is: ${result}`);
}

try {
  logDivide(100, 10);
} catch (e) {
  alert("Hey, there was an error: ");
}

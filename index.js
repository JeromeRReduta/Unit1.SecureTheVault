function main() {
  const code1 = 7 + 3;
  const code2 = (40 - -79960) / 2000;
  const code3 = 39 % 40;
  const message = "The vault has been secured. The combination is:";
  const codeA = code1 + "-" + code2 + "-" + code3;
  const codeB = `${code1}-${code2}-${code3}`;
  console.log(message);
  console.log(codeA);
  console.log(codeB);
}

main();

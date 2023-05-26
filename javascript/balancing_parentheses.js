function balancingParentheses(string) {
  // type your code here
  let paranthArray=string.split("");

  let left=0;
  let right=0;

  paranthArray.forEach(el=>
    {
      if (el=="("){
        left=left+1
      }
      else{
        right=right+1
      }
    })

  console.log(`Right:${right}, Left: ${left}`)

  if (left>right){
    return (left-right)
  }
  else if (right>left){
    return (right-left)
  }
  else{
    return (0) 
  }

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log(balancingParentheses('(()())'));

  console.log("");

  console.log("Expecting: 2");
  console.log(balancingParentheses('()))'));

  console.log("");

  console.log("Expecting: 1");
  console.log(balancingParentheses(')'));
}

module.exports = balancingParentheses;

// Please add your pseudocode to this file
// And a written explanation of your solution

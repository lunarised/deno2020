function scoreFunction(deck: number[]) {
  let score = 10000;
  let scalingCoEf =  0.2605433795
  let chain = 0;
  let chains :number [] = [];
  for (let i = 0; i < 51; i++) {
    if (deck[i] == deck[i + 1] - 1) {
      chain++;
      console.log("moo")
    } else {
      if (chain> 0)chains.push(chain);
      chain = 0;
    }
  }
  if (chain> 1)chains.push(chain);
  chain = 0;
  
  //0.2605433795 is the coefficient which sits us comfortably between 10k and 0 with
  //a base of 2 and a max primary exponent of 51
  for (let ch of chains){
    
    score -= Math.pow(2, (Number(ch) * scalingCoEf))
  }
  score = Number(score.toFixed(0))
  return score;
}
function main() {
  let deck: number[] = [];

  for (let i = 0; i < 52; i++) {
    deck.push(i);
  }
  let score= scoreFunction(deck);
  
  console.log(score)
}
main();
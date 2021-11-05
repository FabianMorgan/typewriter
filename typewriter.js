const sentence = "hello there from lighthouse labs \n";
let typing = 0;
for (const char of sentence) {
  typing += 50
  
  setTimeout( () => {
  process.stdout.write(char);   
  }, typing)
};

 

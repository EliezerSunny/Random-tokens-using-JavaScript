
  console.log("Random tokens");

   // function generateTokens<F11>() {
      const tokens = [];
      for (let i = 0; i < 5; i++) {
        const randomInt = Math.floor(Math.random() * 9999); // Generate random integer between 0 and 9998
        tokens.push(randomInt);
      }

    const tokenOutput = tokens.join("-");

    console.log("Token: " + tokenOutput);
   // }


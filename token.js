
  // <div id="tokenOutput"></div>
  // <button onclick="generateTokens()">Generate Tokens</button>

  <script>
    function generateTokens() {
      const tokens = [];
      for (let i = 0; i < 5; i++) {
        const randomInt = Math.floor(Math.random() * 9999); // Generate random integer between 0 and 9998
        tokens.push(randomInt);
      }

      const tokenOutput = document.getElementById("tokenOutput");
      tokenOutput.innerHTML = "Random Integer Tokens: " + tokens.join("-");
    }
  </script>

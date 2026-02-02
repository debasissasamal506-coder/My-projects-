    const playerHand = document.getElementById("playerHand");
    const computerHand = document.getElementById("computerHand");
    const resultText = document.getElementById("result");

    const wonScore = document.getElementById("won");
    const lostScore = document.getElementById("lost");
    const drawScore = document.getElementById("draw");

    let won = 0, lost = 0, draw = 0;

    function play(playerChoice) {
      const choices = ["rock", "paper", "scissors"];
      const computerChoice = choices[Math.floor(Math.random() * 3)];

      const handIcons = {
        rock: "✊🏻",
        paper: "🤚🏻",
        scissors: "✌🏻"
      };

      // Reset hands to rock before animation
      playerHand.textContent = "✊🏻";
      computerHand.textContent = "✊🏻";

      // Add shake animation
      playerHand.classList.add("shake");
      computerHand.classList.add("shake");

      resultText.textContent = "Shaking... 🤜🏻🤛🏻";

      // After shake, show result
      setTimeout(() => {
        playerHand.classList.remove("shake");
        computerHand.classList.remove("shake");

        playerHand.textContent = handIcons[playerChoice];
        computerHand.textContent = handIcons[computerChoice];

        if (playerChoice === computerChoice) {
          resultText.textContent = "It's a Draw! 🙆🏻";
          draw++;
          drawScore.textContent = draw;
        } else if (
          (playerChoice === "rock" && computerChoice === "scissors") ||
          (playerChoice === "paper" && computerChoice === "rock") ||
          (playerChoice === "scissors" && computerChoice === "paper")
        ) {
          resultText.textContent = "Congrats, You Won! 🎉";
          won++;
          wonScore.textContent = won;
        } else {
          resultText.textContent = "Oops, You Lost! 😢";
          lost++;
          lostScore.textContent = lost;
        }
      }, 2000); // Shake for 2 seconds
    }
    
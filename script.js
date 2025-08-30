  const gameContainer = document.querySelector(".container"),
        userResult = document.querySelector(".user_result img"),
        cpuResult = document.querySelector(".cpu_result img"),
        result = document.querySelector(".result"),
        optionImages = document.querySelectorAll(".option_image");

  optionImages.forEach((image, index) => {
    image.addEventListener("click", () => {
      image.classList.add("active");

      userResult.src = cpuResult.src = "pedra.webp";
      result.textContent = "wait...";

      optionImages.forEach((image2, index2) => {
        if (index !== index2) image2.classList.remove("active");
      });

      gameContainer.classList.add("start");

      setTimeout(() => {
        gameContainer.classList.remove("start");

        // Imagem escolhida pelo usuário
        let imageSrc = image.querySelector("img").src;
        userResult.src = imageSrc;

        // Escolha aleatória da CPU
        let randomNumber = Math.floor(Math.random() * 3);
        let cpuImages = ["pedra.webp", "papel.jpg", "tesoura.jpg"];
        cpuResult.src = cpuImages[randomNumber];

        // Valores correspondentes às escolhas
        let userValue = ["R", "P", "S"][index]; // R = pedra, P = papel, S = tesoura
        let cpuValue = ["R", "P", "S"][randomNumber];

        // Resultados possíveis
        let outcomes = {
          RR: "Draw",
          RP: "Cpu",
          RS: "User",
          PP: "Draw",
          PR: "User",
          PS: "Cpu",
          SS: "Draw",
          SR: "Cpu",
          SP: "User",
        };

        let outcomeValue = outcomes[userValue + cpuValue];

        result.textContent = userValue === cpuValue
          ? "Match Draw"
          : `${outcomeValue} Won!!`;
      }, 2500);
    });
  });


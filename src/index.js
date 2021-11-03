
    // General function that will update the HTML content dynamically
    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
      };
    
        // First Screen => Splash Screen
        const buildSplashScreen = () => {
            buildDom(`
              <h1 class = "neon-text-1">Enraged Square</h1>
              <br />
              <button id="start-button">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Start Game
              </button>
            `);
            const startButton = document.getElementById("start-button");
            startButton.addEventListener("click", buildGameScreen);
          };
    
    // Second Screen => Game Screen
      const buildGameScreen = () => {
        buildDom(`
          <div clas= "outer">
            <div id="game-board">
              <div class="score-live">
                
                  <span class"score">Score: </span>
                  <span class="counter">0</span>
                
                
              </div> 
              <div class="lives-screen">
                <img class ="live" src="/images/live.png" alt="Live Icon">
                <img class ="live" src="/images/live.png" alt="Live Icon">
                <img class ="live" src="/images/live.png" alt="Live Icon">
              </div>
            </div> 

            <canvas id="canvas" width="800" height="500"></canvas>
            </div>
           
        `);
    
        const endButton = document.getElementById("end-button");

    
        const game = new Game();
        game.start()
      }
    
        // Third Screen => Game Over
        const buildGameOver = () => {
            buildDom(`
                <section class="game-over">
                    <h1 class = "neon-text-2">Game Over</h1>
                    <div><p><span id ="results" >Your Score: </span><span class="final-score">0</span></p></div> </div> 
                    <div><p><span id ="results" >Highest Score: </span><span class="high-score">0</span></p></div> </div> 
                    <button id = "game"> TRY AGAIN</button>
                    <div class= "pointer"> </div>
                </section>
            `);


        
            const restartButton = document.querySelector("button");
            restartButton.addEventListener("click",buildGameScreen);
        };
    
       
    
    
    
    
    // When the window loads, then we will run the "runGameScreens" function
    // "load" waits for the html and JS
    window.addEventListener("load", buildSplashScreen);
    
    
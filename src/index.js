
    // General function that will update the HTML content dynamically
    let backgroundMusic = new Audio('./audio/background-audio2.mp3')

    const buildDom = (html) => {
        const main = document.querySelector("main");
        main.innerHTML = html;
      };
    
        // First Screen => Splash Screen
        const buildSplashScreen = () => {
            buildDom(`
              <h1 class = "neon-text-1">Squared Madness</h1>
              <table>
                  <tr>
                  <th colspan = "2" id="table-text"><b> Intructions </b> </th>

                  </tr>

                  <tr>
                    <td id="table-text"><b>Move </b></td>
                    <td> W  |  A |  D</td>
   
                  </tr>
                  <tr>
                    <td id="table-text"><b>Point</b></td>
                    <td>Cursor</td>
                  </tr>
                  <tr>
                    <td id="table-text"><b>Shoot</b></td>
                    <td>CLICK!</td>
                  </tr>
                <table>

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
                <img class ="live" src="images/live.png" alt="Live Icon">
                <img class ="live" src="images/live.png" alt="Live Icon">
                <img class ="live" src="images/live.png" alt="Live Icon">
              </div>
            </div> 

            <canvas id="canvas" width="800" height="500"></canvas>
            </div>
           
        `);
    
        const endButton = document.getElementById("end-button");

    
        const game = new Game();
        game.start()
          //Music
          backgroundMusic.play();
    
      }
    
        // Third Screen => Game Over
        const buildGameOver = () => {
            buildDom(`
                <section class="game-over">
                    <h1 class = "neon-text-2">Game Over</h1>
                    <div>
                      <p><span id ="results" class="user-score" >Score: <span class="final-score">0</span></p></span>
                      <p><span id ="results" class="highest-score" >Highest Score: <span class="high-score">0</span></p></span></div> 
                    <button id="start-button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Try Again
                  </button>
                    <div class= "pointer"> </div>
                </section>
            `);

            //Ending background music
            backgroundMusic.pause();
            backgroundMusic.currentTime = 0;

            const restartButton = document.querySelector("button");
            restartButton.addEventListener("click",buildGameScreen);
        };
    
       
    
    
    
    
    // When the window loads, then we will run the "runGameScreens" function
    // "load" waits for the html and JS
    window.addEventListener("load", buildSplashScreen);
    
    
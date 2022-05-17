function scoreCardTemp() {
    return /*html*/ `
        <div class="main-end-container">
        <div class="end-container">
            <div> <img src="./img/logo_2.png" alt=""> </div>
                <h5 id="questiontext" class="bold-text">Complete</h5>
            <div class="score-board">
                <h3 class="endscore">Your Score</h3> 
                <div class="ending-score">
                    <span class="margin-left"id="amount_Of_Right_Questions"> </span>  
                    <span>/</span>
                    <span id="amount_Questions"> </span></div>
                </div>
        </div>

                    <div class="end-buttons">
            <div><button class="btn btn-success" id="next_Button" onclick="refreshPage()">Replay</button></div>
            <div><button class="btn btn-success" id="next_Button" onclick="comingsoon()">Share</button></div>
            </div>
            </div>

        `;

}
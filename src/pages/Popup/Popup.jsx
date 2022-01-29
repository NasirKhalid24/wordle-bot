import React from 'react';
import button from 'react';

import './Popup.css';

const Popup = () => {
  
  function buttonClicked(){
    chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
      var activeTab = tabs[0];
      chrome.tabs.sendMessage(activeTab.id, {"message": "solve-wordle"});
    });
  }

  return (
    <div className="App">
      <button onClick={buttonClicked} class="button-7" role="button">Solve!</button>

      <div>
      <a href="http://sonorouschocolate.com/notes/index.php?title=The_best_strategies_for_Wordle" target="_blank" >How it works</a>
      <br></br>
      <br></br>
      <a href="https://github.com/NasirKhalid24/wordle-bot" target="_blank"> 🐈  💻</a>
      </div>
    </div>
  );
};

export default Popup;

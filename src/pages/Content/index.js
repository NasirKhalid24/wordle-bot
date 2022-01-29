import { strategy } from './modules/strategy';
import { helperCheck } from './modules/helper';

import { getKey } from './modules/getKey';
import { getResult } from './modules/getResult';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

chrome.runtime.onMessage.addListener(buttonClicked)

async function buttonClicked(message, sender, sendResponse){
    if(message.message === "solve-wordle" && window.location.href.includes('powerlanguage.co.uk/wordle')){

        let result = ""
        let new_path = strategy["root"]

        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 5; j++) {
                getKey( new_path["data"][j] ).click();
                await sleep(500);

            }

            await sleep(500);
            getKey( "enter"  ).click();
            await sleep(3000);
            
            result = getResult(i);

            var path = new_path 
            for (let idx = 0; idx < path["children"].length; idx++) {
                var key = Object.keys(path["children"][idx])[0]
                if( key === result ){
                    new_path = path["children"][idx][key]
                }
                
            }

        }
        
    }
}

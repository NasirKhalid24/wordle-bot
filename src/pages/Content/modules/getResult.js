
export const getResult = (row) => {
    var res = ""
    
    for (let i = 0; i < 5; i++) {
        var tile_res = document.querySelector("body > game-app").shadowRoot.querySelector(`#board > game-row:nth-child(${row+1})`).shadowRoot.querySelector(`div > game-tile:nth-child(${i+1})`).getAttribute("evaluation")
        
        if(tile_res === "absent"){
            res = res.concat("B")
        }else if(tile_res === "present"){
            res = res.concat("Y")
        }else if(tile_res === "correct"){
            res = res.concat("G")
        }
    }
    return res
}
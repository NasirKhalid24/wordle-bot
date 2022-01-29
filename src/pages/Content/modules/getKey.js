import { keys } from './keys';

export const getKey = (letter) => {
    return document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-keyboard").shadowRoot.querySelector(`#keyboard > div:nth-child(${keys[letter]["row"]}) > button:nth-child(${keys[letter]["col"]}`);
}
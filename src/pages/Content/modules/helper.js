export const helperCheck = () => {
    const helper = document.querySelector("body > game-app").shadowRoot.querySelector("#game > game-modal > game-help");
    return helper === null
}
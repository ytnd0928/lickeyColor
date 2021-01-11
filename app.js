`use strict`
const btn = document.getElementById('btn');
const result = document.getElementById(`result`);

btn.addEventListener (`click`, () => {

  const num = Math.random ();

  if(num < 0.1) {
      result.textContent = `赤`;
    } else if (num < 0.2 ){
      result.textContent = `青`;
    } else if (num < 0.3 ){
      result.textContent = `黄`;
    }　else if (num < 0.4) {
      result.textContent = `緑`;
    } else if (num < 0.5) {
      result.textContent = `紫`;
    } else if (num < 0.6 ) {
      result.textContent = `橙`;
    } else if (num < 0.7 ) {
      result.textContent = `茶`;
    } else if (num < 0.8 ) {
      result.textContent = `ピンク`;
    } else if (num < 0.9 ){
      result.textContent = `水色`;
    } else {
      result.textContent = `黒`;
    }
});

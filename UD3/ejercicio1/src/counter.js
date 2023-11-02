// export function incrementar(element) {
//  let contador = 0;
  
//     const setCounter = (count) => {
//       contador = count;
//       element.innerHTML = `count is ${contador}`;
//     };
//   }
//   element.addEventListener('click', () => setCounter(contador + 1))
// setCounte(1)
export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}

export function resetCounter(element) {
  
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setupCounter(counter = 1));
  setupCounter(counter)
}
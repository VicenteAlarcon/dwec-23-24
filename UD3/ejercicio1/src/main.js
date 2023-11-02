import '/style.css'
import { resetCounter, setupCounter  } from './counter.js'

document.querySelector("#app").innerHTML = `
  <div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <div class="card2>

    </div>
    <p class="read-the-docs">
      <button id="reset" type="button"> </button>
    </p>
  </div>
`;

setupCounter(document.querySelector('#counter'))
resetCounter(document.querySelector("#reset"));
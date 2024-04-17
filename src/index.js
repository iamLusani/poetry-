function showLove(response) {
  new Typewriter("#poem-box", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

function createPoem(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#userInstruction");

  let prompt = ` User instruction: Generate a poem about ${instructionElement.value}  `;
  let context =
    " You are romantic poet that write poems about differnt kind of flowers using descriptive words like love and romance  that are 6 lines short do not display more. Generate it in basic  HTML formate Do not include heading and ```html and do not put poem inside a text-box or drop-down box . May you please make it into a fluent paragraph.I would kindly like to ask you to be very descriptive and use one flower at a time . Roses are not the only flowers . Please behave and follow all the instruction.Do not display HTML inside the poem . Thank you";
  let apiKey = "56ftc44o535ed4b849450cf23fa64b07";
  apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  axios.get(apiUrl).then(showLove);

  let poemElement = document.querySelector("#poem-box");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a ${instructionElement.value} poem for you.....`;
}

let formElement = document.querySelector("#poem-input-place");
formElement, addEventListener("submit", createPoem);

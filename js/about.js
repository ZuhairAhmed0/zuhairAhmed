import getResponse from './getResponse.js';
const aboutContainer = document.querySelector(".about .container");

getResponse("about-me")
  .then(({ info }) => {
    const keys = info.moreInfo.map((more) => Object.keys(more)).flat();
    const values = info.moreInfo.map((more) => Object.values(more)).flat();

    let html = `<div> 
        <p>
            ${info.info}
        </p>
        <table class="info">`;

    keys.map((key, i) => {
      html += `<tr>
                        <td for="${key}" style="text-transform: capitalize"><strong>${key} :</strong></td>
                        <td>${values[i]}</td>
                    </tr>`;
    });
    html += `<tr>
                <td for="Email"><strong>Age:</strong></td>
                <td id="age">
                ${new Date().getFullYear() - 2002}
                </td>
             </tr>
        </table>
        <button>Download CV</button>
    </div>`;

    aboutContainer?.insertAdjacentHTML("beforeend", html);
  })
  .catch((error) => {
    console.log(error);
  });

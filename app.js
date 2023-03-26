const fontList = ["Arial", "sans-serif", "serif", "monospace", "cursive"];
const fontStyle = Math.trunc(Math.random() * fontList.length);
const rotateDeg = Math.trunc(Math.random() * 25) - 50;

let captchaText = "";

const getCaptcha = () => {
  captchaText = btoa(Math.random() * 1000000000).substring(0, 6);
};

const setCaptcha = () => {
  const result = captchaText
    .split("")
    .map((char) => {
      return `<span 
                style="
                    transform:rotate(${rotateDeg}deg);
                    font-family:${fontList[fontStyle]}
            " 
            >${char}</span>`;
    })
    .join("");

  document.querySelector(".captcha-preview").innerHTML = result;
};

document.querySelector(".captcha-refresh-btn").addEventListener("click", () => {
  getCaptcha();
  setCaptcha();
});

const captchaHandler = () => {
  getCaptcha();
  setCaptcha();
};

captchaHandler();

document.querySelector(".signup-btn").addEventListener("click", function () {
  const userCaptchaValue = document.querySelector(".captcha-input").value;
  if (userCaptchaValue === captchaText) swal("", "Signed In", "success");
  else swal("", "Invalid Captcha, Try Again!", "warning");
});


// dark mode
document.querySelector(".theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document
    .querySelector(".login-container")
    .classList.toggle("theme-toggle-dark");
  document.querySelector(".bold-main-title").classList.toggle("dark-mode");
  document
    .querySelector(".captcha-preview")
    .classList.toggle("preview-captcha-dark");
  document
    .querySelector(".header-container")
    .classList.toggle("header-container-dark");

  const nodeList = document.querySelectorAll(".input-box");
  for (let i = 0; i < nodeList.length; i++) {
    nodeList[i].classList.toggle("input-box-dark");
  }
});

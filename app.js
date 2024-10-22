const showBtn = document.querySelector("#show-btn");
const modal = document.querySelector("#modal");
const closeBtn = document.querySelector("#close-btn");
const clearBtn = document.querySelector("#clr-btn");

showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});
closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    modal.classList.add("hidden");
  }
});
// clear button uchun
clearBtn.addEventListener("click", () => {
  ranglar.textContent = "";
});
// closeBtn.addEventListener("click", () => {
//   getRandomColor;
// });
// bu rangllarga oid
const son = 10;
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}
const ranglar = document.querySelector(".span");
for (let i = 0; i < Number(son); i++) {
  const color = getRandomColor();
  ranglar.innerHTML += `
    <li class="list-style" style="color:${color}"> ${color} 
      <div class="all-btn"> 
        <button class="button"data-color=${color} >Delete</button>
        <button class="button" data-color=${color}>Apply</button>
      </div>
    </li>
  `;
}

document.addEventListener("click", (e) => {
  if (e.target.textContent === "Delete") {
    e.target.parentElement.parentElement.remove();
    const color2 = e.target.dataset.color;
    modal.style.backgroundColor = color2;
  } else if (e.target.textContent === "Apply") {
    const color = e.target.dataset.color;
    // console.log(color);
    document.body.style.backgroundColor = color;
  }
});

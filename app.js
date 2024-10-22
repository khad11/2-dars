// const parag = document.querySelector("p");
// console.log(parag.textContent);
// console.log(parag.innerText);
// console.log(parag.innerHTML);

// const timee = document.querySelector(".hour");
// const text = document.querySelector("h2");
const son = prompt("nechta rang chiqsin ");
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * letters.length)];
  }

  return color;
}
const ranglar = document.querySelector("h1");
for (let i = 0; i < Number(son); i++) {
  const color = getRandomColor();
  ranglar.innerHTML += `<li style="color:${color}"> ${color} </li>`;
}
// console.log();
// setInterval(() => {
//   let colorr = getRandomColor();
//   timee.textContent = new Date().toLocaleTimeString();
//   timee.style.color = colorr;
//   text.textContent = colorr;
// }, 1000);

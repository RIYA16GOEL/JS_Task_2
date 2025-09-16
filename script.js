
document.getElementById("toggle-mode").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});


document.getElementById("change-bg").addEventListener("click", function () {
  const colors = ["#f39c12", "#e74c3c", "#2ecc71", "#3498db", "#9b59b6"];
  const boxes = document.querySelectorAll(".box");
  boxes.forEach(box => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    box.style.backgroundColor = randomColor;
  });
});


document.getElementById("hover-fact").addEventListener("mouseenter", function () {
  alert("🌍 Fun Fact: Honey never spoils. Archaeologists found 3000-year-old honey still edible!");
});


document.getElementById("add-div").addEventListener("click", function () {
  const container = document.getElementById("random-container");
  const newDiv = document.createElement("div");
  newDiv.classList.add("random-div");

 
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  newDiv.style.background = randomColor;

 
  newDiv.textContent = "Div #" + (container.children.length + 1);

  container.appendChild(newDiv);
});

const menu_div = document.querySelector(".featured-items");

num_items = 50;
num_rows = Math.ceil(num_items/3)
height = num_rows * 80

document.querySelector(".featured-items").style.height = `${height}vh`;

for (let i = 0; i < num_items; i++) {
    const newListItem = document.createElement("div");

    newListItem.textContent;
    newListItem.classList.add("item-box");

    newListItem.innerHTML = `
    <img src="images/bowl.png" class="item-img">
    <h1 class="item-title">Bowl</h1>
    <p class="item-text">This is a description of the item. I will just put a few filler words here.</p>
    <div class="item-button">
        View Product
    </div>
    `

    menu_div.appendChild(newListItem);
}
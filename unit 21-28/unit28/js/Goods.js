class Goods {
  constructor(name, amount, image, count, out) {
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
    this.out = out;
  }
  draw(cost) {
    this.out.innerHTML += `name: ${this.name} cost: ${cost} <br>`;
    this.out.appendChild(this.image);
  }
}

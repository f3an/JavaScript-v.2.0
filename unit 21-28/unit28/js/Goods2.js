class Goods2 extends Goods {
  constructor(name, amount, image, count, out, sale) {
    super();
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
    this.out = out;
    if (typeof sale === "boolean") this.sale = sale;
  }
  draw(cost) {
    this.out.innerHTML = `sale: ${this.sale} `
    super.draw(cost);
  }
}

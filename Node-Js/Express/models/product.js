const db = require("../util/database");



module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  save() {
    if (this.id) {
      return db.execute("UPDATE products SET title=?, price=?, imageUrl=?, description=? WHERE id=?",
        [this.title, this.price, this.imageUrl, this.description, this.id]);
    } else {
      return db.execute("INSERT INTO products (title, price, imageUrl, description) VALUES (?,?,?,?)",
        [this.title, this.price, this.imageUrl, this.description]);
    }
  }

  

  static deleteById(id) {
    return db.execute("delete from products where id=?",[id]);

  }

  static fetchAll() {
    return db.execute("select * from products");
  }

  static findById(id) {
    return db.execute("select * from products where id=?",[id]);

  }
};

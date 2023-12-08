const fs = require('fs');
const path = require('path');
const rootDir=require("../util/path");

module.exports = class Product {
  constructor(t) {
    this.title = t;
  }

  save() {
    const p = path.join(
      rootDir,
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      let products = [];
      if (fileContent.length > 0) {
        try {
          products = JSON.parse(fileContent);
        } catch (parseError) {
          console.error('Error parsing JSON:', parseError);
          return;
        }
      }

      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) {
          console.error('Error writing file:', err);
        }
      });
    });
  }

  static fetchAll(callback) {
    const p = path.join(
      rootDir,
      'data',
      'products.json'
    );
    fs.readFile(p, (err, fileContent) => {
      if (err) {
        console.error('Error reading file:', err);
        callback([]);
        return;
      }

      try {
        const products = JSON.parse(fileContent);
        callback(products);
      } catch (parseError) {
        console.error('Error parsing JSON:', parseError);
        callback([]);
      }
    });
  }
};

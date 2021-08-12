import { Categories } from "./db";
import { Products } from "./db";
import { Reviews } from "./db";

const resolvers = {
  Query: {
    Categories:(parent, args, context, info) => {
        return Categories;
      } ,
      Products:(parent, args, context, info) => {
    return Products;
    },
    Reviews:(parent, args, context, info) => {
        return Reviews;
        },
  },
  Mutation: {
    createProduct: (parent, { id, name, count, price, country,category_id }, context, info) => {
        const newProduct = {id, name, count, price, country,category_id };
    
        Products.push(newProduct);
    
        return newProduct;
      },
      deleteProduct: (parent, { id }, context, info) => {
        const productIndex = Products.findIndex(Products => Products.id == id);
  
        if (productIndex === -1) throw new Error("Product not found.");
  
        const deletedProduct = Products.splice(productIndex, 1);
  
        return deletedProduct[0];
      },
      changeCount: (parent, { id, newCount }, context, info) => {
        const productIndex = Products.findIndex(Products => Products.id == id);
        if (productIndex === -1) throw new Error("Product not found.");
        const changeProductCount = Products.map(i => i.id == id ? Object.assign({}, i, {count: newCount}): i);
        return changeProductCount[productIndex];
      },

      changePrice: (parent, { id, newPrice }, context, info) => {
        const productIndex = Products.findIndex(Products => Products.id == id);
        if (productIndex === -1) throw new Error("Product not found.");
        const changeProductPrice = Products.map(i => i.id == id ? Object.assign({}, i, {price: newPrice}): i);
        return changeProductPrice[productIndex];
      }
  }
};

export default resolvers;
import { renderProducts } from "./renderproducts";

export interface Product {
  name: string;
  image: string;
  description: string;
  price: number;
  id: number;
  quantity: number;
}
export let cart: Product[] = JSON.parse(
  localStorage.getItem("cartItem") || "[]"
);

window.onload = () => {
  renderProducts();
};

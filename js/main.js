import Order from "./models/order.js";
import * as oderService from "./services/order-service.js";

const dados = document.getElementById("orderInput").innerHTML.split("\n");

const order = new Order(dados[0], Number(dados[1]), Number(dados[2]));

const total = oderService.total(order);

console.log(`Pedido código ${order.code}`);
console.log(`Valor total: R$ ${total.toFixed(2)}`);
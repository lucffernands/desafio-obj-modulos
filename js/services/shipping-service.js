export function shipment(order) {
   if (order.basic <100.0) {
    return 20.0;
   } else if (order.basic >= 200.0) {
    return 0.0;
   } else {
    return 12.0;
   }
}

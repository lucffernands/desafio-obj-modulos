import * as shippingService from './shipping-service.js';

export function total(order) {
    
    const discount = order.basic * (order.discount / 100.0) ;
    const shipment = shippingService.shipment(order);

    return order.basic - discount + shipment;
}


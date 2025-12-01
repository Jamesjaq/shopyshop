// Order Model

class Order {
    constructor(items, user, status) {
        this.items = items; // Array of items in the order
        this.user = user; // User who placed the order
        this.status = status || 'pending'; // Order status
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
    }

    updateStatus(newStatus) {
        this.status = newStatus;
    }
}

module.exports = Order;
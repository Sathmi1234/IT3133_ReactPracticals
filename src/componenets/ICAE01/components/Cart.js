import React from 'react';

export default function Cart({ cartItems }) {
    const items = cartItems || [];
    let total = 0;

    for (let i = 0; i < items.length; i++) {
        total += items[i].price * items[i].qty;
    }

    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>
                    <tr>
                        <td>Product</td>
                        <td>QTY</td>
                        <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                    {items.length > 0 ? (
                        items.map(item => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.qty}</td>
                                <td>{item.price * item.qty}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No items in the cart</td>
                        </tr>
                    )}
                    <tr>
                        <td>Grand Total :</td>
                        <td colSpan={2}>{total}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

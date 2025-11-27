import { useEffect, useMemo, useState } from 'react';
import { CartContext } from './CartContextOnly';

export default function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const saved = localStorage.getItem('sushifast_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      // ignore parse errors
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('sushifast_cart', JSON.stringify(items));
    } catch {
      // ignore write errors
    }
  }, [items]);

  const addToCart = (product) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === product.id);
      if (idx !== -1) {
        const copy = [...prev];
        copy[idx] = { ...copy[idx], qty: copy[idx].qty + (product.qty || 1) };
        return copy;
      }
      return [...prev, { ...product, qty: product.qty || 1 }];
    });
  };

  const removeFromCart = (id) => setItems((prev) => prev.filter((p) => p.id !== id));

  const setQuantity = (id, qty) => {
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p)));
  };

  const increment = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const decrement = (id) => setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p)));

  const clearCart = () => setItems([]);

  const { count, subtotal } = useMemo(() => {
    const count = items.reduce((acc, it) => acc + it.qty, 0);
    const subtotal = items.reduce((acc, it) => acc + (it.prix || 0) * it.qty, 0);
    return { count, subtotal };
  }, [items]);

  const value = {
    items,
    addToCart,
    removeFromCart,
    setQuantity,
    increment,
    decrement,
    clearCart,
    count,
    subtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

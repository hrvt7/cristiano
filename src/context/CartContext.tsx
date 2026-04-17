"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  name: string;
  price: number;
  image?: string;
  qty: number;
};

type CartCtx = {
  items: CartItem[];
  add: (item: Omit<CartItem, "qty">) => void;
  remove: (name: string) => void;
  dec: (name: string) => void;
  clear: () => void;
  totalQty: number;
  totalPrice: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  hydrated: boolean;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "smuffys-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch {}
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      try {
        localStorage.setItem(KEY, JSON.stringify(items));
      } catch {}
    }
  }, [items, hydrated]);

  const add: CartCtx["add"] = (item) =>
    setItems((prev) => {
      const f = prev.find((i) => i.name === item.name);
      if (f) return prev.map((i) => (i.name === item.name ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...item, qty: 1 }];
    });

  const remove: CartCtx["remove"] = (name) =>
    setItems((prev) => prev.filter((i) => i.name !== name));

  const dec: CartCtx["dec"] = (name) =>
    setItems((prev) =>
      prev.flatMap((i) => {
        if (i.name === name) return i.qty > 1 ? [{ ...i, qty: i.qty - 1 }] : [];
        return [i];
      })
    );

  const clear = () => setItems([]);

  const totalQty = items.reduce((s, i) => s + i.qty, 0);
  const totalPrice = items.reduce((s, i) => s + i.qty * i.price, 0);

  return (
    <Ctx.Provider
      value={{ items, add, remove, dec, clear, totalQty, totalPrice, open, setOpen, hydrated }}
    >
      {children}
    </Ctx.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export const formatHUF = (n: number) =>
  new Intl.NumberFormat("hu-HU").format(n) + " Ft";

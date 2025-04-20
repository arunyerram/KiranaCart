
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  unit: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(i => i.id === item.id);
        
        if (existingItem) {
          set({
            items: currentItems.map(i => 
              i.id === item.id 
                ? { ...i, quantity: i.quantity + item.quantity }
                : i
            )
          });
        } else {
          set({ items: [...currentItems, item] });
        }
      },
      
      removeItem: (id) => {
        set({ items: get().items.filter(item => item.id !== id) });
      },
      
      updateQuantity: (id, quantity) => {
        set({
          items: get().items.map(item => 
            item.id === id 
              ? { ...item, quantity: quantity }
              : item
          )
        });
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      total: () => {
        return get().items.reduce(
          (sum, item) => sum + item.price * item.quantity, 
          0
        );
      }
    }),
    {
      name: 'kirana-cart'
    }
  )
);

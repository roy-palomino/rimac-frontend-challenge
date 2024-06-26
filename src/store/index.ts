import { create } from "zustand";

interface UserData {
  doc_number: string;
  doc_type: string;
  phone: string;
  name: string;
  lastName: string;
  birthDay: string;
  setUserData: (doc_number: string, doc_type: string, phone: string) => void;
  setUser: (name: string, lastName: string, birthDay: string) => void;
}

interface SelectedPlan {
  name: string;
  price: number;
  description: string[];
  age: number;
  setSelectedPlan: (
    name: string,
    price: number,
    description: string[],
    age: number,
  ) => void;
}

export const useUserStore = create<UserData>((set) => ({
  doc_number: "",
  doc_type: "",
  phone: "",
  name: "",
  lastName: "",
  birthDay: "",
  setUserData: (doc_number: string, doc_type: string, phone: string) =>
    set(() => ({ doc_number, doc_type, phone })),
  setUser: (name: string, lastName: string, birthDay: string) =>
    set(() => ({ name, lastName, birthDay })),
}));

export const usePlanStore = create<SelectedPlan>((set) => ({
  name: "",
  price: 0,
  description: [],
  age: 0,
  setSelectedPlan: (
    name: string,
    price: number,
    description: string[],
    age: number,
  ) => set(() => ({ name, price, description, age })),
}));

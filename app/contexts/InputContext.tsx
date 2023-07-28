"use client";

import React, { createContext, useState, ReactNode } from "react";

type InputContextType = {
  inputValue: string;
  updateInputValue: (value: string) => void;
};

export const InputContext = createContext({} as InputContextType);

type InputProviderProps = {
  children: ReactNode;
};

export default function InputProvider({ children }: InputProviderProps) {
  const [inputValue, setInputValue] = useState("");

  const updateInputValue = (value: string) => {
    setInputValue(value);
  };

  return (
    <InputContext.Provider value={{ inputValue, updateInputValue }}>
      {children}
    </InputContext.Provider>
  );
}

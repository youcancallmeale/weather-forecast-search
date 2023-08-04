"use client";

import React, { createContext, ReactNode } from "react";
import { IResults } from "../models/model";

type ProviderProps = {
  children: ReactNode;
};

export const Context = createContext({} as IResults);

export default function Provider({ children }: ProviderProps) {
  return <Context.Provider value={{ ...Context }}>{children}</Context.Provider>;
}

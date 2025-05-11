"use client"

import React, { createContext, useContext } from "react"

export interface StoreConfigType {
  storeCode: string
  name: string
}

const StoreConfigContext = createContext<StoreConfigType | null>(null)

export const StoreConfigProvider: React.FC<
  React.PropsWithChildren<StoreConfigType>
> = ({ children, ...values }) => {
  return (
    <StoreConfigContext.Provider value={{ ...values }}>
      {children}
    </StoreConfigContext.Provider>
  )
}

export const useStoreConfig = () => {
  const context = useContext(StoreConfigContext)
  if (!context) {
    throw new Error(
      "useStoreConfig must be used within the StoreConfigProvider"
    )
  }
  return context
}

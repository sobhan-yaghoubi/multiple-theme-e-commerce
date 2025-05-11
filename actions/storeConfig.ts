"use server"

import { StoreConfigType } from "@/context/StoreConfig.context"
import { defaultDomain, mockDataConfigs } from "@/config/theme"
import { headers } from "next/headers"

export const getStoreConfig = async (): Promise<StoreConfigType> => {
  const header = await headers()
  const storeConfigHeader = header.get("x-store-config")

  return Promise.resolve(
    storeConfigHeader
      ? (JSON.parse(storeConfigHeader) as StoreConfigType)
      : mockDataConfigs[defaultDomain]
  )
}

import { StoreConfigType } from "@/context/StoreConfig.context"

export const defaultDomain = process.env.NEXT_PUBLIC_DEFAULT_DOMAIN

export const mockDataConfigs: Record<string, StoreConfigType> = {
  "store.default": { storeCode: "default", name: "core" },
  "store1.localhost": { storeCode: "Store1", name: "theme1" },
  "store2.localhost": { storeCode: "Store2", name: "theme2" },
  "store3.localhost": { storeCode: "Store3", name: "theme3" },
}

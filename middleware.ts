import { NextRequest, NextResponse } from "next/server"
import { defaultDomain, mockDataConfigs } from "@/config/theme"

const fetchStoreConfig = async (domain: string) => {
  const host = domain.split(":")[0]
  return mockDataConfigs[host] || mockDataConfigs[defaultDomain]
}

export const middleware = async (request: NextRequest) => {
  const domain = request.headers.get("host") || defaultDomain
  const storeConfig = await fetchStoreConfig(domain)

  const response = NextResponse.next()
  response.headers.set("x-store-config", JSON.stringify(storeConfig))

  return response
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}

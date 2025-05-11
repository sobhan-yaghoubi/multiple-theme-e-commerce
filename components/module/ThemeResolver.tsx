"use client"

import { useStoreConfig } from "@/context/StoreConfig.context"
import React from "react"
import dynamic from "next/dynamic"

type ThemeResolverProps = {
  component: string
  componentType: "template" | "module" | "ui"
  fallback?: React.ReactNode
  [key: string]: any
}

const ThemeResolver = ({
  component,
  componentType,
  fallback,
  ...props
}: ThemeResolverProps) => {
  const { name } = useStoreConfig()
  const ThemeComponent = dynamic<any>(
    () =>
      import(`@/themes/${name}/components/${componentType}/${component}`).catch(
        () => {
          return import(
            `@/themes/core/components/${componentType}/${component}`
          )
        }
      ),
    {
      loading: () => <>{fallback}</>,
      ssr: true,
    }
  )

  return <ThemeComponent {...props} />
}

export default ThemeResolver

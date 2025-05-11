declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_DEFAULT_DOMAIN: string
    }
  }
}

export {}

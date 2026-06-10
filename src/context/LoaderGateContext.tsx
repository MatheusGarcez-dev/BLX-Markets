import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'

type LoaderGateContextValue = {
  loaderIdle: boolean
  setLoaderBusy: (busy: boolean) => void
}

const LoaderGateContext = createContext<LoaderGateContextValue | null>(null)

export function LoaderGateProvider({ children }: { children: ReactNode }) {
  const [loaderIdle, setLoaderIdle] = useState(false)

  const setLoaderBusy = useCallback((busy: boolean) => {
    setLoaderIdle(!busy)
  }, [])

  return (
    <LoaderGateContext.Provider value={{ loaderIdle, setLoaderBusy }}>
      {children}
    </LoaderGateContext.Provider>
  )
}

export function useLoaderGate() {
  const ctx = useContext(LoaderGateContext)
  if (!ctx) {
    throw new Error('useLoaderGate must be used within LoaderGateProvider')
  }
  return ctx
}

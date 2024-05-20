import { QueryClientProvider } from "@tanstack/react-query"
import { useState } from "react"


export function Providers({ children}) {
    const [queryClient] = useState(() => new queryClient())
  
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
  }
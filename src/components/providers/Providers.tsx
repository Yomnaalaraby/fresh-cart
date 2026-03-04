
'use client';
import { AppStore, createStore, PreloadedState } from "@/store/store";
import { ReactNode, useRef } from "react"
import { Provider } from "react-redux"

interface ProvidersProps {
    children: ReactNode;
    preloadedState?: any;
}
export default function Providers({ children, preloadedState }: ProvidersProps) {
    const storeRef = useRef<null | AppStore>(null)

    if (!storeRef.current) {
        storeRef.current = createStore(preloadedState)
    }



    return <>
        <Provider store={storeRef.current}>
            {children}
        </Provider>
    </>
}

import { createContext, useState, useCallback } from "react";
import { Children, DrawerOptions, TDrawerContext } from "../types";

export const DrawerContext = createContext({} as TDrawerContext)

export default function DrawerContextProvider({ children }: Children) {

    const [isDrawerOpen, setOpenDrawer] = useState(false);
    const [drawerOptions, setDrawerOptions] = useState<DrawerOptions[]>([]);

    const toggleDrawer = useCallback(() => {
        setOpenDrawer(oldDrawer => !oldDrawer);
    }, [])

    const toggleDrawerOptions = useCallback((newDrawerOptions: DrawerOptions[]) => {
        setDrawerOptions(newDrawerOptions);
    }, [])

    return (
        <DrawerContext.Provider value={{ isDrawerOpen, toggleDrawer, drawerOptions, toggleDrawerOptions }}>
            {children}
        </DrawerContext.Provider>
    );
}
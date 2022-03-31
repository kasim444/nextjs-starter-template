import React from "react";
import { createRootStore } from "./features";

const StoreContext = React.createContext<
    ReturnType<typeof createRootStore> | undefined
>(undefined);

export const RootStoreProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const root = createRootStore();

    return (
        <StoreContext.Provider value={root}>{children}</StoreContext.Provider>
    );
};

export const useStore = () => {
    const context = React.useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }

    return context;
};

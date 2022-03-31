import { types, onSnapshot } from "mobx-state-tree";
import { UiStore } from "./ui";

export const RootStore = types.model("RootStore", {
    ui: UiStore,
});

export const createRootStore = () => {
    const rootStore = RootStore.create({
        ui: UiStore.create(),
    });

    const isProd = process.env.NEXT_PUBLIC_ENV === "production";
    onSnapshot(rootStore, (snapshot) => !isProd && console.log({ snapshot }));

    return rootStore;
};

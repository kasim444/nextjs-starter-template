import { types } from "mobx-state-tree";

/**
 * This file is generated as an example of Mobx State Tree Stores
 *
 * To learn more about Mobx and Mobx State Tree,
 * please visit https://mobx-state-tree.js.org/intro/welcome
 */

export const UiStore = types
    .model("Ui", {
        isOpenDrawer: types.optional(types.boolean, false),
        isOpenNewsletterModalForm: types.optional(types.boolean, false),
    })
    .actions((ui) => ({
        onToggleDrawer() {
            ui.isOpenDrawer = !ui.isOpenDrawer;
        },
        onCloseDrawer() {
            ui.isOpenDrawer = false;
        },
        onClickNewsletterInfo() {
            ui.isOpenDrawer = false;
            ui.isOpenNewsletterModalForm = true;
        },
        onToggleNewsletterModalForm() {
            ui.isOpenNewsletterModalForm = !ui.isOpenNewsletterModalForm;
        },
        onCloseNewsletterModalForm() {
            ui.isOpenNewsletterModalForm = false;
        },
    }));

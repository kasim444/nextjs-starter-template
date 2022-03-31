export interface IContactLink {
    id?: string;
    type: "location" | "mail" | "phone";
    text: string;
    /**
     * activeColor is only use for EventHorizontalCard component
     */
    activeColor?: string;
}

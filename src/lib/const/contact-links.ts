import { v4 as uuidv4 } from "uuid";
import { IContactLink } from "@interfaces";

export const CONTACT_LINKS: IContactLink[] = [
    {
        id: uuidv4(),
        type: "location",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit",
    },
    {
        id: uuidv4(),
        type: "mail",
        text: "info@lorem.ipsum",
    },
    {
        id: uuidv4(),
        type: "phone",
        text: "+0 222 111 00 33",
    },
];

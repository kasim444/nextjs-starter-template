import { ILink } from "@interfaces";
export interface IBrand {
    href?: string;
    containerProps?: Omit<ILink, "href" | "label" | "as" | "nextLinkProps">;
}

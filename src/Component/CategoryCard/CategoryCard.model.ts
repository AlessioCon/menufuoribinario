import { LinkHTMLAttributes } from "react";

export interface CategoryProps extends LinkHTMLAttributes<HTMLAnchorElement>
{
    name: string, 
    route: string, 
    img: string,
}
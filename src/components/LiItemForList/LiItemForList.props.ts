import { ReactNode, MouseEventHandler } from "react";

export interface LiItemForListProps {
    children: ReactNode,
    className: string,
    icon: 'user' | 'input',
    link: string,
    onClick: MouseEventHandler<HTMLAnchorElement>
}
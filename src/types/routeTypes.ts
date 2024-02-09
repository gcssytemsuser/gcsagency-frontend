export interface MenuItemWithoutChildren {
    name: string;
    to: string;
    children: null;
}

export interface MenuItemWithChildren {
    name: string;
    children: { name: string; to: string }[];
}
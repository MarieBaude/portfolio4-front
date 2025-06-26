export interface NavItem {
  path: string;
  label: string;
}

export interface SubMenuData {
  mainLink: NavItem;
  subLinks: NavItem[];
}

export interface MenuItem {
  section: string;
  icon: string;
  altText: string;
  label: string;
  }

  export interface NavItem {
    label: string;
    link?: string;
    action?: () => void;
    icon : string;
  }
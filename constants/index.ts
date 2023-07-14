import { MenuItemProps } from "@/app/components/SideBar/MenuDropItem";
import { FaHouse, FaUserLarge, FaBagShopping } from "react-icons/fa6";

export const navLinks: Array<MenuItemProps> = [
    {
        id: "dashboards",
        title: "Dashboards",
        type: "dropdown",
        path: "",
        icon: FaHouse,
        subnav: [
            {
                id: "customer-relatioship-management",
                path: "crm",
                title: "CRM",
            },
            {
                id: "analystics",
                path: "analystics",
                title: "Analystics",
            },
            {
                id: "ecommerce",
                path: "ecommerce",
                title: "eCommerce",
            },
        ],
    },
    {
        id: "user",
        title: "User",
        type: "dropdown",
        icon: FaUserLarge,
        path: "",
        subnav: [
            {
                id: "user-profile",
                path: "user/profile",
                title: "Profile",
            },
            {
                id: "user-management",
                path: "user/management",
                title: "Management",
            },
            {
                id: "user-permission",
                path: "user/permission",
                title: "Permission",
            },
        ],
    },
    {
        id: "eCommerce",
        title: "E-Commerce",
        type: "item",
        path: "/ecommerce",
        icon: FaBagShopping,
        subnav: [
            {
                id: "products",
                path: "ecommerce/products",
                title: "Products",
            },
            {
                id: "orders",
                path: "ecommerce/orders",
                title: "Orders",
            },
            {
                id: "tracking",
                path: "ecommerce/tracking",
                title: "Tracking",
            },
        ],
    },
    {
        id: "carts",
        title: "Carts",
        path: "",
        type: "dropdown",
        icon: null,
        subnav: [],
    },
];

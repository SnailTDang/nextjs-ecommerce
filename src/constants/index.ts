import { MenuItemProps } from "../components/SideBar/MenuDropItem";
import {
    FaHouse,
    FaUserLarge,
    FaBagShopping,
    FaRegCircle,
} from "react-icons/fa6";

export const navLinks: Array<MenuItemProps> = [
    {
        id: "dashboards",
        title: "Dashboards",
        type: "dropdown",
        path: "",
        icon: FaHouse,
        child: [
            {
                id: "customer-relatioship-management",
                path: "crm",
                title: "CRM",
                icon: FaRegCircle,
            },
            {
                id: "analystics",
                path: "analystics",
                title: "Analystics",
                icon: FaRegCircle,
            },
            {
                id: "ecommerce",
                path: "ecommerce",
                title: "eCommerce",
                icon: FaRegCircle,
            },
        ],
    },
    {
        id: "user",
        title: "User",
        type: "dropdown",
        icon: FaUserLarge,
        path: "",
        child: [
            {
                id: "user-profile",
                path: "user/profile",
                title: "Profile",
                icon: FaRegCircle,
            },
            {
                id: "user-management",
                path: "user/management",
                title: "Management",
                icon: FaRegCircle,
            },
            {
                id: "user-permission",
                path: "user/permission",
                title: "Permission",
                icon: FaRegCircle,
            },
        ],
    },
    {
        id: "eCommerce",
        title: "E-Commerce",
        type: "item",
        path: "/ecommerce",
        icon: FaBagShopping,
        child: [
            {
                id: "products",
                path: "ecommerce/products",
                title: "Products",
                icon: FaRegCircle,
                child: [
                    {
                        id: "user-profile",
                        path: "user/profile",
                        title: "Profile",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-management",
                        path: "user/management",
                        title: "Management",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-permission",
                        path: "user/permission",
                        title: "Permission",
                        // icon: FaRegCircle,
                    },
                ],
            },
            {
                id: "orders",
                path: "ecommerce/orders",
                title: "Orders",
                icon: FaRegCircle,
                child: [
                    {
                        id: "user-profile",
                        path: "user/profile",
                        title: "Profile",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-management",
                        path: "user/management",
                        title: "Management",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-permission",
                        path: "user/permission",
                        title: "Permission",
                        // icon: FaRegCircle,
                    },
                ],
            },
            {
                id: "tracking",
                path: "ecommerce/tracking",
                title: "Tracking",
                icon: FaRegCircle,
                child: [
                    {
                        id: "user-profile",
                        path: "user/profile",
                        title: "Profile",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-management",
                        path: "user/management",
                        title: "Management",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-permission",
                        path: "user/permission",
                        title: "Permission",
                        // icon: FaRegCircle,
                    },
                ],
            },
        ],
    },
    {
        id: "carts",
        title: "Carts",
        path: "",
        type: "dropdown",
        icon: FaRegCircle,
        child: [],
    },
];

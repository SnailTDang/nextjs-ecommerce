import { MenuItemProps } from "../components/SideBar/MenuDropItem";
import {
    FaHouse,
    FaUserLarge,
    FaBagShopping,
    FaRegCircle,
    FaMessage,
    FaShopware,
    FaBoxOpen,
} from "react-icons/fa6";

export const navLinks: Array<MenuItemProps> = [
    {
        id: "dashboards",
        title: "Dashboards",
        type: "dropdown",
        path: "/dashboard",
        icon: FaHouse,
        child: [
            {
                id: "customer-relatioship-management",
                path: "/dashboard/crm",
                title: "CRM",
                icon: FaRegCircle,
            },
            {
                id: "analystics",
                path: "/dashboard/analystics",
                title: "Analystics",
                icon: FaRegCircle,
            },
            {
                id: "ecommerce",
                path: "/dashboard/ecommerce",
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
        path: "/user",
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
                path: "/ecommerce/products",
                title: "Products",
                icon: FaRegCircle,
                child: [
                    {
                        id: "user-profile",
                        path: "/ecommerce/products/create",
                        title: "Profile",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-management",
                        path: "/user/management",
                        title: "Management",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-permission",
                        path: "/user/permission",
                        title: "Permission",
                        // icon: FaRegCircle,
                    },
                ],
            },
            {
                id: "orders",
                path: "/ecommerce/orders",
                title: "Orders",
                icon: FaRegCircle,
                child: [
                    {
                        id: "user-profile",
                        path: "/user/profile",
                        title: "Profile",
                        // icon: FaRegCircle,
                    },
                    {
                        id: "user-management",
                        path: "/user/management",
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

export const appRoutes = [
    {
        path: "/dashboard",
        state: "dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: FaHouse,
        },
        child: [
            {
                path: "/dashboard/crm",
                index: true,
                state: "dashboard.about",
                sidebarProps: {
                    displayText: "CRM",
                    icon: FaRegCircle,
                },
            },
            {
                index: true,
                state: "dashboard.about",
                path: "/dashboard/analystic",
                sidebarProps: {
                    displayText: "Analystic",
                    icon: FaRegCircle,
                },
            },
            {
                index: true,
                state: "dashboard.about",
                path: "/dashboard/eCommerce",
                sidebarProps: {
                    displayText: "eCommerce",
                    icon: FaRegCircle,
                },
            },
        ],
    },
    {
        index: true,
        state: "dashboard.about",
        path: "/chats",
        sidebarProps: {
            displayText: "Chats",
            icon: FaMessage,
        },
    },
    {
        index: true,
        state: "dashboard.about",
        path: "/eCommerce",
        sidebarProps: {
            displayText: "eCommerce",
            icon: FaBagShopping,
        },
        child: [
            {
                path: "/eCommerce/products",
                state: "dashboard.about.index",
                sidebarProps: {
                    icon: FaBoxOpen,
                    displayText: "Products",
                },
                child: [
                    {
                        path: "/eCommerce/products/list",
                        state: "dashboard.about.index",
                        sidebarProps: {
                            // icon: FaRegCircle,
                            displayText: "Products List",
                        },
                    },
                    {
                        path: "/eCommerce/products/create",
                        state: "dashboard.index",
                        sidebarProps: {
                            displayText: "Add Product",
                        },
                    },
                    {
                        path: "/eCommerce/products/catetory",
                        state: "crm.index",
                        sidebarProps: {
                            displayText: "Catetory List",
                        },
                    },
                ],
            },
            {
                path: "/eCommerce/orders",
                state: "dashboard.about.index",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Order",
                },
                child: [
                    {
                        path: "/eCommerce/orders/list",
                        state: "dashboard.about.index",
                        sidebarProps: {
                            // icon: FaRegCircle,
                            displayText: "Order List",
                        },
                    },
                    {
                        path: "/eCommerce/orders/detail",
                        state: "dashboard.index",
                        sidebarProps: {
                            displayText: "Order Detail",
                        },
                    },
                ],
            },
            {
                path: "/eCommerce/customers",
                state: "dashboard.about.index",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Customers",
                },
                child: [
                    {
                        path: "/eCommerce/customers/list",
                        state: "dashboard.about.index",
                        sidebarProps: {
                            // icon: FaRegCircle,
                            displayText: "Customers All",
                        },
                    },
                    {
                        path: "/eCommerce/customers/detail",
                        state: "dashboard.index",
                        sidebarProps: {
                            displayText: "Customers Details",
                        },
                    },
                    {
                        path: "/eCommerce/customers/address",
                        state: "crm.index",
                        sidebarProps: {
                            displayText: "Address & Billing",
                        },
                    },
                ],
            },
        ],
    },
    {
        index: true,
        state: "dashboard.about",
        path: "/invoices",
        sidebarProps: {
            displayText: "Invoices",
            icon: FaMessage,
        },
        child: [
            {
                path: "/invoices/list",
                state: "dashboard.about.index",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Customers All",
                },
            },
            {
                path: "/invoices/preview",
                state: "dashboard.index",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Customers Details",
                },
            },
            {
                path: "/invoices/add",
                state: "crm.index",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Add",
                },
            },
            {
                path: "/invoices/edit",
                state: "crm.index",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Edit",
                },
            },
        ],
    },
];

import React from "react";
import { MenuItemProps } from "../components/SideBar/MenuDropItem";
import {
    FaHouse,
    FaUserLarge,
    FaBagShopping,
    FaRegCircle,
    FaMessage,
    FaShopware,
    FaBoxOpen,
    FaFileInvoiceDollar,
} from "react-icons/fa6";

export type RouteProps = {
    path?: string;
    displayText?: string;
    icon?: React.ElementType;
    sidebarProps?: any;
    child?: Array<RouteProps>;
    groupName?: string;
};

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

export const appRoutes: Array<RouteProps> = [
    {
        path: "/dashboard",
        sidebarProps: {
            displayText: "Dashboard",
            icon: FaHouse,
        },
        child: [
            {
                path: "/dashboard/customer",
                sidebarProps: {
                    displayText: "CRM",
                    icon: FaRegCircle,
                },
            },
            {
                path: "/dashboard/analystic",
                sidebarProps: {
                    displayText: "Analystic",
                    icon: FaRegCircle,
                },
            },
            {
                path: "/dashboard/ecommerce",
                sidebarProps: {
                    displayText: "eCommerce",
                    icon: FaRegCircle,
                },
            },
        ],
    },
    { groupName: "App & Pages" },
    {
        path: "/chats",
        sidebarProps: {
            displayText: "Chats",
            icon: FaMessage,
        },
    },
    {
        path: "/ecommerce",
        sidebarProps: {
            displayText: "eCommerce",
            icon: FaBagShopping,
        },
        child: [
            {
                path: "/ecommerce/products",
                sidebarProps: {
                    icon: FaBoxOpen,
                    displayText: "Products",
                },
                child: [
                    {
                        path: "/ecommerce/products/list",
                        sidebarProps: {
                            // icon: FaRegCircle,
                            displayText: "Products List",
                        },
                    },
                    {
                        path: "/ecommerce/products/create",
                        sidebarProps: {
                            displayText: "Add Product",
                        },
                    },
                    {
                        path: "/ecommerce/products/catetory",
                        sidebarProps: {
                            displayText: "Catetory List",
                        },
                    },
                ],
            },
            {
                path: "/ecommerce/orders",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Order",
                },
                child: [
                    {
                        path: "/ecommerce/orders/list",
                        sidebarProps: {
                            // icon: FaRegCircle,
                            displayText: "Order List",
                        },
                    },
                    {
                        path: "/ecommerce/orders/detail",
                        sidebarProps: {
                            displayText: "Order Detail",
                        },
                    },
                ],
            },
            {
                path: "/ecommerce/customers",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Customers",
                },
                child: [
                    {
                        path: "/ecommerce/customers/list",
                        sidebarProps: {
                            // icon: FaRegCircle,
                            displayText: "Customers All",
                        },
                    },
                    {
                        path: "/ecommerce/customers/detail",
                        sidebarProps: {
                            displayText: "Customers Details",
                        },
                    },
                    {
                        path: "/ecommerce/customers/address",
                        sidebarProps: {
                            displayText: "Address & Billing",
                        },
                    },
                ],
            },
        ],
    },
    {
        path: "/invoices",
        sidebarProps: {
            displayText: "Invoices",
            icon: FaFileInvoiceDollar,
        },
        child: [
            {
                path: "/invoices/list",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Customers All",
                },
            },
            {
                path: "/invoices/preview",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Customers Details",
                },
            },
            {
                path: "/invoices/add",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Add",
                },
            },
            {
                path: "/invoices/edit",
                sidebarProps: {
                    icon: FaRegCircle,
                    displayText: "Edit",
                },
            },
        ],
    },
];

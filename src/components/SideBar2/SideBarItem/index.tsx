"use client";
import Link from "next/link";
import "./menuItem.scss";
import { usePathname } from "next/navigation";
import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import colorConfigs from "@/src/config/colorConfig";
import React from "react";

export type SideBarItemProps = {
    item?: any;
    isChild?: boolean;
    open?: boolean;
};

const SidebarItem = ({ item, isChild }: SideBarItemProps) => {
    const Icon = item.sidebarProps.icon;
    const pathname = usePathname();

    return item.sidebarProps && item.path ? (
        <Link
            href={item.path}
            className={`dashboardSubnav ${
                pathname.includes(item.path) ? "link-active" : ""
            } overflow-hidden px-3 px-6 mt-[8px] hover:bg-sidebar-hover`}
        >
            <ListItemIcon
                sx={{
                    color: `${
                        pathname.includes(item.path)
                            ? "#fff"
                            : colorConfigs.sidebar.color
                    }`,
                    minWidth: "34px",
                }}
            >
                {item.sidebarProps.icon ? (
                    <Icon size={!isChild ? 16 : 14} />
                ) : (
                    <div className="w-[44px]"></div>
                )}
            </ListItemIcon>

            <div>{item.sidebarProps.displayText}</div>
        </Link>
    ) : null;
};

export default SidebarItem;

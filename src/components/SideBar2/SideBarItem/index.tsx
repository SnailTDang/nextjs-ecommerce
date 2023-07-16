"use client";
import Link from "next/link";
import "./menuItem.scss";
import { usePathname } from "next/navigation";
import { ListItemButton, ListItemIcon } from "@mui/material";
import colorConfigs from "@/src/config/colorConfig";

const SidebarItem = ({ item, isChild }: any) => {
    const Icon = item.sidebarProps.icon;
    const pathname = usePathname();

    return item.sidebarProps && item.path ? (
        <ListItemButton
            component={Link as any}
            to={item.path}
            className={`dashboardSubnav ${
                pathname.includes(item.path) ? "link-active" : ""
            }`}
            sx={{
                "&: hover": {
                    backgroundColor: colorConfigs.sidebar.hoverBg,
                },
                paddingY: "12px",
                paddingX: "24px",
                marginTop: "8px",
                marginRight: "18px",
            }}
        >
            <ListItemIcon
                sx={{
                    color: `${
                        pathname.includes(item.path)
                            ? "#fff"
                            : colorConfigs.sidebar.color
                    }`,
                    // paddingLeft: "12px",
                    minWidth: "34px",
                }}
            >
                {item.sidebarProps.icon ? (
                    <Icon size={!isChild ? 17 : 14} />
                ) : null}
            </ListItemIcon>
            <div className={`${!isChild ? "" : "pl-3"}`}>
                {item.sidebarProps.displayText}
            </div>
        </ListItemButton>
    ) : null;
};

export default SidebarItem;

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
            } overflow-hidden`}
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
                    minWidth: "34px",
                }}
            >
                {item.sidebarProps.icon ? (
                    <Icon size={!isChild ? 16 : 14} />
                ) : (
                    <div className="w-[44px]"></div>
                )}
            </ListItemIcon>
            {item.sidebarProps.displayText}
        </ListItemButton>
    ) : null;
};

export default SidebarItem;

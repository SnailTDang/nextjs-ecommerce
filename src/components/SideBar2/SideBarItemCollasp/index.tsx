"use client";
import {
    Collapse,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import colorConfigs from "@/src/config/colorConfig";
import SidebarItem from "../SideBarItem";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { usePathname } from "next/navigation";

export type SideBarItemCollaspProps = {
    item: any;
    isChild: boolean;
    sideBarOpen: boolean;
};

const SidebarItemCollapse = ({ item, isChild, sideBarOpen }: any) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    const handleCollapse = () => {
        if (sideBarOpen) {
            setOpen(!open);
        } else {
            setOpen(false);
        }
    };

    useEffect(() => {
        if (pathname.includes(item.path) && sideBarOpen) {
            setOpen(true);
        } else {
            setOpen(false);
        }
    }, [sideBarOpen]);

    return item.sidebarProps ? (
        <>
            <ListItemButton
                onClick={handleCollapse}
                sx={{
                    "&: hover": {
                        backgroundColor: colorConfigs.sidebar.hoverBg,
                    },
                    backgroundColor: `${
                        open ? colorConfigs.sidebar.hoverBg : ""
                    }`,
                    paddingY: "5px",
                    paddingLeft: `${isChild ? "32" : "24"}px`,
                    paddingRight: "24px",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                    marginTop: "8px",
                }}
            >
                <ListItemIcon
                    sx={{
                        color: colorConfigs.sidebar.color,
                        minWidth: "34px",
                        paddingBottom: "3px",
                    }}
                >
                    {<item.sidebarProps.icon size={isChild ? 14 : 16} /> && (
                        <item.sidebarProps.icon size={isChild ? 14 : 16} />
                    )}
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography
                            marginY={"0px"}
                            paddingY={"0px"}
                            overflow={"hidden"}
                        >
                            {item.sidebarProps.displayText}
                        </Typography>
                    }
                />
                {open ? <FaAngleDown /> : <FaAngleRight />}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
                <List sx={{ padding: "0" }} disablePadding>
                    {item.child?.map((route: any, index: number) =>
                        route.sidebarProps ? (
                            route.child ? (
                                <SidebarItemCollapse
                                    item={route}
                                    key={index}
                                    isChild={true}
                                    sideBarOpen={sideBarOpen}
                                />
                            ) : (
                                <ListItem>
                                    <SidebarItem
                                        item={route}
                                        key={index}
                                        open={open}
                                        isChild={true}
                                    />
                                </ListItem>
                            )
                        ) : null
                    )}
                </List>
            </Collapse>
        </>
    ) : null;
};

export default SidebarItemCollapse;

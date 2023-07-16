"use client";
import {
    Collapse,
    List,
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

const SidebarItemCollapse = ({ item, isChild }: any) => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (pathname.includes(item.path)) {
            setOpen(true);
        }
    }, []);

    return item.sidebarProps ? (
        <>
            <ListItemButton
                onClick={() => setOpen(!open)}
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
                    marginRight: "18px",
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
                    {<item.sidebarProps.icon size={isChild ? 14 : 17} /> && (
                        <item.sidebarProps.icon size={isChild ? 14 : 17} />
                    )}
                </ListItemIcon>
                <ListItemText
                    disableTypography
                    primary={
                        <Typography marginY={"0px"} paddingY={"0px"}>
                            {item.sidebarProps.displayText}
                        </Typography>
                    }
                />
                {open ? <FaAngleDown /> : <FaAngleRight />}
            </ListItemButton>
            <Collapse in={open} timeout="auto">
                <List sx={{ paddingY: "0" }}>
                    {item.child?.map((route: any, index: number) =>
                        route.sidebarProps ? (
                            route.child ? (
                                <SidebarItemCollapse
                                    item={route}
                                    key={index}
                                    isChild={true}
                                />
                            ) : (
                                <SidebarItem
                                    item={route}
                                    key={index}
                                    handleOpen={setOpen}
                                    open={open}
                                    isChild={true}
                                />
                            )
                        ) : null
                    )}
                </List>
            </Collapse>
        </>
    ) : null;
};

export default SidebarItemCollapse;

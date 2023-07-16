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
import { RootState } from "@/src/redux/store";
import colorConfigs from "@/src/config/colorConfig";
import { useSelector, useDispatch } from "react-redux";
import SidebarItem from "../SideBarItem";
import { FaAngleDown, FaAngleRight } from "react-icons/fa6";
import { setAppState } from "@/src/redux/feature/appStateSlice";
import { usePathname } from "next/navigation";

const SidebarItemCollapse = ({ item, isChild }: any) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();
    const pathname = usePathname();

    const { appState } = useSelector((state: RootState) => state.appState);

    // const handleOpen = () => {
    //     setOpen(true);
    // };

    useEffect(() => {
        console.log(appState);
        if (appState.includes(item.state)) {
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
                        display: "block",
                        // minHeight: "100%",
                        height: "24px",
                        paddingRight: "10px",
                        minWidth: "auto",
                    }}
                >
                    {<item.sidebarProps.icon size={isChild ? 16 : 20} /> && (
                        <item.sidebarProps.icon size={isChild ? 16 : 20} />
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
                                    // handleOpen={handleOpen}
                                    open={open}
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

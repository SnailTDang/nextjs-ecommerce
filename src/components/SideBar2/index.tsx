"use client";
import { appRoutes } from "@/src/constants";
import { Divider, List, Stack, Toolbar, Typography } from "@mui/material";
import SidebarItemCollapse from "./SideBarItemCollasp";
import SidebarItem from "./SideBarItem";
import colorConfigs from "@/src/config/colorConfig";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import MuiDrawer from "@mui/material/Drawer";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import SideBarHeader from "./SideBarHeader";

const drawerWidth = 260;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
}));

const Sidebar = () => {
    const [open, setOpen] = useState(true);
    const [hover, setHover] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        setHover(false);
    };

    const handleDrawerClose = () => {
        setOpen(false);
        setHover(true);
    };

    const handleHoverOpen = () => {
        if (hover) {
            setOpen(true);
        }
    };

    const handleHoverClose = () => {
        if (hover) {
            setOpen(false);
        }
    };
    return (
        <Drawer
            open={open}
            variant="permanent"
            sx={{
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sidebar.bg,
                    boxShadow: colorConfigs.sidebar.boxShadow,
                    color: colorConfigs.sidebar.color,
                },
                "& ::-webkit-scrollbar": {
                    width: 0,
                },
                "& .MuiToolbar-root": {
                    boxShadow: colorConfigs.sidebar.boxShadow,
                    position: "sticky",
                    top: 0,
                    backgroundColor: colorConfigs.sidebar.bg,
                    zIndex: 999,
                },
            }}
        >
            <Toolbar
                sx={{
                    marginBottom: "8px",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Stack
                    sx={{ width: "100%" }}
                    direction="row"
                    justifyContent="space-between"
                    alignItems={"center"}
                >
                    {open ? (
                        <SideBarHeader handleDrawerClose={handleDrawerClose} />
                    ) : (
                        <FaBars
                            size={20}
                            onClick={handleDrawerOpen}
                            className="cursor-pointer"
                        />
                    )}
                </Stack>
            </Toolbar>
            <List
                disablePadding
                onMouseMove={handleHoverOpen}
                onMouseLeave={handleHoverClose}
            >
                {appRoutes.map((route: any, index: number) =>
                    route.sidebarProps ? (
                        route.child ? (
                            <SidebarItemCollapse
                                item={route}
                                key={index}
                                sideBarOpen={open}
                            />
                        ) : (
                            <SidebarItem
                                item={route}
                                key={index}
                                isChild={false}
                            />
                        )
                    ) : open ? (
                        <div
                            key={index}
                            className="color-text-primary mt-7 mb-2 pt-3 pb-3 relative "
                        >
                            <span className="absolute bottom-1 bg-light-primary mx-7 px-1 text-light-disabled text-[14px]">
                                {route.groupName}
                            </span>
                            <Divider />
                        </div>
                    ) : null
                )}
            </List>
        </Drawer>
    );
};

export default Sidebar;

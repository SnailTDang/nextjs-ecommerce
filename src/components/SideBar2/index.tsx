"use client";
import { appRoutes } from "@/src/constants";
import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import SidebarItemCollapse from "./SideBarItemCollasp";
import SidebarItem from "./SideBarItem";
import colorConfigs from "@/src/config/colorConfig";
import { FaRegCircleDot } from "react-icons/fa6";

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 260,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 260,
                    boxSizing: "border-box",
                    borderRight: "0px",
                    backgroundColor: colorConfigs.sidebar.bg,
                    boxShadow: colorConfigs.sidebar.boxShadow,
                    color: colorConfigs.sidebar.color,
                    WebkitScrollBar: "hidden",
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
            <List disablePadding>
                <Toolbar
                    sx={{
                        marginBottom: "8px",
                        // boxShadow: colorConfigs.sidebar.boxShadow,
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <Stack
                        sx={{ width: "100%" }}
                        direction="row"
                        justifyContent="space-between"
                        alignItems={"center"}
                        // position={"fixed"}
                        // boxShadow={colorConfigs.sidebar.boxShadow}
                    >
                        <div className="sticky top-0 left-0 flex items-center">
                            <div className="logo pr-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="30"
                                    height="24"
                                    viewBox="0 0 30 24"
                                    fill="none"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1.47602 0.435431L6.7986 3.72206C7.08419 3.8984 7.25806 4.21019 7.25806 4.54594V19.5605C7.25806 19.901 7.07929 20.2164 6.78724 20.3913L1.46466 23.5777C1.00603 23.8523 0.411763 23.7029 0.137322 23.2441C0.0474582 23.0938 0 22.922 0 22.7469V1.25931C0 0.724605 0.433273 0.291138 0.967742 0.291138C1.14727 0.291138 1.32325 0.341097 1.47602 0.435431Z"
                                        fill="#9155FD"
                                    />
                                    <path
                                        opacity="0.077704"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 8.11658L7.25806 12.2803V16.3621L0 8.11658Z"
                                        fill="black"
                                    />
                                    <path
                                        opacity="0.077704"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M0 8.11658L7.25806 12.1742V14.6678L0 8.11658Z"
                                        fill="black"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M28.5252 0.431618L23.2026 3.70723C22.9163 3.88342 22.7419 4.19561 22.7419 4.53188V19.5605C22.7419 19.901 22.9207 20.2165 23.2128 20.3913L28.5353 23.5777C28.994 23.8523 29.5882 23.7029 29.8627 23.2441C29.9525 23.0938 30 22.922 30 22.7469V1.25626C30 0.721554 29.5667 0.288086 29.0323 0.288086C28.8532 0.288086 28.6777 0.337772 28.5252 0.431618Z"
                                        fill="#9155FD"
                                    />
                                    <path
                                        opacity="0.077704"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M30 8.11658L22.7419 12.2715V16.4854L30 8.11658Z"
                                        fill="black"
                                    />
                                    <path
                                        opacity="0.077704"
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M30 8.11658L22.7419 12.1707V14.7911L30 8.11658Z"
                                        fill="black"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1.47345 0.427498L15 8.72169V16.7092L0 8.11437V1.25297C0 0.718258 0.433273 0.28479 0.967742 0.28479C1.14624 0.28479 1.32126 0.33418 1.47345 0.427498Z"
                                        fill="#9155FD"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M1.47345 0.427498L15 8.72169V16.7092L0 8.11437V1.25297C0 0.718258 0.433273 0.28479 0.967742 0.28479C1.14624 0.28479 1.32126 0.33418 1.47345 0.427498Z"
                                        fill="white"
                                        fill-opacity="0.15"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M28.5266 0.427498L15 8.72169V16.7092L30 8.11437V1.25297C30 0.718258 29.5667 0.28479 29.0323 0.28479C28.8538 0.28479 28.6787 0.33418 28.5266 0.427498Z"
                                        fill="#9155FD"
                                    />
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M28.5266 0.427498L15 8.72169V16.7092L30 8.11437V1.25297C30 0.718258 29.5667 0.28479 29.0323 0.28479C28.8538 0.28479 28.6787 0.33418 28.5266 0.427498Z"
                                        fill="white"
                                        fill-opacity="0.3"
                                    />
                                </svg>
                            </div>
                            <div className="w-[142px] py-1">
                                <div className="brand w-[128px] text-lg font-semibold text-light-primary py-0.5">
                                    VISION TECH
                                </div>
                            </div>
                            <div className="w-[24px] flex justify-center">
                                <FaRegCircleDot fontSize={20} />
                            </div>
                        </div>
                    </Stack>
                </Toolbar>
                {appRoutes.map((route: any, index: number) =>
                    route.sidebarProps ? (
                        route.child ? (
                            <SidebarItemCollapse
                                item={route}
                                key={index}
                                // isOpen={}
                            />
                        ) : (
                            <SidebarItem
                                item={route}
                                key={index}
                                isChild={false}
                            />
                        )
                    ) : null
                )}
            </List>
        </Drawer>
    );
};

export default Sidebar;

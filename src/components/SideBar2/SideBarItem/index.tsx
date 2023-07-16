"use client";
import Link from "next/link";
import "./menuItem.scss";
import { usePathname } from "next/navigation";
import { ListItemButton, ListItemIcon } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import colorConfigs from "@/src/config/colorConfig";
import { RootState } from "@/src/redux/store";
import { useEffect } from "react";
import { setAppState } from "@/src/redux/feature/appStateSlice";

const SidebarItem = ({ item, handleOpen, open }: any) => {
    const Icon = item.sidebarProps.icon;
    const pathname = usePathname();
    const dispatch = useDispatch();

    const { appState } = useSelector((state: RootState) => state.appState);

    useEffect(() => {
        if (pathname === item.path) {
            console.log(item.state);
            dispatch(setAppState(item.state));
        }
    }, []);

    // return item.sidebarProps && item.path ? (
    //     <div>
    //         <div className={`pt-[6px] h-fit mr-[18px]`}>
    //             <div
    //                 className={`dashboardSubnav  ${
    //                     pathname === item.path ? "link-active" : ""
    //                 }`}
    //             >
    //                 <Link href={item.path} className={`dashboardSubnav-link`}>
    //                     <div className="w-[34px] flex justify-center items-center">
    //                         {item.sidebarProps.icon ? <Icon size={12} /> : null}
    //                     </div>
    //                     {item.sidebarProps.displayText}
    //                 </Link>
    //             </div>
    //         </div>
    //     </div>
    // ) : null;
    return item.sidebarProps && item.path ? (
        <ListItemButton
            component={Link as any}
            to={item.path}
            className={`dashboardSubnav ${
                pathname === item.path ? "link-active" : ""
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
                        appState === item.state
                            ? "#fff"
                            : colorConfigs.sidebar.color
                    }`,
                    paddingLeft: "12px",
                    minWidth: "46px",
                }}
            >
                {item.sidebarProps.icon ? <Icon size={12} /> : null}
            </ListItemIcon>
            {item.sidebarProps.displayText}
        </ListItemButton>
    ) : null;
};

export default SidebarItem;

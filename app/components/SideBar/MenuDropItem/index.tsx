"use client";
import React, { useEffect, useRef } from "react";
import {
    FaHouse,
    FaAngleDown,
    FaRegCircle,
    FaAngleRight,
} from "react-icons/fa6";
import "./menuItem.scss";
import Link from "next/link";

export interface MenuItemProps {
    id: string;
    path?: string | undefined;
    icon?: any | null;
    type?: string | undefined;
    title?: string | undefined;
    child?: any | undefined;
    isChild?: boolean;
}

export interface SubNavProps {
    id: string;
    path?: string;
    title?: string | undefined;
    icon?: any | undefined;
    child?: any | undefined;
}

export function SubMenu(props: SubNavProps) {
    const Icon = props.icon;
    return !props.child ? (
        <div className={`pt-[6px] h-fit`}>
            <div className={`dashboardSubnav`}>
                <Link href="#" className={"dashboardSubnav-link"}>
                    <div className="w-[34px] flex justify-center items-center">
                        {props.icon ? <Icon size={12} /> : null}
                    </div>
                    {props.title}
                </Link>
            </div>
        </div>
    ) : (
        <MenuDropItem
            id={props.id}
            path={undefined}
            icon={props.icon}
            title={props.title}
            child={props.child}
            isChild={true}
        />
    );
}

export default function MenuDropItem(props: MenuItemProps) {
    const ref = useRef(null);
    const Icon = props.icon;

    useEffect(() => {
        const el = ref.current as any;
        const subNav = document.getElementById(`${props.id}`) as any;
        el?.addEventListener("click", () => {
            const height = props.child ? props.child?.length * 48 : 0;
            const currentHeight = subNav.style.height;
            el.classList.toggle("bg-[#ededf3]");
            if (height && (!currentHeight || currentHeight === "0px")) {
                subNav.style.height = `${height.toString()}px`;
                setTimeout(() => {
                    subNav.classList.toggle("overflow-visible");
                    subNav.style.height = "auto";
                }, 300);
            } else if (currentHeight) {
                subNav.style.height = `${height.toString()}px`;
                setTimeout(() => {
                    subNav.style.height = 0;
                });
                subNav.classList.toggle("overflow-visible");
            }
            el.querySelector(".icon")?.classList.toggle("rotate-arrow");
        });
    }, []);

    return (
        <div className={`menu-navbar pt-2`}>
            <div
                className={`dashboard-options flex pl-[22px] py-[9px] pr-3 rounded-r-[50px] hover:bg-[#ededf3]`}
                ref={ref}
            >
                {props.child?.length ? (
                    <div
                        className={`w-[34px] flex justify-center pr-[10px] ${
                            props.isChild ? "pl-[12px]" : ""
                        } flex items-center`}
                    >
                        <Icon />
                    </div>
                ) : (
                    ""
                )}
                <div className="flex flex-1 justify-between items-center cursor-progress">
                    <div className={`menu-name text-light-primary`}>
                        {props.title}
                    </div>
                    {props.child.length ? (
                        <div className="pr-1">
                            <div className="icon transition-all duration-300 ease-out">
                                <FaAngleRight size={16} />
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>

            <div
                className={`transition-height duration-500 ease-out overflow-hidden h-0 transition-menu`}
                id={props.id}
            >
                <div className="fit">
                    {props.child?.map((item: any, index: any) => {
                        return (
                            <SubMenu
                                key={item.id + index}
                                id={item.id}
                                path={item.path}
                                title={item.title}
                                icon={item.icon}
                                child={item.child}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

"use client";
import React, { useEffect, useRef } from "react";
import { FaHouse, FaAngleDown, FaRegCircle } from "react-icons/fa6";
import "./menuItem.scss";
import Link from "next/link";

export interface MenuItemProps {
    id: string;
    path: string | undefined;
    icon: any | undefined;
    type: string | undefined;
    title: string | undefined;
    subnav: Array<any> | undefined;
}

export interface SubNavProps {
    id: string;
    path: string;
    title: string | undefined;
}

function SubMenu(props: SubNavProps) {
    return (
        <div className={`pt-[6px] h-fit`}>
            <div className={`dashboardSubnav`}>
                <Link href="#" className={"dashboardSubnav-link"}>
                    <div className="w-[34px]">
                        <FaRegCircle size={12} />
                    </div>
                    {props.title}
                </Link>
            </div>
        </div>
    );
}

export default function MenuDropItem(props: MenuItemProps) {
    const ref = useRef(null);
    const Icon = props.icon;

    useEffect(() => {
        const el = ref.current as any;
        const subNav = document.getElementById(`${props.id}`) as any;
        el?.addEventListener("click", () => {
            const height = props.subnav ? props.subnav?.length * 48 : 0;
            const currentHeight = subNav.style.height;
            el.classList.toggle("bg-[#ededf3]");
            if (height && (!currentHeight || currentHeight === "0px")) {
                subNav.style.height = `${height.toString()}px`;
                setTimeout(() => {
                    subNav.classList.toggle("overflow-visible");
                }, 300);
            } else if (currentHeight) {
                subNav.style.height = 0;
                subNav.classList.toggle("overflow-visible");
            }
        });
    }, []);

    return (
        <div className={`menu-navbar pt-2`}>
            <div
                className={`dashboard-options flex pl-[22px] py-[9px] pr-3 rounded-r-[50px] hover:bg-[#ededf3]`}
                ref={ref}
            >
                {props.icon ? (
                    <div className="w-[34px] flex justify-center pr-[10px] pl flex items-center">
                        <Icon />
                    </div>
                ) : (
                    ""
                )}
                <div className="flex flex-1 justify-between items-center cursor-progress">
                    <div className="menu-name font-semibold text-light-primary">
                        {props.title}
                    </div>
                    <FaAngleDown size={20} />
                </div>
            </div>
            <div
                className={`transition-height duration-500 ease-out overflow-hidden h-0 transition-menu`}
                id={props.id}
            >
                <div className="fit">
                    {props.subnav?.map((item, index) => {
                        return (
                            <SubMenu
                                key={item.id + index}
                                id={item.id}
                                path={item.path}
                                title={item.title}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

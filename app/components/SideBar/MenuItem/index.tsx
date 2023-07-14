"use client";
import React, { useEffect, useRef } from "react";
import { FaHouse, FaAngleDown, FaRegCircle } from "react-icons/fa6";
import "./menuItem.scss";
import Link from "next/link";

export interface MenuItemProps {
    id: string;
    icon: any;
}

export default function MenuItem(props: MenuItemProps) {
    const ref = useRef(null);
    const Icon = props.icon;

    useEffect(() => {
        const el = ref.current as any;
        const subNav = document.querySelector(`#${props.id}`) as any;
        el?.addEventListener("click", () => {
            el.classList.toggle("bg-[#ededf3]");
            subNav.classList.toggle("h-0");
            subNav.classList.toggle("h-[146px]");
        });
    }, []);

    return (
        <div className="dashboard">
            <div
                className={`dashboard-options flex pl-[22px] py-2 pr-3 rounded-r-[50px] hover:bg-[#ededf3]`}
                ref={ref}
            >
                {props.icon ? (
                    <div className="w-[34px] flex justify-center pr-[10px] pl flex items-center">
                        {Icon}
                    </div>
                ) : (
                    <></>
                )}
                <div className="flex flex-1 justify-between items-center">
                    <div className="menu-name text-light-primary">
                        Dashboards
                    </div>
                    <FaAngleDown size={20} />
                </div>
            </div>
            <div
                className={`transition-height duration-500 ease-out overflow-hidden h-0 transition-menu`}
                id={props.id}
            >
                <div className={``}>
                    <div className="pt-[6px]">
                        <div className={"dashboardSubnav"}>
                            <Link href="#" className={"dashboardSubnav-link"}>
                                <div className="w-[34px]">
                                    <FaRegCircle size={12} />
                                </div>
                                CRM
                            </Link>
                        </div>
                    </div>
                    <div className="pt-[6px]">
                        <div className={"dashboardSubnav"}>
                            <Link href="#" className={"dashboardSubnav-link"}>
                                <div className="w-[34px]">
                                    <FaRegCircle size={12} />
                                </div>
                                Analystics
                            </Link>
                        </div>
                    </div>
                    <div className="pt-[6px]">
                        <div className={"dashboardSubnav"}>
                            <Link href="#" className={"dashboardSubnav-link"}>
                                <div className="w-[34px]">
                                    <FaRegCircle size={12} />
                                </div>
                                eCommerce
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

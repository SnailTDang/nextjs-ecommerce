import * as React from "react";

export interface IAppProps {}

export default function MenuItem(props: any) {
    const Icon = props.icon;

    return (
        <div>
            <div
                className={`dashboard-options flex pl-[22px] py-2 pr-3 rounded-r-[50px] hover:bg-[#ededf3]`}
            >
                {props.icon ? (
                    <div className="w-[34px] flex justify-center pr-[10px] pl flex items-center">
                        <Icon />
                    </div>
                ) : (
                    <></>
                )}
                <div className="flex flex-1 justify-between items-center">
                    <div className="menu-name text-light-primary">
                        {props.title}
                    </div>
                </div>
            </div>
        </div>
    );
}

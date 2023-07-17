"use client";
import { ReactNode, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setAppState } from "@/src/redux/feature/appStateSlice";

type Props = {
    // state?: string;
    children: ReactNode;
};

const PageWrapper = ({ children }: Props) => {
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if (props.children) {
    //         dispatch(
    //             setAppState(
    //                 (props?.children?.childProps?.segment as string) || ""
    //             )
    //         );
    //     }
    // }, [dispatch, props]);

    return <>{children}</>;
};

export default PageWrapper;

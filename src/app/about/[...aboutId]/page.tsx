import React from "react";

// export interface IAppProps {}

export default function ABoutDetail() {
    return (
        <div>
            {/* {console.log(path)} */}
            <h1>About Detail</h1>
            <button type="button">Navlink</button>
            {/* <p>Query:{JSON.stringify(path)}</p> */}
        </div>
    );
}

export async function getServerSideProps() {
    return {
        props: {},
    };
}

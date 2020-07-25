import React from "react";
import { PacmanLoader } from "react-spinners";

export default function Loading() {
    return (
        <div className="loading">
            <PacmanLoader color="rgb(47, 173, 131)" />
        </div>
    );
}
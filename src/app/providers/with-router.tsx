import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

export const withRouter = (component: () => React.ReactNode) => () =>
    (
        <BrowserRouter>
            {component()}
        </BrowserRouter>
    );
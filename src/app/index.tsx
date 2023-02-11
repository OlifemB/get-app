import React from 'react';
import {withProviders} from "@/app/providers";
import {Routing} from "@/pages";
import './styles/main.scss'

export function App() {
    return (
        <div className="app">
            <Routing/>
        </div>
    );
}

export default withProviders(App)

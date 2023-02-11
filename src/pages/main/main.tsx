import React from 'react';
import {useAppSelector} from "@/shared/hooks";
import {selectAppState} from "@/app/store/testState";
import {Button} from "@/shared/ui";

const Main = () => {
    const app = useAppSelector(selectAppState)

    return (
        <div>
            MAIN
        </div>
    );
};

export default Main;
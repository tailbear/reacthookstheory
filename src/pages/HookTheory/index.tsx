import React from "react";
import HooksMenu from "./Menu";
import {Route, Routes} from "react-router-dom";
import ContextDemo1 from "../HookBestEvent/contextLesson";
import ReducerDemo1 from "../HookBestEvent/reducerLesson";
import CustomHooks from "../HookBestEvent/customHooks";

const HookTheory = () => {


    return (
        <div className="flex">
            <HooksMenu/>
            <div className="p-32 flex-1">
                <Routes>
                    <Route path="/HookTheory/demo1" element={<ContextDemo1/>}/>
                    <Route path="/HookTheory/demo2" element={<ReducerDemo1/>}/>
                    <Route path="/HookTheory/demo3" element={<CustomHooks/>}/>
                </Routes>
            </div>
        </div>
    );
};

export default HookTheory;

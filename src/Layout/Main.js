import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSide from '../Pages/Shared/LeftSide/LeftSide';

const Main = () => {
    return (
        <div className=' grid lg:grid-cols-2'>
            <LeftSide></LeftSide>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;
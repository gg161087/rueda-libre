import { useState, useEffect } from 'react';

import { Header } from './partials/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { Rent } from './components/Rent.jsx';
import { Staff } from './components/Staff.jsx';
import { Footer } from './partials/Footer.jsx';

export const App = () => {
    const [staffs, setStaffs] = useState([]);
    const [bikes, setBikes] = useState([]);
    
    const getStaff = async () => {
        const response = await fetch('/database/staffs.json');
        const staffs = await response.json();
        setStaffs(staffs);
    }
    const getBikes = async () => {
        const response = await fetch('/database/bikes.json');
        const bikes = await response.json();        
        setBikes(bikes);
    }

    useEffect(() => {
        getStaff();
        getBikes();
    })

    if (!staffs && !bikes) {
        return null
    }

    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Rent bikes={bikes}></Rent>
            <Staff staffs={staffs}></Staff>
            <Footer></Footer>
        </>
    )
}
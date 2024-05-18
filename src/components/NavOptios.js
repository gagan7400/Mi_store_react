import React, { useState, useEffect } from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"
import { useLocation } from 'react-router-dom';
const NavOptios = ({ currentpath, miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {
    const [miPhoneToggle, setMiPhoneToggle] = useState(false);
    const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);
    const [tvToggle, setTvToggle] = useState(false);
    const [laptopToggle, setLaptopToggle] = useState(false);
    const [fitnessToggle, setFitnessToggle] = useState(false);
    const [homeToggle, setHomeToggle] = useState(false);
    const [audioToggle, setAudioToggle] = useState(false);
    const [accessoriesToggle, setAccessoriesToggle] = useState(false);
    let location = useLocation();

    useEffect(() => {
          if (location.pathname === "/redmiphones") {
            setMiPhoneToggle(false)
            setTvToggle(false);
            setLaptopToggle(false);
            setFitnessToggle(false);
            setHomeToggle(false);
            setAudioToggle(false);
            setAccessoriesToggle(false);
             return setRedmiPhoneToggle(true)
          } 
        if (location.pathname === "/tv") {
            setMiPhoneToggle(false)
            setRedmiPhoneToggle(false);
            setLaptopToggle(false);
            setFitnessToggle(false);
            setHomeToggle(false);
            setAudioToggle(false);
            setAccessoriesToggle(false);
            return setTvToggle(true)
        } 
        if (location.pathname === "/miphones") {
            setRedmiPhoneToggle(false)
            setTvToggle(false);
            setLaptopToggle(false);
            setFitnessToggle(false);
            setHomeToggle(false);
            setAudioToggle(false);
            setAccessoriesToggle(false);
             return setMiPhoneToggle(true)
        } 
        if (location.pathname === "/laptops") {
            setMiPhoneToggle(false)
            setRedmiPhoneToggle(false);
            setTvToggle(false);
            setFitnessToggle(false);
            setHomeToggle(false);
            setAudioToggle(false);
            setAccessoriesToggle(false);
            return setLaptopToggle(true)
        } 
        if (location.pathname === "/fitness") {
            setMiPhoneToggle(false)
            setRedmiPhoneToggle(false);
            setTvToggle(false);
            setLaptopToggle(false);
            setHomeToggle(false);
            setAudioToggle(false);
            setAccessoriesToggle(false);
            return setFitnessToggle(true)
        } 
        if (location.pathname === "/home") {
            setMiPhoneToggle(false)
            setRedmiPhoneToggle(false);
            setTvToggle(false);
            setLaptopToggle(false);
            setFitnessToggle(false);
            setAudioToggle(false);
            setAccessoriesToggle(false);
            return setHomeToggle(true)
        } 
        if (location.pathname === "/audio") {
            setMiPhoneToggle(false)
            setRedmiPhoneToggle(false);
            setTvToggle(false);
            setLaptopToggle(false);
            setFitnessToggle(false);
            setHomeToggle(false);
            setAccessoriesToggle(false);
            return setAudioToggle(true)
        } 
        if (location.pathname === "/accessories") {
            setMiPhoneToggle(false)
            setRedmiPhoneToggle(false);
            setTvToggle(false);
            setLaptopToggle(false);
            setFitnessToggle(false);
            setHomeToggle(false);
            setAudioToggle(false);
            return setAccessoriesToggle(true)
        } 
    }, [currentpath])
     return (
        <div className="navOptions">
 
            {redmiPhoneToggle ? redmiPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

            {tvToggle ? tv.map((item) => (
                
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}
            {miPhoneToggle ? miPhones.map((item) => (
                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

            {laptopToggle ? laptop.map((item) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

            {fitnessToggle ? fitnessAndLifeStyle.map((item) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

            {homeToggle ? home.map((item) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

            {audioToggle ? audio.map((item) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {accessoriesToggle ? accessories.map((item) => (

                <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

        </div>
    )
}

export default NavOptios;

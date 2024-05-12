import React, { useState, useEffect } from 'react'
import NavCard from "./NavCard.js"
import "../styles/NavOptios.css"
import { useLocation } from 'react-router-dom';
const NavOptios = ({ miPhones, redmiPhones, tv, laptop, fitnessAndLifeStyle, home, audio, accessories }) => {

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

        if (location.pathname === "/miphones") {
            return setMiPhoneToggle(true)
        }
        if (location.pathname === "/redmiphones") {
            return setRedmiPhoneToggle(true)
        }
        if (location.pathname === "/tv") {
            return setTvToggle(true)
        }
        if (location.pathname === "/laptops") {
            return setLaptopToggle(true)
        }
        if (location.pathname === "/lifestyle") {
            return setFitnessToggle(true)
        }
        if (location.pathname === "/home") {
            return setHomeToggle(true)
        }
        if (location.pathname === "/audio") {
            return setAudioToggle(true)
        }

        if (location.pathname === "/accessories") {
            return setAccessoriesToggle(true)
        }
         }, [])

    return (
        <div className="navOptions">

            {miPhoneToggle ? miPhones.map((item) => (
                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {redmiPhoneToggle ? redmiPhones.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {tvToggle ? tv.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

            {laptopToggle ? laptop.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}



            {fitnessToggle ? fitnessAndLifeStyle.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {homeToggle ? home.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}



            {audioToggle ? audio.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}


            {accessoriesToggle ? accessories.map((item) => (

                < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
            )) : null}

        </div>
    )
}

export default NavOptios

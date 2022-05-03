import React from "react";
import Navbar from "./Navbar";
import Social from './Social';
import ReactTypingEffect from 'react-typing-effect'


function About(){
    return(
        <>
        <Navbar />
        <div className="condiv about">
            <img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t39.30808-6/277564862_357254272997576_3049920739329885059_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeENTCn54HMzhIS4wgy-xIe0HO14Go_B7UYc7Xgaj8HtRhi1bbtgmBtX_2L476J4xc_02nDr80FrFq4fvnnlklMx&_nc_ohc=wugD4gtwvPEAX-U9mPH&_nc_zt=23&_nc_ht=scontent.fbkk8-2.fna&oh=00_AT8ffs7eSl1GVnLeDE29i2aPhsSRChJUjEX55ZP0BwJzaQ&oe=62767E52" alt="about" className="profilepic"/>
            <img src="https://scontent.fbkk8-2.fna.fbcdn.net/v/t1.6435-9/66590494_2330504333854190_9033492185533644800_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=174925&_nc_eui2=AeGuzSmCTheAm1NmxqURb6xkjn4r9HgElEuOfiv0eASUSy21KEb3hengsTVWtj5WUiNsR-Wq2nnOOHfr_3TUsF7D&_nc_ohc=b7c2r-AhLgEAX-sKrI0&_nc_ht=scontent.fbkk8-2.fna&oh=00_AT8pDvFfFOgaDHTK3O7NkHScEGVGk9usRQmuyfJk-eFLXQ&oe=6295A06E" alt="about" className="profilepic"/>
            <Social/>            
        </div>
            <ReactTypingEffect text={['I am Kittipat Tongngern 6306021611051' ,' I am Thaweesap Krungsri 6306021611108','I am a Web Developer']} speed={120} eraseDelay={200} className="typingeffect" />
        </>
    )
}

export default About;
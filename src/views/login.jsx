import React from "react";

import "../login.css" ;
import "../Components/comp_hub_0/styles/sudo_button.css"

import LogoCopy from "../Components/comp_hub_0/logoCopy";


export default function Login(){
    return(
        <body className="for_login_forum"> 
        <LogoCopy Title={"fari"}></LogoCopy>
        <div class="login-forum">
        <form action="/" className="">
            <h2> 
             identifcation</h2>
            <label htmlFor="text" >Phone Number / Email Adress</label>
            {/* <input type="text" required placeholder="Exp: 35153185"/> */}
            <input type="text" required />
            <label htmlFor="password" >password</label>
            <input type="password" required/>
            <input type="submit" value={"login"} className="sudo_button upper_spacing"/>
            <span>en passant vote demand et command sur afari vous accepter <a href="">les conditions generals</a> de afari consulter notre <a href=""> notice de protection </a> de vos inforamtion personelle , notre <a href="">notice cookies </a>et notre <a href="">notice annance </a>pub basser sur vos center d intert <br /><br /><li><a href="">need a help?</a></li></span>
        </form>
        <hr className="seprate_horizontal"/>
        <div className="vertical-spacing">
        {/* <a href="">Home </a> */}
        <a href="/register">  register</a>
        </div>
    </div>
        </body>
    )
}
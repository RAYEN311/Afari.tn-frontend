import React, { useState, useContext , createContext } from "react"
import Main_buttons from "../comp_hub_2-main_construct/buttons_bar";

import  Mainshower from "../comp_hub_2-main_construct/mainshower";

import Slider_right from "../comp_hub_2-main_construct/rightside";

import { buy_objects } from "./buy_exm_obj";
import { sell_objects } from "./sell_exem_obj";
import { rent_objects } from "./rent_exm_obj";
import { getCookie } from "../../cookie";

import { def_lang } from "../../views/home";

import lang_map from '../../lang_map.json';

export let modesbrcont = createContext(null);


export default function Main() {
    
    const {dl,setdl, msg_link , setmsg_link ,itemId , setitemId ,itemimg , setitemimg , itemdis , setitemdis ,itemtit , setitemtit ,itemprice , setitemprice ,itemrid , setitemrid } = useContext(def_lang)

    function def_modesbr(){
        if(getCookie('modesbr')){
            let mbs =  getCookie('modesbr');
            return mbs ;
        }
        else{
            return 'buy';
        }       
    }

    let [modesbr , setmodesbr] = useState(def_modesbr());
    let mdsbr = {setmodesbr};
    // for the context provider to return the state of buy or sell or rent from  the button_bar.jsx
 
    
    let [obj_sell, setobj_sell] = useState(sell_objects);
    let [obj_buy, setobj_buy] = useState(buy_objects);
    let [obj_rent, setobj_rent] = useState(rent_objects);




    // if(modesbr == 'buy'){
    //     setcurrentobj(obj_buy)
    // }
    // else if(modesbr == 'sell'){
    //     setcurrentobj(obj_sell)
    // }
    // else if(modesbr == 'rent'){
    //     setcurrentobj(obj_rent)
    // }

    // function fetchobj_sell() {
    //     fetch('https://sellrayenapi.io').then(res => {
    //         return res.json()
    //     }).then(data => {
    //         setobj_sell(data);
    //     })
    // }
    // function fetchobj_buy() {
    //     fetch('https://buyrayenapi.io').then(res => {
    //         return res.json()
    //     }).then(data => {
    //         setobj_buy(data);
    //     })
    // }

    // function fetchobj_rent() {
    //     fetch('https://rentrayenapi.io').then(res => {
    //         return res.json()
    //     }).then(data => {
    //         setobj_rent(data);
    //     })
    // }

    function prod_state_III() {
        prod_search_2.style.minHeight = "40px"
    }
    function prod_state_VI() {
        prod_search_2.style.minHeight = "0"
        prod_search_2.style.height = "0";
    }
    //////////////////////////////////////////////////////////////
    // object insted of data from database 


    return (
        
    <modesbrcont.Provider value={mdsbr}>
        <section className="main">
            <div className="subnav">
                <section>
                    <form className="form_search">
                        <button>
                            <svg width="17" height="16" fill="none" role="img" aria-labelledby="search">
                                <path d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9" stroke="currentColor" stroke-width="1.333" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                        </button>
                        <input className="input" placeholder="Type your text" required="" type="text" id="search" onFocus={prod_state_III} onBlur={prod_state_VI} />
                        <button className="reset" type="reset">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>

                    </form>
                    <button className="search_but">
                        search
                    </button>
                </section>
                <div className="product_searched" id="prod_search_2">

                </div>
            </div>
            
            {/* <Main_buttons buy = {lang_map.ph4[dl]} sell = {lang_map.ph5[dl]} rent = {lang_map.ph6[dl]}  pp={lang_map.ph7[dl]} pa={lang_map.ph8[dl]}></Main_buttons> */}
            <br />
            <br />
            <Mainshower modesbr = {modesbr} obj_rent = {obj_rent} obj_buy = {obj_buy} obj_sell = {obj_sell} ></Mainshower>    
            <Slider_right msg_link = {msg_link} img_link = {itemimg} title={itemtit} disc ={itemdis} price ={itemprice} redirect_link ={itemrid} ></Slider_right>
        </section>
        </modesbrcont.Provider>
    )
}
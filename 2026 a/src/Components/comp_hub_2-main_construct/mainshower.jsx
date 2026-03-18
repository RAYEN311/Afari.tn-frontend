import React from "react";
import Sells_boxe from "./sell_post";
import Wait_sell from "./wait_sell"
import Wait_buy from "./wait_buy"
import Wait_rent from "./wait_rent"
import Rents_boxe from "./rent_post";
import Buys_boxe from "./buy_post";

export default function Mainshower(porps) {

    if(porps.modesbr == 'buy'){
        return (
            <div className="SBR_boxs">
                {
                porps.obj_buy.map((object) => (
                    <Buys_boxe object={object}></Buys_boxe>
                ))
            }
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            <Wait_buy></Wait_buy>
            </div>
        )
    
    }
    if(porps.modesbr == 'sell'){
        return (
            <div className="SBR_boxs">

                {
                porps.obj_sell.map((object) => (
                    <Sells_boxe object={object}></Sells_boxe>
                ))
            }
                <Wait_sell></Wait_sell>
                <Wait_sell></Wait_sell>
                <Wait_sell></Wait_sell>   
                <Wait_sell></Wait_sell>
                <Wait_sell></Wait_sell>
            </div>
        )
    
    }
    if(porps.modesbr == 'rent'){
        return (
            <div className="SBR_boxs">{
                porps.obj_rent.map((object) => (
                    <Rents_boxe object={object}></Rents_boxe>
                ))
            }
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            <Wait_rent></Wait_rent>
            </div>
        )
    
    }

}
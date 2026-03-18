import React from "react";

import "./main_styles/slider_right.css"


export default function Slider_right(porps) {

    let msg_link = porps.msg_link ;
    let title = porps.title ;
    let disc = porps.disc;
    let img_link = porps.img_link ;
    let price = porps.price ;
    let redirect_link = porps.redirect_link || 'not available';
    

    let disable = ()=>{
        right_container.style.cssText = 'transform:translate(var(--right_slid))';
        right_container.style.boxShadow = 'none';
        html.style.overflowY = 'scroll';
    }


    return (
        <div id="right_container" className="right_container">
            <button className="disable" onClick={disable}>
                x
            </button>
            <div id="img_devidor" className="img_devidor">
                <div></div>
            </div>
            <div className="devidor">
            <div className="circlecontainer">
                <div className="circle">
                <svg  width="20" height="20" fill="currentColor" class="bi bi-chevron-right left-slid-circ" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>
                </div>
                <div className="circle">
                <svg width="20" height="20" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/> </svg>
                </div>
            </div>
            <img src={img_link} alt={title} />
            </div>
            <div className="to_top">
            <span className="sr_title">{title}</span>
            <br />
            <span className="sr_price">{price}</span>
            <br />
            <br />
            <span >Discription</span>
            <br />
            <span className="sr_disc">{disc}</span>
            <br />
            <br />
            <a className="sr_msg" href={msg_link}>message</a>
            <br />
            <br />

            </div>
        </div>
    )
}

// document.getElementById('').style.overflowY = ''

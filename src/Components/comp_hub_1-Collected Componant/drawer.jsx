import React from "react"

import RangeSlider from "rsuite/RangeSlider";
import "rsuite/dist/rsuite.css";
import { useState } from "react";

import Inp_fl from "../comp_hub_0/filter_input";
import Cost_min_max from "../comp_hub_0/indicator";
import Categories from "../comp_hub_0/subcategorie";
import "../comp_hub_0/styles/sudo_button.css"


export default function Drawer(){
    var min = 50
    var max = 1150
    // var [min, setmin_price] = useState();
    // var [max, setmax_price] = useState();
    const [firstValue, setFirstValue] = useState(120);
    const [secondValue, setSecondValue] = useState(700);
    function handleRanges(value) {
    setFirstValue(value[0]);
    setSecondValue(value[1]);
    }
    var [location,setlocation] = useState('')
    return(
<section className="drawer" id="drawer">
<div className="settings">
    <span>settings</span>
    <svg className="sett_svg" viewBox="0 0 512 512"><path d="M262.29,192.31a64,64,0,1,0,57.4,57.4A64.13,64.13,0,0,0,262.29,192.31ZM416.39,256a154.34,154.34,0,0,1-1.53,20.79l45.21,35.46A10.81,10.81,0,0,1,462.52,326l-42.77,74a10.81,10.81,0,0,1-13.14,4.59l-44.9-18.08a16.11,16.11,0,0,0-15.17,1.75A164.48,164.48,0,0,1,325,400.8a15.94,15.94,0,0,0-8.82,12.14l-6.73,47.89A11.08,11.08,0,0,1,298.77,470H213.23a11.11,11.11,0,0,1-10.69-8.87l-6.72-47.82a16.07,16.07,0,0,0-9-12.22,155.3,155.3,0,0,1-21.46-12.57,16,16,0,0,0-15.11-1.71l-44.89,18.07a10.81,10.81,0,0,1-13.14-4.58l-42.77-74a10.8,10.8,0,0,1,2.45-13.75l38.21-30a16.05,16.05,0,0,0,6-14.08c-.36-4.17-.58-8.33-.58-12.5s.21-8.27.58-12.35a16,16,0,0,0-6.07-13.94l-38.19-30A10.81,10.81,0,0,1,49.48,186l42.77-74a10.81,10.81,0,0,1,13.14-4.59l44.9,18.08a16.11,16.11,0,0,0,15.17-1.75A164.48,164.48,0,0,1,187,111.2a15.94,15.94,0,0,0,8.82-12.14l6.73-47.89A11.08,11.08,0,0,1,213.23,42h85.54a11.11,11.11,0,0,1,10.69,8.87l6.72,47.82a16.07,16.07,0,0,0,9,12.22,155.3,155.3,0,0,1,21.46,12.57,16,16,0,0,0,15.11,1.71l44.89-18.07a10.81,10.81,0,0,1,13.14,4.58l42.77,74a10.8,10.8,0,0,1-2.45,13.75l-38.21,30a16.05,16.05,0,0,0-6.05,14.08C416.17,247.67,416.39,251.83,416.39,256Z"/></svg>
</div>
<div className="intro_bellow_sett">Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum sit est hic voluptates illum reicie</div>
<div className="filter">
    <span>filter</span>
    <svg fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> </svg>
</div>
    <div className="filter_elements">
    <Inp_fl/>
    <Cost_min_max min={min} max={max}/>
    <RangeSlider className="fillter_range_cost" min={min} max={max} defaultValue={[120, 600]} onChange={handleRanges} /> 
    <h6 className="para_range_fill"><font className="green_font"> {firstValue } Dt</font>  ~  <font className="green_font">{secondValue } dt</font></h6>
    <div className="flitring">
    <div className="wave-group">
    <input required="" type='search' id='min_price_input' className="input" onFocus={e => e.target.value = location} onInput={e => setlocation(e.target.value)} onBlur={e => e.target.value = ''}/>
    <span className="bar"></span>
    <label className="label">
    <span className="label-char label-char1 ">L</span>
    <span className="label-char label-char2 ">o</span>
    <span className="label-char label-char3 ">c</span>
    <span className="label-char label-char4 ">a</span>
    <span className="label-char label-char5 ">t</span>
    <span className="label-char label-char6 ">i</span>
    <span className="label-char label-char7 ">o</span>
    <span className="label-char label-char7 ">n</span>
    </label>
    </div>
    <button class="app_filter">filtering</button>
    </div>
    </div>
<div className="categories">
     <span>categories</span>
</div>
<Categories/>

</section>
    )}
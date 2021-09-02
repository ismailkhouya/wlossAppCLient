import React,{useState} from 'react'
const axios = require('axios').default;
var validator = require('validator');





export default function BMISection({BodySection,BMI,Div,submitEmail,setEmail,Diff}) {
    const [EmailValid, setEmailValid] = useState(false)
    const [emailSend,SetEmailSend]=useState(false)
    return (
        <div className=" row">
            <div className="row col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12 justify-content-center margin0">
                <div className="row col-12 col-md-12 col-lg-12 col-sm-12 col-xs-12">
                <div className={`col-${Div} col-md-${Div} col-lg-${Div} col-sm-${Div}`}></div>
                <div className="indicator col-md-1 col-lg-1 col-sm-1 col-xs-1 BMIindicator">
                    <span className="spanBMI">{BMI}</span>
                    <div className="triangle"></div>
                </div>
                </div>
                
                <div className="indicator STindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Severe Thinness
                </div>
                <div className="indicator MTindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Moderate Thinness	
                </div>
                <div className="indicator MDTindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Mild Thinness	  
                </div>
                <div className="indicator Nindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Normal	
                </div>
                <div className="indicator OWTindicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Overweight
                </div>
                <div className="indicator OC1indicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Obese Class I	
                </div>
                <div className="indicator OC2indicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Obese Class II	   
                </div>
                <div className="indicator OC3indicator col-1 col-md-1 col-lg-1 col-sm-1 col-xs-1">
                Obese Class II	
                </div>
            </div>
            <div className="col-12 justify-content-center suggestionSection">
                <div className='col-12 row justify-content-center  justify-content-center margin0 '>
                    <div className='col-9'>
                        
                        <div hidden={Diff===0} className="WeightDiff">TO HAVE A HEALTHY WEIGHT YOU MUST HAVE {Diff>0?`${Diff} KG LESS`:`${-Diff} KG MORE`}</div>
                        <h3 className=" CallToAction"> YOUR BODY IS {BodySection} GET YOUR FREE EBOOK ABOUT NUTRITION HERE </h3>
                    </div>
                    <div className="GiftDescription col-xl-4 col-lg-4 col-md-4 col-sm-11 col-xs-11 col-11">
                    <h3>Ebook Content</h3>
                    <div>Carbohydrates – The Master Fuel PAGE 2</div>
                    <div>Protein’s Role as a Team Player PAGE 12</div>
                    <div>Building Body Mass PAGE 14</div>
                    <div>Fat as Fuel PAGE 16</div>
                    <div>Gut Health PAGE 17</div>
                    <div>Vitamins and Minerals PAGE 18</div>
                    <div>Supplements and Your Health PAGE 21</div>
                    <div>Fluids and Hydration PAGE 24</div>
                    </div>
                    <div className="GiftPicture col-xl-4 col-lg-4 col-md-4 col-sm-11 col-xs-11 col-11">
                        <div className="EbookPic"></div>
                    </div> 
                </div>

                {!emailSend?<div className="EmailInputSection">
                    <input onChange={(e)=>{
                        setEmail(e.target.value)
                        setEmailValid(validator.isEmail(e.target.value))
                        }} className="EmailInput inputDate" placeholder="TYPE YOUR EMAIL"></input>
                    <button disabled={!EmailValid} onClick={()=>{
                        SetEmailSend(true)
                        submitEmail()
                        }} className="btnConfim">Send</button>
                </div>:
                <div className="checkEmail">
                    CHECK YOUR EMAIL BOX (IF NOT FOUND PLEASE CHECK YOUR SPAM)
                </div>}
                
            </div>

        </div>
    )
}



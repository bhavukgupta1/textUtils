import React, { useState } from 'react'

export default function About(props) {
    // let div = document.getElementById("box")
    const [myStyle, setMyStyle] = useState(
        {
            color: "black",
            backgroundColor: "white",
            opacity: ""
        }
    )
    const [btnStyle, setbtnStyle] = useState(
        {
            color: "white",
            backgroundColor: "black"

        }
    )
    const [setBtn, setsetBtn] = useState('enter in dark mode')
    const handleDarkLight = () => {

        if (myStyle.color === "black") {
            setMyStyle({
                color: "white",
                backgroundColor: "black",
                opacity: "80%"
            })
            setbtnStyle({
                color: "black",
                backgroundColor: "white",
            })
            setsetBtn("enter to light mode")
        }
        else {
            setMyStyle({
                color: "black",
                backgroundColor: "white",
                opacity: ""
            })
            setbtnStyle({
                color: "white",
                backgroundColor: "black"
            })
            setsetBtn('enter in dark mode')
        }
    }


    return (
        <>
            <div className={`container navbar-${props.mode} bg-${props.mode}`}>
                <h2>ABOUT US</h2>
                <div className="accordion " id="box">
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Our MOTO
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                OUR LIFE IN OFFICE
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="accordion-item" style={myStyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed  btn btn-info" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                OUR CULTURE
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>

                <button onClick={handleDarkLight} style={btnStyle} className="m-3 btn btn-dark">{setBtn}</button>
                
                <div className="form-check form-switch my-3">
                  <input onClick={handleDarkLight} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" ></input>
                </div>








            </div>
        </>
    )
};

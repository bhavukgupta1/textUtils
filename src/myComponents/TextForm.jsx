import React, { useState } from 'react'



export default function TextForm(props) {

    const [text, setText] = useState("");

    function handleClickUpper() {

        let newText = text.toUpperCase();
        setText(newText)

    }


    function handleClickLower() {


        console.log("lower");
        let newText = text.toLowerCase();
        setText(newText)

    }



    function handleClickSearch() {

        let txt = Array.from(text)

        for (let index = 0; index < txt.length; index++) {
            const element = txt[index];

            if (element === "a") {
                console.log(index);
            }
        }




    }







    const handleChange = (event) => {

        setText(event.target.value)
    }






    return (
        <>
            <hr />
            <div className={`container navbar-${props.mode} bg-${props.mode}`}>
                <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>{props.heading} </h2>
                <div className="mb-3">

                    <textarea onChange={handleChange} className="form-control" rows="3" id="myBox" value={text} ></textarea>
                    <button disabled={text.length === 0} onClick={handleClickUpper} className="m-2 btn btn-primary">convert to UpperCase</button>
                    <button disabled={text.length === 0} onClick={handleClickLower} className="m-2 btn btn-primary">convert to LowerCase</button>
                    <button disabled={text.length === 0} onClick={handleClickSearch} className="m-2 btn btn-primary"> Find letter a </button>

                </div>

            </div>

            <hr />
            <div className="container">
                <h2> Your Text Summary </h2>
                <p>my text has {text.split(/\s+/).filter((element) => { return element != 0 }).length} words and  {text.length}characters</p>
                <p>time taken to read above words is {text.split(" ").filter((element) => { return element != 0 }).length * .008} minutes</p>
                <hr />
                <h2>preview</h2>
                <p>{text}</p>
                <hr />
            </div>

        </>
    )
};

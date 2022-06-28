import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode==='dark'?'white':'#042743',
        backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white',
        // border: '2px solid',
        borderColor: props.mode ==='dark'?'white':'042743'
    }


//    const [btntext, setBtnText] = useState("Enable Dark Mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color === 'black'){
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black'
    //            // border: '2px solid white'

    //         })
    //         setBtnText("Enable Light Mode");
    //     }
    //     else{
    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText("Enable Dark Mode");

    //     }
    // }

  return (
     <div className="container">
        <h1 className='my-3' style={{color: props.mode==='dark'?'white':'#042743'}}>About Us</h1>
        <div className="accordion" id="accordionExample" style={myStyle}>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong> Analyze Your text</strong>
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci unde ducimus quis! loeem3
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga.
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle}>
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    <strong>Free to use</strong>
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character count tool that provides instant character count & word count statistics
                    for a given text. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic animi esse atque fugiat itaque sint!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus vero delectus doloribus eveniet esse eaque odit voluptatum nihil.

                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong>Browser Compatible</strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={myStyle}>
                    This word counter software works in any web browsers such as chrome, firefix, Internet Explorer, Safari, Opera.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci iusto maiores excepturi rerum eveniet.
                    Lorem ipsum dolor sit amet consectetur.
                </div>
                </div>
            </div>
        </div>
        {/* <div className="container my-2">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
        </div> */}
     </div>
  )
}

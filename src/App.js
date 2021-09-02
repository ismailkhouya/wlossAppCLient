import Fade from 'react-reveal/Fade';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import { useEffect,useRef,useState } from 'react';
import { AiOutlineWoman,AiOutlineMan } from "react-icons/ai";
import BMISection from './BMISection'
const axios = require('axios').default;


// const NameSection=({Name,setName,setToShow,handleKeyPress})=>{
//   const nameInput=useRef(null)
//   useEffect(() => {
//     nameInput.current.focus()
//   }, [])
//   return(
//     <Fade left>
//          <div className="nameSection section">
//           <input ref={nameInput} onKeyPress={(e)=>handleKeyPress(e,Name!=="")} value={Name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="TYPE YOUR NAME" className="inputDate"></input>
//           <button   disabled={Name===""} onClick={()=>setToShow(2)} className="btnNext">Next</button>
//         </div>
//     </Fade>
    
//   )
//   }

const AgeSection=({Age,setAge,setToShow,handleKeyPress})=>{
    const AgeInput=useRef(null)
    useEffect(() => {
      AgeInput.current.focus()
    }, [])
return(
  <Fade left>
     <div className="AgeSection section">
        {/* <button  onClick={()=>setToShow(1)} className="btnPrevious">Previous</button> */}
        <input ref={AgeInput} onKeyPress={(e)=>handleKeyPress(e,Age>0)} value={Age} onChange={(e)=>setAge(e.target.value)} min="0" placeholder="TYPE YOUR AGE"  type="number" className="inputDate"></input>
        <button disabled={!Age>0} onClick={()=>setToShow(2)} className="btnNext">Next</button>
      </div>
  </Fade>
  
)
}

const WeightSection=({Weight,setToShow,setWeight,handleKeyPress})=>{
      const weightInput=useRef(null)
      useEffect(() => {
        weightInput.current.focus()
      }, [])
      return(
        <Fade left>
          <div className="weightSection section">
            <button  onClick={()=>setToShow(1)} className="btnPrevious">Previous</button>
            <input ref={weightInput} onKeyPress={(e)=>handleKeyPress(e,Weight>0)} value={Weight} onChange={(e)=>setWeight(e.target.value)} min="0" placeholder="TYPE YOUR WEIGHT" type="number" className="inputDate weightInput"></input>
            <button disabled={!Weight>0} onClick={()=>setToShow(3)} className="btnNext">Next</button>
         </div>
        </Fade>
      )
}

const HeightSection=({Height,setToShow,setHeight,handleKeyPress})=>{
        const heightInput=useRef(null)
        useEffect(() => {
          heightInput.current.focus()
        }, [])
      return(
        <Fade left>
          <div className="heightSection section">
            <button  onClick={()=>setToShow(2)} className="btnPrevious">Previous</button>
            <input ref={heightInput} onKeyPress={(e)=>handleKeyPress(e,Height>0)} value={Height} onChange={(e)=>setHeight(e.target.value)} min="0" placeholder="TYPE YOUR HEIGHT" type="number" className="inputDate heightInput"></input>
            <button disabled={!Height>0} onClick={()=>setToShow(4)} className="btnNext">Next</button>
         </div>
        </Fade>
      )
}



const GenderSection=({Gender,setGender,calculate,setToShow,handleKeyPress})=>{
return(
  <Fade left>

    <div className="genderSection section">
    <button  onClick={()=>setToShow(3)} className="btnPrevious">Previous</button>
      <label className="genderSelect"><input onKeyPress={(e)=>handleKeyPress(e,Gender!=="")} checked={Gender==='F'} type='checkbox' onChange={()=>setGender('F')}></input> <AiOutlineWoman/></label>
      <label className="genderSelect"><input onKeyPress={(e)=>handleKeyPress(e,Gender!=="")} checked={Gender==='M'} type='checkbox' onChange={()=>setGender('M')}></input> <AiOutlineMan/> </label>
    <button disabled={Gender===""} onClick={()=>calculate()} className="btnNextScore">Get my score</button>
    </div>
  </Fade>
)
}




// const Steps=({toShow})=>{
//   return(
//     <div className="SectionSteps">
//       <label ><input type="radio" disabled={toShow>1}  checked={toShow>1} className="inputCheck"></input><span className="spanStep">Name</span></label>
//       <label><input type="radio" disabled={toShow>2} checked={toShow>2} className="inputCheck"></input><span className="spanStep">Age</span></label>
//       <label><input type="radio" disabled={toShow>3}  checked={toShow>3} className="inputCheck"></input><span className="spanStep">Weight</span></label>
//       <label><input type="radio" disabled={toShow>4}  checked={toShow>4} className="inputCheck"></input><span className="spanStep">Height</span></label>
//       <label><input type="radio" disabled={toShow>5}  checked={toShow>5} className="inputCheck"></input><span className="spanStep">Gender</span></label>
//     </div>
//   )
// }

const UserData=({toShow,setToShow})=>{
  const [Age,setAge]=useState()
  const [Email,setEmail]=useState("")
  const [Weight,setWeight]=useState()
  const [Height,setHeight]=useState()
  const [Gender,setGender]=useState("")
  const [BMI,setBMI]=useState(23)
  const [Div,setDiv]=useState()
  const [Diff,setDiff]=useState(0)
  const [BodySection,setBodySection]=useState('')
  const calculate=()=>{

    console.log('calculate')
    setToShow(5)
    const BMI=Weight/(Height*Height*0.01*0.01)
    if(BMI<16){
      setBodySection('THIN')
      setDiv(2)
      setDiff((Weight-Height*Height*0.01*0.01*18.5).toFixed(1))
    }else if(BMI<17){
      setBodySection('THIN')
      setDiv(3)
      setDiff((Weight-Height*Height*0.01*0.01*18.5).toFixed(1))

      
    }else if(BMI<18.5){
      setBodySection('THIN')
      setDiv(4)
      setDiff((Weight-Height*Height*0.01*0.01*18.5).toFixed(1))

    }else if(BMI<25){
      setBodySection('NORMAL')
      setDiv(5)
    }else if(BMI<30){
      setDiff((Weight-Height*Height*0.01*0.01*25).toFixed(1))
      setBodySection('OVERWEIGHT')
      setDiv(6)
    }else if(BMI<35){
      setDiff((Weight-Height*Height*0.01*0.01*25).toFixed(1))
      setBodySection('OBESE')
      setDiv(7)
    }else if(BMI<40){
      setDiff((Weight-Height*Height*0.01*0.01*25).toFixed(1))
      setBodySection('OBESE')
      setDiv(8)
    }else{
      setDiff((Weight-Height*Height*0.01*0.01*25).toFixed(1))
      setBodySection('OBESE')
      setDiv(9)
    }
    setBMI(BMI.toFixed(1))
    
    

  }
  const handleKeyPress=(e,test)=>{
    if(e.key==='Enter' && test){
      setToShow(toShow+1)
    }
  }


  const submitEmail=()=>{
    console.log('SVD')
    axios.post('http://wlossapi-env-1.eba-iii2n5kh.us-east-2.elasticbeanstalk.com/SaveEmail',{
      Age,
      Email,
      Weight,
      Height,
      BodySection,
      Gender
    })
    .then((res)=>{
      console.log("Email Saved successfuly"+res)
    }).catch((err)=>{
      console.log('=====EROOOOR======')
      console.log(err)
    })
  }

  switch (toShow) {

    // case 13:
    //     return(
    //       <div className="sectionWrapper">
    //         <NameSection handleKeyPress={handleKeyPress}  Name={Name} setToShow={setToShow} setName={setName}></NameSection>
    //       </div>
    //     )
    case 1:
        return(
          <div className="sectionWrapper">
              <AgeSection  handleKeyPress={handleKeyPress} Age={Age} setAge={setAge} setToShow={setToShow}></AgeSection>
          </div>
        )
    case 2:
      return(
        <div className="sectionWrapper">
             <WeightSection handleKeyPress={handleKeyPress} Weight={Weight} setWeight={setWeight} setToShow={setToShow}></WeightSection>
        </div>
      )
    case 3:
      return(
        <div className="sectionWrapper">        
          <HeightSection handleKeyPress={handleKeyPress} Height={Height} setToShow={setToShow} setHeight={setHeight}></HeightSection>
        </div>
      )
    case 4:
      return(
        <div className="sectionWrapper">        
          <GenderSection handleKeyPress={handleKeyPress} Gender={Gender} calculate={calculate} setGender={setGender} setToShow={setToShow}></GenderSection>
        </div>
      )
    case 5:
      return(
        <div className="">
        <BMISection Diff={Diff} BodySection={BodySection} setEmail={setEmail} submitEmail={submitEmail} Div={Div} BMI={BMI}></BMISection>
      </div>
      )
    default:
      break;
  }

}

function App() {
  const [toShow,setToShow]=useState(1)
return(
  <div className="App" >
    <div className="container maxWidth100 padding0">
      {/* <Steps toShow={toShow}></Steps> */}
      <UserData  toShow={toShow} setToShow={setToShow}></UserData>
    </div>
  </div>
)

  
}

export default App;

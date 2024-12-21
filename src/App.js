//import react from "react";
//import {Fragment} from "react"
import { useState } from "react";

function App(){
  console.log('render');
  const [number,setNumber]=useState(1);
  /*
  [state 이름, set+state이름(함수 명)]=userState(초기값);
  함수명(값); //함수 사용
  */
  //함수 정의 방법1.
  const double=(number)=>{
//    number*=number;
    setNumber(number*2);
    console.log(number); //
  };

  const printHello=()=>{
    console.log('hello')
  }
  /*
  //함수 정의 방법2.
  const double=function(number){
    return number*3;
  }
  */

  return(
    //<Fragment>
    //<react.Fragment>
    <>
      <div>{number}</div>
      <butten className="btn btn-primary" onClick={double}>
        Submit
      </butten>
    </>
    //</react.Fragment>
  );
    //함수 -> jsx 템플릿 return
} 

export default App; 
//extport default로 내보낸 이후 다른 곳에서 import 하여 사용
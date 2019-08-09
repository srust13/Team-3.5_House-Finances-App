import React from "react";

// export default class Headline extends Component {
// constructor(props){
//   super(props)
// }
// render(){
//   return(
//     <div>
//     <h1>{this.props.headline}</h1>
//   </div>
//   )
// }
// }

// const Headline2 = ( props ) => (
//   <div>
//     <h1>{props.headline}</h1>
//   </div>
// );

const Headline2 = props => {
  let testDiv = props.testArray.map(num => <button onClick ={(e)=> props.setTestArray([num+1,num+1, num+1, num+1, num+1 ])}>{num}</button>);
  console.log(props.testArray);
  return <div>
      {testDiv}
      <h1>helloe</h1>
  </div> ;
};

export default Headline2; 

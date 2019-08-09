const Headline2 = props => {
  testDiv = props.testArray.map(num => <button onClick ={(e)=> setTestArray([true, true, true, true, true])}>{num}</button>);
  console.log(props.testArray);
  return <div>
      {testDiv}
      <h1>helloe</h1>
  </div> ;
};

export default Headline2; 

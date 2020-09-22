import React from 'react';

// function App() {
//   return (
//     <React.Fragment>
//     <label htmlFor="bar">bar</label>
//     <input type="text" onChange={()=>{console.log("I am clicked")}} />
//     </React.Fragment>
//   );
// }

const App = () => {
  return (<div><Cat /><Cat /></div>)
}
const Cat = () => {
  return <div>Mee!</div>
}

export default App;

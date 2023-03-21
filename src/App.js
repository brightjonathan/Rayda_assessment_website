import './App.css';

import Header_component from './Components/Header_component';
import Header_two_component from './Components/Header_two_component';
import Heager_third_component from './Components/Heager_third_component';

const App = () => {
  return (
    <div>
      {/* Rendering different component file */}
      <Header_component/>
      <Header_two_component/>
      <Heager_third_component/>
    </div>
  )
}

export default App


import DeviceEmulator from 'react-device-emulator';
import 'react-device-emulator/lib/styles/style.css';
import Home from './components/Home'

const App = () => {
  return (
    <div className="app">
      <DeviceEmulator
        withDeviceSwitch
        withRotator
        // url="http://www.worksfair.com"
        children={<Home/>}
        type="tab"
      >
        {/* <div className="welcome">Welcome to React Device Emulator</div> */}
      </DeviceEmulator>
    </div>
  );
};

export default App;



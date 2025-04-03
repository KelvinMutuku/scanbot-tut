import { useEffect } from "react";
import ScanbotSDK from 'scanbot-web-sdk/ui';

const App = () => {
  useEffect(() => {
    const init = async () => {
      await ScanbotSDK.initialize({
        licenseKey: "",
        enginePath: "/wasm/"
      });
    };

    init();
  }, []);

  return <></>;
}

export default App;
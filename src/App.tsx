import { useEffect, useState } from "react";
import ScanbotSDK from "scanbot-web-sdk/ui";

const App = () => {
  const [scanResult, setScanResult] = useState<string>("");
  
  useEffect(() => {
    const init = async () => {
      await ScanbotSDK.initialize({
        licenseKey: "",
        enginePath: "/wasm/"
      });
    };

    init();
  }, []);
  
  const startScanner = async () => {
    const config = new ScanbotSDK.UI.Config.BarcodeScannerScreenConfiguration();
  
    // Customize the look of the barcode scanner
    config.palette.sbColorPrimary = "#1E90FF";
    config.palette.sbColorSecondary = "#87CEEB";
  
    config.userGuidance.title.text = "Place the finder over the barcode";
  
    config.topBar.mode = "GRADIENT";
  
    config.actionBar.zoomButton.backgroundColor = "#1E90FF";
  
    // Customize the barcode scanner's use case
    const useCase = new ScanbotSDK.UI.Config.MultipleScanningMode();
  
    useCase.arOverlay.visible = true;
    useCase.arOverlay.automaticSelectionEnabled = false;
  
    config.useCase = useCase;
    
    const result = await ScanbotSDK.UI.createBarcodeScanner(config);
  
    if (result && result.items.length > 0) {
      setScanResult(result.items[0].barcode.text);
    }
  
    return result;
  };

  return (
    <div>
      <button onClick={startScanner}>Start Scanner</button>
      {scanResult && <div>{scanResult}</div>}
    </div>
  );
};



export default App;
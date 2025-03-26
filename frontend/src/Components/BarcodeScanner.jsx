import React, { useEffect, useRef, useState } from "react";
import Quagga from "quagga";

const BarcodeScanner = ({ onDetected }) => {
  const scannerRef = useRef(null);
  const [scannedCode, setScannedCode] = useState(null);

  useEffect(() => {
    if (!scannerRef.current) return;

    Quagga.init(
      {
        inputStream: {
          type: "LiveStream",
          target: scannerRef.current,
          constraints: {
            width: 640,
            height: 480,
            facingMode: "environment",
          },
        },
        decoder: {
          readers: ["ean_reader", "code_128_reader", "upc_reader", "ean_8_reader"],
        },
      },
      (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      if (!scannedCode) {
        const barcode = data.codeResult.code;
        setScannedCode(barcode);
        onDetected(barcode);
        Quagga.stop(); // Stop scanning after first detection
      }
    });

    return () => {
      Quagga.offDetected(); // Remove event listener
      Quagga.stop();
    };
  }, [onDetected, scannedCode]);

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold text-gray-700 mb-3">Scan Barcode:</h2>
      <div
        ref={scannerRef}
        className="w-full h-64 bg-gray-200 rounded-md shadow-md flex items-center justify-center"
      >
        {scannedCode ? (
          <p className="text-green-600 font-bold">Scanned: {scannedCode}</p>
        ) : (
          <p className="text-gray-500">Align the barcode in the scanner</p>
        )}
      </div>
    </div>
  );
};

export default BarcodeScanner;
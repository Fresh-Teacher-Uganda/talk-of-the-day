import React, { useEffect, useRef } from 'react';
import QRCode from 'qrcode';

interface QRCodeProps {
  value: string;
  size?: number;
  className?: string;
  onClick?: () => void;
}

export const QRCodeComponent: React.FC<QRCodeProps> = ({ 
  value, 
  size = 100, 
  className = "",
  onClick 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const generateQR = async () => {
      if (canvasRef.current) {
        try {
          await QRCode.toCanvas(canvasRef.current, value, {
            width: size,
            margin: 1,
            color: {
              dark: '#000000',
              light: '#FFFFFF'
            }
          });
        } catch (error) {
          console.error('Error generating QR code:', error);
        }
      }
    };

    generateQR();
  }, [value, size]);

  return (
    <div className={`inline-block ${className}`}>
      <canvas 
        ref={canvasRef} 
        onClick={onClick}
        className={onClick ? 'cursor-pointer' : ''}
      />
    </div>
  );
};
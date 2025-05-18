// components/SpinnerText.tsx

import { SpinningText } from '../ui/spinning-text';

export function SpinnerText() {
  return (
    <div className="relative w-48 h-48 group cursor-pointer z-50">
      {/* Orange Circle */}
      <div className="absolute inset-0 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-all duration-200 flex items-center justify-center overflow-hidden">
        {/* Spinning Text Inside the Circle */}
        <SpinningText
          radius={7}
          fontSize={1.2}
          className="text-white group-hover:animate-spin-slow"
        >
          {`Fix it! Forget it! • `.repeat(2)}
        </SpinningText>
      </div>
    </div>
  );
}

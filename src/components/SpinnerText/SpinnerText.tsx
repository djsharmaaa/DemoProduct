// components/SpinnerText.tsx

import FixItBadge from '../badge/fixitbadge';
import { SpinningText } from '../ui/spinning-text';

export function SpinnerText() {
  return (
    <div className="relative w-52 h-52 group cursor-pointer z-20">
      {/* Orange Circle */}
      <div className="absolute inset-0 rounded-full bg-orange-500 group-hover:bg-orange-600 transition-all duration-200 flex items-center justify-center overflow-hidden">
        {/* Spinning Text Inside the Circle */}
        <SpinningText
          radius={11}
          fontSize={1}
          className="text-white group-hover:animate-spin-slow"
        >
          {`Fix it! Forget it! • `.repeat(2)}
        </SpinningText>


            {/* Centered FixItBadge */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="scale-75">
            <FixItBadge />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FixItBadge() {
  return (
    <div className="relative w-48 h-48 rounded-full overflow-hidden bg-orange-500">
      <div className="relative w-49 h-49">
        {/* Outer Circle */}
        <div className="absolute inset-0 rounded-full border-4 border-white z-0" />

        {/* Inner Circle */}
        <div className="absolute inset-4 rounded-full border-2 border-white z-0" />

        {/* Text and Mask Layer */}
        <div className="absolute inset-0 flex flex-col items-center justify-center rotate-[-10deg] font-patrick text-center z-10 text-white">
          <p className="text-4xl font-bold leading-snug">Fix it!</p>

          {/* Masked "Forget it!" inside a solid orange background */}
          <div className="relative z-10 mt-1 -mb-1 px-1 py-1 bg-orange-500">
            <p className="text-4xl font-bold">Forget it!</p>
          </div>

          {/* Underlines */}
         <div className="mt-3 relative h-4">
            <div className="absolute left-[20%] -translate-x-1/2 w-20 h-1 bg-white rotate-[0deg]" />
            <div className="absolute left-1/2 -translate-x-1/2 w-20 h-1 bg-white rotate-[0deg] top-2 ms-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

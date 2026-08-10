import { useState, useEffect } from 'react'

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Fast & smooth progress increment
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          return 100
        }
        const diff = Math.floor(Math.random() * 15) + 10
        return Math.min(prev + diff, 100)
      })
    }, 40)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress === 100) {
      const timer = setTimeout(() => {
        setIsFadingOut(true)
        const doneTimer = setTimeout(() => {
          if (onComplete) onComplete()
        }, 500)
        return () => clearTimeout(doneTimer)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [progress, onComplete])

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-teal-950 via-teal-900 to-slate-950 text-white transition-all duration-500 transform-gpu ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-72 h-72 bg-amber-400/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center max-w-xs text-center px-4">
        {/* Animated Brand Logo */}
        <div className="relative mb-6">
          <div className="absolute -inset-2 bg-gradient-to-r from-teal-400 to-amber-400 rounded-3xl blur-md opacity-75 animate-pulse-glow" />
          <div className="relative w-24 h-24 rounded-2xl overflow-hidden shadow-2xl bg-teal-800 border-2 border-white/20 p-1 flex items-center justify-center">
            <img
              src="/mk_logo.png"
              alt="MK Carry Bags"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-2xl font-black tracking-tight text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
          MK <span className="text-amber-400">Carry Bags</span>
        </h1>
        <p className="text-xs text-teal-200 font-medium tracking-wide uppercase mb-8">
          Premium Packaging Solutions
        </p>

        {/* Progress Bar Container */}
        <div className="w-full bg-white/10 backdrop-blur-md rounded-full h-2 overflow-hidden border border-white/15 mb-3 p-0.5">
          <div
            className="h-full bg-gradient-to-r from-teal-400 via-emerald-400 to-amber-400 rounded-full transition-all duration-150 ease-out transform-gpu"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Percentage Counter */}
        <div className="flex items-center justify-between w-full text-xs text-teal-300 font-medium">
          <span>Loading experience...</span>
          <span className="font-bold text-amber-400">{progress}%</span>
        </div>
      </div>
    </div>
  )
}

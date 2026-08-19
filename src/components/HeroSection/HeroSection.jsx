import React, { useState } from 'react';
import SlicedWaves from '../SlicedWaves/SlicedWaves';
import secofetLogo from '../../assets/Secofet-wordmark-W.svg';

export default function HeroSection() {
  const [isNotifyOpen, setIsNotifyOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'submitted' | 'error'

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://formspree.io/f/xqpzwpnw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('submitted');
        setEmail('');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#010501] text-white overflow-hidden font-sans flex flex-col justify-between p-4 sm:p-6 md:p-8">
      {/* Sliced Waves Background */}
      <div className="absolute inset-0 z-0">
        <SlicedWaves
          color1="#008000"
          color2="#70e000"
          color3="#38b000"
          columns={14}
          rows={9}
          barThickness={0.14}
          speed={0.4}
          travel={0.7}
          waveSpread={0.9}
          rowOffset={0.95}
          softness={0.05}
          glow={0}
          brightness={4}
          contrast={1}
          opacity={0.1}
          orientation="horizontal"
          alternate={false}
          mouseInteraction
          mouseStrength={1.15}
          mouseRadius={0.45}
          grain
          grainIntensity={0.05}
        />
      </div>

      {/* Background Animated Grid Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.15) 0%, transparent 60%),
            repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(34, 197, 94, 0.2) 20px),
            repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255, 255, 255, 0.03) 40px)
          `,
          backgroundSize: '100% 100%, 100% 20px, 40px 100%',
        }}
      />

      {/* Header Navigation */}
      <header className="relative z-10 max-w-3xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-[#16161a]/80 border border-white/10 backdrop-blur-md">
        <div className="flex items-center">
          <img src={secofetLogo} alt="Secofet" className="h-5 sm:h-6 w-auto" />
        </div>

        <nav className="flex items-center gap-6">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@secofet.com&su=Inquiry%20from%20Secofet%20Website"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-6 py-1.5 sm:py-2 rounded-2xl bg-white text-black font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-[#38b000] hover:text-white hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 shadow-sm"
          >
            <span>Contact Us</span>
          </a>
        </nav>
      </header>

      {/* Main Hero Content */}
      <main className="relative z-10 my-auto text-center flex flex-col items-center max-w-3xl mx-auto px-2 sm:px-4 py-8">
        {/* Release Badge - Entrance 1 */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#18181c] border border-white/10 text-xs sm:text-sm mb-6 sm:mb-8 animate-[fadeIn_0.5s_ease-out_forwards]">
          <span className="bg-white text-black font-bold text-[10px] sm:text-xs uppercase px-2 py-0.5 rounded-full tracking-wide">
            NEW
          </span>
          <span className="text-gray-300 font-medium">
            Web under development
          </span>
        </div>

        {/* Hero Title - Entrance 2 (Smooth Slide Up + Fade) */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-[1.15] mb-8 sm:mb-10 text-white max-w-2xl animate-[slideUp_0.8s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          A New Secofet Experience Is Coming.
        </h1>

        {/* Call to Action Buttons - Entrance 3 (Staggered Fade) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto animate-[slideUp_1.1s_cubic-bezier(0.16,1,0.3,1)_forwards]">
          {/* Phone Call Action */}
          <a
            href="tel:+251103456789"
            className="w-full sm:w-auto justify-center px-4 py-2.5 rounded-2xl bg-white text-black font-medium text-sm transition-all duration-300 hover:bg-[#38b000] hover:text-white hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 shadow-sm"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span>+251 (103) 456-789</span>
          </a>

          {/* Email Action Directs to Gmail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=info@secofet.com&su=Inquiry%20from%20Secofet%20Website"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-4 py-2.5 rounded-2xl bg-[#18181c]/90 text-gray-300 font-medium text-sm border border-white/10 hover:bg-white/20 hover:text-white transition-all"
          >
            Email us
          </a>
        </div>
      </main>

      {/* Bottom Right Interactive Notify Toggle Widget */}
      <div className="relative z-10 flex justify-end">
        <div className="flex flex-col items-end gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#141418]/90 border border-white/10 backdrop-blur-sm transition-all">
            <span className="text-xs text-gray-400 font-medium select-none">
              {status === 'submitted' ? "You're on the list!" : 'Notify Me'}
            </span>

            <button
              type="button"
              aria-label="Toggle email notifications"
              onClick={() => {
                setIsNotifyOpen(!isNotifyOpen);
                if (status === 'error') setStatus('idle');
              }}
              className={`w-11 h-6 flex items-center rounded-full p-1 transition-colors duration-300 ${isNotifyOpen || status === 'submitted'
                  ? 'bg-green-500'
                  : 'bg-zinc-700'
                }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${isNotifyOpen || status === 'submitted'
                    ? 'translate-x-5'
                    : 'translate-x-0'
                  }`}
              />
            </button>
          </div>

          {/* Expandable Email Input Form */}
          {isNotifyOpen && status !== 'submitted' && (
            <form
              onSubmit={handleSubscribe}
              className="flex items-center gap-2 p-1.5 pl-3.5 rounded-2xl bg-[#141418]/95 border border-white/15 backdrop-blur-md shadow-2xl transition-all"
            >
              <input
                type="email"
                placeholder="Enter your email..."
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error') setStatus('idle');
                }}
                disabled={status === 'loading'}
                className="bg-transparent text-xs text-white placeholder-gray-500 focus:outline-none w-36 sm:w-44"
                autoFocus
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-3 py-1 bg-white text-black text-xs font-semibold rounded-xl hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Saving...' : 'Submit'}
              </button>
            </form>
          )}

          {/* Validation Error Message */}
          {status === 'error' && isNotifyOpen && (
            <span className="text-[11px] text-red-400 pr-2">
              Please enter a valid email address.
            </span>
          )}
        </div>
      </div>

      {/* Inline Keyframes for smooth entrance animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

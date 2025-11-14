'use client';

export default function Home() {
  return (
    <main className="min-h-screen bg-nike-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-nike-black via-gray-900 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(200,255,0,0.1),transparent_50%)]" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto animate-fade-in">
          <h1 className="text-6xl md:text-8xl font-black text-nike-white mb-6 tracking-tight">
            EVOLUTION OF
            <span className="block bg-gradient-to-r from-nike-volt to-green-400 bg-clip-text text-transparent">
              MOTION
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Nike Rebrand - Just Do It, Reimagined with AI
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-nike-volt text-nike-black font-bold rounded-full hover:bg-green-400 transition-all transform hover:scale-105">
              EXPLORE COLLECTION
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-nike-white text-nike-white font-bold rounded-full hover:bg-nike-white hover:text-nike-black transition-all">
              WATCH FILM
            </button>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-nike-volt" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-nike-black">
          INNOVATION MEETS DESIGN
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-nike-black hover:text-nike-white transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-4">AI-Generated Assets</h3>
            <p className="text-gray-600 group-hover:text-gray-300">
              Cutting-edge AI technology powers our modern design elements and visual storytelling.
            </p>
          </div>
          
          <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-nike-black hover:text-nike-white transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">Modern Aesthetics</h3>
            <p className="text-gray-600 group-hover:text-gray-300">
              Sleek glassmorphism, dark mode, and fluid animations create an immersive experience.
            </p>
          </div>
          
          <div className="group p-8 bg-gray-50 rounded-2xl hover:bg-nike-black hover:text-nike-white transition-all duration-300 transform hover:scale-105 cursor-pointer">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Next-Gen Performance</h3>
            <p className="text-gray-600 group-hover:text-gray-300">
              Built with Next.js 15, React 18, and Tailwind CSS for blazing-fast performance.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-nike-black to-gray-900 text-nike-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            JUST DO IT
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Experience the future of Nike - where innovation meets design, powered by AI.
          </p>
          <p className="text-sm text-gray-500 mt-12">
            Task 3 - Future Interns Full Stack Web Development Internship | Created by Bipin Jr
          </p>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-nike-black text-nike-white text-center">
        <p className="text-sm text-gray-500">
          © 2025 Nike Rebrand Project - AI-Enhanced Design | Future Interns Internship
        </p>
      </footer>
    </main>
  );
}

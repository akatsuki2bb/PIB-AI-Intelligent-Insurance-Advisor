
import React from 'react';
import Navbar from './components/Navbar';
import InsuranceForm from './components/InsuranceForm';
import MainContent from './components/MainContent';
import TrustStats from './components/TrustStats';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-pib-navy">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex flex-col lg:flex-row items-start relative min-h-[600px]">
            <div className="flex-1 w-full">
              <MainContent />
            </div>
            <div className="py-12 lg:py-24 w-full lg:w-[420px] lg:shrink-0">
              <InsuranceForm />
            </div>
          </div>
        </div>

        {/* Bottom stats area can have a slightly different background or be kept white */}
        <div className="bg-white py-12 lg:py-24">
          <div className="max-w-7xl mx-auto px-4">
            <TrustStats />
          </div>
        </div>
      </main>

      <footer className="bg-pib-navy border-t border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center text-white font-black text-3xl tracking-tighter uppercase mb-4 opacity-50">
            pib
          </div>
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} PIB Insurance Brokers. All rights reserved. 
            Jo Bhi hoga Risk, PIB karega Fix.
          </p>
        </div>
      </footer>

      {/* Floating Action Button for Support */}
      <button className="fixed bottom-6 right-6 w-14 h-14 bg-pib-blue text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform z-40">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
      </button>
    </div>
  );
};

export default App;

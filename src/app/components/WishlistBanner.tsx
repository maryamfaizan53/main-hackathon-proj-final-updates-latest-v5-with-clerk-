import Link from 'next/link';
import React from 'react';

const Wishlistbanner: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-[300px] flex items-center justify-center"
      style={{
        backgroundImage: 'url("/images/intro_bg.png")', 
      }}
    >
      <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better contrast */}
      
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold mb-2">WISHLIST</h1>
        <p className="text-sm font-medium">
          <Link href="/" className="hover:underline">Home</Link> &gt; <span>WISHLIST</span>
        </p>
      </div>
    </section>
  );
};

export default Wishlistbanner;

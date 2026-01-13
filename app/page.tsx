// ============================================
// FILE: app/page.tsx
// ============================================
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Launch from '@/components/Launch';
import Community from '@/components/Community';
import Mission from '@/components/Mission';

export default function App() {
  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <Mission />
      <Features />
      <Community />
      <Launch />
      <Footer />
    </div>
  );
}
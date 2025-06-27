import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { WebDevelopment } from './pages/services/WebDevelopment';
import { WebDesign } from './pages/services/WebDesign';
import { SEO } from './pages/services/SEO';
import { DigitalMarketing } from './pages/services/DigitalMarketing';
import { QRCodes } from './pages/services/QRCodes';
import { Ecommerce } from './pages/services/Ecommerce';
import { Marketplace } from './pages/services/Marketplace';
import { International } from './pages/services/International';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJzdGFyZmllbGQiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CiAgICAgIDxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjAuNSIgZmlsbD0iIzMzOGVmNyIgb3BhY2l0eT0iMC4zIiAvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3N0YXJmaWVsZCkiIC8+Cjwvc3ZnPg==')] opacity-50"></div>
        <div className="relative z-10">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/web-design" element={<WebDesign />} />
              <Route path="/services/seo" element={<SEO />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/qr-codes" element={<QRCodes />} />
              <Route path="/services/ecommerce" element={<Ecommerce />} />
              <Route path="/services/marketplace" element={<Marketplace />} />
              <Route path="/services/international" element={<International />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
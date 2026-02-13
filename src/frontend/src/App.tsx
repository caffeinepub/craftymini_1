import { useRef } from 'react';
import { Heart } from 'lucide-react';
import { SiInstagram } from 'react-icons/si';
import { Button } from '@/components/ui/button';
import CategoryGrid from '@/components/CategoryGrid';
import WhyChooseSection from '@/components/WhyChooseSection';
import OrderNowForm from '@/components/OrderNowForm';
import ContactSection from '@/components/ContactSection';

function App() {
  const orderFormRef = useRef<HTMLDivElement>(null);

  const scrollToOrderForm = () => {
    orderFormRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src="/assets/generated/craftymini-logo.dim_512x512.png" 
              alt="CraftyMini Logo" 
              className="h-10 w-10 object-contain"
            />
            <span className="text-xl font-bold text-primary">CraftyMini</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#collection" className="text-sm font-medium hover:text-primary transition-colors">
              Collection
            </a>
            <a href="#why-choose" className="text-sm font-medium hover:text-primary transition-colors">
              Why Choose Us
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </a>
            <Button onClick={scrollToOrderForm} size="sm">
              Order Now
            </Button>
          </nav>
          <Button onClick={scrollToOrderForm} size="sm" className="md:hidden">
            Order Now
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section 
          className="relative py-20 md:py-32 overflow-hidden"
          style={{
            backgroundImage: 'url(/assets/generated/craftymini-hero-bg.dim_1600x900.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Welcome to CraftyMini
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                Handmade crochet items made with care. Choose from cozy outfits, purses, baby booties, hair clips, bows, and custom designs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button onClick={scrollToOrderForm} size="lg" className="text-lg">
                  Order Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="text-lg"
                  asChild
                >
                  <a href="#collection">Browse Collection</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Browse Our Collection */}
        <section id="collection" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Browse Our Collection</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handcrafted crochet items, each made with love and attention to detail
              </p>
            </div>
            <CategoryGrid />
          </div>
        </section>

        {/* Why Choose CraftyMini */}
        <section id="why-choose" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose CraftyMini</h2>
            </div>
            <WhyChooseSection />
          </div>
        </section>

        {/* Order Now Section */}
        <section ref={orderFormRef} id="order" className="py-16 md:py-24 bg-muted/30">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Place Your Order</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Fill out the form below and we'll get back to you with confirmation and payment details
              </p>
            </div>
            <OrderNowForm />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
            </div>
            <ContactSection />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} CraftyMini. All rights reserved.</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-accent fill-accent" />
              <span>using</span>
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors font-medium"
              >
                caffeine.ai
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

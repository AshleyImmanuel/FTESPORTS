import LoadingScreen from '@/components/LoadingScreen';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import Founders from '@/components/Founders';
import YouTubeSection from '@/components/YouTubeSection';
import Fuel from '@/components/Fuel';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
    return (
        <>
            {/* Loading Animation */}
            <LoadingScreen />

            <main className="relative">
                {/* Navigation */}
                <Navbar />

                {/* Hero Section */}
                <section id="hero">
                    <Hero />
                </section>

                {/* About Section */}
                <section id="about">
                    <AboutSection />
                </section>

                {/* Founders Section */}
                <section id="architects">
                    <Founders />
                </section>

                {/* YouTube Section */}
                <section id="youtube">
                    <YouTubeSection />
                </section>

                {/* Fuel Station Section */}
                <section id="fuel">
                    <Fuel />
                </section>

                {/* Contact Section */}
                <section id="comms">
                    <ContactForm />
                </section>

                {/* Footer */}
                <Footer />
            </main>
        </>
    );
}

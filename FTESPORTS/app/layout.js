import './globals.css';

export const metadata = {
    title: 'Final Touch Esports | Elite Free Fire Organization',
    description: 'Final Touch Esports - Elite Free Fire Esports Organization. Tier-1 competitive roster. #WeFinishWhatWeStart',
    keywords: 'Final Touch Esports, FTZ, Free Fire, Esports, Gaming, Competitive, Tournament',
    authors: [{ name: 'Final Touch Esports' }],
    openGraph: {
        title: 'Final Touch Esports | Elite Free Fire Organization',
        description: 'Elite Free Fire Esports Organization. Tier-1 competitive roster.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="font-montserrat antialiased">
                {children}
            </body>
        </html>
    );
}

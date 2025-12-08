# Final Touch Esports - Official Website

![Final Touch Esports](https://img.shields.io/badge/Final%20Touch-Esports-00c701?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)

Production-ready Esports Organization Platform for **Final Touch Esports (FTE)** - Elite Free Fire competitive roster.

## 🎯 Features

- **Cyber-Glitch Design System**: Aggressive, high-speed Tier-1 esports aesthetic
- **Advanced Animations**: Framer Motion timeline animations, glitch effects, typewriter animations
- **3D Tilt Cards**: Interactive founder cards with depth effects
- **Contact System**: MongoDB storage + Email notifications via Nodemailer
- **Direct Actions**: WhatsApp & Phone integration for instant contact
- **UPI Payments**: Integrated donation system with UPI deep linking
- **Fully Responsive**: Mobile-first design with Tailwind CSS

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Database**: MongoDB (Mongoose)
- **Backend**: Next.js API Routes
- **Email**: Nodemailer
- **Icons**: React Icons

## 📦 Installation

1. **Install Dependencies**:
```bash
npm install
```

2. **Configure Environment Variables**:

Create a `.env.local` file in the root directory:

```env
# MongoDB Configuration
MONGODB_URI=your_mongodb_connection_string_here

# Email Configuration (Gmail SMTP)
EMAIL_USER=finaltouch.esp@gmail.com
EMAIL_PASS=your_app_specific_password_here
EMAIL_TO=finaltouch.esp@gmail.com

# Contact Information
WHATSAPP_NUMBER=919876543210
PHONE_NUMBER=+919876543210
UPI_ID=finaltouch@upi
SPONSOR_EMAIL=finaltouch.esp@gmail.com
```

### 🔐 Getting MongoDB URI

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your database password

### 📧 Getting Gmail App Password

1. Enable 2-Factor Authentication on your Gmail account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Generate a new app password for "Mail"
4. Use this password in `EMAIL_PASS`

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

### Production Build
```bash
npm run build
npm start
```

## 📁 Project Structure

```
FTESPORTS/
├── app/
│   ├── api/
│   │   └── contact/
│   │       └── route.js          # Contact form API endpoint
│   ├── globals.css               # Global styles & animations
│   ├── layout.js                 # Root layout with metadata
│   └── page.js                   # Main landing page
├── components/
│   ├── Hero.jsx                  # Hero section with glitch effect
│   ├── Founders.jsx              # 3D tilt founder cards
│   ├── ContactForm.jsx           # Contact form with validation
│   ├── Fuel.jsx                  # Donation & sponsorship section
│   ├── Navbar.jsx                # Responsive navigation
│   └── Footer.jsx                # Footer component
├── lib/
│   └── db.js                     # MongoDB connection utility
├── models/
│   └── Contact.js                # Mongoose Contact schema
├── .env.local                    # Environment variables
├── tailwind.config.js            # Tailwind custom configuration
└── package.json
```

## 🎨 Design System

### Colors
- **Primary**: Neon Green (#00c701)
- **Background**: Deep Black (#050505)
- **Secondary**: Charcoal (#0a0a0a)

### Fonts
- **Headings**: Orbitron (Google Fonts)
- **Body**: Montserrat (Google Fonts)

### Animations
- Glitch effect on hover
- Typewriter animation
- 3D tilt cards
- Smooth scroll
- Entrance animations

## 📱 Sections

1. **Hero**: Glitch effect headline + typewriter slogan
2. **The Architects**: Founder cards (FAHAD & ASH999)
3. **Fuel Station**: UPI donations + sponsorship contact
4. **Comms Array**: Contact form + WhatsApp/Phone buttons

## 🔧 API Endpoints

### POST `/api/contact`

Submit contact form data.

**Request Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "message": "I want to join the roster"
}
```

**Response**:
```json
{
  "success": true,
  "message": "Contact submitted successfully",
  "data": { ... }
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms

Compatible with any platform supporting Next.js 14:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📞 Contact

- **Email**: finaltouch.esp@gmail.com
- **Organization**: Final Touch Esports

## 📄 License

© 2025 Final Touch Esports. All rights reserved.

---

**#WeFinishWhatWeStart** ⚡

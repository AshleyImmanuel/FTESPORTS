# 🚀 PostgreSQL Setup Guide for Final Touch Esports

## Quick Setup (5 Minutes)

### Step 1: Update Your `.env.local` File

Open your `.env.local` file and add this configuration:

```env
# PostgreSQL Database URL
# Replace 'password' with your actual PostgreSQL password
DATABASE_URL="postgresql://postgres:ashley@localhost:5432/ft_esports"

# Email Configuration (Optional - for contact form notifications)
EMAIL_USER=finaltouch.esp@gmail.com
EMAIL_PASS=your_gmail_app_password_here
EMAIL_TO=finaltouch.esp@gmail.com

# Contact Numbers
NEXT_PUBLIC_WHATSAPP_NUMBER=918943408464
NEXT_PUBLIC_PHONE_NUMBER=+918943408464
NEXT_PUBLIC_UPI_ID=finaltouch@upi
NEXT_PUBLIC_SPONSOR_EMAIL=finaltouch.esp@gmail.com
```

### Step 2: Create the Database

Open your PostgreSQL command line (psql) or pgAdmin and run:

```sql
CREATE DATABASE ftesports;
```

### Step 3: Run Prisma Migration

In your terminal (in the FTESPORTS folder), run:

```bash
npx prisma migrate dev --name init
```

This will create the `contacts` table in your database.

### Step 4: Restart the Dev Server

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

## ✅ Testing the Contact Form

1. Go to http://localhost:3000
2. Scroll to the "COMMS ARRAY" section
3. Fill out the form and submit
4. Check your PostgreSQL database to see the saved contact!

## 📊 Viewing Saved Contacts

### Option 1: Using Prisma Studio (Recommended)

```bash
npx prisma studio
```

This opens a visual database browser at http://localhost:5555

### Option 2: Using SQL

```sql
SELECT * FROM contacts ORDER BY "createdAt" DESC;
```

## 🔧 Common Issues

### Issue: "Can't reach database server"

**Solution**: Make sure PostgreSQL is running and your password in `DATABASE_URL` is correct.

### Issue: "Table doesn't exist"

**Solution**: Run the migration command:
```bash
npx prisma migrate dev --name init
```

### Issue: "Port 5432 is not available"

**Solution**: Check if PostgreSQL is running on a different port and update your `DATABASE_URL` accordingly.

## 📝 Database Schema

The `contacts` table has these fields:
- `id` (Auto-increment)
- `name` (String)
- `email` (String)
- `mobile` (String)
- `message` (Text)
- `createdAt` (Timestamp)

---

**Need help?** The contact form will work once you complete these steps!

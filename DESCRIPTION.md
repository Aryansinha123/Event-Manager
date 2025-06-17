# EventEase 🎉  
A modern platform for seamless event hosting and registration, catering to both event managers and participants.

---

## 🚀 Objective  
To create a web application that provides event managers with a comprehensive control panel to manage events, view registrant details, and update event information, while offering participants an intuitive interface to browse, register, and interact with events.

---

## 👥 Target Audience
1. **Event Managers**: Host events, manage registrations, and update event details.
2. **Participants/Customers**: Browse, register, and attend events effortlessly.

---

## ✨ Key Features

### **For Event Managers:**
- **Dashboard**: 
  - View and manage hosted events.
  - Monitor participant details (name, contact, registration status).
  - Display real-time analytics (registrations, revenue, etc.).
- **Event Management**: 
  - Create, edit, and delete events with details such as title, description, date, venue, and ticket type.
  - Upload event banners/images.
- **Registration Insights**: 
  - View registered participants.
  - Filter/search participant details.
  - Export participant data (CSV or Excel).
- **Notification System**: 
  - Send updates to registered participants (e.g., time changes, cancellations).

### **For Participants/Customers:**
- **User Interface**: 
  - Explore upcoming events categorized by type, date, or popularity.
  - View detailed event pages with descriptions and ticket availability.
- **Registration Process**: 
  - Register for events with a simple form.
  - Make secure payments via integrated gateways.
- **User Dashboard**: 
  - View registered events and download tickets/receipts.
  - Cancel registrations if applicable.
- **Notifications**: 
  - Receive email and in-app updates about event changes.

---

## 🔥 Additional Features
- **Authentication & Role Management**:  
  - Event Managers and Participants have separate interfaces.
  - Social login for quick access.
- **Responsive Design**:  
  - Fully optimized for mobile and desktop devices.
- **Real-Time Updates**:  
  - Event details and registration status update dynamically.
- **Feedback System**:  
  - Participants can leave reviews for events.
- **Dark Mode**:  
  - Toggle between light and dark themes.

---

## 🛠️ Technology Stack

### **Frontend**
- [Next.js](https://nextjs.org/): For server-side rendering and fast routing.
- [Tailwind CSS](https://tailwindcss.com/): For modern and responsive styling.
- React Context API/Zustand: For state management.

### **Backend**
- [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/): For handling API requests.
- [Prisma](https://www.prisma.io/): For database ORM.

### **Database**
- PostgreSQL or MongoDB: For storing user, event, and registration data.

### **Additional Tools**
- [NextAuth.js](https://next-auth.js.org/): For authentication.
- Stripe/PayPal: For payment integration.
- [Socket.io](https://socket.io/): For real-time notifications.

### **Deployment**
- [Vercel](https://vercel.com/): For frontend and backend deployment.
- Cloud-hosted database solutions like Supabase or AWS RDS.

---

## 📂 Folder Structure

```plaintext
my-nextjs-app/
├── public/               # Static assets
├── pages/                # Next.js routing
│   ├── api/              # API routes
│   ├── manager/          # Event Manager interface
│   ├── participant/      # Customer interface
│   └── index.js          # Homepage
├── components/           # Reusable components
├── lib/                  # Utility functions (e.g., API calls)
├── styles/               # Tailwind and global styles
├── prisma/               # Prisma schema
├── .env                  # Environment variables
└── package.json          # Dependencies

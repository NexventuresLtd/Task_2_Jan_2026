# GovConnect – Citizen Service Portal

GovConnect is a modern citizen service portal built with **React + TypeScript + Vite**.  
The system allows citizens to apply for government services, track application status, and receive real-time notifications that simulate real-world government workflows.

---

## Project Overview
This project was developed as part of an academic assignment to demonstrate:
- Frontend system design
- State management using React Context
- User experience for public service platforms
- Application lifecycle handling (submission → review → approval/rejection)



---

## Key Features
- Online application forms for:
  - National ID
  - Health Insurance
  - Business Registration
- Automated notification flow after application submission:
  - Application submitted
  - Application under review
  - Final decision (approved or rejected)
- User dashboard displaying:
  - All submitted applications
  - Current application status
  - Application details
- Centralized state management using React Context API
- Modern, responsive UI using Tailwind CSS
- Type-safe implementation with TypeScript

---

## Design Decisions
- **React + Vite** were chosen for fast development and performance.
- **Context API** was used to manage applications globally without complex state libraries.
- **Notifications** were automated to simulate a real government review process.
- **Blue and white color scheme** was selected for a clean, professional government-style interface.
- The system simulates backend behavior on the frontend to focus on UI logic and flow.

---

## Application Status Flow
1. User submits an application.
2. Notification appears indicating submission.
3. After a short delay, a review notification is shown.
4. Final notification displays approval or rejection.
5. The dashboard reflects the final application status.

---

## How to Run the Project Locally

### Prerequisites
- Node.js (v18 or later)
- npm

### Steps
```bash
# Clone the repository
git clone <your-github-repo-link>

# Navigate to project folder
cd citizen-service-portal

# Install dependencies
npm install

# Run development server
npm run dev
```

The application will be available at:
```
http://localhost:5173
```

---

## Deployment
The application is deployed and accessible at:

🔗 https://your-deployment-link-here

---

## Challenges Faced
- Managing notification timing and sequencing
- Keeping dashboard state consistent with application status
- TypeScript type alignment between application status and UI notifications
- Avoiding unnecessary page refreshes during navigation
-applying lazy-loaded in pages
---

## Conclusion
GovConnect demonstrates a practical approach to building a modern citizen service platform with clear user flow, real-time feedback, and maintainable frontend architecture.

---
## 👩‍💻 Author

**M Belyse**  

QuickAI

**An AI-powered full-stack SaaS platform for intelligent content and image tools**

QuickAI is a modern AI SaaS application that integrates multiple AI-driven tools into one platform. It enables users to generate articles, blog titles, images, remove image backgrounds or objects, and analyse resumes — all from a single interface. The app features secure authentication, subscription billing, and scalable backend services.

Features

* **AI Article Generator** – Create long-form, SEO-friendly content effortlessly.
* **Blog Title Generator** – Generate catchy and relevant blog titles.
* **Image Generator** – Convert text prompts into stunning AI-generated images.
* **Background/Object Remover** – Upload images and remove unwanted elements.
* **Resume Analyzer** – Analyse and improve resumes using AI feedback.
* **User Authentication** – Secure sign-up/sign-in using **Clerk**.
* **Subscription Billing** – Unlock premium AI tools through paid plans.
* **Serverless Database** – Managed PostgreSQL with **Neon**.
* **Scalable & Responsive** – Built with modern UI/UX and optimized APIs.


Tech Stack

| Layer               | Technology                                |
| ------------------- | ----------------------------------------- |
| **Frontend**        | React.js, Vite, Tailwind CSS              |
| **Backend**         | Node.js, Express.js                       |
| **Database**        | PostgreSQL (via Neon)                     |
| **Authentication**  | Clerk                                     |
| **AI Integrations** | OpenAI API, Replicate, or similar AI APIs |
| **File Storage**    | Cloudinary (optional)                     |
| **Deployment**      | Vercel / Render                           |


Project File Structure

QuickAI/
│
├── client/                     # Frontend (React + Vite)
│   ├── public/                 # Static assets
│   ├── src/
│   │   ├── assets/             # Images, icons
│   │   ├── components/         # Reusable UI components
│   │   ├── context/            # Context providers (e.g., AuthContext)
│   │   ├── pages/              # Main application pages
│   │   ├── routes/             # App routing configuration
│   │   ├── services/           # API calls to backend
│   │   ├── App.jsx             # Root React component
│   │   └── main.jsx            # Entry point
│   ├── .env.example            # Example environment variables
│   └── package.json
│
├── server/                     # Backend (Node + Express)
│   ├── config/                 # Database and environment configuration
│   ├── controllers/            # Route controller logic
│   ├── middleware/             # Authentication and error handling
│   ├── models/                 # Database models (if ORM used)
│   ├── routes/                 # API route definitions
│   ├── utils/                  # Helper functions
│   ├── server.js               # Main backend entry
│   ├── .env.example            # Example environment variables
│   └── package.json
│
├── .gitignore
├── README.md
└── LICENSE

Installation & Setup

Clone the Repository

bash
git clone https://github.com/SudilThathsara/QuickAI.git
cd QuickAI

Setup Backend

bash
cd server
npm install
cp .env.example .env     # Add your environment variables
npm run dev              # Run the backend server

Setup Frontend

bash
cd ../client
npm install
cp .env.example .env     # Add your environment variables
npm run dev              # Start frontend on localhost

Environment Variables

Backend (server/.env)

DATABASE_URL=your_neon_postgres_url
CLERK_SECRET_KEY=your_clerk_secret
OPENAI_API_KEY=your_openai_key
STRIPE_SECRET_KEY=your_stripe_key

Frontend (client/.env)

VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
VITE_API_URL=http://localhost:5000

Usage

1. Register or sign in using Clerk authentication.
2. Choose an AI tool (Article Generator, Image Generator, etc.).
3. Enter your input/prompt.
4. Get instant AI-powered output.
5. Upgrade to a premium plan for unlimited access.

Contributing

Contributions are always welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Open a Pull Request

License

Licensed under the **MIT License**.
See the [LICENSE](LICENSE) file for more details.

Acknowledgements

* [Clerk](https://clerk.com/) – Authentication
* [Neon](https://neon.tech/) – Serverless PostgreSQL
* [OpenAI](https://openai.com/) – AI text/image models
* [Tailwind CSS](https://tailwindcss.com/) – UI styling
* [Vercel](https://vercel.com/) – Deployment


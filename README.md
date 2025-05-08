# 🚀 Task Management Application

A modern, full-stack task management application built with Next.js 14, featuring real-time updates, beautiful UI, and robust authentication.

![Task Management App](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2C3E50?style=for-the-badge&logo=prisma)

## ✨ Features

- 🔐 **Secure Authentication**
  - NextAuth.js integration
  - Email/Password authentication
  - Protected routes and API endpoints

- 📱 **Modern UI/UX**
  - Responsive design
  - Dark/Light mode support
  - Beautiful gradients and animations
  - Intuitive task management interface

- 📊 **Task Management**
  - Create, read, update, and delete tasks
  - Assign tasks to team members
  - Set due dates and priorities
  - Track task progress and status
  - Real-time updates

- 📈 **Dashboard Analytics**
  - Task statistics and overview
  - Progress tracking
  - Performance metrics
  - Visual data representation

## 🛠️ Tech Stack

- **Frontend**
  - Next.js 14 (App Router)
  - TypeScript
  - Tailwind CSS
  - Shadcn/ui Components
  - React Query

- **Backend**
  - Next.js API Routes
  - Prisma ORM
  - PostgreSQL Database
  - NextAuth.js

- **Development Tools**
  - ESLint
  - Prettier
  - TypeScript
  - Husky (Git Hooks)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/task-management.git
cd task-management
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/task_management"
NEXTAUTH_SECRET="your-secret-key"
NEXTAUTH_URL="http://localhost:3000"
```

5. Set up the database
```bash
npx prisma generate
npx prisma db push
```

6. Run the development server
```bash
npm run dev
# or
yarn dev
```

7. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── register/
│   ├── (dashboard)/
│   │   └── dashboard/
│   └── api/
├── components/
│   ├── ui/
│   └── shared/
├── lib/
│   ├── auth.ts
│   └── db.ts
├── prisma/
│   └── schema.prisma
└── public/
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work - [YourGitHub](https://github.com/yourusername)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Prisma](https://www.prisma.io/)
- [Shadcn/ui](https://ui.shadcn.com/)

---

⭐️ If you like this project, please give it a star on GitHub!
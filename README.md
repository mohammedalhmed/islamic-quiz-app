# Islamic Quiz App — تطبيق المسابقة الإسلامية

Interactive Arabic quiz application built with **React + TypeScript**. It presents Islamic general-knowledge questions through a simple responsive interface, randomizes answer choices, tracks results, and provides a complete quiz flow from welcome screen to final score.

## Features

- Arabic-first interface.
- Multiple-choice questions.
- Randomized answer ordering.
- Correct / incorrect answer tracking.
- Skip-question support.
- Final results screen.
- Restart and return-home flows.
- Responsive UI.
- Client-side routing and error handling.

## Tech Stack

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=111)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

The UI also uses Radix-based components, Wouter routing, React Hook Form, Zod, and Framer Motion dependencies.

## Application Flow

```text
Welcome
   ↓
Start Quiz
   ↓
Question → Answer / Skip
   ↓
Next Question
   ↓
Results
   ↓
Restart / Home
```

Question data is maintained in:

```text
client/src/lib/quizData.ts
```

The application shuffles answer choices while preserving the correct-answer mapping.

## Development

Install dependencies:

```bash
pnpm install
```

Start development mode:

```bash
pnpm dev
```

Type-check:

```bash
pnpm check
```

Build for production:

```bash
pnpm build
```

Run the production server:

```bash
pnpm start
```

## Architecture

The frontend is a Vite/React application and the repository includes a lightweight Express server for serving the production build and supporting client-side routing.

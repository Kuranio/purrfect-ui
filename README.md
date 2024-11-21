<img src="https://raw.githubusercontent.com/Kuranio/purrfect-ui/refs/heads/master/public/images/logo-readme-preview.webp" alt="Purrfect logo preview" style="border-radius: 8px">


<div align="center">
  <h3 align="center">Purrfect UI</h3>
  
  <a href="https://purrfect-ui.netlify.app/"> Site </a>

  <p align="center">
      Design <span style="font-weight: bold; color: #fd80fb;">purrfection</span> for your web apps
  </p>

  <div align="center">

  <a href="https://purrfect-ui.netlify.app/">

  ![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)

  </a>

  </div>

  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
  
</div>


## Documentation

Welcome to **Purrfect UI**, a collection of sleek and customizable UI components designed to bring your web projects to life. With a focus on simplicity and usability, **Purrfect UI** offers an easy-to-integrate solution for building beautiful user interfaces.

## 📦 Getting Started

> Purrfect UI require **React >=16.8.0**.

To get started with Purrfect UI, simply install it via npm:

```bash
npm install @purrfect-ui/components
```

### Configure your template paths
tailwind.config.ts
```tsx
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@purrfect-ui/components/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### Import the Components

```tsx
import { Avatar } from '@purrfect-ui/components';
```

### Usage

```jsx
  <Avatar name="Raúl García" description="Frontend Developer" src="https://unavatar.io/github/kuranio" />
```

### Learn more at <a href="https://purrfect-ui.netlify.app/" target="_blank"> Purrfect UI </a>

## 🌱 Contributing

We love contributions! If you have a bug fix, feature request, or enhancement to suggest, feel free to open an issue or pull request. We encourage you to create new components and submit them to make Purrfect UI even more purrfect.

## 📝 License
Purrfect UI is released under the MIT License. Feel free to use it, modify it, and contribute to it!

## 📞 Contact
Created with ❤️ by Raúl García Díaz.
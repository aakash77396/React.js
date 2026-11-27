# Student Result Portal

A responsive **Student Result Portal** built using React.js,Bootstrap, Bootstrap-iocns and Tailwind CSS. The application provides a student-friendly interface to view academic information and navigate to the result announcement page.

This project focuses on component-based development, client-side routing, reusable layouts, and responsive UI design.

## Features

- Responsive navigation bar
- Student academic information display
- Result announcement functionality
- Student result report page
- React Router navigation between pages
- Shared layouts with reusable components
- Authentication context using React Context API
- Custom 404 Not Found page
- Responsive design for mobile, tablet, and desktop
- Tailwind CSS styling
- Bootstrap Icons integration
- Hover effects and smooth transitions

## Tech Stack

- **Frontend:** React.js
- **Language:** JavaScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **State Management:** React Context API
- **Icons:** Bootstrap Icons
- **Build Tool:** Vite
- **Version Control:** Git & GitHub

## Project Structure

```text
student-portal/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── context/
│   │   └── Authcontext.jsx
│   ├── layouts/
│   │   └── Layouts.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── AnnounceResult.jsx
│   │   ├── Auth.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Pages

### 1. Home Page

- Displays student academic information.
- Shows course, examination, and institute details.
- Provides an Announce Result button.
- Includes student access and result-related information.

### 2. Result Announcement Page

- Displays the student result report.
- Shows academic year and examination details.
- Displays result status and related information.

### 3. Authentication Page

- Provides the authentication interface.
- Uses React Context API for shared authentication state.

### 4. Not Found Page

- Displays a custom 404 page for invalid routes.

## Routing

The application uses React Router DOM for client-side navigation.

| Route | Page |
|---|---|
| `/` | Home Page |
| `/result` | Result Announcement Page |
| `/auth` | Authentication Page |
| `*` | Not Found Page |

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/aakash77396/student-portal.git
```

### 2. Navigate to the Project

```bash
cd student-portal
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Learning Objectives

Through this project, I practiced:

- Building reusable React components
- Implementing client-side routing
- Creating shared layouts
- Managing shared state using React Context API
- Organizing a React project using a structured folder architecture
- Designing responsive interfaces with Tailwind CSS
- Using Git and GitHub for version control

## Future Improvements

- Secure student authentication
- Search results using roll number
- Dynamic result data from an API
- Backend integration using Java Spring Boot
- Database integration using MySQL or Oracle
- Download result reports as PDF
- Admin dashboard for result management

## Author

**Aakash Kumar**

GitHub: [@aakash77396](https://github.com/aakash77396)

## License

This project is created for educational and learning purposes.
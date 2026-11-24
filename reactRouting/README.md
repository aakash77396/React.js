
# React Routing & Registration Form

A React.js web application demonstrating client-side routing, navigation between multiple pages, form validation, and passing registration details from one page to another using URL query parameters.

## Features

- Multi-page navigation using React Router DOM
- Home, About, Contact, and Login pages
- Registration form with input validation
- Name and email validation using HTML patterns
- Form submission using GET method
- Passing registration data through URL query parameters
- Automatically pre-filling login form fields
- Login form submission handling
- Responsive form layout using Tailwind CSS and Bootstrap

## Tech Stack

- React.js
- JavaScript
- React Router DOM
- Tailwind CSS
- Bootstrap
- HTML5

## Project Structure

```text
react-routing-form/
├── src/
│   ├── components/
│   │   ├── Home.jsx
│   │   └── Hero.jsx
│   ├── pages/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Login.jsx
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── public/
├── index.html
├── package.json
└── README.md
```

## Application Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | About page |
| `/contact` | Contact page |
| `/login` | Login page |

## Form Validation

The registration form includes:

- Required name and email fields
- Name validation allowing only letters and spaces
- Email format validation
- Gmail address validation pattern

## Data Transfer Using URL Parameters

The registration form submits user details using the GET method.

Example URL:

```text
/login?name=Aakash+Kumar&email=aakash@gmail.com
```

The Login component retrieves the submitted values using:

```javascript
new URLSearchParams(location.search).get('name');
```

```javascript
new URLSearchParams(location.search).get('email');
```

These values are used to pre-fill the login form.

## Login Functionality

- Prevents the default form submission
- Handles the login form using React's `onSubmit`
- Displays a confirmation message after submission

## Installation and Setup

### Step 1: Clone the Repository

```bash
git clone https://github.com/aakash77396/React.js.git
```

### Step 2: Navigate to the Project

```bash
cd react-routing-form
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

Open the local URL provided by Vite.

## Learning Outcomes

- Understanding React Router DOM
- Creating multiple pages in React
- Working with React forms
- Using HTML form validation
- Handling form submission events
- Passing data through URL query parameters
- Accessing URL parameters using JavaScript

## Future Improvements

- Implement authentication using React state
- Add password field and validation
- Use React controlled components
- Replace GET submission with React Router navigation
- Integrate backend authentication using Java Spring Boot
- Store user details in a database

## Author

Aakash Kumar

## License

This project is created for educational and learning purposes.

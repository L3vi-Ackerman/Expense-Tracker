# Expense Tracker Backend

This is the backend API for the Expense Tracker application, built using **Node.js**, **Express**, and **MongoDB**. It provides secure and scalable endpoints for managing users, expenses, categories, budgets, and analytics.

---

## Features
- **User Authentication**: Secure login and registration with JWT-based authentication.
- **Expense Management**: Add, update, delete, and view expenses with flexible filtering options.
- **Category Management**: Manage expense categories to organize spending.
- **Budget Tracking**: Set budgets, track remaining amounts, and receive alerts for budget overages.
- **Analytics/Reports**: Generate insights such as spending by category or monthly trends.
- **Notifications**: Email alerts for budget overages.

---

## API Endpoints

### **User Routes**
| Method | Endpoint          | Description                     |
|--------|-------------------|---------------------------------|
| POST   | `/api/users/login` | Login a user                   |
| POST   | `/api/users/register` | Register a new user           |
| GET    | `/api/users/profile` | Get user profile              |

---

### **Expense Routes**
| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| POST   | `/api/expenses`       | Add a new expense               |
| GET    | `/api/expenses`       | Get all expenses (filterable)   |
| PUT    | `/api/expenses/:id`   | Update an expense               |
| DELETE | `/api/expenses/:id`   | Delete an expense               |

---

### **Category Routes**
| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| POST   | `/api/categories`    | Add a new category             |
| GET    | `/api/categories`    | Get all categories             |
| PUT    | `/api/categories/:id`| Update a category              |
| DELETE | `/api/categories/:id`| Delete a category              |

---

### **Budget Routes**
| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| POST   | `/api/budgets`       | Set a new budget               |
| GET    | `/api/budgets`       | Get all budgets                |
| GET    | `/api/budgets/summary` | Get remaining budget and spending summary |

---

### **Report Routes**
| Method | Endpoint             | Description                    |
|--------|----------------------|--------------------------------|
| GET    | `/api/reports/category` | Get total spending by category |
| GET    | `/api/reports/monthly`  | Get monthly spending trends    |

---

## Technologies Used
- **Node.js**: Backend runtime.
- **Express.js**: Web framework.
- **MongoDB**: Database for data storage.
- **Mongoose**: ODM for MongoDB.
- **Nodemailer**: Email notifications.
- **JWT**: Secure authentication.

---

For further details or questions, feel free to contact the maintainer. 

# 🧮 Project Algebra – Personalized Calculator System


## 📌 Overview
Project Algebra is a stateful web-based calculator application that enables users to securely perform calculations while maintaining a personalized history. The system is designed to demonstrate core backend engineering concepts such as authentication, session management, and persistent data handling without relying on traditional database systems.


## 🚀 Key Features
- **Session-Based Authentication:** Secure user login and session handling using Express.js  
- **User-Specific Data Isolation:** Each user maintains an independent calculation history  
- **File-Based Persistence:** Data is stored and managed using a JSON file system  
- **Asynchronous Data Handling:** Non-blocking file operations for efficient data updates  
- **Route Protection:** Middleware-based access control for secured endpoints  
- **Dynamic History Filtering:**  
  - Today and Yesterday  
  - Weekly and Monthly views  
  - Custom date-based filtering  
- **State Synchronization:** Consistent data flow between session storage and persistent storage  



## 🧠 Design Rationale
This project intentionally avoids the use of databases such as MongoDB to focus on understanding low-level data management. By implementing file-based storage, the system explores:
- Asynchronous file handling mechanisms  
- Data writing and retrieval processes  
- Manual management of persistent application state  

This approach strengthens foundational backend concepts often abstracted away by database systems.






## 🛠️ Technology Stack
- **Backend:** Node.js, Express.js  
- **Frontend:** HTML, CSS, JavaScript  
- **Storage:** JSON (File System)  
- **Authentication:** express-session  

# BookBytes - Advanced Book Search Engine

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)




**Live Demo:** [**BookBytes Search Tool**](https://bookbytes-eta.vercel.app/)

BookBytes is a high-performance book search application designed for users who need precise and powerful search capabilities. Moving beyond simple keyword matching, this tool implements a custom search parser that supports **Boolean logic**, **exact phrases**, and **wildcard characters**, mirroring the functionality of professional academic databases. It intelligently fetches data from the **Open Library API** and uses the **Google Books API** as a fallback for enhanced data accuracy and cover art availability.

---

### ⚡ Features

-   **Advanced Search Syntax:**
    -   **Boolean Operators:** Combine terms with `AND`, `OR`, and `NOT` for complex queries.
    -   **Exact Phrases:** Search for specific phrases using double quotes (e.g., `"The Lord of the Rings"`).
    -   **Wildcards:** Use the `*` operator for partial word matching (e.g., `librar*`).
-   **Multi-Faceted Search:** Filter searches by **Title**, **Author**, or **Subject**.
-   **Dual API Integration:** Primarily uses the Open Library API and intelligently falls back to the Google Books API for missing cover images and additional details, ensuring a robust user experience.
-   **Interactive UI:** A clean, modern, and fully responsive interface built with Tailwind CSS.
-   **Detailed Information Modal:** Click on any book to view comprehensive details, including publisher, publication year, and ISBNs.
-   **Helpful Search Tips:** An integrated, expandable guide helps users master the advanced search syntax.
-   **Robust UX:** Includes clear loading states, error handling, and placeholder images for a seamless experience.

---

### 🛠️ Tech Stack

-   **Frontend:** React 19, Vite
-   **Styling:** Tailwind CSS
-   **APIs:** Open Library Search API, Google Books API
-   **Linting:** ESLint

---

### 📦 Installation & Setup Guide

Follow these steps to get the project running on your local machine.

**Prerequisites:**
* Node.js (v18 or later)
* npm or yarn

**1. Clone the Repository**
Open your terminal and run the following command:
```bash
git clone https://github.com/al0nec0der/BookBytes.git
````

**2. Navigate to the Project Directory**

```bash
cd BookBytes
```

**3. Install Dependencies**

```bash
npm install
```

*(or `yarn install` if you use Yarn)*

**4. Run the Development Server**

```bash
npm run dev
```

The application should now be running on `http://localhost:5173` (or the next available port).

-----

### 🔧 Configuration

This project uses public APIs that do not require authentication. No `.env` file or API keys are needed to run the application locally.

-----

### 🚀 Deployment

This application is built with Vite and can be easily deployed to any static hosting service.

**Deploying with Vercel:**

1.  Push your code to a GitHub repository.
2.  Sign up for a free account on [Vercel](https://vercel.com/).
3.  Click "Add New..." -\> "Project" and import your GitHub repository.
4.  Vercel will automatically detect that it's a Vite project. Use the default settings and click "Deploy".

-----

### 🌱 Future Enhancements

This project has a strong foundation with many possibilities for future development:

  - **AI-Powered Recommendations:** Implement a feature to suggest related books based on search history or a selected book.
  - **Free Resource Integration:** Add direct links to free versions of books on platforms like Project Gutenberg.
  - **User Accounts & Bookshelves:** Allow users to create accounts to save books to personal "Want to Read" or "Favorites" lists.
  - **Advanced Filtering & Sorting:** Add options to sort results by publication date, rating, or relevance, and filter by genre or language.
  - **ISBN Scanner:** Use the device camera to scan a book's barcode and instantly fetch its details.

-----

### 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

-----

### 📫 Contact / Author

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/al0nec0der)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/codewithteja)


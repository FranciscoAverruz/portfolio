# Francisco Averruz Castellón
## Portfolio(Frontend)

  <img src="/src/assets/images/readmePics/bannerReadme.png" style="max-width: 100%; height: auto;" alt="Banner readme" width="900"><br>


This repository contains the frontend for my personal portfolio. It is built using **React** and styled with **TailwindCSS**. It includes multiple sections like **About**, **Projects**, and **Contact**, where users can interact with the portfolio and submit inquiries.

## Requirements
Before running the frontend, make sure the backend server is running as it handles the contact form submissions.

For detailed instructions on how to set up and run the backend, please refer to the [Backend README](https://github.com/FranciscoAverruz/portfolioEmailServer).

## Project Structure 
Here is a breakdown of the folder structure of the frontend project:
```bash
├── dist               # The output folder containing the production build  
├── src                # Source code of the frontend
│   ├── assets         # Static files such as images, fonts, etc.
│   ├── components     # Reusable components like buttons, forms, etc.
│   ├── context        # Context API for global state management
│   ├── hooks          # Custom React hooks
│   ├── i18n           # Localization files (translations for different languages)
│   ├── pages          # Different pages of the portfolio
│   ├── utils          # Helper utilities and functions
│   ├── App.jsx        # Main App component
│   ├── main.jsx       # Entry point for React application
│   └── index.css      # Global styles
├── public             # Public assets like the CV PDF and redirects
│   └── _redirects     # Redirects configuration (for Netlify)
├── .env               # Environment variables for API URLs (e.g., VITE_API_URL)
├── package.json       # Project dependencies and scripts
├── vite.config.js     # Vite configuration for bundling and building
├── tailwind.config.js # Tailwind CSS configuration
├── netlify.toml       # Netlify configuration (for deployment)
├── README.md          # Project documentation
├── .eslintrc.js       # ESLint configuration file (if applicable)
└── .gitignore         # Git ignore file
```
## Environment Variables (.env Configuration)
The frontend requires the following environment variables for API connections, assets, and external links. Make sure to add these to a .env file in the project’s root directory:

```bash
# API URLs
   VITE_COUNTRIES_URL= https://restcountries.com/v3.1/all # API for country and phone prefix information
   VITE_API_URL= http://localhost:5000/api/send-email     # Backend API URL for handling email submissions (update for production)

# Asset URLs
   VITE_AVATAR_URL= <YOUR_AVATAR_IMAGE_URL>               # URL for avatar/profile image
   VITE_CV_URL= <YOUR_CV_PDF_URL>                         # URL for downloadable CV

# External Links
   VITE_LINKEDIN_URL= <YOUR_LINKEDIN_PROFILE_URL>         # URL for LinkedIn profile
   VITE_GITHUB_URL= <YOUR_GITHUB_PROFILE_URL>             # URL for GitHub profile
```
***Notes***:
- **VITE_COUNTRIES_URL** : Link to the countries API for dynamically fetching country information and phone prefixes.
- **VITE_API_URL** : Link to the backend server for sending emails. Update this URL for production.
- **VITE_AVATAR_URL** : URL for the avatar image that will display on the profile section.
- **VITE_CV_URL** : URL to the CV or resume document, enabling users to download it directly from your portfolio.
- **VITE_LINKEDIN_URL** and **VITE_GITHUB_URL** : Links to social profiles.
- For the avatar and CV URLs, Dropbox can be a convenient hosting option. If using Dropbox, ensure that the share link ends with **`?raw=1`** instead of **`?dl=0`** to make the files load directly in the portfolio.

## Getting Started
To get started with the frontend, follow these steps:

1. ### Clone the repository
   ```bash
   git clone https://github.com/FranciscoAverruz/portfolio.git

   cd portfolio
   ```
   
2. ### Frontend Setup:

   - ***Ensure Backend is Running:***
      - Before starting the **`Frontend`**, make sure the **`Backend`** is running. If you're working **locally**, you should start the **`Backend server`** first.
      Follow the instructions in the backend [README](https://github.com/FranciscoAverruz/portfolioEmailServer)

      - If the **`Backend`** is running locally, execute the following command in the backend directory to start the server:

         ``` bash
         npm start
         ```

         The server will be available at [http://localhost:5000](http://localhost:5000) or the URL you have configured.


   - ***Install Frontend Dependencies:***
      - Once the **`Backend`** is up and running, go back to the **`Frontend directory`** and run:

         ```bash
         npm install
         ```

   - ***Start the frontend development server:***
      - Now, you can start the **`Frontend`** development server:

         ```bash
         npm run dev
         ```
         This will start the development server at [http://localhost:5173](http://localhost:5173) or on the port configured in your `.env` file.

## Technologies Used
- **React**: `JavaScript` library for building user interfaces.
- **TailwindCSS**: Utility-first `CSS` framework
- **Vite**: Build tool for fast development and bundling.
- **React Router**: A library for handling routing and navigation.
- **i18next**: Internationalization for multi-language support.
- **Axios**: A promise-based `HTTP` client for making requests to the backend.
- **dotenv**: A zero-dependency module to load environment variables from a `.env` file.

## Usage
The portfolio is designed to be fully responsive, offering an optimal experience on both desktop and mobile devices. The layout and button accessibility adjust based on screen size for a seamless user experience.

1. **Navigation**
On desktop screens, the navigation menu allows quick access to sections like About Me, Projects, and Contact at the top. On mobile devices, the navigation menu is fixed at the bottom of the screen for easy access.

   **Desktop Navigation:**
      <img src="/src/assets/images/readmePics/top_NavBar.png" alt="Desktop Navigation" width="900"/><br>

   **Mobile Navigation** (Fixed at the bottom):
      <img src="/src/assets/images/readmePics/bottom_NavBar.png" alt="Mobile Navigation" width="300"/><br>


2. **Language Selection**
The language selector, is found in the top-right corner. Users can select between English, Spanish, and Portuguese.

   **Desktop Language Selector:**
      <img src="/src/assets/images/readmePics/desktopLanNav.png" alt="Desktop Language selector" width="900"/><br>

   **Mobile Language Selector:**
      <img src="/src/assets/images/readmePics/languageMobile.png" alt="Mobile Language selector" width="300"/><br>


3. **Viewing Projects** (Under Construction)
The Projects section is currently under construction. Once completed, this section will feature interactive project cards where users can click on each card to view more details about each project.

   **Projects Section on Desktop**:
         <img src="/src/assets/images/readmePics/projectsDesktop.png" alt="Desktop project section" width="800"/>

   **Projects Section on Mobile**:
         <img src="/src/assets/images/readmePics/projectsMobile.png" alt="Mobile project section" width="189"/>

4. **Download CV**
The Download CV button is located within the About Me section. Its size and position adjust based on screen type to remain accessible.

   **CV Download Button on Desktop**:
         <img src="/src/assets/images/readmePics/cvDownloadDesktop.png" alt="Desktop CV download" width="300"/><br>

   **CV Download Button on Mobile**:
         <img src="/src/assets/images/readmePics/cvDownloadMobile.png" alt="Mobile CV download" width="300"/><br>


5. **Contact Form**
The Contact form, accessible from the Contact section, includes input fields and a submit button that resize for an optimized mobile or desktop experience.

   **Contact Form on Desktop**:
         <img src="/src/assets/images/readmePics/contactDesktop.png" alt="Desktop contact form" width="800"/>

   **Contact Form on Mobile**:
         <img src="/src/assets/images/readmePics/contactMobile.png" alt="Mobile contact form" width="189"/>


6. **Light/Dark Mode**
This portfolio supports Light and Dark modes, which allows users to switch between light and dark themes for a more personalized experience. The theme can be toggled by clicking on the Theme Switch button, usually located in the top-right corner of the header or in the mobile menu.

   **Light Mode on Desktop**:
         <img src="/src/assets/images/readmePics/lightModeDesktop.png" alt="Desktop light mode" width="800"/>

   **Dark Mode on Desktop**:
         <img src="/src/assets/images/readmePics/darkModeDesktop.png" alt="Desktop dark mode" width="800"/>

   **Light Mode on Mobile**:
         <img src="/src/assets/images/readmePics/lightModeMobile.png" alt="Mobile light mode" width="189"/>

   **Dark Mode on Mobile**:
         <img src="/src/assets/images/readmePics/darkModeMobile.png" alt="Mobile dark mode" width="189"/>


Once toggled, the theme will persist across sessions, using localStorage to remember the user's preference.


For more details on setting up and using this portfolio, please check the [Backend README](<https://github.com/FranciscoAverruz/portfolioEmailServer>).

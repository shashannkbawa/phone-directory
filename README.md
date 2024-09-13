# Contact Management App

## Project Overview

This is a React application that includes components like a responsive LeftBar for navigation, a CovidChart built using `Chart.js`, and a Contact Management System with card components. The application handles APIs, responsive UI for mobile and larger devices, and data visualizations based on data fetched from external APIs.

## Table of Contents

- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Endpoints](#api-endpoints)
- [Development Notes](#development-notes)
- [Tech Stack](#tech-stack)

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/shashannkbawa/phone-directory.git
   ```

2. **Navigate into the project directory:**

   ```bash
   cd phone-directory
   ```

3. **Install the dependencies:**

   Ensure you have Node.js installed (version 18+ recommended).

   ```bash
   npm install
   ```

4. **Set up environment variables:**

   Create a `.env` file in the root directory:

   ```bash
   REACT_APP_API_URL = https://disease.sh/v3
   ```

---

## Running the Application

### For Local Development:

1. **Start the React application:**

   ```bash
   npm start
   ```

   The application will be accessible at:

   ```
   http://localhost:3000
   ```

2. **Production Build:**

   To create a production build, use:

   ```bash
   npm run build
   ```

---

## API Endpoints

This application interacts with several APIs for fetching Covid-19 data. And provide a visual representation of data in charts and maps.

### Covid-19 API for Global Data (Public API)

The CovidChart component fetches historical Covid-19 case data from the following endpoint:

- **Endpoint:** `https://disease.sh/v3/covid-19/all`
- **Method:** `GET`
- **Data Used:**
  - `cases`
  - `deaths`
  - `recovered`
  - `active`

### Covid-19 API for Chart (Public API)

The CovidChart component fetches historical Covid-19 case data from the following endpoint:

- **Endpoint:** `https://disease.sh/v3/covid-19/historical/all?lastdays=all`
- **Method:** `GET`
- **Data Used:**
  - `cases`
  - `deaths`
  - `recovered`

### Covid-19 API for Map (Public API)

The CovidChart component fetches historical Covid-19 case data from the following endpoint:

- **Endpoint:** `https://disease.sh/v3/covid-19/countries`
- **Method:** `GET`
- **Data Used:**
  - `country`
  - `countryInfo`
  - `cases`
  - `deaths`
  - `recovered`
  - `active`

---

## Contacts State

The application manages contacts data via a Redux store, which allows users to create, view, edit, and delete contacts.

- **Reducer:** `contacts`
- **State:**
  - `contacts` - Contains list of all contacts created'
  - `selectedContact` - Contains the selected contact data
- **Actions:**
  - `selectedContact` - Stores the information of contact selected for edit/view.
  - `addContact` - Adds a new contact to the list.
  - `updateContact` - Updates an existing contact.
  - `deleteContact` - Deletes a contact by ID.

---

## Development Notes

- **Responsive Design:** The LeftBar is fixed on laptop screens but hidden on mobile devices, where it can be toggled with a hamburger icon. The content area will occupy the full width on mobile when the LeftBar is hidden.
- **Chart Configuration:** The `CovidChart` component dynamically scales based on screen size and uses `Chart.js` to render historical data.
- **Map Information:** The `CovidMap` component initailly zoomed to country coordinates, and clicking on markers pops up a popup containing information regarding the selected country covid data.
- **State Management:** The app uses `Redux` for global state management, integrating slices (e.g., `ContactsSlice`, `ModalSlice`) by a `useSelector` call.
- **API calls** The app uses `TanstackQuery` for API calls, integrated with react hooks.

---

## Tech Stack

- **React.js**: Frontend framework for building the user interface.
- **TypeScript**: Strongly typed JavaScript for improved code quality.
- **Redux**: State management.
- **Chart.js**: Library for rendering responsive charts in the `CovidChart` component.
- **React Leaflet**: Library for rendering Map in the `CovidMap` component.
- **Tailwind CSS**: Utility-first CSS framework for styling and responsive design.

---

## Contributing

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Open a pull request.

---

## Contact

For any questions or issues, feel free to contact the project maintainers at:

- Email: shashanksharma092002@gmail.com
- GitHub: [shashannkbawa](https://github.com/shashannkbawa)

---

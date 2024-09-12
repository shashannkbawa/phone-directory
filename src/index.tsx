// src/index.tsx
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  TimeScale,
  Title,
  Tooltip,
} from "chart.js";
import "chartjs-adapter-date-fns";
import { QueryClient, QueryClientProvider } from "react-query";

import React from "react";
import ReactDOM from "react-dom/client"; // Make sure this is the correct import
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { store } from "./redux/store";

// Create a QueryClient instance
const queryClient = new QueryClient();

// Create a root element
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement // Ensure this is a valid DOM element
);

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Filler
);

// Render the application
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

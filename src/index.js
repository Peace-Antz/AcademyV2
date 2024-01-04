import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { StyledEngineProvider } from '@mui/joy/styles';
import { Polygon } from "@thirdweb-dev/chains";
import { CssVarsProvider } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Divider from '@mui/joy/Divider';
import Grid from '@mui/joy/Grid';
import Stack from '@mui/joy/Stack';
import "./styles/globals.css";
import useScript from './useScript';
import FirstSidebar from './components/FirstSidebar';
import Header from './components/Header';
import RentalCard from './components/CourseCard';
import Main from './components/Main';
import HeaderSection from './components/HeaderSection';
import Search from './components/Search';
import Filters from './components/Filters';
import Toggles from './components/Toggles';
import Pagination from './components/Pagination';
import process from 'process';
import { Buffer } from 'buffer';
window.Buffer = Buffer;


window.process = process;


// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
//Wrapped App with Thirdweb then Joy UI wrappers.
const activeChain = Polygon;

const container = document.getElementById("root");
const root = createRoot(container);


root.render(
  <React.StrictMode>
    <ThirdwebProvider
      activeChain={activeChain}
      clientId={process.env.REACT_APP_TEMPLATE_CLIENT_ID}
    >
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

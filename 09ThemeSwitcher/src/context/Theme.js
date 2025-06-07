import {createContext ,useContext} from "react";

export const ThemeContext = createContext({
    themeMode : 'light', // Default theme mode
    darkTheme: () => {}, // Function to switch to dark theme
    lightTheme: () => {}, // Function to switch to light theme
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme(){
    return useContext(ThemeContext);
}
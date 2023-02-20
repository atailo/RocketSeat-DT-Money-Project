import { ThemeProvider } from "styled-components";
import { Transactions } from "./pages/Transactions";
import { Globalstyles } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <Globalstyles />
      <Transactions />
    </ThemeProvider>

  )
}



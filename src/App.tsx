import CustomRouter from "./customRouter";
import GlobalStyle from "./styles/globalStyle";
import { ThemeProvider } from "styled-components";
import { theme, mixins } from "./styles/theme";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={{ ...theme, mixins }}>
        <CustomRouter />
      </ThemeProvider>
    </>
  );
}

export default App;

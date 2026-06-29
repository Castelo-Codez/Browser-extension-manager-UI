import ExtensionsContainer from "./components/ExtensionsContainer";
import Header from "./components/Header";
import Parent from "./components/Parent";
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <>
      <ThemeProvider>
        <Parent>
          <Header />
          <ExtensionsContainer />
        </Parent>
      </ThemeProvider>
    </>
  );
}

export default App;

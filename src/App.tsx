import { DarkModeProvider } from "./Theme/DarkModeContext";
import MainLayout from "./components/layouts/MainLayout";

const App = () => {
  return (
    <div>
      <DarkModeProvider>
        <MainLayout />
      </DarkModeProvider>
    </div>
  );
};

export default App;

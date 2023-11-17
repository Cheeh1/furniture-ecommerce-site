import RouterLink from "./routes/router";
import { Toaster } from "react-hot-toast";
import { AuthContextProvider } from "./context/AuthContext";
import { FavoriteContextProvider } from "./context/FavoriteContext";
const App = () => {
  return (
    <>
      <AuthContextProvider>
        <FavoriteContextProvider>
          <Toaster />
          <RouterLink />
        </FavoriteContextProvider>
      </AuthContextProvider>
    </>
  );
};
export default App;

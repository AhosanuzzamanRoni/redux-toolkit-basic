import { useSelector } from "react-redux";

import Auth from './redux/Components/Auth';
import BasePage from "./redux/Components/BasePage";

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Redux-Toolkit</h1>

      {auth.isAuth ? <BasePage /> : <Auth />}
    </div>
  );
};

export default App;

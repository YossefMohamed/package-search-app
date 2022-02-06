import { FC } from "react";
import { Provider } from "react-redux";
import RepositoriesList from "./components/RepositoriesList";
import { store } from "./state";
const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Search For A Package :</h1>
        <RepositoriesList />
      </div>
    </Provider>
  );
};

export default App;

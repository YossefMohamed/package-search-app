import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";
import { RootState } from "../state/reducers";

const RepositoriesList = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.reposReducer);
  useEffect(() => {
    console.log(state);
  }, [state]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    term.length && dispatch(actionCreators.searchRepos(term));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {state.loading && <h2>Loading.....</h2>}
      <ul>
        {state.data.length
          ? state.data.map((el: any) => (
              <li key={el}>
                <code>{el}</code>
              </li>
            ))
          : ""}
      </ul>
      {state.error && <code>state.error</code>}
    </div>
  );
};

export default RepositoriesList;

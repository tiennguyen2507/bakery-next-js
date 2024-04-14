import { FC, PropsWithChildren, createContext } from "react";

const defaultState = {
  state: {
    isLogin: false,
    searchValue: "",
  },
  setIsLogin: (value: boolean) => {},
  setSearchValue: (value: string) => {},
};

const GlobalState = createContext(defaultState);

const GlobalStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [state, setState] = useState(defaultState.state);

  const globalStateValue = {
    state: state,
    setIsLogin: (value: boolean) => {
      setState({ ...state, isLogin: value });
    },
    setSearchValue: (value: string) => {
      setState({ ...state, searchValue: value });
    },
  };

  return (
    <GlobalState.Provider value={globalStateValue}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalStateProvider;

export const useGlobalState = () => useContext(GlobalState);

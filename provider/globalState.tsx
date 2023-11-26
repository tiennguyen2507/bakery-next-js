import { FC, PropsWithChildren, createContext } from "react";

type TypeglobalStateValue = {
  isLogin: boolean;
  setIsLogin: (value: boolean) => void;
};

const defaulState = {
  isLogin: false,
  setIsLogin: () => {},
};

const GlobalState = createContext<TypeglobalStateValue>(defaulState);

const GlobalStateProvider: FC<PropsWithChildren> = ({ children }) => {
  const [islogin, setIsLogin] = useState<boolean>(false);

  const globalStateValue = {
    isLogin: islogin,
    setIsLogin: (value: boolean) => setIsLogin(value),
  };

  return (
    <GlobalState.Provider value={globalStateValue}>
      {children}
    </GlobalState.Provider>
  );
};

export default GlobalStateProvider;

export const useGlobalState = () => useContext(GlobalState);

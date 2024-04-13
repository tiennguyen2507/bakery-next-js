import dynamic from "next/dynamic";
import { FC, PropsWithChildren, createContext } from "react";

const Notification = dynamic(() => import("components/features/Notification"), {
  ssr: false,
});

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
  const [isLogin, setIsLogin] = useState<boolean>(true);

  const globalStateValue = {
    isLogin: isLogin,
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

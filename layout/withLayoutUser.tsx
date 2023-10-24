import { ComponentType } from "react";
import Header from "../components/Header";

const withLayoutUser = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithLayout: React.FC<P> = (props) => (
    <div className="bg-blue-100 min-h-screen">
      <div className="mx-auto bg-white min-h-screen max-w-lg ">
        <Header />
        <main>
          <WrappedComponent {...props} />
        </main>
      </div>
    </div>
  );

  return WithLayout;
};

export default withLayoutUser;

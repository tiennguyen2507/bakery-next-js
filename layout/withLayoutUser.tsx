import { ComponentType } from "react";
import Header from "../components/Header";

const withLayoutUser = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithLayout: React.FC<P> = (props) => (
    <div className="bg-blue-100 flex items-center justify-center">
      <div
        style={{ maxWidth: 500, width: "100%" }}
        className="bg-white min-h-screen"
      >
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

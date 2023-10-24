import { ComponentType } from "react";
import Header from "../components/Header";

const withLayoutDefault = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithLayout: React.FC<P> = (props) => (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div style={{ maxWidth: 500 }} className="bg-white min-h-screen">
        <main>
          <WrappedComponent {...props} />
        </main>
      </div>
    </div>
  );

  return WithLayout;
};

export default withLayoutDefault;

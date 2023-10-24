import { ComponentType } from "react";
import Header from "../components/Header";

const withLayoutDefault = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithLayout: React.FC<P> = (props) => (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center">
      <div className="bg-white max-w-sm min-h-screen">
        <main>
          <WrappedComponent {...props} />
        </main>
      </div>
    </div>
  );

  return WithLayout;
};

export default withLayoutDefault;

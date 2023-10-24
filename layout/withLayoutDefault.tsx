import { ComponentType } from "react";
import Header from "../components/Header";

const withLayoutDefault = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const WithLayout: React.FC<P> = (props) => (
    <div className="bg-blue-100 min-h-screen">
      <div className="mx-auto bg-white max-w-lg min-h-screen">
        <main>
          <WrappedComponent {...props} />
        </main>
      </div>
    </div>
  );

  return WithLayout;
};

export default withLayoutDefault;

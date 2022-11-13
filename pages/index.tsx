import Header from "../components/Header";
import SideBar from "../components/SideBar";

type TProps = {};

export default function App({}: TProps) {
  return (
    <div className="container mx-auto">
      <Header />
      <SideBar />
      home
    </div>
  );
}

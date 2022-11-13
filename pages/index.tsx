import Header from "../components/Header";

type TProps = { user: string };

export default function App({ user }: TProps) {
  return (
    <div className="container mx-auto">
      <Header />
    </div>
  );
}

import { ListCake } from "types/cake.type";
import { PageConfig } from "config/configPage";
import styles from "./HomePage.module.css";
import { useForm } from "react-hook-form";

type homePageProps = { listCake: ListCake };

type User = {
  name: string;
  age: string;
  address: string;
  full: string;
};

const App: FC<homePageProps> = () => {
  const [listUser, setListUser] = useState<
    {
      name: string;
      age: string;
      address: string;
      full: string;
    }[]
  >([]);

  const { setValue, getValues } = useForm<User[]>({ defaultValues: [] });
  const user = getValues();

  const handleClickAdd = () => {
    setListUser([...listUser, { name: "", age: "", address: "", full: "" }]);
  };

  return (
    <div className={styles.wrapper}>
      {user.map((item, index) => (
        <FormUser
          key={index}
          onChange={(index, value) => {
            setListUser(() => {
              const user = [...listUser];
              user[index] = value;
              return user;
            });
          }}
          index={index}
        />
      ))}
      <BaseButton label="add user" onClick={handleClickAdd} />
      {JSON.stringify(listUser)}
    </div>
  );
};

const FormUser = ({
  onChange,
  index,
}: {
  onChange: (index: number, data: any) => void;
  index: number;
}) => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    address: "",
    full: "",
  });
  return (
    <div className={styles.itemWrapper}>
      <input
        name="name"
        type="text"
        className={styles.input}
        onChange={(event) => {
          setUser({ ...user, [event.target.name]: event.target.value });
          onChange(index, { ...user, [event.target.name]: event.target.value });
        }}
      />
      <input
        name="age"
        type="text"
        className={styles.input}
        onChange={(event) => {
          setUser({ ...user, [event.target.name]: event.target.value });
          onChange(index, { ...user, [event.target.name]: event.target.value });
        }}
      />
      <input
        name="address"
        type="text"
        className={styles.input}
        onChange={(event) => {
          setUser({ ...user, [event.target.name]: event.target.value });
          onChange(index, { ...user, [event.target.name]: event.target.value });
        }}
      />
      <input
        name="full"
        type="text"
        className={styles.input}
        onChange={(event) => {
          setUser({ ...user, [event.target.name]: event.target.value });
          onChange(index, { ...user, [event.target.name]: event.target.value });
        }}
      />
      <div className={styles.name}></div>
      <Data />
    </div>
  );
};

export default PageConfig({
  page: App,
});

const Data: React.FC = () => {
  return <div></div>;
};

export const HomePage: React.FC = () => <>hello</>;

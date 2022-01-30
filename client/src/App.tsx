import {
    ReactElement,
    ReactNode,
    FC,
    HTMLProps,
    ChangeEvent,
    ChangeEventHandler,
    ReactEventHandler,
    useState,
    useEffect,
} from "react";


import styles from "./App.module.css";

const title: JSX.Element = <h1>Welcome to TODO app</h1>;
const reactElement: ReactElement = <h1>Same react element</h1>;

interface IHeadLineProps {
    children?: ReactNode;
    id: number;
}

interface ISWPerson {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: string[];
    vehicles: string[];
    starships: string[];
    created: Date;
    edited: Date;
    url: string;
}

const HeadLine = (props: IHeadLineProps) => {
    const { children, id } = props;

    return (
        <h1>
            {children} {id}
        </h1>
    );
};

interface IHeadLine1Props {
    id: number;
}

const HeadLine1: FC<IHeadLine1Props> = (props) => {
    const { children, id } = props;

    return (
        <h1>
            {children} {id}
        </h1>
    );
};

const CustomInput = (props: HTMLProps<HTMLInputElement>) => {
    const [value, setValue] = useState<string>("");

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    console.log("value >>", value);

    // Same thing
    const onChangeHandler1: ChangeEventHandler<HTMLInputElement> = (e) => {
        console.log(e.target.value);
    };

    return <input {...props} onChange={onChangeHandler} value={value} />;
};

async function getSWPerson(personId: number): Promise<ISWPerson> {
    const resp = await fetch(`https://swapi.dev/api/people/${personId}`);

    return resp.json();
}

const Hooks = () => {
    const [swPerson, setSwPerson] = useState<ISWPerson | null>(null);

    useEffect(() => {
        getSWPerson(1).then((data) => setSwPerson(data));
    }, []);

    return (
        <>
            <h1>{swPerson?.name}</h1>
        </>
    );
};

function App() {
    const [count, setCount] = useState<number>(0);

    const onClickHandler: ReactEventHandler = (e) => {
        console.log(e);
        setCount((prevState) => {
            return prevState + 1;
        });
    };
    return (
        <>
            <div className={styles["text-center"]}>{title}</div>
            {reactElement}
            <HeadLine id={1}>Hello Children</HeadLine>
            <HeadLine1 id={2}>Same component</HeadLine1>
            <br />
            <CustomInput placeholder="My custom input" type="text" />
            <br />
            <div onClick={onClickHandler}>{count}</div>
            <br />
            <Hooks />
        </>
    );
}

export default App;

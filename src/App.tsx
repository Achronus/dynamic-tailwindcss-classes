import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { ColourType } from "./enums";

const Images: ImageProps[] = [
  {
    url: "https://vitejs.dev",
    styles: "logo",
    src: viteLogo,
    alt: "Vite logo",
  },
  {
    url: "https://react.dev",
    styles: "logo react",
    src: reactLogo,
    alt: "React logo",
  },
];

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  colour?: ColourType;
};

type ImageProps = {
  url: string;
  styles: string;
  src: string;
  alt: string;
};

const Image = ({ url, styles, src, alt }: ImageProps) => {
  return (
    <>
      <a href={url} target="_blank">
        <img className={styles} src={src} alt={alt} />
      </a>
    </>
  );
};

const Button = ({
  children,
  onClick,
  colour = "lime",
}: ButtonProps) => {
  return (
    <button
      className={`mb-3 bg-${colour}-300 border-${colour}-400 hover:bg-${colour}-600 text-black transition-all`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center">
        {Images.map((img, idx) => (
          <Image key={idx} {...img} />
        ))}
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        {/* CODE OF INTEREST BELOW */}
        <Button
          colour="lime"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        {/* CODE OF INTEREST ABOVE */}
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

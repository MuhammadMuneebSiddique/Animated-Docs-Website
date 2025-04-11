import Background from "./components/background/page";
import ForeBackground from "./components/foreBackground/page";

export default function Home() {
  return (
        <>
          <div className="container flex justify-center items-center w-full h-screen">
            <Background />
            <ForeBackground />
          </div>
        </>
  );
}

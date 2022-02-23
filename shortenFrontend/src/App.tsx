import "./styles/index.css";
import { ShortUrlSection, Navbar, ShortenInfo } from "./components";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-28 w-full">
        <ShortenInfo />
        <ShortUrlSection />
      </div>
    </div>
  );
}

export default App;

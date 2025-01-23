import Image from "next/image";
import Hero from "./components/Hero";
import Product from "./components/Product";
import JoinUs from "./components/JoinUs";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Button from "./components/Button";

export default function Home() {
  return (
    <div>
      <Hero />
      <Product />
      <JoinUs />
      <Login />
      <Contact />
      <Button text="Click Me" className="hover:bg-gray-700 transition-all duration-300" />
    </div>
  );
}

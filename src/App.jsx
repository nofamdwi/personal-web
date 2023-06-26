import About from "./pages/About";
import NavBar from "./pages/NavBar";

export default function App() {
  return (
    <main className="bg-white dark:bg-black h-screen w-screen transition ease-in-out delay-150">
      <NavBar />
      <About />
    </main>
  )
}
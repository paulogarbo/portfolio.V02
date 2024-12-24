import { ModeToggle } from "./_components/mode-toggle";

const Home = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <h1 className="p-5 text-red-500">Hello world!</h1>
      <ModeToggle />
    </div>
  );
};

export default Home;

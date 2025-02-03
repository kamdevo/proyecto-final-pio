import { RainbowButton, SparklesText, DotPattern, Navbar } from "../";
import { cn } from "@/lib/utils";
const HomePage = () => {
  return (
    <main className="">
      <Navbar />
      <section className="hero w-full h-screen flex flex-col justify-center items-center text-center relative overflow-hidden rounded-lg border bg-background">
        <SparklesText
          text="Te damos la bienvenida a tu <br/> calendario digital"
          className="text-6xl font-extrabold z-10"
        />
        <p className="text-lg mt-4 z-10">
          Organiza tu tiempo como nunca antes con herramientas diseñadas para
          ti.
          <br />
          Gestiona eventos, tareas y reuniones de forma fácil y eficiente.
        </p>
        <RainbowButton className="mt-4 px-14 py-4 z-10">Acceder</RainbowButton>
      </section>
      <section className="w-full h-[90vh] flex justify-center items-center">
        <div className="w-700 h-700 rounded-xl bg-slate-400 p-10  ">asd</div>
      </section>
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]"
        )}
      />
    </main>
  );
};

export default HomePage;

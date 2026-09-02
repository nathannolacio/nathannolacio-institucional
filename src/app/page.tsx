import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Nathan Nolácio
        </h1>
        <p className="mt-2 max-w-md text-zinc-600 dark:text-zinc-400">
          Soluções em tecnologia para pequenos negócios e pequenas empresas.
        </p>
      </main>
      <Footer />
    </div>
  );
}

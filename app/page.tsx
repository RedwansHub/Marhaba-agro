import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans bg-background">
      <main className="flex flex-1 w-full  flex-col items-center justify-center py-32 px-16 ">
         {/* <Link href="/marhaba-agro" className="flex items-center gap-3"> */}
          <Image 
            src="/Logo/marhabaAgro.svg" 
            width={400} 
            height={72} 
            alt="Marhaba Agro" 
            className={`cursor-pointer transition-all `} 
          />
        {/* </Link> */}
          <p className="max-w-md text-lg leading-8 text-zinc-600 pt-6 dark:text-zinc-400">
            Cultivating the Future of Somalia’s Agribusiness.
          </p>
        <div className="flex pt-12 flex-col items-center gap-1 text-center">
          <h1 className="max-w-xs text-xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Coming Soon 
          </h1>
        </div>
      </main>
    </div>
  );
}

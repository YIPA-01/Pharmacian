import Image from "next/image";
import { GradientDots } from "@/components/ui/gradient-dots";
import { Header } from "@/components/ui/header-2"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { CardSpotlightDemo } from "@/components/ui/card-spot"
import { TextRevealByWord } from "@/components/ui/text-reveal"
import { Component as FlickeringGrid } from "@/components/ui/flickering-footer"
import { ThemeSwitcher } from "@/components/ui/theme-switcher-1"
import SolutionsGrid from "@/components/filipping-card-section"
import { MarqueeAnimation } from "@/components/ui/marquee-effect"
import {WavePath} from "@/components/ui/wave-path"
import { cn } from "@/lib/utils"




export default function DefaultDemo() {
	return (
		<main>

			<GradientDots duration={90}/>

      <div className="fixed top-4 right-4 z-50 max-sm:hidden">
        <ThemeSwitcher />
      </div>


      <Header />
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl md:text-[6rem] font-bold mt-1 leading-none ">
            <span className=" text-4xl font-semibold text-black dark:text-white">
            1 Patient sur 3 Quitte votre Officine  
              </span> <br />
              Sans la Totalité du Traitement

            </h1>
          </>
        }
      >
        <Image
          src={`/assets/unhappy-pharmacist.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <TextRevealByWord 
          text="Bienvenue sur la Liste d'attente de La Solution d'Officine la N°1 au Maroc" 
          className="w-full text-center text-4xl md:text-6xl lg:text-[8vw] leading-none uppercase font-black tracking-tighter"
        />
      </div>
      <div className="flex flex-col gap-4 pb-50">
        <MarqueeAnimation
          direction="left"
          baseVelocity={-2}
          className="bg-emerald-800 dark:text-black text-white py-2"
        >
          Pharmac IA N -- est la Nouvelle Génération de l'Officine
        </MarqueeAnimation>
        <MarqueeAnimation
          direction="right"
          baseVelocity={-1}
          className="bg-purple-800 text-white py-2"
        >
          Transformez votre Officine avec Pharmac IA N
        </MarqueeAnimation>
      </div>

      {/* <div className="flex justify-center">
      <CardSpotlightDemo  />
      </div> */}
      <SolutionsGrid />

      <div className="relative w-full flex min-h-screen flex-col items-center justify-center">
			<div
				aria-hidden="true"
				className={cn(
					'pointer-events-none absolute -top-10 left-1/2 size-full -translate-x-1/2 rounded-full',
					'bg-[radial-gradient(ellipse_at_center,--theme(--color-foreground/.1),transparent_50%)]',
					'blur-[30px]',
				)}
			/>


<div className="flex w-full max-w-[70vw]">

  {/* The Wave Path Graphic */}
  
  <div className="flex w-full flex-col items-end text-right">
    {/* UM6P Logo and Tagline */}
    <div className="flex flex-col items-end space-y-2">
      <div className="flex items-center gap-0.5 shrink-0 whitespace-nowrap">
        {["U", "M", "6", "P"].map((char) => (
          <div key={char} className="w-8 h-8 bg-[#E85D26] flex items-center justify-center rounded-sm">
            <span className="text-xl text-white font-black">{char}</span>
          </div>
        ))}
      </div>
      <p className="text-muted-foreground text-xs font-medium uppercase tracking-widest">
        World of Art
      </p>
      <WavePath className="mb-10 w-full" />
    </div>
    

    {/* Main Descriptive Text */}
    <div className="mt-8 max-w-2xl">
      <h2 className="text-foreground text-2xl md:text-4xl font-bold leading-tight">
        L'écosystème digital des pharmacies marocaines
      </h2>
      <p className="text-muted-foreground mt-4 text-sm md:text-base leading-relaxed">
        Sélectionné par le programme d'innovation de l'UM6P.
      </p>
    </div>

    {/* Footer Metadata */}
    <div className="mt-16 border-t border-border w-full pt-4 flex flex-col items-end opacity-60">
      <p className="text-xs">© 2025 PHARMACIAN</p>
      <p className="text-[10px] tracking-tighter uppercase">Tous droits réservés</p>
    </div>
  </div>
</div>
		</div>

      <FlickeringGrid />
      
		</main>
	);
}


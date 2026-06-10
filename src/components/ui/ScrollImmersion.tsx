import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'

import logo from '@assets/Logo-BLX-V2-PNG.webp'

import { cleanupOrphanDom } from '../../lib/scroll'



gsap.registerPlugin(ScrollTrigger)



export function ScrollImmersion() {

  const pinRef = useRef<HTMLDivElement>(null)

  const darkLayerRef = useRef<HTMLDivElement>(null)

  const lightRevealRef = useRef<HTMLDivElement>(null)

  const lightShineRef = useRef<HTMLDivElement>(null)

  const accentLineRef = useRef<HTMLDivElement>(null)

  const watermarkRef = useRef<HTMLDivElement>(null)

  const headlineRef = useRef<HTMLDivElement>(null)

  const taglineRef = useRef<HTMLParagraphElement>(null)

  const logoRef = useRef<HTMLImageElement>(null)



  useEffect(() => {

    let ctx: gsap.Context | undefined

    let cancelled = false

    let frame = 0



    const init = () => {

      if (cancelled) return



      const pin = pinRef.current

      const darkLayer = darkLayerRef.current

      const lightReveal = lightRevealRef.current

      const lightShine = lightShineRef.current

      const accentLine = accentLineRef.current

      const watermark = watermarkRef.current

      const headline = headlineRef.current

      const tagline = taglineRef.current

      const logoEl = logoRef.current



      if (!pin || !darkLayer || !lightReveal || !accentLine || !watermark || !headline) {

        return

      }



      const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches



      ctx = gsap.context(() => {

        if (reducedMotion) {

          gsap.set(lightReveal, { clipPath: 'none' })

          gsap.set(darkLayer, { opacity: 0 })

          gsap.set([accentLine, lightShine], { opacity: 0 })

          document.body.dataset.theme = 'light'

          return

        }



        gsap.set(lightReveal, { clipPath: 'circle(0% at 50% 100%)' })

        gsap.set(lightShine, { opacity: 0, xPercent: -100 })

        gsap.set(accentLine, { scaleX: 0, opacity: 0 })

        gsap.set(watermark, { y: 40, scale: 1, opacity: 0.04 })

        gsap.set(headline, { y: 0, opacity: 1 })

        if (tagline) gsap.set(tagline, { y: 0, opacity: 1 })

        if (logoEl) gsap.set(logoEl, { y: 0, opacity: 0.9 })



        gsap

          .timeline({

            scrollTrigger: {

              id: 'home-transition',

              trigger: pin,

              start: 'top top',

              end: '+=220%',

              pin: true,

              scrub: 1.2,

              anticipatePin: 1,

              invalidateOnRefresh: true,

              onUpdate: (self) => {

                document.body.dataset.theme = self.progress > 0.55 ? 'light' : 'dark'

              },

            },

          })

          .to(watermark, { y: -80, scale: 1.35, opacity: 0.1, ease: 'none' }, 0)

          .to(watermark, { opacity: 0, ease: 'power2.in' }, 0.45)

          .to(

            lightReveal,

            { clipPath: 'circle(180% at 50% 40%)', ease: 'power3.inOut' },

            0,

          )

          .to(accentLine, { scaleX: 1, opacity: 1, ease: 'power2.out' }, 0.14)

          .to(accentLine, { opacity: 0, ease: 'power1.in' }, 0.52)

          .to(lightShine, { opacity: 0.22, xPercent: 200, ease: 'power2.inOut' }, 0.2)

          .to(lightShine, { opacity: 0, ease: 'power1.in' }, 0.62)

          .to(headline, { y: -120, opacity: 0, ease: 'power2.in' }, 0.1)

          .to(tagline, { y: -80, opacity: 0, ease: 'power2.in' }, 0.14)

          .to(logoEl, { y: -60, opacity: 0, scale: 0.92, ease: 'power2.in' }, 0.12)

          .to(

            darkLayer,

            { opacity: 0, scale: 1.02, filter: 'blur(8px)', ease: 'power2.in' },

            0.15,

          )



        requestAnimationFrame(() => ScrollTrigger.refresh(true))

      }, pin)

    }



    frame = requestAnimationFrame(() => {

      requestAnimationFrame(init)

    })



    return () => {

      cancelled = true

      cancelAnimationFrame(frame)

      ctx?.revert()

      ScrollTrigger.getById('home-transition')?.kill(true)

      cleanupOrphanDom()

      document.body.dataset.theme = 'dark'

    }

  }, [])



  return (

    <section

      ref={pinRef}

      className="brand-transition relative z-20 h-screen overflow-hidden bg-blx-bg"

      aria-label="BLX brand moment"

    >

      <div className="brand-transition__vignette pointer-events-none absolute inset-0 z-0" aria-hidden />



      <div

        ref={watermarkRef}

        className="pointer-events-none absolute inset-0 z-[3] flex items-center justify-center select-none"

        aria-hidden

      >

        <span className="brand-transition__watermark">BLX</span>

      </div>



      <div

        ref={lightRevealRef}

        className="scroll-transition__light pointer-events-none absolute inset-0 z-[5] bg-blx-light"

        aria-hidden

      />



      <div

        ref={lightShineRef}

        className="pointer-events-none absolute inset-0 z-[6] bg-gradient-to-r from-transparent via-white/35 to-transparent"

        style={{ transform: 'skewX(-14deg)' }}

        aria-hidden

      />



      <div

        ref={darkLayerRef}

        className="scroll-transition__dark pointer-events-none relative z-20 flex h-full items-center justify-center"

      >

        <div className="blx-container flex flex-col items-center text-center">

          <img

            ref={logoRef}

            src={logo}

            alt=""

            className="brand-transition__logo mb-10 h-11 w-auto md:h-12"

            aria-hidden

          />

          <div ref={headlineRef} className="brand-transition__headline">

            <span className="block">Borderless</span>

            <span className="brand-transition__headline-accent block">by discipline.</span>

          </div>

          <p ref={taglineRef} className="brand-transition__tagline mt-6">

            BLX Markets

          </p>

        </div>

      </div>



      <div

        ref={accentLineRef}

        className="brand-transition__slash pointer-events-none absolute top-1/2 right-0 left-0 z-[26] -translate-y-1/2"

        aria-hidden

      />

    </section>

  )

}



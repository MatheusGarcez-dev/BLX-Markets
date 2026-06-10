import { useEffect, useRef } from 'react'

import gsap from 'gsap'

import { ScrollTrigger } from 'gsap/ScrollTrigger'



gsap.registerPlugin(ScrollTrigger)



export function NotebookHero() {

  const sceneRef = useRef<HTMLDivElement>(null)

  const lidRef = useRef<HTMLDivElement>(null)



  useEffect(() => {

    const scene = sceneRef.current

    const lid = lidRef.current

    if (!scene || !lid) return



    const ctx = gsap.context(() => {

      ScrollTrigger.create({

        trigger: scene,

        start: 'top 85%',

        onEnter: () => lid.classList.add('notebook-lid--open'),

        onLeaveBack: () => lid.classList.remove('notebook-lid--open'),

      })

    }, scene)



    return () => ctx.revert()

  }, [])



  return (

    <div ref={sceneRef} className="notebook-scene w-full max-w-lg justify-self-end">

      <div className="notebook-shell">

        <div ref={lidRef} className="notebook-lid">

          <div className="flex items-center gap-2 border-b border-white/[0.06] px-4 py-2.5">

            <span className="text-[10px] text-blx-text-muted">BLX · MT5</span>

          </div>

          <div className="grid grid-cols-3 gap-2 p-3">

            {[1, 2, 3, 4, 5, 6].map((n) => (

              <div

                key={n}

                className={`h-14 rounded-xl bg-blx-bg/80 ${n === 2 ? 'bg-blx-accent/15 ring-1 ring-blx-accent/25' : ''}`}

              />

            ))}

          </div>

          <div className="mx-3 mb-3 rounded-xl border border-white/[0.05] bg-blx-bg/80 p-3">

            <div className="h-12 w-2/3 rounded-lg bg-gradient-to-r from-blx-accent/25 to-blx-accent/5" />

          </div>

        </div>

        <div className="mx-2 mb-2 h-2 rounded-full bg-blx-elevated/80" />

      </div>

    </div>

  )

}



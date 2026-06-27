import { useEffect, useRef, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const previewAnimation =
  'https://lottie.host/46b24b39-3cd1-42a4-9a6f-2e97122fc30b/oqyYEQeYOQ.json'

const workProjects = [
  {
    number: '01',
    href: '/marketing',
    eyebrow: 'Estrategia digital',
    title: ['Marketing'],
    subtitle: 'Campanas, contenido y acciones pensadas para que una marca entre en conversacion.',
    background: '#0b0e0f',
    glow: 'rgba(255, 237, 0, 0.15)',
    images: [
      {
        className: 'work-asset-lg work-asset-left',
        src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80',
        alt: 'Equipo creativo revisando una campana',
      },
      {
        className: 'work-asset-md work-asset-center',
        src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80',
        alt: 'Mesa de trabajo con material de marketing',
      },
      {
        className: 'work-asset-sm work-asset-right',
        src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
        alt: 'Panel de datos digitales',
      },
    ],
  },
  {
    number: '02',
    href: '/diseno-grafico',
    eyebrow: 'Identidad visual',
    title: ['Diseno', 'grafico'],
    subtitle: 'Piezas visuales, composicion y sistemas graficos con una mirada mas editorial.',
    background: '#162b64',
    glow: 'rgba(95, 166, 255, 0.2)',
    images: [
      {
        className: 'work-asset-tall work-asset-center',
        src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1000&q=80',
        alt: 'Arquitectura geometrica de colores intensos',
      },
      {
        className: 'work-asset-lg work-asset-left',
        src: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
        alt: 'Estudio de diseno con escritorio y pared visual',
      },
      {
        className: 'work-asset-sm work-asset-right',
        src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
        alt: 'Detalle visual con colores naturales',
      },
    ],
  },
  {
    number: '03',
    href: '/edicion-video',
    eyebrow: 'Audiovisual',
    title: ['Edicion', 'de video'],
    subtitle: 'Ritmo, montaje y narrativa para piezas que se sienten fluidas desde el primer segundo.',
    background: '#101314',
    glow: 'rgba(148, 255, 214, 0.16)',
    images: [
      {
        className: 'work-asset-md work-asset-left',
        src: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1100&q=80',
        alt: 'Mesa de edicion audiovisual',
      },
      {
        className: 'work-asset-tall work-asset-center',
        src: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1000&q=80',
        alt: 'Camara de video en una produccion',
      },
      {
        className: 'work-asset-lg work-asset-right',
        src: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80',
        alt: 'Pantalla de cine con luz en sala oscura',
      },
    ],
  },
  {
    number: '04',
    href: '/proyecto-personal',
    eyebrow: 'Exploracion propia',
    title: ['Proyecto', 'personal'],
    subtitle: 'Conceptos, pruebas y direccion propia para convertir una intuicion en algo visible.',
    background: '#351121',
    glow: 'rgba(255, 87, 121, 0.18)',
    images: [
      {
        className: 'work-asset-lg work-asset-left',
        src: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80',
        alt: 'Composicion visual experimental',
      },
      {
        className: 'work-asset-md work-asset-center',
        src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=80',
        alt: 'Portatil con trabajo creativo',
      },
      {
        className: 'work-asset-sm work-asset-right',
        src: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80',
        alt: 'Codigo y proyecto personal en pantalla',
      },
    ],
  },
]

const socialLinks = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/c%C3%A9sar-velasco-murillo-441aaa2b6/',
    path: 'M4.98 3.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0ZM.32 8.06h4.3V22H.32V8.06ZM7.3 8.06h4.12v1.9h.06c.57-1.08 1.98-2.22 4.08-2.22 4.36 0 5.16 2.87 5.16 6.6V22h-4.3v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.6 1.76-2.6 3.58V22H7.3V8.06Z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ceesarvm_/',
    path: 'M7.2 2h9.6A5.2 5.2 0 0 1 22 7.2v9.6a5.2 5.2 0 0 1-5.2 5.2H7.2A5.2 5.2 0 0 1 2 16.8V7.2A5.2 5.2 0 0 1 7.2 2Zm0 2A3.2 3.2 0 0 0 4 7.2v9.6A3.2 3.2 0 0 0 7.2 20h9.6a3.2 3.2 0 0 0 3.2-3.2V7.2A3.2 3.2 0 0 0 16.8 4H7.2Zm4.8 3.2a4.8 4.8 0 1 1 0 9.6 4.8 4.8 0 0 1 0-9.6Zm0 2a2.8 2.8 0 1 0 0 5.6 2.8 2.8 0 0 0 0-5.6Zm5.1-2.45a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@vesco.kst',
    path: 'M15.6 2c.35 2.7 1.86 4.32 4.4 4.49v3.84a7.52 7.52 0 0 1-4.32-1.36v6.58c0 4.2-2.44 6.45-6.08 6.45C6.32 22 4 19.9 4 16.94c0-3.24 2.5-5.4 6.17-5.4.35 0 .68.02 1 .08v3.9a3.7 3.7 0 0 0-1.03-.15c-1.42 0-2.27.62-2.27 1.68 0 1 .78 1.62 1.9 1.62 1.34 0 2.06-.73 2.06-2.25V2h3.77Z',
  },
]

const ideaText = 'En un mundo de ruido, las ideas son Lo más valioso'
const ideaWords = ideaText.split(' ')

function IdeaReveal() {
  const [ideaProgress, setIdeaProgress] = useState(0)
  const sectionRef = useRef(null)
  const frameRef = useRef(null)
  const lastYRef = useRef(0)
  const progressRef = useRef(0)
  const jumpRef = useRef(false)

  useEffect(() => {
    const updateIdeaProgress = () => {
      const section = sectionRef.current
      if (!section) return

      const scrollSpace = section.offsetHeight - window.innerHeight
      const nextProgress = scrollSpace > 0 ? -section.getBoundingClientRect().top / scrollSpace : 0
      const progress = Math.max(0, Math.min(1, nextProgress))
      const previousProgress = progressRef.current
      const scrollingDown = window.scrollY > lastYRef.current
      lastYRef.current = window.scrollY
      progressRef.current = progress

      setIdeaProgress(progress)

      if (progress < 0.98) jumpRef.current = false
      if (previousProgress < 0.98 && progress >= 0.98 && scrollingDown && !jumpRef.current) {
        jumpRef.current = true
        window.scrollTo({
          top: section.nextElementSibling?.offsetTop ?? section.offsetTop + section.offsetHeight,
          behavior: 'smooth',
        })
      }
    }

    const onScroll = () => {
      if (frameRef.current) return

      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null
        updateIdeaProgress()
      })
    }

    updateIdeaProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      cancelAnimationFrame(frameRef.current)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section className="idea-reveal" ref={sectionRef} aria-label="Frase principal">
      <div className="idea-sticky">
        <p className="idea-line" aria-label={ideaText}>
          {ideaWords.map((word, index) => {
            const revealCursor = ideaProgress * (ideaWords.length + 1)
            const wordProgress = Math.max(0, Math.min(1, revealCursor - index))
            const previewProgress = Math.max(0, Math.min(1, 1 - (index - revealCursor) / 3))
            const wordOpacity = wordProgress > 0 ? wordProgress : previewProgress * 0.08

            return (
              <span
                className="idea-word"
                aria-hidden="true"
                style={{
                  opacity: wordOpacity,
                  transform: `translateY(${(1 - Math.max(wordProgress, previewProgress)) * 0.38}em)`,
                }}
                key={`${word}-${index}`}
              >
                {word}
                {index < ideaWords.length - 1 ? ' ' : ''}
              </span>
            )
          })}
        </p>
      </div>
    </section>
  )
}

function WorkStory() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const activeIndexRef = useRef(0)
  const lockRef = useRef(false)
  const touchStartRef = useRef(0)

  useEffect(() => {
    const markers = sectionRef.current?.querySelectorAll('[data-work-marker]')
    if (!markers?.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.workMarker)
            if (Number.isInteger(index)) {
              setActiveIndex(Math.max(0, Math.min(workProjects.length - 1, index)))
            }
          }
        })
      },
      { threshold: 0.58 },
    )

    markers.forEach((marker) => observer.observe(marker))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    activeIndexRef.current = activeIndex
  }, [activeIndex])

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return undefined

    const isInsideWork = () => {
      const rect = section.getBoundingClientRect()
      return rect.top <= 8 && rect.bottom >= window.innerHeight - 8
    }

    const goToProject = (nextIndex) => {
      const index = Math.max(0, Math.min(workProjects.length - 1, nextIndex))
      if (index === activeIndexRef.current || lockRef.current) return false

      lockRef.current = true
      activeIndexRef.current = index
      setActiveIndex(index)
      window.scrollTo({
        top: section.offsetTop + index * window.innerHeight,
        behavior: 'smooth',
      })
      window.setTimeout(() => {
        lockRef.current = false
      }, 850)

      return true
    }

    const step = (direction) => goToProject(activeIndexRef.current + direction)

    const onWheel = (event) => {
      if (!isInsideWork() || Math.abs(event.deltaY) < 1) return
      if (step(event.deltaY > 0 ? 1 : -1)) event.preventDefault()
    }

    const onTouchStart = (event) => {
      touchStartRef.current = event.touches[0]?.clientY ?? 0
    }

    const onTouchMove = (event) => {
      if (!isInsideWork()) return

      const delta = touchStartRef.current - (event.touches[0]?.clientY ?? touchStartRef.current)
      if (Math.abs(delta) < 8) return
      if (step(delta > 0 ? 1 : -1)) event.preventDefault()
    }

    const onKeyDown = (event) => {
      if (!isInsideWork()) return

      const direction =
        event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' '
          ? 1
          : event.key === 'ArrowUp' || event.key === 'PageUp'
            ? -1
            : 0

      if (direction && step(direction)) event.preventDefault()
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: false })
    window.addEventListener('keydown', onKeyDown)

    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchmove', onTouchMove)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [])

  const activeProject = workProjects[activeIndex] ?? workProjects[0]
  const activeWord = activeProject?.word ?? ''

  return (
    <section
      className="work-story"
      id="marketing"
      ref={sectionRef}
      style={{ '--work-count': workProjects.length }}
      aria-label="Marketing, diseno grafico, edicion de video y proyecto personal"
    >
      <div
        className="work-sticky"
        style={{
          '--work-bg': activeProject.background,
          '--work-glow': activeProject.glow,
        }}
      >
        <div className="work-counter" aria-hidden="true">
          <span>{activeProject.number}</span>
          <span>/{String(workProjects.length).padStart(2, '0')}</span>
        </div>

        <div className="work-stage">
          {workProjects.map((project, index) => (
            <article
              className="work-project"
              data-status={
                index === activeIndex ? 'current' : index < activeIndex ? 'previous' : 'next'
              }
              aria-hidden={index !== activeIndex}
              key={project.number}
            >
              <div className="work-images" aria-hidden="true">
                {project.images.map((image) => (
                  <figure className={`work-asset ${image.className}`} key={image.src}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
              <div className="work-copy">
                <span className="work-eyebrow">{project.eyebrow}</span>
                <h2>
                  <a className="work-title-link" href={project.href}>
                    {project.title.map((line) => (
                      <span key={line}>{line}</span>
                    ))}
                  </a>
                </h2>
                <p>{project.subtitle}</p>
              </div>
            </article>
          ))}
          <p
            className="work-word"
            data-word={activeWord.toLowerCase()}
            aria-label={activeWord}
            key={activeWord}
          >
            {activeWord.toUpperCase().split('').map((letter, index) => (
              <span className="work-letter" aria-hidden="true" key={`${letter}-${index}`}>
                {letter}
              </span>
            ))}
          </p>
        </div>
      </div>

      <div className="work-markers" aria-hidden="true">
        {workProjects.map((project, index) => (
          <div className="work-marker" data-work-marker={index} key={project.number} />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [arrowProgress, setArrowProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => setArrowProgress(Math.min(window.scrollY / 700, 1))

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main className="home" aria-label="Cesar portfolio home">
      <nav className="top-nav" aria-label="Navegacion principal">
        <a className="brand" href="/" aria-label="Cesar portfolio">
          Cesar
        </a>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a
              className="social-link"
              href={link.href}
              aria-label={link.label}
              key={link.label}
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={link.path} />
              </svg>
            </a>
          ))}
        </div>
      </nav>

      <section className="stage">
        <div className="frame-wrap">
          <span className="frame-shape" aria-hidden="true" />
          <div className="frame" aria-label="Vista previa del portfolio">
            <DotLottieReact
              className="preview"
              src={previewAnimation}
              loop
              autoplay
              aria-label="Animacion de muestra"
            />
          </div>
        </div>

        <div className="portfolio-bar">
          <p className="signature">Cesar portfolio 2026</p>
          <button className="slide-button" type="button" aria-label="Deslizar">
            <span>Deslizar</span>
          </button>
        </div>

        <span
          className="scroll-arrow"
          style={{
            opacity: 1 - arrowProgress,
            transform: `translateX(-50%) translateY(${-arrowProgress * 230}px)`,
          }}
          aria-hidden="true"
        >
          <span className="scroll-arrow-mark" />
        </span>
      </section>

      <IdeaReveal />
      <WorkStory />
    </main>
  )
}

import { useCallback, useEffect, useRef, useState } from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

const previewAnimation =
  'https://lottie.host/46b24b39-3cd1-42a4-9a6f-2e97122fc30b/oqyYEQeYOQ.json'

const workProjects = [
  {
    number: '01',
    href: '/marketing',
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
    title: ['Diseño', 'gráfico'],
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
        alt: 'Estudio de diseño con escritorio y pared visual',
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

const marketingPanels = [
  {
    variant: 'intro',
    cta: 'Contáctame',
    title: 'Marketing integral',
    text: [
      'Te damos la bienvenida a una seccion creada para presentar estrategia, contenido y piezas visuales con una navegacion inmersiva, horizontal y fluida.',
      'Cada bloque funciona como una parada de campana: imagen protagonista, mensaje directo y una transicion suave hacia el siguiente momento.',
    ],
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80',
    alt: 'Estudio moderno con mesas de trabajo y luz natural',
  },
  {
    variant: 'feature',
    kicker: 'Estrategia',
    title: 'Ideas que entran rapido',
    text: 'Campanas con ritmo, jerarquia clara y piezas preparadas para que el mensaje se entienda en segundos sin perder caracter.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1100&q=80',
    alt: 'Equipo creativo revisando una campana',
    detailAlt: 'Panel de datos digitales',
  },
  {
    variant: 'feature',
    kicker: 'Contenido',
    title: 'Sistema visual flexible',
    text: 'Bloques grandes, amarillo principal y fondos oscuros para mantener la personalidad de la web mientras el contenido respira.',
    image:
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1100&q=80',
    alt: 'Arquitectura geometrica de colores intensos',
    detailAlt: 'Mesa de trabajo con material de marketing',
  },
  {
    variant: 'feature',
    kicker: 'Activacion',
    title: 'Campanas en movimiento',
    text: 'La experiencia se abre como una ventana inmersiva y vuelve atras sin salir de la pagina, manteniendo la navegacion centrada en Marketing.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80',
    detailImage:
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1100&q=80',
    alt: 'Portatil con trabajo creativo',
    detailAlt: 'Estudio de diseño con escritorio y pared visual',
  },
]

const koustSections = [
  {
    kicker: 'Identidad',
    title: 'Negro base, amarillo golpe.',
    text: 'Koust puede presentarse con una entrada directa: marca grande, mucho contraste y mensajes cortos para que cada bloque se sienta como una pieza de campana.',
    image: '/koust/Propuesta-Koust-2.png',
    alt: 'Propuesta editorial Just Create de Koust',
  },
  {
    kicker: 'Contenido',
    title: 'Espacio para producto, texto e imagen.',
    text: 'La estructura deja hueco para editoriales, renders, fotos de producto o manifiesto de marca sin romper el ritmo de la ventana.',
    image: '/koust/3(4).png',
    alt: 'Tres modelos con camisetas negras de Koust',
  },
  {
    kicker: 'Sistema',
    title: 'Secciones con entrada suave.',
    text: 'Cada bloque entra con transicion, contraste alto y composiciones alternas para que el scroll no parezca una pagina estatica.',
    image: '/koust/Grafiti7.png',
    alt: 'Editorial con camisetas blancas de Koust',
  },
]

const koustGalleryImages = [
  '1(4).png',
  'Grafiti1.png',
  '3(4).png',
  '2(7).png',
  '2(4).png',
  'Grafiti7.png',
  '1(5).png',
  'Grafiti5.png',
  '1(6).png',
  'Grafiti3.png',
  '3(5).png',
  '3(7).png',
  '4(6).png',
  'Grafiti10.png',
  '4(4).png',
  'Grafiti8.png',
  '2(5).png',
  'Grafiti2.png',
  '3(6).png',
  'Grafiti6.png',
  '4(5).png',
  'Grafiti9.png',
  '2(6).png',
  'Grafiti4.png',
  '4(7).png',
  '5(6).png',
  '5(4).png',
  'Grafiti7.png',
  '5(5).png',
  'Grafiti1.png',
  '6(3).png',
  '6(4).png',
  '1(7).png',
]

const koustGalleryItems = koustGalleryImages.map((image) => ({
  src: `/koust/${image}`,
  alt: `Imagen editorial Koust ${image}`,
}))

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

const ideaText = 'En un mundo de ruido, las ideas son Lo Más Valioso'
const topNavLinks = [
  { label: 'Marketing', href: '#marketing' },
  { label: 'Diseño gráfico', href: '#diseno-grafico' },
  { label: 'Edición de vídeo', href: '#edicion-video' },
  { label: 'Proyecto personal', href: '#proyecto-personal' },
]

const ideaWords = ideaText.split(' ')

function IdeaReveal() {
  const [ideaProgress, setIdeaProgress] = useState(0)
  const sectionRef = useRef(null)
  const frameRef = useRef(null)

  useEffect(() => {
    const updateIdeaProgress = () => {
      const section = sectionRef.current
      if (!section) return

      const scrollSpace = section.offsetHeight - window.innerHeight
      const nextProgress = scrollSpace > 0 ? -section.getBoundingClientRect().top / scrollSpace : 0
      setIdeaProgress(Math.max(0, Math.min(1, nextProgress)))
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

function MarketingGallery({ isOpen, onClose }) {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isClosing, setIsClosing] = useState(false)
  const scrollRef = useRef(null)
  const targetScrollRef = useRef(0)
  const frameRef = useRef(null)
  const wheelListenerRef = useRef(null)
  const wheelMoveRef = useRef(null)
  const closeTimerRef = useRef(null)

  const animateGallery = () => {
    const element = scrollRef.current
    if (!element) return

    if (frameRef.current) return

    const tick = () => {
      const distance = targetScrollRef.current - element.scrollLeft
      element.scrollLeft += distance * 0.14

      if (Math.abs(distance) > 0.45) {
        frameRef.current = requestAnimationFrame(tick)
        return
      }

      element.scrollLeft = targetScrollRef.current
      frameRef.current = null
    }

    frameRef.current = requestAnimationFrame(tick)
  }

  const moveGallery = (delta) => {
    const element = scrollRef.current
    if (!element) return

    const maxScroll = element.scrollWidth - element.clientWidth
    targetScrollRef.current = Math.max(0, Math.min(maxScroll, targetScrollRef.current + delta))
    animateGallery()
  }

  wheelMoveRef.current = moveGallery

  const setScrollElement = useCallback((node) => {
    if (scrollRef.current && wheelListenerRef.current) {
      scrollRef.current.removeEventListener('wheel', wheelListenerRef.current)
    }

    scrollRef.current = node

    if (!node) {
      wheelListenerRef.current = null
      return
    }

    const listener = (event) => {
      event.preventDefault()
      wheelMoveRef.current?.(event.deltaY + event.deltaX)
    }

    wheelListenerRef.current = listener
    node.addEventListener('wheel', listener, { passive: false })
  }, [])

  const closeGallery = useCallback(() => {
    if (isClosing) return

    setIsClosing(true)
    closeTimerRef.current = window.setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 260)
  }, [isClosing, onClose])

  useEffect(() => {
    if (isOpen) setIsClosing(false)

    return () => {
      window.clearTimeout(closeTimerRef.current)
    }
  }, [isOpen])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape') closeGallery()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeGallery])

  useEffect(() => {
    if (!isOpen || !scrollRef.current) return undefined

    const element = scrollRef.current
    const updateProgress = () => {
      const maxScroll = element.scrollWidth - element.clientWidth
      if (!frameRef.current) targetScrollRef.current = element.scrollLeft
      setScrollProgress(maxScroll > 0 ? element.scrollLeft / maxScroll : 0)
    }

    element.scrollLeft = 0
    targetScrollRef.current = 0
    updateProgress()
    element.addEventListener('scroll', updateProgress, { passive: true })
    window.addEventListener('resize', updateProgress)

    return () => {
      cancelAnimationFrame(frameRef.current)
      frameRef.current = null
      element.removeEventListener('scroll', updateProgress)
      window.removeEventListener('resize', updateProgress)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className={`marketing-gallery-shell${isClosing ? ' is-closing' : ''}`}>
      <div
        className="marketing-gallery-scroll"
        ref={setScrollElement}
        role="dialog"
        aria-modal="true"
        aria-label="Galeria del proyecto"
      >
        <div className="marketing-gallery-actions">
          <button className="marketing-gallery-back" type="button" onClick={closeGallery}>
            <span aria-hidden="true">←</span>
            Atrás
          </button>
          <a
            className="marketing-gallery-link"
            href={socialLinks[0].href}
            target="_blank"
            rel="noreferrer"
          >
            {marketingPanels[0].cta}
          </a>
        </div>

        <div className="marketing-gallery-progress" aria-hidden="true">
          <span style={{ transform: `scaleX(${Math.max(0.05, scrollProgress)})` }} />
        </div>

        <div className="marketing-gallery-track">
          {marketingPanels.map((panel) => (
            <article
              className={`marketing-gallery-panel marketing-gallery-panel-${panel.variant}`}
              key={panel.title}
            >
              {panel.variant === 'intro' ? (
                <>
                  <button className="marketing-gallery-image" type="button" aria-label={panel.alt}>
                    <img src={panel.image} alt="" loading="lazy" />
                    <span className="marketing-gallery-zoom" aria-hidden="true">↗</span>
                  </button>
                  <div className="marketing-gallery-copy">
                    <h2>{panel.title}</h2>
                    {panel.text.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <img className="marketing-gallery-bg" src={panel.image} alt="" loading="lazy" />
                  <div className="marketing-gallery-copy">
                    <span>{panel.kicker}</span>
                    <h2>{panel.title}</h2>
                    <p>{panel.text}</p>
                  </div>
                  <button
                    className="marketing-gallery-detail"
                    type="button"
                    aria-label={panel.detailAlt}
                  >
                    <img src={panel.detailImage} alt="" loading="lazy" />
                  </button>
                </>
              )}
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

function PersonalProject({ isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false)
  const [isCarouselDragging, setIsCarouselDragging] = useState(false)
  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0)
  const [zoomedItem, setZoomedItem] = useState(null)
  const [carouselCursor, setCarouselCursor] = useState({ visible: false, x: 0, y: 0 })
  const carouselItems = [...koustGalleryItems, ...koustGalleryItems, ...koustGalleryItems]
  const carouselWrapRef = useRef(null)
  const carouselRef = useRef(null)
  const carouselTrackRef = useRef(null)
  const carouselStateRef = useRef({
    index: koustGalleryItems.length,
    translate: 0,
    timer: null,
  })
  const carouselDragRef = useRef({
    isDragging: false,
    pointerId: null,
    moved: false,
    itemIndex: null,
    startX: 0,
    startTranslate: 0,
  })
  const carouselClickRef = useRef(false)
  const closeTimerRef = useRef(null)

  const closeProject = useCallback(() => {
    if (isClosing) return

    setIsClosing(true)
    closeTimerRef.current = window.setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, 260)
  }, [isClosing, onClose])

  useEffect(() => {
    if (isOpen) setIsClosing(false)

    return () => {
      window.clearTimeout(closeTimerRef.current)
    }
  }, [isOpen])

  const getCarouselTranslate = useCallback((index) => {
    const carousel = carouselRef.current
    const track = carouselTrackRef.current
    const card = track?.querySelectorAll('.personal-project-card')[index]

    if (!carousel || !card) return carouselStateRef.current.translate

    return carousel.clientWidth / 2 - (card.offsetLeft + card.offsetWidth / 2)
  }, [])

  const moveCarouselToLoopIndex = useCallback((index, animate = true) => {
    const track = carouselTrackRef.current
    if (!track) return

    const count = koustGalleryItems.length
    const maxIndex = carouselItems.length - 1
    const nextIndex = Math.max(0, Math.min(maxIndex, index))
    const translate = getCarouselTranslate(nextIndex)

    window.clearTimeout(carouselStateRef.current.timer)
    carouselStateRef.current.index = nextIndex
    carouselStateRef.current.translate = translate
    track.style.transitionDuration = animate ? '800ms' : '0ms'
    track.style.transform = `translate3d(${translate}px, 0, 0)`
    setActiveCarouselIndex(nextIndex % count)

    if (!animate) return

    carouselStateRef.current.timer = window.setTimeout(() => {
      const currentIndex = carouselStateRef.current.index
      const normalizedIndex = count + (currentIndex % count)
      if (currentIndex !== normalizedIndex) {
        moveCarouselToLoopIndex(normalizedIndex, false)
      }
    }, 820)
  }, [carouselItems.length, getCarouselTranslate])

  const moveCarouselTo = useCallback((index) => {
    const count = koustGalleryItems.length
    const currentIndex = carouselStateRef.current.index
    const currentOriginalIndex = currentIndex % count
    let delta = index - currentOriginalIndex

    if (delta > count / 2) delta -= count
    if (delta < -count / 2) delta += count

    moveCarouselToLoopIndex(currentIndex + delta)
  }, [moveCarouselToLoopIndex])

  useEffect(() => {
    if (!isOpen) return undefined

    const resetCarousel = () => {
      const count = koustGalleryItems.length
      moveCarouselToLoopIndex(count + (carouselStateRef.current.index % count), false)
    }

    const frame = window.requestAnimationFrame(resetCarousel)
    window.addEventListener('resize', resetCarousel)

    return () => {
      window.cancelAnimationFrame(frame)
      window.clearTimeout(carouselStateRef.current.timer)
      window.removeEventListener('resize', resetCarousel)
    }
  }, [isOpen, moveCarouselToLoopIndex])

  const updateCarouselCursor = useCallback((event) => {
    const wrap = carouselWrapRef.current
    if (!wrap || event.pointerType !== 'mouse') return

    const rect = wrap.getBoundingClientRect()
    setCarouselCursor({
      visible: true,
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    })
  }, [])

  const startCarouselDrag = useCallback((event) => {
    if (event.button !== 0) return

    const carousel = carouselRef.current
    if (!carousel) return

    const card = event.target.closest('.personal-project-card')
    carouselDragRef.current = {
      isDragging: true,
      pointerId: event.pointerId,
      moved: false,
      itemIndex: card ? Number(card.dataset.carouselIndex) : null,
      startX: event.clientX,
      startTranslate: carouselStateRef.current.translate,
    }
    carousel.setPointerCapture(event.pointerId)
    setIsCarouselDragging(true)
  }, [])

  const moveCarouselDrag = useCallback((event) => {
    const carousel = carouselRef.current
    const drag = carouselDragRef.current
    if (!carousel || !drag.isDragging || drag.pointerId !== event.pointerId) return

    event.preventDefault()
    drag.moved = drag.moved || Math.abs(event.clientX - drag.startX) > 5
    carouselStateRef.current.translate = drag.startTranslate + event.clientX - drag.startX

    const track = carouselTrackRef.current
    if (track) {
      track.style.transitionDuration = '0ms'
      track.style.transform = `translate3d(${carouselStateRef.current.translate}px, 0, 0)`
    }
  }, [])

  const stopCarouselDrag = useCallback((event) => {
    const drag = carouselDragRef.current
    if (drag.pointerId !== null && event?.pointerId !== drag.pointerId) return
    if (!drag.isDragging) return

    if (!drag.moved && Number.isInteger(drag.itemIndex)) {
      setZoomedItem(koustGalleryItems[drag.itemIndex])
    }

    if (drag.moved) {
      const firstCard = carouselTrackRef.current?.querySelector('.personal-project-card')
      const slideWidth = firstCard?.offsetWidth || 1
      const delta = carouselStateRef.current.translate - drag.startTranslate
      let steps = Math.round(-delta / slideWidth)

      if (steps === 0 && Math.abs(delta) > 24) {
        steps = delta < 0 ? 1 : -1
      }

      moveCarouselToLoopIndex(carouselStateRef.current.index + steps)
    }

    carouselClickRef.current = drag.moved
    window.setTimeout(() => {
      carouselClickRef.current = false
    }, 120)
    carouselDragRef.current = {
      isDragging: false,
      pointerId: null,
      moved: false,
      itemIndex: null,
      startX: 0,
      startTranslate: 0,
    }
    setIsCarouselDragging(false)
  }, [moveCarouselToLoopIndex])

  const openCarouselImage = useCallback((item) => {
    if (carouselClickRef.current) return
    setZoomedItem(item)
  }, [])

  useEffect(() => {
    if (!isOpen) return undefined

    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape' && zoomedItem) {
        setZoomedItem(null)
        return
      }

      if (event.key === 'Escape') closeProject()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, closeProject, zoomedItem])

  if (!isOpen) return null

  return (
    <div className={`personal-project-shell${isClosing ? ' is-closing' : ''}`}>
      <div
        className="personal-project-scroll"
        role="dialog"
        aria-modal="true"
        aria-label="Proyecto personal Koust"
      >
        <div className="personal-project-actions">
          <button className="personal-project-back" type="button" onClick={closeProject}>
            <span aria-hidden="true">←</span>
            Atras
          </button>
        </div>

        <section className="personal-project-hero" aria-label="Video principal de Koust">
          <video
            className="personal-project-video"
            src="/RTO-finalizado.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          <div className="personal-project-hero-copy">
            <p>K-O-U-S-T</p>
            <h2>Koust</h2>
          </div>
        </section>

        <section className="personal-project-intro">
          <p>
            Una ventana pensada para que la marca respire en negro y amarillo: primero impacto,
            despues narrativa, piezas visuales y bloques preparados para crecer con contenido real.
          </p>
        </section>

        <section className="personal-project-gallery" aria-label="Galeria visual de Koust">
          <div className="personal-project-gallery-copy">
            <span>Galeria</span>
            <h3>Muchas piezas, un mismo pulso.</h3>
            <p>
              Un carrusel pensado para campanas, producto, detalles, making of y visuales de marca.
            </p>
          </div>
          <div
            className="personal-project-carousel-wrap"
            ref={carouselWrapRef}
            onPointerMove={updateCarouselCursor}
            onPointerLeave={() => setCarouselCursor({ visible: false, x: 0, y: 0 })}
          >
            <button
              className="personal-project-carousel-nav personal-project-carousel-nav-prev"
              type="button"
              aria-label="Imagen anterior"
              onClick={() => moveCarouselTo(activeCarouselIndex - 1)}
            >
              <span aria-hidden="true">‹</span>
            </button>
            <div
              className={`personal-project-carousel${isCarouselDragging ? ' is-dragging' : ''}`}
              ref={carouselRef}
              aria-label="Carrusel de imagenes"
              onPointerDown={startCarouselDrag}
              onPointerMove={moveCarouselDrag}
              onPointerUp={stopCarouselDrag}
              onPointerCancel={stopCarouselDrag}
              onLostPointerCapture={stopCarouselDrag}
            >
              <div className="personal-project-carousel-track" ref={carouselTrackRef}>
                {carouselItems.map((item, index) => {
                  const itemIndex = index % koustGalleryItems.length

                  return (
                    <button
                      className="personal-project-card"
                      type="button"
                      aria-label={`Ampliar ${item.alt}`}
                      data-active={itemIndex === activeCarouselIndex}
                      data-carousel-index={itemIndex}
                      key={`${item.src}-${index}`}
                      onClick={() => openCarouselImage(item)}
                    >
                      <img src={item.src} alt={item.alt} loading="lazy" />
                    </button>
                  )
                })}
              </div>
            </div>
            <button
              className="personal-project-carousel-nav personal-project-carousel-nav-next"
              type="button"
              aria-label="Imagen siguiente"
              onClick={() => moveCarouselTo(activeCarouselIndex + 1)}
            >
              <span aria-hidden="true">›</span>
            </button>
            <span
              className={`personal-project-carousel-cursor${carouselCursor.visible ? ' is-visible' : ''}`}
              style={{ transform: `translate(${carouselCursor.x}px, ${carouselCursor.y}px)` }}
              aria-hidden="true"
            />
          </div>
        </section>

        <section className="personal-project-sections" aria-label="Estructura de contenido Koust">
          {koustSections.map((section, index) => (
            <article className="personal-project-section" key={section.title}>
              <div className="personal-project-copy">
                <span>{section.kicker}</span>
                <h3>{section.title}</h3>
                <p>{section.text}</p>
              </div>
              <figure className="personal-project-media">
                <img src={section.image} alt={section.alt} loading={index === 0 ? 'eager' : 'lazy'} />
              </figure>
            </article>
          ))}
        </section>
      </div>
      {zoomedItem ? (
        <button
          className="personal-project-zoom"
          type="button"
          aria-label="Cerrar imagen ampliada"
          onClick={() => setZoomedItem(null)}
        >
          <img src={zoomedItem.src} alt={zoomedItem.alt} />
        </button>
      ) : null}
    </div>
  )
}

function WorkStory({ isMarketingOpen, isPersonalOpen, onOpenMarketing, onOpenPersonal }) {
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
    if (!section || isMarketingOpen || isPersonalOpen) return undefined

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
  }, [isMarketingOpen, isPersonalOpen])

  const activeProject = workProjects[activeIndex] ?? workProjects[0]
  return (
    <section
      className="work-story"
      ref={sectionRef}
      style={{ '--work-count': workProjects.length }}
      aria-label="Marketing, diseño grafico, edicion de video y proyecto personal"
    >
      <div
        className="work-sticky"
        style={{
          '--work-bg': activeProject.background,
          '--work-glow': activeProject.glow,
        }}
      >
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
                <h2>
                  {project.number === '01' || project.number === '04' ? (
                    <button
                      className="work-title-link work-title-button"
                      type="button"
                      aria-label={
                        project.number === '01'
                          ? 'Abrir pieza destacada de marketing'
                          : 'Abrir proyecto personal Koust'
                      }
                      onClick={project.number === '01' ? onOpenMarketing : onOpenPersonal}
                    >
                      {project.title.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </button>
                  ) : (
                    <a className="work-title-link" href={project.href}>
                      {project.title.map((line) => (
                        <span key={line}>{line}</span>
                      ))}
                    </a>
                  )}
                </h2>
                <p>{project.subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="work-markers" aria-hidden="true">
        {workProjects.map((project, index) => (
          <div
            className="work-marker"
            id={project.href.slice(1)}
            data-work-marker={index}
            key={project.number}
          />
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [arrowProgress, setArrowProgress] = useState(0)
  const [isMarketingOpen, setIsMarketingOpen] = useState(false)
  const [isPersonalOpen, setIsPersonalOpen] = useState(false)

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
          César V.
        </a>
        <div className="section-links">
          {topNavLinks.map((link) => (
            <a className="section-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>
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
          <p className="signature">César portfolio 2026</p>
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
      <WorkStory
        isMarketingOpen={isMarketingOpen}
        isPersonalOpen={isPersonalOpen}
        onOpenMarketing={() => setIsMarketingOpen(true)}
        onOpenPersonal={() => setIsPersonalOpen(true)}
      />
      <MarketingGallery isOpen={isMarketingOpen} onClose={() => setIsMarketingOpen(false)} />
      <PersonalProject isOpen={isPersonalOpen} onClose={() => setIsPersonalOpen(false)} />
    </main>
  )
}

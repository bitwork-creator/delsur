'use client'

import { useState } from 'react'
import { Lang } from '@/lib/translations'

import Banner from '@/components/layout/Banner'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

import Hero from '@/components/sections/Hero'
import MarqueeSection from '@/components/sections/MarqueeSection'
import Manifesto from '@/components/sections/Manifesto'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Certifications from '@/components/sections/Certifications'
import Projects from '@/components/sections/Projects'
import Results from '@/components/sections/Results'
import About from '@/components/sections/About'
import FAQ from '@/components/sections/FAQ'
import ContactForm from '@/components/sections/ContactForm'
import CustomCursor from '@/components/ui/CustomCursor'

export default function Page() {
  const [lang, setLang] = useState<Lang>('es')
  const [bannerVisible, setBannerVisible] = useState(true)

  return (
    <>
      <CustomCursor />
      <Banner lang={lang} onDismiss={() => setBannerVisible(false)} />
      <Nav lang={lang} setLang={setLang} bannerVisible={bannerVisible} />

      <main>
        <Hero lang={lang} bannerVisible={bannerVisible} />
        <MarqueeSection />
        <div className="hidden md:block">
          <Manifesto lang={lang} />
        </div>
        <Services lang={lang} />
        <Process lang={lang} />
        <Certifications lang={lang} />
        <Projects lang={lang} />
        <Results lang={lang} />
        <About lang={lang} />
        <FAQ lang={lang} />
        <ContactForm lang={lang} />
      </main>

      <Footer lang={lang} />
    </>
  )
}

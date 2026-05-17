'use client'

import { useState } from 'react'
import { T, Lang } from '@/lib/translations'

interface Props { lang: Lang }

type Step = 0 | 1 | 2
type Need = 'web' | 'ads' | null

export default function ContactForm({ lang }: Props) {
  const t = T[lang].contact
  const [step, setStep] = useState<Step>(0)
  const [need, setNeed] = useState<Need>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const [form, setForm] = useState({
    name: '', business: '',
    phone: '', email: '',
    type: '', budget: '',
    campaigns: '', adBudget: '',
    message: '',
  })

  function handleChoice(choice: Need) {
    setNeed(choice)
    setStep(1)
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.name.trim() || !form.business.trim() || !form.phone.trim()) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ need, ...form, lang }),
      })
      if (!res.ok) throw new Error('Error sending')
      setStep(2)
    } catch {
      setError(lang === 'es'
        ? 'Algo salió mal. Intentá de nuevo o escribime por WhatsApp.'
        : 'Something went wrong. Try again or message me on WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  const waNumber = process.env.NEXT_PUBLIC_WA_NUMBER || '34XXXXXXXXX'
  const waUrl = `https://wa.me/${waNumber}`

  const inputStyle = {
    background: 'var(--warm)',
    border: '1px solid var(--border)',
    color: 'var(--ink)',
    width: '100%',
    padding: '12px 14px',
    fontSize: '14px',
    fontFamily: 'var(--font-dm-sans)',
    outline: 'none',
  } as React.CSSProperties

  const labelStyle = {
    display: 'block',
    fontFamily: 'var(--font-dm-sans)',
    fontSize: '12px',
    color: 'var(--mid)',
    marginBottom: '6px',
    textTransform: 'uppercase' as const,
    letterSpacing: '0.08em',
  }

  return (
    <section id="contacto" style={{ background: 'var(--warm)' }}>
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2
              className="font-oswald font-bold leading-tight mb-6"
              style={{ fontSize: 'clamp(40px, 6vw, 80px)', color: 'var(--ink)' }}
            >
              <span style={{ color: '#FF3319' }}>{t.title1}</span>{' '}
              {t.title2}
            </h2>
            <p className="font-dm font-light text-sm leading-relaxed mb-8" style={{ color: 'var(--mid)' }}>
              {lang === 'es'
                ? 'La auditoría es gratis. En 30 minutos te cuento exactamente qué necesita tu negocio.'
                : 'The audit is free. In 30 minutes I\'ll tell you exactly what your business needs.'}
            </p>
            {/* WhatsApp */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-dm text-sm"
              style={{ color: 'var(--mid)' }}
            >
              {t.whatsapp}
            </a>
          </div>

          {/* Right: Form */}
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px' }}>

            {/* Step 0: Choice */}
            {step === 0 && (
              <div>
                <p className="font-oswald font-medium text-xl mb-2" style={{ color: 'var(--ink)' }}>
                  {t.step0Title}
                </p>
                <p className="font-dm text-sm mb-8" style={{ color: 'var(--mid)' }}>
                  {t.step0Sub}
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { key: 'web' as Need, label: t.optionA, desc: t.optionADesc },
                    { key: 'ads' as Need, label: t.optionB, desc: t.optionBDesc },
                  ].map(opt => (
                    <button
                      key={opt.key}
                      onClick={() => handleChoice(opt.key)}
                      className="text-left p-5 border transition-colors hover:border-[#FF3319] group"
                      style={{ borderColor: 'var(--border)', background: 'var(--warm)' }}
                    >
                      <p className="font-oswald font-medium text-lg mb-1" style={{ color: 'var(--ink)' }}>
                        {opt.label}
                      </p>
                      <p className="font-dm text-sm" style={{ color: 'var(--mid)' }}>{opt.desc}</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Form */}
            {step === 1 && (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center gap-3 mb-6">
                  <button
                    type="button"
                    onClick={() => setStep(0)}
                    className="font-dm text-xs"
                    style={{ color: 'var(--mid)' }}
                  >
                    ← {lang === 'es' ? 'Volver' : 'Back'}
                  </button>
                  <span
                    className="font-dm text-xs px-2 py-0.5"
                    style={{ background: '#FF3319', color: '#fff' }}
                  >
                    {need === 'web' ? t.optionA : t.optionB}
                  </span>
                </div>

                <div className="space-y-4">
                  {need === 'web' ? (
                    <>
                      <div>
                        <label style={labelStyle}>{t.formWeb.name}</label>
                        <input name="name" required value={form.name} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formWeb.business}</label>
                        <input name="business" required value={form.business} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formWeb.phone}</label>
                        <input name="phone" type="tel" required value={form.phone} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formWeb.email}</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formWeb.type}</label>
                        <select name="type" value={form.type} onChange={handleChange} style={inputStyle}>
                          <option value="">—</option>
                          {t.formWeb.typeOpts.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formWeb.budget}</label>
                        <select name="budget" value={form.budget} onChange={handleChange} style={inputStyle}>
                          <option value="">—</option>
                          {t.formWeb.budgetOpts.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formWeb.message}</label>
                        <textarea name="message" rows={3} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label style={labelStyle}>{t.formAds.name}</label>
                        <input name="name" required value={form.name} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formAds.business}</label>
                        <input name="business" required value={form.business} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formAds.phone}</label>
                        <input name="phone" type="tel" required value={form.phone} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formAds.email}</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} style={inputStyle} />
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formAds.campaigns}</label>
                        <select name="campaigns" value={form.campaigns} onChange={handleChange} style={inputStyle}>
                          <option value="">—</option>
                          {t.formAds.campaignsOpts.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formAds.adBudget}</label>
                        <select name="adBudget" value={form.adBudget} onChange={handleChange} style={inputStyle}>
                          <option value="">—</option>
                          {t.formAds.adBudgetOpts.map(o => <option key={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label style={labelStyle}>{t.formAds.message}</label>
                        <textarea name="message" rows={3} value={form.message} onChange={handleChange} style={{ ...inputStyle, resize: 'vertical' }} />
                      </div>
                    </>
                  )}
                </div>

                {error && (
                  <p className="font-dm text-sm mt-4" style={{ color: '#FF3319' }}>{error}</p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-6 w-full py-4 font-dm font-medium text-sm transition-opacity disabled:opacity-60"
                  style={{ background: '#FF3319', color: '#fff' }}
                >
                  {loading ? '...' : t.submit}
                </button>
              </form>
            )}

            {/* Step 2: Success */}
            {step === 2 && (
              <div className="py-8">
                <p className="font-oswald font-bold text-3xl mb-4" style={{ color: 'var(--ink)' }}>
                  {t.success.title}
                </p>
                <p className="font-dm font-light text-sm leading-relaxed mb-6" style={{ color: 'var(--mid)' }}>
                  {t.success.body}
                </p>
                <p className="font-dm text-sm" style={{ color: 'var(--soft)' }}>
                  {t.success.sign}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

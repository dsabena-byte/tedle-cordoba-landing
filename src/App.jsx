import React from 'react'

export default function App() {
  const WHATSAPP_NUMBER = '5493510000000' // <-- reemplazar
  const REP_EMAIL = 'cordoba@tedle.net'   // <-- reemplazar
  const ADDRESS = 'Depósito Córdoba – Dirección a confirmar'
  const MAPS_LINK = 'https://maps.google.com' // <-- reemplazar

  // UTM: lee parámetros de la URL y los usa en WhatsApp + formulario
  const params = new URLSearchParams(window.location.search)
  const utm = {
    source: params.get('utm_source') || 'direct',
    medium: params.get('utm_medium') || 'none',
    campaign: params.get('utm_campaign') || 'none',
    term: params.get('utm_term') || '',
    content: params.get('utm_content') || '',
  }
  const utmString = `utm_source=${utm.source}&utm_medium=${utm.medium}&utm_campaign=${utm.campaign}${utm.term ? `&utm_term=${utm.term}`:''}${utm.content ? `&utm_content=${utm.content}`:''}`

  const baseText = 'Hola, soy instalador en Córdoba. Quiero lista mayorista de paneles Tier One.'
  const WA_TEXT = encodeURIComponent(`${baseText} | ${utmString}`)
  const WA_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_TEXT}`

  const handleSubmit = (e) => {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    // agrega UTM al body del mail
    fd.set('utm_source', utm.source)
    fd.set('utm_medium', utm.medium)
    fd.set('utm_campaign', utm.campaign)
    fd.set('utm_term', utm.term)
    fd.set('utm_content', utm.content)
    const payload = Object.fromEntries(fd.entries())
    const body = Object.entries(payload).map(([k,v]) => `${k}: ${v}`).join('%0D%0A')
    window.location.href = `mailto:${REP_EMAIL}?subject=Lead%20Córdoba%20-%20Tier%20One&body=${body}`
  }

  return (
    <div className=\"min-h-screen text-slate-900\">
      <a href={WA_LINK} className=\"fixed bottom-6 right-6 z-50 rounded-full shadow-xl px-5 py-3 text-sm font-semibold bg-green-600 text-white hover:opacity-90\">
        WhatsApp ahora
      </a>

      <header className=\"sticky top-0 z-30 backdrop-blur bg-white/80 border-b border-slate-200\">
        <div className=\"max-w-6xl mx-auto px-4 py-3 flex items-center justify-between\">
          <div className=\"flex items-center gap-3\">
            <div className=\"w-8 h-8 rounded-xl bg-slate-900\" />
            <span className=\"font-bold tracking-tight\">TEDLE · Córdoba</span>
          </div>
          <nav className=\"hidden md:flex items-center gap-6 text-sm\">
            <a href=\"#tierone\" className=\"hover:text-slate-600\">Por qué Tier One</a>
            <a href=\"#bundles\" className=\"hover:text-slate-600\">Bundles</a>
            <a href=\"#contacto\" className=\"hover:text-slate-600\">Contacto</a>
            <a href={WA_LINK} className=\"rounded-xl bg-green-600 text-white px-4 py-2 font-semibold hover:opacity-90\">WhatsApp</a>
          </nav>
        </div>
      </header>

      <section className=\"relative\">
        <div className=\"max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center\">
          <div>
            <div className=\"inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700\" id=\"tierone\">
              <span className=\"w-2 h-2 rounded-full bg-emerald-500\" /> STOCK LOCAL · PANEL TIER ONE
            </div>
            <h1 className=\"mt-4 text-4xl md:text-5xl font-extrabold leading-tight\">
              Paneles solares <span className=\"text-emerald-600\">Tier One</span> con <span className=\"underline decoration-emerald-300 decoration-4 underline-offset-4\">retiro inmediato</span> en Córdoba
            </h1>
            <p className=\"mt-4 text-slate-600 text-lg\">
              Abastecemos a instaladores y distribuidores con marcas bancables (Tier One) y soporte técnico local. Precios mayoristas, bundles listos y garantía de origen.
            </p>
            <div className=\"mt-6 flex flex-col sm:flex-row gap-3\">
              <a href={WA_LINK} className=\"rounded-2xl px-5 py-3 bg-emerald-600 text-white font-semibold shadow hover:opacity-90\">Cotizar por WhatsApp</a>
              <a href=\"#contacto\" className=\"rounded-2xl px-5 py-3 bg-white text-slate-900 font-semibold border border-slate-200 hover:bg-slate-50\">Solicitar lista mayorista</a>
            </div>
            <p className=\"mt-3 text-xs text-slate-500 max-w-lg\">
              *“Tier One” refiere a la clasificación de bancabilidad utilizada por BloombergNEF (empresas con historial de financiamiento en proyectos), no a un ranking de calidad del módulo.
            </p>
          </div>
          <div className=\"relative\">
            <div className=\"aspect-[4/3] rounded-3xl bg-gradient-to-tr from-slate-100 to-slate-200 shadow-inner flex items-center justify-center text-slate-500\" aria-label=\"Foto ilustrativa de paneles solares Tier One en depósito de Córdoba\">Imagen/Slider</div>
            <div className=\"absolute -bottom-4 -left-4 bg-white rounded-2xl shadow p-4 border border-slate-200\">
              <p className=\"text-xs font-semibold\">Diferencial Córdoba</p>
              <ul className=\"text-xs text-slate-600 list-disc ml-4 mt-1 space-y-1\">
                <li>Retiro en 2 h</li>
                <li>Precios por volumen</li>
                <li>Capacitaciones in-situ</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className=\"py-8 border-y border-slate-200 bg-white/60\">
        <div className=\"max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center\">
          <div className=\"text-sm font-semibold text-slate-600\">Risen</div>
          <div className=\"text-sm font-semibold text-slate-600\">Amerisolar</div>
          <div className=\"text-sm font-semibold text-slate-600\">Trina</div>
          <div className=\"text-sm font-semibold text-slate-600\">JA Solar / LONGi</div>
        </div>
      </section>

      <section className=\"max-w-6xl mx-auto px-4 py-14 grid md:grid-cols-3 gap-6\">
        {[
          {t:'Tier One verificable', d:'Marcas con historial de financiamiento en proyectos de gran escala. Documentación y trazabilidad disponibles.'},
          {t:'Stock y logística local', d:'Retiro inmediato en Córdoba o envíos 24/48 h a provincias cercanas.'},
          {t:'Soporte técnico B2B', d:'Asesoramiento para dimensionamiento, compatibilidades e instalación.'},
        ].map((f,i)=>(
          <div key={i} className=\"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm\">
            <h3 className=\"font-bold text-lg\">{f.t}</h3>
            <p className=\"mt-2 text-slate-600 text-sm\">{f.d}</p>
          </div>
        ))}
      </section>

      <section id=\"bundles\" className=\"max-w-6xl mx-auto px-4 py-8\">
        <h2 className=\"text-2xl font-extrabold\">Bundles listos para instalar</h2>
        <p className=\"text-slate-600 mt-1\">Kits preconfigurados (panel + inversor + estructura). Precios mayoristas con descuento por retiro en depósito.</p>
        <div className=\"mt-6 grid md:grid-cols-3 gap-6\">
          {[
            { name: 'Residencial 3 kW', pts: ['8–10 paneles Tier One','Inversor on-grid 3 kW','Estructura aluminio','Cableado + conectores'], cta: 'Pedir lista' },
            { name: 'PyME 10 kW', pts: ['24–28 paneles Tier One','Inversor 10 kW trifásico','Estructura modular','Tableros y protecciones'], cta: 'Ver disponibilidad' },
            { name: 'Industrial 50 kW', pts: ['120–140 paneles Tier One','Inversores 2×25 kW','Ingeniería básica','Entrega programada'], cta: 'Agendar llamada' },
          ].map((b)=>(
            <div key={b.name} className=\"rounded-2xl border border-slate-200 bg-white p-6 shadow-sm flex flex-col\">
              <h3 className=\"font-bold text-lg\">{b.name}</h3>
              <ul className=\"mt-3 text-sm text-slate-600 list-disc ml-4 space-y-1\">
                {b.pts.map(p=> <li key={p}>{p}</li>)}
              </ul>
              <a href={WA_LINK} className=\"mt-4 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm font-semibold text-center hover:opacity-90\">{b.cta}</a>
            </div>
          ))}
        </div>
      </section>

      <section className=\"max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8\">
        <div>
          <h2 className=\"text-2xl font-extrabold\">Ubicación y retiro</h2>
          <p className=\"mt-2 text-slate-600\">{ADDRESS}</p>
          <div className=\"mt-3 flex gap-3\">
            <a href={MAPS_LINK} className=\"rounded-xl border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50\">Cómo llegar</a>
            <a href={WA_LINK} className=\"rounded-xl bg-emerald-600 text-white px-4 py-2 text-sm font-semibold hover:opacity-90\">Coordinar retiro</a>
          </div>
          <ul className=\"mt-4 text-sm text-slate-600 list-disc ml-4 space-y-1\">
            <li>Horarios: Lun–Vie 9:00–17:30</li>
            <li>Retiro en 2 h para pedidos confirmados</li>
            <li>Envíos 24/48 h a CBA, San Luis, Santa Fe, La Rioja</li>
          </ul>
        </div>
        <div className=\"rounded-2xl border border-slate-200 bg-white p-4\">
          <div className=\"aspect-[4/3] rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 text-sm\" aria-label=\"Mapa con ubicación del depósito en Córdoba\">Mapa / Foto del depósito</div>
        </div>
      </section>

      <section id=\"contacto\" className=\"max-w-6xl mx-auto px-4 py-12\">
        <div className=\"rounded-3xl border border-slate-200 bg-white p-6 md:p-10 shadow-sm\">
          <h2 className=\"text-2xl font-extrabold\">Solicitá tu lista mayorista</h2>
          <p className=\"text-slate-600 mt-1\">Completá el formulario y te contactamos en el día. También podés escribirnos por WhatsApp.</p>
          <form onSubmit={handleSubmit} className=\"mt-6 grid md:grid-cols-2 gap-4\">
            <input type=\"hidden\" name=\"utm_source\" value=\"\"></input>
            <input type=\"hidden\" name=\"utm_medium\" value=\"\"></input>
            <input type=\"hidden\" name=\"utm_campaign\" value=\"\"></input>
            <input type=\"hidden\" name=\"utm_term\" value=\"\"></input>
            <input type=\"hidden\" name=\"utm_content\" value=\"\"></input>

            <div className=\"flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Empresa</label>
              <input name=\"empresa\" required className=\"border border-slate-300 rounded-xl px-3 py-2\" placeholder=\"Nombre de tu empresa\"/>
            </div>
            <div className=\"flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Contacto</label>
              <input name=\"contacto\" required className=\"border border-slate-300 rounded-xl px-3 py-2\" placeholder=\"Tu nombre\"/>
            </div>
            <div className=\"flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Email</label>
              <input name=\"email\" type=\"email\" required className=\"border border-slate-300 rounded-xl px-3 py-2\" placeholder=\"tucorreo@empresa.com\"/>
            </div>
            <div className=\"flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Teléfono</label>
              <input name=\"telefono\" required className=\"border border-slate-300 rounded-xl px-3 py-2\" placeholder=\"Ej. 351 555-5555\"/>
            </div>
            <div className=\"flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Provincia / Localidad</label>
              <input name=\"localidad\" className=\"border border-slate-300 rounded-xl px-3 py-2\" placeholder=\"Córdoba capital / Villa María / Río Cuarto...\"/>
            </div>
            <div className=\"flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Tipo de proyecto</label>
              <select name=\"proyecto\" className=\"border border-slate-300 rounded-xl px-3 py-2\">
                <option>Residencial</option>
                <option>Comercial / PyME</option>
                <option>Industrial</option>
                <option>Agrícola</option>
              </select>
            </div>
            <div className=\"md:col-span-2 flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Volumen estimado mensual (kW o cantidad de paneles)</label>
              <input name=\"volumen\" className=\"border border-slate-300 rounded-xl px-3 py-2\" placeholder=\"Ej. 100 paneles / 30 kW\"/>
            </div>
            <div className=\"md:col-span-2 flex flex-col gap-2\">
              <label className=\"text-sm font-semibold\">Mensaje</label>
              <textarea name=\"mensaje\" className=\"border border-slate-300 rounded-xl px-3 py-2 min-h-[100px]\" placeholder=\"Contanos qué necesitás, plazos y marcas de preferencia\"/>
            </div>
            <div className=\"md:col-span-2 flex items-center gap-2 text-sm\">
              <input type=\"checkbox\" required className=\"w-4 h-4\" name=\"consentimiento\"/>
              <span>Acepto ser contactado con fines comerciales.</span>
            </div>
            <div className=\"md:col-span-2 flex gap-3\">
              <button type=\"submit\" className=\"rounded-2xl px-5 py-3 bg-slate-900 text-white font-semibold hover:opacity-90\">Enviar solicitud</button>
              <a href={WA_LINK} className=\"rounded-2xl px-5 py-3 bg-emerald-600 text-white font-semibold hover:opacity-90\">Hablar por WhatsApp</a>
            </div>
            <p className=\"md:col-span-2 text-xs text-slate-500 mt-2\">Protegemos tus datos. Respuesta dentro del mismo día hábil.</p>
          </form>
        </div>
      </section>

      <section className=\"max-w-6xl mx-auto px-4 pb-20\">
        <h2 className=\"text-2xl font-extrabold\">Preguntas frecuentes</h2>
        <div className=\"mt-4 grid md:grid-cols-3 gap-4\">
          {[
            {q:'¿Qué significa que un panel sea “Tier One”?', a:'Es una clasificación de bancabilidad (BloombergNEF) basada en el historial de financiamiento de proyectos. Indica fabricantes confiables; no es un ranking directo de calidad.'},
            {q:'¿Puedo retirar en el día?', a:'Sí, para pedidos confirmados ofrecemos retiro en 2 h en el depósito de Córdoba, sujeto a stock.'},
            {q:'¿Ofrecen bundles y descuentos por volumen?', a:'Sí, contamos con kits prearmados y condiciones preferenciales por cantidad. Consultá por WhatsApp para lista mayorista.'},
          ].map(i=>(
            <div key={i.q} className=\"rounded-2xl border border-slate-200 bg-white p-5\">
              <p className=\"font-bold\">{i.q}</p>
              <p className=\"mt-1 text-sm text-slate-600\">{i.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className=\"border-t border-slate-200 py-6 text-center text-xs text-slate-500\">
        © {new Date().getFullYear()} TEDLE – Córdoba. Paneles solares Tier One. Todos los derechos reservados.
      </footer>
    </div>
  )
}

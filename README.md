# Tedle Córdoba Landing (React + Tailwind + Vite) — UTM Ready

## Variables para personalizar
Editar en `src/App.jsx`:
- `WHATSAPP_NUMBER` (formato 549351XXXXXXX)
- `REP_EMAIL`
- `ADDRESS` y `MAPS_LINK`

## UTM tracking
- Lee `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` de la URL.
- **WhatsApp**: adjunta los UTM en el texto del mensaje (para tenerlos en el chat).
- **Formulario (mailto)**: incluye los UTM en el cuerpo del mail automáticamente.

## Deploy en Vercel
1. Importar repo → Detecta Vite.
2. Build: `npm run build`
3. Output: `dist`
4. Final URL de campaña de ejemplo:
   `https://tedle-cordoba.vercel.app/cordoba-paneles-solares-tier-one?utm_source=google&utm_medium=search&utm_campaign=cordoba_tier1&utm_term={keyword}&utm_content={adgroupid}-{creative}`

## Local
```bash
npm i
npm run dev
```

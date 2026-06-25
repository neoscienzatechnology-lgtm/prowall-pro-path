## Objetivo
Eliminar todas as referências a "imersão presencial", "treinamento presencial", e "3 dias" no hero, FAQ e metadados (que aparecem em links compartilhados).

## Alterações

### 1. `src/components/landing/HeroSection.tsx`
- Substituir badge `"Treinamento Presencial · 3 Dias"` por `"Curso Online Completo"`.

### 2. `src/components/landing/FAQSection.tsx`
- FAQ "Essa imersão é para iniciantes?" → `"Esse curso é para iniciantes?"` e trocar "imersão" por "curso" na resposta.
- FAQ "Em quanto tempo posso começar a trabalhar?" → resposta: trocar "após a imersão" por "após concluir o curso".
- FAQ "O evento é presencial?" → substituir por: `{ q: "O curso é online?", a: "Sim, 100% online. Você acessa as aulas de onde estiver, no seu ritmo, com material didático completo e suporte direto." }`.

### 3. `index.html` (meta tags — preview de links)
- `<title>` → `"Profissão ProWall | Curso Online de Instalação Profissional de Papel de Parede"`
- `<meta name="description">` → `"Aprenda instalação profissional de papel de parede com o Curso Online ProWall. Do zero ao avançado: técnica, acabamento, visão de mercado e uma profissão lucrativa."`
- `<meta name="keywords">` → remover "imersão presencial" e "curso profissionalizante presencial"; manter/incluir "curso online de papel de parede".
- JSON-LD: trocar `@type: "Event"` por `@type: "Course"`, atualizar `name` para "Profissão ProWall — Curso Online" e `description` para versão online.
- `og:title`, `twitter:title`, `og:description`, `twitter:description` → mesmas strings acima.

## Fora de escopo
Não tocar outros componentes nesta passada — somente os locais que ainda exibem "presencial / 3 dias / imersão".

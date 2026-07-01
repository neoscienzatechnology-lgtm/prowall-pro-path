## Plano: Vídeos na seção "Resultados Reais"

Você enviou 4 vídeos (Eduardo Gonçalves, Fabrício Shimidt, Rodrigo Novelli, Eduardo Duarte). Hoje a seção "Resultados Reais" (`TestimonialsSection.tsx`) tem 3 placeholders. Vou expandir para 4 e trocar os placeholders pelos vídeos reais.

### Passos
1. Upload dos 4 `.mp4` para o CDN via `lovable-assets create`, gerando pointers em `src/assets/testimonials/`:
   - `eduardo-goncalves.mp4.asset.json`
   - `fabricio-shimidt.mp4.asset.json`
   - `rodrigo-novelli.mp4.asset.json`
   - `eduardo-duarte.mp4.asset.json`
2. Em `src/components/landing/TestimonialsSection.tsx`:
   - Atualizar o array `testimonials` para 4 entradas com nome + URL do vídeo (role: "Instalador parceiro ProWall").
   - Trocar o grid de `md:grid-cols-3` para `md:grid-cols-2 lg:grid-cols-4`.
   - Substituir o bloco placeholder (ícone "Vídeo em breve") por `<video controls playsInline preload="metadata" className="w-full h-full object-cover">`.
3. Manter o CTA final para `https://pay.kiwify.com.br/gD2NoHl` intacto.

### Observação
A seção "Depoimentos em Vídeo" (`VideoTestimonialsSection.tsx`) que já tinha Fabrício/Cebola/Marcel fica como está — os novos 4 vídeos vão apenas para "Resultados Reais". Se quiser que eu remova/atualize a outra seção também, é só avisar.
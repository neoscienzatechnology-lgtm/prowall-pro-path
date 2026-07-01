Substituir os placeholders da seção "Depoimentos em Vídeo" pelos 3 vídeos enviados, hospedados no Lovable CDN.

### Vídeos recebidos
- Depoimento_Fabrício.mov → Fabrício
- Depoimeto_Cebola_1.mov → Cebola
- Depoimento_Marcel_1.mov → Marcel

### Passos

1. **Upload ao CDN Lovable**
   - Rodar `lovable-assets create` para cada um dos 3 vídeos direto de `/mnt/user-uploads/`.
   - Salvar pointers em `src/assets/testimonials/{fabricio,cebola,marcel}.mov.asset.json`.

2. **Atualizar `src/components/landing/VideoTestimonialsSection.tsx`**
   - Reduzir grid de 4 → 3 colunas (`sm:grid-cols-2 lg:grid-cols-3`).
   - Trocar array de placeholders pelos 3 depoimentos reais (nomes: Fabrício, Cebola, Marcel; role: "Aluno ProWall").
   - Substituir bloco placeholder por tag `<video>` com `controls`, `playsInline`, `preload="metadata"`, mantendo `aspect-[9/16]`.
   - Importar os 3 `.asset.json` e usar `asset.url` como `src`.

3. **Validação**
   - Conferir no preview que os 3 vídeos carregam e reproduzem em desktop e mobile, sem quebra de layout.

### Observação
Foram enviados 3 vídeos (o combinado eram 4). Se quiser adicionar o 4º depois, é só me enviar — mantenho o grid ajustável.
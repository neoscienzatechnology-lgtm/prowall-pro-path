## Plano: Substituir vídeos do Hero e VSL

Os dois arquivos enviados serão hospedados no CDN da Lovable e usados para substituir os embeds atuais do Google Drive.

### Mapeamento
- `Vídeo_1_-_landing_page_atualizado.mov` → **HeroSection** (vídeo da landing / topo)
- `Vídeo_2-_langing_page_atualizado.mov` → **VSLSection** (VSL principal)

### Passos
1. Fazer upload dos dois `.mov` para o CDN via `lovable-assets create`, gerando pointers em `src/assets/videos/hero-intro.mov.asset.json` e `src/assets/videos/vsl-main.mov.asset.json`.
2. Em `src/components/landing/HeroSection.tsx`: remover o `<iframe>` do Google Drive e usar `<video controls playsInline preload="metadata">` apontando para a URL do CDN do vídeo 1.
3. Em `src/components/landing/VSLSection.tsx`: mesma troca, usando a URL do CDN do vídeo 2.
4. Manter os containers/aspect-ratio existentes para não quebrar o layout.

### Observação técnica
Arquivos `.mov` com codec H.264/AAC tocam nativamente em Safari/Chrome/Edge. Se algum navegador não reproduzir, converto depois para `.mp4` (mesmo codec, só remux).
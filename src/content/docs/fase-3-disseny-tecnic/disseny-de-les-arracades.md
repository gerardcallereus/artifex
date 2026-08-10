---
title: "FASE 3: DISSENY TÈCNIC - Disseny de les arracades"
description: Guia de programació paramètrica 3D per al disseny d'arracades amb Tinkercad Codeblocks.
---

# FASE 3: DISSENY TÈCNIC - Disseny de les arracades

<div class="learning-objectives-box">
  <div class="box-title">Objectius d'aprenentatge</div>
  <ul>
    <li><strong>Pensament Computacional 3D:</strong> Utilitzar la programació per blocs per dissenyar formes tridimensionals precises.</li>
    <li><strong>Parametrització:</strong> Definir mesures exactes de radi, alçada, eixos i rotacions per a la col·lecció d'arracades.</li>
  </ul>
</div>

---

## 🧩 Què és Tinkercad Codeblocks?

<div class="custom-grid-2" style="align-items: center; gap: 1.5rem; margin: 1.5rem 0;">
  <div>
    <p class="text-md"><strong>Tinkercad Codeblocks</strong> és un entorn de modelat 3D paramètric. Funciona exactament com Scratch o Blockly: encaixes blocs acolorits de comandes (Afegeix forma, Moure, Girar, Repetir, Crear grup) per construir el model 3D de la teva arracada pas a pas.</p>
  </div>
  <div>
    <img src="/artifex/media/tinkercad_codeblocks_interface.png" alt="Interfície de Tinkercad Codeblocks" style="width: 100%; border-radius: 10px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);" />
    <em style="display: block; text-align: center; font-size: 0.85rem; color: #666; margin-top: 0.5rem;">Interfície de programació visual per blocs a Tinkercad Codeblocks</em>
  </div>
</div>

---

### 🎬 Videotutorials de Tinkercad Codeblocks

Per familiaritzar-te amb la programació 3D per blocs, pots seguir la proposta del teu **Pla Personal** o explorar la col·lecció de videotutorials pas a pas que trobaràs a continuació. Fes clic a qualsevol tutorial per desplegar el vídeo corresponent:

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 1: Primers passos
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/746983463" 
      title="Tutorial 1: Primers passos" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 2: Moure elements
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/619848988?h=6319ec02b9" 
      title="Tutorial 2: Moure elements" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 3: Desplaçament de figures
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/746983549" 
      title="Tutorial 3: Desplaçament de figures" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 4: Rotar elements
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/619849223?h=b1e55ff20c" 
      title="Tutorial 4: Rotar elements" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 5: Rotacions precises
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/746983749" 
      title="Tutorial 5: Rotacions precises" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 6: Modelar polígons
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/619848940?h=a4cdca3342" 
      title="Tutorial 6: Modelar polígons" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 7: Combinar elements i afegir text
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/619848855?h=11ca6ad8b1" 
      title="Tutorial 7: Combinar elements i afegir text" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

<details style="background: rgba(193, 40, 114, 0.03); border: 1px solid rgba(193, 40, 114, 0.2); border-radius: 8px; margin-bottom: 0.75rem; padding: 0.75rem 1rem;">
  <summary style="font-weight: 700; font-size: 1.05rem; cursor: pointer; color: var(--sl-color-accent-high);">
    🎥 Tutorial 8: Repetir patrons
  </summary>
  <div style="margin-top: 1rem;">
    <iframe 
      src="https://player.vimeo.com/video/619849098?h=c929b8a1bc" 
      title="Tutorial 8: Repetir patrons" 
      frameborder="0" 
      allow="autoplay; fullscreen; picture-in-picture" 
      allowfullscreen 
      style="width: 100%; aspect-ratio: 16/9; border-radius: 8px; border: 1px solid rgba(193, 40, 114, 0.2); box-shadow: 0 4px 15px rgba(0,0,0,0.1);"
    ></iframe>
  </div>
</details>

---

## 📌 Tasca 3: Arracada 3D Paramètrica (Tinkercad Blocs / Codeblocks)

Per a la tercera tasca del lliurament de Google Classroom, hauràs de crear el modelat 3D de la teva arracada utilitzant **exclusivament l'eina de Tinkercad Blocs (Codeblocks)**.  

⚠️ **Requisits obligatoris de la peça:**  
- **Sense eines clàssiques:** Tota la peça s'ha de programar paramètricament amb blocs de codi visuals (no es poden utilitzar les eines de disseny 3D tradicionals).  
- **Mida màxima d'arracada:** La mida de l'arracada **no pot ser més gran de 4 × 4 × 0,5 cm** (40 × 40 × 5 mm).


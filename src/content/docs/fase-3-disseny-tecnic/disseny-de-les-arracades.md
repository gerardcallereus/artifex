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

**Tinkercad Codeblocks** és un entorn de modelat 3D paramètric. Funciona exactament com Scratch o Blockly: encaixes blocs acolorits de comandes (Afegeix forma, Moure, Girar, Repetir, Crear grup) per construir el model 3D de la teva arracada pas a pas.

![Diagrama Tinkercad Codeblocks](/artifex/media/tinkercad_codeblocks_arracades.svg)

---

## 💡 Per què fem servir Codeblocks per dissenyar arracades?

1. **PRECISIÓ MIL·LIMÈTRICA:** Si l'arracada ha de mesurar exactament 24 mm de diàmetre i 2 mm de gruix, ho indiques al bloc i la màquina ho executa amb zero error.
2. **MODIFICACIÓ INSTANTÀNIA (Paramètrica):** Si vols provar com queda l'arracada amb 5 mm més o amb un altre forat, només has de canviar un número al codi i tot el model s'actualitza automàticament.
3. **CREACIÓ DEL PARELL D'ARRACADES (Duplicació simètrica):** Amb un bloc de bucle `Repetir (2 vegades)` i una translació a l'eix X, crees la parella d'arracades exactament idèntiques en un segon.
4. **FORAT PER AL GANXO:** Afegint una forma definida com a "Forat" i agrupant-la amb la base de l'arracada, l'ordinador realitza una operació booleana de resta perfecta per poder-hi passar el ganxo metàl·lic de la joia.

---

## 📐 Estructura del Codi d'una Arracada en 4 Passos

```text
[1. Afegeix Forma Base]  --> Cilindre / Polígon de la joia (Ex: R=12mm, H=2mm)
[2. Afegeix Forat Ganxo] --> Cilindre buit (Ex: R=1.5mm) desplaçat a la part superior (Y=9mm)
[3. Crea Grup]            --> Fusiona les formes i resta el forat automàticament
[4. Duplica i Mou]        --> Crea la segona arracada simètrica per al parell
```

---

## 📌 Tasca 3: Arracada 3D Paramètrica (Tinkercad Blocs / Codeblocks)

Per a la tercera tasca del lliurament de Google Classroom, hauràs de crear el modelat 3D de la teva arracada utilitzant **exclusivament l'eina de Tinkercad Blocs (Codeblocks)**.  

⚠️ **Requisits obligatoris de la peça:**  
- **Sense eines clàssiques:** Tota la peça s'ha de programar paramètricament amb blocs de codi visuals (no es poden utilitzar les eines de disseny 3D tradicionals).  
- **Mida màxima d'arracada:** La mida de l'arracada **no pot ser més gran de 4 × 4 × 0,5 cm** (40 × 40 × 5 mm).

💡 **Com aprendre a utilitzar Tinkercad Blocs?**  
Per familiaritzar-te amb la programació 3D per blocs, pots seguir la proposta del teu **Pla Personal** o fer un tastet interactiu guiat pas a pas a través de la següent presentació:  
➡️ **[Accedeix al Tastet de Tinkercad Blocs (Guia Genially)](https://view.genially.com/63e9fe297b59920018684b42)**

---

<div class="custom-card" style="margin: 2rem 0; padding: 1.25rem; border-left: 5px solid var(--sl-color-accent-high); background: rgba(193, 40, 114, 0.04); text-align: center;">
  <p class="text-md" style="margin: 0; font-weight: 700; color: var(--sl-color-accent-high);">
    ✏️ Connecta't a la classe de Tinkercad Classroom, obre l'editor de Codeblocks i lliura la teva arracada 3D paramètrica!
  </p>
</div>

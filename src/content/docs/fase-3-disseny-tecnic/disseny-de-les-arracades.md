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
    <li><strong>Operacions Booleanes (Unió i Forat):</b> Generar el volum de l'arracada i el forat funcional per penjar el ganxo de joieria.</li>
  </ul>
</div>

:::note[Programar el volum 3D]
**Tinkercad Codeblocks** combina el disseny 3D amb la programació. En lloc de moure objectes amb el ratolí a l'atzar, escrius el "codi" de la teva joia utilitzant blocs visuals.
:::

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

<div class="custom-card" style="margin: 2rem 0; padding: 1.25rem; border-left: 5px solid var(--sl-color-accent-high); background: rgba(193, 40, 114, 0.04); text-align: center;">
  <p class="text-md" style="margin: 0; font-weight: 700; color: var(--sl-color-accent-high);">
    ✏️ Accedeix a Tinkercad Codeblocks a l'ordinador del taller i programa el disseny 3D de la teva col·lecció d'arracades!
  </p>
</div>

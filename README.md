# 💼 Portfolio Personal – Mateo Velásquez Rodríguez

Este proyecto es un portafolio web personal construido con **Next.js** y **Tailwind CSS**, que destaca mis habilidades, formación y medios de contacto. El diseño es limpio, responsive y moderno, e incluye optimización de imágenes y secciones dinámicas.

## 🚀 Tecnologías utilizadas

- [Next.js](https://nextjs.org/) – Framework React para producción
- [React](https://reactjs.org/) – Biblioteca base para interfaces
- [Tailwind CSS](https://tailwindcss.com/) – Utilidades CSS
- [TypeScript](https://www.typescriptlang.org/) – Tipado estático

## 📁 Estructura del proyecto
src/
├── components/
│ ├── atoms/
│ ├── molecules/
│ ├── organisms/
│ └── templates/
├── public/
│ └── Mi-foto.png

- `atoms`: componentes básicos reutilizables (`Image`, `Text`, `Button`, `DataRange`, `HorizontalLine`, `Icon`, `Percentage`, `Title`)
- `molecules`: combinaciones simples de átomos (`AlignedText`, `BodyInfo`, `EducationJobCard`, `IconText`, `KnowledgeCard`, `LanguagePercentage`, `PopUp`, `PortfolioCard`, `SocialMediaIcon`)
- `organisms`: secciones separadas por organismo central, izquierdo y derecho
   - (`CentralSide`) -> (`EducationInfo`, `JobInfo`, `KnowledgeInfo`, `MainInfo`, `PortfolioInfo`)
   - (`LeftSide`) -> (`ExtraSkills`, `Frameworks`, `Languages`, `PersonalInfo`, `ProgrammingLanguages`)
   - (`RightSide`) -> (`SocialMedia`)
- `templates`: agrupacion de organismos dependiendo de su orientación
   - (`CentralSide`)
   - (`LeftSide`)
   - (`RightSide`)

# 🛠️ Cómo ejecutar el proyecto

- git clone https://github.com/tuusuario/portfolio-mateo.git
- yarn install
- yarn dev

# 📬 Contacto
Creado por Mateo Velásquez Rodríguez
📧 mateo19v@gmail.com

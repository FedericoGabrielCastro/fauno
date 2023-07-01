<p align="center">
    <img width=800 src="https://i.pinimg.com/originals/3d/3f/3f/3d3f3f0dd1da8401f90e775eb8325b49.gif" alt="logo" />
</p>

<hr width="100%"/>
<hr width="80%"/>
<hr width="60%"/>

<p align="center">
    <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
    <img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="next"/>
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="typescrip"/>
    <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm"/>
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="Css"/>
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind"/>
</p>

## 🛠️ Installation Steps

    git clone https://github.com/FedericoGabrielCastro/fauno.git
    cd fauno
    npm install
    npm run dev

---

<details>
<summary> 🏗️ <b><u>Architecture</u></b> <i style="color:gray">(Click to expand)</i> </summary>

-   📁[app/](src/) <i style="color:gray"> Contains all folders</i>
    -   📁[components/](src/components/) <i style="color:gray"> Contains the reusable components of the project.</i>
    -   📁[views/](src/views/) <i style="color:gray"> Contains view components that represent different pages or main sections of the application.</i>
    -   📁[service/](src/service/) <i style="color:gray"> Contains files related to external services or network communication, such as functions for making API requests or managing authentication.</i>
    -   📁[styles/](src/styles/) <i style="color:gray"> Contains files related to style configuration and global styles of the application.</i>
    -   📁[layout/](src/layout/) <i style="color:gray"> Contains page layout components that define the structure and organization of elements in the interface. (main, section, nav, footer)</i>

<br>
</details>

---

<details>
<summary> ✈️ <b><u>Routes</u></b> <i style="color:gray">(Click to expand)</i></summary>

-   🔓 Single Page.
    -   📌[/](/src/app/page.tsx) <i style="color:gray"> Home Page. </i>

<br>

</details>

---

<details>
<summary> 🐕‍🦺 <b><u>Service</u></b> <i style="color:gray">(Click to expand)</i> </summary>

-   📁[service/](src/service) <i style="color:gray"> Contains all Api manager</i>
    -   📁[Publications/](src/service/Publications/provider.tsx) <i style="color:gray"> Contains the Provider - JSON placeholder CRUD.</i>
        -   📁[useContextProvider/](src/service/Publications/hooks/useContextProvider/index.tsx) <i style="color:gray"> Enable to use Provider Publications.</i>
        -   📁[useFetchPublications/](src/service/Publications/hooks/useFetchPublications/index.tsx) <i style="color:gray"> GET - get publications.</i>
        -   📁[usePostPublications/](src/service/Publications/hooks/usePostPublications/index.tsx) <i style="color:gray"> POST - post publications.</i>
        -   📁[useUpdatePublications/](src/service/Publications/hooks/useUpdatePublications/index.tsx) <i style="color:gray"> PUT - put publications.</i>

<br>
</details>

---

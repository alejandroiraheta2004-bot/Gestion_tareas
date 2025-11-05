const container = document.getElementById("pokemon-container");

const firstBtn = document.getElementById("first");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const lastBtn = document.getElementById("last");

const nameInput = document.getElementById("nameFilter");
const idInput = document.getElementById("idFilter");
const typeInput = document.getElementById("typeFilter");
const searchBtn = document.getElementById("searchBtn");
const clearBtn = document.getElementById("clearBtn");

let offset = 0;
let limit = 15;
let totalPokemons = 0;

async function getPokemons() {
  try {
    let url = `http://localhost:3000/api/pokemons?offset=${offset}&limit=${limit}`;

    if (nameInput.value.trim())
      url += `&name=${nameInput.value.trim().toLowerCase()}`;
    if (idInput.value.trim()) url += `&id=${idInput.value.trim()}`;
    if (typeInput.value.trim()) url += `&type=${typeInput.value.trim()}`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data.ok) throw new Error("Error al obtener pokemons");

    totalPokemons = data.total;
    container.innerHTML = "";


    data.results.forEach((p) => {
      const card = document.createElement("div");
      card.className =
        "bg-white shadow-lg rounded-2xl p-4 text-center cursor-pointer hover:scale-105 transition-transform";
      card.innerHTML = `
          <img src="${p.sprite}" class="mx-auto w-32 h-32">
          <h2 class="text-xl font-semibold capitalize mt-2">${p.name}</h2>
          <p class="text-gray-600">Tipo: ${p.types.join(", ")}</p>
      `;

 
      card.addEventListener("click", () => showPokedex(p));

      container.appendChild(card);
    });

    prevBtn.disabled = offset === 0;
    firstBtn.disabled = offset === 0;
    nextBtn.disabled = offset + limit >= totalPokemons;
    lastBtn.disabled = offset + limit >= totalPokemons;
  } catch (error) {
    console.error(error);
  }
}


prevBtn.addEventListener("click", () => {
  if (offset >= limit) offset -= limit;
  getPokemons();
});
firstBtn.addEventListener("click", () => {
  offset = 0;
  getPokemons();
});
nextBtn.addEventListener("click", () => {
  if (offset + limit < totalPokemons) offset += limit;
  getPokemons();
});
lastBtn.addEventListener("click", () => {
  offset = Math.floor((totalPokemons - 1) / limit) * limit;
  getPokemons();
});

searchBtn.addEventListener("click", () => {
  offset = 0;
  getPokemons();
});
clearBtn.addEventListener("click", () => {
  nameInput.value = "";
  idInput.value = "";
  typeInput.value = "";
  offset = 0;
  getPokemons();
});

getPokemons();


function showPokedex(p) {
  const overlay = document.getElementById("pokedex-modal-overlay");
  const img = document.getElementById("pokedex-image");
  const nameEl = document.getElementById("pokedex-name");
  const idEl = document.getElementById("pokedex-id");
  const typesEl = document.getElementById("pokedex-types");
  const extraEl = document.getElementById("pokedex-extra");
  const imgPanel = document.getElementById("pokedex-image-panel");

  try {
imgPanel.className =
  "bg-red-400  flex justify-center items-center p-6 border-r-4 border-black";
  } catch (err) {}

  img.src = p.sprite || "";
  nameEl.textContent = p.name ? p.name.toUpperCase() : "";
  idEl.textContent = p.id ? `#${p.id}` : "";

  typesEl.innerHTML = `<strong>Tipo:</strong> ${p.types ? p.types.join(", ") : "Desconocido"}`;

  const abilities = p.abilities ? p.abilities.join(", ") : "Desconocidas";

  let statsHTML = "";
  if (p.stats && Array.isArray(p.stats)) {
    statsHTML =
      "<strong>Estadísticas:</strong><ul class='list-disc pl-5'>" +
      p.stats.map((s) => `<li>${s.stat}: ${s.base_stat}</li>`).join("") +
      "</ul>";
  }

  const weight = p.weight ? `${p.weight / 10} kg` : "Desconocido";
  const height = p.height ? `${p.height / 10} m` : "Desconocida";


  extraEl.innerHTML = `
    <div class="space-y-2 mt-4 ">
      <p><strong>Altura:</strong> ${height}</p>
      <p><strong>Peso:</strong> ${weight}</p>
      <p><strong>Habilidades:</strong> ${abilities}</p>
  `;

  overlay.classList.remove("hidden");
  overlay.classList.add("flex");
  const modal = overlay.querySelector(".max-w-3xl");
  modal.classList.remove("scale-0");
  modal.classList.add("scale-100");

  const closeBtn = document.getElementById("pokedex-close");
  closeBtn.onclick = () => closeModal(overlay);

  overlay.addEventListener(
    "click",
    (e) => {
      if (e.target === overlay) closeModal(overlay);
    },
    { once: true }
  );
}

function closeModal(overlay) {
  const modal = overlay.querySelector(".max-w-3xl");
  modal.classList.add("scale-0");
  setTimeout(() => {
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
  }, 200);
}
export const getPokemons = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 15;
    const offset = parseInt(req.query.offset) || 0;
    const { name, id, type } = req.query;

    let results = [];
    let total = 0;


    if (id || name) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id || name}`);
      if (!response.ok) {
        return res.status(404).json({ ok: false, message: "Pokémon no encontrado" });
      }

      const pokemon = await response.json();
      const speciesRes = await fetch(pokemon.species.url);
      const species = await speciesRes.json();

      results.push({
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon.sprites.other["official-artwork"].front_default,
        types: pokemon.types.map(t => t.type.name),
        abilities: pokemon.abilities.map(a => a.ability.name),
        height: pokemon.height,
        weight: pokemon.weight,
        stats: pokemon.stats.map(s => ({
          stat: s.stat.name,
          base_stat: s.base_stat
        })),
        description:
          species.flavor_text_entries.find(e => e.language.name === "es")?.flavor_text ||
          species.flavor_text_entries.find(e => e.language.name === "en")?.flavor_text ||
          "Sin descripción disponible.",
      });

      total = 1;
    } 

    else {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
      const data = await response.json();
      total = data.count;

      results = await Promise.all(
        data.results.map(async (p) => {
          const pokeRes = await fetch(p.url);
          const pokeData = await pokeRes.json();

          const speciesRes = await fetch(pokeData.species.url);
          const species = await speciesRes.json();

          return {
            id: pokeData.id,
            name: pokeData.name,
            sprite: pokeData.sprites.other["official-artwork"].front_default,
            types: pokeData.types.map(t => t.type.name),
            abilities: pokeData.abilities.map(a => a.ability.name),
            height: pokeData.height,
            weight: pokeData.weight,
            stats: pokeData.stats.map(s => ({
              stat: s.stat.name,
              base_stat: s.base_stat
            })),
            description:
              species.flavor_text_entries.find(e => e.language.name === "es")?.flavor_text ||
              species.flavor_text_entries.find(e => e.language.name === "en")?.flavor_text ||
              "Sin descripción disponible.",
          };
        })
      );
    }

    if (type) {
      results = results.filter(p => p.types.includes(type.toLowerCase()));
      total = results.length;
    }

    res.json({ ok: true, total, results });

  } catch (error) {
    console.error(error);
    res.status(500).json({ ok: false, message: "Error al obtener pokemons" });
  }
};


const express = require(`express`);
const app = express();
const port = 3000;
const appurl = `http://localhost:${port}`;

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({
    message: "Bevenuti nel mio Ristorante!",
  });
});
app.get("/bacheca", (req, res) => {
  const foods = [
    {
      name: "Ciambellone",
      description:
        "Il ciambellone perfetto da gustare in famiglia e facile da cucinare ",
      img: "/ciambellone.jpeg",
      ingridients: ["Uova", "Farina", "Zucchero"],
    },
    {
      name: "Pane Fritto Dolce",
      description:
        "La ricetta giusta per un pane fritto dolce così semplice e povero, ma di una bontà unica.",
      img: "/pane_fritto_dolce.jpeg",
      ingridients: ["Pane", "Uova", "Latte"],
    },
    {
      name: "Cracker Barbabietola",
      description:
        "I cracker alla barbabietola sono uno snack stuzzicante e originale da preparare in casa utilizzando ingredienti semplici e genuini. ",
      img: "/cracker_barbabietola.jpeg",
      ingridients: ["barbabietole precotte", "Farina di riso"],
    },
    {
      name: "Pasta Barbabietola",
      description:
        "è un primo piatto sano e velocissimo! Una ricetta saporita in 15 minuti e sfiziosa per cucinare le barbabietole rosse ricche di vitamine! ",
      img: "/pasta_barbabietola.jpeg",
      ingridients: ["barbabietole precotte", "Farina 00", "Uova"],
    },
    {
      name: "Torta Paesana",
      description:
        "La torta paesana, perfetta da gustare per una merenda dal sapore rustico",
      img: "/torta_paesana.jpeg",
      ingridients: ["Zucchero", "Arance", "Uova", "Uvetta"],
    },
  ];
  const responseData = {
    result: foods,
  };
  res.json(responseData);
});

app.listen(port, () => {
  console.log("sto ascoltando");
});

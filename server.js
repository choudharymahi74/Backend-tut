import express from "express";
const app = express();
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

const port = process.env.port || 3000;

//food items

app.get("/food",(req,res)=>{
    const food=[{
        id:1,
        title:'PIZZA'
    },

    {
        id:2,
        title:'BURGER'

    },
    {
        id:3,
        title:'PASTA'
    },
    {
        id:4,
        title:'FRIES'
    }
];

res.send(food);
});

app.listen(port, () => {
  console.log(`serve at https://localhost:${port}`);
});

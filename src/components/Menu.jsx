import Pizza from "./Pizza";
//fijamos un estado con useState, que en este caso son las pizzas, para que podamos quitar
import { useState, useEffect } from "react";
export default function Menu(){
//creando estado con la info de las pizzas
   const [pizzas, setPizzas] = useState([
    {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
])//fin del estado

//obteniendo datos del LocalStorage si existen, este hook es lanzado cuando se construye el componente
useEffect(() => {
    const data = localStorage.getItem("pizzas");
    if(data) setPizzas(JSON.parse(data));
}, [])

//fijar los datos o actualizarlos
useEffect(() => localStorage.setItem("pizzas", JSON.stringify(pizzas)), [pizzas]);

//función para borrar pizzas y actualizar el estado
const deletePizza = (pizzaName) => setPizzas( prev => prev.filter((pizza) => pizza.name !== pizzaName));
   console.log(pizzas);
    return(
        <main className="menu">
            <h2>Our menu</h2>
            {pizzas.length > 0 ?
            // esta etiqueta <> </> se conoce como fragment, y no se renderiza en la aplicación, nos sirve como contendor padre pero sin ser renderizada
            (<>
            <p>
                Authentic Italian cousine. 6 creatives dishes to choose from. All from our stone oven, all organic all delicious.
            </p>
            <ul className="pizzas">
                {pizzas.map((pizza) => {
                    return(
                        <Pizza pizzaObject={pizza} key={pizza.name} onDelete={deletePizza} />
                    ) 
                 })}
            </ul>
            </>):(
                <p>We're still working on our menu, Please come back later.</p>
            )}
        </main>
    );
}

/**
 *En programación, el estado se refiere a la información que un programa o un objeto necesita para funcionar y que se almacena en memoria. Este estado puede cambiar a medida que el programa se ejecuta, y define la condición actual del programa o de sus componentes.
 */

 /**
  * Algunos ejemplos de efectos secundarios:
Traer datos desde una API (fetch)
Escuchar eventos (como scroll o resize)
Usar setTimeout o setInterval
Manipular directamente el DOM
Guardar datos en localStorage
Limpiar recursos cuando el componente se desmonte
  */
//estilos con .module.css solo funcionan donde son importados
import style from './styles/pizza-style.module.css'
/*
 * Props
 one way data binding. Formas de pasar información de padre hacia el hijo. La información solo fluye de arriba hacia abajo. Son inmutables
 */
export default function Pizza({pizzaObject, onDelete}){
    return (
        //usando operador ternario para tener una clase condicional
        <li className={`${style.pizza} ${pizzaObject.soldOut ? style ["sold-out"] : ""}`}>
            <img src={pizzaObject.photoName} alt={pizzaObject.name} />
            <div>
                <h3>{pizzaObject.name}</h3>
                <p>{pizzaObject.ingredients}</p>
                <p>{pizzaObject.price}</p>
                <button onClick={() => onDelete(pizzaObject.name)}>Delete pizza 🗑️</button> 
            </div>
        </li>
    )
}

/**
 * En este caso el props es pizza.Object y cuando lo estoy pasando a los hijos siempre debe ir en {} ya que es la manera de escribir en JS
 */
import './index.css'
import tree from './assets/tree.jpg'

function Card(){
    return(
        <card>
            <div className="card">
                <img src={tree} alt="tree picture" />
                <h2>Sajan Limbu</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, asperiores explicabo soluta consequatur reiciendis repudiandae!</p>
            </div>
        </card>
    );
}

export default Card
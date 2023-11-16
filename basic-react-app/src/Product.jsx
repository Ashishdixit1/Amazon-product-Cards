import "./Product.css";
import Price from "./Price";
function Product({title , idx}){
    let oldPrices=["12,343","90,888","54,999","13,000"];
    let newPrices=["2,333","60,233","40,999","10,999"];
    let Description=[["8,000 DPI","5 Programmable buttons"],["Intuative surface","wireless"],["Designed for ipad Pro","wireless"],["wireless","optical oreientaion"]];
    return(
        <div className="Product">
            <h3>{title}</h3>
            <p>{Description[idx][0]}</p>
            <p>{Description[idx][1]}</p>

            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
    );
}
export default Product;
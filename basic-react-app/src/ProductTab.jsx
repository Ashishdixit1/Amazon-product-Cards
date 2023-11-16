import Product from "./Product";

function ProductTab(){
let styles={
    display:"flex",
    flexWrap:"wrap",
    
};
    return (
        <div style={styles}>
        <Product title="mx master" idx={0} />
        <Product title="Apple pencil 2nd zen" idx={1} />
        <Product title="Zebronics " idx={2}/>
        <Product title="Petronics " idx={3} />
        </div>
    )
}
export default ProductTab;
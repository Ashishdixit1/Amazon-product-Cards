export default function Price({oldPrice, newPrice}){
    let oldstyles ={
  textDecorationLine:"line-through",
    };
    let newStyle={
        fontWeight:"bold",
    }
    let style={
        backgroundColor:"#e0c367",
        height:"28px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px"

    }
return(
    <div style={style}>
        <span style={oldstyles}>{oldPrice}</span>
        &nbsp; 
        &nbsp; 
        &nbsp; 
        <span style={newStyle}>{newPrice}</span>
    </div>
);
}
import Drawer from "../Drawer";

const ShoppingCart = ({cartItemCount}) => {
   
    return ( 
        <>
       <Drawer textIcon imageHref="/images/icon/cart.svg" text="سبد خرید" chipNumber={cartItemCount} >
        dsds
       </Drawer>
        </>
     );
}
 
export default ShoppingCart;
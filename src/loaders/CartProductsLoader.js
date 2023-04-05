import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();

    // if cart data is in database, u have to use async await
    const storedCart = getShoppingCart();
    const savedCart = [];

    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);

        }
    }
    // console.log(storedCart);
    //  is u need to send two things use arry and receive and destructure
    // return [products, savedCart];
    return savedCart;
}

export default cartProductsLoader;
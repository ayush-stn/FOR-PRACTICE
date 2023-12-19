const Header = () => {
    return (
        <div className=" bg-red-400 rounded-full mx-3 ">
    <div>
        <div>
            <img  className=" rounded-full mx-10   my-10 w-auto h-10 "
            src="https://www.shutterstock.com/shutterstock/photos/1435134707/display_1500/stock-vector-pizza-logo-images-stock-vector-1435134707.jpg" 
            alt="pizza" />
        <div>
        <ul className=" flex space-x-44">
            <li className=" mx-44">Home</li>
            <li className="mx-44">About-us</li>
            <li className=" mx-44">login</li>
        </ul>
        </div>
        </div>
    </div>
        </div>
    )
}
export default Header;
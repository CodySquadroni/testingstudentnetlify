import classes from "./Header.module.css";
import spices from "../../assets/spices.jpg";

const Header = () => {
  return (
    <>
      <header className={classes.header}>
        <h1>Recipe App</h1>
      </header>
      <div className={classes.img}>
        <img src={spices} alt="Table with spices and garnishes" />
      </div>
    </>
  );
};

export default Header;

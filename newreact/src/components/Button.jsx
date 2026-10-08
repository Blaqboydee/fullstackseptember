import '../styles/Button.css'
import Hero from '../assets/Hero.png'
import styles from "../styles/Button.module.css"

function Button() {
  console.log(styles);
  
    const secondButtonStyles = {
        backgroundColor: "green",
        width: "150px",
        height: "50px",
        borderRadius: "40px",
    }
  return (
    <>
      <button
      style={{
        backgroundColor: "red",
        width: "200px",
        height: "40px",
        borderRadius: "40px",
      }}
    >
      Hello
    </button>

    <button style={secondButtonStyles}>Second Button</button>

    <button className="thirdButton">Third Button</button>
    <img src={Hero} alt="" />

    <button className={styles.button}>Button styled with module styling</button>

    <h3 className={styles.header}>This is header styled with Module Styling</h3>
    </>
  
  );
}

export default Button;

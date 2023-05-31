import style from "./CardComponent.module.css";

const CardComponent = (props) => {
  const { title, imgUrl } = props;
  const imgUrlDefault =
    "https://sm.ign.com/ign_br/screenshot/default/naruto-shippuden_zy11.jpg";

  return (
    <div className={style.div}>
      <h2 className={style.title}>{title ?? "Indefinido"}</h2>
      <img className={style.img} src={imgUrl ?? imgUrlDefault} alt="img" />
    </div>
  );
};

export default CardComponent;

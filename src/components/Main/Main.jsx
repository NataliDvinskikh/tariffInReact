import Tariff from "../Tariff/Tariff";
import style from "../Main/Main.module.sass";



export default function Main() {
  return (
    <div className={style.container}>
      <Tariff />
    </div>
  )
}

import Info from "../../data/Info.json";
import TariffItem from "../TariffItem/TariffItem";
import style from "../Tariff/Tariff.module.sass";
import { useState } from "react"

export default function Tariff() {

  function getColor(index) {
    if (index===0) {
      return "color1"
    } else if (index===1) {
      return "color2"
    } else if (index===2) {
      return "color3"
    } else if (index===3) {
      return "color4"
    }
  }

  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className={style.container} >
      {Info.map((item,index)=>(
        <TariffItem color = {getColor(index)} key={index} {...item} isSelected ={item.id === selectedId}
        handleSelect={() => setSelectedId(item.id)}/>
      ))}
    </div>
  )
}




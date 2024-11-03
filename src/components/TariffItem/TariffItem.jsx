

import { useState } from "react"
import  style from "../TariffItem/TariffItem.module.sass"


export default function TariffItem({color,id,name,price,speed,text, isSelected, handleSelect}) {



  return (
    <div  className={`${style.container} ${style[color]} ${
      isSelected ? style.checked : style.notChecked
    }`}
    onClick={handleSelect}>
      <h1 className={style.name}>{name}</h1>
      <p className={style.price}>{price}</p>
      <p className={style.speed}>{speed}</p>
      <p className={style.text}>{text}</p>
    </div>
  )
}

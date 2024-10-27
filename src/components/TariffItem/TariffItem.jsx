

import  style from "../TariffItem/TariffItem.module.sass"


export default function TariffItem({color,id,name,price,speed,text}) {
  return (
    <div className={`${style.container} ${style[color]}` }>
      <h1 className={style.name}>{name}</h1>
      <p className={style.price}>{price}</p>
      <p className={style.speed}>{speed}</p>
      <p className={style.text}>{text}</p>
    </div>
  )
}

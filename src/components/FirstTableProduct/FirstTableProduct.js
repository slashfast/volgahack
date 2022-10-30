import './FirstTableProduct.css'

const dataname = "Продукт"
const data = [
    { productid: " ",
    compname: " ",
    productname: " ", 
    subbranch: " ", 
    okpd2chapter: " " ,
    okpd2class: " ",
    okpd2subclass: " ",
    okpd2group: " ",
    okpd2subgroup: " ",
    okpd2view: " ",
    okpd2category: " ",
    okpd2subcategory: " ",
    okpd2description: " "},
  ]

export const FirstTableProduct = () => {
    return(
        <div className="page-content">
            <div className="company-name">{dataname}</div>
        <table className="tableproduct">
            {data.map((val, key) => {
                return (
                <thead>
                    <tr key={key}>
                        <th>ID Продукта</th>
                        <th>{val.productid}</th>
                    </tr>
                    <tr>
                        <th>Компания</th>
                        <th>{val.compname}</th>
                     </tr>
                     <tr>
                        <th>Рыночное наименование продукта</th>
                        <th>{val.productname}</th>
                     </tr>
                    <tr>
                        <th>Подотрасль</th>
                        <th>{val.subbranch}</th>
                    </tr>
                    <tr>
                        <th>Раздел (ОКПД 2)</th>
                        <th>{val.okpd2chapter}</th>
                     </tr>
                    <tr>
                        <th>Класс (ОКПД 2)</th>
                        <th>{val.okpd2class}</th>
                    </tr>
                     <tr>
                        <th>Подкласс (ОКПД 2)</th>
                        <th>{val.okpd2subclass}</th>
                     </tr>
                     <tr>
                        <th>Группа (ОКПД 2)</th>
                        <th>{val.okpd2group}</th>
                     </tr>
                     <tr>
                        <th>Подгруппа (ОКПД 2)</th>
                        <th>{val.okpd2subgroup}</th>
                    </tr>
                     <tr>
                        <th>Вид (ОКПД 2)</th>
                        <th>{val.okpd2view}</th>
                    </tr>
                    <tr>
                        <th>Категория (ОКПД 2)</th>
                        <th>{val.okpd2category}</th>
                     </tr>
                     <tr>
                        <th>Подкатегория (ОКПД 2)</th>
                        <th>{val.okpd2subcategory}</th>
                    </tr>
                    <tr>
                        <th>Описание продукта (с указанием конкретных характеристик)</th>
                        <th>{val.okpd2description}</th>
                    </tr>
                </thead>
                )
            })}
        </table>
    </div>
    )
}
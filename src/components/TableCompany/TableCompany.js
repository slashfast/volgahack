import './TableCompany.css'

const dataname = " "
const data = [
    { id: " ",
    compname: " ",
    branch: " ", 
    subbranch: " ", 
    firstleveloftechnology: " " ,
    secondleveloftechnology: " ",
    thrirdleveloftechnology: " ",
    site: " ",
    compdiscript: " "},
  ]

export const TableCompany = () => {
    return(
        <div className="page-content">
            <div className="company-name">{dataname}</div>
            <table className="tabletablecompany">
            <thead>
                <tr>
                    <th>ID Компании</th>
                    <th>Наименование компании</th>
                    <th>Отрасль</th>
                    <th>Подотрасль</th>
                    <th>1 уровень технологии</th>
                    <th>2 уровень технологии</th>
                    <th>3 уровень технологии</th>
                    <th>Сайт</th>
                    <th>Описание компании</th>
                </tr>
            </thead>
        {data.map((val, key) => {
            return (
                <tbody>
                    <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.compname}</td>
                        <td>{val.branch}</td>
                        <td>{val.subbranch}</td>
                        <td>{val.firstleveloftechnology}</td>
                        <td>{val.secondleveloftechnology}</td>
                        <td>{val.thrirdleveloftechnology}</td>
                        <td>{val.site}</td>
                        <td>{val.compdiscript}</td>
                    </tr>
                </tbody>
            )
        })}
      </table>
    </div>
    );
}
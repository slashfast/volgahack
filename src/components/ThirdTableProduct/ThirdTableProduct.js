import './ThirdTableProduct.css'

const data = [
    { id: " ",
    compname: " ", 
    firstleveloftechnology: " " ,
    secondleveloftechnology: " ",
    thrirdleveloftechnology: " ",},
  ]

export const ThirdTableProduct = () => {
    return(
        <div className="page-content">
            <table className="tabletablecompany">
            <thead>
                <tr>
                    <th>ID продукта</th>
                    <th>Создаваемые продукты</th>
                    <th>Технология (1 уровень)</th>
                    <th>Технология (2 уровень)</th>
                    <th>Технология (3 уровень)</th>
                </tr>
            </thead>
        {data.map((val, key) => {
            return (
                <tbody>
                    <tr key={key}>
                        <td>{val.id}</td>
                        <td>{val.compname}</td>
                        <td>{val.firstleveloftechnology}</td>
                        <td>{val.secondleveloftechnology}</td>
                        <td>{val.thrirdleveloftechnology}</td>
                    </tr>
                </tbody>
            )
        })}
      </table>
    </div>
    );
}
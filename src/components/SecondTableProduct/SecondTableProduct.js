import './SecondTableProduct.css'

const data = [
    { id: " ",
    compname: " ",
    branch: " ", 
    subbranch: " ",},
  ]

export const SecondTableProduct = () => {
    return(
        <div className="page-content">
            <table className="tabletablecompany">
            <thead>
                <tr>
                    <th>ID Продукта</th>
                    <th>Создаваемые продукты</th>
                    <th>Отрасль</th>
                    <th>Подотрасль</th>
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
                    </tr>
                </tbody>
            )
        })}
      </table>
    </div>
    );
}
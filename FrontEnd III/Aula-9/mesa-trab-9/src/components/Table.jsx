const Table = ({ scores }) => {
  return (
    <table border="1" className="line_title">
      <thead>
        <tr>
          <th>Disciplina</th>
          <th>Quantidade de Alunos</th>
          <th>Média das notas dos alunos</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(scores).map(([discipline, scoresArray]) => (
          <tr key={discipline}>
            <td>{discipline}</td>
            <td>{scoresArray.length} </td>
            <td>
              {scoresArray.length > 0
                ? (
                    scoresArray.reduce((a, b) => a + b) / scoresArray.length
                  ).toFixed(1)
                : 0}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;

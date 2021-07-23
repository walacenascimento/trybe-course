function Pessoas() {
  const nomes = ['Jaque', 'Walace Nascimento', 'Aline', 'Vinícius Dionísio']

  return(
    <div key=''>
      <ol>
        {nomes.map((nome) => <li>{nome}</li>)}
      </ol>
    </div>
    )
  }

  export default Pessoas;
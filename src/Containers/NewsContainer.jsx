function NewItem(){
  return(
    <div className="new-item">
      <h3>Title</h3>
      <p>Arrancando con voluntad, mientras los hijos demandan atencion </p>
    </div>
  )
}
export default function NewsContainer(){
    return (
      <aside className="news-container"> 
      <h2>Dato</h2>
      <div>
      <NewItem/>
      <NewItem/>
      <h3 className="new-item">Cuidarse es quererse uno mismo y a nuestos pares</h3>
      <p className="new-item">Lo importante esta al alcance de muchos , lo idea es saber ser simples y saber disfrutar lo que tenemos.</p>
      </div>
      </aside>
    );
  }
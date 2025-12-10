export function Header() {
  return (
    <header className="header" id="inicio">
      <div className="header-container">
        <div className="header-image">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST7-iLox63enhLWFFONtD5TVQIPC9gCoQ60Q&s" 
            alt="Compras Online" 
          />
        </div>
        <div className="header-content">
          <h1>Tu mejor Lugar de compras</h1>
          <p>
            Encuentra los mejores productos al mejor precio. Calidad garantizada y envío rápido a todo el país.
          </p>
          <div className="header-buttons">
            <button className="btn-primary">Explorar Productos</button>
            <button className="btn-secondary">Conocer Más</button>
          </div>
        </div>
      </div>
    </header>
  );
}

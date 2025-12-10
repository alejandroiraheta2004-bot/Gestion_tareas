interface CardProps {
  icon: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

export function Card({ icon, title, description, buttonText = "Más información", onButtonClick }: CardProps) {
  return (
    <div className="card">
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button className="card-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
}

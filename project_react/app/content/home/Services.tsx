import { Card } from "../../layouts/Card";

export function Services() {
  const services = [
    {
      icon: "📦",
      title: "Envío Rápido",
      description: "Entrega en 24-48 horas a todo el país. Seguimiento en tiempo real de tu pedido."
    },
    {
      icon: "🛡️",
      title: "Garantía Total",
      description: "Garantía de satisfacción del 100%. Devoluciones sin complicaciones."
    },
    {
      icon: "💳",
      title: "Pago Seguro",
      description: "Múltiples métodos de pago. Transacciones protegidas y encriptadas."
    },
    {
      icon: "🎁",
      title: "Ofertas Exclusivas",
      description: "Descuentos especiales para clientes frecuentes. Promociones semanales."
    },
    {
      icon: "📞",
      title: "Soporte 24/7",
      description: "Atención al cliente disponible en todo momento. Resolvemos tus dudas rápidamente."
    },
    {
      icon: "⭐",
      title: "Calidad Premium",
      description: "Productos seleccionados cuidadosamente. Solo lo mejor para nuestros clientes."
    }
  ];

  return (
    <section id="servicios">
      <h2 className="section-titulo">Nuestros Servicios</h2>
      <p className="section-intro">
        Descubre todas las soluciones que tenemos para ti. Calidad, rapidez y atención personalizada en cada servicio.
      </p>
      
      <div className="cards-grid">
        {services.map((service, index) => (
          <Card
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

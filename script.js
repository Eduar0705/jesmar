document.addEventListener('DOMContentLoaded', function() {
    const cardsContainer = document.getElementById('cardsContainer');
    const modal = document.getElementById('modal');
    const closeModal = document.getElementById('closeModal');
    const modalContent = document.getElementById('modalContent');
    
    // Datos de las 10 cartas de amor
    const loveLetters = [
    {
        title: "Mi Primer Pensamiento",
        preview: "Antes que la luz del amanecer, antes que el canto de los pájaros...",
        content: "Antes que la luz del amanecer, antes que el canto de los pájaros, antes que el mundo despierte... estás tú. Mi corazón susurra tu nombre en la quietud de la mañana, como si fueras el secreto más dulce que guarda el universo. Eres la melodía que alegra mi alma y el sueño del que nunca quiero despertar. Cada día contigo es un nuevo capítulo en el cuento de hadas que escribimos juntos."
    },
    {
        title: "Mil Razones y Más",
        preview: "Si el amor fuera un jardín, tú serías todas sus flores...",
        content: "Si el amor fuera un jardín, tú serías todas sus flores. Cada una de tus sonrisas es un pétalo que ilumina mi vida, cada palabra tuya es el perfume que embriaga mi corazón. Podría pasar eternidades enumerando las razones por las que te amo, pero ninguna palabra sería suficiente para describir lo que siento cuando tus ojos se encuentran con los míos. Eres mi paraíso personal, mi eterno verano."
    },
    {
        title: "Bajo el Cielo Estrellado",
        preview: "Aquella noche, el universo conspiró para que nuestros corazones latieran al unísono...",
        content: "Recuerdo aquella noche como si las estrellas hubieran bajado solo para coronar tu belleza. El universo entero parecía contener la respiración cuando nuestros ojos se encontraron. En ese instante supe que eras el destino que mi alma había estado buscando en cada constelación. Desde entonces, cada estrella que brilla me recuerda el fulgor de tu mirada y la magia de ese momento en que el tiempo se detuvo para nosotros."
    },
    {
        title: "La Canción de tu Corazón",
        preview: "Escucho el ritmo de tu corazón y reconozco la melodía más hermosa...",
        content: "Cuando descanso mi cabeza sobre tu pecho, escucho la sinfonía más perfecta: el latir de tu corazón. Es la música que danza en mis sueños, el compás que guía mis días. Cada latido es una palabra de amor en el idioma más puro, ese que solo las almas gemelas comprenden. Ojalá pudiera grabar este sonido para escucharlo en los momentos en que no estés cerca, pero sé que siempre lo llevaré dentro, como un tesoro escondido en lo más profundo de mi ser."
    },
    {
        title: "Nuestro Viaje",
        preview: "Contigo, cada camino se convierte en una aventura maravillosa...",
        content: "La vida con tú es como un libro cuyas páginas escribimos juntos, donde cada día es una nueva historia llena de risas, complicidad y amor. Hemos caminado por senderos soleados y también por otros más oscuros, pero nunca solos. Tu mano siempre ha estado ahí, cálida y firme, recordándome que juntos podemos con todo. No importa adónde nos lleve el camino, mientras sea a tu lado, cada paso será un regalo."
    },
    {
        title: "Eternamente Tuyo",
        preview: "Si existieran vidas pasadas, en cada una de ellas te habría amado...",
        content: "Creo que nuestras almas se reconocieron antes que nuestros ojos. Hay algo en ti que me resulta profundamente familiar, como si hubiéramos estado unidos en mil vidas anteriores y en mil más por venir. Este amor que siento trasciende el tiempo y el espacio; es un hilo dorado que nos une a través de las edades. Prometo buscarte en cada existencia, porque eres mi hogar en cualquier universo posible."
    },
    {
        title: "El Mapa de tu Rostro",
        preview: "He memorizado cada curva de tu rostro como el viajero memoriza las estrellas...",
        content: "Tus ojos son dos luceros que guían mis noches, tu sonrisa es el amanecer que ilumina mis días. He trazado un mapa de tu rostro con mis besos, recorriendo cada valle y colina como un explorador que descubre tierras benditas. La suavidad de tu piel es mi refugio, el calor de tu aliento mi canción favorita. Eres tan hermosa que a veces me detengo solo a contemplarte, temiendo que seas un sueño demasiado perfecto para ser real."
    },
    {
        title: "Tesoros Cotidianos",
        preview: "Atesoro esos instantes simples que compartimos como si fueran diamantes...",
        content: "Los verdaderos tesoros de mi vida no están en cofres, sino en esos momentos fugaces que compartimos: cuando preparas el café por las mañanas y el aroma llena nuestra casa de calor, cuando te ríes sin preocupaciones y el sonido inunda mi corazón de alegría, cuando nos miramos sin decir nada y todo está dicho. Son estas pequeñas eternidades las que tejen el manto dorado de nuestro amor, día tras día."
    },
    {
        title: "Juramento de Amor",
        preview: "Hoy, mañana y siempre, mi corazón será tu morada...",
        content: "Prometo ser el abrazo que te cobije en los días fríos, la mano que te sostenga en los momentos difíciles, la sonrisa que te recuerde lo amado que eres. Juro construir contigo un mundo donde el amor sea nuestro lenguaje principal, donde cada desacuerdo sea una oportunidad para entendernos mejor, donde cada día sea una celebración de nuestro 'nosotros'. Mi compromiso contigo es infinito como el cielo y profundo como el mar."
    },
    {
        title: "El Idioma del Alma",
        preview: "Existe un lenguaje que solo nuestros corazones comprenden...",
        content: "A veces me quedo mirándote dormir y siento que el universo entero cabe en el espacio entre tus pestañas. No existen palabras en ningún idioma humano que puedan expresar lo que mi alma siente por ti. Es un amor que habla en susurros de piel, en miradas que trascienden el tiempo, en silencios llenos de significado. Si el amor fuera un idioma, tú serías todas sus palabras hermosas, su poema más sublime, su canción más dulce. Eres el amor que todos anhelan y que yo tengo el privilegio de vivir."
    }
];
    // Crear las tarjetas
    loveLetters.forEach((letter, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-inner">
                <div class="card-number">${index + 1}</div>
                <h2>${letter.title}</h2>
                <p>${letter.preview}</p>
                <span class="read-more">Leer más...</span>
            </div>
        `;
        
        // Añadir evento para abrir el modal
        card.addEventListener('click', function() {
            modalContent.innerHTML = `
                <h2>${letter.title}</h2>
                <p>${letter.content}</p>
            `;
            modal.style.display = 'block';
        });
        
        cardsContainer.appendChild(card);
    });

    // Cerrar el modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Cerrar el modal al hacer clic fuera de él
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
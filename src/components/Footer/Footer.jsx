import './Footer.scss';

const Footer = () => {
  return (
    <footer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Calque_1"
        x="0px"
        y="0px"
        viewBox="0 0 1300 550"
        style={{ enableBackground: 'new 0 0 1300 550' }}
        xmlSpace="preserve"
      >
        <defs>
          {/* Définition du dégradé linéaire */}
          <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: '#e95420', stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#000000', stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>

        <style type="text/css">
          {`
        .st1 { 
          opacity: 0.6; 
          fill: url(#grad1); /* Applique le dégradé ici */
        }
      `}
        </style>

        <path
          className="st1"
          d="M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250"
        >
          <animate
            attributeName="d"
            dur="5s"
            begin="1s"
            values="
          M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250"
            repeatCount="indefinite"
          />
        </path>

        <path
          className="st1"
          d="M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250"
        >
          <animate
            attributeName="d"
            dur="5s"
            values="
          M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250"
            repeatCount="indefinite"
          />
        </path>

        <path
          className="st1"
          d="M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250"
        >
          <animate
            attributeName="d"
            dur="5s"
            begin="2s"
            values="
          M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250"
            repeatCount="indefinite"
          />
        </path>

        <path
          className="st1"
          d="M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250"
        >
          <animate
            attributeName="d"
            dur="5s"
            values="
          M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250;
          M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      <p className="footer-text-paragraph">
        Denovann Belloir | {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;

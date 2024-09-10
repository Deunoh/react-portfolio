import Socialbar from '../Socialbar/Socialbar';
import './Presentation.scss';

const Presentation = () => {
  return (
    <section className="presentation-section">
      <h2 className="about_main-title">Qui suis-je ?</h2>
      <div className="about_container">
        <div className="about_container-card">
          <h3>Passé</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quisquam suscipit necessitatibus in deleniti dolore reiciendis
            temporibus possimus, fugiat nulla a autem fuga? Illo vero laborum
            nobis, natus sit, labore fuga, qui ex aliquid hic nihil nostrum
            laboriosam blanditiis quis ab vitae quod perspiciatis veritatis.
            Perferendis sint hic qui aut!
          </p>
        </div>
        <div className="about_container-card">
          <h3>Présent</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quisquam suscipit necessitatibus in deleniti dolore reiciendis
            temporibus possimus, fugiat nulla a autem fuga? Illo vero laborum
            nobis, natus sit, labore fuga, qui ex aliquid hic nihil nostrum
            laboriosam blanditiis quis ab vitae quod perspiciatis veritatis.
            Perferendis sint hic qui aut!
          </p>
        </div>
        <div className="about_container-card">
          <h3>Futur</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            quisquam suscipit necessitatibus in deleniti dolore reiciendis
            temporibus possimus, fugiat nulla a autem fuga? Illo vero laborum
            nobis, natus sit, labore fuga, qui ex aliquid hic nihil nostrum
            laboriosam blanditiis quis ab vitae quod perspiciatis veritatis.
            Perferendis sint hic qui aut!
          </p>
        </div>
      </div>
      <div className="social-icons--container">
        <Socialbar />
      </div>
    </section>
  );
};

export default Presentation;

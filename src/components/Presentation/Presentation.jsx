// import Socialbar from '../Socialbar/Socialbar';
import Socialbar from '../Socialbar/Socialbar';
import './Presentation.scss';

const Presentation = () => {
  return (
    <section className="presentation-section" id="presentation-section">
      <h2 className="main-title-section">Qui suis-je ?</h2>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
            consequuntur atque voluptatem beatae iure unde deleniti ratione,
            minus recusandae aut animi totam quaerat aperiam velit expedita
            quasi earum doloremque natus voluptate illum consectetur dolore!
            Odio porro eaque explicabo incidunt magni nisi sequi vel, vitae
            tempora, modi, laboriosam corporis nam minima neque odit quia
            quibusdam laborum. Laboriosam fuga magni quasi saepe est
            exercitationem a blanditiis ipsa nostrum, facilis officia, delectus
            fugiat cumque animi nemo recusandae numquam. Eaque atque quasi
            incidunt officiis!
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
      <Socialbar />
    </section>
  );
};

export default Presentation;

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader-container">
      <DotLottieReact src="assets/loader.json" autoplay loop />
    </div>
  );
};

export default Loader;

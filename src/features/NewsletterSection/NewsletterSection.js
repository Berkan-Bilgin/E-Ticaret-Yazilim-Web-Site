import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons"; // Bu icon solid setten
import {
  faTwitter,
  faFacebookF,
  faInstagram,
  faPinterestP,
  faVimeoV,
} from "@fortawesome/free-brands-svg-icons"; // Brand setten gelen ikonlar

const NewsletterSection = () => {
  return (
    <div className="bg-blue-500 py-4 px-8">
      <div className="container flex flex-wrap justify-between items-center">
        {/* Sol kısım: Blog haberleri */}
        <div className="flex items-center space-x-4 text-white">
          <FontAwesomeIcon icon={faPaperPlane} size="2x" />
          <div>
            <h4 className="text-lg font-bold">BLOG HABERLERİ OKUYUN</h4>
          </div>
        </div>

        {/* Orta kısım: E-posta giriş ve submit butonu */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <input
            type="email"
            placeholder="Enter Your Email Address"
            className="p-2 w-full md:w-64 rounded focus:outline-none"
          />
          <button className="bg-yellow-400 text-black font-bold px-4 py-2 rounded">
            SUBMIT
          </button>
        </div>

        {/* Sağ kısım: Sosyal medya ikonları */}
        <div className="flex items-center space-x-4 mt-4 md:mt-0 text-white">
          <span>BİZİ TAKİP EDİN</span>
          <FontAwesomeIcon icon={faTwitter} className="text-xl" />
          <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-xl" />
          <FontAwesomeIcon icon={faPinterestP} className="text-xl" />
          <FontAwesomeIcon icon={faVimeoV} className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default NewsletterSection;

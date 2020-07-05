import AOS from "aos";
import "aos/dist/aos.css";

export default ({app}) => {
  //手機板
  // new AOS.init({ disable: "phone" });

  app.AOS = new AOS.init();
}
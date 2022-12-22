import styles from "../styles/navigation.module.css"
import { Link } from "react-router-dom";

  function navigation() {
  return (
    <>
      <nav className="relative text-kekaBlue font-bold navbar">
        <div className="flex w-full text-xs md:flex md:text-sm md:mr-20 items-center justify-between md:flex-row lg:flex-row">
          <span className="flex items-center justify-start">
            <div className="pl-5 lg:pl-20">
              <img
                className="h-20 w-full"
                src='./assets/logo.jpeg'
                alt=""
              />
            </div>
            {/* <div className="text-md  "> <p className=" text-lg" > KEKA </p>  PRECISION </div>  */}
          </span>

          <div className="hidden md:flex md:justify-end space-x-16">
            <ul>
              <li className={styles.navlink}>
                <Link to="/" className="font-bold text-sm">
                  HOME
                </Link>
              </li>
              <li className={styles.navlink}>
                <Link to="about-us" className="font-bold text-sm">
                  ABOUT US
                </Link>
              </li>
              <li className={styles.services}>
                <div className={styles.test_dropdown}>
                  <div className={styles.text}>
                    <p className="font-bold text-sm">SERVICES</p>
                    <i className="fa-sharp fa-solid fa-chevron-down px-2 font-bold"></i>
                  </div>
                  <div className={styles.test_dropdown_menu}>
                    <div className="bg-white text-sm">Aws managed services</div>
                    <div className="text-sm">Authentic</div>
                    <div className={styles.test_daas_dropdown}>
                      <div className="flex justify-between">
                        <div className="">Device as a service</div>
                        <div>
                          <i className="fa-sharp fa-solid fa-chevron-right">
                            {" "}
                          </i>
                        </div>
                      </div>
                      <div className={styles.test_daas_dropdown_menu}>
                        <div className="text-sm">The Shule Project</div>

                        <div className="text-sm">Daas For Business</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>

              <li className={styles.navlink}>
                <Link to="contact-us" className="font-bold text-sm">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.hambugerMenu}>
            <button className="block font-bold text-[18px] mr-10 md:hidden">
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <div className={["hidden block", styles.hambuger].join(" ")}>
        <div className="flex flex-col text-kekaBlue">
          <div className="w-full flex justify-center items-center">Home</div>
          <div className="w-full flex justify-center items-center">
            About us
          </div>
          <div className="w-full flex justify-center items-center">
            Authentic
          </div>
          <div className="w-full flex justify-center items-center">
            The shule project
          </div>
          <div className="w-full flex justify-center items-center">
            Daas cooperate
          </div>
          <div className="w-full flex justify-center items-center">
            Aws managed services
          </div>
          <div className="w-full flex justify-center items-center">
            Contact-us
          </div>
        </div>
      </div>
    </>
  );
}
export default navigation

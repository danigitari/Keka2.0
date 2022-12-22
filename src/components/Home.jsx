import styles from "../styles/home.module.css"
import Navigation from "../components/navigation"
import { Link } from "react-router-dom";

export function Home() {
    return (
      <>
        {" "}
        <div>
          <Navigation />
          <div className="swiper mySwiper">
            <div className="swiper-wrapper hero-section">
              <div className="swiper-slide relative">
                <div className="overlay absolute"></div>
                <div className="absolute w-full h-full">
                  <img src="../assets/img1.jpg" alt="" />
                </div>
                <div className="absolute hero my-10">
                  <div className="pt-10">
                    <div className="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute">
                      <p className="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start">
                        THE RIGHT ICT SOLUTIONS DESIGNED BY YOU
                      </p>
                      <p className="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left">
                        We design and implement end to end managed technologies
                        that are agile, scalable, and precisely sized to run
                        your organization optimally, simply, cost-effectively
                        with accurate financial and performance predictivity on
                        a subscription basis .
                      </p>
                      {/* <!-- <div className="text-center flex justify-start mx-5">
                  <button
                    className="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                    // @click="scrollToServices"
                  >
                    Learn More
                  </button>
                </div> --> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide relative">
                <div className="overlay absolute"></div>
                <div className="absolute w-full h-full">
                  <img src="../assets/board.jpeg" alt="" />
                </div>
                <div className="absolute hero mt-10 pt-10">
                  <div className="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute">
                    <p className="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start">
                      DEVICE AS A SERVICE FOR BUSINESS
                    </p>
                    <p className="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left">
                      Device as a Service (DaaS) equips businesses with a full
                      PC fleet, IT support, and device life-cycle management
                      packaged together in one subscription-based offering. .
                    </p>
                    <div className="text-center flex justify-start mx-5">
                      <button
                        className="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                        //   @click="goToDaasBusiness"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide relative">
                <div className="overlay absolute"></div>
                <div className="absolute w-full h-full">
                  <img src="../assets/daas_school.jpg" alt="" />
                </div>
                <div className="absolute hero mt-10 pt-10">
                  <div className="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute">
                    <p className="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start">
                      DEVICE AS A SERVICE FOR SCHOOLS
                    </p>
                    <p className="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left">
                      Device as a Service (DaaS) equips businesses with a full
                      PC fleet, IT support, and device life-cycle management
                      packaged together in one subscription-based offering.
                    </p>
                    <div className="text-center flex justify-start mx-5">
                      <button
                        className="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                        //   @click="goToDaasEducation"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide relative">
                <div className="overlay absolute"></div>

                <div className="absolute w-full h-full">
                  <img src="../assets/authentic_a.jpg" alt="" />
                </div>
                <div className="absolute hero mt-10 pt-10">
                  <div className="text-white md:ml-10 lg:ml-10 md:pl-10 lg:pl-10 lg:w-1/2 absolute">
                    <p className="mt-10 mb-10 font-bold text-3xl text-white flex justify-right pl-5 text-left align-content-start">
                      AUTHENTIC ANTI-COUNTERFEIT SOLUTIONS
                    </p>

                    <p className="mb-10 font-bold text-lg text-white flex justify-right pl-5 text-left">
                      We create human friendly solutions protecting consumers ,
                      brands and producers for quality consumption and revenue
                      enhancement.
                    </p>
                    <div className="text-center flex justify-start pl-5">
                      <button
                        className="bg-kekaBlue rounded-[20px] text-white px-6 py-2"
                        //   @click="goToAuthentic"
                      >
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-button-next text-white"></div>
            <div className="swiper-button-prev text-white"></div>
            <div className="swiper-pagination"></div>
          </div>

          <div className="bg-white pt-20 pb-20">
            <div className=" ">
              <p className="text-2xl font-bold m-10 text-dark flex justify-center">
                OUR SERVICES
              </p>
            </div>
            <div className="flex flex-wrap justify-center mb-10">
              <div className="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
                <h4 className="text-kekaBlue font-bold py-5">
                  Aws Managed services
                </h4>
                <p className="leading-relaxed mb-3 text-sm">
                  We design and build secure, high-performance, resilient, and
                  efficient cloud infrastructure for a wide range of
                  applications and workloads. Premised on six
                  pillars—operational excellence, security, reliability,
                  performance efficiency, cost optimization, and sustainability
                </p>
                <div className="flex justify-start py-5">
                  <button className="rounded-[20px] text-kekaBlue">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
                <h4 className="text-kekaBlue font-bold py-5">
                  Device as a Service - Education
                </h4>
                <p className="leading-relaxed mb-3 text-sm">
                  Managed Device Services specifically designed for Students
                  with Education in mind. We Track Deploy, Manage, Maintain and
                  protect the devices .
                </p>
                <div className="flex justify-start py-5">
                  <button
                    className="rounded-[20px] text-kekaBlue"
                    //   @click="goToDaasEducation"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
                <h4 className="text-kekaBlue font-bold py-5">
                  Device as a Service - Business
                </h4>
                <p className="leading-relaxed mb-3 text-sm">
                  Designed for business to meet all your end-user technology
                  needs at a single predictable monthly payment Modern End User
                  Experience IT Efficiency with Lower Costs Predictable Monthly
                </p>
                <div className="flex justify-start py-5">
                  <button
                    className="rounded-[20px] text-kekaBlue"
                    //   @click="goToDaasBusiness"
                  >
                    Learn More
                  </button>
                </div>
              </div>
              <div className="w-1/5 justify-center mr-5 p-5 rounded-[10px] services">
                <h4 className="text-kekaBlue font-bold py-5">
                  Authentic Anticounterfeit Solution
                </h4>
                <p className="leading-relaxed mb-3 text-sm">
                  A proprietary print and recognition technology built for
                  global usage under challenging conditions, connected to
                  value-added services that protect your brand and intellectual
                  property as a manufacturer
                </p>
                <div className="flex justify-start py-5">
                  <button className="rounded-[20px] text-kekaBlue ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center p-10 bg-blue-500 text-white">
              <div className="text-2xl p-5 font-bold text-center">
                Why you need DaaS for business
              </div>
            </div>
            <div className="grid grid-cols-7 bg-blue-500 text-white">
              <div className="col-span-5 col-start-2 text-center">
                Organizations that use DaaS save 20% on lifecycle service costs.
                DaaS reduces costs in areas such as procurement, imaging,
                physical installation, final preparation and migration, system
                management, support, asset disposition, and retirement.
                Employees benefit by receiving devices that are two years newer
                on average, which drives employee experience benefits while also
                reducing lifecycle associated costs. Both deployment and support
                ticket resolution times also improve.
                <div className="flex justify-center p-10 p-2">
                  <Link
                    to="device-as-a-service-cooperate"
                    //   className="py-3 px-8 call_to_action1 text-white rounded-[30px] border-white"
                    className={["bg-red-500", styles.call_to_action1].join(" ")}
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-20 mb-20">
              <p className="text-2xl font-bold m-10 text-dark flex justify-center">
                OUR TEAM
              </p>
              <div className="text-center my-5">
                The team are professional cloud architects certified by AWS,
                VMWare and Intel on various cloud and device services
              </div>
              {/* <!-- 
        <div className="flex flex-wrap mx-10">
          <div className="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div>
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${elvis})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">ELVIS MUNENE</p>
              <p className="text-sm text-center">Cloud Architect</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div className="col-span-2 col-start-2">
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${zippy})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">ZIPPORAH WACHIRA</p>
              <p className="text-sm text-center">Cloud Architect</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 lg:w-1/3 xs:w-full p-5 team">
            <div className="col-span-2 col-start-2">
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${dan})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">DANIEL GITARI</p>
              <p className="text-sm text-center">Cloud Architect</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div className="col-span-2 col-start-2">
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${ken})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">KEN KAGOTA</p>
              <p className="text-sm text-center">Managing Director</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div className="col-span-2 col-start-2">
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${sam})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">SAMUEL MUREKEFU</p>
              <p className="text-sm text-center">Cloud Architect</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div className="col-span-2 col-start-2">
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${ernest})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">ERNEST OTIENO</p>
              <p className="text-sm text-center">Cloud Architect</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 xs:w-full lg:w-1/3 p-5 team">
            <div className="col-span-2 col-start-2">
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${innocent})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">INNOCENT MAMBO</p>
              <p className="text-sm text-center">Cloud Architect</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 xs:w-full sm:w-1/2 p-5 team">
            <div className="col-span-2 col-start-2">
              <div className="p-2 flex items-center justify-center">
                <div
                  className="lg:w-84 lg:h-84 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                  // :style="{ backgroundImage: `url(${florence})` }"
                ></div>
              </div>
              <p className="text-md text-center font-bold py-5">FLORENCE SIMBA</p>
              <p className="text-sm text-center">Cloud Architect</p>
              <div className="flex justify-center gap-3 py-5 text-kekaBlue">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-linkedin"></i>
              </div>
            </div>
          </div>
        </div> --> */}
              <div className="lg:flex">
                {" "}
                <div className="w-full lg:w-1/2 xs:w-full team">
                  <div>
                    <div className=" flex items-center justify-center">
                      <div
                        className="lg:w-96 lg:h-96 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                        // :style="{ backgroundImage: `url(${ken})` }"
                      ></div>
                    </div>
                    <p className="text-md text-center font-bold py-5">
                      KEN KAGOTA
                    </p>
                    <p className="text-sm text-center">MANAGING DIRECTOR</p>
                    <div className="flex justify-center py-5 text-kekaBlue">
                      {/* <!-- <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i> --> */}
                      <i className="fa-brands fa-linkedin linkedin-icon"></i>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 xs:w-full team">
                  <div>
                    <div className=" flex items-center justify-center">
                      <div
                        className="lg:w-96 lg:h-96 md:h-64 md:w-64 sm:h-48 sm:w-48 xs:w-36 xs:h-36 rounded-lg my-5 photos"
                        // :style="{ backgroundImage: `url(${eva})` }"
                      ></div>
                    </div>
                    <p className="text-md text-center font-bold py-5">EVA</p>
                    <p className="text-sm text-center">SALES DIRECTOR</p>
                    <div className="flex justify-center py-5 text-kekaBlue">
                      {/* <!-- <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-twitter"></i> --> */}
                      <i className="fa-brands fa-linkedin linkedin-icon"></i>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <button
                  className="py-2 px-6 call_to_action bg-kekaBlue text-white rounded-[20px] shadow-md"
                  // @click.prevent="goToAbout"
                >
                  LEARN MORE
                </button>
              </div>
            </div>
            <div className="mt-20 mb-5 flex justify-center bg-gray-100">
              <p className="text-2xl font-bold m-10 text-dark">OUR PARTNERS</p>
            </div>
            <div className="mx-10">
              <div className="swiper mySwiper1">
                <div className="swiper-wrapper">
                  <div className="swiper-slide bg-white">
                    <div
                      className="p-2 w-64 h-36 partner bg-white"
                      // :style="{ backgroundImage: `url(${acer})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="w-64 h-36 partner bg-white"
                      // :style="{ backgroundImage: `url(${aws})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-64 h-36 partner bg-white"
                      // :style="{ backgroundImage: `url(${dell})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-56 h-32 partner"
                      // :style="{ backgroundImage: `url(${intel})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-64 h-36 partner bg-white"
                      // :style="{ backgroundImage: `url(${dot})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-64 h-36 partner"
                      // :style="{ backgroundImage: `url(${lenovo})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-64 h-36 partner bg-white"
                      // :style="{ backgroundImage: `url(${vmware})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-64 h-36 partner bg-white"
                      // :style="{ backgroundImage: `url(${hp})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-64 h-36 partner"
                      // :style="{ backgroundImage: `url(${authentic})` }"
                    ></div>
                  </div>
                  <div className="swiper-slide">
                    <div
                      className="p-2 w-64 h-36 partner bg-white"
                      // :style="{ backgroundImage: `url(${huawei})` }"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact bg-gray-100 p-10">
            <p className="text-2xl font-bold m-10 text-dark flex justify-center">
              CONTACT US
            </p>
            <div className="text-center m-10">
              <div className="grid grid-cols-8">
                <div className="col-span-6 col-start-2">
                  All our solutions are built upon best practices and well
                  architeted frameworks to get the best results possible. Please
                  click below to email our consultants. we will review your
                  needs and develop a proof of concept
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <button className="py-2 px-6 call_to_action bg-kekaBlue text-white rounded-[20px] shadow-md">
                <a href="mailto:info@kekaprecision.com">
                  {" "}
                  Book a consultation{" "}
                </a>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}
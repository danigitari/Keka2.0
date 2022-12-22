 function navigation() {
  return
  <>
      <nav class="relative text-kekaBlue font-bold navbar">
        <div class="flex w-full text-xs md:flex md:text-sm md:mr-20 items-center justify-between md:flex-row lg:flex-row">
          <span class="flex items-center justify-start">
            <div class="pl-5 lg:pl-20">
              <img class="h-20 w-full" src="../assets/logo.jpeg" />
            </div>
            {/* <div class="text-md  "> <p class=" text-lg" > KEKA </p>  PRECISION </div>  */}
          </span>

          <div class="hidden md:flex md:justify-end space-x-16">
            <ul>
              <li class="navlink">
                <router-link to="/" class="font-bold text-sm">
                  HOME
                </router-link>
              </li>
              <li class="navlink">
                <router-link to="about-us" class="font-bold text-sm">
                  ABOUT US
                </router-link>
              </li>
              <li class="services">
                <div class="test-dropdown">
                  <div class="text">
                    <p class="font-bold text-sm">SERVICES</p>
                    <i class="fa-sharp fa-solid fa-chevron-down px-2 font-bold"></i>
                  </div>
                  <div class="test-dropdown-menu">
                    <div class="bg-white text-sm">Aws managed services</div>
                    <div class="text-sm">Authentic</div>
                    <div class="test-daas-dropdown">
                      <div class="flex justify-between">
                        <div class="">Device as a service</div>
                        <div>
                          <i class="fa-sharp fa-solid fa-chevron-right"> </i>
                        </div>
                      </div>
                      <div class="test-daas-dropdown-menu">
                        <div class="text-sm">The Shule Project</div>

                        <div class="text-sm">Daas For Business</div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <li class="navlink">
            <router-link to="" class="font-bold text-sm"> EVENTS </router-link>
          </li>  */}

              <li class="navlink">
                <router-link to="contact-us" class="font-bold text-sm">
                  CONTACT US
                </router-link>
              </li>
            </ul>
          </div>
          <div class="hambuger-menu">
            <button class="block font-bold text-[18px] mr-10 md:hidden">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <div class="hidden hambuger block">
        <div class="flex flex-col text-kekaBlue">
          <div class="w-full flex justify-center items-center">Home</div>
          <div class="w-full flex justify-center items-center">About us</div>
          <div class="w-full flex justify-center items-center">Authentic</div>
          <div class="w-full flex justify-center items-center">
            The shule project
          </div>
          <div class="w-full flex justify-center items-center">
            Daas cooperate
          </div>
          <div class="w-full flex justify-center items-center">
            Aws managed services
          </div>
          <div class="w-full flex justify-center items-center">Contact-us</div>
        </div>
      </div>
 
  </>;
}
export default navigation

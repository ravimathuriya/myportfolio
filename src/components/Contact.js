import React from 'react'
import Body from './Body'

const Contact = () => {
  return (
    < >

      <div className='container-fluid' >
        <div className="row justify-content-md-center" id='reverse'>
          <Body />
          <div className='col border mx-5 my-5' id='contact'>
            <div id="contact-sizing">
              <h2>Contact</h2>
              <hr />
              <p>Feel free to get in touch. You can email me at:

                <div>
                  <a href="mailto:ravimathuriya777@gmail.com">
                    ravimathuriya777@gmail.com
                  </a>
                </div>
              </p>
            </div>

            <hr />

            <div id="social-media">
              <ul>
                <li>
                  <a
                    href="https://github.com/ravimathuriya"
                    rel="noreferrer"
                    target="_blank"
                    area-label="github"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/ravi-mathuriya-84b782310"
                    rel="noreferrer"
                    target="_blank"
                    area-label="linkedin"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.naukri.com/mnjuser/profile?id=&altresid"
                    rel="noreferrer"
                    target="_blank"
                    area-label="naukri"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1010"
                      height="278"
                      viewBox="0 0 1010 278"
                      fill="currentColor"
                      className="bi bi-linkedin naukri"
                    >
                      <path d="M424.17 77.71C417.083 77.6317 410.069 79.1384 403.64 82.12C397.619 84.879 392.348 89.0422 388.27 94.26V79.43H358.17V198.54H388.27V132.75C388.27 123.29 390.67 116.017 395.47 110.93C400.27 105.843 406.827 103.297 415.14 103.29C423.307 103.29 429.757 105.837 434.49 110.93C439.223 116.023 441.59 123.297 441.59 132.75V198.54H471.69V128.66C471.69 112.613 467.317 100.11 458.57 91.15C449.823 82.19 438.357 77.71 424.17 77.71Z" />
                      <path d="M582.28 96.41C578.026 90.7567 572.559 86.1297 566.28 82.87C559.613 79.29 551.84 77.4967 542.96 77.49C533.227 77.3677 523.655 79.9764 515.33 85.02C506.92 90.2112 500.139 97.6611 495.76 106.52C490.96 115.853 488.56 126.52 488.56 138.52C488.56 150.713 490.96 161.5 495.76 170.88C500.15 179.816 506.922 187.366 515.33 192.7C523.537 197.851 533.05 200.537 542.74 200.44C550.921 200.61 559.015 198.726 566.28 194.96C572.646 191.684 578.133 186.928 582.28 181.09V198.51H612.6V79.43H582.28V96.41ZM577.98 157.8C575.305 162.805 571.283 166.962 566.37 169.8C561.604 172.564 556.189 174.01 550.68 173.99C545.255 174 539.933 172.512 535.3 169.69C530.382 166.696 526.37 162.425 523.69 157.33C520.651 151.531 519.137 145.055 519.29 138.51C519.29 131.35 520.756 125.153 523.69 119.92C525.684 116.31 528.379 113.134 531.617 110.578C534.854 108.022 538.569 106.139 542.544 105.037C546.519 103.935 550.673 103.638 554.764 104.162C558.856 104.686 562.801 106.022 566.37 108.09C571.283 110.928 575.305 115.085 577.98 120.09C580.846 125.323 582.28 131.593 582.28 138.9C582.28 146.207 580.846 152.507 577.98 157.8Z" />
                      <path d="M714.88 145.05C714.88 154.51 712.513 161.783 707.78 166.87C703.047 171.957 696.527 174.5 688.22 174.5C680.047 174.5 673.597 171.957 668.87 166.87C664.143 161.783 661.777 154.51 661.77 145.05V79.43H631.67V149.35C631.67 159.963 633.713 169.1 637.8 176.76C641.576 184.111 647.451 190.175 654.68 194.18C662.28 198.228 670.791 200.262 679.4 200.09C686.418 200.155 693.361 198.649 699.72 195.68C705.703 192.95 710.913 188.775 714.88 183.53V198.53H745.19V79.47H714.88V145.05Z" />
                      <path d="M873.48 79.52H834.35L794.36 130.05V39.53H764.26V198.63H794.36V147.89L834.78 198.63H873.91L821.02 139.29L873.48 79.52Z" />
                      <path d="M917.92 98V79.43H887.8V198.58H917.9V139.24C917.9 128.2 920.3 120.46 925.1 116.02C929.9 111.58 937.033 109.357 946.5 109.35H954.5V77.75C947.154 77.5755 939.894 79.3592 933.466 82.9179C927.037 86.4766 921.672 91.6822 917.92 98Z" />
                      <path d="M998.65 79.43H968.55V198.59H998.65V79.43Z" />
                      <path d="M983.6 65.22C993.541 65.22 1001.6 57.1611 1001.6 47.22C1001.6 37.2789 993.541 29.22 983.6 29.22C973.658 29.22 965.6 37.2789 965.6 47.22C965.6 57.1611 973.658 65.22 983.6 65.22Z" />
                      <path d="M139 278C215.768 278 278 215.768 278 139C278 62.2324 215.768 0 139 0C62.2324 0 0 62.2324 0 139C0 215.768 62.2324 278 139 278Z" />
                      <path
                        d="M180.8 190.49L180.49 204.58L179.59 245.26V246.83C110.85 187.34 99.14 172.83 97.11 168.42L97.04 168.27C96.7956 167.44 96.7376 166.565 96.87 165.71C96.9185 165.393 96.9853 165.079 97.07 164.77C97.14 164.52 97.21 164.28 97.3 164.02C98.0409 162.074 99.0911 160.261 100.41 158.65C101.355 157.429 102.384 156.277 103.49 155.2C105.855 152.861 108.389 150.699 111.07 148.73C112.4 147.73 113.79 146.73 115.26 145.73C118.1 143.79 121.17 141.85 124.35 139.96C149.05 163 180.4 190.12 180.8 190.49Z"
                        fill="url(#paint0_linear_9_3166)"
                      />
                      <path
                        d="M181.71 56.86L181.4 71L181.24 78L180.92 92.07L180.76 99.13L180.45 113.21C179.96 113.41 148.61 125.57 124.45 139.94C121.27 141.83 118.21 143.77 115.36 145.71C113.9 146.71 112.5 147.71 111.17 148.71C108.493 150.684 105.96 152.846 103.59 155.18C102.487 156.259 101.458 157.412 100.51 158.63C98.3301 161.41 97.0201 164.14 96.8301 166.71L97.09 154.96V154.88L97.1401 153.06V152.4L97.35 144.99L97.7501 130.3L97.9401 123.12L98.34 108.56C103.31 88.18 173.5 60.09 181.71 56.86Z"
                        fill="white"
                      />
                      <path
                        d="M117 72.44C128.394 72.44 137.63 63.2036 137.63 51.81C137.63 40.4164 128.394 31.18 117 31.18C105.606 31.18 96.3701 40.4164 96.3701 51.81C96.3701 63.2036 105.606 72.44 117 72.44Z"
                        fill="white"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_9_3166"
                          x1="166.59"
                          y1="211.83"
                          x2="85.0601"
                          y2="117.78"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#000000" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="mailto:ravimathuriya777@gmail.com"
                    rel="noreferrer"
                    target="_blank"
                    area-label="mail"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
     </div>

    </>
  )
}

export default Contact

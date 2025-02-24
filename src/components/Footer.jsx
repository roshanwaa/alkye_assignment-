import logo from '../assets/Subtract.png';

export const Footer = () => {
  return (
    <div>
      <footer className="bg-black text-white">
        <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center sm:justify-start">
                <img src={logo} alt="" />
              </div>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-gray-300">
                    <span className="sr-only">Instagram</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-gray-300">
                    <span className="sr-only">Facebook</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    rel="noreferrer"
                    target="_blank"
                    className="text-gray-400 transition hover:text-gray-300">
                    <span className="sr-only">Linkedin</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 448 512">
                      <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Expertise</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Design
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Specialist Expertise
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Commercial Advice
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Traffic & Transport
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Sectors</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Road
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Tunner
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Bridge
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Others +
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Our Business</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Work With Us
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      News
                    </a>
                  </li>
                </ul>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">
                  Our Capabilities
                </p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Engineers
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-white transition hover:text-gray-400"
                      href="#">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-600 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-500">
                <a
                  className="inline-block text-gray-400 transition hover:text-white mr-6"
                  href="#">
                  Terms & Conditions
                </a>

                <a
                  className="inline-block text-gray-400 transition hover:text-white"
                  href="#">
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-white sm:order-first sm:mt-0">
                &copy; 2021 Case International. All right reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

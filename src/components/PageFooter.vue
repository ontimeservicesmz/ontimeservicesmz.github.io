<script lang="ts" setup>

</script>
<template>
    <footer class="bg-zinc-950">
        <div class="bg-slate-800 py-10 px-6 md:py-20 dark:bg-gray-200">
            <div class="mx-auto max-w-screen-xl">
                <div class="lg:grid lg:grid-cols-5 gap-5 md:justify-between">
                    <div class="col-span-2  md:mb-0">
                      <h2
                          class="mb-4 text font-semibold dark:text-gray-900 capitalize text-white"
                      >
                        Ontime solutions
                      </h2>
                        <p
                            class="text-gray-100 dark:text-white leading-relaxed text-sm text-justify"
                        >
                          Somos uma empresa de tecnologia que oferece serviços de configuração de sistemas de comunicação,
                          administração de servidores e segurança de dados.
                          Com uma equipe experiente e especializada, a empresa foca em soluções personalizadas,
                          excelência e inovação para garantir a eficiência e protecção dos sistemas dos clientes
                        </p>
                    </div>
                    <div
                        class="col-span-3 grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4"
                    >
                        <div>
                            <h2
                                class="mb-6 text-sm font-semibold dark:text-gray-900 capitalize text-white"
                            >
                                Resources
                            </h2>
                            <ul class="dark:text-white text-gray-400 text-sm">
                                <li class="mb-4">
                                    <span

                                        class="hover:underline"
                                        >Home</span
                                    >
                                </li>
                                <li class="mb-4">
                                    <span

                                        class="hover:underline"
                                        >Services</span
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2
                                class="mb-6 text-sm font-semibold dark:text-gray-900 capitalize text-white"
                            >
                                Company
                            </h2>
                            <ul class="dark:text-white text-gray-400 text-sm">
                                <li class="mb-4">
                                    <a
                                        href=""
                                        class="hover:underline"
                                        >About us</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href=""
                                        class="hover:underline"
                                        >Contact us</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2
                                class="mb-6 text-sm font-semibold dark:text-gray-900 capitalize text-white"
                            >
                                Follow us
                            </h2>
                            <ul
                                class="dark:text-gray-600 text-gray-400 text-sm"
                            >
                                <li class="mb-4">
                                    <a
                                        href="$page.props.copyright.linkedin??''"
                                         target="_blank"
                                        class="hover:underline"
                                        >Linkedin</a
                                    >
                                </li>
                                <li>
                                    <a
                                        href="$page.props.copyright.instagram??''"
                                        target="_blank"
                                        class="hover:underline"
                                        >Instagram</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2
                                class="mb-6 text-sm font-semibold dark:text-gray-900 capitalize text-white"
                            >
                                Legal
                            </h2>
                            <ul
                                class="dark:text-gray-600 text-gray-400 text-sm"
                            >
                                <li class="mb-4">
                                    <a href="route('policy')" class="hover:underline"
                                        >Privacy Policy</a
                                    >
                                </li>
                                <li>
                                    <a href="route('terms')" class="hover:underline"
                                        >Terms &amp; Conditions</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border-gray-900 sm:mx-auto dark:border-gray-200" />
        <div
            class="max-w-screen-xl mx-auto sm:flex justify-center sm:justify-between px-4 md:px-0 py-4 "
        >
            <span
                class="text-sm text-gray-100 text-center dark:text-gray-50"
                >Copyright ©
                <a href="/" class="hover:underline text-primary-500 font-black capitalize" >  Ontime solutions </a>
              {{ new Date().getFullYear() }}. All Rights Reserved.
            </span>
            <div class="flex text-sm mt-4 space-x-6 sm:justify-center sm:mt-0 ">
                <a
                aria-label="Linkedin"
                    href="$page.props.copyright.linkedin ?? ''"
                     target="_blank"
                    class="text-gray-100 text-xs hover:text-gray-400 dark:hover:text-white"
                >
                <svg  class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"></path>
                </svg>
                </a>
                <a
                aria-label="Instagram"
                    href="$page.props.copyright.instagram ?? ''"
                    target="_blank"
                    class="text-gray-100 hover:text-gray-400 dark:hover:text-white"
                >
                    <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
                <a href="$page.props.copyright.website??''"
                aria-label="Website"
                    class="text-gray-100 hover:text-gray-400 dark:hover:text-white">
                    <svg
                        class="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                    >
                   <path
                            fill-rule="evenodd"
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                            clip-rule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
import PageFooter from "../components/PageFooter.vue";
import PageHeader from "../components/PageHeader.vue";
import PageHero from "../components/PageHero.vue";
import hero from  '../assets/images/header.jpg';
import HomeAboutUs from "./partials/HomeAboutUs.vue";
import HomePartners from "./partials/HomePartners.vue";
import HomeServices from "./partials/HomeServices.vue";
import HomeTestmunial from "./partials/HomeTestmunial.vue";
import MetaSeo from "@/components/MetaSeo.vue";
</script>
<template>

    <div class="relative bg-primary-50">
        <PageHeader class="sticky top-0 z-20" />
        <PageHero>
            <template v-slot:coverImage
                >
                <picture>
                    <img :src="hero"
                    :alt="''"
                    class="w-full h-full object-cover hover:object-scale-down object-top"/>
                </picture>
                </template>
              <template v-slot:content>
                <div
                    class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
                >
                    <h1
                        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
                    >
                        title
                    </h1>
                    <p
                        class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
                    >
                        subtitle
                    </p>
                </div>
            </template>
        </PageHero>

        <HomeAboutUs
            title="Quem Somos"
            content="Somos uma empresa especializada em tecnologia, dedicada à configuração de sistemas de comunicação, administração de servidores e segurança de dados. Nosso time é composto por profissionais altamente qualificados, com vasta experiência no mercado e comprometidos em oferecer soluções sob medida para atender às necessidades específicas de cada cliente. Atuamos com foco em excelência e inovação, garantindo a eficiência e segurança em todas as implementações realizadas."
            :image="hero"
        />

        <HomeServices/>
<!--        <HomePartners  :partiners="partiners ?? []" />-->
<!--        <HomeTestmunial :testimonials="testimonials ?? []" />-->
        <PageFooter />
    </div>
</template>

<template>
    <div>
        <!-- Carousel -->
        <div class="clip">
            <v-carousel dark cycle height="500" hide-delimiters show-arrows-on-hover>
                <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
                </v-carousel-item>
            </v-carousel>
        </div>

        <!-- Categories -->
        <categories />

        <!-- Banna Info -->
        <v-container class="px-0" fluid>
            <v-row>
                <v-col>
                    <div style="background: #313846;" class="text-center subtitle-2 pa-5 font-weight-bold grey--text text--lighten-2 text-uppercase">
                        <span>
                            <v-icon left color="green lighten-1">mdi-truck-fast</v-icon>
                        </span> 
                        free shipping on any order above N200
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <!-- Filters and Products -->
        <home-product-filters />

        <!-- About us -->
        <v-container class="px-0 pb-0" fluid>
            <v-row>
                <v-col md="12" class="pb-0">
                    <v-parallax dark src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/abstract-dark-blue-polygonal-terrain-relief-low-poly-background-elena-voronina.jpg">
                        <v-row class="flex-column text-center" justify="center">
                            <div class="text-center">
                                <h1 class="display-2 font-weight-regular mb-4">About Us</h1>
                            </div>
                            <v-divider class="mx-auto" color="white" width="150"></v-divider>
                            <v-container>
                                <div class="text-center px-5 pt-10">
                                    Step out in style with our Fashion and Style as we bring you awesome fashion collections from 
                                    top brands such as Zara, Woodin, Fever London, St Genevieve, top quality shirts, vintage shirts 
                                    and footwear from Nigerian indigenous designers like David Wej. Moreover, you can look through 
                                    our wide selection of Ankara style and make your pick for that next event you have. 
                                    Also, get classy women's shoes from top designers like Plum, Qupid as well as watches from Casio, Titan and more. 
                                    Beautify yourself with cosmetics and skin care products from Mary Kay, House of Tara, Sleek, Maybelline and much more. 
                                    We make online shopping fun with our new arrivals as well as huge discounts on a large selection of fashion items 
                                    and more. Jumia has the original New Look fashion brand online for you to shop.
                                </div>
                            </v-container>
                        </v-row>
                    </v-parallax>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
import categories from '../components/home-page-products/Categories'
import homeProductFilters from '../components/home-page-products/HomeProductFilters'

export default {
    components: { categories, homeProductFilters },

    data: () => ({
        slides: [
        { 
            src: 'https://www.newsquarewb.com/wp-content/uploads/2019/01/ns_generic_2018_web_banners_shop.jpg'
        },
        { 
            src: 'https://assets.jassets.com/assets/images/retaillabs/2019/7/4/0c8c7ae8-9e83-449e-ba4a-f992ba5947e41562222307722-Women-Desktop-Slider-StaticPage-1300X470.jpg'
        },
        { 
            src: 'http://binfateh.com/slider/sl-1.jpg'
        },
        {
            src: 'https://assets.jassets.com/assets/images/retaillabs/2019/7/4/13226b48-89e4-4ecf-85db-1fa690a5dbf41562222307705-Kids-Desktop-Slider-StaticPage-1300X470.jpg' 
        } 
        ],
    })
}
</script>




<style lang="scss">
    .clip {
         clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 100%, 76% 93%, 53% 100%, 29% 92%, 0 100%, 0% 35%, 0 0);
    }
    .category-right-icon {
        margin-bottom: 5.7rem; 
        margin-right: 11rem
    }
    .filter-products {
        background: #fff;
        display: flex;
        justify-content: space-between;

        .filters {

            .border {
                border-right: 1px solid grey;
                background: white !important;
            }

            .arrow-down {
                width: 0; 
                height: 0; 
                border-left: 20px solid transparent;
                border-right: 20px solid transparent;      
                border-top: 10px solid rgba(231, 40, 77, 1);
                position: absolute;
                top: 36px;
            }
            
        }

        .all-categories-filter {
            .border {
                border-left: 1px solid gray;
                background: white !important;
            }
        }
    }

    .v-card--reveal {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }

    .product-label-div {
        width: 100%;
        display: flex;
        justify-content: space-between;

        .product-labels-left {
            .product-labels-left-div {
                transform: rotate(-42deg);
                width: 100%;
                margin-left: -30px
            }
        }
    }

    .footer-list-items {
        padding-left: 15px;
        font-size: small;

        ul {
            list-style-type: none;
            li a {
                text-decoration: none;
            }

            li a:hover {
                text-decoration: underline
            }
        }
    }
</style>
<template>
     <!-- Categories -->
        <v-container fluid class="mt-5">
            <v-row class="pl-4">
                <v-col md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card height="424" :elevation="hover ? 15 : 2" href="#" flat>
                            <v-img :src="image1" height="100%" position="down down">
                                <v-hover v-slot:default="{ hover }">
                                    <v-btn @click="$router.push({ name: 'allProduct' })" :elevation="hover ? 12 : ''" absolute bottom left x-large dark class="font-weight-black" color="rgba(231, 40, 77, 1)">TOP CATEGORY</v-btn>
                                </v-hover>   
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col md="8" class="py-0">
                    <v-row>
                        <v-col md="6">
                            <v-hover v-slot:default="{ hover }">
                                <v-card @click="$router.push({ name: 'allProduct', query: { name: 'Women' } })" relative height="200" :elevation="hover ? 15 : 2" href="#" flat>
                                    <v-img :src="image2" height="100%" position="up center"> 
                                        <v-btn absolute right bottom :class="hover ? 'd-block': 'd-none'" class="category-right-icon" fab light x-small>
                                            <v-icon>mdi-arrow-right</v-icon>
                                        </v-btn>    
                                    </v-img>
                                    <div v-if="!hover" class="headline white--text font-weight-bold" style="position: absolute; top: 85px; left: 190px">WOMEN</div>
                                </v-card>
                            </v-hover>
                        </v-col>
                        <v-col md="6">
                            <v-hover v-slot:default="{ hover }">
                                <v-card @click="$router.push({ name: 'allProduct', query: { name: 'Men' } })" height="200" :elevation="hover ? 15 : 2" href="#" flat>
                                    <v-img :src="image3" width="100%" height="100%" position="up center">
                                        <v-btn absolute right bottom :class="hover ? 'd-block': 'd-none'" class="category-right-icon" fab light x-small>
                                            <v-icon>mdi-arrow-right</v-icon>
                                        </v-btn>  
                                    </v-img>
                                    <div v-if="!hover" class="headline white--text font-weight-bold" style="position: absolute; top: 85px; left: 190px">MEN</div>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col md="6">
                            <v-hover v-slot:default="{ hover }">
                                <v-card @click="$router.push({ name: 'allProduct', query: { name: 'Kids' } })" :elevation="hover ? 15 : 2" height="200" href="#" flat>
                                    <v-img :src="image4" width="100%" height="100%" position="up center">
                                        <v-btn absolute right bottom :class="hover ? 'd-block': 'd-none'" class="category-right-icon" fab light x-small>
                                            <v-icon>mdi-arrow-right</v-icon>
                                        </v-btn>  
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                        <v-col md="6">
                            <v-hover v-slot:default="{ hover }">
                                <v-card @click="$router.push({ name: 'allProduct', query: { name: 'Kids' } })" :elevation="hover ? 15 : 2" height="200" width="" href="#" flat>
                                    <v-img :src="image2" width="100%" height="100%" position="up center">
                                        <v-btn absolute right bottom :class="hover ? 'd-block': 'd-none'" class="category-right-icon" fab light x-small>
                                            <v-icon>mdi-arrow-right</v-icon>
                                        </v-btn>  
                                    </v-img>
                                    <div v-if="!hover" class="headline white--text font-weight-bold" style="position: absolute; top: 85px; left: 190px">KIDS</div>
                                </v-card> 
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
</template>

<script>
    export default {
        data: () => ({
            image1: 'https://blog.stylewe.com/wp-content/uploads/2016/11/vintage-fashion-style-3.jpg',
            image2: 'https://blog.stylewe.com/wp-content/uploads/2016/11/types-of-fashion.jpg',
            image3: 'https://www.realmenrealstyle.com/wp-content/uploads/2015/04/Balmoral-oxford-leather-dress-shoes-brown.jpg',
            image4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz83K7tM0o6_FT25BYcqFrmmmOvysq_kLB9jZJoahtVJA0Cafw',
        })
    }
</script>
<template>
    <div>
        <div class="clip">
            <v-carousel dark cycle height="500" hide-delimiters show-arrows-on-hover>
                <v-carousel-item v-for="(slide, i) in slides" :key="i" :src="slide.src">
                </v-carousel-item>
            </v-carousel>
        </div>

        <v-container fluid class="mt-5">
            <v-row class="px-4">
                <v-col md="4">
                    <v-hover v-slot:default="{ hover }">
                        <v-card height="420" :elevation="hover ? 15 : 2">
                            <v-img :src="image1" height="100%" position="down down">
                                <v-btn absolute bottom left x-large dark color="rgba(231, 40, 77, 1)">TOP CATEGORY</v-btn>   
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
                <v-col md="8" class="py-0">
                    <v-row>
                        <v-col>
                            <v-hover v-slot:default="{ hover }">
                                <v-card height="200" :elevation="hover ? 15 : 2" width="525">
                                    <v-img :src="image2" width="100%" height="100%" position="up center">
                                        <!-- <v-btn absolute fab dark small>
                                            <v-icon dark>mdi-minus</v-icon>
                                        </v-btn> -->
                                    </v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                        <v-col>
                            <v-hover v-slot:default="{ hover }">
                                <v-card height="200" :elevation="hover ? 15 : 2" width="525">
                                    <v-img :src="image3" width="100%" height="100%" position="up center"></v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col>
                            <v-hover v-slot:default="{ hover }">
                                <v-card :elevation="hover ? 15 : 2" height="200">
                                    <v-img :src="image4" width="100%" height="100%" position="up center"></v-img>
                                </v-card>
                            </v-hover>
                        </v-col>
                        <v-col>
                            <v-hover v-slot:default="{ hover }">
                                <v-card :elevation="hover ? 15 : 2" height="200" width="525">
                                    <v-img :src="image2" width="100%" height="100%" position="up center"></v-img>
                                </v-card> 
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
  data: () => ({
      image1: 'https://blog.stylewe.com/wp-content/uploads/2016/11/vintage-fashion-style-3.jpg',
      image2: 'https://blog.stylewe.com/wp-content/uploads/2016/11/types-of-fashion.jpg',
      image3: 'https://www.realmenrealstyle.com/wp-content/uploads/2015/04/Balmoral-oxford-leather-dress-shoes-brown.jpg',
      image4: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz83K7tM0o6_FT25BYcqFrmmmOvysq_kLB9jZJoahtVJA0Cafw',
      slides: [
        { 
           src: 'https://img.glyphs.co/img?src=aHR0cHM6Ly9zMy5tZWRpYWxvb3QuY29tL3Jlc291cmNlcy9BYnN0cmFjdC1HZW9tZXRyaWMtVmVjdG9yLUJhY2tncm91bmRzLVByZXZpZXctMS5qcGc&q=90&enlarge=true&h=1036&w=1600'
        },
        { 
           src: 'https://img.freepik.com/free-vector/numerous-gradient-geometric-shapes-mixture_23-2148266263.jpg?size=626&ext=jpg'
        },
        {
           src: require("../assets/img/back.png") 
        } 
      ]
  })
}
</script>

<style lang="scss">
    .clip {
         clip-path: polygon(50% 0%, 100% 0, 100% 35%, 100% 100%, 76% 93%, 53% 100%, 29% 92%, 0 100%, 0% 35%, 0 0);
    }
</style>
<template>
    <div style="width: 100%">
        <v-container>
            <v-row>
                <v-hover v-slot:default="{hover}">
                    <v-card :elevation="hover ? 10 : ''" flat style="width: 100%">
                        <v-card-title class="font-weight-bold text--grey text--darken-2 title orange--text pt-6">REVIEW YOUR ORDER</v-card-title>
                        <v-container class="pt-0">
                            <v-hover v-slot:default="{hover}">
                                <v-row class="px-2 py-0" :class="hover ? 'grey lighten-3' : ''">
                                    <v-col md="4">
                                        <v-img :aspect-ratio="16/9" src="https://www.fashiontofigure.com/crsdocroot/images/FTF/Flyouts/TOPS/09112019_Tops.jpg"></v-img>
                                    </v-col>
                                    <v-col md="8">
                                        <div class="subtitle-2">Desert Moonflower Credenza</div>
                                        <div class="d-flex justify-space-between">
                                            <div class="d-flex mt-2">
                                                <!-- <v-text-field value="1" class="my-0 mr-4" style="width: 35px" outlined></v-text-field> -->
                                                <input value="1" class="my-0 mr-4 text-center" style="width: 35px; border: 1px solid grey">
                                                <v-btn class="title font-weight-thin" depressed x-small fab color="grey lighten-3">-</v-btn>
                                                <v-btn class="ml-2 title font-weight-thin" depressed x-small fab color="grey lighten-3">+</v-btn>
                                            </div>
                                            <div class="d-flex justify-space-between">
                                                <div class="subtitle-2 mt-4"><v-icon small>mdi-currency-ngn</v-icon>998.00</div>
                                                <div class="mt-2">
                                                    <v-btn fab x-small depressed color="transparent">
                                                        <v-icon color="red">mdi-close</v-icon>
                                                    </v-btn>
                                                </div>
                                            </div>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-hover>
                        </v-container>

                        <v-container fluid>
                            <v-row>
                                <div class="mx-4" style="border: 10px solid #b6bbc6; width: 100%">
                                    <v-expansion-panels flat focusable>
                                        <v-expansion-panel>
                                            <v-expansion-panel-header>Use Coupon Code</v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <div class="d-flex pt-8">
                                                    <v-text-field label="" hint="Enter coupon code" clearable outlined></v-text-field>
                                                    <v-btn class="ml-2 mt-2" tile depressed color="primary" dark>Apply</v-btn>  
                                                </div> 
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>

                                        <v-expansion-panel>
                                            <v-expansion-panel-header>Use Gift Card</v-expansion-panel-header>
                                            <v-expansion-panel-content>
                                                <div class="d-flex pt-8">
                                                    <v-text-field label="" hint="Enter Gift code" clearable outlined></v-text-field>
                                                    <v-btn class="ml-2 mt-2" tile depressed color="primary" dark>Apply</v-btn>  
                                                </div> 
                                            </v-expansion-panel-content>
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </div>

                                <div class="mx-4 mt-4 pr-2" style="width: 100%; border: 10px solid #b6bbc6">
                                    <v-simple-table fixed-header>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="subtitle-2 font-weight-bold">
                                                        Subtotal 
                                                        <span>
                                                            <v-icon class="font-weight-thin" small right>mdi-currency-ngn</v-icon>
                                                        </span>
                                                        <span class="subtitle-2 font-weight-light">760.00</span>
                                                    </th>
                                                    <th style="border-left: 2px solid grey" class="title font-weight-bold">
                                                        Total
                                                        <span>
                                                            <v-icon class="font-weight-thin" small right>mdi-currency-ngn</v-icon>
                                                        </span>
                                                        <span class="title font-weight-light">760.00</span>
                                                    </th>
                                                </tr>
                                            </thead>
                                        </template>
                                    </v-simple-table>
                                </div>

                                <div class="mx-4 mt-4" style="width: 100%">
                                    <v-textarea label="Add a comment about this order" auto-grow outlined rows="3" row-height="30"></v-textarea>
                                </div>

                                <div class="d-flex justify-center pb-4" style="width: 100%">
                                    <v-btn tile depressed x-large color="orange" dark>PLACE ORDER</v-btn>
                                </div>                            
                            </v-row>
                        </v-container>
                    </v-card>
                </v-hover>
            </v-row>
        </v-container>
    </div>
</template>


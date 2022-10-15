<template>
    <q-card dark class="my-card shadow-10" v-if="!loading" style="border: 2px solid #D2AF1AFF">
        <h4 class="text-weight-bold q-pa-md text-center">Drivers Table</h4>
        <q-markup-table dark>
            <thead>
                <tr>
                    <th class="text-left">Rank</th>
                    <th class="text-right">Driver</th>
                    <th class="text-right">Points</th>
                    <th class="text-right">Nationality</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="driver in drivers" :key="driver.points">
                    <td>{{ driver.position }}</td>
                    <td class="text-right">{{driver.Driver.givenName}} {{ driver.Driver.familyName }}</td>
                    <td class="text-right">{{ driver.points }}</td>
                    <td class="text-right">
                        <q-badge class="q-pa-sm" :class="getColor(driver.Constructors[0].name)">
                            {{ driver.Constructors[0].name}}
                        </q-badge>
                    </td>
                </tr>
            </tbody>
        </q-markup-table>
    </q-card>
</template>

<script>
import { getColor } from "@/plugins/services";
export default {
    
    props: {
        drivers: { type: Object, default: undefined },
        loading : {type: Boolean, default: false}
    },
    methods: {
        getColor
    },
}
</script>

<style>

</style>
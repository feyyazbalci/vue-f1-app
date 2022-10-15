<template>
    <q-layout>
        <q-page-container>
            <q-page>
                <h4 class="text-center text-weight-bold">Seasons</h4>
                <div class="sezonlar justify-center q-my-md text-warning">
                    <q-select class="text-warning" standout="bg-grey text-warning" v-model="model" :options="options" label="Seasons" />
                </div>
            </q-page>
        </q-page-container>
    
    </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
    setup() {
        return {
            model: ref(null),
            options: [
                'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
            ]
        }
    }
}
</script>

<style>
    .sezonlar{
        max-width: 500px;
        margin: 0 auto;
    }
</style>
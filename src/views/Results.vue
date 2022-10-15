<template>
    <div v-if="!loading" class="justify-center">
        <ResultCard 
            v-if="race !== undefined" 
            :title="`Round #${race.round} `" 
            :last-race="race" 
            :loading="loading"
            :results="result" />
        <h1 v-else class="text-center">No results yet</h1>
    </div>
    <div class="row justify-center" v-else>
        <q-spinner-puff color="deep-orange" />
    </div>
</template>

<script>
import axios from "axios";
import ResultCard from "../components/ResultCard.vue";
export default {
    name: "Results",
    components: { ResultCard },
    data() {
        return {
            round: this.$route.params.id,
            loading: true,
            result: [],
            race: null
        }
    },
    mounted() {
        axios
            .get('https://ergast.com/api/f1/current/' + this.$route.params.id + '/results.json')
            .then((response) => {
                this.loading = false
                this.race = response.data.MRData.RaceTable.Races[0]
                if (this.race !== undefined) {
                    this.result = response.data.MRData.RaceTable.Races[0].Results
                }
            });
    }
}
</script>


<template>
    <div>
        <i 
            v-for="estrela in estrelas" 
            :key="estrela.id" 
            :class="estrela.estilo"
             @click="marcarAvaliacao(estrela.id)"
        ></i>
    </div>
</template>
<script>
export default {
    name: 'InputEstrelas',
    props: {
        numeroEstrelas: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        estrelas: [],
        avaliacao: 0
    }),
    methods: {
        iniciarEstrelas() {
            for(let i = 0; i < this.numeroEstrelas; i++) {
                this.estrelas[i] = { id: i, estilo: 'bi-star estrela'};
            }
        },
        marcarAvaliacao(numeroEstrelas) {
            this.avaliacao = numeroEstrelas + 1;
            this.iniciarEstrelas();
            for(let i = 0; i < this.avaliacao; i++) {
                this.estrelas[i].estilo = 'bi-star-fill estrela text-warning';
            }

            //enviar um evento personalizado
            this.$emit('update:avaliar', this.avaliacao);
        }
    },
    created() {
        this.iniciarEstrelas()
    }
}
</script>

<style scoped>
.estrela {
    font-size: 1.5rem;
    color: #999;
    margin-left: 1px;
    margin-right: 1px;
}
</style>
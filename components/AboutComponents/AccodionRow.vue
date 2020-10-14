<template>
    <div class="rowComp">
        <h4>Goals:</h4>
        <p style="display: none">{{accordionKey}}</p> <!-- temp fix -->
        <div class="rowContainer" :key="row.id" v-for="row in accordion">
            <div class="accordionHeader" :class="{ 'headerOpen' : openAccordionArray[row.id - 1] }" v-on:click="openAccordionArray[row.id - 1] = !openAccordionArray[row.id - 1]; accordionKey++">
                <p>{{row.title}}</p>
                <button class="toggleAccordBtn" ><fa v-if="!openAccordionArray[row.id - 1]" class="fas" :icon="['fas', 'chevron-down']" /><fa v-if="openAccordionArray[row.id - 1]" class="fas" :icon="['fas', 'chevron-up']" /></button>
            </div>
            <div class="accordionBody" :class="{ 'bodyOpen' : openAccordionArray[row.id - 1] }"  :key="accordionKey" v-if="openAccordionArray[row.id - 1]">
                <p>{{row.body}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            openAccordionArray: [],
            accordionKey: 0
        }
    },
    props: ['accordion'],
    mounted() {
        for (var i = 0; i < this.accordion.length; i++) {
            this.openAccordionArray.push(false)
        }
        this.openAccordionArray[0] = true
    },
    computed: {

    },
    methods: {

    }

}
</script>

<style scoped>
.rowComp {
    width: 100%;
    margin-top: 30px;
}
.rowComp h4 {
    padding: 0 5px 10px;
    color: #FFF;
}
.rowContainer {
    margin-bottom: 10px;
}
.rowContainer:last-child {
    margin-bottom: 0;
}
.rowContainer p {
    color: #FFF;
}
.accordionHeader {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
}
.accordionHeader p {
    font-weight: bold;
}
.headerOpen {
    border-radius: 20px 20px 0 0;
}
.toggleAccordBtn {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: #FFF;
    border: none;
    cursor: pointer;
}
.toggleAccordBtn .fas {
    font-size: 10px;
}
.accordionBody {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.10);
    border-radius: 20px;
    padding: 20px;
}
.bodyOpen {
    border-radius: 0 0 20px 20px; 
}

</style>
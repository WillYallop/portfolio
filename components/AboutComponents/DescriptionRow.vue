<template>
    <div class="rowComp">
        <h4>Description:</h4>
        <div class="rowContainer">
            <p class="bracketsP">[</p>
            <p class="descContentP">{{description}}</p>
            <p class="bracketsP">]</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: ['description']
}
</script>

<style scoped>
.rowComp {
    width: 100%;
    margin-top: 30px;
}
.rowComp h4 {
    padding: 0 5px 10px;
}
.rowContainer {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    padding: 20px;
}
.bracketsP {
    color: #FFF;
}
.descContentP {
    padding: 10px 0;
    color: #FFF;
}
</style>
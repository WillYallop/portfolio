<template>
    <div class="nextStepsCon">
        <div class="nextStepsHeader">
            <h4>The next<br>steps</h4>
            <p>If it’s a business inquiry this applies to you.</p>
        </div>
        <div class="nextStepsRowContainer"> 
            <div class="nextStepsRow">
                <div class="rowIcon">

                </div>
                <div class="iconLineDown"></div>
                <div class="rowTextarea">
                    <h4>1. We’ll scope out your project.</h4>
                    <p>We will discuss a timeline, the details of your project, your goals and a price.</p>
                </div>
            </div>
            <div class="nextStepsRow">
                <div class="rowIcon">

                </div>
                <div class="iconLineDown"></div>
                <div class="rowTextarea">
                    <h4>2. Starting the designs.</h4>
                    <p>Once we have agreed to move forwards, we can start working on designs and prototypes.</p>
                </div>    
            </div>
            <div class="nextStepsRow">
                <div class="rowIcon">

                </div>
                <div class="iconLineDown"></div>
                <div class="rowTextarea">
                    <h4>3. Finally.. building the site</h4>
                    <p>When you have a design you are happy with; we can start building the final product for you.</p>
                </div>
            </div>
        </div>
    </div>  
</template>

<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.nextStepsCon {
    width: 100%;
    height: 100%;
    background-color: #EBEBEB;
    border-radius: 0 20px 20px 0;
    padding: 30px;
}
.nextStepsHeader {
    margin-bottom: 30px;
}
.nextStepsHeader h4 {
    font-size: 30px;
    color: #000;
}
.nextStepsHeader p {
    margin-top: 30px;
    color: #242424;
}
.nextStepsRow {
    width: 100%;
    display: flex;
    margin-bottom: 20px;
    position: relative;
}
.nextStepsRow:last-child {
    margin-bottom: 0;
}
.rowIcon {
    width: 20px;
    min-width: 20px;
    height: 20px;
    border-radius: 5px;
    background-color: #1359FB;
}
.iconLineDown {
    position: absolute;
    height: 100%;
    top: 20px;
    left: 10px;
    width: 1px;
    background-color: #DDDDDD;
}
.nextStepsRow:last-child .iconLineDown {
    display: none;
}
.rowTextarea {
    padding-left: 10px;
}
.rowTextarea h4 {
    margin-bottom: 5px;
    color: #000;
}
.rowTextarea p {
    color: #242424;
}

@media only screen and (max-width: 1150px) {
  .nextStepsCon {border-radius: 20px;}
}
@media only screen and (max-width: 1024px) {
  .nextStepsCon {border-radius: 0 20px 20px 0;}
  .nextStepsCon {padding: 20px;}
}
@media only screen and (max-width: 750px) {
  .nextStepsCon {border-radius: 20px;}
}
</style>
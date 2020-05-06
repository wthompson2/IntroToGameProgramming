export default class ScorePlaceholder
{
    scoreFinish = 0;

    scoreIncrement(){
        this.scoreFinish++;
    }

    scoreReset(){
        this.scoreFinish = 0;
    }

    getScore(){
        return "" + this.scoreFinish;
    }
}
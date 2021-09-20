export default class DataStore {

    static myInstance = new DataStore();

    _currentGlobalStats = null;


    static getInstance() {
        if (!DataStore.myInstance) {
            DataStore.myInstance = new DataStore();
        }

        return this.myInstance;
    }

    getGlobalStatsData(){
        return this._currentGlobalStats;
    }

    setGlobalStatsData(data) {
        this._currentGlobalStats = data;
    }
    
}

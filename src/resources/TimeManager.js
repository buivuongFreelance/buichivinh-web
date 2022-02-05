export class TimeManager {
    static toTime = (n) => {
        const num = parseInt(n, 10);
        let value = num;
        if (num < 10) { value = "0" + num; }
        return value;
    }
}
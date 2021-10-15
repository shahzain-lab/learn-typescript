export class NumberCollection{
    constructor(public data: number[]){}

    get length(): number {
        return this.data.length
    }

    compare(leftInd: number, rightInd: number): boolean{
        return this.data[leftInd] > this.data[rightInd]
    }

    swap(leftInd: number, rightInd: number): void{
        const leftHand = this.data[leftInd];
        this.data[leftInd] = this.data[rightInd];
        this.data[rightInd] = leftHand
    }
}

const numberCollection = new NumberCollection([12 ,-7 ,43 ,0 ,-78])
numberCollection.length;
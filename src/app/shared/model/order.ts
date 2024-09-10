export class Order {
    constructor(
        public id: string,
        public date: string,
        public devolutionDate: string,
        public status: string,
        public price: number,
        public kitId: string,
        public planId: string,
        public clothesIds: string[],
        public userId: string,
    ){}
}
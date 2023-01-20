let roomDimensions = {
    with: 50,
    length: 100,
    getArea() {
        return this.with * this.length;
    }
}
let boundGetArea = getArea.bind(roomDimensions);
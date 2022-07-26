class NrubixCube {
    constructor(n, scene) {
        if (2 > n) throw new Error("n must be greater than 2");

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({
            vertexColors: true
        });
        const sides = []
        for (let i = 0; i < 6; i++) {
            const side = []
            for (let x = 0; x < n; x++) {
                const row = []
                row.length = n
                row.fill(i)
                side.push(row)
            }
            sides.push(side)
        }
        this.sides = sides
        this.colors = [0xc6cc0e, 0x0e7d2b, 0xd11e11, 0x2643c7, 0xffffff, 0xff731c]
    }
    rotate(index) {
        const side = this.sides[index]
        const sideCopy = []
        for (let i = 0; i < side.length; i++) {
            sideCopy[i] = []
            for (let j = side.length-1; j >= 0; j--) {
                sideCopy[i].push(
                    side[j][i])
            }
        }
        console.log(sideCopy)
        console.log(side)
    }
}
const rubix = new NrubixCube(10)
rubix.sides[3][0][0] = 10
rubix.rotate(3)

const canvasElement = document.querySelector(".bg");
const scene = new THREE.Scene(); 
const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    
const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );

/*const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xFF0000});
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );*/
const geometry = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
const material = new THREE.MeshBasicMaterial({
  vertexColors: true
});
const positionAttribute = geometry.getAttribute('position');
console.log(positionAttribute);
const colors = [];

const color = new THREE.Color();
const test = [0xc6cc0e, 0x0e7d2b, 0xd11e11, 0x2643c7, 0xffffff, 0xff731c]
let count = 0;
for (let i = 0; i < positionAttribute.count; i += 6) {

    color.setHex(test[count]);
    count++
    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);

    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);
    colors.push(color.r, color.g, color.b);

}
// define the new attribute
geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
const cube = new THREE.Mesh(geometry, material);

const geometry2 = new THREE.BoxGeometry(1, 1, 1).toNonIndexed();
const material2 = new THREE.MeshBasicMaterial({
  color: 0xf3299
});
const cube2 = new THREE.Mesh(geometry2, material2)
cube2.position.setZ(2)
const group = new THREE.Group()
group.add(cube)
group.add(cube2)
scene.add(group);


camera.position.setZ(10);

function animate() {
    // re render the scene when the page is ready
	requestAnimationFrame( animate );

    // do stuff
    group.rotation.x += 0.001;    
  
    // render the scene
	renderer.render( scene, camera );
}
animate();

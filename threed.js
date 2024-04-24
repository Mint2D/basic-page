import * as THREE from 'three'
import gsap from 'gsap'
import './style.css'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/* Object */

/* const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh = new THREE.Mesh(geometry, material)
 */

const group = new THREE.Group()
/* group.position.y = 1
group.scale.y = 1
group.rotation.y = 1 */
scene.add(group)

const firstCube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
firstCube.position.x = 0
group.add(firstCube)

/* const secondCube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
)

secondCube.position.x = -2
group.add(secondCube)

const thirdCube = new THREE.Mesh(
    new THREE.BoxGeometry(1,1,1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
)

thirdCube.position.x = 2
group.add(thirdCube) */

/* Position */
/* 
mesh.position.x = 0.7
mesh.position.y = 0.3 
mesh.position.z = 1
*/


/* mesh.position.set(0.7, -0.6, 1)
 */

/* Scale */
/* 
mesh.scale.x = 0.5
mesh.scale.y = 0.5 
mesh.scale.z = 2
*/

/* mesh.scale.set(2, 0.5, 0.5)
 */

/* Rotation */
/* mesh.rotation.reorder('YXZ')
mesh.rotation.x = Math.PI * 0.25
mesh.rotation.y = Math.PI * 0.25 */


/* Axes helper */
const axesHelper = new THREE.AxesHelper()
scene.add(axesHelper)

/**
 * Sizes
 */
const sizes = {
    width: 800,
    height: 600
}

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 4
scene.add(camera)

camera.lookAt(group.position)


/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)

// Clock
// const clock = new THREE.Clock()

gsap.to(group.position, { duration: 1, delay: 1, x: 2})
gsap.to(group.position, { duration: 1, delay: 2, x: 0})


//Time
/* let time = Date.now() */

function loop() {
    // Clock
    // const elapsedTime = clock.getElapsedTime()

    //Time
    /* const currentTime = Date.now()
    const deltaTime = currentTime - time
    time = currentTime */

    //Update Object
    /* group.rotation.y += 0.001 * deltaTime */
    // group.rotation.y = elapsedTime * Math.PI 
    // group.position.y = Math.sin(elapsedTime)
    // group.position.x = Math.cos(elapsedTime)

    // Camera
    /* camera.position.y = Math.sin(elapsedTime)
    camera.position.x = Math.cos(elapsedTime)
    camera.lookAt(group.position) */

    // Render
    renderer.render(scene, camera)

    window.requestAnimationFrame(loop)
}

loop()
let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
let renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
let geometry = new THREE.BoxGeometry(2, 2, 2)
let textureIndex = 0
let textureURL = [
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.gif',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQ36Li_NGgeQEnrU6pj7G0S5OkxPVfNjl35f4JOqBQK7N_TnoxkWEmkVLqlZS606fmjM&usqp=CAU',
    'https://www.the3rdsequence.com/texturedb/download/13/texture/jpg/256/dark+parquet-256x256.jpg',
]
let loader = new THREE.TextureLoader()
let material = new THREE.MeshBasicMaterial()
let cube = new THREE.Mesh(geometry, material)

camera.position.z = 5

loader.load(textureURL[textureIndex], (texture) => {
    material.map = texture
    textureIndex++
    scene.add(cube)
})

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    renderer.render(scene, camera)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize',onWindowResize,false)

window.addEventListener('click', () => {
    loader.load(textureURL[textureIndex], (texture) => {
        material.map = texture
        textureIndex++
        if (textureIndex > textureURL.length-1) {
            textureIndex = 0
        }
    })
})

animate()

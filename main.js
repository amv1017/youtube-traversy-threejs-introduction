// Brad Traversy - Getting Started With Three.JS

let scene, camera, renderer, cube;

function init() {
    scene = new THREE.Scene()
    camera = new THREE.PerspectiveCamera(75,(window.innerWidth / window.innerHeight),0.1,1000)
    renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    const geometry = new THREE.BoxGeometry(2, 2, 2)

    let textureurls = [
      'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/crate.gif',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuQ36Li_NGgeQEnrU6pj7G0S5OkxPVfNjl35f4JOqBQK7N_TnoxkWEmkVLqlZS606fmjM&usqp=CAU',
      'https://www.the3rdsequence.com/texturedb/download/13/texture/jpg/256/dark+parquet-256x256.jpg',
      'https://thumbs.dreamstime.com/b/square-background-light-blue-abstract-postcard-83587745.jpg',
      'https://5.imimg.com/data5/CN/NH/MY-2/wallpaper1-jpg-500x500.jpg'
    ]
    const textureurl = textureurls[0]
    const texture = new THREE.TextureLoader().load(textureurl)
    // const material = new THREE.MeshBasicMaterial({color: 0x0000ff})
    const material = new THREE.MeshBasicMaterial({map: texture})
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube)
    camera.position.z = 5
}

function animate() {
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
    renderer.render(scene,camera)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize',onWindowResize,false)

init()
animate()

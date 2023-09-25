import * as THREE from './three.module.js'
import { MapControls } from './MapControls.js';

const scene = new THREE.Scene();
scene.background = new  THREE.TextureLoader().load(
    './hmaps/cloud.jpg');




/*bottom_normal(783) , top_weird(1) , top_normal(1440), bottom_weird(250) */


    const camera = new THREE.PerspectiveCamera( 60, 1440 / 783, 1, 1000 );
    camera.position.set( 100, 25, 100 );





const renderer = new
THREE.WebGLRenderer();
renderer.setSize(1440, 
783);
document.body.appendChild(
    renderer.domElement);
    


    const light = new THREE.AmbientLight('white', 3);
    scene.add(light);
    



   const texture2 = new THREE.TextureLoader().load('./hmaps/text.png');
    const texture3 = new THREE.TextureLoader().load('./hmaps/Colormapp.png');
       


    const geometry = new THREE.BoxGeometry(300,0,300,400,40,40);
    geometry.translate( 0, 0.5, 0 );
    const material = new THREE.MeshStandardMaterial( { map : texture3, displacementMap: texture2, displacementScale: -20, wireframe: false} );







    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);











   


    const controls = new MapControls( camera, renderer.domElement );

    //controls.addEventListener( 'change', render ); // call this only in static scenes (i.e., if there is no animation loop)

    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.dampingFactor = 0.05;

    controls.screenSpacePanning = false;

    controls.minDistance = .1;
    controls.maxDistance = 500;

    controls.maxPolarAngle = Math.PI / 2;




    function animate(){
        requestAnimationFrame(animate);
       controls.update();
        renderer.render(scene, camera);
      }

      animate();

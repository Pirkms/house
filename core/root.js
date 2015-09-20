/**
 * Created by Pirk on 20.09.2015.
 */
"use strict";

var renderer = new THREE.WebGLRenderer({canvas: document.getElementById("frame")});
renderer.setSize(320, 240);

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, 4 / 3, 0.1, 1000 );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshPhongMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

var light = new THREE.PointLight();
scene.add( light );

light.position.z = 4;
camera.position.z = 5;

(function render() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    requestAnimationFrame( render );
    renderer.render( scene, camera );
})();
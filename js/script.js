var scene, camera, renderer, light;
var geometry, material, mesh;

init();
animate();

function init() {
	scene = new THREE.Scene();
	
	light = new THREE.AmbientLight(0xffffff, 0.5);
	scene.add(light);
	
	light1 = new THREE.PointLight(0xffffff, 0.5);
	scene.add(light1);

	camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);

	geometry = new THREE.BoxGeometry(100, 100, 100);
	material = new THREE.MeshLambertMaterial({
		color: 0xff0000,
		//		wireframe: true
	});

	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(0, 0, -1000);
	scene.add(mesh);

	renderer = new THREE.WebGLRenderer({
		canvas: document.getElementById('mainCanvas'),
		antialias: true
	});
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(0xffffff);
	renderer.setPixelRatio(window.devicePixelRatio);
}

function animate() {
	requestAnimationFrame(animate);
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.02;
	renderer.render(scene, camera);
}

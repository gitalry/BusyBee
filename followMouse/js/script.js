        /*Your Custom Javascript file goes here.*/

(function () {
	var Particle, particleCount, particles, sketch, z;
    sketch = Sketch.create();
    particles = [];
    particleCount = 750;
    sketch.mouse.x = sketch.width / 2;
    sketch.mouse.y = sketch.height / 2;
    sketch.strokeStyle = 'hsla(200, 50%, 50%, .4)';
    sketch.globalCompositeOperation = 'lighter';
    Particle = function () {
        this.x = random(sketch.width);
        this.y = random(sketch.height, sketch.height * 2);
        this.vx = 0;
        this.vy = -random(1, 10) / 5;
        this.radius = this.baseRadius = 1;
        this.maxRadius = 50;
        this.threshold = 150;
        return this.hue = random(180, 240);
    };



}.call(this));
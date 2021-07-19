//Express
var imageObjExpress = new Image();
imageObjExpress.onload = function () {
    var Express = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjExpress,
        name: 'Express',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=express-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Express])
            layer.add(Express);
        } else {
            tr1.nodes([]);
            Express.remove();
        }
    });
    transformers.push(tr1);
};
imageObjExpress.src = './assets/express.png';

//Flask
var imageObjFlask = new Image();
imageObjFlask.onload = function () {
    var Flask = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjFlask,
        name: 'Flask',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=Flask-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Flask])
            layer.add(Flask);
        } else {
            tr1.nodes([]);
            Flask.remove();
        }
    });
    transformers.push(tr1);
};
imageObjFlask.src = './assets/Flask.png';

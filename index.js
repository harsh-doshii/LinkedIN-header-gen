var width = window.innerWidth;
var height = window.innerHeight;
const min = 0;
const max = 91;
var stage = new Konva.Stage({
    container: 'container',
    width: 800,
    height: 200,
});
var layer = new Konva.Layer();
var background_layer = new Konva.Layer();
stage.add(background_layer);


var img = new Image();
img.src = "./assets/bg2.png"

img.onload = function () {
    var background = new Konva.Rect({
        x: 0,
        y: 0,
        width: stage.width(),
        height: stage.height(),
        illLinearGradientStartPoint: { x: 0, y: 0 },
        fillLinearGradientEndPoint: { x: stage.width(), y: stage.height() },
        fillPatternImage: img,
    });

    background_layer.add(background);
}


document.getElementById("bg").onclick = function () {
    img.src = "./assets/bg.png"

};

document.getElementById("bg2").onclick = function () {
    img.src = "./assets/bg2.png"
};
document.getElementById("bg3").onclick = function () {
    img.src = "./assets/bg3.png"
};
document.getElementById("bg4").onclick = function () {
    img.src = "./assets/bg4.png"
};
document.getElementById("bg5").onclick = function () {
    img.src = "./assets/bg5.png"
};
document.getElementById("bg6").onclick = function () {
    img.src = "./assets/bg6.png"
};
document.getElementById("bg7").onclick = function () {
    img.src = "./assets/bg7.png"
};
stage.add(layer);


var transformers = [];

var imageObjReact = new Image();
imageObjReact.onload = function () {
    var react = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 100),
        draggable: true,
        image: imageObjReact,
        name: 'react',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=react-check]");
    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([react]);
            layer.add(react);
        } else {
            tr1.nodes([]);
            react.remove();
        }
    });
    transformers.push(tr1);
};
imageObjReact.src = './assets/react2.png';

var imageObjGit = new Image();
imageObjGit.onload = function () {
    var Git = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjGit,
        name: 'Git',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=github-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Git])
            layer.add(Git);
        } else {
            tr1.nodes([]);
            Git.remove();
        }
    });
    transformers.push(tr1);
};
imageObjGit.src = './assets/github.png';

var imageObjCPP = new Image();
imageObjCPP.onload = function () {
    var CPP = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjCPP,
        name: 'CPP',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=cpp-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([CPP])
            layer.add(CPP);
        } else {
            tr1.nodes([]);
            CPP.remove();
        }
    });
    transformers.push(tr1);
};
imageObjCPP.src = './assets/cpp.png';



// const languages2 = ["docker", "java"];
// languages2.forEach(myFunction2);
// function myFunction2(value) {
//     var imageObj = new Image();
//     imageObj.onload = function () {
//         var value = new Konva.Image({
//             x: 50,
//             y: 50,
//             draggable: true,
//             image: imageObj,
//             name: `${value}`,
//         });
//     };
//     imageObj.src = `./assets/${value}.png`
//     layer.add(`${value}`);
// }

var imageObjDocker = new Image();
imageObjDocker.onload = function () {
    var Docker = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjDocker,
        name: 'Docker',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=docker-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Docker])
            layer.add(Docker);
        } else {
            tr1.nodes([]);
            Docker.remove();
        }
    });
    transformers.push(tr1);
};
imageObjDocker.src = './assets/docker.png';

var imageObjJava = new Image();
imageObjJava.onload = function () {
    var Java = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjJava,
        name: 'Java',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=java-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Java])
            layer.add(Java);
        } else {
            tr1.nodes([]);
            Java.remove();
        }
    });
    transformers.push(tr1);
};
imageObjJava.src = './assets/java.png';

var imageObjJavascript = new Image();
imageObjJavascript.onload = function () {
    var Javascript = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjJavascript,
        name: 'Javascript',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=javascript-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Javascript])
            layer.add(Javascript);
        } else {
            tr1.nodes([]);
            Javascript.remove();
        }
    });
    transformers.push(tr1);
};
imageObjJavascript.src = './assets/javascript.png';


var imageObjPostgresql = new Image();
imageObjPostgresql.onload = function () {
    var Postgresql = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjPostgresql,
        name: 'Postgresql',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=postgresql-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Postgresql])
            layer.add(Postgresql);
        } else {
            tr1.nodes([]);
            Postgresql.remove();
        }
    });
    transformers.push(tr1);
};
imageObjPostgresql.src = './assets/postgresql.png';

var imageObjPython = new Image();
imageObjPython.onload = function () {
    var Python = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjPython,
        name: 'Python',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=python-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Python])
            layer.add(Python);
        } else {
            tr1.nodes([])
            Python.remove();
        }
    });
    transformers.push(tr1);
};
imageObjPython.src = './assets/python.png';

var imageObjSwift = new Image();
imageObjSwift.onload = function () {
    var Swift = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjSwift,
        name: 'Swift',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=swift-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Swift])
            layer.add(Swift);
        } else {
            tr1.nodes([]);
            Swift.remove();
        }
    });
    transformers.push(tr1);
};
imageObjSwift.src = './assets/swift.png';


var imageObjGolang = new Image();
imageObjGolang.onload = function () {
    var Golang = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjGolang,
        name: 'Golang',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=golang-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Golang])
            layer.add(Golang);
        } else {
            tr1.nodes([]);
            Golang.remove();
        }
    });
    transformers.push(tr1);
};
imageObjGolang.src = './assets/golang.png';

var imageObjDjango = new Image();
imageObjDjango.onload = function () {
    var Django = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjDjango,
        name: 'Django',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=django-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Django])
            layer.add(Django);
        } else {
            tr1.nodes([]);
            Django.remove();
        }
    });
    transformers.push(tr1);
};
imageObjDjango.src = './assets/django.png';

var imageObjNPM = new Image();
imageObjNPM.onload = function () {
    var NPM = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjNPM,
        name: 'NPM',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=npm-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([NPM])
            layer.add(NPM);
        } else {
            tr1.nodes([]);
            NPM.remove();
        }
    });
    transformers.push(tr1);
};
imageObjNPM.src = './assets/npm.png';
//document.querySelectorAll('img').forEach(image => { image.crossOrigin = 'Anonymous'; image.src += ' '; })

// redis

var imageObjRedis = new Image();
imageObjRedis.onload = function () {
    var Redis = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjRedis,
        name: 'Redis',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=redis-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Redis])
            layer.add(Redis);
        } else {
            tr1.nodes([]);
            Redis.remove();
        }
    });
    transformers.push(tr1);
};
imageObjRedis.src = './assets/redis.png';
//Bootstrap
var imageObjBootstrap = new Image();
imageObjBootstrap.onload = function () {
    var Bootstrap = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjBootstrap,
        name: 'Bootstrap',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=bootstrap-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Bootstrap])
            layer.add(Bootstrap);
        } else {
            tr1.nodes([]);
            Bootstrap.remove();
        }
    });
    transformers.push(tr1);
};
imageObjBootstrap.src = './assets/bootstrap.png';
//Node
var imageObjNode = new Image();
imageObjNode.onload = function () {
    var Node = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjNode,
        name: 'Node',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=node-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Node])
            layer.add(Node);
        } else {
            tr1.nodes([]);
            Node.remove();
        }
    });
    transformers.push(tr1);
};
imageObjNode.src = './assets/node.png';

//PHP
var imageObjPHP = new Image();
imageObjPHP.onload = function () {
    var PHP = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjPHP,
        name: 'PHP',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=php-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([PHP])
            layer.add(PHP);
        } else {
            tr1.nodes([]);
            PHP.remove();
        }
    });
    transformers.push(tr1);
};
imageObjPHP.src = './assets/php.png';

//MongoDB
var imageObjMongoDB = new Image();
imageObjMongoDB.onload = function () {
    var MongoDB = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjMongoDB,
        name: 'MongoDB',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=mongodb-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([MongoDB])
            layer.add(MongoDB);
        } else {
            tr1.nodes([]);
            MongoDB.remove();
        }
    });
    transformers.push(tr1);
};
imageObjMongoDB.src = './assets/mongodb.png';

//HTML
var imageObjHTML = new Image();
imageObjHTML.onload = function () {
    var HTML = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjHTML,
        name: 'HTML',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=html-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([HTML])
            layer.add(HTML);
        } else {
            tr1.nodes([]);
            HTML.remove();
        }
    });
    transformers.push(tr1);
};
imageObjHTML.src = './assets/html.png';

//CSS
var imageObjCSS = new Image();
imageObjCSS.onload = function () {
    var CSS = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjCSS,
        name: 'CSS',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=css-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([CSS])
            layer.add(CSS);
        } else {
            tr1.nodes([]);
            CSS.remove();
        }
    });
    transformers.push(tr1);
};
imageObjCSS.src = './assets/css.png';

//Ruby
var imageObjRuby = new Image();
imageObjRuby.onload = function () {
    var Ruby = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjRuby,
        name: 'Ruby',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=ruby-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Ruby])
            layer.add(Ruby);
        } else {
            tr1.nodes([]);
            Ruby.remove();
        }
    });
    transformers.push(tr1);
};
imageObjRuby.src = './assets/ruby.png';


//Laravel
var imageObjLaravel = new Image();
imageObjLaravel.onload = function () {
    var Laravel = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjLaravel,
        name: 'Laravel',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=laravel-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Laravel])
            layer.add(Laravel);
        } else {
            tr1.nodes([]);
            Laravel.remove();
        }
    });
    transformers.push(tr1);
};
imageObjLaravel.src = './assets/laravel.png';

//Rails
var imageObjRails = new Image();
imageObjRails.onload = function () {
    var Rails = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjRails,
        name: 'Rails',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=rails-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Rails])
            layer.add(Rails);
        } else {
            tr1.nodes([]);
            Rails.remove();
        }
    });
    transformers.push(tr1);
};
imageObjRails.src = './assets/rails.png';

//Angular
var imageObjAngular = new Image();
imageObjAngular.onload = function () {
    var Angular = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjAngular,
        name: 'Angular',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=angular-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Angular])
            layer.add(Angular);
        } else {
            tr1.nodes([]);
            Angular.remove();
        }
    });
    transformers.push(tr1);
};
imageObjAngular.src = './assets/angular.png';




//Wordpress
var imageObjWordpress = new Image();
imageObjWordpress.onload = function () {
    var Wordpress = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjWordpress,
        name: 'Wordpress',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=wordpress-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Wordpress])
            layer.add(Wordpress);
        } else {
            tr1.nodes([]);
            Wordpress.remove();
        }
    });
    transformers.push(tr1);
};
imageObjWordpress.src = './assets/wordpress.png';

//Gulp
var imageObjGulp = new Image();
imageObjGulp.onload = function () {
    var Gulp = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjGulp,
        name: 'Gulp',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=gulp-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Gulp])
            layer.add(Gulp);
        } else {
            tr1.nodes([]);
            gulp.remove();
        }
    });
    transformers.push(tr1);
};
imageObjGulp.src = './assets/Gulp.png';


//Drupal
var imageObjDrupal = new Image();
imageObjDrupal.onload = function () {
    var Drupal = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjDrupal,
        name: 'Drupal',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=drupal-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Drupal])
            layer.add(Drupal);
        } else {
            tr1.nodes([]);
            Drupal.remove();
        }
    });
    transformers.push(tr1);
};
imageObjDrupal.src = './assets/drupal.png';

//MySQL
var imageObjMySQL = new Image();
imageObjMySQL.onload = function () {
    var MySQL = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjMySQL,
        name: 'MySQL',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=mysql-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([MySQL])
            layer.add(MySQL);
        } else {
            tr1.nodes([]);
            MySQL.remove();
        }
    });
    transformers.push(tr1);
};
imageObjMySQL.src = './assets/mysql.png';

//Vim
var imageObjVim = new Image();
imageObjVim.onload = function () {
    var Vim = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjVim,
        name: 'Vim',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=vim-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Vim])
            layer.add(Vim);
        } else {
            tr1.nodes([]);
            Vim.remove();
        }
    });
    transformers.push(tr1);
};
imageObjVim.src = './assets/vim.png';


//Joomla
var imageObjJoomla = new Image();
imageObjJoomla.onload = function () {
    var Joomla = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjJoomla,
        name: 'Joomla',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=joomla-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Joomla])
            layer.add(Joomla);
        } else {
            tr1.nodes([]);
            Joomla.remove();
        }
    });
    transformers.push(tr1);
};
imageObjJoomla.src = './assets/joomla.png';


//AWS
var imageObjAWS = new Image();
imageObjAWS.onload = function () {
    var AWS = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjAWS,
        name: 'AWS',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=aws-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([AWS])
            layer.add(AWS);
        } else {
            tr1.nodes([]);
            AWS.remove();
        }
    });
    transformers.push(tr1);
};
imageObjAWS.src = './assets/aws.png';


//Heroku
var imageObjHeroku = new Image();
imageObjHeroku.onload = function () {
    var Heroku = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjHeroku,
        name: 'Heroku',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=heroku-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Heroku])
            layer.add(Heroku);
        } else {
            tr1.nodes([]);
            Heroku.remove();
        }
    });
    transformers.push(tr1);
};
imageObjHeroku.src = './assets/heroku.png';


//Flutter
var imageObjFlutter = new Image();
imageObjFlutter.onload = function () {
    var Flutter = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjFlutter,
        name: 'Flutter',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=flutter-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Flutter])
            layer.add(Flutter);
        } else {
            tr1.nodes([]);
            Flutter.remove();
        }
    });
    transformers.push(tr1);
};
imageObjFlutter.src = './assets/flutter.png';


//Spring
var imageObjSpring = new Image();
imageObjSpring.onload = function () {
    var Spring = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjSpring,
        name: 'Spring',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=spring-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Spring])
            layer.add(Spring);
        } else {
            tr1.nodes([]);
            Spring.remove();
        }
    });
    transformers.push(tr1);
};
imageObjSpring.src = './assets/spring.png';

//Tensorflow
var imageObjTensorflow = new Image();
imageObjTensorflow.onload = function () {
    var Tensorflow = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjTensorflow,
        name: 'Tensorflow',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=tensorflow-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Tensorflow])
            layer.add(Tensorflow);
        } else {
            tr1.nodes([]);
            Tensorflow.remove();
        }
    });
    transformers.push(tr1);
};
imageObjTensorflow.src = './assets/tensorflow.png';

//C
var imageObjC = new Image();
imageObjC.onload = function () {
    var C = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjC,
        name: 'C',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=c-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([C])
            layer.add(C);
        } else {
            tr1.nodes([]);
            C.remove();
        }
    });
    transformers.push(tr1);
};
imageObjC.src = './assets/c.png';

//Hadoop
var imageObjHadoop = new Image();
imageObjHadoop.onload = function () {
    var Hadoop = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjHadoop,
        name: 'Hadoop',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=hadoop-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Hadoop])
            layer.add(Hadoop);
        } else {
            tr1.nodes([]);
            Hadoop.remove();
        }
    });
    transformers.push(tr1);
};
imageObjHadoop.src = './assets/hadoop.png';

//SQL
var imageObjSQL = new Image();
imageObjSQL.onload = function () {
    var SQL = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjSQL,
        name: 'SQL',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=sql-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([SQL])
            layer.add(SQL);
        } else {
            tr1.nodes([]);
            SQL.remove();
        }
    });
    transformers.push(tr1);
};
imageObjSQL.src = './assets/sql.png';

//Illustrator
var imageObjIllustrator = new Image();
imageObjIllustrator.onload = function () {
    var Illustrator = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjIllustrator,
        name: 'Illustrator',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=illustrator-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([Illustrator])
            layer.add(Illustrator);
        } else {
            tr1.nodes([]);
            Illustrator.remove();
        }
    });
    transformers.push(tr1);
};
imageObjIllustrator.src = './assets/illustrator.png';

//NET
var imageObjNET = new Image();
imageObjNET.onload = function () {
    var NET = new Konva.Image({
        x: (Math.random() * 700),
        y: (Math.random() * 91),
        draggable: true,
        image: imageObjNET,
        name: 'NET',
    });
    var tr1 = new Konva.Transformer({
        nodes: [],
        centeredScaling: true,
        rotationSnaps: [0, 90, 180, 270],
        resizeEnabled: true,
    });
    layer.add(tr1);
    
    var checkbox = document.querySelector("input[name=net-check]");

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            tr1.nodes([NET])
            layer.add(NET);
        } else {
            tr1.nodes([]);
            NET.remove();
        }
    });
    transformers.push(tr1);
};
imageObjNET.src = './assets/net.png';

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
    
    var checkbox = document.querySelector("input[name=flask-check]");

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
imageObjFlask.src = './assets/flask.png';

// //save as image
function downloadURI(uri, name) {
    // tr1.nodes([]);
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}

document.getElementById('save').addEventListener(
    'click',
    function () {
        transformers.forEach(remove_t);
        function remove_t(tr){
            tr.nodes([]);
        }
        var dataURL = stage.toDataURL();
        downloadURI(dataURL, 'stage.png');
    },
    false
);

document.getElementById('view').addEventListener(
    'click',
    function () {
        transformers.forEach(remove_t);
        function remove_t(tr){
            tr.nodes([]);
        }
    },
);


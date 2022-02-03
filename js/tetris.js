const canvas = document.getElementById("renderCanvas"); // Get the canvas element
const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

const createScene = function(){
    const scene = new BABYLON.Scene(engine);
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI /2,Math.PI /2.5, 10, new BABYLON.Vector3(0,0,0));
    camera.attachControl(canvas,true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1,1,0));

    const buildT = () =>{
        const tMat = new BABYLON.StandardMaterial("tMat");
        tMat.diffuseColor = new BABYLON.Color3(1,0,0);
    
        const bottomTbox = new BABYLON.MeshBuilder.CreateBox("bottomTbox", {});
        bottomTbox.material = tMat;
        bottomTbox.position.y = -1;
        const middleTbox = new BABYLON.MeshBuilder.CreateBox("middleTbox", {});
        middleTbox.material = tMat;
        const rightTbox = new BABYLON.MeshBuilder.CreateBox("rightTbox", {});
        rightTbox.material = tMat;
        rightTbox.position.x = 1;
        const leftTbox = new BABYLON.MeshBuilder.CreateBox("leftTbox", {});
        leftTbox.material = tMat;
        leftTbox.position.x = -1;
    
        scene.onKeyboardObservable.add((kbInfo) => {
            switch (kbInfo.type) {
                case BABYLON.KeyboardEventTypes.KEYDOWN:
                    switch (kbInfo.event.key) {
                        case "a":
                        case "A":
                            T.rotation.y = -Math.PI /2;
                        break
                        case "d":
                        case "D":
                            T.position.y = Math.PI/2;
                        break
                        case "w":
                        case "W":
                            T.position.y += 0.1;
                        break
                        case "s":
                        case "S":
                            T.position.y -= 0.1;
                        break
                    }
                break;
            }
        });
    }
    const T = buildT("T", {}, scene);
    
    return scene;
}



const buildO = () =>{
    const oMat = new BABYLON.StandardMaterial("oMat");
    oMat.diffuseColor = new BABYLON.Color3(1,1,0);

    const bottomrightObox = new BABYLON.MeshBuilder.CreateBox("bottomrightObox", {});
    bottomrightObox.material = oMat;
    bottomrightObox.position.y = -0.5;
    bottomrightObox.position.x = 0.5
    const toprightObox = new BABYLON.MeshBuilder.CreateBox("toprightObox", {});
    toprightObox.material = oMat;
    toprightObox.position.y = 0.5;
    toprightObox.position.x = 0.5;
    const topleftObox = new BABYLON.MeshBuilder.CreateBox("topleftObox", {});
    topleftObox.material = oMat;
    topleftObox.position.x = -0.5;
    topleftObox.position.y = 0.5;
    const bottomleftObox = new BABYLON.MeshBuilder.CreateBox("bottomleftObox", {});
    bottomleftObox.material = oMat;
    bottomleftObox.position.x = -0.5;
    bottomleftObox.position.y = -0.5;
}

const buildL = () =>{
    const lMat = new BABYLON.StandardMaterial("lMat");
    lMat.diffuseColor = new BABYLON.Color3(0,0,1);

    const bottomrightLbox = new BABYLON.MeshBuilder.CreateBox("bottomrightLbox", {});
    bottomrightLbox.material = lMat;
    bottomrightLbox.position.y = 0;
    bottomrightLbox.position.x = 1;
    const bottomLbox = new BABYLON.MeshBuilder.CreateBox("bottomLbox", {});
    bottomLbox.material = lMat;
    bottomLbox.position.y = 0;
    bottomLbox.position.x = 0;
    const middleLbox = new BABYLON.MeshBuilder.CreateBox("middleLbox", {});
    middleLbox.material = lMat;
    middleLbox.position.x = 0;
    middleLbox.position.y = 1;
    const topLbox = new BABYLON.MeshBuilder.CreateBox("topLbox", {});
    topLbox.material = lMat;
    topLbox.position.x = 0;
    topLbox.position.y = 2;
}

const buildJ = () =>{
    const jMat = new BABYLON.StandardMaterial("jMat");
    jMat.diffuseColor = new BABYLON.Color3(0,1,0);

    const bottomleftJbox = new BABYLON.MeshBuilder.CreateBox("bottomleftJbox", {});
    bottomleftJbox.material = jMat;
    bottomleftJbox.position.y = 0;
    bottomleftJbox.position.x = -1;
    const bottomJbox = new BABYLON.MeshBuilder.CreateBox("bottomJbox", {});
    bottomJbox.material = jMat;
    bottomJbox.position.y = 0;
    bottomJbox.position.x = 0;
    const middleJbox = new BABYLON.MeshBuilder.CreateBox("middleJbox", {});
    middleJbox.material = jMat;
    middleJbox.position.x = 0;
    middleJbox.position.y = 1;
    const topJbox = new BABYLON.MeshBuilder.CreateBox("topJbox", {});
    topJbox.material = jMat;
    topJbox.position.x = 0;
    topJbox.position.y = 2;
}

const buildZ = () =>{
    const zMat = new BABYLON.StandardMaterial("zMat");
    zMat.diffuseColor = new BABYLON.Color3(0,1,1);

    const bottomZbox = new BABYLON.MeshBuilder.CreateBox("bottomZbox", {});
    bottomZbox.material = zMat;
    bottomZbox.position.y = -1;
    const middleZbox = new BABYLON.MeshBuilder.CreateBox("middleZbox", {});
    middleZbox.material = zMat;
    const rightZbox = new BABYLON.MeshBuilder.CreateBox("rightZbox", {});
    rightZbox.material = zMat;
    rightZbox.position.x = 1;
    rightZbox.position.y = -1;
    const leftZbox = new BABYLON.MeshBuilder.CreateBox("leftZbox", {});
    leftZbox.material = zMat;
    leftZbox.position.x = -1;
    
}

const buildS = () =>{
    const sMat = new BABYLON.StandardMaterial("sMat");
    sMat.diffuseColor = new BABYLON.Color3(1,0,1);

    const bottomSbox = new BABYLON.MeshBuilder.CreateBox("bottomSbox", {});
    bottomSbox.material = sMat;
    bottomSbox.position.y = -1;
    const middleSbox = new BABYLON.MeshBuilder.CreateBox("middleSbox", {});
    middleSbox.material = sMat;
    const rightSbox = new BABYLON.MeshBuilder.CreateBox("rightSbox", {});
    rightSbox.material = sMat;
    rightSbox.position.x = 1;
    
    const leftSbox = new BABYLON.MeshBuilder.CreateBox("leftSbox", {});
    leftSbox.material = sMat;
    leftSbox.position.x = -1;
    leftSbox.position.y = -1;
}

const buildI = () =>{
    const iMat = new BABYLON.StandardMaterial("iMat");
    iMat.diffuseColor = new BABYLON.Color3(1,1,1);

    const bottom2Ibox = new BABYLON.MeshBuilder.CreateBox("bottom2Ibox", {});
    bottom2Ibox.material = iMat;
    bottom2Ibox.position.y = -1;
    bottom2Ibox.position.x = 0;
    const bottomIbox = new BABYLON.MeshBuilder.CreateBox("bottomIbox", {});
    bottomIbox.material = iMat;
    bottomIbox.position.y = 0;
    bottomIbox.position.x = 0;
    const middleIbox = new BABYLON.MeshBuilder.CreateBox("middleIbox", {});
    middleIbox.material = iMat;
    middleIbox.position.x = 0;
    middleIbox.position.y = 1;
    const topIbox = new BABYLON.MeshBuilder.CreateBox("topIbox", {});
    topIbox.material = iMat;
    topIbox.position.x = 0;
    topIbox.position.y = 2;
}



const scene = createScene();

engine.runRenderLoop(function () {
        scene.render();
});

window.addEventListener("resize", function () {
        engine.resize();
});

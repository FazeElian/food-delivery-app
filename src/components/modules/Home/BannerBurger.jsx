// Estilos para este componente
import "../../../assets/css/views/modules/Home/BannerBurger.css";

// Librería de animaciones css
import 'animate.css';

// Canvas de three js fiber
import {Canvas} from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";
import React, { Suspense } from "react";

// Componente de Modelo de Hamburguesa
import { BurgerModel } from "./BurgerModel";

import CocaColaImage from "../../../assets/img/modules/Home/coca-cola.png";
import FrenchFriesImage from "../../../assets/img/modules/Home/french-fries-mc-donals.png";

const BannerBurger = () => {
    // Define los límites de rotación
    const maxPolarAngle = Math.PI / 2; // Limita la rotación hacia abajo
    const minPolarAngle = Math.PI / 4; // Limita la rotación hacia arriba

    // Define los límites de posición
    const maxAzimuthAngle = Math.PI / 2; // Limita la posición hacia la derecha
    const minAzimuthAngle = -Math.PI / 2; // Limita la posición hacia la izquierda

    return(
        <>
            <nav className="cont-banner-burger">
                <div className="container-burger-model--info">
                    <div className="cont-burger" style={{ position: 'relative', zIndex: 1 }}>
                        <Canvas camera={{zoom: 3, position:[20, 12, 20]}} className="banner-burger-model">
                            <ambientLight intensity={0.75} /> 
                            <Suspense fallback={null} />
                            <OrbitControls 
                                enableZoom={false} // Desactivar hacer zoom al modelo 
                                maxPolarAngle={maxPolarAngle} // Valor polar (Eje Y) mínimo
                                minPolarAngle={minPolarAngle} // Valor polar (Eje Y) máximo
                                maxAzimuthAngle={maxAzimuthAngle} // Valor meridional (Eje X) máximo
                                minAzimuthAngle={minAzimuthAngle} // Valor meridional (Eje X) mínimo
                            /> 

                            <pointLight position={[2, 15, 2]} intensity={100} />
                            <pointLight position={[4, 15, 4]} intensity={100} />
                            <pointLight position={[20, 10, 20]} intensity={300} />
                            <pointLight position={[1, 0.5, 1]} intensity={100} />
                            <pointLight position={[1, 1, 1]} intensity={200} />
                            <pointLight position={[10, 0.5, 10]} intensity={150} />

                            <BurgerModel />
                        </Canvas>
                    </div>
                    <div className="cont-info-burger">
                        <h2>Hamburguesa Express</h2>
                        <div className="content-burger-price">
                            <h3>Sólo por </h3>
                            <h1>4.500 $</h1>
                        </div>
                    </div>
                </div>
                <div className="cont-include-burger">
                    <div className="content-cont-include-burger">
                        <div className="cont-includes-burger">
                            <h2>Incluye: </h2>
                            <div className="cont-elements-include">
                                <div className="cont-element-include">
                                    <img src={CocaColaImage} alt="" />
                                    <p>Coca Cola en lata 200 ml</p>
                                </div>
                                <div className="cont-element-include cont-include-paragraph-btm">
                                    <img src={FrenchFriesImage} alt="" />
                                    <p>Papas fritas 40 g</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export { BannerBurger };
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
import FrenchFriesImage from "../../../assets/img/modules/Home/french-fries.png";

const BannerBurger = () => {
    return(
        <>
            <nav className="cont-banner-burger">
                <div className="cont-burger">
                    <Canvas camera={{zoom: 3, position:[20, 12, 20]}} className="banner-burger-model animate__animated animate__pulse animate__repeat-2">
                        <ambientLight intensity={0.75} /> 
                        <Suspense fallback={null} />
                        <OrbitControls enableZoom={false} /> 

                        <pointLight position={[2, 15, 2]} intensity={100} />
                        <pointLight position={[1, 0.5, 1]} intensity={100} />
                        <pointLight position={[1, 1, 1]} intensity={400} />
                        <pointLight position={[1, 1, 1]} intensity={400} />
                        <pointLight position={[10, 0.5, 10]} intensity={380} />

                        <BurgerModel />
                    </Canvas>
                </div>
                <div className="cont-content-burger">
                    <h2>Hamburguesa Express</h2>
                    <div className="content-burger-price">
                        <h3>Sólo por </h3>
                        <h1>4.500 $</h1>
                    </div>
                </div>
                <div className="cont-content-burger cont-include-burger">
                    <div className="content-cont-include-burger">
                        <div className="cont-includes-burger">
                            <h2>Incluye: </h2>
                            <div className="cont-elements-include">
                                <div className="cont-element-include">
                                    <img src={CocaColaImage} alt="" />
                                    <p>Coca Cola personal 400 ml</p>
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
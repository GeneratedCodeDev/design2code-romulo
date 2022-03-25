import React, { useState, useEffect } from 'react';

import VectorImage from './assets/17400_153106.png'
import ChooseALocationVector2Image from './assets/17400_988219.png'
import ChooseALocationVector1Image from './assets/17400_1005930.png'
import ChooseALocationVectorImage from './assets/17400_1013981.png'


import {
ProductCard,
ButtonTeste,
ButtonHelper,
ButtonAbort,
Vector,
ChooseALocationVector2,
ChooseALocationVector1,
ButtonTeste4,
Teste56,
ButtonMarcel,
ButtonMarcel4123,
ButtomRomulo,
} from './styles';

const ProductCardPage = () => {






const handleButtonTeste = () => {
console.log(handleButtonTeste )
};
const handleButtonHelper = () => {
console.log(handleButtonHelper )
};
const handleButtonAbort = () => {
console.log(handleButtonAbort )
};
const handleButtonTeste4 = () => {
console.log(handleButtonTeste4 )
};
const handleTeste56 = () => {
console.log(handleTeste56 )
};
const handleButtonMarcel = () => {
console.log(handleButtonMarcel )
};
const handleButtonMarcel4123 = () => {
console.log(handleButtonMarcel4123 )
};
const handleButtomRomulo = () => {
console.log(handleButtomRomulo )
};



return (
        <ProductCard    >
    <ButtonTeste
        ghost
        type='primary'
        size='small'
        onClick={handleButtonTeste}>
            Button
    </ButtonTeste>
    <ButtonHelper
        type='primary'
        size='small'
        onClick={handleButtonHelper}>
            Button
    </ButtonHelper>
    <ButtonAbort
        type='primary'
        size='large'
        onClick={handleButtonAbort}>
            Button
    </ButtonAbort>
    <Vector src={VectorImage} />
    <ChooseALocationVector2 src={ChooseALocationVector2Image} />
    <ChooseALocationVector1 src={ChooseALocationVector1Image} />
    <ChooseALocationVector src={ChooseALocationVectorImage} />
    <ButtonTeste4
        type='primary'
        size='large'
        onClick={handleButtonTeste4}>
            Button
    </ButtonTeste4>
    <Teste56
        type='primary'
        size='large'
        onClick={handleTeste56}>
            Button
    </Teste56>
    <ButtonMarcel
        ghost
        danger
        type='primary'
        size='large'
        onClick={handleButtonMarcel}>
            Button
    </ButtonMarcel>
    <ButtonMarcel4123
        ghost
        danger
        type='primary'
        size='large'
        onClick={handleButtonMarcel4123}>
            Button
    </ButtonMarcel4123>
    <ButtomRomulo
        ghost
        danger
        type='primary'
        size='large'
        onClick={handleButtomRomulo}>
            Button
    </ButtomRomulo>
</ProductCard>

    )

}

export default ProductCardPage

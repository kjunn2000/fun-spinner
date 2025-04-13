import React from 'react';
import SplitText from '../component/SplitText/SplitText';


const HomePage = () => {

    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    };
    return (
        <div>
            <h1 style={{ color: 'white !important', textAlign: 'center', fontFamily: 'Arial, sans-serif', fontSize: '8rem' }}>
                4 BAO
            </h1>

            <SplitText
                text="Happy 25 years old birthday ! I love you so much !"
                delay={150}
                animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
                onLetterAnimationComplete={handleAnimationComplete}
            />
        </div>
    );
};

export default HomePage;
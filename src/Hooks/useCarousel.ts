import { useState, useEffect } from "react";

export function useCarousel(totalImagens: number, intervalo = 3000) {
    const [imagemAtual, setImagemAtual] = useState(0);
    const [animando, setAnimando] = useState(false);

    function avancar() {
        if (!animando) {
            setAnimando(true);
            setTimeout(() => {
                setImagemAtual((prev) => (prev + 1) % totalImagens);
                setAnimando(false);
            }, 500);
        }
    }

    function voltar() {
        if (!animando) {
            setAnimando(true);
            setTimeout(() => {
                setImagemAtual((prev) => (prev - 1 + totalImagens) % totalImagens);
                setAnimando(false);
            }, 500);
        }
    }

    useEffect(() => {
        const timer = setInterval(() => {
            if (!animando) {
                avancar();
            }
        }, intervalo);
        return () => clearInterval(timer);
    }, [intervalo, animando]);

    return { imagemAtual, avancar, voltar, animando };
}

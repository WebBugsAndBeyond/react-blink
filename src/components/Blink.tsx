import { useState, useEffect, ReactNode } from 'react';
import './Blink.css';


export type BlinkSmoothing = 'linear' | 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'step-start' | 'step-end';

export type BlinkProps = {
    timeout?: number;
    children: ReactNode,
    smoothing?: BlinkSmoothing;
}

export function resolveBlinkSmoothingClassName(smoothing: BlinkSmoothing): string {
    const classNameTemplate: string = `blink-component--${smoothing}`;
    return classNameTemplate;
}
export function resolveBlinkVisibleStateClassName(isVisible: boolean): string {
    const visibilityTemplate: string = isVisible ? 'visible' : 'invisible';
    const classNameTemplate: string = `blink-component--${visibilityTemplate}`;
    return classNameTemplate;
}

export default function Blink({
    children,
    timeout = 1000,
    smoothing = 'linear',
}: BlinkProps) {

    const [visible, setVisible] = useState<boolean>(false);
    const blinkCSSClasses: string[] = [
        'blink-component',
        resolveBlinkSmoothingClassName(smoothing),
        resolveBlinkVisibleStateClassName(visible),
    ];
    const blinkCSSClassName: string = blinkCSSClasses.join(' ');

    useEffect(() => {
        const timer: number = window.setTimeout(() => {
            setVisible(!visible);
        }, timeout);
        return () => window.clearTimeout(timer);
    }, [visible]);
    return (
        <span className={blinkCSSClassName}>
            {children}
        </span>
    );
}

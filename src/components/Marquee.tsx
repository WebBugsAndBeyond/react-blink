import { useEffect, useState } from 'react';

export type MarqueeProps = {
    timeout: number;
    message: string;
}

type MarqueeState = {
    offset: number;
    message: string;
}

function marqueeAnimationIterator(
    originalMessage: string,
    state: MarqueeState,
): MarqueeState {
    const messageLength: number = originalMessage.length;
    if (state.offset < (messageLength - 1)) {

        const newOffset: number = state.offset + 1;
        const messageSliceFront: string = originalMessage.substring(0, newOffset);
        const messageSliceBack: string = originalMessage.substring(newOffset);
        const newMessage: string = `${messageSliceBack}${messageSliceFront}`;
        return {
            ...state,
            offset: newOffset,
            message: newMessage,
        };
    } else {
        return {
            ...state,
            offset: 0,
            message: originalMessage,
        };
    }
}

export function Marquee(props: MarqueeProps) {
    const { timeout, message } = props;
    const [marqueeState, setMarqueeState] = useState<MarqueeState>({
        offset: 0,
        message: message,
    });
    
    useEffect(() => {
        const timerId = window.setTimeout(() => {
            const stateChange: MarqueeState = marqueeAnimationIterator(message, marqueeState);
            setMarqueeState(prevState => ({
                ...prevState,
                ...stateChange,
            }));
        }, timeout);

        return () => window.clearTimeout(timerId);
    }, [timeout, message, marqueeState]);

    return <span>{marqueeState.message}</span>
}

export function DocumentTitleMarquee(props: MarqueeProps) {
    const { timeout, message } = props;
    const [marqueeState, setMarqueeState] = useState<MarqueeState>({
        offset: 0,
        message,
    });
    useEffect(() => {
        const timerId = window.setTimeout(() => {
            const newState: MarqueeState = marqueeAnimationIterator(message, marqueeState);
            setMarqueeState(prevState => ({
                ...prevState,
                ...newState,
            }));
        }, timeout)
        return () => window.clearTimeout(timerId);
    }, [timeout, message, marqueeState]);
    useEffect(() => {
        document.title = marqueeState.message;
    }, [marqueeState]);
    return null;
}

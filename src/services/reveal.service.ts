import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown';

export class RevealService {
    public start(): void {
        const deck = new Reveal({
            controlsLayout: 'edges',
            slideNumber: 'c/t',
            hashOneBasedIndex: true,
            hash: true,
            rtl: true,
            display: 'grid',
            hideCursorTime: 1000,
            plugins: [Markdown],
        });

        // @ts-ignore
        deck.addKeyBinding('37', 'navigateLeft');
        // @ts-ignore
        deck.addKeyBinding('39', 'navigateRight');

        deck.initialize();
    }
}

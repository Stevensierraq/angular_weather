import { trigger, transition, style, query, stagger, animate } from '@angular/animations';


export const loadingAnimation = () => {
    return trigger('loading', [
        transition('* => *', [
            query(':enter', [
                stagger(100, [
                    animate('350ms', style({ opacity: 0 }))
                ])
            ], { optional: true }),
            query(':enter', [
                style({ opacity: 0 }),
                stagger(100, [
                    animate('350ms', style({ opacity: 1 }))
                ])
            ], { optional: true })
        ])
    ]);
}
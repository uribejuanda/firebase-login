import { trigger, state, animate, style, transition, query, stagger, group } from '@angular/animations';

export function routerTransition() {
    return slideToLeft();
}

function slideToLeft() {
    return trigger('routerTransition', [
        state('*', style({position: 'fixed', width: '100%'}) ),
        transition(':enter', [  // Alias for 'void => *'
            query('button', style({ opacity: 0 }), { optional: true }),
            query(':self', style({ transform: 'translateX(100%)'})),

            query(':self',
                animate('0.5s ease-in-out',
                    style({transform: 'translateX(0%)'})
                )
            ),
            query('button',
                animate('0.6s ease-in-out',
                    style({opacity: '*'})
                ),
                { optional: true }
            )
        ]),
        transition(':leave', [  // Alias for '* => void'
            style({transform: 'translateX(0%)'}),
            animate('0.5s ease-in-out',
                style({transform: 'translateX(-100%)'})
            )
        ])
    ]);
}

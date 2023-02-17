import {
  interval,
  of,
  concat,
  from,
  forkJoin,
  merge,
  combineLatest,
} from 'rxjs';
import {
  combineAll,
  concatMap,
  finalize,
  last,
  map,
  mergeMap,
  take,
} from 'rxjs/operators';

// when source never completes, any subsequent observables never run
/* concat([of(console.log('edp1')), of(console.log('edp2'))])
  .pipe(
    take(1),
    mergeMap(() => of(console.log('updateItems'))),
    mergeMap(() => of(console.log('updateItems1')))
  )
  .subscribe(() => console.log('END')); */

/* concat([of(console.log('edp1')), of(console.log('edp2'))])
  .pipe(
    map(() =>
      concat([
        of(console.log('updateItems')),
        of(console.log('updateCart')),
      ]).pipe(last())
    )
  )
  .subscribe(() => console.log('END')); */

/* forkJoin([
  of(console.log('edp1')),
  of(console.log('edp2'), 
  of(console.log('edp3')))
])
  .pipe(
    mergeMap(() => of(console.log('updateItems'))),
    mergeMap(() => of(console.log('updateItems1')))
  )
  .subscribe(() => console.log('END 3')); */

/* concat([of(console.log('edp1')), of(console.log('edp2'))])
  .pipe(
    map(() =>
      concat([
        of(console.log('updateItems')),
        of(console.log('updateCart')),
      ]).pipe(last())
    )
  )
  .subscribe(() => console.log('END')); */

combineLatest([
  of(console.log('edp1')),
  of(console.log('edp2')),
  of(console.log('edp3')),
])
  .pipe(
    mergeMap(() => of(console.log('updateItems'))),
    mergeMap(() => of(console.log('updateItems1')))
  )
  .subscribe(() => console.log('END 3'));

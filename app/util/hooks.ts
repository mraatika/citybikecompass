import { useEffect, useState } from 'react';
import * as Rx from 'rxjs';

export const useObservable = <T>(observable$: Rx.Observable<T>) => {
  const [value, setValue] = useState<T>();
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const subscription = observable$
      .pipe(Rx.share())
      .subscribe({ next: setValue, error: setError });

    return () => {
      subscription.unsubscribe();
    };
  }, [observable$]);

  return { value, error };
};
